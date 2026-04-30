import React, { useEffect, useRef } from 'react';
import { Renderer, Vec2, Flowmap, Geometry, Texture, Program, Mesh, Vec4 } from 'ogl';
import './NameAnimation.css';

const NameAnimation = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Cleanup any existing canvas before initializing
    while (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild);
    }

    const _size = [2048, 1638];
    const renderer = new Renderer({ dpr: 2, alpha: true });
    const gl = renderer.gl;
    
    // Make canvas fill the container
    gl.canvas.style.position = 'absolute';
    gl.canvas.style.top = '0';
    gl.canvas.style.left = '0';
    gl.canvas.style.width = '100%';
    gl.canvas.style.height = '100%';
    gl.canvas.style.zIndex = '1';
    
    containerRef.current.appendChild(gl.canvas);

    const vertex = `
      attribute vec2 uv;
      attribute vec2 position;
      varying vec2 vUv;
      void main() {
          vUv = uv;
          gl_Position = vec4(position, 0, 1);
      }
    `;
    
    const fragment = `
      precision highp float;
      precision highp int;
      uniform sampler2D tWater;
      uniform sampler2D tFlow;
      uniform float uTime;
      varying vec2 vUv;
      uniform vec4 res;
      uniform vec2 img;

      void main() {
        vec3 flow = texture2D(tFlow, vUv).rgb;
        vec2 uv = .5 * gl_FragCoord.xy / res.xy ;

        vec2 myUV = (uv - vec2(0.5))*res.zw + vec2(0.5);
        myUV -= flow.xy * (0.15 * 1.2);

        vec2 myUV2 = (uv - vec2(0.5))*res.zw + vec2(0.5);
        myUV2 -= flow.xy * (0.125 * 1.2);

        vec2 myUV3 = (uv - vec2(0.5))*res.zw + vec2(0.5);
        myUV3 -= flow.xy * (0.10 * 1.4);

        vec3 tex = texture2D(tWater, myUV).rgb;
        vec3 tex2 = texture2D(tWater, myUV2).rgb;
        vec3 tex3 = texture2D(tWater, myUV3).rgb;

        gl_FragColor = vec4(tex.r, tex2.g, tex3.b, 1.0);
      }
    `;

    let aspect = 1;
    const mouse = new Vec2(-1);
    const velocity = new Vec2();
    let animationFrameId;
    
    const flowmap = new Flowmap(gl, {
      falloff: 0.3,
      dissipation: 0.92,
      alpha: 0.5
    });

    const geometry = new Geometry(gl, {
      position: {
        size: 2,
        data: new Float32Array([-1, -1, 3, -1, -1, 3])
      },
      uv: { size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) }
    });
    
    const texture = new Texture(gl, {
      minFilter: gl.LINEAR,
      magFilter: gl.LINEAR
    });
    
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = () => (texture.image = img);
    // User's provided image
    img.src = "https://robindelaporte.fr/codepen/bg3.jpg";

    function resize() {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      
      gl.canvas.width = width * 2.0;
      gl.canvas.height = height * 2.0;

      let a1, a2;
      const imageAspect = _size[1] / _size[0];
      if (height / width < imageAspect) {
        a1 = 1;
        a2 = height / width / imageAspect;
      } else {
        a1 = width / height * imageAspect;
        a2 = 1;
      }
      
      if (mesh) {
        mesh.program.uniforms.res.value = new Vec4(width, height, a1, a2);
      }

      renderer.setSize(width, height);
      aspect = width / height;
    }

    let a1 = 1, a2 = 1;
    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        tWater: { value: texture },
        res: { value: new Vec4(window.innerWidth, window.innerHeight, a1, a2) },
        img: { value: new Vec2(_size[1], _size[0]) },
        tFlow: flowmap.uniform
      }
    });
    
    const mesh = new Mesh(gl, { geometry, program });

    window.addEventListener("resize", resize, false);
    resize();

    const isTouchCapable = "ontouchstart" in window;
    if (isTouchCapable) {
      window.addEventListener("touchstart", updateMouse, false);
      window.addEventListener("touchmove", updateMouse, { passive: false });
    } else {
      window.addEventListener("mousemove", updateMouse, false);
    }
    
    let lastTime;
    const lastMouse = new Vec2();
    
    function updateMouse(e) {
      if (!containerRef.current) return;
      
      let x = e.x;
      let y = e.y;
      
      if (e.changedTouches && e.changedTouches.length) {
        x = e.changedTouches[0].pageX;
        y = e.changedTouches[0].pageY;
      }
      if (x === undefined) {
        x = e.pageX;
        y = e.pageY;
      }
      
      mouse.set(x / gl.renderer.width, 1.0 - y / gl.renderer.height);
      
      if (!lastTime) {
        lastTime = performance.now();
        lastMouse.set(x, y);
      }

      const deltaX = x - lastMouse.x;
      const deltaY = y - lastMouse.y;
      lastMouse.set(x, y);

      const time = performance.now();
      const delta = Math.max(10.4, time - lastTime);
      lastTime = time;
      
      velocity.x = deltaX / delta;
      velocity.y = deltaY / delta;
      velocity.needsUpdate = true;
    }

    function update(t) {
      animationFrameId = requestAnimationFrame(update);
      if (!velocity.needsUpdate) {
        mouse.set(-1);
        velocity.set(0);
      }
      velocity.needsUpdate = false;
      flowmap.aspect = aspect;
      flowmap.mouse.copy(mouse);
      flowmap.velocity.lerp(velocity, velocity.len ? 0.15 : 0.1);
      flowmap.update();
      program.uniforms.uTime.value = t * 0.01;
      renderer.render({ scene: mesh });
    }
    
    animationFrameId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("resize", resize);
      if (isTouchCapable) {
        window.removeEventListener("touchstart", updateMouse);
        window.removeEventListener("touchmove", updateMouse);
      } else {
        window.removeEventListener("mousemove", updateMouse);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="name-animation-wrapper">
      <div className="ogl-container" ref={containerRef}></div>
      <div className="mask">
        {children}
      </div>
    </div>
  );
};

export default NameAnimation;

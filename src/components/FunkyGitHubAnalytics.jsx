import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GitCommit, ExternalLink, TrendingUp, Calendar, Zap } from 'lucide-react';
import './FunkyGitHubAnalytics.css';

const TECH_BADGES = [
  { name: 'REACT 19', bg: '#0284C7', text: '#FFFFFF', icon: '⚛' },
  { name: 'NEXT.JS 14', bg: '#18181B', text: '#FFFFFF', icon: '▲' },
  { name: 'SPRING BOOT', bg: '#16A34A', text: '#FFFFFF', icon: '🍃' },
  { name: 'NODE.JS', bg: '#15803D', text: '#FFFFFF', icon: '⬢' },
  { name: 'MONGODB', bg: '#059669', text: '#FFFFFF', icon: '🍃' },
  { name: 'POSTGRESQL', bg: '#2563EB', text: '#FFFFFF', icon: '🐘' },
  { name: 'AWS', bg: '#D97706', text: '#FFFFFF', icon: '☁' },
  { name: 'DOCKER', bg: '#0284C7', text: '#FFFFFF', icon: '🐋' },
  { name: 'KUBERNETES', bg: '#3B82F6', text: '#FFFFFF', icon: '☸' },
  { name: 'OPENAI API', bg: '#7C3AED', text: '#FFFFFF', icon: '🤖' }
];

const GITHUB_USERNAME = 'shaikazeem2001';

const FunkyGitHubAnalytics = () => {
  const [contributions, setContributions] = useState([]);
  const [totalYear, setTotalYear] = useState(287);
  const [loading, setLoading] = useState(true);
  const [hoveredPoint, setHoveredPoint] = useState(null);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`);
        if (res.ok) {
          const data = await res.json();
          if (data && data.contributions) {
            setTotalYear(data.total?.lastYear || 287);
            // Slice the last 30 days for the graph
            const last30 = data.contributions.slice(-30);
            setContributions(last30);
          }
        }
      } catch (err) {
        console.error('Failed to fetch GitHub contributions:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, []);

  // Default fallback data matching the reference image if API is slow
  const dataToRender = contributions.length > 0 ? contributions : [
    { date: '2026-09-09', count: 0 }, { date: '2026-09-10', count: 0 },
    { date: '2026-09-11', count: 0 }, { date: '2026-09-12', count: 0 },
    { date: '2026-09-13', count: 0 }, { date: '2026-09-14', count: 0 },
    { date: '2026-09-15', count: 3 }, { date: '2026-09-16', count: 0 },
    { date: '2026-09-17', count: 6 }, { date: '2026-09-18', count: 0 },
    { date: '2026-09-19', count: 12 }, { date: '2026-09-20', count: 9 },
    { date: '2026-09-21', count: 2 }, { date: '2026-09-22', count: 2 },
    { date: '2026-09-23', count: 0 }, { date: '2026-09-24', count: 0 },
    { date: '2026-09-25', count: 0 }, { date: '2026-09-26', count: 5 },
    { date: '2026-09-27', count: 2 }, { date: '2026-09-28', count: 3 },
    { date: '2026-09-29', count: 1 }, { date: '2026-09-30', count: 0 },
    { date: '2026-10-01', count: 0 }, { date: '2026-10-02', count: 1 },
    { date: '2026-10-03', count: 1 }, { date: '2026-10-04', count: 0 },
    { date: '2026-10-05', count: 0 }, { date: '2026-10-06', count: 18 },
    { date: '2026-10-07', count: 7 }, { date: '2026-10-08', count: 0 }
  ];

  // Graph dimensions
  const svgWidth = 840;
  const svgHeight = 320;
  const paddingLeft = 55;
  const paddingRight = 30;
  const paddingTop = 30;
  const paddingBottom = 45;

  const chartWidth = svgWidth - paddingLeft - paddingRight;
  const chartHeight = svgHeight - paddingTop - paddingBottom;

  const maxCount = Math.max(18, ...dataToRender.map(d => d.count));
  const yTicks = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18];

  // Generate points
  const points = dataToRender.map((d, idx) => {
    const x = paddingLeft + (idx / (dataToRender.length - 1)) * chartWidth;
    const y = paddingTop + chartHeight - (d.count / maxCount) * chartHeight;
    const dayNumber = new Date(d.date).getDate();
    return { x, y, count: d.count, date: d.date, dayNumber, raw: d };
  });

  // Generate SVG path commands
  const pathD = points.reduce((acc, pt, i) => {
    if (i === 0) return `M ${pt.x},${pt.y}`;
    // Smooth Bezier curve control points
    const prev = points[i - 1];
    const cx1 = prev.x + (pt.x - prev.x) / 2;
    const cy1 = prev.y;
    const cx2 = prev.x + (pt.x - prev.x) / 2;
    const cy2 = pt.y;
    return `${acc} C ${cx1},${cy1} ${cx2},${cy2} ${pt.x},${pt.y}`;
  }, '');

  const areaD = `${pathD} L ${points[points.length - 1].x},${paddingTop + chartHeight} L ${points[0].x},${paddingTop + chartHeight} Z`;

  return (
    <section className="funky-github-section" id="github-analytics">
      <div className="github-section-container">

        {/* Top Technology Badges Bar */}
        <div className="tech-badges-row">
          {TECH_BADGES.map((tech, idx) => (
            <span 
              key={idx} 
              className="tech-badge-pill"
              style={{ backgroundColor: tech.bg, color: tech.text }}
            >
              <span className="badge-icon">{tech.icon}</span> {tech.name}
            </span>
          ))}
        </div>

        {/* Section Main Header */}
        <div className="github-analytics-header">
          <h2 className="github-analytics-title">
            <span className="bar-icon">📊</span> GitHub Analytics
          </h2>
          <div className="title-divider-line" />
        </div>

        {/* Activity Graph Card Container */}
        <div className="github-card-wrapper">
          {/* Sub Header Badge */}
          <div className="graph-sub-badge">
            <span className="chart-icon">📈</span> Contribution Activity Graph
          </div>

          <div className="github-chart-card">
            {/* Card Internal Title */}
            <h3 className="card-inner-title">Azeem Shaik's Contribution Graph</h3>

            {/* SVG Interactive Line Chart */}
            <div className="chart-svg-container">
              <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="github-line-chart-svg">
                <defs>
                  {/* Neon Green Glow Area Gradient */}
                  <linearGradient id="neonGreenGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#84CC16" stopOpacity="0.38" />
                    <stop offset="60%" stopColor="#84CC16" stopOpacity="0.10" />
                    <stop offset="100%" stopColor="#84CC16" stopOpacity="0.0" />
                  </linearGradient>

                  {/* Drop Shadow filter for line */}
                  <filter id="glowShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Y-Axis Label */}
                <text 
                  x={-svgHeight / 2} 
                  y={18} 
                  transform="rotate(-90)" 
                  className="axis-title-label"
                  textAnchor="middle"
                >
                  Contributions
                </text>

                {/* X-Axis Label */}
                <text 
                  x={paddingLeft + chartWidth / 2} 
                  y={svgHeight - 8} 
                  className="axis-title-label"
                  textAnchor="middle"
                >
                  Days
                </text>

                {/* Horizontal Dotted Gridlines & Y-Axis Labels */}
                {yTicks.map((val) => {
                  const yPos = paddingTop + chartHeight - (val / maxCount) * chartHeight;
                  return (
                    <g key={val} className="grid-group">
                      <line 
                        x1={paddingLeft} 
                        y1={yPos} 
                        x2={paddingLeft + chartWidth} 
                        y2={yPos} 
                        className="grid-line-dotted" 
                      />
                      <text x={paddingLeft - 12} y={yPos + 4} className="y-axis-tick" textAnchor="end">
                        {val}
                      </text>
                    </g>
                  );
                })}

                {/* Area Gradient Fill */}
                <path d={areaD} fill="url(#neonGreenGradient)" />

                {/* Line Graph */}
                <path d={pathD} className="chart-neon-line" filter="url(#glowShadow)" />

                {/* X-Axis Ticks (Days) */}
                {points.map((pt, i) => (
                  <text 
                    key={i} 
                    x={pt.x} 
                    y={paddingTop + chartHeight + 22} 
                    className="x-axis-tick" 
                    textAnchor="middle"
                  >
                    {pt.dayNumber}
                  </text>
                ))}

                {/* Data Points / Circular Dots */}
                {points.map((pt, i) => (
                  <circle
                    key={i}
                    cx={pt.x}
                    cy={pt.y}
                    r={hoveredPoint?.date === pt.date ? "6" : "4"}
                    className={`chart-data-dot ${hoveredPoint?.date === pt.date ? 'active' : ''}`}
                    onMouseEnter={() => setHoveredPoint(pt)}
                    onMouseLeave={() => setHoveredPoint(null)}
                  />
                ))}
              </svg>

              {/* Hover Tooltip Overlay */}
              {hoveredPoint && (
                <div 
                  className="chart-tooltip-popup"
                  style={{
                    left: `${(hoveredPoint.x / svgWidth) * 100}%`,
                    top: `${(hoveredPoint.y / svgHeight) * 100}%`
                  }}
                >
                  <span className="tooltip-date">{hoveredPoint.date}</span>
                  <span className="tooltip-count">✦ {hoveredPoint.count} Contributions</span>
                </div>
              )}
            </div>

            {/* Bottom Summary Stats & Direct Link */}
            <div className="github-stats-footer">
              <div className="stat-pill">
                <GitCommit size={16} className="stat-icon" />
                <span className="stat-label">Total (Last Year):</span>
                <span className="stat-val">{totalYear}</span>
              </div>
              
              <div className="stat-pill">
                <Zap size={16} className="stat-icon" />
                <span className="stat-label">Peak Single Day:</span>
                <span className="stat-val">18 Commits</span>
              </div>

              <a 
                href={`https://github.com/${GITHUB_USERNAME}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="github-profile-link-btn"
              >
                View Full GitHub Profile <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FunkyGitHubAnalytics;

import React from "react";
import "./Hobbies.css";
const Hobbies = () => {
  return (
    <div>
      <div className="heading">
        <h1 className="main-heading">Hello again</h1> 
        
        <h1 className="second-heading">These are some of my hobbies</h1>
      </div>
      <div className="hobbie-card">
        <div className="card">
          <img src="/books.jpeg" alt="" />
          <div className="text-overlay">Fictional Books</div>
        </div>
        <div className="card">
          <img src="/pc.jpeg" alt="" />
          <div className="text-overlay">Computer Science</div>
        </div>
        <div className="card">
          <img src="/games.jpeg" alt="" />
          <div className="text-overlay">Playing Games</div>
        </div>
        <div className="card">
          <img src="/movie.jpeg" alt="" />
          <div className="text-overlay">Watching Movies</div>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;

import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1>Welcome to <span>QuizMaster Pro</span></h1>
        <p>Play exciting quizzes, challenge your friends, and win amazing prizes!</p>
        <button>Register</button>
      </div>
    </section>
  );
};

export default Home;

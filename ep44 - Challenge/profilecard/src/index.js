import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="perfil.jpg" alt="Foto Perfil" className="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Ricardo Augusto</h1>
      <p>
        Frontend React Developer | Estudante na Fatec. Quando estou de boa,
        gamer profissional, gosto bastante de Genshin Impact e comer muito.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill
        background={{ backgroundColor: "darkblue", color: "white" }}
        skill="React"
        emoji="💪"
      />
      <Skill
        background={{ backgroundColor: "yellow" }}
        skill="JavaScript"
        emoji="🤓"
      />
      <Skill
        background={{ backgroundColor: "lightgreen" }}
        skill="Node.js"
        emoji="🧠"
      />
      <Skill
        background={{ backgroundColor: "blue", color: "white" }}
        skill="Docker"
        emoji="🐳"
      />
      <Skill
        background={{ backgroundColor: "maroon", color: "white" }}
        skill="Git e Github"
        emoji="🐈‍⬛"
      />
    </div>
  );
}

function Skill(props) {
  return (
    <div style={props.background} className="skill">
      <p>{props.skill}</p>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

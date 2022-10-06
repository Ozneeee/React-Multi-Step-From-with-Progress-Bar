import "./App.css";
import React, { useState, useEffect } from "react";
import formulaire from "./data";

function App() {
  const [progress, setProgress] = useState(-12.5);
  const [heures, setHeures] = useState(0);
  const [user, setUser] = useState({
    temps: "",
    produit: "",
    endroit: "",
    genre: "",
    artiste: "",
  });

  console.log(user);

  const min = 0;
  const max = 50;

  const removeProgress = (e) => {
    e.preventDefault();
    setProgress(progress - 12.5);
  };

  const addProgress = (e) => {
    e.preventDefault();
    setProgress(progress + 12.5);
    if (pageFormulaire === page2) {
      setProduction();
    }
    if (pageFormulaire === page3) {
      setEndroit();
    }
    if (pageFormulaire === page4) {
      setGenres();
    }
  };

  const page1 = formulaire.Question1;
  const page2 = formulaire.Question2;
  const page3 = formulaire.Question3;
  const page4 = formulaire.Question4;
  const page5 = formulaire.Question5;
  const page6 = formulaire.Question6;
  const [pageFormulaire, setPageFormulaire] = useState(page1);

  useEffect(() => {
    const form1 = document.querySelector(".form1");
    const form2 = document.querySelector(".form2");
    const form3 = document.querySelector(".form3");
    const form4 = document.querySelector(".form4");
    const form5 = document.querySelector(".form5");

    if (progress === -12.5) {
      form1.style.visibility = "hidden";
      form3.style.visibility = "hidden";
      form3.style.visibility = "hidden";
      form4.style.visibility = "hidden";
      form5.style.visibility = "hidden";
    }
    if (progress === 0) {
      setPageFormulaire(page1);
      form1.style.visibility = "visible";
      form2.style.visibility = "hidden";
      form3.style.visibility = "hidden";
      form4.style.visibility = "hidden";
      form5.style.visibility = "hidden";
    }
    if (progress === 12.5) {
      setPageFormulaire(page2);
      form1.style.visibility = "hidden";
      form2.style.visibility = "visible";
      form3.style.visibility = "hidden";
      form4.style.visibility = "hidden";
      form5.style.visibility = "hidden";
    }
    if (progress === 25) {
      setPageFormulaire(page3);
      form1.style.visibility = "hidden";
      form2.style.visibility = "hidden";
      form3.style.visibility = "visible";
      form4.style.visibility = "hidden";
      form5.style.visibility = "hidden";
    }
    if (progress === 37.5) {
      setPageFormulaire(page4);
      form1.style.visibility = "hidden";
      form2.style.visibility = "hidden";
      form3.style.visibility = "hidden";
      form4.style.visibility = "visible";
      form5.style.visibility = "hidden";
    }
    if (progress === 50) {
      setPageFormulaire(page5);
      form1.style.visibility = "hidden";
      form2.style.visibility = "hidden";
      form3.style.visibility = "hidden";
      form4.style.visibility = "hidden";
      form5.style.visibility = "visible";
    }
    if (progress > 50) {
      form1.style.visibility = "hidden";
      form3.style.visibility = "hidden";
      form3.style.visibility = "hidden";
      form4.style.visibility = "hidden";
      form5.style.visibility = "hidden";
    }
  });

  const changeHeures = (e) => {
    const form1Inp = document.querySelector(".form1Inp");
    setHeures(form1Inp.value);
    setUser((prevUser) => ({ ...prevUser, [form1Inp.name]: form1Inp.value }));
  };

  const setArtiste = (e) => {
    e.preventDefault();
    const artiste = document.querySelector(".artiste");
    setHeures(artiste.value);
    setUser((prevUser) => ({ ...prevUser, [artiste.name]: artiste.value }));
    SendForm();
  };

  const setProduction = () => {
    const Choix1 = document.getElementById("Choix1prod");
    const Choix2 = document.getElementById("Choix2prod");
    const Choix3 = document.getElementById("Choix3prod");

    if (document.getElementById("Choix1prod").checked) {
      setUser((prevUser) => ({
        ...prevUser,
        [Choix1.name]: "profesionnellement",
      }));
    }
    if (document.getElementById("Choix2prod").checked) {
      setUser((prevUser) => ({
        ...prevUser,
        [Choix2.name]: "ludiquement",
      }));
    }
    if (document.getElementById("Choix3prod").checked) {
      setUser((prevUser) => ({ ...prevUser, [Choix3.name]: "pas" }));
    }
  };

  const setEndroit = () => {
    const Choix1 = document.getElementById("Choix1endroit");
    const Choix2 = document.getElementById("Choix2endroit");
    const Choix3 = document.getElementById("Choix3endroit");
    const Choix4 = document.getElementById("Choix4endroit");
    const Choix5 = document.getElementById("Choix5endroit");

    if (document.getElementById("Choix1endroit").checked) {
      setUser((prevUser) => ({ ...prevUser, [Choix1.name]: "dans ton lit" }));
    }
    if (document.getElementById("Choix2endroit").checked) {
      setUser((prevUser) => ({
        ...prevUser,
        [Choix2.name]: "dans les transports",
      }));
    }
    if (document.getElementById("Choix3endroit").checked) {
      setUser((prevUser) => ({ ...prevUser, [Choix3.name]: "au travail" }));
    }
    if (document.getElementById("Choix4endroit").checked) {
      setUser((prevUser) => ({
        ...prevUser,
        [Choix4.name]: "durant le sport",
      }));
    }
    if (document.getElementById("Choix5endroit").checked) {
      setUser((prevUser) => ({ ...prevUser, [Choix5.name]: "en soiree" }));
    }
  };

  const setGenres = () => {
    const Choix1 = document.getElementById("Choix1genre");
    const Choix2 = document.getElementById("Choix2genre");
    const Choix3 = document.getElementById("Choix3genre");
    const Choix4 = document.getElementById("Choix4genre");
    const Choix5 = document.getElementById("Choix5genre");
    const Choix6 = document.getElementById("Choix6genre");
    const Choix7 = document.getElementById("Choix7genre");

    if (document.getElementById("Choix1genre").checked) {
      setUser((prevUser) => ({ ...prevUser, [Choix1.name]: "le Rap" }));
    }
    if (document.getElementById("Choix2genre").checked) {
      setUser((prevUser) => ({ ...prevUser, [Choix2.name]: "le Rock" }));
    }
    if (document.getElementById("Choix3genre").checked) {
      setUser((prevUser) => ({ ...prevUser, [Choix3.name]: "le RnB" }));
    }
    if (document.getElementById("Choix4genre").checked) {
      setUser((prevUser) => ({ ...prevUser, [Choix4.name]: "le Lofi" }));
    }
    if (document.getElementById("Choix5genre").checked) {
      setUser((prevUser) => ({
        ...prevUser,
        [Choix5.name]: "la variete francaise",
      }));
    }
    if (document.getElementById("Choix6genre").checked) {
      setUser((prevUser) => ({ ...prevUser, [Choix6.name]: "le Jazz" }));
    }
    if (document.getElementById("Choix7genre").checked) {
      setUser((prevUser) => ({ ...prevUser, [Choix7.name]: "le Classique" }));
    }
  };

  // start du formulaire

  const startForm = () => {
    const startBox = document.querySelector(".start-box");
    const showFrom = document.querySelector(".form-container");
    startBox.style.display = "none";
    showFrom.style.visibility = "visible";
    setProgress(0);
  };

  const SendForm = () => {
    setProgress(50.01);
    setPageFormulaire(page6);
    const reponses = document.querySelector(".reponses");
    reponses.style.visibility = "visible";
  };

  return (
    <div className="App">
      <div className="progress-bar">
        <div
          className="progress-bar-active"
          style={{ width: `${progress}vw` }}
        ></div>
        <li className="icones"></li>
        <li className="icones"></li>
        <li className="icones"></li>
        <li className="icones"></li>
        <li className="icones"></li>
      </div>

      <div className="start-box">
        <h3>Aide nous à ravir tes oreilles</h3>
        <div className="start-btn" onClick={startForm}>
          COMMENCEZ
        </div>
      </div>

      <div className="form-container">
        <h3>{pageFormulaire.title}</h3>
        <p className="nbchoix">{pageFormulaire.choix}</p>
        <form className="form1">
          <input
            className="form1Inp"
            type="range"
            min="0"
            max="24"
            name="temps"
            onChange={changeHeures}
          />
          <div className="tick-container">
            <span className="ticks"></span>
            <span className="ticks"></span>
            <span className="ticks"></span>
            <span className="ticks"></span>
            <span className="ticks"></span>
            <span className="ticks"></span>
            <span className="ticks"></span>
            <span className="ticks"></span>
            <span className="ticks"></span>
            <span className="ticks"></span>
            <span className="ticks"></span>
            <span className="ticks"></span>
            <span className="ticks"></span>
            <span className="ticks"></span>
            <span className="ticks"></span>
            <span className="ticks"></span>
            <span className="ticks"></span>
            <span className="ticks"></span>
            <span className="ticks"></span>
            <span className="ticks"></span>
            <span className="ticks"></span>
            <span className="ticks"></span>
            <span className="ticks"></span>
            <span className="ticks"></span>
            <span className="ticks"></span>
          </div>
          <p className="nbHeures">{heures}h</p>

          <button
            type="submit"
            value="Precedant"
            className="precedant"
            onClick={
              progress <= min ? (e) => e.preventDefault() : removeProgress
            }
            style={
              progress <= min ? { cursor: "not-allowed", opacity: 0.2 } : null
            }
          >
            Précédant
          </button>

          <button
            type="submit"
            value="Suivant"
            className="suivant"
            onClick={progress >= max ? (e) => e.preventDefault() : addProgress}
            style={
              progress >= max ? { cursor: "not-allowed", opacity: 0.2 } : null
            }
          >
            Valider
          </button>
        </form>

        <form className="form2">
          <div className="inp-container">
            <input type="radio" id="Choix1prod" name="produit" />
            <input type="radio" id="Choix2prod" name="produit" />
            <input type="radio" id="Choix3prod" name="produit" />
          </div>
          <div className="label-container">
            <p>Oui, de manière profressionnelle</p>
            <p>Oui, de temps en temps pour m'amuser</p>
            <p>Non.</p>
          </div>
          <button
            type="submit"
            value="Precedant"
            className="precedant"
            onClick={
              progress <= min ? (e) => e.preventDefault() : removeProgress
            }
            style={
              progress <= min ? { cursor: "not-allowed", opacity: 0.2 } : null
            }
          >
            Précédant
          </button>

          <button
            type="submit"
            value="Suivant"
            className="suivant"
            onClick={progress >= max ? (e) => e.preventDefault() : addProgress}
            style={
              progress >= max ? { cursor: "not-allowed", opacity: 0.2 } : null
            }
          >
            Valider
          </button>
        </form>

        <form className="form3">
          <div className="inp-container-form3">
            <input type="radio" id="Choix1endroit" name="endroit" />
            <input type="radio" id="Choix2endroit" name="endroit" />
            <input type="radio" id="Choix3endroit" name="endroit" />
            <input type="radio" id="Choix4endroit" name="endroit" />
            <input type="radio" id="Choix5endroit" name="endroit" />
          </div>
          <div className="label-container-form3">
            <p>Dans mon lit</p>
            <p>Dans les transports</p>
            <p>En travaillant</p>
            <p>Durant le sport</p>
            <p>En soirée</p>
          </div>
          <button
            type="submit"
            value="Precedant"
            className="precedant"
            onClick={
              progress <= min ? (e) => e.preventDefault() : removeProgress
            }
            style={
              progress <= min ? { cursor: "not-allowed", opacity: 0.2 } : null
            }
          >
            Précédant
          </button>

          <button
            type="submit"
            value="Suivant"
            className="suivant"
            onClick={progress >= max ? (e) => e.preventDefault() : addProgress}
            style={
              progress >= max ? { cursor: "not-allowed", opacity: 0.2 } : null
            }
          >
            Valider
          </button>
        </form>

        <form className="form4">
          <div className="inp-container-form4">
            <input type="radio" id="Choix1genre" name="genre" />
            <input type="radio" id="Choix2genre" name="genre" />
            <input type="radio" id="Choix3genre" name="genre" />
            <input type="radio" id="Choix4genre" name="genre" />
            <input type="radio" id="Choix5genre" name="genre" />
            <input type="radio" id="Choix6genre" name="genre" />
            <input type="radio" id="Choix7genre" name="genre" />
          </div>
          <div className="label-container-form4">
            <p>Rap</p>
            <p>Rock n Roll</p>
            <p>RnB</p>
            <p>Lofi</p>
            <p>Chanson Française</p>
            <p>Jazz</p>
            <p>Classique</p>
          </div>
          <button
            type="submit"
            value="Precedant"
            className="precedant"
            onClick={
              progress <= min ? (e) => e.preventDefault() : removeProgress
            }
            style={
              progress <= min ? { cursor: "not-allowed", opacity: 0.2 } : null
            }
          >
            Précédant
          </button>

          <button
            type="submit"
            value="Suivant"
            className="suivant"
            onClick={progress >= max ? (e) => e.preventDefault() : addProgress}
            style={
              progress >= max ? { cursor: "not-allowed", opacity: 0.2 } : null
            }
          >
            Valider
          </button>
        </form>

        <form className="form5">
          <textarea
            className="artiste"
            name="artiste"
            id="artiste"
            cols="30"
            rows="1"
          ></textarea>

          <button
            type="submit"
            value="Precedant"
            className="precedant"
            onClick={
              progress <= min ? (e) => e.preventDefault() : removeProgress
            }
            style={
              progress <= min ? { cursor: "not-allowed", opacity: 0.2 } : null
            }
          >
            Précédant
          </button>

          <button
            type="submit"
            value="Terminer"
            className="suivant"
            style={{ animation: " changeBg 5s linear infinite" }}
            onClick={setArtiste}
          >
            Terminer
          </button>
        </form>

        <div className="reponses">
          <p>Tu passe {user.temps} heures par jour à écouter de la musique</p>
          <p>Tu produit {user.produit} de la musique</p>
          <p>Tu écoute le plus de musique {user.endroit}</p>
          <p>Ton style préféré est {user.genre}</p>
          <p>Tes artistes préférés sont {user.artiste}</p>
        </div>
      </div>
      <div className="mobile">
        <p className="warn-text">Ce site n est pas designer pour mobile.</p>
        <p className="sign">Ozne</p>
      </div>
    </div>
  );
}

export default App;

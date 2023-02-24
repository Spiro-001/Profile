import { useRef } from "react";
import "./App.css";

function App() {
  const firstCard = useRef(null);
  const secondCard = useRef(null);
  const thirdCard = useRef(null);
  const fourthCard = useRef(null);
  const fifthCard = useRef(null);

  const expandCards = () => {
    firstCard.current.style.transform =
      "translateX(170px) translateY(20px) rotate(-6deg)";
    secondCard.current.style.transform =
      "translateX(85px) translateY(2px) rotate(-3deg)";
    thirdCard.current.style.transform = "translateY(-6px)";
    fourthCard.current.style.transform =
      "translateX(-100px) translateY(3px) rotate(3deg)";
    fifthCard.current.style.transform =
      "translateX(-160px) translateY(4px) rotate(0deg)";
  };

  const compactCards = () => {
    firstCard.current.style.transform =
      "translateX(340px) translateY(2px) rotate(-2deg)";
    secondCard.current.style.transform =
      "translateX(169px) translateY(-1px) rotate(-1deg)";
    thirdCard.current.style.transform = "translateY(-2px)";
    fourthCard.current.style.transform =
      "translateX(-170px) translateY(-2px) rotate(2deg)";
    fifthCard.current.style.transform =
      "translateX(-338px) translateY(1px) rotate(3deg)";
  };

  const liftCard = (e) => {
    switch (e.target.id) {
      case "first":
        e.target.style.transform =
          "translateX(180px) translateY(-30px) rotate(-6deg)";
        break;
      case "second":
        e.target.style.transform =
          "translateX(85px) translateY(-40px) rotate(-3deg)";
        break;
      case "third":
        e.target.style.transform = "translateY(-40px)";
        break;
      case "fourth":
        e.target.style.transform =
          "translateX(-100px) translateY(-30px) rotate(3deg)";
        break;
      case "fifth":
        e.target.style.transform =
          "translateX(-160px) translateY(-34px) rotate(0deg)";
        break;
      default:
        console.log(e.target.id);
    }
  };

  const selectCard = (e) => {};

  return (
    <div className="main">
      <div
        className="cards"
        onMouseEnter={expandCards}
        onMouseLeave={compactCards}
      >
        <span
          className="card"
          id="first"
          ref={firstCard}
          onMouseEnter={liftCard}
          onMouseLeave={expandCards}
        >
          <span id="badge">About me</span>
        </span>
        <span
          className="card"
          id="second"
          ref={secondCard}
          onMouseEnter={liftCard}
          onMouseLeave={expandCards}
        >
          <span id="badge">Experience</span>
        </span>
        <span
          className="card"
          id="third"
          ref={thirdCard}
          onMouseEnter={liftCard}
          onMouseLeave={expandCards}
        >
          <span id="badge">Projects</span>
        </span>
        <span
          className="card"
          id="fourth"
          ref={fourthCard}
          onMouseEnter={liftCard}
          onMouseLeave={expandCards}
        >
          <span id="badge">Socials</span>
        </span>
        <span
          className="card"
          id="fifth"
          ref={fifthCard}
          onMouseEnter={liftCard}
          onMouseLeave={expandCards}
        >
          <p id="title">Hover here</p>
        </span>
      </div>
    </div>
  );
}

export default App;

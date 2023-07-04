import { useState } from "react";
import desktop from "./images/illustration-woman-online-desktop.svg";
import mobile from "./images/illustration-woman-online-mobile.svg";
import { question } from "./Question";
import SingleQuestion from "./SingleQuestion";

function App() {
  const [quests] = useState(question);

  return (
    <div className="container">
      <article>
        <picture>
          <source media="(max-width: 768px)" srcSet={desktop} />
          <img src={mobile} alt="mobile" />
        </picture>
      </article>

      <article>
        <h1>FAQ</h1>
        {quests.map((quest, index) => (
          <SingleQuestion key={index} {...quest} />
        ))}
      </article>
    </div>
  );
}

export default App;

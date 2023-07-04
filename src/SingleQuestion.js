import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

function SingleQuestion({ question, answer }) {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <div className="article-question">
        <article onClick={() => setIsShow(!isShow)}>
          <h2 className={`${isShow && "clicked"}`}>{question}</h2>
          {isShow ? <FaChevronUp className="icon" /> : <FaChevronDown className="icon" />}
        </article>
        {isShow && <p>{answer}</p>}
      </div>
    </>
  );
}

export default SingleQuestion;

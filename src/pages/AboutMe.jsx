import React from "react";

export default function AboutMe() {
  return (
    <div className="section">
      <h1>Про мене</h1>
      <h2>Хто я?</h2>
      <p>
        Я — початківець-розробник, який цікавиться створенням корисних програм,
        інтерфейсів та ігор, що роблять життя простішим і цікавішим.
      </p>
      <h2>Мої проєкти</h2>
      <h3>HTML + CSS</h3>
      <a
        href="https://github.com/SnrFlaks/html-css-landing"
        target="_blank"
        rel="noreferrer"
      >
        html-css-landing
      </a>
      <br />
      <a href="https://github.com/SnrFlaks/html-basic" target="_blank" rel="noreferrer">
        html-basic
      </a>

      <h3>JavaScript</h3>
      <a href="https://github.com/SnrFlaks/js-DOM1" target="_blank" rel="noreferrer">
        js-DOM1
      </a>
      <br />
      <a
        href="https://github.com/SnrFlaks/js-fetchFirstLab"
        target="_blank"
        rel="noreferrer"
      >
        js-fetchFirstLab
      </a>

      <h3>React</h3>
      <a
        href="https://github.com/SnrFlaks/react-spa-lab"
        target="_blank"
        rel="noreferrer"
      >
        react-spa-lab
      </a>
      <br />
      <a
        href="https://github.com/SnrFlaks/react-router-dom-lab"
        target="_blank"
        rel="noreferrer"
      >
        react-router-dom-lab
      </a>
    </div>
  );
}

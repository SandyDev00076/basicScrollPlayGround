import React, { useRef } from "react";
import * as basicScroll from "basicscroll";

import "./App.scss";

function App() {
  const block1 = useRef<HTMLDivElement>(null);
  const block2 = useRef<HTMLDivElement>(null);
  const block3 = useRef<HTMLDivElement>(null);

  basicScroll
    .create({
      elem: block1.current,
      from: 0,
      to: 400,
      props: {
        "--translateY1": {
          from: "0",
          to: "-200px",
          // @ts-ignore
          direct: true,
        },
      },
    })
    .start();

  basicScroll
    .create({
      elem: block2.current,
      from: 0,
      to: 400,
      props: {
        "--translateY2": {
          from: "0",
          to: "-600px",
          // @ts-ignore
          direct: true,
        },
      },
    })
    .start();

  basicScroll
    .create({
      elem: block3.current,
      from: 0,
      to: 400,
      props: {
        "--translateY3": {
          from: "0",
          to: "-900px",
          // @ts-ignore
          direct: true,
        },
      },
    })
    .start();

  return (
    <div className="App">
      <div className="block1" ref={block1} />
      <div className="block2" ref={block2} />
      <div className="block3" ref={block3} />
    </div>
  );
}

export default App;

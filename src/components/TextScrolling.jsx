import React from "react";
import Marquee from "react-fast-marquee";

const TextScrolling = () => {
  return (
    <div className="text-scroll-container">
      <Marquee 
        speed={50}
        gradient={false}
        pauseOnHover
      >
        <h1 className="scroll-text">
          Frontend Developer • Next.js • Web Developer • React.js •&nbsp;
        </h1>
        <h1 className="scroll-text">
          Frontend Developer • Next.js • Web Developer • React Developer •&nbsp;
        </h1>
      </Marquee>

      <style jsx>{`
        .text-scroll-container {
          width: 100%;
          height: 120px;
          display: flex;
          align-items: center;
          background: transparent;
          overflow: hidden;
        }
        .scroll-text {
          font-size: 5em;
          font-weight: 200;
          text-transform: uppercase;
          color: rgb(45, 45, 45);
          white-space: nowrap;
          padding: 0 1rem;
          user-select: none;
        }
      `}</style>
    </div>
  );
};

export default TextScrolling;

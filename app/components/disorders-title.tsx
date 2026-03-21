"use client";

import type { CSSProperties, MouseEvent } from "react";
import { useRef, useState } from "react";

const disorderLetters = [
  { char: "D" },
  { char: "i", className: "shift-up" },
  { char: "s", className: "tilt-left" },
  { char: "o" },
  { char: "r", className: "shift-down" },
  { char: "d", className: "tilt-right" },
  { char: "e" },
  { char: "r" },
  { char: "s", className: "italic-glyph" },
];

const magnitudeLetters = [
  { char: "M", className: "stretch-m" },
  { char: "A", className: "stretch-xs" },
  { char: "G", className: "stretch-xl" },
  { char: "N", className: "stretch-s" },
  { char: "I" },
  { char: "T", className: "stretch-xs" },
  { char: "U", className: "stretch-m" },
  { char: "D", className: "stretch-l" },
  { char: "E", className: "stretch-s" },
];

const baseDisorderMotion = disorderLetters.map(() => ({
  x: 0,
  y: 0,
  rotate: 0,
}));

const baseMagnitudeMotion = magnitudeLetters.map(() => ({
  scale: 1,
  y: 0,
}));

export default function DisordersTitle() {
  const disorderRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const magnitudeRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const [disorderMotion, setDisorderMotion] = useState(baseDisorderMotion);
  const [magnitudeMotion, setMagnitudeMotion] = useState(baseMagnitudeMotion);

  function handleDisorderMove(event: MouseEvent<HTMLSpanElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const pointerX = event.clientX - bounds.left;
    const pointerY = event.clientY - bounds.top;

    setDisorderMotion(
      disorderLetters.map((_, index) => {
        const letter = disorderRefs.current[index];

        if (!letter) {
          return { x: 0, y: 0, rotate: 0 };
        }

        const rect = letter.getBoundingClientRect();
        const centerX = rect.left - bounds.left + rect.width / 2;
        const centerY = rect.top - bounds.top + rect.height / 2;
        const deltaX = centerX - pointerX;
        const deltaY = centerY - pointerY;
        const distance = Math.hypot(deltaX, deltaY);
        const influence = Math.max(0, 1 - distance / 120);

        return {
          x: deltaX * 0.12 * influence,
          y: deltaY * 0.08 * influence,
          rotate: deltaX * 0.04 * influence,
        };
      }),
    );
  }

  function handleMagnitudeMove(event: MouseEvent<HTMLSpanElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const pointerX = event.clientX - bounds.left;

    setMagnitudeMotion(
      magnitudeLetters.map((_, index) => {
        const letter = magnitudeRefs.current[index];

        if (!letter) {
          return { scale: 1, y: 0 };
        }

        const rect = letter.getBoundingClientRect();
        const centerX = rect.left - bounds.left + rect.width / 2;
        const distance = Math.abs(pointerX - centerX);
        const influence = Math.max(0, 1 - distance / 130);

        return {
          scale: 1 + influence * 0.3,
          y: influence * -5,
        };
      }),
    );
  }

  function resetDisorderMotion() {
    setDisorderMotion(baseDisorderMotion);
  }

  function resetMagnitudeMotion() {
    setMagnitudeMotion(baseMagnitudeMotion);
  }

  return (
    <h1 className="hero-title disorder-logo" aria-label="Disorders of Magnitude">
      <span className="logo-stack">
        <span className="disorder-line">
          <span
            className="disorder-word"
            onMouseMove={handleDisorderMove}
            onMouseLeave={resetDisorderMotion}
          >
            {disorderLetters.map((letter, index) => {
              const style: CSSProperties = {
                transform: `translate3d(${disorderMotion[index].x}px, ${disorderMotion[index].y}px, 0) rotate(${disorderMotion[index].rotate}deg)`,
              };

              return (
                <span
                  className={`disorder-glyph${letter.className ? ` ${letter.className}` : ""}`}
                  key={`${letter.char}-${index}`}
                >
                  <span
                    className="disorder-motion"
                    ref={(node) => {
                      disorderRefs.current[index] = node;
                    }}
                    style={style}
                  >
                    {letter.char}
                  </span>
                </span>
              );
            })}
          </span>

          <span className="of-word">of</span>
        </span>

        <span
          className="magnitude-line"
          onMouseMove={handleMagnitudeMove}
          onMouseLeave={resetMagnitudeMotion}
        >
          {magnitudeLetters.map((letter, index) => {
            const style: CSSProperties = {
              transform: `translate3d(0, ${magnitudeMotion[index].y}px, 0) scale(${magnitudeMotion[index].scale})`,
            };

            return (
              <span
                className={`magnitude-char${letter.className ? ` ${letter.className}` : ""}`}
                key={`${letter.char}-${index}`}
              >
                <span
                  className="magnitude-motion"
                  ref={(node) => {
                    magnitudeRefs.current[index] = node;
                  }}
                  style={style}
                >
                  {letter.char}
                </span>
              </span>
            );
          })}
        </span>
      </span>
    </h1>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { SnakeGame, preventControlButtons } from "./SnakeGame";
import "./snake.css";
import { PlusSeparator } from "../ui/plus-separator";
import { Loader2 } from "lucide-react";

export default function SnakeScreen() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const boardRef = useRef<HTMLDivElement | null>(null);
  const startScreenRef = useRef<HTMLDivElement | null>(null);
  const scoreRef = useRef<HTMLDivElement | null>(null);
  const countdownRef = useRef<HTMLDivElement | null>(null);
  const gameRef = useRef<SnakeGame | null>(null);
  const [difficultyLabel, setDifficultyLabel] = useState("Normal");
  const [isMounted, setIsMounted] = useState(false);

  const syncGameUi = (isPlaying: boolean) => {
    const rightImage = document.getElementById("right-image");

    if (isPlaying) {
      startScreenRef.current?.classList.add("hidden");
      rightImage?.classList.add("right-image-moved");
      scoreRef.current?.classList.remove("hidden");
      countdownRef.current?.classList.add("hidden");
      return;
    }

    startScreenRef.current?.classList.remove("hidden");
    rightImage?.classList.remove("right-image-moved");
    scoreRef.current?.classList.add("hidden");
    countdownRef.current?.classList.add("hidden");
  };

  const changeDifficulty = () => {
    const game = gameRef.current;

    if (!game) {
      return;
    }

    switch (game.difficulty) {
      case 1:
        setDifficultyLabel("Normal");
        game.difficulty = 2;
        break;
      case 2:
        setDifficultyLabel("Hard");
        game.difficulty = 3;
        break;
      case 3:
        setDifficultyLabel("Easy");
        game.difficulty = 1;
        break;
    }
  };

  useEffect(() => {
    setIsMounted(false);
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const game = new SnakeGame(canvas);
    gameRef.current = game;
    game.resetGame();
    setIsMounted(true);

    const handleEscape = (event: KeyboardEvent) => {
      if (event.code !== "Escape") {
        return;
      }

      event.preventDefault();
      const currentGame = gameRef.current;

      if (!currentGame) {
        return;
      }

      currentGame.gameOver = true;
      currentGame.resetGame();
      syncGameUi(false);
    };

    const handleMainScroll = () => {
      const currentGame = gameRef.current;

      if (currentGame) {
        currentGame.gameOver = true;
        currentGame.resetGame();
      }

      syncGameUi(false);
    };

    const main = document.querySelector("main");

    window.addEventListener("keydown", handleEscape, false);
    main?.addEventListener("scroll", handleMainScroll, false);

    return () => {
      window.removeEventListener("keydown", handleEscape, false);
      main?.removeEventListener("scroll", handleMainScroll, false);
      window.removeEventListener("keydown", preventControlButtons, false);
      game.destroy();
      gameRef.current = null;
    };
  }, []);

  const startGame = () => {
    const game = gameRef.current;
    if (!game || !isMounted) {
      return;
    }

    syncGameUi(true);
    window.addEventListener("keydown", preventControlButtons, false);
    game.startGame();
  };

  return (
    <div className="border-separator/10 border-y relative w-full">
      <div className="inner relative flex flex-col items-center border-separator/10 border-x px-2 py-28">
        <PlusSeparator
          main={{
            className: "-top-[4px]",
          }}
          position={["top-left", "top-right"]}
        />
        <PlusSeparator
          main={{
            className: "-bottom-[4px]",
          }}
          position={["bottom-left", "bottom-right"]}
        />

        <div ref={boardRef} className="board">
          {!isMounted ? (
            <div
              className="game-loading-screen text-black flex flex-col gap-2"
              aria-live="polite"
            >
              <Loader2 className="animate-spin" size={16} />
              <span className="text-black">Loading game...</span>
            </div>
          ) : null}
          <div ref={scoreRef} id="score" className="hidden">
            0000
          </div>
          <div ref={countdownRef} className="countdown hidden">
            <div id="countdown">23</div>
          </div>
          <div ref={startScreenRef} className="game-start-screen">
            <div className="flex h-7.75 items-end cursor-pointer">
              <div id="start-game" className="game-button " onClick={startGame}>
                <span>Play</span>
              </div>
            </div>
            <div className="flex h-7.75 items-end cursor-pointer">
              <div
                id="change-difficulty"
                className="game-button"
                onClick={changeDifficulty}
              >
                <span id="game-difficulty">{difficultyLabel}</span>
              </div>
            </div>
          </div>
          <div className="team" id="gameArea">
            <canvas ref={canvasRef} id="gameCanvas" />
          </div>
        </div>
      </div>
    </div>
  );
}

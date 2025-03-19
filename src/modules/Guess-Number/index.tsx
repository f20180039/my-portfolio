import { useState } from "react";

const GuessNumber = () => {
  const [max, setMax] = useState(10);
  const [target, setTarget] = useState<number | null>(null);
  const [guess, setGuess] = useState<number | null>(null);
  const [score, setScore] = useState(10);
  const [message, setMessage] = useState("");

  // Generate a random target
  const getTarget = () => {
    setTarget(Math.floor(Math.random() * max));
    setScore(max);
    setMessage("");
  };

  const handleValidateGuess = () => {
    if (guess === null || target === null) return;

    if (guess === target) {
      setMessage("🎉 You Win!");
    } else if (score === 1) {
      setMessage("❌ You Lose! Try Again.");
      setScore(max);
    } else {
      setScore((prev) => prev - 1);
      setMessage("❌ Wrong Guess! Try Again.");
    }
  };
  return (
    <div className="ans-flex ans-flex-col ans-items-center ans-gap-4 ans-p-4">
      <label>
        Set Max Number:{" "}
        <input
          type="number"
          value={max}
          min={1}
          onChange={(e) => {
            const newMax = Math.max(1, +e.target.value);
            setMax(newMax);
            setScore(newMax);
          }}
          className="ans-border ans-rounded ans-px-2 ans-py-1"
        />
      </label>
      <button
        onClick={getTarget}
        className="ans-bg-Blue-500 ans-text-White ans-px-4 ans-py-2 ans-rounded"
      >
        🎯 Start / Retry
      </button>
      {target}
      {target !== null && (
        <>
          <label>
            Enter Your Guess:{" "}
            <input
              type="number"
              value={guess ?? ""}
              onChange={(e) => setGuess(+e.target.value)}
              className="ans-border ans-rounded ans-px-2 ans-py-1"
            />
          </label>
          <button
            onClick={handleValidateGuess}
            className="ans-bg-Success-500 ans-text-White ans-px-4 ans-py-2 ans-rounded"
          >
            ✅ Submit
          </button>

          <div className="ans-text-lg ans-font-semibold ans-mt-2">
            {message}
          </div>

          <div>Score {score}</div>
        </>
      )}
    </div>
  );
};

export default GuessNumber;

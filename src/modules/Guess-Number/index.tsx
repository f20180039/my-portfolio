import { useCallback, useEffect, useState } from "react";

const GuessNumber = () => {
  const [max, setMax] = useState(50);
  const [target, setTarget] = useState<number | null>(null);
  const [guess, setGuess] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");
  const [showTarget, setShowTarget] = useState(false);

  // Generate a new random target number
  const getTarget = useCallback(() => {
    const newTarget = Math.floor(Math.random() * max) + 1; // Ensures 1 to max
    setTarget(newTarget);
    setScore(max);
    setMessage("");
    setGuess(null);
    setShowTarget(false);
  }, [max]);

  const handleValidateGuess = () => {
    if (guess === null || target === null) return;
    if (guess === target) {
      setMessage("🎉 You Win!");
      setShowTarget(true);
    } else if (score === 1) {
      setMessage("❌ You Lose! Try Again.");
    } else {
      setScore((prev) => prev - 1);
      setMessage(guess > target ? "📈 Too High!" : "📉 Too Low!");
    }
  };
  useEffect(() => {
    getTarget();
  }, [getTarget]);

  return (
    <div className="ans-flex ans-flex-col ans-items-center ans-gap-6 ans-p-6 ans-font-mario ans-bg-White dark:ans-bg-Gray-900 ans-text-Gray-900 dark:ans-text-White">
      <div className="ans-flex ans-flex-col sm:ans-flex-row ans-justify-between ans-w-full ans-gap-4">
        <button
          onClick={getTarget}
          className="ans-bg-Blue-500 dark:ans-bg-Blue-400 ans-text-White ans-px-4 ans-py-2 ans-rounded ans-text-lg w-full sm:w-auto"
        >
          🎯 Play Again!
        </button>
        <div className="ans-flex ans-items-center ans-justify-center ans-gap-3 ans-text-4">
          <span>Between 1 and</span>
          <input
            type="number"
            value={max}
            min={1}
            onChange={(e) => {
              const newMax = Math.max(1, +e.target.value);
              setMax(newMax);
              setScore(newMax);
              getTarget();
            }}
            className="ans-min-w-[50px] ans-w-auto ans-max-w-[120px] ans-rounded-md ans-p-2 ans-bg-Gray-200 dark:ans-bg-Gray-800 ans-outline-none ans-text-center ans-text-Gray-900 dark:ans-text-White"
          />
        </div>
      </div>
      <h2 className="ans-text-6 ans-font-bold ans-text-Blue-600 dark:ans-text-Blue-300">
        Guess My Number!
      </h2>
      <div
        className="ans-w-fit ans-px-6 ans-py-4 ans-text-6 ans-bg-Gray-200 dark:ans-bg-Gray-800 ans-text-center ans-font-bold ans-rounded-lg ans-border-4 ans-border-Gray-700 dark:ans-border-Gray-600 ans-cursor-pointer"
        onClick={() => setShowTarget(true)}
      >
        {showTarget ? target : "?"}
      </div>

      {target !== null && (
        <div className="ans-flex ans-flex-col sm:ans-flex-row ans-gap-6 ans-items-center ans-mt-4">
          <div className="ans-flex ans-flex-col ans-gap-4 ans-items-center">
            <input
              type="number"
              value={guess ?? ""}
              min="1"
              max={max}
              onChange={(e) =>
                setGuess(Math.max(1, Math.min(+e.target.value, max)))
              }
              className="ans-w-[140px] ans-rounded-md ans-border-3 ans-border-Gray-700 dark:ans-border-Gray-500 ans-p-2 ans-bg-Gray-200 dark:ans-bg-Gray-800 ans-outline-none ans-text-center ans-text-Gray-900 dark:ans-text-White"
            />
            <button
              onClick={handleValidateGuess}
              className="ans-bg-Success-500 dark:ans-bg-Success-400 ans-text-White ans-px-4 ans-py-2 ans-rounded ans-text-lg hover:ans-bg-Success-600"
            >
              ✅ Check
            </button>
          </div>

          <div className="ans-flex ans-flex-col ans-items-center ans-gap-4">
            <div className="ans-text-lg ans-font-semibold ans-text-center ans-text-Blue-600 dark:ans-text-Blue-400">
              {message}
            </div>
            <div className="ans-text-lg ans-font-bold ans-text-Gray-900 dark:ans-text-White">
              Score: {score}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GuessNumber;

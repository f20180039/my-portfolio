import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);

  console.log(count);
  useEffect(() => {
    console.log(count);
  }, []);

  return (
    <div
      className="ans-flex ans-bg-highlight ans-text-Success-500"
      onClick={() => setCount((prev) => prev + 1)}
    >
      Let's get started

    </div>
  );
}

export default App;

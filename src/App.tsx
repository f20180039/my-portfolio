import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState<any>();

  console.log(count);
  useEffect(() => {
    console.log(count);
  }, []);

  return (
    <div className="ans-flex ans-bg-highlight ans-text-Pink-500">
      Let's get started
    </div>
  );
}

export default App;

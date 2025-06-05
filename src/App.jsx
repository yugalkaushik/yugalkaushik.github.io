import { useState } from "react";
import { ShootingStars } from "./components/shooting-stars";
import Landing from "./components/landing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen min-w-screen bg-white relative">
      <div className="fixed inset-0 z-0">
        <ShootingStars
          minSpeed={10}
          maxSpeed={30}
          minDelay={1000}
          maxDelay={1100}
          starColor="#9E00FF"
          trailColor="#2EB9DF"
          starWidth={12}
          starHeight={5}
        />
      </div>
      <div className="relative z-10">
        <Landing />
      </div>
    </div>
  );
}

export default App;

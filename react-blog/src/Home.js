import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("pikachu");
  const [age, setAge] = useState(25);

  const handleClick = (e) => {
    setName("Ash");
    setAge(30);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click Me</button>
      <p>
        {name} is {age} years old
      </p>
    </div>
  );
};

export default Home;

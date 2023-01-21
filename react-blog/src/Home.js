const Home = () => {
  const handleClick = (e) => {
    console.log("Ahmed says hello!", e.target);
  };
  const handleClickAgain = (name, e) => {
    console.log("hello " + name, e);
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click Me</button>
      <button
        onClick={(e) => {
          handleClickAgain("john", e.target);
        }}
      >
        Click me for a greeting
      </button>
    </div>
  );
};

export default Home;

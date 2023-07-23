import "./App.css";

function App() {
  const name = "Douglas";
  const url = "https://www.Thinkfu.com/";
  const linkText = "Thinkful";
  const element = (
    <div>
      <h1>Link Test</h1>
      <p>
        {" "}
        Hello, {name}! Please visit <a href={url}>{linkText}</a>.
      </p>
    </div>
  );

  return element;
}

export default App;

function App() {
    const datetime = new Date();
  return (
    <div className="App">
      <p>{datetime.getDay()}:{datetime.getMonth() + 1}:{datetime.getFullYear()}</p>
    </div>
  );
}

export default App;

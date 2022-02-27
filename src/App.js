

function App() {
  return (
    <div className="header">
      Phone directory
      <button>Add</button>
      <div>
        <label htmlFor="name">Name: </label>
        <input id="name" type="text" placeholder="Type here" defualtValue="Phani"/>
        <span>Name</span><br />
        <span>Phone</span>
      </div>
    </div>
  );
}

export default App;

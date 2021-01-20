import './App.css';

function App() {
  const lizzie = {
    name: "lizzie",
    age: 21,
    major: "geography",
    star_sign: "leo"
  }
  const divya = {
    name: "divya",
    age: 21,
    major: "computer science",
    star_sign: "gemini"
  }

  const myFriends = [lizzie, divya];

  const friendMap = myFriends.map((friend) => {
    return(
      <div className = "friend">
        <h1>{friend.name}</h1>
        <p>
          {friend.name} is {friend.age} years old.
          She is a {friend.major} major. 
          Her star sign is {friend.star_sign}
        </p>
      </div>
    )
  })

  return (
    <div className="App">
      <header className="App-header">
        <div className = "friend-container">
          {friendMap}
        </div>
      </header>
    </div>
  );
}

export default App;

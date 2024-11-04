import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function MyButtonSharedClickCount({ count, onClick }) {
  return (
    <button onClick={onClick}>
      MyButtoin Clicked {count} times
    </button>
  );
}

function MyButtonIndividualClickCount() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <button onClick={handleClick}>
      My button INDIVIDUAL click {count} count.
    </button>
  );
}



function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};


export function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}


function App() {

  const [buttonClickCount, setButtonClickCount] = useState(0);

  function handleClick() {
    return setButtonClickCount(buttonClickCount + 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyButtonSharedClickCount count={buttonClickCount} onClick={handleClick} />
        <MyButtonSharedClickCount count={buttonClickCount} onClick={handleClick} />
        <MyButtonIndividualClickCount />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Profile />
        <AboutPage />
        <img className="avatar" />
      </header>
     
    </div>
  );
}

export default App;
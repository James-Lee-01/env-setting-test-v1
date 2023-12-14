import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const apiKey = import.meta.env.VITE_API_KEY;

function App() {
  console.log(apiKey)
  console.log("VITE__API_KEY", import.meta.env.VITE_API_KEY);

  return (
    <>
      <div>
        <img src={viteLogo} className='logo' alt='Vite logo' />

        <img src={reactLogo} className='logo react' alt='React logo' />
      </div>
      <h1>Vite + React</h1>
      <h2>Token test:</h2>
      <div>{apiKey}</div>
    </>
  );
}

export default App

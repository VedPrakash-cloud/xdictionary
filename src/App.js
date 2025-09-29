import {useState} from 'react';
import './App.css';

function App() {
  const Dictionary = 
[

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

]
    const [search, setSearch] = useState('');
    const [meaning, setMeaning] = useState('');


    const handleSearch = (e)=>{
      const input = e.target.value;
      setSearch(input);
    }

    const handleClick = ()=>{
      const findMeaning = Dictionary.find(
        (text=> text.word === search)
      )

      if(findMeaning){
        setMeaning(`${findMeaning.meaning}`)
      }else{
        setMeaning("Word not found in the dictionary.")
      }
    }

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <input type='text' value={search} onChange={handleSearch} placeholder='Search for a word...'/>
      <button type='submit' onClick={handleClick}>Search</button>
      <h3>Definition: {meaning}</h3>
    </div>
  );
}

export default App;

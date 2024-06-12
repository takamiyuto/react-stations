// DO NOT DELETE

import { useState } from 'react';
import './App.css';
import Header from'./Header.jsx';
import Description from './Description.jsx';
import DogImage from './DogImage';'./DogImage.jsx';
import DogListContainer from './DogListContainer';




/**
 * @type {() => JSX.Element}
 */
export const App = () => {

  return (
    <div>
      <Header/>
      <Description/>
      <DogListContainer/>
    </div>
  );
  /*const [dogUrl, setUrl] = useState('https://images.dog.ceo/breeds/puggle/IMG_192117.jpg');
  
  const changeUrl =async ()=>{
      
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
     
      const result = await response.json();
      
      setUrl(result.message); // データをstateにセット
   
  
}

  return (
    <div>
      <header>
        <h1>Dogアプリ</h1>
        <p id='discription'>犬の画像を表示するサイトです</p>
      </header>
      <button onClick={changeUrl}>更新</button>
      <img src={dogUrl} alt='犬の画像'/>
      
    </div>
  )*/

}


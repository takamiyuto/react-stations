// @ts-check
import React, { useState } from 'react'
import {DogImage} from './DogImage.jsx'
export const Description = () => {
  const [dogUrl, setUrl] = useState(
    'https://images.dog.ceo/breeds/puggle/IMG_192117.jpg',
  )
  const changeUrl = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')

    const result = await response.json()

    setUrl(result.message) // データをstateにセット
  }
    return (
      <>
        <button onClick={changeUrl}>更新</button>
        <DogImage imageUrl={dogUrl} />
    </>
    )
 
}

export default Description

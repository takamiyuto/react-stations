// @ts-check
import React, { useEffect, useState } from 'react'
import { BreedsSelect } from './BreedsSelect'
import { DogImage } from './DogImage'
export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState('')
  const [dogUrls, setUrl] = useState(
    ' ',
  )

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://dog.ceo/api/breeds/list/all')
      const data = await response.json()
      setBreeds(Object.keys(data.message))
    }
    fetchData()
  }, [])

  const onChange = event => {
    setSelectedBreed(event.target.value)
  }
  const changeUrl = async () => {
    const response = await fetch(
      `https://dog.ceo/api/breed/${selectedBreed}/images/random/12`,
    )
    const result = await response.json()
    setUrl(result.message)
  }

  return (
    <>
      <div>
        <BreedsSelect
          breeds={breeds}
          selectedBreed={selectedBreed}
          onChange={onChange}
        />
        <button onClick={changeUrl}>表示</button>

        <ul>
          {breeds.map((breed, index) => (
            <li key={index}>
              <DogImage imageUrl={breed} />
            </li>
          ))}
        </ul>
        <DogImage imageUrl={dogUrls} />
      </div>
    </>
  )
}

export default DogListContainer

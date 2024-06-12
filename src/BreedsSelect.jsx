// @ts-check
import React from 'react'

export const BreedsSelect = ({ breeds, selectedBreed, onChange }) => {
  return (
    <>
      <select value={selectedBreed} onChange={onChange}>
        <option value="">選択してください</option>
        {breeds.map((breed, index) => (
          <option key={index} value={breed}>
            {breed}
          </option>
        ))}
      </select>
    </>
  )
}

export default BreedsSelect

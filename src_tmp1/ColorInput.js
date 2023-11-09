import React from 'react'

const ColorInput = ({ backGroundColor, setBackGroundColor }) => {
  return (
    <form>
      <input
        autoFocus
        role='searchbox'
        type="text"
        placeholder='Add color name'
        value={backGroundColor}
        onChange={(e) => setBackGroundColor(e.target.value)}
      />
    </form >
  )
}

export default ColorInput
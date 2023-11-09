import React from 'react'

const ColorField = ({ backGroundColor }) => {
    
  return (
    <section
        style={{backgroundColor: backGroundColor}}
        className="ColorField"
        >{backGroundColor === '' ? "Empty Value" : backGroundColor}
    </section>
  )
}

export default ColorField
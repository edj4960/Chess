import React from "react";

interface SpotProps {
  color: string,
  x: number,
  y: number
}

const Spot = ({color, x, y}: SpotProps) => {

  return (
    <div style={{ backgroundColor: color, flexGrow: 1, height: '100%' }}>
    </div>
  )
}

export default Spot;
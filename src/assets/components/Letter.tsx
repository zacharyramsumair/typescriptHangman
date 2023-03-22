import React from 'react'

interface Props  {
    letter:string;
    key:number;
}

const Letter = (props: Props) => {
  return (
    <div className='letter'>{props.letter}</div>
  )
}

export default Letter
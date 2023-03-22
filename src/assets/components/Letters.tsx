import React from 'react'
import Letter from './Letter'



const Letters = () => {
  const caps: string[] = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));

  let letterElements:JSX.Element[] = caps.map((letter:string , index:number) => {
    return <Letter letter={letter} key={index}/>
  })
  return (
    <section className='letters'>
        {letterElements}
    </section>
  )
}

export default Letters
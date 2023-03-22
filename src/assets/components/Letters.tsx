import React , {useState} from 'react'
import Letter from './Letter'

export interface IUsed{
  letter: string;
  correct: boolean;
}

const Letters = () => {
  let [used, setUsed] = useState<IUsed[]>([])
  const caps: string[] = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
  let letterElements:JSX.Element[] = caps.map((letter:string , index:number) => {
    return <Letter letter={letter} key={index} used={used} setUsed={setUsed}/>
  })


  return (
    <section className='letters' >
        {letterElements}
    </section>
  )
}

export default Letters
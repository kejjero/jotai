import {atom, useAtom} from 'jotai';

const counter = atom(0);

const HomePage = () => {

  const [count, setCounter] = useAtom(counter);
  const onClick = () => setCounter(prev => prev + 1);
  return (
    <section className='container'>
      <div>
        <h1>{count}</h1>
        <button onClick={onClick}>Click</button>
      </div>
    </section>
  )
}

export default HomePage
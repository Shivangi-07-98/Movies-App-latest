import React from 'react'
import Genre from '../Genre'
import Movies from '../Movies'
import './Main.scss'

function Main() {

  const [cGenre, setGenre] = React.useState("");
  const [cPage, setcPage] = React.useState(1);

  const setGlobalGenre = (nGenre) => {
    if(nGenre == "All Genre") {
      setGenre("");
    }else{
      setGenre(nGenre);
    }
    setcPage(1);
  }

  return (
    <div className='main'>
    <div className='flex container'>
      <div className='genres'>
      <Genre setGlobalGenre={setGlobalGenre}></Genre>
      </div>

      <div className='movies'>
      <Movies cGenre={cGenre} cPage={cPage} setcPage={setcPage}></Movies>
      </div>
    </div>
    </div>
  )
}

export default Main
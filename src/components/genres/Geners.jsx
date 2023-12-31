import React from 'react'
import { useSelector } from 'react-redux'
import './style.scss'

const Geners = ({data}) => {

    const {genres} = useSelector((state)=> state.home);

  return (
    <div className='genres'>
      {data && data.map((g)=> {
        if(!genres[g]?.name) return;
        return (
            <div className="genre" key={g}>
                {genres[g]?.name}
            </div>
        )}
      )}
    </div>
  )
}

export default Geners

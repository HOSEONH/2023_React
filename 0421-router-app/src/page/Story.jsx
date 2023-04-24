import React from 'react'
import { useParams } from 'react-router-dom'

import DataContext from '../context/DataContext';
import { useContext } from 'react';

export default function Story() {
  const { state } = useContext(DataContext);
  const { fruitlist } = state;
  
  const { name } = useParams();
  
  // find 값을 하나만 출력 / undefined
  // filter 값을 배열로 출력
  const fruit = fruitlist.find((f)=>(f.name === name))
  
  return (
    <div>
      <h3>{name}-story</h3>
      {
        fruit && (
          <div>
            <img src={fruit.picture} alt="" width={200}/>
            <p>{fruit.detail}</p>
          </div>
        )
      }
    </div>
  )
}

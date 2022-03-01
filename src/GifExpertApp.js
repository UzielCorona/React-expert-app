import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => { 

  const [categories, setCategories] = useState(['one punch man']);

  return (
    <>
        <h2>Prueba</h2>  
        <AddCategory setCategories={setCategories}/> 
        <hr></hr>
        <ol>
            {
                categories.map(object =>
                     <GifGrid
                      key={object}
                      category={object}/>
                )
            }
        </ol>
    </>
  )
}

import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = ({ defaultCategories = [] }) => {

    // const categories = [ 'One Punch', 'Samurai X', 'Dragon Ball' ]
    const [categories, setCategories] = useState( defaultCategories );
    
    // const handleAdd = () => {
    //     // setCategories( [...categories, 'Bleach'] );
    //     setCategories( categ => [ ... categ, 'Bleach' ] )
    // }
    
    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { setCategories } />
            <hr />

            <ol>
                { 
                    categories.map( (category) => 
                       <GifGrid 
                           category= { category }
                           key = { category }
                       />
                    ) 
                }
                <br />
            </ol>
        </div>
    )
}

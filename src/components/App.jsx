import React, {useState} from 'react'
import AddCategory from './AddCategory.jsx'
import GifList from './GifList.jsx'

const Gif = () => {
    const [categories, setCategories] = useState(['Hate'])
    
    return (
        <>
            <h1>Gif</h1>
            
            <AddCategory setCategories={setCategories} />
            
            <hr />
            
            <ul>
                {
                    categories.map((category, index) => (
                        // <li key={index}>{category}</li>
                        <GifList key={index} category={category} />
                    ))
                }
            </ul>
            
        </>
    )
}

export default Gif
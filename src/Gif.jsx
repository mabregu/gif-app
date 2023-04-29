import React, {useState} from 'react'
import AddCategory from './components/AddCategory.jsx'

const Gif = () => {
    const [categories, setCategories] = useState(['Love', 'Hate', 'Anger', 'Fear', 'Joy', 'Sadness', 'Surprise', 'Trust'])
    
    // const handleAdd = () => {
    //     setCategories([...categories, 'New Category'])
    // }
    
    return (
        <>
            <h1>Gif</h1>
            
            <AddCategory setCategories={setCategories} />
            
            <hr />
            
            <ul>
                {categories.map((category, index) => (
                    <li key={index}>{category}</li>
                ))}
            </ul>
            
        </>
    )
}

export default Gif
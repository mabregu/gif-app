import GifItem from './GifItem.jsx';
import useFetchGifs from "../hooks/useFetchGifs";

const GifList = ({ category }) => {
    
    const { data: images, loading } = useFetchGifs(category);
    
    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            
            {loading && <p className="animate__animated animate__flash">Loading...</p>}
            
            <div className="card-container">
                {
                    images.map(img => (
                        <GifItem key={img.id} {...img} />
                    ))
                }
            </div>
        </>
    );
}

export default GifList;

const GifItem = ({title, url}) => {
    return (
        <div className="card animate__animated animate__bounce">
            <div className="card-header">
                <h2>{title}</h2>
            </div>
            <img src={url} alt={title} />
        </div>
    );
}

export default GifItem;

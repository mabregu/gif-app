import PropTypes from 'prop-types';

const GifItem = ({ title, url }) => {
    return (
        <div className="card animate__animated animate__bounce">
            <div className="card-header">
                <h2>{title}</h2>
            </div>
            <img src={url} alt={title} />
        </div>
    );
}

GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default GifItem;

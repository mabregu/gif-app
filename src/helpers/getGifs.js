const getGifs = async (category, limit = 10) => {
    const API_KEY = import.meta.env.VITE_GIF_API_KEY;
    const API_URL = import.meta.env.VITE_API_URL;
    const url = `${API_URL}/search?q=${encodeURI(category)}&limit=${limit}&api_key=${API_KEY}`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    
    const gifs = data.map(({ id, title, images }) => {
        return {
            id,
            title,
            url: images?.downsized_medium.url,
        };
    });
    
    return gifs;
};

export default getGifs;
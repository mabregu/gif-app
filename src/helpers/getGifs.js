const getGifs = async (category, limit = 10) => {
    const API_KEY = import.meta.env.VITE_GIF_API_KEY;
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limit}&api_key=${API_KEY}`;
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
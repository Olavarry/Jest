const axios = require('axios')

const getAlbums = async () => {
    
    const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
    return response.data[0].title
}

// Log the result of the async function
//getAlbums().then(data => console.log(data)).catch(err => console.error(err));

// console.log(getAlbums().then(data => console.log(data)))
module.exports = { getAlbums }
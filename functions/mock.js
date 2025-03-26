const axios = require('axios')

const getAlbumTitle = async () => {
    
    const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
    return response.data.title
}

const getAlbumId = async () => {
    
    const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
    //console.log(response.data)
    return response.data.id
}

// Log the result of the async function
//getAlbums().then(data => console.log(data)).catch(err => console.error(err));

// console.log(getAlbums().then(data => console.log(data)))
module.exports = { getAlbumTitle, getAlbumId }
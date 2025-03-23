const axios = require('axios')
const { getAlbums } = require('../functions/mock.js')

test('Get Album title', async ()=>{
    const getTitle = await getAlbums()
    expect(getTitle).toBe('quidem molestiae enim')
})
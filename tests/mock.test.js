const axios = require('axios')
const { getAlbumTitle, getAlbumId } = require('../functions/mock.js')
 jest.mock('axios')


 const albumData= {
    userId: 1,
    id: 200,
    title: "This is the mock Album"
}

test('Get Album Id', async ()=>{
    
    const resp = { data: albumData }
    axios.get.mockResolvedValue(resp)
    const apiData = await getAlbumId()
    //console.log(apiData)
    expect(apiData).toEqual(200)
})

test('Get Album title', async ()=>{
    
    const resp = { data: albumData }
    axios.get.mockResolvedValue(resp)
    const apiData = await getAlbumTitle()
    console.log(apiData)
    expect(apiData).toBe('This is the mock Album')
})

// test('Get Album Id', async ()=>{
//     const getId = await getAlbumId()
//     expect(getId).toEqual(1)
// })

// test('Get Album title', async ()=>{
//     const getTitle = await getAlbums()
//     expect(getTitle).toBe('quidem molestiae enim')
// })
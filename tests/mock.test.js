const axios = require('axios')
const { getAlbumTitle, getAlbumId } = require('../functions/mock.js')
jest.mock('axios') //this is the mock function from axios

//create const with album data
 const albumData= {
    userId: 1,
    id: 200,
    title: "This is the mock Album"
}

test('Get Album Id', async ()=>{
    
    // creating response containing albumData and mocking
    const resp = { data: albumData } 
    axios.get.mockResolvedValue(resp)
    //This is calling the function where api call is, instead of making actyual request we're mocking the repsonse
    const apiData = await getAlbumId()
    expect(apiData).toEqual(200)
})

test('Get Album title', async ()=>{
    
    const resp = { data: albumData }
    axios.get.mockResolvedValue(resp)
    const apiData = await getAlbumTitle()
    console.log(apiData)
    expect(apiData).toBe('This is the mock Album')
})

//Below tests were valid for actual api request

// test('Get Album Id', async ()=>{
//     const getId = await getAlbumId()
//     expect(getId).toEqual(1)
// })

// test('Get Album title', async ()=>{
//     const getTitle = await getAlbumTitle()
//     expect(getTitle).toBe('quidem molestiae enim')
// })
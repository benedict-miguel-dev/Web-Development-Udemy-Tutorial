const getShows = async (query) => {
    try {
        return (await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`)).data
    } catch (e){
        console.log('Something went wrong', e)
    }
}

const txtBox = document.getElementById('txtSearchBox')
const btnSearch = document.getElementById('btnSearch')
const form = document.getElementById('form')
const body = document.body
const list = document.getElementById('imageList')
form.addEventListener('submit', (e) => {
    e.preventDefault()
})
btnSearch.addEventListener('click', async () => {
    const result = await getShows(txtBox.value)
    while (list.firstChild){
        list.removeChild(list.firstChild)
    }
    for (img of result){
        const newImg = document.createElement('img')
        const newList = document.createElement('li')
        newList.append(newImg)
        try {
            newImg.src = img.show.image.medium
        }catch (e){
            console.log('Could not find image')
        }
        list.append(newImg)
    }
   
})



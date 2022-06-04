// axios.get('https://swapi.dev/api/people/1')
//     .then((data) => {
//         console.log('Response is :', data);
//     })
//     .catch((e) => {
//         console.log('An Error Occured', e);
//     })

/*  When Using Async functions, this is the syntax, and remember to
    use async functions for asynchronous javascript, meaning this data may 
    or may not be available at the time. Especially when calling web
    APIs or what not. They are basically: Async and await functions are basically
    cleaner syntax to promises.then and promises.catch
    Create an asynction function
        const myFunction = async () => {
            try {

            }catch (e){

            }
        }
    
    Calling an async function 
        await myFunction()
*/


// Refractoring it as an async function and showing the basics of the axios library
const getPerson = async (id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}`)
        console.log(res.data)
    } catch (e) {
        console.log('An Error occured getPerson()', e)
    }
}

// Creating an Axios call with headers 
const jokes = document.querySelector('#jokes');
const getDadJoke = async () => {
    try {
        const config = {
            headers: {
                Accept: 'application/json'
            }
        }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke

    } catch (e) {
        console.log('An error occured getDadJoke()', e)
    }
}

// Select the button and create an event listener
const btnAddJoke = document.querySelector('#addJoke')
btnAddJoke.addEventListener('click', async () => {
    const newJoke = document.createElement('LI')
    newJoke.innerText = await getDadJoke()
    jokes.append(newJoke)
})

// This is for testing purposes




{/* <div id="joke" class="joke">Awesome Joke is loading....</div> */ }
{/* <button id="jokebtn" class="btn">NEXT JOKE</button> */ }


//promises

//GET https://icanhazdadjoke.com/

const jokes = document.querySelector('#joke');
const jokesbtn = document.querySelector('#jokebtn');

// Promises

// const generateJokes = () => {

//     const setHeader={
//         headers: {
//             Accept :"application/json" 
//         }
//     }
//     fetch('https://icanhazdadjoke.com' ,setHeader)
//         .then((res) => 
//             res.json()
//         ).then((data)=>
//             jokes.innerHTML=data.joke
//         )
//         .catch((error) => 
//             console.log(error) 
//         )
// };


// async await

const generateJokes = async () => {
try{

    const setHeader={
        headers: {
            Accept :"application/json" 
        }
    }
    const res =  await fetch('https://icanhazdadjoke.com',setHeader);
    const data= await res.json();
    jokes.innerHTML=data.joke;
}catch(error){
    console.log(`The error is ${error}`);
}
               
};



jokesbtn.addEventListener('click', generateJokes);
generateJokes();

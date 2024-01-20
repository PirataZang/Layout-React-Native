const Axios = require('axios');

const url = 'https://api.github.com/users/PirataZang/repos';

async function getRespost(){
    // let response = Axios.get(url);
    let response = await fetch(url);
    const responseJson  = await response.json();
    console.log(responseJson)
}

getRespost()

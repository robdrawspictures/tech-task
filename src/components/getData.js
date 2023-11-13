import axios from "axios";

async function getData(){
    let data;
    
    await axios.get('https://randomuser.me/api/?results=10&nat=gb')
    .then(res => {
        console.log('FETCHING DATA...')
        data = res.data.results;
        // console.log(data);
    }).catch(err => {
        console.log(err)
    })

    console.log(data);
    return data;
}

export default getData;
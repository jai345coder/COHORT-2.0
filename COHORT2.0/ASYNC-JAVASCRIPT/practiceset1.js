// //practice sert 1
// //==================




// // async function WeatherData(lat, lon) {
// //     try {
// //         let apikey = `ce819fabd489c5c7bb1d603d416b434e`;

// //         let raw = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apikey}`);
// //         console.log(raw);
// //         let data = await raw.json();

// //         console.log(data);

// //         if (!raw.ok) {
// //             throw new Error("Network response was not ok");
// //         }

// //     } catch (error) {
// //         console.log(`Error: ${error.message}`);

// //     }
// // }

// // WeatherData(233.22, 54.433);







// //AK aarray hoga , of users emails bulk email send karta hai , 20 logo ko ak emial cala jaye


// const users = [
//     "prashant322@gmail.com",
//     "prashant123@gmail.com",
//     "prashant456@gmail.com",
//     "prashant789@gmail.com",
//     "ramesh123@gmail.com",
//     "sita123@gmail.com",
//     "aman123@gmail.com",
//     "rahul123@gmail.com",
//     "sheryian123@gmail.com",
//     "sheryian456@gmail.com",
//     "sheryian789@gmail.com",
//     "sheryian321@gmail.com",
// ]



// function SendEmail(email){
//    return new Promise((resolve , reject)=>{
//     let time = Math.floor(Math.random()*5);
//         setTimeout(()=>{
//             let probability = Math.floor(Math.random()*10);
//             if(probability<=5){
//                 console.log(`Email sent to ${email}`);  
//             }
//         },time*1000)
//    })
// }

// SendEmail("jai3232@gmail.com").then((email)=>{
//     console.log(`Email sent to ${email}`);
// }).catch((error)=>{
//     console.log(error);
// })




// function sendEmailsinList(users) {
// users.map((email)=>{
//     SendEmail(email).then((email)=>{
//         console.log(`Email sent to ${email}`);
//     }).catch((error)=>{
//         console.warn("ERROR",error);
//     })
// })
// }

// sendEmailsinList(users);


/**WEATHER API CALL */
//====================
let city = "london"
const API_KEY = `ce819fabd489c5c7bb1d603d416b434e`;
let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`





let CITIES = [
    "London",
    "New York",
    "Tokyo",
    "Delhi",
    "Mumbai",
    "Paris",
    "Berlin",
    "Sydney",
    "Toronto",
    "Dubai",
    "Singapore",
    "Los Angeles",
    "Chicago",
    "Hong Kong",
    "Bangkok",
    "Johannesburg",
    "Istanbul",
    "Rome",
    "Madrid",
    "Melbourne"
];
//this your new keyboard say hello bro tho this key board
async function WEATHER_Data(cities) {
    try { //async ka use kiya kuki api ke data ko ane me time laye ga so async process jab data ajae ga tab await use karega

        //API key + data url
        const API_KEY = `ce819fabd489c5c7bb1d603d416b434e`;
        cities.map(async (city) => {

            let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`

            //You’re getting the Response object, NOT the actual weather data.
            let raw = await fetch(URL)//fetch returs a promise 
            /**
             * fetch----> returns a promise ---> jabtak data le kar aye ga tab await-----> js ko sukkn ko kahga
             */
            let data = await raw.json();//json also returs a promise------>jab tak promise data lata nahi await js ko rokk ke kakt1a hai------>>json converts the data into js obj format
           //console.log(data);

            if (!raw.ok) {
                throw new Error("Network response was not ok");
            }
            if (data.main.temp >= 40) {
                console.log(`${city} : (${data.main.temp}) : 🔥`);
            } else {
                console.log(`${city}:(${data.main.temp}) : ❄️`);
            }
        })




    } catch (error) {
        console.log(error);
    }

}

WEATHER_Data(CITIES);















































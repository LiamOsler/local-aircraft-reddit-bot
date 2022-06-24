const cron = require('node-cron');
const axios = require('axios');
const Twit = require("twit");
const dotenv = require("dotenv");
dotenv.config();

let aircrafts = [];

cron.schedule('*/10 * * * * *', () => {
    axios
    .get('https://opensky-network.org/api/states/all?lamin=44.58&&lomin=-63.90&lamax=45.00&lomax=-63.42')
    .then(res => {
            if(!res.data.states){
                console.log("No aircraft overhead");
            }
            else{
                for(let state of res.data.states){
                    let newAircraft = true;
                    for(let aircraft of aircrafts){
                        if(aircraft[0] == state[0]){
                            newAircraft = false;
                        }
                    }
                    if(newAircraft){
                        aircrafts.push(state);
                        console.log("Aircraft callsign " + state[1] + " has entered Halifax airspace.");
                    }
                }

                for(let i = 0; i < aircrafts.length; i++){
                    let aircraft = aircrafts[i];
                    let removeAircraft = true;
                    for(let state of res.data.states){
                        if(aircraft[0] == state[0]){
                            removeAircraft = false;
                            console.log("Aircraft callsign " + state[1] + " has left Halifax airspace.");

                        }
                    }
                    if(removeAircraft){
                        aircrafts.splice(i);
                    }
                }
            }
        })
        .catch(error => {
            console.error(error)
        })
});
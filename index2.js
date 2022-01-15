const { fetchMyIP } = require('./iss_promised');

// index2.js
fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then(body => console.log(body));

  // index2.js
const { nextISSTimesForMyLocation } = require('./iss_promised');

// see index.js for printPassTimes 
// copy it from there, or better yet, moduralize and require it in both files

// Call 
nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
const inputForm = document.getElementById("submit");

const identifier = document.getElementById("idt");

const velocity = document.getElementById("vel");
const altitude = document.getElementById("alt");
const heading = document.getElementById("hdg");

const startCourseLong = document.getElementById("tkflongitude");
const startCourseLat = document.getElementById("tkflatitude");

const endCourseLong = document.getElementById("ldglongitude");
const endCourseLat = document.getElementById("ldglatitude");

const lastKnownLong = document.getElementById("lkplongitude");
const lastKnownLat = document.getElementById("lkplatitude");

const notification = document.getElementById("notification")

//Add to database function
async function addToDatabase() {
    var recentCreation = new Date()
    var timeStamp = `${recentCreation.getDate()}/${recentCreation.getMonth()}/${recentCreation.getFullYear()}_${recentCreation.getHours()}:${recentCreation.getMinutes()}:${recentCreation.getSeconds()}` 
    console.log(timeStamp);
    
    const sendBody = {
        _createdAt: timeStamp,
        identifier: identifier.value,
        input: {
            velocity: velocity.value,
            altitude: altitude.value,
            heading: heading.value,
            trueCourseStart: {
                trueCourseStartLat: startCourseLat.value,
                trueCourseStartLong: startCourseLong.value
            },
            trueCourseEnd: {
                trueCourseEndLat: endCourseLat.value,
                trueCourseEndLong: endCourseLong.value
            },
            lastKnownPosition: {
                lastKnownLat: lastKnownLat.value,
                lastKnownLong: lastKnownLong.value
            }
        }
    }

    try {
        const res = await fetch('api/v1/storage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sendBody)
        })
        console.log("Added")
        if (res.status === 400) {
            throw Error('Duplicate values')
        }

    } catch (err) {
        alert(err)
        return
    }

    console.log(identifier.value);
    
    clearForm();
    notification.innerHTML = "Values stored to DB";
    notification.focus();
}

function clearForm() {
    identifier.value = "";
    velocity.value = "";
    altitude.value = "";
    heading.value = "";
    lastKnownLat.value = "";
    lastKnownLong.value = "";
    startCourseLat.value = "";
    startCourseLong.value = "";
    endCourseLat.value = "";
    endCourseLong.value = "";
}

// async function fetchInput() {
//     const res = await fetch('/api/v1/routetest')
//     const data = await res.json()

//     console.log(data);

//     const inputs = data.data.map( input => {
//         if (input._createdAt) {
//             return {
//                     _createdAt: input._createdAt,
//                     _id: input._id
//             }
//         }
//     })
//     console.log(inputs)
// }

// async function fetchInput() {
//         const res = await fetch('/api/v1/storage', {
//             method: 'GET'
//         })
//         const data = await res.json()
    
//         console.log(data)
// }

async function fetchInput() {
    console.log('called: testfetch');
    const flightcode = "flightmajor"
    const res = await fetch('/api/v1/testparams/' + flightcode, {
        method: 'GET'
    })
    const data = await res.json()
    console.log(data);

    const inputs = data.data._createdAt;
    console.log(inputs);
    console.log(data.data._id);
    console.log(data.data.identifier);
}

async function flyAnimation() {
    console.log('called: animation');
    const flightcode = "flightmajor"
    const res = await fetch('/api/v1/testparams/' + flightcode, {
        method: 'GET'
    })
    const data = await res.json()

    console.log("confirm: fetch => animation");    

    var startCourseLat = data.data.input.trueCourseStart.trueCourseStartLong;
    var startCourseLong = data.data.input.trueCourseStart.trueCourseStartLat;

    var endCourseLat = data.data.input.trueCourseEnd.trueCourseEndLong;
    var endCourseLong = data.data.input.trueCourseEnd.trueCourseEndLat;

    var lastKnownLat = data.data.input.lastKnownPosition.lastKnownLong;
    var lastKnownLong = data.data.input.lastKnownPosition.lastKnownLat;

    var corner1 = L.latLng(startCourseLat, startCourseLong);
    var corner2 = L.latLng(endCourseLat, endCourseLong);

    var bounds = L.latLngBounds(corner1, corner2);
    var lkpPopUp, startPopUp, endPopUp;

    var flightLandIcon = L.icon({
        iconUrl: 'img/flight_land.png',

        iconSize: [25, 25], // size of the icon
        iconAnchor: [10, 30],
        popupAnchor: [0, -30]
    });
    var flightTakeOffIcon = L.icon({
        iconUrl: 'img/flight_takeoff.png',

        iconSize: [25, 25], // size of the icon
        iconAnchor: [10, 30],
        popupAnchor: [0, -30]
    });

    mymap.flyTo([startCourseLong, startCourseLat], 5);
    addCircle(startCourseLong, startCourseLat, 5000);
    startPopUp = L.marker([startCourseLong, startCourseLat], {
        icon: flightTakeOffIcon
    }).addTo(mymap).bindPopup("Take off location");

    setTimeout(() => {
        mymap.flyTo([endCourseLong, endCourseLat], 5);
        addCircle(endCourseLong, endCourseLat, 5000);
        endPopUp = L.marker([endCourseLong, endCourseLat], {
            icon: flightLandIcon
        }).addTo(mymap).bindPopup("Landing location");
    }, 2000);

    setTimeout(() => {
        mymap.fitBounds(bounds);
        mymap.zoomOut();
    }, 4000);

    setTimeout(() => {
        mymap.zoomOut();
    }, 4500);

    setTimeout(() => {
        mymap.zoomOut();
    }, 5000);

    setTimeout(() => {
        mymap.flyTo([lastKnownLong, lastKnownLat], 5);
    }, 6000);

    setTimeout(() => {
        lkpPopUp = L.marker([lastKnownLong, lastKnownLat]).addTo(mymap).bindPopup("Last known Position. <br> Alt: " + data.data.input.altitude + "m | velocity: " + data.data.input.velocity + "kt/h");
        mymap.zoomIn();
    }, 7500);
    setTimeout(() => {
        mymap.zoomIn();
    }, 8000);
    setTimeout(() => {
        mymap.zoomIn();
        addCircle(lastKnownLong, lastKnownLat, 500);
    }, 8500);

    setTimeout(() => {
        lkpPopUp.openPopup();
    }, 9000);

    setTimeout(() => {
        mymap.flyTo([lastKnownLong, lastKnownLat], 3);
    }, 10000);

}

fetchInput();
setTimeout(() => {
    flyAnimation();
}, 2000);
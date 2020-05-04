const inputForm = document.getElementById("submit")

const velocity = document.getElementById("icon_speed")
const altitude = document.getElementById("icon_altitude")

const startCourseLong = document.getElementById("icon_start_x")
const startCourseLat = document.getElementById("icon_start_y")

const endCourseLong = document.getElementById("icon_destination_x")
const endCourseLat = document.getElementById("icon_destination_y")

const lastKnownLong = document.getElementById("icon_lkp_x")
const lastKnownLat = document.getElementById("icon_lkp_y")

//Add to database function
async function addToDatabase() {
    var recentCreation = new Date()
    var timeStamp = `${recentCreation.getDate()}/${recentCreation.getMonth()}/${recentCreation.getFullYear()}_${recentCreation.getHours()}:${recentCreation.getMinutes()}:${recentCreation.getSeconds}` 
    recentCreation.get
    console.log(timeStamp);
    
    const sendBody = {
        _createdAt: timeStamp,
        input: {
            velocity: velocity.value,
            altitude: altitude.value,
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
}

async function fetchInput() {
    const res = await fetch('/api/v1/storage')
    const data = await res.json()

    console.log(data);

    const inputPlot = data.data.map( inputNode => {
        return {
            velocity: inputNode.input.velocity,
            altitude: inputNode.input.altitude,
            _createdAt: inputNode._createdAt,
            _id: inputNode._id
        }
    })

    console.log(inputPlot)
}

async function flyAnimation() {
    console.log("In fly");

    const res = await fetch('/api/v1/storage')
    const data = await res.json()

    var startCourseLong = startCourseLong.value
    var startCourseLat = startCourseLat.value

    var endCourseLong = endCourseLong.value
    var endCourseLat = endCourseLat.value

    var lastKnownLong = lastKnownLong.value
    var lastKnownLat = lastKnownLat.value


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
        lkpPopUp = L.marker([lastKnownLong, lastKnownLat]).addTo(mymap).bindPopup("Last known Position.");
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

fetchInput()
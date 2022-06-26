let mapOptions = {
    center:[56.66734962700988, 23.729750011365905],
    zoom:10
}

let cordinates = [
    {
        l: 56.66066061450279, 
        w: 23.70980440220657,
        content: 'content1',
    },
    {
        l: 56.6527169167919, 
        w: 23.67000171597519,
        content: 'content2',
    },
]

let map = new L.map('map' , mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

let customIcon = {
    iconUrl:"https://www.worth.com/wp-content/uploads/2017/09/map-marker-icon.png",
    iconSize:[40,40]
}

let myPositionIcon = {
    iconUrl:"https://cdn-icons-png.flaticon.com/512/25/25694.png",
    iconSize:[40,40]
}

let myIcon = L.icon(customIcon);
let positionIcon = L.icon(myPositionIcon);

let iconOptions = {
    title:"company name",
    icon:myIcon
}

let positionIconOptions = {
    title:"company name",
    icon:myPositionIcon
}


cordinates.forEach(element => {
    let marker = new L.Marker([element.l, element.w] , iconOptions);
    marker.addTo(map);
    marker.bindPopup(`${element.content}`).openPopup();
});



var x = document.getElementById("output");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;

    let marker = new L.Marker([position.coords.latitude, position.coords.longitude] , positionIconOptions);
    marker.addTo(map);

}




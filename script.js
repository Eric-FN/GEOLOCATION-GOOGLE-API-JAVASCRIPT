function initMap(latitude, longitude) {
  const location = { lat: latitude, lng: longitude };
  const mapa = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: location,
    mapTypeId: "roadmap",
  });

  new google.maps.Marker({
    position: location,
    map: mapa,
    title: "You are here.",
  });
}
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      initMap(lat, lng);
    },
    () => {
      alert("Location permission denied.");
    }
  );
} else {
  alert("Geolocation is not supported by this browser.");
}

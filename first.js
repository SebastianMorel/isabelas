

function initMap() {
    const isabelapos = { lat: 56.0395198, lng: 14.7633908 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: isabelapos,
    });
    const marker = new google.maps.Marker({
      position: isabelapos,
      map: map,
    });
      }
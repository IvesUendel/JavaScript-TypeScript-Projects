function initMap() {
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: { lat: -30.0346, lng: -51.2177 }, // Centro aproximado do RS
  });

  // Cities List
  let cities = [
    { name: "Porto Alegre", lat: -30.0346, lng: -51.2177 },
    { name: "Eldorado do Sul", lat: -30.0845, lng: -51.6199 },
    { name: "Muçum", lat: -29.1635, lng: -51.8712 },
    { name: "Canoas", lat: -29.9173, lng: -51.1839 },
    { name: "São Leopoldo", lat: -29.7541, lng: -51.1506 },
    { name: "Novo Hamburgo", lat: -29.6878, lng: -51.1328 },
    { name: "Esteio", lat: -29.8516, lng: -51.1795 },
    { name: "Sapucaia do Sul", lat: -29.8294, lng: -51.1451 },
    { name: "Gravataí", lat: -29.9413, lng: -50.9948 },
    { name: "Alvorada", lat: -29.9914, lng: -51.0809 },
    { name: "Viamão", lat: -30.0819, lng: -51.0194 },
    { name: "Cachoeirinha", lat: -29.9472, lng: -51.1019 },
    { name: "Guaíba", lat: -30.1086, lng: -51.3235 },
    { name: "Erechim", lat: -27.6346, lng: -52.2751 },
    { name: "Santa Maria", lat: -29.6842, lng: -53.8069 },
    { name: "Lajeado", lat: -29.4597, lng: -51.9647 },
    { name: "Estrela", lat: -29.5002, lng: -51.9491 },
    { name: "Arroio do Meio", lat: -29.4008, lng: -51.9457 },
    { name: "Montenegro", lat: -29.6823, lng: -51.4675 },
    { name: "Taquari", lat: -29.7944, lng: -51.8644 },
    { name: "Venâncio Aires", lat: -29.6145, lng: -52.1931 },
    { name: "Santa Cruz do Sul", lat: -29.722, lng: -52.4343 },
    { name: "Rio Pardo", lat: -29.9887, lng: -52.3793 },
    { name: "Caxias do Sul", lat: -29.1629, lng: -51.1794 },
    { name: "Farroupilha", lat: -29.222, lng: -51.3472 },
    { name: "Garibaldi", lat: -29.2597, lng: -51.5354 },
    { name: "Bento Gonçalves", lat: -29.1662, lng: -51.5165 },
    { name: "Carlos Barbosa", lat: -29.2965, lng: -51.5026 },
    { name: "Ivoti", lat: -29.5914, lng: -51.1533 },
    { name: "Estância Velha", lat: -29.6531, lng: -51.1842 },
    { name: "Capão da Canoa", lat: -29.7477, lng: -50.0214 },
    { name: "Xangri-lá", lat: -29.8169, lng: -50.0517 },
    { name: "Osório", lat: -29.8881, lng: -50.2664 },
    { name: "Tramandaí", lat: -29.984, lng: -50.1322 },
    { name: "Torres", lat: -29.3365, lng: -49.7274 },
    { name: "Mostardas", lat: -31.1053, lng: -50.9188 },
    { name: "São José do Norte", lat: -32.0144, lng: -52.0335 },
    { name: "Rio Grande", lat: -32.0346, lng: -52.0986 },
    { name: "Pelotas", lat: -31.7654, lng: -52.3371 },
    { name: "Canguçu", lat: -31.396, lng: -52.675 },
    { name: "Bagé", lat: -31.3325, lng: -54.1067 },
    { name: "Dom Pedrito", lat: -30.9756, lng: -54.669 },
    { name: "Santana do Livramento", lat: -30.8904, lng: -55.5328 },
    { name: "Uruguaiana", lat: -29.7614, lng: -57.0853 },
    { name: "Itaqui", lat: -29.1313, lng: -56.5536 },
    { name: "São Borja", lat: -28.6602, lng: -56.0045 },
    { name: "Alegrete", lat: -29.7842, lng: -55.7984 },
  ];

  // Adicionando marcadores para cada cidade
  cities.forEach(function (city) {
    let marker = new google.maps.Marker({
      position: { lat: city.lat, lng: city.lng },
      map: map,
      title: city.name,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 20,
        fillColor: "red",
        fillOpacity: 0.5,
        strokeColor: "red",
        stroleOpacity: 0.2,
        strokeWeight: 2,
      },
    });
  });
}

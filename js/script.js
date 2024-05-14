document.addEventListener("DOMContentLoaded", function() {

    function generatePageContent() {

        document.getElementById("logo").src = "../recursos/imagenes/avion.png";

        document.getElementById("price").innerText = "$8,450";

        document.getElementById("destination").innerText = "Venice, Italy";

        document.getElementById("description").innerText = "Travel is a responsive Bootstrap layout from templatemo website. All images used in this template are from Unsplash";

        const titleContainer = document.querySelector(".flexContenedorArriba");

        const titleContainerHeight = titleContainer.offsetHeight;

        const travelDestinations = document.getElementById("travelDestinations");

        const destinations = [
            { name: "ITALY", image: "../Recursos/imagenes/italia.jpg", details: "Rome, Milan, Naples", hotel: "SILVER HOTEL,4 NIGHTS, 5 STARS", price: "$1,800" },
            { name: "FRANCE", image: "../Recursos/imagenes/francia.jpg", details: "Paris, Marseille, Lyon", hotel: "NEW PALACE ,5 NIGHTS, 5 STARS", price: "$2,300" },
            { name: "GERMANY", image: "../Recursos/imagenes/alemania.jpg", details: "Berlin, Hamburg, Munich", hotel: "LUXE HOTEL,5 NIGHTS, 6 STARS", price: "$3,100" },
            { name: "SPAIN", image: "../Recursos/imagenes/españa.jpg", details: "Madrid, Barcelona, Valencia", hotel: "GOOD HOTEL,4 NIGHTS,6 STARS", price: "$4,800" }
        ];

        destinations.forEach(destination => {
            const div = document.createElement("div");
            div.classList.add("flexContenedorVertical");
            div.style.marginTop = `calc(${titleContainerHeight}px  50px)`; // Ajustar el margen superior para posicionar los destinos de viaje

            div.innerHTML = `
                <div class="configDiv1Textos">
                    <h2>${destination.name}</h2>
                </div>
                <img src="${destination.image}" alt="" style="width: 200px; height: auto;">
                <p class="configP1">${destination.details}</p>
                <p class="configP2">${destination.hotel}</p>
                <div class="configDiv1">
                    <button class="EstiloBotonesAbajo">${destination.price} BOOK NOW </button>
                </div>
            `;
            travelDestinations.appendChild(div);
        });

        const additionalHTML = `
            <div class=" flexContenedor" style="margin-top: 20px;">
                <img src="../Recursos/imagenes/cohete.png" alt="" style="width: 100px;">
                <img src="../Recursos/imagenes/isla.png" alt="" style="width: 100px;">
                <img src="../Recursos/imagenes/delfin.png" alt="" style="width: 100px;">
                <img src="../Recursos/imagenes/cohete.png" alt="" style="width: 100px;">
                <img src="../Recursos/imagenes/isla.png" alt="" style="width: 100px;">
                <img src="../Recursos/imagenes/delfin.png" alt="" style="width: 100px;">
            </div>
            <br>
            <br>
            <br>
            <br>
            <div class="flexContenedor flexContenedorAbajo" style="margin-top: 10px;">
                <img src="../recursos/imagenes/avion.png" alt="" height="80px" width="50px">
                <div class="configP3">
                    <p>Copyright @ 2084 Company Name - Travel by templatemo </p>
                </div>
                <nav class="flexContenedorAbajo">
                    <button><img src="../recursos/imagenes/facebook.png" alt="" height="10px" width="10px"></button>
                    <button><img src="../recursos/imagenes/twitter.png" alt="" height="10px" width="10px"></button>
                    <button><img src="../recursos/imagenes/linkendin.png" alt="" height="10px" width="10px"></button>
                    <button><img src="../recursos/imagenes/puntitos.png" alt="" height="10px" width="10px"></button>
                    <button><img src="../recursos/imagenes/wifi.png" alt="" height="10px" width="10px"></button>
                </nav>
            </div>
        `;

        travelDestinations.insertAdjacentHTML("afterend", additionalHTML);

        travelDestinations.style.display = "flex";
        travelDestinations.style.justifyContent = "center";
        travelDestinations.style.flexWrap = "wrap";
    }

    generatePageContent();
});

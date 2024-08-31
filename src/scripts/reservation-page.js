import "../styles/reservation-style.css"

export const reservationPage = () => {
    const content = document.createElement('div');
    content.setAttribute('class', 'reservation')

    content.innerHTML = `
    <div class="contact-us">
        <h2>Contact us</h2>
        <p>Für Reservationen können Sie uns während unseren Öffnungszeiten telefonisch erreichen oder auch via WhatsApp 032 7xx 45 45.</p>
        <img src="https://cdn.prod.website-files.com/62515e0d3cfd87ab1da93f7d/62bea958a3120382844504db_Instagram-Post%20%E2%80%93%2015.png">
        <p style="font-weight: bold; margin-top: 40px;">DAS KELVIN</p>
        <p>Du findest uns im Öufi-Areal im dritten Stock.</p>
        <p style="margin-top: -12px;">Mit dem Warenlift oder Treppe.</p>
    </div>
    <div class="side-bar">
        <div>
            <h5>SOMMER - ÖFFNUNGSZEITEN</h5>
            <p>Dienstag: (Auf Reservation)</p>
            <p>Mittwoch: (Auf Reservation)</p>
            <p>Donnerstag: 18:00 - 23:00</p>
            <p>Freitag:  18:00 - 01:00</p>
            <p>Küche bis 00:00</p>
            <p>Samstag:  18:00 - 01:00</p>
            <p>Küche bis 00:00</p>
            <p>Sonntag: Ruhetag
        </div>
        <div>
            <h5>KONTAKT</h5>
            <p>info@barfortyfive.ch</p>
            <p>Fabrikstrasse 4</p>
            <p>4500 Solothurn</p>
            <p>+41 32 7xx 45 45</p>
            <p>(auch WhatsApp)</p>
        </div>
    </div>`

    return content;
}
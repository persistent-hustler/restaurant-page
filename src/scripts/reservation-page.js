export const reservationPage = () => {
    const content = document.createElement('div');
    const reserveBtn = document.createElement('button');
    reserveBtn.innerText = 'Reserve Now!';
    content.appendChild(reserveBtn);

    return content;
}
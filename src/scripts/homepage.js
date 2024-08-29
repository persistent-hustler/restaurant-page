import tempPhoto from "../temp.jpg";

export const homePage = () => {
    const heading = document.createElement('h1');
    heading.innerText = 'Welcome';
    const image = document.createElement('img');
    image.src = tempPhoto;
    const content = document.createElement('div');
    content.appendChild(heading);
    content.appendChild(image);
    return content;
}
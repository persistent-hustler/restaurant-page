export const menuPage = () => {
    const content = document.createElement('ul');
    content.innerHTML = `<li>Item1 - $pp</li><li>Item2 - $nn<li>`
    return content;
}
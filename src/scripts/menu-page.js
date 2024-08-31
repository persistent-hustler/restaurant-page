import { categories } from "./menu-data";

export const menuPage = () => {
    const content = document.createElement('div');
    categories.forEach((category, index)=>{
        const categoryDiv = document.createElement('div');
        const categoryHeader = document.createElement('h2');
        categoryHeader.innerText = category.heading;
        categoryHeader.style.paddingBottom = '8px'
        categoryHeader.style.borderBottom = '1px solid black';
        categoryDiv.appendChild(categoryHeader);

        category.items.forEach((item)=>{
            const itemDiv = document.createElement('div');
            itemDiv.innerHTML = `<h3>${item.name}</h3><p>${item.price}</p>`;
            itemDiv.setAttribute('style', 'display: flex; justify-content: space-between; align-items: center;');
            itemDiv.style.marginBottom = '-24px';

            const ingredientDetails = document.createElement('p');
            ingredientDetails.innerText = item.ingredients;
            ingredientDetails.style.width = '80%';

            categoryDiv.appendChild(itemDiv);
            categoryDiv.appendChild(ingredientDetails);
        });

        categoryDiv.style.marginBottom = '60px';

        content.appendChild(categoryDiv);
    });

    return content;
}
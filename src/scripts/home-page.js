import "../styles/home-style.css"

export const homePage = () => {
    const content = document.createElement('div');

    const introImage = document.createElement('img');
    introImage.src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D';
    introImage.setAttribute('id', 'intro-image')
    
    const heading = document.createElement('h1');
    heading.innerText = 'Fine Dining trifft auf Industrial Chic';

    const cards = [
        {
            imageSrc: 'https://cdn.prod.website-files.com/62515e0d3cfd87ab1da93f7d/65e0d4328fb4af3ec446527e_WhatsApp%20Bild%202024-02-29%20um%2019.59.28_ca4ec0c2.jpg',
            title: 'Il Ristorante',
            text: `Nico und Patrik laden Sie ein, bei uns eine kulinarische Reise zu erleben, 
            die durch die Unmittelbarkeit der Handarbeit und den Luxus der Frische definiert wird. 
            Entdecken Sie mit uns die unendlichen Möglichkeiten der Raffinesse und lassen Sie 
            sich von der reinen Freude an exquisiter Kulinarik verführen. In unserem Ambiente 
            verbinden sich Eleganz und Behaglichkeit zu einem Ort, der nicht nur den Gaumen, 
            sondern auch die Seele berührt. Jedes Gericht erzählt eine Geschichte – geformt von den Händen 
            unserer meisterhaften Köche, die nicht nur ihr Können, sondern auch ihr Herz in die Zubereitung 
            jeder Speise legen`,
        },
        {
            imageSrc: 'https://cdn.prod.website-files.com/62515e0d3cfd87ab1da93f7d/65b6ace053a7bd60427a627b_DSCF4977-p-3200.jpg',
            title: 'Il Bar - Lounge',
            text: `Lassen Sie den Alltagsstress hinter sich und nehmen Sie Platz in unseren gemütlichen Samt - 
            Sesseln oder Sofas von wo aus Sie eine wunderbare Sicht auf die einzigartige Kulisse der spektakulären 
            Bar geniessen. In unserem erholsamen mediterranem Ambiente können Sie sich an klassischen oder personalisierten 
            Drinks erfreuen. Überzeugen Sie sich selbst und lassen Sie sich von uns verwöhnen.`
        },
        {
            imageSrc: 'https://cdn.prod.website-files.com/62515e0d3cfd87ab1da93f7d/6589c56f039c434f076029e7_8563a9da-b7cc-40a7-bad5-74e2537ef9f6.jpg',
            title: 'Wir freuen uns auf Ihren Besuch',
            text: `Die Bar FortyFive befindet sich in Solothurn im Öufi Areal, an der Fabrikstrasse 4, ein Industrie 
            Gebäude mit Charme. Du findest uns im 3. Stock. Wenn es mal schnell gehen muss kannst du auch den Lift nehmen.`,
        }
    ];

    content.appendChild(introImage);
    content.appendChild(heading);
    content.appendChild(document.createElement('hr'));

    cards.forEach((card, index)=>{
        const section = document.createElement('section');

        const image = document.createElement('img');
        image.src = card.imageSrc;

        const textDiv = document.createElement('div');
        textDiv.innerHTML = `<h2>${card.title}</h2>
        <p>${card.text}</p>`
        
        if(index%2===0) {
            section.appendChild(image);
            section.appendChild(textDiv);
        } else {
            section.appendChild(textDiv);
            section.appendChild(image);
        }
        

        content.appendChild(section);
    })

    return content;
}


export default function menu(){
    const content = document.getElementById('content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    
    //Page Content
    pageContent.setAttribute('id', 'page-content-menu')

    //Title
    const titleMenu = document.createElement('h1')
    titleMenu.setAttribute('id', 'title-menu');
    titleMenu.textContent = 'Menu';
    pageContent.appendChild(titleMenu);

    //gallery

    const gallery = document.createElement('div')
    gallery.setAttribute('id', 'gallery');
    pageContent.appendChild(gallery)

    //images of gallery

    const fig1 = document.createElement('figure');
    const img1 = document.createElement('img'); 
    const cap1 = document.createElement('caption');
    fig1.setAttribute('id', 'fig1')
    img1.setAttribute('id', 'img1')
    cap1.textContent = 'Burgers'
    gallery.appendChild(fig1);
    fig1.appendChild(img1);
    fig1.appendChild(cap1);

    const fig2 = document.createElement('figure');
    const img2 = document.createElement('img')
    const cap2 = document.createElement('caption');
    fig2.setAttribute('id', 'fig2')
    img2.setAttribute('id', 'img2')
    cap2.textContent = 'Pizzas'
    gallery.appendChild(fig2);
    fig2.appendChild(img2);
    fig2.appendChild(cap2);

    const fig3 = document.createElement('figure');
    const img3 = document.createElement('img')
    const cap3 = document.createElement('caption');
    fig3.setAttribute('id', 'fig3')
    img3.setAttribute('id', 'img3')
    cap3.textContent = 'Tacos'
    gallery.appendChild(fig3);
    fig3.appendChild(img3)
    fig3.appendChild(cap3)

    const fig4 = document.createElement('figure');
    const img4 = document.createElement('img')
    const cap4 = document.createElement('caption');
    fig4.setAttribute('id', 'fig4')
    img4.setAttribute('id', 'img4')
    cap4.textContent = 'Pastas'
    gallery.appendChild(fig4);
    fig4.appendChild(img4)
    fig4.appendChild(cap4)



    content.appendChild(pageContent)
}
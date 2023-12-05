
export default function home(){
    const content = document.getElementById('content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    //pageContent
    pageContent.setAttribute('id', 'page-content-main')

    //Title of main
    const title = document.createElement('h1')
    title.setAttribute('id', 'title-main');
    title.textContent = 'Welcome To Our Restaurant'
    pageContent.appendChild(title);

    //parrot of main
    const parrot = document.createElement('p')
    parrot.setAttribute('id', 'parrot-main');
    parrot.textContent = "Welcome to our charming restaurant, where we embrace you with a fusion of delectable flavors and warm hospitality!"
    pageContent.appendChild(parrot);


    content.appendChild(pageContent)
}
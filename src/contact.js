

export default function contact(){
    const content = document.getElementById('content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    pageContent.setAttribute('id', 'page-content-contact')

    //Title

    const titleContact = document.createElement('h1')
    titleContact.setAttribute('id', 'title-contact')
    titleContact.textContent = 'Contact Us'
    pageContent.appendChild(titleContact);

    //Form

    const form = document.createElement('form')
    form.classList.add('contact-form');
    pageContent.appendChild(form)

    //Inputs and Labels
    const divInput1 = document.createElement('div')
    const label1 = document.createElement('label')
    const input1 = document.createElement('input')
    divInput1.setAttribute('id','divInput1')
    label1.textContent = 'Name'
    input1.placeholder = 'Jhon'
    input1.type = 'text'
    form.appendChild(divInput1)
    divInput1.appendChild(label1)
    divInput1.appendChild(input1)

    const divInput2 = document.createElement('div')
    const label2 = document.createElement('label')
    const input2 = document.createElement('input')
    divInput2.setAttribute('id','divInput2')
    label2.textContent = 'Surname'
    input2.placeholder = 'Doe'
    input2.type = 'text'
    form.appendChild(divInput2)
    divInput2.appendChild(label2)
    divInput2.appendChild(input2)
    
    const divInput3 = document.createElement('div')
    const label3 = document.createElement('label')
    const input3 = document.createElement('input')
    divInput3.setAttribute('id','divInput3')
    label3.textContent = 'Email'
    input3.placeholder = 'jhonDoe@gmail.com'
    input3.type = 'email'
    form.appendChild(divInput3)
    divInput3.appendChild(label3)
    divInput3.appendChild(input3)

    const divbtn = document.createElement('div')
    const btnSubmit = document.createElement('button')
    divbtn.setAttribute('id', 'submitContainer')
    btnSubmit.setAttribute('id', 'btnSumbit')
    btnSubmit.textContent = 'Submit'
    form.appendChild(divbtn)
    divbtn.appendChild(btnSubmit)
    
    content.appendChild(pageContent)
}
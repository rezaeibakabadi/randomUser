import get from "./getElement.js";
const img = get('.user-img');
const title = get('.user-title');
const value = get('.user-value');
const icon = [...document.querySelectorAll('.icon')];


const displayUser = (person) =>{
    img.src = person.image ; 
    value.textContent = person.name;
    title.textContent = 'My Name is ';
    icon.forEach((btn) => btn.classList.remove('active'));

    icon[0].classList.add('active');
    icon.forEach((btn) => {
        const lable = btn.dataset.lable;
        btn.addEventListener('click', () =>{
            title.textContent = `My ${lable} is`;
            value.textContent = person[lable];
            icon.forEach((btn) => btn.classList.remove('active'));
            btn.classList.add('active')
        })
    })
}

export default displayUser;
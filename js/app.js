let obj = {
    table : document.querySelector('.table_selection'),
    cards : document.querySelector('.cards_selection'),
    reg_form : document.querySelector('.reg_container'),
    login : document.querySelectorAll('.login'),
    reg_close : document.querySelector('.close_button')
}
function DisplayTable() {
    obj.cards.classList.add('hide');
    obj.table.classList.remove('hide');
}
function DisplayCards() {
    obj.cards.classList.remove('hide');
    obj.table.classList.add('hide');
}

function Open_form() {
    obj.reg_form.classList.remove('reg_container_close');
    obj.reg_form.classList.add('reg_container_open');
}
function Close_form(){
    obj.reg_form.classList.remove('reg_container_open');
    obj.reg_form.classList.add('reg_container_close');


}
obj.login.forEach( el => el.addEventListener('click', Open_form));
// obj.login.addEventListener('click', Open_form);
obj.reg_close.addEventListener('click', Close_form);

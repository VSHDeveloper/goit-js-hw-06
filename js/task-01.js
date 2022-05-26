const menuListEl = document.querySelector('#categories');
const countMenuItemEl = menuListEl.children.length;
console.log(`Number of categories: ${countMenuItemEl}`);

const subMenuItemEl = document.querySelectorAll('.item');

subMenuItemEl.forEach(item => {
    const titleSubMenuItemEl = item.querySelector('h2');
    console.log(`Category: ${titleSubMenuItemEl.textContent}`);
    
    const countCategorySubMenuItemEl = item.querySelector('.item ul').children.length;
    console.log(`Elements: ${countCategorySubMenuItemEl}`);
});
const UlIdCategories = document.getElementById('categories');


function amountLiItem(elements) {
    const allElelment = [...elements.children];
    console.log(`Number of categories: ${allElelment.length}`);
    allElelment.forEach(element => {
        console.log(`Category: ${element.firstElementChild.textContent}`);
        console.log(`Elements: ${element.lastElementChild.children.length}`);
    })
}

amountLiItem(UlIdCategories);
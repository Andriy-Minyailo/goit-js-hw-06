const allLiClassItem = document.querySelectorAll('.item');

function amountLiItem(event) {
    console.log(`Number of categories: ${allLiClassItem.length}`);
    event.forEach(element => {
        console.log(`Category: ${element.querySelector('h2').textContent}`);
        console.log(`Elements: ${element.querySelectorAll('li').length}`);
    })
}

amountLiItem(allLiClassItem);
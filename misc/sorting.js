const items = [2, 1, 3, 5, 4, 8, 9, 7, 6, 0];

for (let j = 0; j < items.length; j++) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] > items[i + 1]) {
            const tmp = items[i];
            items[i] = items[i + 1];
            items[i + 1] = tmp;
        }
    }
    console.log(items);   
}
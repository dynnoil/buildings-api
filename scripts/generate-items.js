const fs = require('fs');
const path = require('path');
const faker = require('faker');

const generateRandomItem = () => ({
    name: faker.lorem.word(),
    description: faker.lorem.words(),
    image: faker.image.imageUrl(),
    content: faker.lorem.paragraphs()
});

const DEFAULT_ITEMS_COUNT = 30;

const itemsCountIndex = process.argv.indexOf('--items-count');
const itemsCountValue = parseInt(process.argv[itemsCountIndex + 1]);
const itemsCount = itemsCountIndex !== -1 && !isNaN(itemsCountValue) ? itemsCountValue : DEFAULT_ITEMS_COUNT;

const items = [];

for (let i = 0; i < itemsCount; i++) {
    items.push(generateRandomItem())
}

const stringifiedItems = items.map(JSON.stringify).join('\n');

fs.writeFileSync(path.resolve(__dirname, 'data.json'), stringifiedItems);

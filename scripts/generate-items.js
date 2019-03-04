const fs = require('fs');
const path = require('path');
const faker = require('faker');

const generateBuilding = () => ({
    name: faker.lorem.word(),
    description: faker.lorem.words(),
    image: faker.image.imageUrl(),
    content: faker.lorem.paragraphs(),
    location: {
        address: faker.address.streetAddress(true),
        geoPosition: {
            latitude: faker.address.latitude(),
            longitude: faker.address.longitude()
        }
    },
    architects: [faker.name.lastName()],
    creationYears: [faker.random.number(2019)],
    architecturalStyle: ''
});

const generateArchitecturalStyle = () => ({
    name: faker.lorem.word(),
    url: faker.internet.url(),
    description: faker.lorem.words()
});

const getGenerator = (itemsType) => {
    switch (itemsType) {
        case 'buildings':
            return generateBuilding;
        case 'architectural-styles':
            return generateArchitecturalStyle;
        default:
            return generateBuilding;
    }
}

const args = {
    itemsType: {
        name: '--items-type',
        optional: false,
        values: ['buildings', 'architectural-styles']
    },
    itemsCount: {
        name: '--items-count',
        optional: true,
        default: 30
    },
    outDir: {
        name: '--out-dir',
        optional: true,
        default: 'data'
    }
}

function extractArgument(arg) {
    const argIndex = process.argv.indexOf(arg.name);
    if (argIndex === -1 && !arg.optional) {
        throw new Error(`Argument ${arg.name} is required`);
    }
    const argValueIndex = argIndex + 1;
    const argValue = process.argv[argValueIndex];
    if (arg.values && arg.values.indexOf(argValue) === -1) {
        throw new Error(`Argument ${arg.name} should be one of [${arg.values}]`);
    }
    return argValueIndex && argValue && !/^--/im.test(argValue) ? argValue : arg.default;
}

const itemsType = extractArgument(args.itemsType);
const itemsCount = parseInt(extractArgument(args.itemsCount));
const outDir = extractArgument(args.outDir);

fs.existsSync(outDir, function (exists) {
    if (!exists) {
        fs.mkdirSync(outDir);
    }
});

const items = [];
const generator = getGenerator(itemsType);

for (let i = 0; i < itemsCount; i++) {
    items.push(generator());
}

const stringifiedItems = items.map(JSON.stringify).join('\n');

fs.writeFileSync(path.resolve(outDir, `${itemsType}.json`), stringifiedItems);

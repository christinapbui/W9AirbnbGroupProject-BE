// create fake data
// in terminal: code seedExperiences.js

// console.log(process.argv) // get every argument in an array

const faker = require("faker");
const Experience = require("./models/experience");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/w9-airbnb");

const num = parseInt(process.argv[2]); // 2 is the index in an array that process.argv returns

async function createExperiences(numExperiences) {
    console.log(`Generating ${numExperiences} Experiences...`);
    for (let i = 0; i < num; i++) {
        let experience = await Experience.create({
            title: faker.lorem.sentence(),
            pictureUrl: faker.image.image(),
            country: faker.address.country(),
            duration: faker.random.number(),
            price: faker.commerce.price(),
        });
        console.log(`Created ${i} - ${experience.title}`);
    }
}

createExperiences(num);

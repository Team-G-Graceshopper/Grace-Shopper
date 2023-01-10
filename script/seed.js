'use strict';

const {
	db,
	models: { User, Pet },
} = require('../server/db');

const { faker } = require('@faker-js/faker');

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
	await db.sync({ force: true }); // clears db and matches models to tables
	console.log('db synced!');

	// generate fake data with faker.js
	const fakeUsers = [];
	for (let i = 0; i < 10; i++) {
		fakeUsers.push({
			username: faker.internet.userName(),
			password: faker.internet.password(),
		});
	}	
    
	const fakePets = [];
	for (let i = 0; i < 50; i++) {
        let type = Math.random() < .5 ? 'cat' : 'dog';
        let breed = type === 'cat' ? faker.animal.cat() : faker.animal.dog();
        let imageUrl = faker.image.imageUrl(250, 250, type);
		fakePets.push({
			name: faker.name.firstName(),
			breed: breed,
            type: type,
            description: faker.commerce.productDescription(),
			imageUrl: imageUrl,
			price: faker.datatype.number({ min: 200, max: 1000 }),
			weight: faker.datatype.number({ min: 5, max: 25 }),
		});
	}

	// use Promise.all to create User, Dog, and Cat models
	const [users, pets] = await Promise.all([
		User.bulkCreate(fakeUsers),
		Pet.bulkCreate(fakePets),
	]);

	console.log(
		`seeded ${users.length} users, ${pets.length} pets`
	);
	console.log(`seeded successfully`);
	// return {
	// 	users: {
	// 		cody: users[0],
	// 		murphy: users[1],
	// 	},
	// };
}

/*
We've separated the `seed` function from the `runSeed` function.
This way we can isolate the error handling and exit trapping.
The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
	console.log('seeding...');
	try {
		await seed();
	} catch (err) {
		console.error(err);
		process.exitCode = 1;
	} finally {
		console.log('closing db connection');
		await db.close();
		console.log('db connection closed');
	}
}

/*
Execute the `seed` function, IF we ran this module directly (`node seed`).
`Async` functions always return a promise, so we can use `catch` to handle
any errors that might occur inside of `seed`.
*/
if (module === require.main) {
	runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;

const mongoose  = require("./connection");
const Bar = require("./bars.js");


mongoose.connection.on("open", async () => {
    await Bar.deleteMany();

    const startBars = [
        {
            barName: 'Bar at Eleven Madison Park',
            drink: {
              picture: 'https://i.imgur.com/42Awa9B.jpg',
              description: 'The Sunflower cocktail is inspired by the essence of a mai tai, with Ten to One Dark Rum, Batavia Arrack (a Dutch distillate made from sugar cane and red Javanese rice), apricot eau de vie, and sunflower miso orgeat. ',
            },
            walkabilityScore: 92,
            crimeRate: 49,
            ageRequirement: 21,
            population: 846000
          },  
    ]

await Bar.create(startBars);

mongoose.connection.close();

});
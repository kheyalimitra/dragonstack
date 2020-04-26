const express = require('express');
const cors = require('cors');
const GenerationEngine = require('./generation/generationEngine');
const dragonRouter = require ('./api/dragon');
const generationRouter = require ('./api/generation');
const app = express();
const engine = new GenerationEngine();
app.locals.engine = engine;
engine.start();

app.use(cors({origin: 'http://localhost:1234'}));
app.use('/dragon', dragonRouter);
app.use('/generation', generationRouter);
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        type: 'error', message: err.message

    })
});
module.exports = app;







// const Generation  = require('./generation');
// const generation = new Generation();
// console.log('generation', generation);

// const gooby = generation.newDragon();
// console.log('gooby', gooby);
// setTimeout(() => {
//     const mimar = generation.newDragon();
//     console.log('mimar', mimar);
// }, 15000);



// const Dragon = require('./dragon');
// const fooey = new Dragon({
//     birthdate: new Date(),
//     nickname: 'fooey'
// });
// const baloo = new Dragon({
//     birthdate: new Date(),
//     nickname: 'baloo'
// });
// const mimar =  new Dragon();
// setTimeout(() => {
//     const gooby = new Dragon();
//     console.log('gooby', gooby);
// }, 3000);

// console.log('fooey', fooey);
// console.log('baloo', baloo);
// console.log('mimar', mimar);


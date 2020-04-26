const Genearion = require('./index.js');
const GenerationTable = require('./table');

class generationEngine {
    constructor() {
        this.generation = null;
        this.timer = null;
    }
    start() {
        this.buildNewGeneration();
    }
    stop() {
        clearTimeout(this.timer);
    }
    buildNewGeneration() {
        const generation = new Genearion();
        GenerationTable.storeGeneration(generation)
        .then(({ generationId }) => {
            this.generation = generation;
            console.log('new generation', this.generation);
            this.timer = setTimeout(
                () => this.buildNewGeneration(), 
                this.generation.expiration.getTime() - Date.now()
            );
            this.generation.generationId = generationId;
        })
        .catch(error => console.error(error));

        
    }
}
module.exports = generationEngine;
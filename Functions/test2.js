let hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
        this.eggCount++;
        return ('EGG');
    }
};

hen.layAnEgg()


const greet = (name) => {
    return `hey ${name}!`;
}

greet(hagrid)
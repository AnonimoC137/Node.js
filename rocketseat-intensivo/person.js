class Person {
    constructor(name) {
        this.name = name;
    }

    sayMyName() {
        return `meu nome e ${this.name}`
    }
}

// para exportar isso

module.exports = {
    Person,
}
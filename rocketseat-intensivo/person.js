class Person {
    constructor(name) {
        this.name = name;
    }

    sayMyName() {
        return `my name is ${this.name}`
    }
}

// para exportar isso

module.exports = {
    Person,
}
class Owner {
    constructor(name, Pet) {
        this.name = name;
        this.Pet=Pet;
    }

    getName() {
        return this.name;
    }

    setName(value) {
        this.name = value;
    }

    getPet() {
        return this.Pet;
    }

    setPet(value) {
        this.Pet = value;
    }
}

class Pet{

    constructor(name, Owner) {
        this.name = name;
        this.Owner = Owner;
    }

    getName() {
        return this.name;
    }

    setName(value) {
        this.name = value;
    }

    getOwner() {
        return this.Owner;
    }

    setOwner(value) {
        this.Owner = value;
    }
}

let owner1 = new Owner("Nick",{});
let pet1 = new Pet("Sticker",owner1);
owner1.setPet(pet1);
console.log(owner1);
console.log(pet1);
let pets = new Map();
pets.set("Cat", "Lily");
pets.set("Dog", "Jello");
pets.set("Hamster", "Cutie");
pets.set("Snake", "Pit");
        pets.forEach((value, key) =>{
        console.log(`Ключ — ${key}, значение — ${value}`)
});

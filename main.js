const createFunkArtist = (name, genre, age) => {
    return {
        name: name,
        genre: genre,
        age: age
    }
}

const createRapArtist = (name, genre, age) => {
    return {
        name: name,
        genre: genre,
        age: age
    }
}

const createBluegrassArtist = (name, genre, age) => {
    return {
        name: name,
        genre: genre,
        age: age
    }
}

const createCountryArtist = (name, genre, age) => {
    return {
        name: name,
        genre: genre,
        age: age
    }
}

const createPopArtist = (name, genre, age) => {
    return {
        name: name,
        genre: genre,
        age: age
    }
}

const chattenRecords = [
    createCountryArtist("Bruce Atikins", "Counry", 23), 
    createBluegrassArtist("Bartholomew Danielson", "Bluegrass", 23),
    createCountryArtist("Avilee Dallas", "Country", 19)
]

const jumpStopRecords = [
    createFunkArtist("Dre Funkz", "Funk", 25),
    createRapArtist("Dusta Grimes", "Rap", 21),
    createRapArtist("Loyoncé Branis", "Rap", 27)
]

const polarRecords = [
    createPopArtist("Jensen Brown", "Pop", 20),
    createPopArtist("Austin Kinkaid", "Pop", 22)
]

console.log("Chatten Records", chattenRecords)
console.log("Jump Stop Records", jumpStopRecords)
console.log("Polar Records", polarRecords)
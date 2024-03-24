// Creating a function with Parameters which return a value in string

function city_country(city: string, country: string): string {
    return `${city}, ${country}`

}
let w1 = city_country("Islamabad", "Pakistan")
let w2 = city_country("Rome" , "Italy")
let w3 = city_country("Sydney" , "Australia")


console.log(w1);
console.log(w2);
console.log(w3);
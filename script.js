const title = document.getElementById("ticket-title");
const ticket = document.getElementById("ticket-main");
const formElm = document.getElementById('ticketForm');

/**
 * function that calculate the price of the ticket based on voyage and age
 * @param {number} length - lenght of the voyage
 * @param {number} age - age of the passenger
 * @returns price of the ticket rounded to .00
 */
const calculatePrice = (length, age) => {
    if (age < 18) return (0.21 * length * 0.8).toFixed(2);
    else if (age > 65) return (0.21 * length * 0.6).toFixed(2);
    else return (length * 0.21).toFixed(2);


}
/**
 * return a random cambio prenotazione code
 * @returns a random number between 999999 and 1
 */
const generateCP = () => {
    return Math.floor(Math.random() * (999999 - 1) + 1)
}
/**
 * 
 * @returns a random number between 12 and 1
 */
const trainCar = () => {
    return Math.floor(Math.random() * (12 - 1) + 1)
}
/**
 * 
 * @param {string} age - age of the passenger
 * @returns a string containing the type of ticket to be made
 */
const ticketType = (age) => {
    if (age === "other") return "Biglietto standard"
    else return "Biglietto ridotto"
}

formElm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("nameSurname").value; 
    const km = document.getElementById("kms").value;
    const age = document.getElementById("age").value;
    let numAge;

    if (age === "minor") numAge = 1
    else if (age === "over") numAge = 66
    else numAge = 22

    document.getElementById("nameT").innerHTML = `${name}`
    document.getElementById("offer").innerHTML = `${ticketType(age)}`
    document.getElementById("car").innerHTML = `${trainCar()}`
    document.getElementById("code").innerHTML = `${generateCP()}`
    document.getElementById("price").innerHTML = `${calculatePrice(parseFloat(km), numAge)}€`
    ticket.classList.remove("d-none");
    title.classList.remove("d-none");
})
const reset = document.getElementById("reset")
reset.addEventListener("click", function () {
    ticket.classList.add("d-none")
    title.classList.add("d-none")

})
/* random coment */
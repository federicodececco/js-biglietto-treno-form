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


formElm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("nameSurname").value;
    const km = document.getElementById("kms").value;
    const age = document.getElementById("age").value;
    let numAge;

    if (age === "minor") numAge = 1
    else if (age === "over") numAge = 66
    else numAge = 22
    const price = calculatePrice(parseFloat(km), numAge)
    document.getElementById("nameT").innerHTML = `${name}`
    document.getElementById("offer").innerHTML = `${age}`
    document.getElementById("car").innerHTML = ``
    document.getElementById("code").innerHTML = `2`
    document.getElementById("price").innerHTML = `${price}€`
    ticket.classList.remove("d-none");
    title.classList.remove("d-none");
})
const reset = document.getElementById("reset")
reset.addEventListener("click", function () {
    ticket.classList.add("d-none")
    title.classList.add("d-none")

})

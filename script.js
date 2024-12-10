const title = document.getElementById("ticket-title");
const ticket = document.getElementById("ticket-main");
const formElm = document.getElementById('ticketForm');
formElm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("nameSurname").value;
    const km = document.getElementById("kms").value;
    const age = document.getElementById("age").value;

    document.getElementById("nameT").innerHTML = `${name}`
    document.getElementById("offer").innerHTML = `${age}`
    document.getElementById("car").innerHTML = `1`
    document.getElementById("code").innerHTML = `2`
    document.getElementById("price").innerHTML = `3`
    ticket.classList.remove("d-none");
    title.classList.remove("d-none");
})
const reset = document.getElementById("reset")
reset.addEventListener("click", function () {
    ticket.classList.add("d-none")
    title.classList.add("d-none")

})

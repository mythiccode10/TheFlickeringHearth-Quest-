const button = document.getElementById("order-btn");
// BUG: Attempting to add a listener to a variable that hasn't been defined yet
button.addEventListener("click", () => {
    alert("Order Placed!");
});

// BUG: The developer forgot to actually 'select' the element first


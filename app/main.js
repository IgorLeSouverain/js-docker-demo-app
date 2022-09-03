document.getElementsByClassName("dog-name")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementsByClassName("edit-button").click();
    }
});

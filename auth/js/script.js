var checkbox = document.querySelector("input[name=checkbox]");
checkbox.addEventListener( 'change', function() {
    if(this.checked) {
        // Checkbox is checked..
        $(".type").text("Sign Up");
        $("#signup_stuff").removeClass("hidden");
        $("#login_stuff").addClass("hidden");
    } else {
        // Checkbox is not checked..
        $(".type").text("Login");
        $("#login_stuff").removeClass("hidden");
        $("#signup_stuff").addClass("hidden");
    }
});

$("input[name=checkbox]").prop('checked', false);
var anjan = document.getElementById('name').value;
var rachana = document.getElementById('email').value;
var rusa = document.getElementById('address').value;
var jasmine = document.getElementById('message').value;

if (anjan === "") {
    alert("name is required")
} else if (rachana === "") {
    alert("email is required")
}
else if (rusa === "") {
    alert('address is required')
}
else if (jasmine === "") {
    alert("message is required")
} else {
    alert("message sent")
}

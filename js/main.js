
function up() {
    document.getElementById('Input').stepUp(1);
 }
 function down() {
    document.getElementById('Input').stepDown(1);
 }

const numAbove = document.querySelector('first')

function show(one){
    one =parseFloat(one)
    document.getElementById('first').innerText = (one)
}
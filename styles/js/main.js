const login = document.getElementById('btn')

function abrirLogin () {

    location.href = "index.html"
}

function validarDatos () {
let inputValuesX = document.getElementsByClassName("inputUser");

let inputValuesY = document.getElementsByClassName("inputPass");


nameValue = [{ user: 'Admin', password: 'Admin1234' }, { user: 'Customer', password: 'Customer1234' }].filter(element => element.user === inputValuesX[0].value && element.password === inputValuesY[0].value);

 if (nameValue.length > 0) {
   location.href = "Admin.html";
 } else {
   alert("Verifique sus datos.");
 }

}

login.addEventListener("click", (e) => {
  e.preventDefault();
setTimeout(()=>{
validarDatos();
},3000)
  
});
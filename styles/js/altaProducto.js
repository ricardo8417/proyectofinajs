
let stock = [];

const capturaForm = document.getElementById('formCaptura');
const invList = document.getElementById("invList");
 




const createProduct = (id,codigo,nomProduct,anaquel,cantidad,precio) =>{
return{
id:id,
codigo:codigo,
nomProduct:nomProduct,
anaquel:anaquel,
cantidad: cantidad,
precio: precio

}

}

const addProducts = (invProduct) =>{
  const div = document.createElement("div");
    stock.push(invProduct);

  div.innerHTML += `
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Código</strong>: ${invProduct.codigo} -
                <strong>Producto</strong>: ${invProduct.nomProduct}-
                <strong>Anaquel</strong>: ${invProduct.anaquel}-
                <strong>Cantidad</strong>: ${invProduct.cantidad}-
                <strong>Precio</strong>:$ ${invProduct.precio}
                <button href="#" class="btn btn-danger" id="${invProduct.id}" name="delete">Delete</button>
            </div>
        </div>
    `;
    invList.appendChild(div);
// Vaciamos el formulario con el método reset()
    capturaForm.reset();

    // Guardamos el array de tareas en el storage
    saveInvStorage(stock)

}

function idrandomInt(max) {
  return Math.floor(Math.random() * max);
}

const saveInvStorage = (stock) => {
    localStorage.setItem('inventario', JSON.stringify(stock))
};

const getInvStorage = () => {
    const getInvStorage = JSON.parse(localStorage.getItem('inventario'))
    return getInvStorage
};

const getInv = () => {
    if (localStorage.getItem('inventario')) {
        stock = getInvStorage()
        verInv(stock)
    }
};

const verInv = (stock) => {
    const div = document.createElement("div");

    invList.innerHTML = '';

    stock.forEach(invProduct => {
        div.innerHTML += `
              <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Código</strong>: ${invProduct.codigo} -
                <strong>Producto</strong>: ${invProduct.nomProduct}-
                <strong>Anaquel</strong>: ${invProduct.anaquel}-
                <strong>Cantidad</strong>: ${invProduct.cantidad}-
                <strong>Precio</strong>:$ ${invProduct.precio}
                <button href="#" class="btn btn-danger" id="${invProduct.id}" name="delete">Delete</button>
            </div>
        </div>
        `;
        invList.appendChild(div);
    });
};


const deleteInv = (id) => {
    const index = stock.findIndex(invProduct => invProduct.id == id)
    stock.splice(index, 1)
    verInv(stock)
    saveInvStorage(stock)
};


capturaForm.addEventListener('submit', (e) =>{
  e.preventDefault();
const form = new FormData (capturaForm);
const id = idrandomInt(200);
const codigo = form.get('inputCodigo');
const nomProduct = form.get('inputNom');
const anaquel = form.get('inputAnaquel');
const cantidad = form.get('inputCantidad');
const precio = form.get('inputPrecio');

const invProduct = createProduct (id, codigo, nomProduct, anaquel, cantidad, precio);

addProducts(invProduct)

})


// Event delegation
invList.addEventListener('click', (e) => {
    deleteInv(e.target.id)
})

getInv()





 function insumosOver(elemento) {
           var cajaOver = document.getElementById(elemento)
      	   
      	   cajaOver.style.backgroundColor = '#F3F707' 
      	   cajaOver.style.fontSize = '26px'
}
function insumosOut(elemento) {
            var cajaOut = document.getElementById(elemento)

            cajaOut.style.backgroundColor = '#F3F707'
            cajaOut.style.fontSize = '20px'

} 
function hamburguesa() {
    var menu = document.getElementById('botonera_principal')
    if (menu.style.display == 'none') {
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
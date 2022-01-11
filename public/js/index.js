let main=document.querySelector('main')
let h2=document.querySelector('h2')
let a=document.querySelector('a')
let p=document.querySelectorAll('p')

let nombre = prompt('ingrese su nombre')
if(nombre){
    h2.innerText+=nombre
}else{
h.innerText+-"invitado"
}

h2.style.textTransform='uppercase'
a.style.color='#E51B3E'

let response = confirm('desea colocar un fondo de pantalla?')

response & document.body.classList.add('fondo')
p.forEach((parrafo,index)=>{
index % 2 == 0 ? parrafo.classList.add('destacadoPar'):parrafo.classList.add('destacadoImpar')
})
main.style.display='block'
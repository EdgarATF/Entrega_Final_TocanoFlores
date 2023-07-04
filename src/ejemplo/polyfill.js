

const users = [
    {
        id: 1,
        nombre: "fede",
        rol: "tutor adjunto"
    },
    {
        id: 2,
        nombre: "juan",
        rol: "tutor regular"
    },
    {
        id: 3,
        nombre: "matias",
        rol: "lider"
    },
    {
        id: 1,
        nombre: "pedro",
        rol: "tutor regular"
    }

]

/*const resultado = users.find((user) => user.nombre === "matias")
console.log(resultado) */


function encontrarr(arr, fn){
    for(var i = 0; i< arr.length; i++){
        var current = arr[i]

        if(fn(current)===true){
            return current
        }
        
    }
}

function filtrar(arr, fn){
    var filtrado = []
    for(var i = 0; i< arr.length; i++){
        var current = arr[i]

        if(fn(current)===true){
            filtrado.push(current)
        }
        
    }
    return filtrado
}

const resultado = encontrarr(users, (user)=> user.nombre === "matias")
const resultado2 = filtrar(users, (user)=> user.rol === "tutor regular")
console.log(resultado2)
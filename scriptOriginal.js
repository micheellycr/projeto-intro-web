/* //Meus rappers favs:
//Nome, Idade, Vivo

const rapper1 = {
    nome: "Tasha Okereke",
    idade: 23,
    nacional: true,
    albuns: ["Rouff, Diretoria"],
    imagem: "PNGFALSO.jpg"
}

const rapper2 = {
    nome: "Tracie Okereke",
    idade: 23,
    nacional: true,
    albuns: ["Rouff, Diretoria"],
    imagem: "PNGFALSO.jpg"
}

const rapper3 = {
    nome: "Andre Young",
    idade: 57,
    nacional: false,
    albuns: ["The Chronic, 2001, Compton"],
    imagem: "PNGFALSO.jpg"
}

const rapper4 = {
    nome: "Christopher George Latore Wallace",
    idade: 24,
    nacional: false,
    albuns: ["Life After Death, Ready To Die"],
    imagem: "PNGFALSO.jpg"
}

const rapper5 = {
    nome: "Gustavo Pereira Marques",
    idade: 28,
    nacional: true,
    albuns: ["Heresia, O menino Que Queria Ser Deus, Ladrão, NU, O Dono do Lugar"],
    imagem: "PNGFALSO.jpg"
}

const mediaIdades = (rapper1.idade + rapper2.idade + rapper3.idade + rapper4.idade + rapper5.idade) / 5
//console.log(mediaIdades)

/* console.log(`${rapper1.nome1.toUpperCase()}`, "\n" , `${rapper1.idade1}`, "\n", `${rapper1.vivo1}`, "\n", `${rapper1.albuns1}`)

console.log(`${rapper2.nome2.toUpperCase()}`, "\n" , `${rapper2.idade2}`, "\n", `${rapper2.vivo2}`, "\n", `${rapper2.albuns2}`)

console.log(`${rapper3.nome3.toUpperCase()}`, "\n" , `${rapper3.idade3}`, "\n", `${rapper3.vivo3}`, "\n", `${rapper3.albuns3}`) 

const arrayObjetos = []
//arrayObjetos.push(rapper1, rapper2, rapper3)
//console.log(arrayObjetos)

 if (rapper1.nacional === true) {
    arrayObjetos.push(rapper1)
} else {
    alert("Não é nacional")
}

if (rapper2.nacional === true) {
    arrayObjetos.push(rapper2)
} else {
    alert("Não é nacional")
}

if (rapper3.nacional === true) {
    arrayObjetos.push(rapper3)
} 
if (rapper4.nacional === true) {
    arrayObjetos.push(rapper4)
}

if (rapper5.nacional === true) {
    arrayObjetos.push(rapper5)
}
else {
    //alert("Não é nacional")
} 

//console.log(arrayObjetos)

for (let i in arrayObjetos) {
    for (j in arrayObjetos[i]) {
        console.log(arrayObjetos[i][j])
    }
} 

function devolveString (objeto) {
    for (let i in objeto) {
        console.log(`${objeto[i]}`)
    }
}

devolveString(rapper1)
devolveString(rapper2)
devolveString(rapper3)
devolveString(rapper4)
devolveString(rapper5)

/*  function devolveObjeto (arrayObjetos, string){
    let novoObjeto = {}
    for(let i in arrayObjetos){
        for(let n of arrayObjetos[i]){
            n === string && novoObjeto.push(n) 
        }
        //for(let n of arrayObjetos[i])
        //n != string && alert("nenhum item encontrado")
    }
    return novoObjeto
}

devolveObjeto(arrayObjetos, "meuNome1")  */

/*  function devolveObjeto (arrayObjetos, string){
    let novoObjeto = {}

        for(let i in arrayObjetos){
            for(let n of arrayObjetos[i]){
                n in arrayObjetos[i] === string && novoObjeto.push(n)
                console.log(novoObjeto)
            }
            
        }
    //return novoObjeto
}

console.log(devolveObjeto(arrayObjetos, "meuNome1")) */


/* function devolveObjeto (arrayObjetos, string){
    for(const index in arrayObjetos) {
        if(arrayObjetos[index] === string){
            console.log(arrayObjetos[index])
        }else{
            alert("nenhum item encontrado")
        }
        
    }
}

devolveObjeto(arrayObjetos[1], "meuNome1")
 */


//ESSA AQUI RETONAR O NOME + OBJECT OBJECT VER
/*  function retornaObjeto (arrayObjetos,string){
    let devolveObjeto =  {}
    for(let i in arrayObjetos){
        for(let j in arrayObjetos[i]){
            if(arrayObjetos[i][j] === string){
                devolveObjeto += arrayObjetos[i][j]
            }
        }
    }
    console.log(devolveObjeto)
    // return retornaObjeto
}

retornaObjeto(arrayObjetos,"meuNome1")  */

/* function retornaObjeto (arrayObjetos, string){
    let retornaObjeto = arrayObjetos.lenght
    if(retornaObjeto[i] === string) {
        console.log(retornaObjeto)}
        console.log(retornaObjeto[i])
    }

retornaObjeto(arrayObjetos, "meuNome1") */

//let devolveObjeto = arrayObjetos.filter()

//deve retornar um objeto ou um alert
/* function retornaObjeto (arrayObjetos, string){
    let devolveObjeto = arrayObjetos.filter((x) => x.nome === string)
        if(devolveObjeto.length >= 1){
            console.log(devolveObjeto[0])
        }else{
            alert("nenhum item encontrado")
        }

    
}

retornaObjeto(arrayObjetos,"meuNome3") */
//console.log(arrayObjetos) */

/* function retornaObjeto (arrayObjetos, string){
    let devolveObjeto = arrayObjetos.length
    console.log(devolveObjeto)
}


let devolveObjeto = arrayObjetos.length
    console.log(devolveObjeto)

    console.log(arrayObjetos) 
 
    
 function devolveObjeto(arrayObjetos, string){
    let objetoRetornado = {}

    for (let i = 0; i < arrayObjetos.length; i++){
        if (arrayObjetos[i].nome === string){
            console.log(objetoRetornado = arrayObjetos[i]) 
        }else{
            //alert("nenhum item encontrado")
        }
    }//console.log(objetoRetornado)
}

devolveObjeto(arrayObjetos, "meuNome1")


/* for (let i = 0; i < arrayObjetos.length; i++){
    if (arrayObjetos[i].nome === "meuNome1"){
        console.log(arrayObjetos[i])
        }
   } */


/* const minhaInformacao1 = document.getElementById("informacao1")
console.log(minhaInformacao1.innerHTML)

minhaInformacao1.innerHTML = rapper2.nome
 


//UTILIZANDO O DOM ETC E TAL

//NOME OBJETO 1
const meuItemUmObjeto1 = document.getElementById("itemUmObjeto1")
//console.log(meuItemUmObjeto1.innerHTML)

meuItemUmObjeto1.innerHTML = "<b>Nome: </b>" + rapper1.nome

//IDADE OBJETO 1
const meuItemDoisObjeto1 = document.getElementById("itemDoisObjeto1")
//console.log(meuItemDoisObjeto1.innerHTML)

meuItemDoisObjeto1.innerHTML = "<b>Idade: </b>" + rapper1.idade + " anos"

//VIVO OBJETO 1
const meuItemTresObjeto1 = document.getElementById("itemTresObjeto1")
//console.log(meuItemTresObjeto1.innerHTML)

meuItemTresObjeto1.innerHTML = "<b>Nacional: </b>" + rapper1.nacional

//ÁLBUNS OBJETO 1
const meuItemQuatroObjeto1 = document.getElementById("itemQuatroObjeto1")
//console.log(meuItemQuatroObjeto1.innerHTML)

meuItemQuatroObjeto1.innerHTML = "<b>Álbuns: </b>" + rapper1.albuns








//NOME OBJETO 2
const meuItemUmObjeto2 = document.getElementById("itemUmObjeto2")
//console.log(meuItemUmObjeto2.innerHTML)

meuItemUmObjeto2.innerHTML = "<b>Nome: </b>" + rapper2.nome

//IDADE OBJETO 2
const meuItemDoisObjeto2 = document.getElementById("itemDoisObjeto2")
//console.log(meuItemDoisObjeto2.innerHTML)

meuItemDoisObjeto2.innerHTML = "<b>Idade: </b>" + rapper2.idade + " anos"

//VIVO OBJETO 2
const meuItemTresObjeto2 = document.getElementById("itemTresObjeto2")
//console.log(meuItemTresObjeto2.innerHTML)

meuItemTresObjeto2.innerHTML = "<b>Nacional: </b>" + rapper2.nacional

//ÁLBUNS OBJETO 2
const meuItemQuatroObjeto2 = document.getElementById("itemQuatroObjeto2")
//console.log(meuItemQuatroObjeto2.innerHTML)

meuItemQuatroObjeto2.innerHTML = "<b>Álbuns: </b>" + rapper2.albuns









//NOME OBJETO 3
const meuItemUmObjeto3 = document.getElementById("itemUmObjeto3")
//console.log(meuItemUmObjeto3.innerHTML)

meuItemUmObjeto3.innerHTML = "<b>Nome: </b>" + rapper3.nome

//IDADE OBJETO 3
const meuItemDoisObjeto3 = document.getElementById("itemDoisObjeto3")
//console.log(meuItemDoisObjeto3.innerHTML)

meuItemDoisObjeto3.innerHTML = "<b>Idade: </b>" +  rapper3.idade + " anos"

//VIVO OBJETO 3
const meuItemTresObjeto3 = document.getElementById("itemTresObjeto3")
//console.log(meuItemTresObjeto3.innerHTML)

meuItemTresObjeto3.innerHTML = "<b>Nacional: </b>" + rapper3.nacional

//ÁLBUNS OBJETO 3
const meuItemQuatroObjeto3 = document.getElementById("itemQuatroObjeto3")
//console.log(meuItemQuatroObjeto3.innerHTML)

meuItemQuatroObjeto3.innerHTML = "<b>Álbuns: </b>" + rapper3.albuns






//NOME OBJETO 4
const meuItemUmObjeto4 = document.getElementById("itemUmObjeto4")
//console.log(meuItemUmObjeto4.innerHTML)

meuItemUmObjeto4.innerHTML = "<b>Nome: </b>" + rapper4.nome

//IDADE OBJETO 4
const meuItemDoisObjeto4 = document.getElementById("itemDoisObjeto4")
//console.log(meuItemDoisObjeto4.innerHTML)

meuItemDoisObjeto4.innerHTML = "<b>Idade: </b>" +  rapper4.idade + " anos"

//VIVO OBJETO 4
const meuItemTresObjeto4 = document.getElementById("itemTresObjeto4")
//console.log(meuItemTresObjeto4.innerHTML)

meuItemTresObjeto4.innerHTML = "<b>Nacional: </b>" + rapper4.nacional

//ÁLBUNS OBJETO 4
const meuItemQuatroObjeto4 = document.getElementById("itemQuatroObjeto4")
//console.log(meuItemQuatroObjeto4.innerHTML)

meuItemQuatroObjeto4.innerHTML = "<b>Álbuns: </b>" + rapper4.albuns






//NOME OBJETO 5
const meuItemUmObjeto5 = document.getElementById("itemUmObjeto5")
//console.log(meuItemUmObjeto5.innerHTML)

meuItemUmObjeto5.innerHTML = "<b>Nome: </b>" + rapper5.nome

//IDADE OBJETO 5
const meuItemDoisObjeto5 = document.getElementById("itemDoisObjeto5")
//console.log(meuItemDoisObjeto5.innerHTML)

meuItemDoisObjeto5.innerHTML = "<b>Idade: </b>" +  rapper5.idade + " anos"

//VIVO OBJETO 5
const meuItemTresObjeto5 = document.getElementById("itemTresObjeto5")
//console.log(meuItemTresObjeto5.innerHTML)

meuItemTresObjeto5.innerHTML = "<b>Nacional: </b>" + rapper5.nacional

//ÁLBUNS OBJETO 5
const meuItemQuatroObjeto5 = document.getElementById("itemQuatroObjeto5")
//console.log(meuItemQuatroObjeto5.innerHTML)

meuItemQuatroObjeto5.innerHTML = "<b>Álbuns: </b>" + rapper5.albuns








//ULTIMA SEMANAAAAAA!!!!!! BORA PEGAR ESSA FUNÇÃO

let meuInput = document.getElementById("input")
 function rappersBuscado(){
    //console.log(meuInput.innerHTML)
    return console.log(meuInput.value)
} 
//console.log(document.getElementById("input").value)
 
function buscandoRappers(event){
    event.preventDefault()

    let devolvendoRappers = meuInput.value

    const informacoesUm = document.querySelector(".primeiraSection")

    const informacoesDois = document.querySelector(".segundaSection")

    const informacoesTres = document.querySelector(".terceiraSection")

    const informacoesQuatro = document.querySelector(".quartaSection")

    const informacoesCinco = document.querySelector(".quintaSection")

    //console.log(devolvendoRappers)

    if (devolvendoRappers === rapper1.nome) {
        informacoesDois.remove("segundaSection")
        informacoesTres.remove("terceiraSection")
        informacoesQuatro.remove("quartaSection")
        informacoesCinco.remove("quintaSection")

        }
        if (devolvendoRappers === rapper2.nome) {
            informacoesUm.remove("primeiraSection")
            informacoesTres.remove("terceiraSection")
            informacoesQuatro.remove("quartaSection")
            informacoesCinco.remove("quintaSection")
            }
            if (devolvendoRappers === rapper3.nome) {
                informacoesUm.remove("primeiraSection")
                informacoesDois.remove("segundaSection")
                informacoesQuatro.remove("quartaSection")
                informacoesCinco.remove("quintaSection")
                }
                if(devolvendoRappers === rapper4.nome){
                    informacoesUm.remove("primeiraSection")
                    informacoesDois.remove("segundaSection")
                    informacoesTres.remove("terceiraSection")
                    informacoesCinco.remove("quintaSection")

                }
                if(devolvendoRappers === rapper5.nome){
                    informacoesUm.remove("primeiraSection")
                    informacoesDois.remove("segundaSection")
                    informacoesTres.remove("terceiraSection")
                    informacoesQuatro.remove("quartaSection")

                }
    /*  else{
        alert("nenhum item encontrado")
    } 
 
    }

*/

 
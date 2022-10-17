const rapper1 = {
    nome: "Tasha Okereke",
    idade: 23,
    nacional: true,
    albuns: ["Rouff, Diretoria"],
    imagem: "\projeto-intro-web\Rappers\Tasha.jfif"
}

const rapper2 = {
    nome: "Tracie Okereke",
    idade: 23,
    nacional: true,
    albuns: ["Rouff, Diretoria"],
    imagem: "\projeto-intro-web\Rappers\Tracie.jpg"
}

const rapper3 = {
    nome: "Andre Young",
    idade: 57,
    nacional: false,
    albuns: ["The Chronic, 2001, Compton"],
    imagem: "\projeto-intro-web\Rappers\DrDre.webp"
}

const rapper4 = {
    nome: "Christopher George Latore Wallace",
    idade: 24,
    nacional: false,
    albuns: ["Life After Death, Ready To Die"],
    imagem: "projeto-intro-web\Rappers\NotoriousBIG.jfif"
}

const rapper5 = {
    nome: "Gustavo Pereira Marques",
    idade: 28,
    nacional: true,
    albuns: ["Heresia, O menino Que Queria Ser Deus, Ladrão, NU, O Dono do Lugar"],
    imagem: "projeto-intro-web\Rappers\Djonga.jpg"
}

const mediaIdades = (rapper1.idade + rapper2.idade + rapper3.idade + rapper4.idade + rapper5.idade) / 5
console.log(mediaIdades)

///

const arrayObjetos = []

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
} else {
    alert("Não é nacional")
} 

if (rapper4.nacional === true) {
    arrayObjetos.push(rapper4)
}else {
    alert("Não é nacional")
} 

if (rapper5.nacional === true) {
    arrayObjetos.push(rapper5)
}else {
    alert("Não é nacional")
} 

console.log(arrayObjetos)

///

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

///

function devolveObjeto(arrayObjetos, string){
    let objetoRetornado = {}

    for (let i = 0; i < arrayObjetos.length; i++){
        if (arrayObjetos[i].nome === string){
            console.log(objetoRetornado = arrayObjetos[i]) 
        }else{
            //alert("nenhum item encontrado")
        }
    }
}

devolveObjeto(arrayObjetos, "Tracie Okereke")

///

//OBJETO 1
const meuItemUmObjeto1 = document.getElementById("itemUmObjeto1")
meuItemUmObjeto1.innerHTML = "<b>Nome: </b>" + rapper1.nome

const meuItemDoisObjeto1 = document.getElementById("itemDoisObjeto1")
meuItemDoisObjeto1.innerHTML = "<b>Idade: </b>" + rapper1.idade + " anos"

const meuItemTresObjeto1 = document.getElementById("itemTresObjeto1")
meuItemTresObjeto1.innerHTML = "<b>Nacional: </b>" + rapper1.nacional

const meuItemQuatroObjeto1 = document.getElementById("itemQuatroObjeto1")
meuItemQuatroObjeto1.innerHTML = "<b>Álbuns: </b>" + rapper1.albuns

//OBJETO 2
const meuItemUmObjeto2 = document.getElementById("itemUmObjeto2")
meuItemUmObjeto2.innerHTML = "<b>Nome: </b>" + rapper2.nome

const meuItemDoisObjeto2 = document.getElementById("itemDoisObjeto2")
meuItemDoisObjeto2.innerHTML = "<b>Idade: </b>" + rapper2.idade + " anos"

const meuItemTresObjeto2 = document.getElementById("itemTresObjeto2")
meuItemTresObjeto2.innerHTML = "<b>Nacional: </b>" + rapper2.nacional

const meuItemQuatroObjeto2 = document.getElementById("itemQuatroObjeto2")
meuItemQuatroObjeto2.innerHTML = "<b>Álbuns: </b>" + rapper2.albuns

//OBJETO 3
const meuItemUmObjeto3 = document.getElementById("itemUmObjeto3")
meuItemUmObjeto3.innerHTML = "<b>Nome: </b>" + rapper3.nome

const meuItemDoisObjeto3 = document.getElementById("itemDoisObjeto3")
meuItemDoisObjeto3.innerHTML = "<b>Idade: </b>" +  rapper3.idade + " anos"

const meuItemTresObjeto3 = document.getElementById("itemTresObjeto3")
meuItemTresObjeto3.innerHTML = "<b>Nacional: </b>" + rapper3.nacional

const meuItemQuatroObjeto3 = document.getElementById("itemQuatroObjeto3")
meuItemQuatroObjeto3.innerHTML = "<b>Álbuns: </b>" + rapper3.albuns

//OBJETO 4
const meuItemUmObjeto4 = document.getElementById("itemUmObjeto4")
meuItemUmObjeto4.innerHTML = "<b>Nome: </b>" + rapper4.nome

const meuItemDoisObjeto4 = document.getElementById("itemDoisObjeto4")
meuItemDoisObjeto4.innerHTML = "<b>Idade: </b>" +  rapper4.idade + " anos"

const meuItemTresObjeto4 = document.getElementById("itemTresObjeto4")
meuItemTresObjeto4.innerHTML = "<b>Nacional: </b>" + rapper4.nacional

const meuItemQuatroObjeto4 = document.getElementById("itemQuatroObjeto4")
meuItemQuatroObjeto4.innerHTML = "<b>Álbuns: </b>" + rapper4.albuns

//OBJETO 5
const meuItemUmObjeto5 = document.getElementById("itemUmObjeto5")
meuItemUmObjeto5.innerHTML = "<b>Nome: </b>" + rapper5.nome

const meuItemDoisObjeto5 = document.getElementById("itemDoisObjeto5")
meuItemDoisObjeto5.innerHTML = "<b>Idade: </b>" +  rapper5.idade + " anos"

const meuItemTresObjeto5 = document.getElementById("itemTresObjeto5")
meuItemTresObjeto5.innerHTML = "<b>Nacional: </b>" + rapper5.nacional

const meuItemQuatroObjeto5 = document.getElementById("itemQuatroObjeto5")
meuItemQuatroObjeto5.innerHTML = "<b>Álbuns: </b>" + rapper5.albuns

///

let meuInput = document.getElementById("input")
 function rappersBuscado(){
    return console.log(meuInput.value)
} 

///

function buscandoRappers(event){
    event.preventDefault()
    
    let devolvendoRappers = meuInput.value

    const informacoesUm = document.querySelector(".primeiraSection")
    const informacoesDois = document.querySelector(".segundaSection")
    const informacoesTres = document.querySelector(".terceiraSection")
    const informacoesQuatro = document.querySelector(".quartaSection")
    const informacoesCinco = document.querySelector(".quintaSection")

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
    else{
        alert("Escreva um nome válido, por favor. :)")
    }

}

//FIM :)

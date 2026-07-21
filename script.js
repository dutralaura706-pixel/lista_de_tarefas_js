const botao = document.getElementById("adicionar");
const input = document.getElementById("tarefa");
const lista = document.getElementById("lista");
const contador = document.getElementById("contador");
const tema = document.getElementById("tema");


function atualizarContador() {

    contador.textContent = "Total de tarefas: " + lista.children.length;

}


botao.addEventListener("click", function () {


    if(input.value === ""){

        alert("Digite uma tarefa!");

        return;
    }


    const li = document.createElement("li");


    li.innerHTML = `
        ${input.value}
        <button class="excluir"> Excluir </button> `;


    // marcar como concluída

    li.addEventListener("click", function(event){

        if(event.target.classList.contains("excluir")){
            return;
        }

        li.classList.toggle("concluida");

    });



    lista.appendChild(li);
    atualizarContador();


    input.value = "";



    // excluir tarefa

    const excluir = li.querySelector(".excluir");


    excluir.addEventListener("click", function(){

        li.remove();

        atualizarContador();

    });


});



// modo escuro

tema.addEventListener("click", function(){


    document.body.classList.toggle("dark");


    if(document.body.classList.contains("dark")){

        tema.textContent = "☀️";

    } else {

        tema.textContent = "🌙";

    }


});
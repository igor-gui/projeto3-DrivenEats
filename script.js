function addSelecP(elemento){

    let c = elemento.querySelector(".check");
    let s = document.querySelector("#plates .selected");
    let sc = document.querySelector("#plates .selected .check");
    let sel = elemento.classList.contains("selected");

    if((s !== null)){

       s.classList.remove("selected");
        sc.classList.add("hidden");

        elemento.classList.add("selected");
        c.classList.remove("hidden");

    } else {

        elemento.classList.add("selected");
        c.classList.remove("hidden");
    }
}

function addSelecD(elemento){

    let c = elemento.querySelector(".check");
    let s = document.querySelector("#drinks .selected");
    let sc = document.querySelector("#drinks .selected .check");

    if((s !== null)){

        s.classList.remove("selected");
        sc.classList.add("hidden");

        elemento.classList.add("selected");
        c.classList.remove("hidden");

    } else {

        elemento.classList.add("selected");
        c.classList.remove("hidden");
    }
}

function addSelecDes(elemento){

    let c = elemento.querySelector(".check");
    let s = document.querySelector("#desserts .selected");
    let sc = document.querySelector("#desserts .selected .check");

    if((s !== null)){

       s.classList.remove("selected");
        sc.classList.add("hidden");

        elemento.classList.add("selected");
        c.classList.remove("hidden");

    } else {

    elemento.classList.add("selected");
    c.classList.remove("hidden");

    }
}
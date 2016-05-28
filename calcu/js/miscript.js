var nn = true, Op="", val=0, pn = false, mem = 0;
function Concat(num) {
    if (nn) {
        document.getElementById("Display").value = num.value;
        nn = false;
    }else{
        document.getElementById("Display").value += num.value;
    }
}

function Operador(Bot){
    Calcular();
    Op = Bot.value;
    nn = true;
}

function Negative() {
    document.getElementById("Display").value *= -1;
}

function Calcular() {
    switch (Op){
        case "*":
            val *= document.getElementById("Display").value;
            break;
        case "/":
            val /= document.getElementById("Display").value;
            break;
        case "+":
            val += parseFloat(document.getElementById("Display").value);
            break;
        case "-":
            val -= document.getElementById("Display").value;
            break;
        default:
        val = parseFloat(document.getElementById("Display").value);
    }
    console.log(val);
    document.getElementById("Display").value = val;
}

function cleanAll(){
    document.getElementById("Display").value ="";
    val = 0;
    Op = "";
    nn = true;
}

function MemorySave(){
    mem = parseFloat(document.getElementById("Display").value);
}

function MemoryRead(){
    mem+= document.getElementById("Display").value = mem;
}

function cleandisplay() {
    document.getElementById("Display").value ="";
}

function MemoryPlus(){
    mem += parseFloat(document.getElementById("Display").value);
}

function MemoryClear() {
    mem=0;
}

function punto(bot) {
    if (document.getElementById("Display").value.indexOf(".") < 0) {
         Concat(bot);
    }
}

let noot = 0;
let nuut = 0; //nejdriv noot, potom nuut
let F = 0;
let g = 0;
let p = 0;
let tip = 0;
let inpklasa = document.createAttribute("class");
let grad = document.createAttribute("placeholder");
let prcn = document.createAttribute("placeholder");
let mejn = document.getElementById("mejn");
let inp = document.createElement("input");
let put = document.createElement("input");
let tajp = document.createAttribute("type");
let pipi = 0;
let pupu = 0;
let pipipupu = 0;
let puupuu = 0;
let witulo = 0;
let debílku;
let aa;
let bb;
let aahaskids;
let bbhaskids;
let dablijudablijudablijutočkabalindrtočkaru;
let cc;
let imp;
let sumBODY;

tajp.value = "number";
inpklasa.value = "inp";
grad.value = ' ' + "grejd";
prcn.value = ' ' + "prcentič";


function kount() {
    noot = 0;
    nuut = 0;       <!-- debílkoidní reinicializace na výchozí hodnoty, protože jsem debílek a něco jsem asi nepochopil, ale nevim co, a tak zůstávám debílkem, dokud si bez toho neporadim a fláknu se vo zeĎ -->
    F = 0;
    g = 0;
    p = 0;
    tip = 0;
    pipi = 0;
    pupu = 0;
    pipipupu = 0;
    puupuu = 0;
    witulo = 0;
    debílku = 0;
    aa = 0;
    bb = 0;
    aahaskids = 0;
    bbhaskids = 0;
    dablijudablijudablijutočkabalindrtočkaru = 0;
    cc = 0;
    imp = 0;
    sumBODY = 0;

    document.getElementById("medan").innerHTML = "am doing loads";
    console.log("1 " + " puupuu = " + puupuu + " pipi = " + pipi);
    cc = document.getElementsByClassName("inp");
    console.log(cc);

    for (g = 0; g < document.getElementById("thecoupletu").children.length; g++) {
        dablijudablijudablijutočkabalindrtočkaru = cc[g].value;
        console.log("2.1" + dablijudablijudablijutočkabalindrtočkaru);
        sumBODY = parseFloat(dablijudablijudablijutočkabalindrtočkaru);
        console.log("2.2" + sumBODY);
        if (isNaN(sumBODY)) {
            sumBODY = 0;                                                        <!-- tadyto je strašná rakovina, todle mi zamrzávalo celej chrome a strašně blbě se to debugguje -->
        }                                                                       <!-- taky tu byla jedna debilní chujovina - nešlo mi převíst html element na číslelnou hodnotu -->
    g++;                                                                        <!-- in conclusion, jsem debílek a jsko taky, páč je to příliš user unfriendly (nebo dev ufriendly, není-li to ilegální termín) -->
        dablijudablijudablijutočkabalindrtočkaru = cc[g].value;
        console.log("2.3" + dablijudablijudablijutočkabalindrtočkaru);
        noot = parseFloat(dablijudablijudablijutočkabalindrtočkaru);            <!-- taky řešení nullů a NaNů bylo jako stahování z uložta s automatickym zadávačem captch. teoreticky by to mělo jít, ale je to debilní a víc by se vyplatilo tam prostě narvat něco jako this field is required. (haha, musíte scrollovat vedle) -->
        console.log("2.4" + noot + " " + pipi);
        if (isNaN(noot)) {
            noot = 0;
        }
        pipi += sumBODY * noot;
        console.log("2.5 " + pipi)
    }

    for (p = 1; p < document.getElementById("thecoupletu").children.length; p++) {
        dablijudablijudablijutočkabalindrtočkaru = cc[p].value;
        console.log("3.1" + dablijudablijudablijutočkabalindrtočkaru);
        sumBODY = parseFloat(dablijudablijudablijutočkabalindrtočkaru);
        console.log("3.2" + sumBODY);
        if (isNaN(sumBODY)) {
            sumBODY = 0;
        }
        puupuu += sumBODY;
        console.log( "3.3 " + puupuu)
        p++;
    }

    witulo = document.getElementById("feyl");

    if (puupuu !== 0) {
        console.log(pipi + " " +  puupuu);
        pipipupu = pipi / puupuu;

        document.getElementById("medan").innerHTML = pipipupu + "%";

        if (pipipupu >= 50) {
            document.getElementById("feyl").innerHTML = "Nah. Ur good.";
            if (witulo.classList.length > 1) {
                witulo.classList.remove("samtingwong");
            }
            witulo.classList.add("holeefuk");
        }

        else {
            document.getElementById("feyl").innerHTML = "Yes.";
            if (witulo.classList.length > 1) {
                witulo.classList.remove("holeefuk");
            }
            witulo.classList.add("samtingwong");
        }
    }

    else {
        document.getElementById("medan").innerHTML = "█̵̡̤̗͇̮͔̞͎̲̭͙̙̻͎͇͖̞͉̃̌ͬͬ̍ͥ̉͗̑̉ͨ͛̆ͣ̒̀̚͟ͅ█̶̎̀̔̑̿ͯͯͨͥ͌̃̂̓̀̄̕҉̞̟̪̼̹̣̗̼͈̦̰̹̬̫̻̀█̒̔̿̊̾́͐̐͒̊ͯ̈́҉͇̪̻̺̗̱͇̝͕̜͉͍͓̳̫̲̙̥͢█̡͉̩͕̤̭̬̺̝̐ͬ̂͒̔̏̽̀͝";
        document.getElementById("feyl").innerHTML = "You tried to make me divide by size of ur pp!";
        if (witulo.classList.length > 1) {
            witulo.classList.remove("holeefuk");
        }
        witulo.classList.add("samtingwong");
    }


}

function nuk() {
    debugger;
    inp = document.createElement("input");
    tip = document.getElementById("thecoupletu");
    tip.appendChild(inp);
    inp.setAttribute("type", "text");
    inp.setAttribute("placeholder", " thing");
    inp.setAttribute("class", "inp");
}
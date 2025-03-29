let jatekos1;
let tomb = [];
let nyertesDb;
let sor;
let oszlop;
let jatek = true;

palyaGeneral();

function palyaGeneral() {

    jatek = true;
    let sz = "";
    jatekos1 = true;
    tomb = [];

    sor = document.getElementById("n").value; 
    oszlop = document.getElementById("n").value;

    if (sor < 3) {
        sor = 3;
        oszlop = 3;
    }

    if (sor > 20) {
        sor = 20;
        oszlop = 20;
    }
    
    if (sor < 5) nyertesDb = 3;
    else nyertesDb = 5;

    for (let i = 0; i < sor; i++) {

        let egysor = [];
        
        for (let j = 0; j < oszlop; j++) {
            sz += `<button id="${i}_${j}" 
            style='background-image: url(ures3.png);
            background-size: cover;
            height: 100px;
            width: 100px;
            font-size: 10px;
            padding-bottom: 85px;
            margin: 5px;
            text-align: center;
            border-radius: 5px;
            border: 2px solid black;'
            onclick="kattint(this.id)">
            </button>`;
            egysor.push(parseInt(0));
        }
        sz += "<br>";
        tomb.push(egysor);
    }
    
    document.getElementById("tabla").innerHTML = sz;
    //console.log(tomb);
    document.getElementById("jatekos").innerText = "1-es játékos következik! (cica)"
}


function kattint(id) {

    if (jatek) {
        let kecske = id.split("_");
        let s = parseInt(kecske[0]);
        let o = parseInt(kecske[1]);
        //console.log(s)
        //console.log(o)
        //console.log(tomb[s][o])

        if (jatekos1) {
            tomb[s][o] = 1;
            document.getElementById(id).style.backgroundImage = "url('o4.png')";
            document.getElementById(id).style.backgroundSize = "cover";
            document.getElementById(id).disabled = true;
            jatekos1 = false;
            document.getElementById("jatekos").innerText = "2-es játékos következik! (kutya)"
        } else {
            tomb[s][o] = 2;
            document.getElementById(id).style.backgroundImage = "url('x4.jpg')";
            document.getElementById(id).style.backgroundSize = "cover";
            document.getElementById(id).disabled = true;
            jatekos1 = true;
            document.getElementById("jatekos").innerText = "1-es játékos következik! (cica)"
        }
        //console.log(tomb[s][o])
        //console.log(tomb[s + 1][o])
        //console.log(tomb[s + 2][o])
        //console.log(tomb[s - 1][o])
        //console.log(tomb[s - 2][o])
        //console.log(tomb[s][o + 1])
        //console.log(tomb[s][o + 2])
        //console.log(tomb[s][o - 1])
        //console.log(tomb[s][o - 2])*/

        /*if ((tomb[s][o] == tomb[s - 1][o] && tomb[s][o] == tomb[s - 2][o]) || (tomb[s][o] == tomb[s - 1][o] && tomb[s][o] == tomb[s + 1][o]) || (tomb[s][o] == tomb[s + 1][o] && tomb[s][o] == tomb[s + 2][o]) || (tomb[s][o] == tomb[s][o - 1] && tomb[s][o] == tomb[s][o - 2]) || (tomb[s][o] == tomb[s][o - 1] && tomb[s][o] == tomb[s][o + 1]) || (tomb[s][o] == tomb[s][o + 1] && tomb[s][o] == tomb[s][o + 2]) || (tomb[s][o] == tomb[s - 1][o - 1] && tomb[s][o] == tomb[s - 2][o - 2]) || (tomb[s][o] == tomb[s - 1][o - 1] && tomb[s][o] == tomb[s + 1][o + 1]) || (tomb[s][o] == tomb[s + 1][o + 1] && tomb[s][o] == tomb[s + 2][o + 2]) || (tomb[s][o] == tomb[s - 1][o + 1] && tomb[s][o] == tomb[s - 2][o + 2]) || (tomb[s][o] == tomb[s - 1][o + 1] && tomb[s][o] == tomb[s + 1][o - 1]) || (tomb[s][o] == tomb[s + 1][o - 1] && tomb[s][o] == tomb[s + 2][o - 2])) {
            if (tomb[s][o] == 1) {
                alert("1-es játékos nyert.")
            } else {
                alert("2-es játékos nyert.")
            }
        }*/

        /*if (s - nyertesDb + 1 >= 0) talalatEllenoriz(s, o, -1, 0);
        if (s + nyertesDb - 1 <= sor) talalatEllenoriz(s, o, 1, 0);
        if (o - nyertesDb + 1 >= 0) talalatEllenoriz(s, o, 0, -1);
        if (o + nyertesDb - 1 <= oszlop) talalatEllenoriz(s, o, 0, 1);

        if (s - nyertesDb + 1 >= 0 && o - nyertesDb + 1 >= 0) talalatEllenoriz(s, o, -1, -1);
        if (s + nyertesDb - 1 <= sor && o + nyertesDb - 1 <= oszlop) talalatEllenoriz(s, o, 1, 1);
        if (s - nyertesDb + 1 >= 0 && o + nyertesDb - 1 <= oszlop) talalatEllenoriz(s, o, -1, 1);
        if (s + nyertesDb - 1 <= sor && o - nyertesDb + 1 >= 0) talalatEllenoriz(s, o, 1, -1);*/
        
        //console.log(".......................1.......................")
        egyformaEllenoriz(s, o, "S")

        //console.log(".......................2.......................")
        egyformaEllenoriz(s, o, "O")
        //console.log(".......................3.......................")
        egyformaEllenoriz(s, o, "Á1")
        //console.log("-----------------------4------------------------")
        egyformaEllenoriz(s, o, "Á2")
    }

    
}

/*function talalatEllenoriz(s, o, sj, oj) {

    let jatekosDb = 0;
    for (let i = 0; i < nyertesDb; i++) {
        if (tomb[s][o] == tomb[s + (i * sj)][o + (i * oj)]) {
            jatekosDb++;
            //console.log(jatekosDb)
            //console.log(tomb[s][o])
            //console.log(tomb[s + (i * sj)][o + (i * oj)])
            
        } 
    } 
        
   
}*/

function egyformaEllenoriz(s, o, valtozoErtek) {

    let sIndex = 1;
    let oIndex = 1;
    let sAlap = 1;
    let oAlap = 1;
    let jatekosDb = 1;
    let ellenoriz = true;
    let minuszSzorzo = 1;

    if (valtozoErtek == "S") {
        sIndex = 1;
        oIndex = 0;
        sAlap = 1;
        oAlap = 0;
    } else if (valtozoErtek == "O") {
        sIndex = 0;
        oIndex = 1;
        sAlap = 0;
        oAlap = 1;
    } else if (valtozoErtek == "Á1") {
        sIndex = 1;
        oIndex = 1;
        sAlap = 1;
        oAlap = 1;
    } else {
        sIndex = 1;
        oIndex = 1;
        sAlap = 1;
        oAlap = 1;
        minuszSzorzo = -1;
    }
    

    while (ellenoriz && jatekosDb != nyertesDb) {
        //console.log("------------------------------------------")
        ellenoriz = false;

        if (s - sIndex * minuszSzorzo >= 0 && o - oIndex >= 0 && s - sIndex * minuszSzorzo < sor ) {
            //console.log("-")
            //console.log("cella értéke: " + tomb[s][o])
            //console.log("s - sIndex * minuszIndex és o - oIndex cella értéke: " + tomb[s - sIndex * minuszSzorzo][o - oIndex])
            if (tomb[s][o] == tomb[s - sIndex * minuszSzorzo][o - oIndex] && tomb[s - sAlap * minuszSzorzo][o - oAlap] == tomb[s][o]) {
                jatekosDb++;
                //console.log(".")
                //console.log("1.lefutás találat: " + jatekosDb)
                ellenoriz = true;
            }
        }
        //console.log("...............")
        
        //console.log("...............")

        if (s + sIndex * minuszSzorzo < sor && o + oIndex < oszlop && s + sIndex * minuszSzorzo >= 0 ) {
            //console.log("Lefut a 2-es")
 
            if (tomb[s][o] == tomb[s + sIndex * minuszSzorzo][o + oIndex] && tomb[s + sAlap * minuszSzorzo][o + oAlap] == tomb[s][o]) {
                //console.log("Lefut a 2B")
                //console.log("------------")
                //console.log(tomb[s][o])
                //console.log(tomb[s + sIndex][o + oIndex])
                
                //console.log("------------")
                jatekosDb++;
                //console.log("..")
                //console.log("2.lefutás találat: " + jatekosDb)
                ellenoriz = true;
            }
        } 

        //console.log("...............")
        //console.log("Összes találat: " + jatekosDb)
        //console.log("...............")


        if (valtozoErtek == "S") sIndex++;
        if (valtozoErtek == "O") oIndex++;
        if (valtozoErtek == "Á1" || valtozoErtek == "Á2") {
            sIndex++;
            oIndex++;
        }
    }

    nyertesEllenoriz(jatekosDb, s, o);

}

function nyertesEllenoriz (jatekosDb, s, o) {

    if (jatekosDb == nyertesDb){
        if (tomb[s][o] == 1) alert("1-es játékos nyert.")
        else alert("2-es játékos nyert.")

        jatek = false;
        
    }
}

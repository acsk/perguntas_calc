let num1Total = 0;
let num2Total = 0;
let num3Total = 0;
let num4Total = 0;
let num5Total = 0;
let num6Total = 0;
let num7Total = 0;

function displayRadioValue() {
    var ele1 = document.getElementsByName('group1');
    var num1 = ele1;

    var ele2 = document.getElementsByName('group2');
    var num2 = ele2;

    var ele3 = document.getElementsByName('group3');
    var num3 = ele3;

    var ele4 = document.getElementsByName('group4');
    var num4 = ele4;

    var ele5 = document.getElementsByName('group5');
    var num5 = ele5;

    var ele6 = document.getElementsByName('group6');
    var num6 = ele6;

    var ele7 = document.getElementsByName('group7');
    var num7 = ele7;


    var arrRespostas = [];
    //  console.log(num1);

    for (i = 0; i < ele1.length; i++) {
        if (ele1[i].checked) {
            console.log("Resposta 01: " + ele1[i].value);
            num1Total = ele1[i].value;
            arrRespostas.push(num1Total);
        }


    }
    for (i = 0; i < ele2.length; i++) {
        if (ele2[i].checked) {
            console.log("Resposta 02: " + ele2[i].value);
            num2Total = ele2[i].value;
            arrRespostas.push(num2Total);
        }


    }
    for (i = 0; i < ele3.length; i++) {
        if (ele3[i].checked) {
            console.log("Resposta 03: " + ele3[i].value);
            num3Total = ele3[i].value;
            arrRespostas.push(num3Total);
        }


    }
    for (i = 0; i < ele4.length; i++) {
        if (ele4[i].checked) {
            console.log("Resposta 04: " + ele4[i].value);
            num4Total = ele4[i].value;
            arrRespostas.push(num4Total);
        }


    }
    for (i = 0; i < ele5.length; i++) {
        if (ele5[i].checked) {
            console.log("Resposta 05: " + ele5[i].value);
            num5Total = ele5[i].value;

            arrRespostas.push(ele5[i].value);
        }


    }
    for (i = 0; i < ele6.length; i++) {
        if (ele6[i].checked) {
            console.log("Resposta 06: " + ele6[i].value);
            num6Total = ele6[i].value;

            arrRespostas.push(ele6[i].value);
        }


    }
    for (i = 0; i < ele7.length; i++) {
        if (ele7[i].checked) {
            console.log("Resposta 07: " + ele7[i].value);
            num7Total = ele7[i].value;

            arrRespostas.push(ele7[i].value);
        }


    }
    let sum = parseInt(num1Total) + parseInt(num2Total) + parseInt(num3Total) + parseInt(num4Total) + parseInt(num5Total) + parseInt(num6Total) + parseInt(num7Total);

    console.log(sum);
    if (sum < 15) {
        console.log("GELO")
        return;
    }
    if (sum >= 16 && sum <= 20) {
        console.log("AMARELO")
        return;
    }
    if (sum >= 21 && sum <= 28) {
        console.log("LARANJA")
        return;
    }
    if (sum > 29) {
        console.log("VERMELHO")
        return;
    }



}
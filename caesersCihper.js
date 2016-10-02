/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/


function rot13(str) { // LBH QVQ VG!
    var arr =[ "ABCDEFGHIJKLM".split("") , "NOPQRSTUVWXYZ".split("") ];
    var newStr = "";
    var index;
    for (var x = 0; x < str.length; x++){
        if (str[x].toUpperCase() == str[x].toLowerCase()){//Now a letter
            newStr += str[x];
            continue;
        }
        index = arr[0].indexOf(str[x]);
        if (index > -1){
            newStr += arr[1][index];
        }
        else{
            index = arr[1].indexOf(str[x]);
            if (index == -1){
                return "Character not found.";
            }
            newStr += arr[0][index];
       }
    }
    return newStr;
}

// Change the inputs below to test

rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");

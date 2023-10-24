"use strict";

// ======================= String-Methods-Level-1_1 =====================

// Nun beschäftigtst du dich mit string-Methoden. Dahinter stecken Methoden, um Zeichenketten - strings - zu analysieren und mit ihnen zu arbeiten.
// So kannst du beispielsweise die Länge eines strings herausfinden oder strings miteinander verbinden.
// Im ersten Schritt sollst du dir zwei Variablen erstellen: firstName und lastName.
// Lasse dir nun die Länge der beiden Variablen in der Konsole anzeigen. Nutze dafür .length.
// Erstelle noch eine Variable fullName, die die Summe der beiden Variablen ist.
// Im Anschluss sollst du dir die Länge der Variable fullName in der Konsole anzeigen lassen.

const firstName = "Konstantin";
const lastName = "Wiefel";

console.log(firstName.length);
console.log(lastName.length);

const fullName = `${firstName} ${lastName}`;
console.log(fullName.length);

// ======================= String-Methods-Level-1_2 =====================

// Verwende den Befehl indexOf(), um die Position eines Zeichens in einer Zeichenkette als Ergebnis in der Konsole zu erhalten.
// Nutze dafür folgende Variable: const txt = "How inappropriate to call this planet Earth, when clearly it is Ocean."
// Suche nun die Position des Zeichens "h" in der Variablen txt.
// Suche im Anschluss die Position des Zeichens "Earth" in der Variablen txt.
// Und zuletzt sollst du die Position des Zeichens "Moon" in der Variablen txt suchen.

const txt =
  "How inappropriate to call this planet Earth, when clearly is Ocean.";

console.log(txt.indexOf("h"));
console.log(txt.indexOf("Earth"));
console.log(txt.indexOf("Moon"));

// ======================= String-Methods-Level-1_3 =====================

// Um die Position eines Zeichens in einer Zeichenkette als Ergebnis in der Konsole zu erhalten, kannst du den Befehl search() verwenden.
// Übernehme folgende Variable: let txt2 = "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent."
// Suche die Position des Zeichens ";" in der Variablen txt2.
// Suche die Position des Zeichens "green" in der Variablen txt2.
// Suche die Position des Zeichens "blue" in der Variablen txt2.

const txt2 =
  "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.";

console.log(txt2.search(";"));
console.log(txt2.search("green"));
console.log(txt2.search("blue"));

// ======================= String-Methods-Level-1_4 =====================

// Es geht weiter mit dem Befehl slice(). Slice extrahiert Inhalte der Variable und gibt es in Form eines Arrays zurück.
// Probiere es mit const A = 'Susi is going to codingschool' aus und wende slice() an, um in deinem HTML Folgendes angezeigt zu bekommen:
// Susi
// is
// is going to school
// school
// Susi is school
// Speichere jedes Ergebnis in einer Variablen und verwende document.write(myVar+"
// "), um das Ergebnis im Dokument auszugeben. myVar ist hier nur ein Beispiel und kann durch den Namen deiner Variablen ersetzt werden.

const A = "Susi is going to codingschool";

const susi = A.slice(0, 4);
document.write(susi);

const is = A.slice(5, 7);
document.write(is);

const isGo = A.slice(5, 17) + A.slice(23, 29);
document.write(isGo);

const scool = A.slice(23, 30);
document.write(scool);

const susiIs = A.slice(0, 4) + A.slice(23, 29);
document.write(susiIs + "<br>");

// ======================= String-Methods-Level-1_5 =====================

// Verwende den Befehl substring(), um die gewünschten Zeichenketten zu erhalten.
// Nutze folgendes Beispiel const text = 'Susi is back from codingschool' und zeige mithilfe der Methode "substring" diese Ausgabe in einem HTML-Dokument an:
// Susi
// is
// school
// Susi is school
// Speichere jedes Ergebnis in einer Variablen und verwende document.write(myVar+"
// "), um das Ergebnis anzuzeigen. myVar ist hier nur ein Beispiel und kann durch den Namen deiner Variablen ersetzt werden.

const text = "Susi is back from codingschool";

const susi2 = text.substring(0, 4);
document.write(susi2 + "<br>");
document.write("reicht mir fürs Verständnis" + "<br>");

// ======================= String-Methods-Level-1_7 =====================

// Eine weitere string-Methode ist: replace(). Auch diesen Befehl kannst du verwenden, um die gewünschten Zeichenketten zu erhalten.
// Nutze wiedereinmal die folgende Variable const text = "Sam is good at codingschool" und zeige mit der Methode "replace" folgende Ausgabe in einem HTML-Dokument an:
// Sam is bad at school
// Susi is good at school
// Sam is good at tennis
// Speichere jedes Ergebnis in einer Variablen und verwende document.write(myVar + "<br>"), um das Ergebnis anzuzeigen. myVar ist hier nur ein Beispiel und kann durch den Namen deiner Variablen ersetzt werden.

const text3 = "Sam is good at codingschool";

document.write(text3.replace("good", "bad"));
document.write("<br>");
document.write(text3.replace("coding", ""));
document.write("<br>");
document.write(text3.replace("codingschool", "tennis"));
document.write("<br>");

// ======================= String-Methods-Level-1_8 =====================

// Verwende den Befehl toUpperCase(), um aus der Variable const text = "Sam is going to codingschool" die veränderte Zeichenkette zu erhalten: SAM IS GOING TO SCHOOL.
// Neben toUpperCase() gibt es auch noch den Befehl toLowerCase(). Schaue, was passiert, wenn du dies auf die Variable text anwendest.
// Erzeuge mit den beiden Befehlen folgende Zeichenketten und gib sie in deinem HTML aus:
// SAM is going to SCHOOL
// sam IS GOING TO school
// Sam Is Going To School

const text4 = "Sam is going to codingschool";

document.write(text4.toUpperCase());
document.write("<br>");
document.write(text4.toLowerCase());
document.write("<br>");

document.write(
  text4.slice(0, 4).toUpperCase() +
    text4.slice(4, 16) +
    text4.slice(22, 28).toUpperCase()
);
document.write("<br>");

document.write(
  text4.slice(0, 4) + text4.slice(4, 16).toUpperCase() + text4.slice(22, 28)
);
document.write("<br>");

// ======================= String-Methods-Level-1_9 =====================

// Neben der Methode Strings mit Operatoren zu verbinden, kann man auch den Befehl concat() nutzen.
// Erstelle dir die drei Variablen const text1 = "Sam is going to codingschool", const text2 = "Susi" und const text3 = "and".
// Erzeuge nun mit concat() folgende Ausgaben in deinem HTML-Dokument. Nutze alle Methoden, die du bereits gelernt hast:
// Sam is going to school and to the movie theater
// Sam is going to the movie theater
// Susi and Sam are going to school
// Susi and Sam are going to gym and to the movie theater
// Susi is going to school and to the movie theater

const textA = "Sam is going to codingschool";
const textB = "Susi";
const textC = "and";

document.write(textA.concat(" and to the movie theater"));
document.write("<br>");

document.write(textA.slice(0, 15).concat(" the movie theater"));
document.write("<br>");

document.write(
  textA
    .slice(0, 3)
    .concat(` ${textC}`)
    .concat(` ${textB}`)
    .concat(" are going to school")
);
document.write("<br>");

document.write(
  textA
    .slice(0, 3)
    .concat(` ${textC}`)
    .concat(` ${textB}`)
    .concat(" are going to gym and movie theater")
);
document.write("<br>");

document.write(
  textB.concat(` ${textA.slice(4)}`).concat(" and to the movie theater")
);

// ======================= Projects-JS-Einführung-Level-3_2 =====================

// Für diese Übung brauchen wir ein Formular. Schaue dir die Vorschau an und erstelle ein Formular.
// Im Formular sollen zwei Zeichenketten eingegeben werden können.
// Die erste Zeichenkette soll an der Stelle in zwei Teile getrennt werden, wo die zweite Zeichenkette innerhalb der ersten gefunden wird. Die zweite Zeichenkette kann mehrere Zeichen enthalten.
// Über Radio-Buttons kann spezifiziert werden, ob die Trennung vor oder nach der Trennungs-Zeichenkette geschehen soll.
// Klingt kompliziert? Schau es dir in der Vorschau an!

let input1 = document.body.querySelector("#input1");
let input2 = document.body.querySelector("#input2");

const radio1 = document.body.querySelector("#radio1");
const radio2 = document.body.querySelector("#radio2");

let output = document.body.querySelector("#output");

function check() {
  let letters = input1.indexOf("a");

  console.log(letters);

  if (radio1.checked == true) {
    output.textContent = input1.value.slice(0, 2);
  }
}

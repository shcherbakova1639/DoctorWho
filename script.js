/*function dialog() {
    let quest = prompt('Який доктор ваш улюблений?', '')
    if(quest<13) {
    alert(`Ваш улюблений доктор ${quest}`)
    }
    else{
   const doctors = [
        "1-й Доктор — Вільям Гартнелл",
        "2-й Доктор — Патрік Траутон",
        "3-й Доктор — Джон Пертуї",
        "4-й Доктор — Том Бейкер",
        "5-й Доктор — Пітер Девісон",
        "6-й Доктор — Колін Бейкер",
        "7-й Доктор — Сильвестр МакКой",
        "8-й Доктор — Пол Макганн",
        "9-й Доктор — Крістофер Екклстон",
        "10-й Доктор — Девід Теннант",
        "11-й Доктор — Метт Сміт",
        "12-й Доктор — Пітер Капальді",
        "13-й Доктор — Джоді Віттакер"
    ];

    let result = "Інкарнації Доктора Хто:\n\n";

    for (let i = 0; i < doctors.length; i++) {
        result += `${doctors[i]}\n`;
    }

    alert(result);
    }

}

function dev(lastName, firstName, position = "студент"){
    alert(`Розробник сторінки:\nПрізвище: ${lastName}\nІм'я: ${firstName}\nПосада: ${position}`);
}

function compare(str1, str2) {
  if (str1 > str2) {
    alert(`Більший рядок: ${str1}`);
  } else if (str2 > str1) {
    alert(`Більший рядок: ${str2}`);
  } else {
    alert("Рядки однакові.");
  }
}

dialog();
dev('Щербакова', 'Тетяна')
compare("Далек", "Кіберлюдина");


if (confirm("Перейти на Wiki?")) {

 location.href = "https://uk.wikipedia.org/wiki/%D0%94%D0%BE%D0%BA%D1%82%D0%BE%D1%80_%D0%A5%D1%82%D0%BE";
}*/

document.write("<h2>bad wolf</h2>");

let newTitle = document.createElement("h2");
let titleText = document.createTextNode("BAD WOLF");
newTitle.appendChild(titleText);
document.body.prepend(newTitle);

let p = document.querySelector("p.main");
let newP = document.createElement("p");
newP.textContent = "Абзац замінено.";
p.replaceWith(newP);


let ul = document.querySelector("ul");
let newListNote = document.createElement("p");
newListNote.innerHTML = "Гигикання";
ul.after(newListNote);

let lastLi = ul.querySelector("li:last-of-type");
lastLi.remove();
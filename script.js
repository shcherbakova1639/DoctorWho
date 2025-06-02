/*function dialog() {
    let quest = prompt('Який доктор ваш улюблений?', '')
    if(quest<13) {
    alert(`Ваш улюблений доктор ${quest}`)
    }
    else{
   let doctors = [
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

    let result = "Реінкарнації Доктора Хто:\n\n";

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
}

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
lastLi.remove();*/

/*
    //Атрибут onclick
    function changeColor() {
      document.body.style.backgroundColor = "#1d1d2b";
    }

    //Властивість .onclick
    document.getElementById("btn").onclick = function () {
      alert("Біллі Пайпер - новий доктор?");
    };

    //addEventListener з кількома обробниками
    let button = document.getElementById("button");

    function tenthDoctor() {
      alert("Десятий Доктор: Allons-y!");
    }

    function eleventhDoctor() {
      alert("Одинадцятий Доктор: Geronimo!");
    }

    button.addEventListener("click", tenthDoctor);
    button.addEventListener("click", eleventhDoctor);

    //Об'єкт як обробник (handleEvent)
    let cybermanBtn = document.getElementById("cybermanBtn");

    let cybermanHandler = {
      handleEvent(event) {
        alert("Кібермен атакує! Ви натиснули: " + event.currentTarget.tagName);
        alert("Обробник видаляється.");
        event.currentTarget.removeEventListener("click", cybermanHandler);
      }
    };

    cybermanBtn.addEventListener("click", cybermanHandler);

    // Підсвічування елементів списку (event.target) 
    let list = document.getElementById("dtWho");

    list.onclick = function (event) {
      if (event.target.tagName === "LI") {
        [...list.children].forEach(li => li.classList.remove("highlight"));
        event.target.classList.add("highlight");
      }
    };

    // Меню з поведінкою через data-action
    let tardisMenu = document.getElementById("tardisMenu");

    let tardisActions = behaviors = {
      travel() {
        alert("ТАРДІС мандрує в далеке майбутнє!");
      },
      scan() {
        alert("Сканування завершено: поблизу далеків не виявлено.");
      },
      cloak() {
        alert("Режим невидимості активовано.");
      }
    };

    tardisMenu.onclick = function (event) {
      let action = event.target.dataset.action;
      if (action && tardisActions[action]) {
        tardisActions[action]();
      }
    };*/


  document.addEventListener("DOMContentLoaded", function () {
  let table = document.getElementById("companytable");

  table.addEventListener("mouseover", function (event) {
    let row = event.target.closest("tr");
    if (row && table.contains(row)) {
      row.classList.add("highlight-row");
    }
  });

  table.addEventListener("mouseout", function (event) {
    let row = event.target.closest("tr");
    let relatedRow = event.relatedTarget ? event.relatedTarget.closest("tr") : null;
    if (row && row !== relatedRow) {
      row.classList.remove("highlight-row");
    }
  });
});

 //Перетягування зображення 
let tardis = document.getElementById("tardis");
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

tardis.addEventListener("mousedown", function(event) {
  isDragging = true;
  offsetX = event.offsetX;
  offsetY = event.offsetY;
  tardis.style.cursor = "grabbing";
});

document.addEventListener("mousemove", function(event) {
  if (isDragging) {
    let dragAreaRect = document.getElementById("dragArea").getBoundingClientRect();
    let x = event.clientX - dragAreaRect.left - offsetX;
    let y = event.clientY - dragAreaRect.top - offsetY;

    x = Math.max(0, Math.min(x, dragAreaRect.width - tardis.offsetWidth));
    y = Math.max(0, Math.min(y, dragAreaRect.height - tardis.offsetHeight));

    tardis.style.left = `${x}px`;
    tardis.style.top = `${y}px`;
  }
});

document.addEventListener("mouseup", function() {
  if (isDragging) {
    isDragging = false;
    tardis.style.cursor = "grab";
  }
});



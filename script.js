function getAnswer() {
  const subject = document.getElementById("subject").value;
  const question = document.getElementById("question").value;
  const answerBox = document.getElementById("answer");

  if (question.trim() === "") {
    answerBox.innerText = "Խնդրում ենք գրել հարցը։";
    return;
  }

  let response = "";

  if (subject === "math") {
    response = "Մաթեմատիկայում այս հարցը սովորաբար բացատրվում է օրինակներով։ Փորձիր բաժանել խնդիրը փոքր քայլերի։";
  } else if (subject === "armenian") {
    response = "Հայոց լեզվում կարևոր է հասկանալ բառի նշանակությունն ու նախադասության կառուցվածքը։";
  } else if (subject === "history") {
    response = "Պատմական թեմաները հասկանալու համար ուշադրություն դարձրու ժամանակագրությանը։";
  } else if (subject === "informatics") {
    response = "Ինֆորմատիկայում ամեն ինչ սկսվում է ալգորիթմից՝ քայլ առ քայլ։";
  }

  answerBox.innerText = response;
}


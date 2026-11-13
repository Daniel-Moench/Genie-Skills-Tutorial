/* quiz.js — reusable retrieval-practice quiz component.
   Usage in a lesson:
     <div id="quiz"></div>
     <script src="../assets/quiz.js"></script>
     <script>
       renderQuiz("quiz", [
         { q: "Question?", answers: ["A", "B", "C"], correct: 1,
           explain: "Why B is right." },
       ]);
     </script>
   Immediate feedback per question; running score at the end. */

function renderQuiz(rootId, questions) {
  const root = document.getElementById(rootId);
  root.classList.add("quiz");
  let answered = 0;
  let right = 0;

  const score = document.createElement("p");
  score.className = "score";
  score.textContent = "Answer the questions above to see your score.";

  questions.forEach((item, qi) => {
    const fs = document.createElement("fieldset");
    const legend = document.createElement("legend");
    legend.textContent = (qi + 1) + ". " + item.q;
    fs.appendChild(legend);

    const buttons = [];
    item.answers.forEach((text, ai) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "answer";
      btn.textContent = text;
      btn.addEventListener("click", () => {
        buttons.forEach((b) => (b.disabled = true));
        buttons[item.correct].classList.add("correct");
        const ok = ai === item.correct;
        if (!ok) btn.classList.add("incorrect");
        if (ok) right++;
        answered++;

        const explain = document.createElement("p");
        explain.className = "explain";
        const verdict = document.createElement("span");
        verdict.className = "verdict " + (ok ? "ok" : "bad");
        verdict.textContent = ok ? "Correct. " : "Not quite. ";
        explain.appendChild(verdict);
        explain.appendChild(document.createTextNode(item.explain));
        fs.appendChild(explain);

        if (answered === questions.length) {
          score.textContent =
            "Score: " + right + " / " + questions.length +
            (right === questions.length
              ? " — solid. If any answer felt like a guess, reread that section."
              : " — reread the sections for the ones you missed, then retest tomorrow (spacing beats rereading today).");
        }
      });
      buttons.push(btn);
      fs.appendChild(btn);
    });

    root.appendChild(fs);
  });

  root.appendChild(score);
}

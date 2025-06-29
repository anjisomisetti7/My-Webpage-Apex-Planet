const allQuestions = {
  Cricket: [
    {
      question: "Who was the first captain of the Indian cricket team?",
      options: ["Kapil Dev", "C.K. Nayudu", "Sunil Gavaskar", "Lala Amarnath"],
      answer: "C.K. Nayudu"
    },
    {
      question: "Which country hosted the 2011 Cricket World Cup?",
      options: ["India", "Australia", "England", "South Africa"],
      answer: "India"
    },
    {
      question: "Who is known as the Little Master?",
      options: ["Virat Kohli", "Sachin Tendulkar", "MS Dhoni", "Rohit Sharma"],
      answer: "Sachin Tendulkar"
    }
  ],
  Grammar: [
    {
      question: "Choose the correct sentence.",
      options: ["He go to school.", "He goes to school.", "He going to school.", "He gone to school."],
      answer: "He goes to school."
    },
    {
      question: "Identify the noun: 'The dog barked loudly.'",
      options: ["barked", "loudly", "dog", "The"],
      answer: "dog"
    },
    {
      question: "Which is an adjective?",
      options: ["Run", "Happy", "Quickly", "Sing"],
      answer: "Happy"
    }
  ],
  Science: [
    {
      question: "What is the chemical symbol for water?",
      options: ["O2", "H2O", "CO2", "NaCl"],
      answer: "H2O"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Venus", "Mars", "Jupiter"],
      answer: "Mars"
    },
    {
      question: "How many legs does an insect have?",
      options: ["4", "6", "8", "10"],
      answer: "6"
    }
  ]
};

let quizData = [];
let currentIndex = 0;
let score = 0;

function showScreen(id) {
  document.querySelectorAll('.card').forEach(card => card.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

function showTopicScreen() {
  showScreen("topic-screen");
}

function startQuiz(topic) {
  quizData = allQuestions[topic];
  currentIndex = 0;
  score = 0;
  document.getElementById('quiz-title').textContent = `📖 Quiz Zone: ${topic}`;
  showScreen("quiz-screen");
  showQuestion();
}

function showQuestion() {
  const block = document.getElementById("question-block");
  const q = quizData[currentIndex];
  if (!q) {
    block.innerHTML = `
      <p style="font-size: 1.2rem; font-weight: bold;">🎯 Your Score: ${score} / ${quizData.length}</p>
      <p style="color: #4b5563;">🎉 Great job! Play again from the home screen.</p>
    `;
    return;
  }
  block.innerHTML = `
    <h3>Q${currentIndex + 1}: ${q.question}</h3>
    ${q.options.map(opt => `<button class="quiz-option" onclick="checkAnswer('${opt}')">${opt}</button>`).join('')}
  `;
}

function checkAnswer(selected) {
  if (selected === quizData[currentIndex].answer) score++;
  currentIndex++;
  showQuestion();
}

async function getJoke() {
  const res = await fetch('https://official-joke-api.appspot.com/random_joke');
  const data = await res.json();
  document.getElementById("joke-setup").textContent = data.setup;
  document.getElementById("joke-punchline").textContent = data.punchline;
  showScreen('joke-screen');
}
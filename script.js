const courses = [
  {
    name: "HTML",
    short: "Structure your web content.",
    overview: "HTML (HyperText Markup Language) is the standard language for creating web pages and web applications."
  },
  {
    name: "CSS",
    short: "Style your HTML pages.",
    overview: "CSS (Cascading Style Sheets) is used to design and layout web pages — including colors, fonts, and spacing."
  },
  {
    name: "JavaScript",
    short: "Make web pages interactive.",
    overview: "JavaScript is a scripting language used to create and control dynamic content on websites."
  },
  {
    name: "Python",
    short: "General-purpose programming.",
    overview: "Python is a high-level, versatile programming language known for its readability and broad use in AI, data science, and web development."
  },
  {
    name: "Java",
    short: "Build robust applications.",
    overview: "Java is a powerful, object-oriented programming language used for building cross-platform applications."
  },
  {
    name: "C",
    short: "Foundation of programming.",
    overview: "C is a procedural programming language known for its performance and low-level memory manipulation."
  },
  {
    name: "C++",
    short: "C with object-oriented power.",
    overview: "C++ is an extension of C that includes object-oriented features, commonly used in game and system software."
  },
  {
    name: "React",
    short: "Build UI components.",
    overview: "React is a JavaScript library for building user interfaces, particularly single-page applications."
  },
  {
    name: "Node.js",
    short: "Run JavaScript on the server.",
    overview: "Node.js allows you to build scalable network applications using JavaScript outside the browser."
  },
  {
    name: "SQL",
    short: "Manage databases effectively.",
    overview: "SQL (Structured Query Language) is used for managing and manipulating relational databases."
  }
];

const courseListContainer = document.getElementById('courseList');

courses.forEach(course => {
  const card = document.createElement('div');
  card.className = 'course-card';

  card.innerHTML = `
    <h3>${course.name}</h3>
    <p><strong>Short:</strong> ${course.short}</p>
    <p><strong>Overview:</strong> ${course.overview}</p>
    <button onclick="enroll('${course.name}')">Enroll</button>
  `;

  courseListContainer.appendChild(card);
});

function enroll(courseName) {
  console.log(User enrolled in ${courseName});
  alert(You have successfully enrolled in ${courseName});
}
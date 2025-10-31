export const quizContests = [
  {
    id: 1,
    title: "Tech Trivia Championship",
    category: "Technology",
    difficulty: "Medium",
    duration: 900, // 15 minutes in seconds
    totalQuestions: 10,
    entryFee: "$10",
    prizePool: "$5,000",
    participants: 1234,
    maxParticipants: 2000,
    startTime: "2024-01-15T18:00:00Z",
    questions: [
      {
        id: 1,
        question: "What does API stand for in programming?",
        options: [
          "Application Programming Interface",
          "Advanced Programming Instruction",
          "Automated Program Integration",
          "Application Process Integration"
        ],
        correctAnswer: 0,
        points: 10,
        timeLimit: 30, // seconds per question
        explanation: "API stands for Application Programming Interface, which defines how different software components should interact."
      },
      {
        id: 2,
        question: "Which programming language is known for its use in web development and can run on both client and server side?",
        options: [
          "Python",
          "JavaScript",
          "C++",
          "Java"
        ],
        correctAnswer: 1,
        points: 10,
        timeLimit: 30,
        explanation: "JavaScript is primarily used for web development and can run in browsers (client-side) and on servers (Node.js)."
      },
      {
        id: 3,
        question: "What is the time complexity of binary search?",
        options: [
          "O(1)",
          "O(n)",
          "O(log n)",
          "O(n²)"
        ],
        correctAnswer: 2,
        points: 15,
        timeLimit: 25,
        explanation: "Binary search has O(log n) time complexity as it divides the search space in half each time."
      },
      {
        id: 4,
        question: "Which of these is NOT a JavaScript framework?",
        options: [
          "React",
          "Vue",
          "Django",
          "Angular"
        ],
        correctAnswer: 2,
        points: 10,
        timeLimit: 30,
        explanation: "Django is a Python web framework, not a JavaScript framework."
      },
      {
        id: 5,
        question: "What does CSS stand for?",
        options: [
          "Computer Style Sheets",
          "Creative Style System",
          "Cascading Style Sheets",
          "Colorful Style Sheets"
        ],
        correctAnswer: 2,
        points: 5,
        timeLimit: 20,
        explanation: "CSS stands for Cascading Style Sheets, used for styling web pages."
      },
      {
        id: 6,
        question: "Which data structure uses LIFO (Last In First Out) principle?",
        options: [
          "Queue",
          "Stack",
          "Array",
          "Linked List"
        ],
        correctAnswer: 1,
        points: 10,
        timeLimit: 25,
        explanation: "Stack uses LIFO principle, while Queue uses FIFO (First In First Out)."
      },
      {
        id: 7,
        question: "What is the latest version of HTML as of 2024?",
        options: [
          "HTML4",
          "XHTML",
          "HTML5",
          "HTML6"
        ],
        correctAnswer: 2,
        points: 10,
        timeLimit: 25,
        explanation: "HTML5 is the latest stable version, though HTML6 is in development."
      },
      {
        id: 8,
        question: "Which protocol is used for secure data transmission over the web?",
        options: [
          "HTTP",
          "FTP",
          "HTTPS",
          "SMTP"
        ],
        correctAnswer: 2,
        points: 10,
        timeLimit: 25,
        explanation: "HTTPS (HyperText Transfer Protocol Secure) encrypts data for secure transmission."
      },
      {
        id: 9,
        question: "What is React primarily used for?",
        options: [
          "Backend development",
          "Database management",
          "Building user interfaces",
          "Mobile app development only"
        ],
        correctAnswer: 2,
        points: 10,
        timeLimit: 30,
        explanation: "React is a JavaScript library for building user interfaces, particularly web applications."
      },
      {
        id: 10,
        question: "Which company developed the TypeScript programming language?",
        options: [
          "Google",
          "Facebook",
          "Microsoft",
          "Apple"
        ],
        correctAnswer: 2,
        points: 15,
        timeLimit: 30,
        explanation: "TypeScript was developed by Microsoft and is a superset of JavaScript."
      }
    ]
  },
  {
    id: 2,
    title: "Science & Space Challenge",
    category: "Science",
    difficulty: "Hard",
    duration: 1200, // 20 minutes
    totalQuestions: 15,
    entryFee: "Free",
    prizePool: "$3,000",
    participants: 856,
    maxParticipants: 1500,
    startTime: "2024-01-18T20:00:00Z",
    questions: [
      {
        id: 1,
        question: "What is the chemical symbol for gold?",
        options: ["Go", "Gd", "Au", "Ag"],
        correctAnswer: 2,
        points: 5,
        timeLimit: 20,
        explanation: "Au is the chemical symbol for gold, from Latin 'aurum'."
      }
      // ... more science questions
    ]
  }
];

export const leaderboardData = [
  { rank: 1, name: "Sarah Johnson", score: 145, time: "12:45", accuracy: "100%" },
  { rank: 2, name: "Alex Chen", score: 140, time: "13:20", accuracy: "93%" },
  { rank: 3, name: "Mike Rodriguez", score: 135, time: "14:15", accuracy: "90%" },
  { rank: 4, name: "Emma Davis", score: 130, time: "12:30", accuracy: "87%" },
  { rank: 5, name: "John Smith", score: 125, time: "15:00", accuracy: "83%" }
];
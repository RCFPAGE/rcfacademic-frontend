import CVE513 from "../asssets/pdfs/schoolBook/CVE/CVE513/CVE513structure.pdf";
import IndEco from "../asssets/pdfs/schoolBook/CVE/CVE513/Industrial Economics.pdf";
import CVE513_2017 from "../asssets/pdfs/schoolBook/CVE/CVE513/CVE513-2017-2018_QQ.pdf";
import CVE513_18_19 from "../asssets/pdfs/schoolBook/CVE/CVE513/CVE513_QUESTION_18_19.pdf";
import CVE513_19_20 from "../asssets/pdfs/schoolBook/CVE/CVE513/CVE513_18_19_and_19_20solution_to_the_pa.pdf";
import CVE511 from "../asssets/pdfs/schoolBook/CVE/CVE513/CVE_511.pptx";
import CVE513_2 from "../asssets/pdfs/schoolBook/CVE/CVE513/CVE 513.pptx";
// BCH
import BCH305 from "../asssets/pdfs/schoolBook/biochemistry/BCH 305 - Metabolism of Nucliec acids.pdf";
import BCH301 from "../asssets/pdfs/schoolBook/biochemistry/Enzymology_BCH301.pdf";
import prinOfBCH from "../asssets/pdfs/schoolBook/biochemistry/15616949-Lehninger-Principles-of-Biochemistry.pdf";

// Health Sciences
import McQBank from "../asssets/pdfs/schoolBook/healthSciences/MCQ BANK of UPPER LIMB.pdf";
import McQBch from "../asssets/pdfs/schoolBook/healthSciences/biochemistry_II_MCQ.pdf";
import SurMcq from "../asssets/pdfs/schoolBook/healthSciences/MCQs from blueprints - Fawzan Alotaibi.pdf";
import AnaThorax from "../asssets/pdfs/schoolBook/healthSciences/Anatomy-Thorax-Mcqs-With-Answers.pdf";
import McQGanong from "../asssets/pdfs/schoolBook/healthSciences/MCQs from blueprints - Fawzan Alotaibi.pdf";
import PQMBAna from "../asssets/pdfs/schoolBook/healthSciences/anatomy_MCQ.pdf";
import McQMedPhy from "../asssets/pdfs/schoolBook/healthSciences/mcqs-in-medical-physiology-2014-esp.pdf";
import McQsBloodHae from "../asssets/pdfs/schoolBook/healthSciences/MCQS_in_Blood.pdf";
// import McQBank from "../asssets/pdfs/schoolBook/healthSciences/.pdf";
// import McQBank from "../asssets/pdfs/schoolBook/healthSciences/.pdf";
// import McQBank from "../asssets/pdfs/schoolBook/healthSciences/.pdf";

// SET
import BIO102 from "../asssets/pdfs/schoolBook//biology/Animal diversity.pdf";
import CHMPQ from "../asssets/pdfs/schoolBook/SET/Chemistry PQ.pdf";
import Phy102PQ from "../asssets/pdfs/schoolBook/SET/phy20172018_2(1).pdf";
// import Phy102PQ from "../asssets/pdfs/schoolBook/SET/.pdf";

// ICT
import CSC202 from "../asssets/pdfs/schoolBook/ICT/CSC202.pdf";
import CSC206 from "../asssets/pdfs/schoolBook/ICT/Book-Principles-of-Electronics-V.K.-Mehta.pdf";
import CSC305 from "../asssets/pdfs/schoolBook/ICT/CSC 305.pdf";
import UML from "../asssets/pdfs/schoolBook/ICT/UML-diagrams.pdf";
import CSC307 from "../asssets/pdfs/schoolBook/ICT/csc307.pdf";
import CSC309 from "../asssets/pdfs/schoolBook/ICT/survey of programming language.pdf";
import CSC309TutQues from "../asssets/pdfs/schoolBook/ICT/Tutorial Questions for CSC 309.pdf";
import CSC311 from "../asssets/pdfs/schoolBook/ICT/CSC311 ORGANISATION OF COMPUTER ARCHITECTURE.pdf";
import CSC311TutQues from "../asssets/pdfs/schoolBook/ICT/CSC311TutQuestion.pdf";
import CSC403 from "../asssets/pdfs/schoolBook/ICT/artificial-intelligence-tutorial.pdf";
import CSC407 from "../asssets/pdfs/schoolBook/ICT/CSC 407.pdf";
import CSC497 from "../asssets/pdfs/schoolBook/ICT/CSC497FinalYearProjectNotes2021-2022.pdf";
import CSC497Pres from "../asssets/pdfs/schoolBook/ICT/ProjectSeminar-PresentationCSC497-2021.pdf";

import Book10 from "../asssets/pdfs/schoolBook/ICT/test10.pdf";

export const Books = [
  // Civil Engineering Department (CVE)
  {
    id: 0,
    category: "school_book",
    href: CVE513,
    title: "CVE513",
    authorName: "UNIOSUN",
    numOfPages: 2,
    department: "Civil Engineering",
    faculty: "Faculty of Engineering",
  },
  {
    id: 1,
    category: "school_book",
    href: IndEco,
    title: "Industrial Economics",
    authorName: "UNIOSUN",
    numOfPages: 21,
    department: "Civil Engineering",
    faculty: "Faculty of Engineering",
  },
  {
    id: 3,
    category: "school_book",
    href: CVE513_18_19,
    title: "CVE513 PQ-18/19",
    authorName: "UNIOSUN",
    numOfPages: 21,
    department: "Civil Engineering",
    faculty: "Faculty of Engineering",
  },
  {
    id: 4,
    category: "school_book",
    href: CVE513_2017,
    title: "CVE513 PQ-2017",
    authorName: "UNIOUSN",
    numOfPages: 21,
    department: "Civil Engineering",
    faculty: "Faculty of Engineering",
  },
  {
    id: 5,
    category: "school_book",
    href: CVE513_19_20,
    title: "CVE513 PQ-19/20 Solutuon",
    authorName: "UNIOUSN",
    numOfPages: 12,
    department: "Civil Engineering",
    faculty: "Faculty of Engineering",
  },
  {
    id: 6,
    category: "school_book",
    href: CVE511,
    title: "CVE511",
    authorName: "UNIOUSN",
    numOfPages: 48,
    department: "Civil Engineering",
    faculty: "Faculty of Engineering",
  },
  {
    id: 7,
    category: "school_book",
    href: CVE511,
    title: "CVE511",
    authorName: "UNIOUSN",
    numOfPages: 48,
    department: "Civil Engineering",
    faculty: "Faculty of Engineering",
  },
  {
    id: 8,
    category: "school_book",
    href: CVE513_2,
    title: "CVE513",
    authorName: "UNIOUSN",
    numOfPages: 34,
    department: "Civil Engineering",
    faculty: "Faculty of Engineering",
  },

  // BioChemistry Department (BCH)
  {
    id: 21,
    category: "school_book",
    href: BCH305,
    title: "Purine and Pyrimidine Metabolism (BCH305)",
    authorName: "UNIOUSN",
    numOfPages: 38,
    department: "Biochemistry",
    faculty: "Faculty of SET",
  },
  {
    id: 22,
    category: "school_book",
    href: BCH301,
    title: "Enzymology (BCH301)",
    authorName: "UNIOUSN",
    numOfPages: 28,
    department: "Biochemistry",
    faculty: "Faculty of SET",
  },
  {
    id: 23,
    category: "school_book",
    href: prinOfBCH,
    title: "Principles of Biochemistry Volume 4",
    authorName: "David N. Nelson",
    numOfPages: 1120,
    department: "Biochemistry",
    faculty: "Faculty of SET",
  },

  // Health Sciences
  {
    id: 31,
    category: "school_book",
    href: McQBank,
    title: "McQ Bank of Upper Limb",
    authorName: "Pakmed Study",
    numOfPages: 14,
    department: "Anatomy",
    faculty: "Faculty of Health Sciences",
  },
  {
    id: 32,
    category: "school_book",
    href: McQBch,
    title: "McQ in biochemistry",
    authorName: "UNIOSUN",
    numOfPages: 2,
    department: "Medicine",
    faculty: "Faculty of Basic Clinical Sciences",
  },
  {
    id: 33,
    category: "school_book",
    href: SurMcq,
    title: "Surgery McQ from Blueprints",
    authorName: "Fawzan Alotaibi",
    numOfPages: 8,
    department: "Medicine",
    faculty: "Faculty of Basic Clinical Sciences",
  },
  {
    id: 34,
    category: "school_book",
    href: AnaThorax,
    title: "Anatomy of the Thorax McQs with Answers",
    authorName: "UNIOSUN",
    numOfPages: 2,
    department: "Anatomy",
    faculty: "Faculty of Health Sciences",
  },
  {
    id: 35,
    category: "school_book",
    href: McQGanong,
    title: "McQs for Physiology",
    authorName: "Ganong",
    numOfPages: 50,
    department: "Pysiology",
    faculty: "Faculty of Health Sciences",
  },
  {
    id: 37,
    category: "school_book",
    href: PQMBAna,
    title: "Past Questions for first MB(Anatomy)",
    authorName: "UNIOSUN",
    numOfPages: 9,
    department: "Medicine",
    faculty: "Faculty of Basic Clinical Sciences",
  },
  {
    id: 38,
    category: "school_book",
    href: McQMedPhy,
    title: "McQ in Medical Physiology ",
    authorName: "UNIOSUN",
    numOfPages: 138,
    department: "Pysiology",
    faculty: "Faculty of Basic Clinical Sciences",
  },
  {
    id: 39,
    category: "school_book",
    href: McQsBloodHae,
    title: "McQs in Blood and Hemopoiesis",
    authorName: "UNIOSUN",
    numOfPages: 7,
    department: "Pysiology",
    faculty: "Faculty of Basic Clinical Sciences",
  },
  {
    id: 40,
    category: "school_book",
    href: BIO102,
    title: "Animal Diversity (BIO102)",
    authorName: "UNIOSUN",
    numOfPages: 14,
    department: "Biology",
    faculty: "Faculty of Basic Clinical Sciences",
  },
  {
    id: 41,
    category: "school_book",
    // href: BCH301,
    title: "",
    authorName: "",
    numOfPages: 50,
    department: "Pysiology",
    faculty: "Faculty of Health Sciences",
  },
  {
    id: 42,
    category: "school_book",
    // href: BCH301,
    title: "Nutrition",
    authorName: "UNIOSUN",
    numOfPages: 7,
    department: "Nursing",
    faculty: "Faculty of Health Sciences",
  },
  {
    id: 43,
    category: "school_book",
    // href: BCH301,
    title: "Urinary Elimination",
    authorName: "UNIOSUN",
    numOfPages: 45,
    department: "Nursing",
    faculty: "Faculty of Health Sciences",
  },
  {
    id: 44,
    category: "school_book",
    // href: BCH301,
    title: "Health Assesment",
    authorName: "UNIOSUN",
    numOfPages: 37,
    department: "Nursing",
    faculty: "Faculty of Health Sciences",
  },
  {
    id: 45,
    category: "school_book",
    // href: BCH301,
    title: "McQs in Anatomy",
    authorName: "UNIOSUN",
    numOfPages: 7,
    department: "Anatomy",
    faculty: "Faculty of Health Sciences",
  },
  {
    id: 46,
    category: "school_book",
    // href: BCH301,
    title: "McQs in Blood",
    authorName: "UNIOSUN",
    numOfPages: 9,
    department: "Physiology",
    faculty: "Faculty of Health Sciences",
  },
  {
    id: 47,
    category: "school_book",
    // href: BCH301,
    title: "McQs in Thorax",
    authorName: "UNIOSUN",
    numOfPages: 16,
    department: "Anatomy",
    faculty: "Faculty of Health Sciences",
  },
  {
    id: 48,
    category: "school_book",
    // href: BCH301,
    title: "McQs in Upper Limbs",
    authorName: "UNIOSUN",
    numOfPages: 37,
    department: "Anatomy",
    faculty: "Faculty of Health Sciences",
  },
  {
    id: 49,
    category: "school_book",
    // href: BCH301,
    title: "Anatomy McQs",
    authorName: "UNIOSUN",
    numOfPages: 63,
    department: "Anatomy",
    faculty: "Faculty of Health Sciences",
  },
  {
    id: 50,
    category: "school_book",
    // href: BCH301,
    title: "The Cell Cycle, Mitosis and Meiosis",
    authorName: "UNIOSUN",
    numOfPages: 8,
    department: "Anatomy",
    faculty: "Faculty of Health Sciences",
  },
  {
    id: 51,
    category: "school_book",
    // href: BCH301,
    title: "McQs in BCM",
    authorName: "UNIOSUN",
    numOfPages: 301,
    department: "Medical Biochemistry",
    faculty: "Faculty of Health Sciences",
  },
  {
    id: 52,
    category: "school_book",
    // href: BCH301,
    title: "Anatomy McQ on Thorax, Abdomen and Pelvis",
    authorName: "UNIOSUN",
    numOfPages: 145,
    department: "Anatomy",
    faculty: "Faculty of Health Sciences",
  },

  // Faculty of SET
  {
    id: 81,
    category: "school_book",
    href: Phy102PQ,
    title: "Physics (PHY102)",
    authorName: "UNIOSUN",
    numOfPages: 5,
    department: "Physics",
    faculty: "Faculty of SET",
  },
  {
    id: 82,
    category: "school_book",
    // href: BCH301,
    title: "Organic Chemistry",
    authorName: "UNIOSUN",
    numOfPages: 44,
    department: "Chemistry",
    faculty: "Faculty of SET",
  },
  {
    id: 83,
    category: "school_book",
    // href: BCH301,
    title: "Physics Past Question",
    authorName: "UNIOSUN",
    numOfPages: 21,
    department: "Physics",
    faculty: "Faculty of SET",
  },
  {
    id: 84,
    category: "school_book",
    // href: BCH301,
    title: "Organic Compound",
    authorName: "UNIOSUN",
    numOfPages: 12,
    department: "Chemistry",
    faculty: "Faculty of SET",
  },
  {
    id: 85,
    category: "school_book",
    // href: BCH301,
    title: "Organic Compound",
    authorName: "UNIOSUN",
    numOfPages: 13,
    department: "Chemistry",
    faculty: "Faculty of SET",
  },
  {
    id: 86,
    category: "school_book",
    href: CHMPQ,
    title: "Chemistry Past Question",
    authorName: "UNIOSUN",
    numOfPages: 26,
    department: "Chemistry",
    faculty: "Faculty of SET",
  },

  // Department of ICT
  {
    id: 91,
    category: "school_book",
    href: CSC202,
    title: "Low Level Language (CSC202)",
    authorName: "UNIOSUN",
    numOfPages: 115,
    department: "ICT",
    faculty: "Faculty of CIT",
  },
  {
    id: 92,
    category: "school_book",
    href: CSC206,
    title: "Book-Principles-of-Electronics-V.K.-Mehta (PHY206)",
    authorName: "UNIOSUN",
    numOfPages: 787,
    department: "Physics",
    faculty: "Faculty of SET",
  },
  {
    id: 93,
    category: "school_book",
    href: CSC305,
    title: "Operating System II (CSC305)",
    authorName: "UNIOSUN",
    numOfPages: 14,
    department: "ICT",
    faculty: "Faculty of CIT",
  },
  {
    id: 94,
    category: "school_book",
    href: UML,
    title: "Unified Modeling Language(CSC307)",
    authorName: "UNIOSUN",
    numOfPages: 12,
    department: "ICT",
    faculty: "Faculty of CIT",
  },
  {
    id: 95,
    category: "school_book",
    href: CSC307,
    title: "System Analysis and Design Methodology (CSC307)",
    authorName: "UNIOSUN",
    numOfPages: 57,
    department: "ICT",
    faculty: "Faculty of CIT",
  },
  {
    id: 96,
    category: "school_book",
    href: CSC309,
    title: "Survey of Programming Language (CSC309)",
    authorName: "UNIOSUN",
    numOfPages: 113,
    department: "ICT",
    faculty: "Faculty of CIT",
  },
  {
    id: 97,
    category: "school_book",
    href: CSC309TutQues,
    title: "Survey of Programming Language Tutorial Question(CSC309)",
    authorName: "UNIOSUN",
    numOfPages: 3,
    department: "ICT",
    faculty: "Faculty of CIT",
  },
  {
    id: 98,
    category: "school_book",
    href: CSC311,
    title: "Computer Architecture (CSC311)",
    authorName: "UNIOSUN",
    numOfPages: 3,
    department: "ICT",
    faculty: "Faculty of CIT",
  },
  {
    id: 99,
    category: "school_book",
    href: CSC311TutQues,
    title: "Computer Architecture Tutorial Question(CSC311)",
    authorName: "UNIOSUN",
    numOfPages: 3,
    department: "ICT",
    faculty: "Faculty of CIT",
  },
  {
    id: 100,
    category: "school_book",
    href: CSC403,
    title: "Artificial Intelligence(CSC403)",
    authorName: "UNIOSUN",
    numOfPages: 68,
    department: "ICT",
    faculty: "Faculty of CIT",
  },
  {
    id: 101,
    category: "school_book",
    href: CSC407,
    title: "Digital Computer Networks & Comm.(CSC407)",
    authorName: "UNIOSUN",
    numOfPages: 13,
    department: "ICT",
    faculty: "Faculty of CIT",
  },
  {
    id: 102,
    category: "school_book",
    href: CSC497Pres,
    title: "Research Methodology / Seminar Presentation(CSC497)",
    authorName: "UNIOSUN",
    numOfPages: 12,
    department: "ICT",
    faculty: "Faculty of CIT",
  },
  {
    id: 103,
    category: "school_book",
    href: CSC497,
    title: "Research Methodology / Seminar(CSC497)",
    authorName: "UNIOSUN",
    numOfPages: 14,
    department: "ICT",
    faculty: "Faculty of CIT",
  },

  {
    id: 9,
    category: "church_book",
    href: Book10,
    title: "100 Days with Jesus",
    authorName: "David Oyakilome",
    numOfPages: 355,
    department: "church",
    faculty: "church",
  },
];

export const QuoteWords = [
  {
    id: 0,
    quote: "Not how long, but how well you have lived is the main thing.",
    author: "Seneca",
  },
  {
    id: 1,
    quote: "The purpose of our lives is to be happy",
    author: " Dalai Lama",
  },
  {
    id: 2,
    quote: "Life is what happens when you're busy making other plans",
    author: "John Lennon",
  },
  {
    id: 3,
    quote: "Get busy living or get busy dying.",
    author: "Stephen King",
  },
  {
    id: 4,
    quote: "You only live once, but if you do it right, once is enough",
    author: "Mae West",
  },
  {
    id: 5,
    quote:
      "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    author: " Thomas A. Edison",
  },
  {
    id: 6,
    quote:
      "If you want to live a happy life, tie it to a goal, not to people or things.",
    author: "Albert Einstein",
  },
  {
    id: 7,
    quote: "Never let the fear of striking out keep you from playing the game.",
    author: " Babe Ruth",
  },
  {
    id: 8,
    quote:
      "Money and success don’t change people; they merely amplify what is already there.",
    author: "Will Smith",
  },
  {
    id: 9,
    quote:
      "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.",
    author: "Steve Jobs",
  },
  {
    id: 10,
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    id: 11,
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    id: 12,
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    id: 13,
    quote:
      "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
    author: "Helen Keller",
  },
  {
    id: 14,
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    id: 15,
    quote:
      "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
    author: "Philippians 4:6 (Bible)",
  },
  {
    id: 16,
    quote:
      "Faith is taking the first step even when you don't see the whole staircase.",
    author: "Martin Luther King Jr.",
  },
  {
    id: 17,
    quote:
      "Love your enemies, do good to those who hate you, bless those who curse you, pray for those who mistreat you.",
    author: "Luke 6:27-28 (Bible)",
  },
  {
    id: 18,
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    id: 19,
    quote:
      "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln",
  },
  {
    id: 20,
    quote:
      "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
    author: "Proverbs 3:5-6 (Bible)",
  },
  {
    id: 21,
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    id: 22,
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    id: 23,
    quote:
      "Do all the good you can, for all the people you can, in all the ways you can, as long as ever you can.",
    author: "John Wesley",
  },
  {
    id: 24,
    quote:
      "Happiness is not something ready-made. It comes from your own actions.",
    author: "Dalai Lama",
  },
  {
    id: 25,
    quote:
      "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.",
    author: "Galatians 6:9 (Bible)",
  },
  {
    id: 26,
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    id: 27,
    quote:
      "Keep your face always toward the sunshine—and shadows will fall behind you.",
    author: "Walt White",
  },
  {
    id: 28,
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    id: 29,
    quote: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
  },
  {
    id: 30,
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    id: 31,
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    id: 32,
    quote:
      "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    author: "Christian D. Larson",
  },
  {
    id: 33,
    quote:
      "The function of prayer is not to influence God, but rather to change the nature of the one who prays.",
    author: "Søren Kierkegaard",
  },
  {
    id: 34,
    quote:
      "When you have exhausted all possibilities, remember this: you haven't.",
    author: "Thomas Edison",
  },
  {
    id: 35,
    quote: "Don't let yesterday take up too much of today.",
    author: "Will Rogers",
  },
  {
    id: 36,
    quote:
      "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.",
    author: "Helen Keller",
  },
  {
    id: 37,
    quote:
      "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    author: "Albert Schweitzer",
  },
  {
    id: 38,
    quote:
      "Faith is not the belief that God will do what you want. It is the belief that God will do what is right.",
    author: "Max Lucado",
  },
  {
    id: 39,
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    id: 40,
    quote: "When you focus on the good, the good gets better.",
    author: "Abraham Hicks",
  },
  {
    id: 41,
    quote: "Let all that you do be done in love.",
    author: "1 Corinthians 16:14 (Bible)",
  },
  {
    id: 42,
    quote:
      "Success is not the absence of failure; it's the persistence through failure.",
    author: "Aisha Tyler",
  },
  {
    id: 43,
    quote: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe",
  },
  {
    id: 44,
    quote:
      "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
    author: "Proverbs 3:5-6 (Bible)",
  },
  {
    id: 45,
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    id: 46,
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    id: 47,
    quote: "You don't have to be great to start, but you have to start",
    author: "",
  },
  {
    id: 48,
    quote:
      "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    author: "Roy T. Bennett",
  },
  {
    id: 49,
    quote:
      "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
  },
  {
    id: 50,
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    id: 51,
    quote:
      "Faith is taking the first step even when you don't see the whole staircase.",
    author: "Martin Luther King Jr.",
  },
  {
    id: 52,
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    id: 53,
    quote: "Life is 10% what happens to us and 90% how we react to it.",
    author: "Charles R. Swindoll",
  },
  {
    id: 54,
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    id: 55,
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    id: 56,
    quote: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  {
    id: 57,
    quote: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    id: 58,
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    id: 59,
    quote:
      "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    author: "Christian D. Larson",
  },
  {
    id: 60,
    quote:
      "Every day may not be good, but there is something good in every day.",
    author: "Unknown",
  },
  {
    id: 61,
    quote:
      "The biggest risk is not taking any risk. In a world that's changing quickly, the only strategy that is guaranteed to fail is not taking risks.",
    author: "Mark Zuckerberg",
  },
  {
    id: 62,
    quote: "The best preparation for tomorrow is doing your best today.",
    author: "H. Jackson Brown Jr.",
  },
  {
    id: 63,
    quote: "Don't let yesterday take up too much of today.",
    author: "Will Rogers",
  },
  {
    id: 64,
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },
  {
    id: 65,
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    id: 66,
    quote: "When you focus on the good, the good gets better.",
    author: "Abraham Hicks",
  },
  {
    id: 67,
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    id: 68,
    quote:
      "Success is not the absence of failure; it's the persistence through failure.",
    author: "",
  },
  {
    id: 69,
    quote: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe",
  },
  {
    id: 70,
    quote:
      "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    author: "Roy T. Bennett",
  },
  {
    id: 71,
    quote:
      "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
  },
  {
    id: 72,
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    id: 73,
    quote:
      "Faith is taking the first step even when you don't see the whole staircase.",
    author: "Martin Luther King Jr.",
  },
  {
    id: 74,
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    id: 75,
    quote: "Life is 10% what happens to us and 90% how we react to it.",
    author: "Charles R. Swindoll",
  },
  {
    id: 76,
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    id: 77,
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    id: 78,
    quote: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  {
    id: 79,
    quote: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    id: 80,
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    id: 81,
    quote:
      "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    author: "Christian D. Larson",
  },
  {
    id: 82,
    quote:
      "Every day may not be good, but there is something good in every day.",
    author: "Unknown",
  },
  {
    id: 83,
    quote:
      "The biggest risk is not taking any risk. In a world that's changing quickly, the only strategy that is guaranteed to fail is not taking risks.",
    author: "Mark Zuckerberg",
  },
  {
    id: 84,
    quote: "The best preparation for tomorrow is doing your best today.",
    author: "H. Jackson Brown Jr.",
  },
  {
    id: 85,
    quote: "Don't let yesterday take up too much of today.",
    author: "Will Rogers",
  },
  {
    id: 86,
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },
  {
    id: 87,
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    id: 88,
    quote: "When you focus on the good, the good gets better.",
    author: "Abraham Hicks",
  },
  {
    id: 89,
    quote: "Believe you can and you're halfway there.",
    author: "",
  },
  {
    id: 90,
    quote:
      "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    author: "Albert Schweitzer",
  },
  {
    id: 91,
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    id: 92,
    quote:
      "The only person you should try to be better than is the person you were yesterday.",
    author: "Unknown",
  },
  {
    id: 93,
    quote:
      "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got this.",
    author: "Chantal Sutherland",
  },
  {
    id: 94,
    quote:
      "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    id: 95,
    quote: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  {
    id: 96,
    quote:
      "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "C.S. Lewis",
  },
  {
    id: 97,
    quote:
      "The biggest risk is not taking any risk. In a world that's changing quickly, the only strategy that is guaranteed to fail is not taking risks.",
    author: "Mark Zuckerberg",
  },
  {
    id: 98,
    quote:
      "Success is not the absence of failure; it's the persistence through failure.",
    author: "Aisha Tyler",
  },
  {
    id: 99,
    quote:
      "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
  {
    id: 100,
    quote:
      "The harder you work for something, the greater you'll feel when you achieve it.",
    author: "Unknown",
  },
];

const questions = [
    {
      question: "Cili është qëndrimi yt për taksat mbi të ardhurat e larta?",
      options: ["Rritja e tyre", "Ulja e tyre", "Mbajtja aktuale"],
      policyTags: ["takse", "ekonomi"]
    },
    {
      question: "A duhet shteti të subvencionojë energjinë e pastër?",
      options: ["Po", "Jo", "Vetëm në zona të ndotura"],
      policyTags: ["mjedis", "energjia"]
    },
    {
      question: "Si duhet trajtuar emigracioni?",
      options: ["Lehtësim procedurash", "Kufizim më i madh", "Status aktual"],
      policyTags: ["emigracion"]
    },
    {
      question: "Cili është qëndrimi yt për abortin?",
      options: ["Pro zgjedhjes së gruas", "Kundër", "Vetëm në raste të caktuara"],
      policyTags: ["shendetesia", "te drejtat"]
    },
    {
      question: "A duhet legalizuar kanabisi?",
      options: ["Po për qëllime mjekësore", "Po në përgjithësi", "Jo"],
      policyTags: ["shendetesia", "siguria"]
    },
    {
      question: "Cili është roli i shtetit në arsim?",
      options: ["Investime publike", "Privatizim pjesor", "Status aktual"],
      policyTags: ["arsim"]
    },
    {
      question: "A duhet të ketë kontroll më të rreptë për armët?",
      options: ["Po", "Jo", "Vetëm në zona të rrezikshme"],
      policyTags: ["siguria"]
    },
    {
      question: "A duhet të ndalohet puna e fëmijëve në forma të caktuara?",
      options: ["Po", "Jo", "Vetëm në punë familjare"],
      policyTags: ["te drejtat"]
    },
    {
      question: "Cili është qëndrimi yt për sistemin shëndetësor?",
      options: ["Shtetëror falas", "Privat i subvencionuar", "Sistem i përzier"],
      policyTags: ["shendetesia"]
    },
    {
      question: "A duhet të rriten fondet për ushtrinë?",
      options: ["Po", "Jo", "Vetëm për mbrojtje"],
      policyTags: ["mbrojtja"]
    },
    {
      question: "Si duhet trajtuar ndotja e ajrit?",
      options: ["Taksa për ndotësit", "Inkurajim i energjive të pastra", "Vetë-rregullim industrial"],
      policyTags: ["mjedis"]
    },
    {
      question: "A duhet të ketë një pagë minimale universale?",
      options: ["Po", "Jo", "Vetëm në kriza ekonomike"],
      policyTags: ["ekonomi", "te drejtat"]
    },
    {
      question: "Cili është roli i fesë në shtet?",
      options: ["Shtet laik", "Mbështetje ndaj vlerave fetare", "Neutralitet absolut"],
      policyTags: ["kulture", "te drejtat"]
    },
    {
      question: "A duhet ndaluar reklamimi i produkteve të dëmshme?",
      options: ["Po", "Jo", "Vetëm për të miturit"],
      policyTags: ["shendetesia"]
    },
    {
      question: "Si duhet trajtuar mbikëqyrja dixhitale?",
      options: ["Më shumë mbikëqyrje për siguri", "Kufizim i mbledhjes së të dhënave", "Vetëm me leje gjyqësore"],
      policyTags: ["privatesi", "siguria"]
    }
  ];
  
  let currentQuestion = 0;
  let userAnswers = [];
  
  function showQuestion() {
    const q = questions[currentQuestion];
    const questionElem = document.getElementById("question");
    const optionsDiv = document.getElementById("options");
  
    questionElem.textContent = q.question;
    optionsDiv.innerHTML = "";
  
    q.options.forEach((opt, idx) => {
      const button = document.createElement("button");
      button.classList.add("option-btn");
      button.textContent = opt;
      button.setAttribute("data-index", idx);
      button.onclick = () => {
        // Ruaj përgjigjen me indeks dhe tags
        userAnswers.push({ answerIndex: idx, tags: q.policyTags });
        nextQuestion();
      };
      optionsDiv.appendChild(button);
    });
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }
  
  function calculatePolicyMatch() {
    // Ky funksion bën llogaritje të ndryshme për secilën përgjigje.
    // Për shembull, indeks 0 = më pro, indeks 1 = kundër, indeks 2 = neutral.
    // Krijojmë një peshë për secilën zgjedhje për të ndryshuar rezultatet.
  
    const tagScores = {};
  
    userAnswers.forEach(({ answerIndex, tags }) => {
      tags.forEach(tag => {
        if (!tagScores[tag]) tagScores[tag] = 0;
  
        // Pesha nga përgjigja
        // Indeks 0 = +2, Indeks 1 = -1, Indeks 2 = +0
        if (answerIndex === 0) tagScores[tag] += 2;
        else if (answerIndex === 1) tagScores[tag] -= 1;
        else tagScores[tag] += 0;
      });
    });
  
    // Kthejmë objektin të radhitur nga më i madh tek më i vogli
    return Object.entries(tagScores)
      .sort((a, b) => b[1] - a[1]);
  }
  
  function showResults() {
    const sortedTags = calculatePolicyMatch();
    const mainArea = document.getElementById("question-section");
  
    // Ndërtim i tekstit shtesë sipas pikëve
    let detailedInfo = '';
    sortedTags.forEach(([tag, score]) => {
      let explanation = '';
      switch(tag) {
        case 'takse':
          explanation = 'Qasjet për taksat ndikojnë në mënyrën sesi menaxhohet ekonomia dhe financat publike.';
          break;
        case 'ekonomi':
          explanation = 'Politikat ekonomike ndikojnë në punësim, rritje dhe barazi.';
          break;
        case 'mjedis':
          explanation = 'Politikat e mjedisit përfshijnë mbrojtjen e natyrës dhe burimeve natyrore.';
          break;
        case 'energjia':
          explanation = 'Fokusi në energjinë e pastër është kyç për qëndrueshmërinë e planetit.';
          break;
        case 'emigracion':
          explanation = 'Politikat e emigracionit ndikojnë në demografinë dhe ekonominë.';
          break;
        case 'shendetesia':
          explanation = 'Sistemi shëndetësor përcakton aksesin dhe cilësinë e kujdesit mjekësor.';
          break;
        case 'te drejtat':
          explanation = 'Çështjet e të drejtave prekin barazinë dhe liritë individuale.';
          break;
        case 'siguria':
          explanation = 'Siguria kombëtare dhe personale janë pjesë e prioriteteve shtetërore.';
          break;
        case 'arsim':
          explanation = 'Arsimi është baza e zhvillimit të qëndrueshëm të shoqërisë.';
          break;
        case 'mbrojtja':
          explanation = 'Fokusi në mbrojtjen kombëtare përcakton investimet në ushtri.';
          break;
        case 'kulture':
          explanation = 'Çështjet kulturore përfshijnë trashëgiminë dhe identitetin kombëtar.';
          break;
        case 'privatesi':
          explanation = 'Privatësia është një çështje kryesore në epokën dixhitale.';
          break;
        default:
          explanation = 'Informacion i përgjithshëm mbi këtë fushë politike.';
      }
      detailedInfo += `<li><strong>${tag}</strong> (${score} pikë): ${explanation}</li>`;
    });
  
    mainArea.innerHTML = `
      <section id="result-section">
        <h2>Rezultatet e tua</h2>
        <p>Fushat ku ke përputhje më të madhe bazuar në përgjigjet:</p>
        <ul>${detailedInfo}</ul>
        <a href="summary.html" class="summary-link" target="_blank" rel="noopener noreferrer">
          Lexo përmbledhje të ligjeve dhe votimeve të ardhshme
        </a>
        <button id="restart-btn" class="option-btn">Rifillo Kuizin</button>
      </section>
    `;
  
    document.getElementById("restart-btn").onclick = () => {
      restartQuiz();
    };
  }
  
  function restartQuiz() {
    currentQuestion = 0;
    userAnswers = [];
    showQuestion();
  }
  
  window.onload = () => {
    showQuestion();
  };
  
  
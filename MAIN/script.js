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
      options: ["Po", "Jo", "Vetëm për teknologji"],
      policyTags: ["siguria", "mbrojtja"]
    },
    {
      question: "Si duhet trajtuar çështjet e të drejtave të komuniteteve LGBTQ+?",
      options: ["Mbështetje dhe ligje mbrojtëse", "Neutralitet", "Kundërshtim"],
      policyTags: ["te drejtat"]
    },
    {
      question: "A duhet të ketë më shumë investime në infrastrukturë?",
      options: ["Po, shumë", "Jo shumë", "Mjafton statusi aktual"],
      policyTags: ["ekonomi", "infrastrukturë"]
    },
    {
      question: "Cili është qëndrimi yt për përdorimin e teknologjisë në shkollë?",
      options: ["Më shumë", "Jo shumë", "Vetëm në disa fusha"],
      policyTags: ["arsim", "teknologji"]
    },
    {
      question: "A duhet të ketë më shumë ligje për mbrojtjen e privatësisë në internet?",
      options: ["Po", "Jo", "Nuk e di"],
      policyTags: ["teknologji", "te drejtat"]
    },
    {
      question: "Si e sheh rolin e BE-së në politikën kombëtare?",
      options: ["Mbështetje e plotë", "Kritike", "Neutral"],
      policyTags: ["politikë", "bashkëpunim"]
    },
    {
    question: "A duhet të ketë kufizime më të mëdha ndaj mediave që përhapin dezinformata?",
    options: ["Po, për të mbrojtur publikun", "Jo, liri e shprehjes", "Vetëm për media të caktuara"],
    policyTags: ["media", "te drejtat"]
  },
  {
    question: "Cili duhet të jetë prioriteti në politikat bujqësore?",
    options: ["Subvencione për fermerët vendas", "Import i lirë për çmime më të ulëta", "Ekuilibër ndërmjet të dyjave"],
    policyTags: ["bujqësi", "ekonomi"]
  },
  {
    question: "A duhet të legalizohet eutanazia në raste të pashpresa mjekësore?",
    options: ["Po, me kushte të rrepta", "Jo", "Vetëm me vendim të gjykatës"],
    policyTags: ["shendetesia", "etika"]
  },
  {
    question: "A duhet shteti të ofrojë të ardhura bazë për të gjithë qytetarët?",
    options: ["Po, për siguri sociale", "Jo, është e paqëndrueshme", "Vetëm për të papunët"],
    policyTags: ["ekonomi", "sociale"]
  },
  {
    question: "A duhet të ndalohet ndërtimi në zona të mbrojtura natyrore?",
    options: ["Po, në çdo rast", "Jo, me leje strikte", "Vetëm për projekte të rëndësishme publike"],
    policyTags: ["mjedis", "urbanizim"]
  },
  {
    question: "A duhet të ketë kuota gjinore në politikë dhe drejtues shtetërorë?",
    options: ["Po", "Jo", "Vetëm në parti politike"],
    policyTags: ["te drejtat", "barazi"]
  },
  {
    question: "Si duhet trajtuar edukimi seksual në shkolla?",
    options: ["Të jetë pjesë e kurrikulës", "Vetëm me pëlqim prindëror", "Të shmanget në moshat e hershme"],
    policyTags: ["arsim", "shendetesia"]
  },
  {
    question: "A duhet të vendosen tarifa ndaj korporatave ndërkombëtare që operojnë në vend?",
    options: ["Po, për të mbrojtur bizneset lokale", "Jo, për të nxitur investimet", "Vetëm në sektorët strategjikë"],
    policyTags: ["ekonomi", "tregti"]
  },
  {
    question: "Cili është qëndrimi yt për rritjen e kompetencave të pushtetit lokal?",
    options: ["Duhet decentralizim", "Duhet më shumë kontroll qendror", "Balancë aktuale është e mirë"],
    policyTags: ["qeverisje", "lokale"]
  },
  {
    question: "A duhet të vendoset shërbimi ushtarak i detyrueshëm?",
    options: ["Po", "Jo", "Vetëm në raste të jashtëzakonshme"],
    policyTags: ["mbrojtja", "siguria"]
  }
  ];
  
  let currentQuestionIndex = 0;
  const totalQuestions = questions.length;
  
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const progressEl = document.getElementById("quiz-progress");
  const progressTextEl = document.getElementById("progress-text");
  const mainEl = document.getElementById("question-section");
  
  let userAnswers = [];
  
  function loadQuestion() {
    const currentQ = questions[currentQuestionIndex];
    questionEl.textContent = currentQ.question;
    optionsEl.innerHTML = "";
  
    currentQ.options.forEach((option, index) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.textContent = option;
      btn.onclick = () => selectAnswer(index);
      btn.setAttribute("aria-label", `Përgjigjja ${index + 1}: ${option}`);
      optionsEl.appendChild(btn);
    });
  
    updateProgress();
  }
  
  function updateProgress() {
    const progressPercent = (currentQuestionIndex / totalQuestions) * 100;
    progressEl.value = progressPercent;
    progressTextEl.textContent = `${currentQuestionIndex} / ${totalQuestions}`;
  }
  
  function selectAnswer(selectedIndex) {
    userAnswers[currentQuestionIndex] = selectedIndex;
    currentQuestionIndex++;
  
    if (currentQuestionIndex < totalQuestions) {
      loadQuestion();
    } else {
      showResults();
    }
  }
  
  function showResults() {
    mainEl.innerHTML = `
      <section id="result-section" tabindex="0" aria-live="polite">
        <h2>Rezultatet e Kuizit</h2>
        <p>Faleminderit që plotësuat kuizin! Këtu janë disa përputhje bazike me politikat:</p>
        <ul id="result-list"></ul>
        <div id="party-result"></div>
        <a href="summary.html" class="summary-link" aria-label="Shiko përmbledhjen e ligjeve dhe votimeve të ardhshme">Shiko përmbledhjen e ligjeve dhe votimeve të ardhshme</a>
      </section>
    `;
  
    let pdkScore = 0;
    let lvvScore = 0;
    let ldkScore = 0;
  
    const pdkTags = ["ekonomi", "taksa", "infrastrukturë", "media", "ndërtimi", "tarifa"];
    const lvvTags = ["mjedis", "energjinë", "shtetit", "ekonomi", "BE", "dezinformata", "subvencione", "tarifa"];
    const ldkTags = ["te drejtat", "teknologjisë", "ekonomi", "media", "korporatave", "pushtetit", "social"];

  userAnswers.forEach((answerIndex, questionIndex) => {
  const question = questions[questionIndex];
  
    if (question.policyTags.some(tag => pdkTags.includes(tag))) pdkScore += answerIndex;
    if (question.policyTags.some(tag => lvvTags.includes(tag))) lvvScore += answerIndex;
    if (question.policyTags.some(tag => ldkTags.includes(tag))) ldkScore += answerIndex;
  });
  
    function getMatchingParty(pdkScore, lvvScore, ldkScore) {
      const parties = [
        { name: "Partia Demokratike e Kosovës", focus: "Fokus në taksa dhe ekonomi", score: pdkScore },
        { name: "Lëvizja Vetëvendosje", focus: "Politika mjedisore dhe energjia", score: lvvScore },
        { name: "Lidhja Demokratike e Kosovës", focus: "Politika sociale dhe të drejtat", score: ldkScore },
      ];
      parties.sort((a, b) => b.score - a.score);
      return parties[0];
    }
  
    const matchedParty = getMatchingParty(pdkScore, lvvScore, ldkScore);
  
    const resultDiv = document.getElementById('party-result');
    resultDiv.innerHTML = `
      <h3>Partia që i përshtatet më së miri rezultateve tuaja:</h3>
      <p><strong>${matchedParty.name}</strong> — ${matchedParty.focus}</p>
    `;
  
    const resultList = document.getElementById("result-list");
    const matches = [
      "Partia Demokratike e Kosovës - Fokus në taksa dhe ekonomi",
      "Lëvizja Vetëvendosje - Politika mjedisore dhe energjia",
      "Lidhja Demokratike e Kosovës - Politika sociale dhe të drejtat",
    ];
    matches.forEach(match => {
      const li = document.createElement("li");
      li.textContent = match;
      resultList.appendChild(li);
    });
    
    resultList.focus();
  }
  
  window.onload = loadQuestion;
  
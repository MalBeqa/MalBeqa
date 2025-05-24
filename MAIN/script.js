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
  
    let ekonomiScore = 0;
    let mjedisScore = 0;
    let socialScore = 0;
  
    userAnswers.forEach((answerIndex, questionIndex) => {
      const question = questions[questionIndex];
      if (question.policyTags.includes("ekonomi")) ekonomiScore += answerIndex;
      if (question.policyTags.includes("mjedis")) mjedisScore += answerIndex;
      if (question.policyTags.includes("te drejtat") || question.policyTags.includes("social")) socialScore += answerIndex;
    });
  
    function getMatchingParty(ekonomiScore, mjedisScore, socialScore) {
      const parties = [
        { name: "Partia Demokratike e Kosovës", focus: "Fokus në taksa dhe ekonomi", score: ekonomiScore },
        { name: "Lëvizja Vetëvendosje", focus: "Politika mjedisore dhe energjia", score: mjedisScore },
        { name: "Lidhja Demokratike e Kosovës", focus: "Politika sociale dhe të drejtat", score: socialScore },
      ];
      parties.sort((a, b) => b.score - a.score);
      return parties[0];
    }
  
    const matchedParty = getMatchingParty(ekonomiScore, mjedisScore, socialScore);
  
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
  
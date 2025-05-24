const questions = [
    { question: "Cili është qëndrimi yt për taksat mbi të ardhurat e larta?", options: ["Rritja e tyre", "Ulja e tyre", "Mbajtja aktuale"], policyTags: ["takse", "ekonomi"] },
    { question: "A duhet shteti të subvencionojë energjinë e pastër?", options: ["Po", "Jo", "Vetëm në zona të ndotura"], policyTags: ["mjedis", "energjia"] },
    { question: "Si duhet trajtuar emigracioni?", options: ["Lehtësim procedurash", "Kufizim më i madh", "Status aktual"], policyTags: ["emigracion"] },
    { question: "Cili është qëndrimi yt për abortin?", options: ["Pro zgjedhjes së gruas", "Kundër", "Vetëm në raste të caktuara"], policyTags: ["shendetesia", "te drejtat"] },
    { question: "A duhet legalizuar kanabisi?", options: ["Po për qëllime mjekësore", "Po në përgjithësi", "Jo"], policyTags: ["shendetesia", "siguria"] },
    { question: "Cili është roli i shtetit në arsim?", options: ["Investime publike", "Privatizim pjesor", "Status aktual"], policyTags: ["arsim"] },
    { question: "A duhet të ketë kontroll më të rreptë për armët?", options: ["Po", "Jo", "Vetëm në zona të rrezikshme"], policyTags: ["siguria"] },
    { question: "A duhet të ndalohet puna e fëmijëve në forma të caktuara?", options: ["Po", "Jo", "Vetëm në punë familjare"], policyTags: ["te drejtat"] },
    { question: "Cili është qëndrimi yt për sistemin shëndetësor?", options: ["Shtetëror falas", "Privat i subvencionuar", "Sistem i përzier"], policyTags: ["shendetesia"] },
    { question: "A duhet të rriten fondet për ushtrinë?", options: ["Po", "Jo", "Vetëm për mbrojtje"], policyTags: ["mbrojtja"] },
    { question: "Si duhet trajtuar ndotja e ajrit?", options: ["Taksa për ndotësit", "Inkurajim i energjive të pastra", "Vetë-rregullim industrial"], policyTags: ["mjedis"] },
    { question: "A duhet të ketë një pagë minimale universale?", options: ["Po", "Jo", "Vetëm në kriza ekonomike"], policyTags: ["ekonomi", "te drejtat"] },
    { question: "Cili është roli i fesë në shtet?", options: ["Shtet laik", "Mbështetje ndaj vlerave fetare", "Neutralitet absolut"], policyTags: ["kulture", "te drejtat"] },
    { question: "A duhet ndaluar reklamimi i produkteve të dëmshme?", options: ["Po", "Jo", "Vetëm për të miturit"], policyTags: ["shendetesia"] },
    { question: "Si duhet trajtuar mbikëqyrja dixhitale?", options: ["Më shumë mbikëqyrje për siguri", "Kufizim i mbledhjes së të dhënave", "Vetëm me leje gjyqësore"], policyTags: ["privatesi", "siguria"] }
  ];
  
  let currentQuestion = 0;
  const userAnswers = [];
  
  function showQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question").textContent = q.question;
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
  
    q.options.forEach((opt) => {
      const button = document.createElement("button");
      button.classList.add("option-btn");
      button.textContent = opt;
      button.onclick = () => {
        userAnswers.push({ answer: opt, tags: q.policyTags });
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
    const tagScore = {};
  
    userAnswers.forEach(entry => {
      entry.tags.forEach(tag => {
        tagScore[tag] = (tagScore[tag] || 0) + 1;
      });
    });
  
    // Simulim për dinamikë të rezultateve
    Object.keys(tagScore).forEach(tag => {
      tagScore[tag] += Math.random(); // shton pakëz paqëndrueshmëri
    });
  
    return Object.entries(tagScore).sort((a, b) => b[1] - a[1]);
  }
  
  function showResults() {
    const sortedTags = calculatePolicyMatch();
    const mainArea = document.getElementById("question-section");
    mainArea.innerHTML = `
      <section id="result-section">
        <h2>Rezultatet e tua</h2>
        <p>Përputhje më të larta në fushat:</p>
        <ul>
          ${sortedTags.map(([tag, score]) => `<li><strong>${tag}</strong> – ${score.toFixed(1)} pikë</li>`).join('')}
        </ul>
        <a href="summary.html">Lexo përmbledhje të ligjeve dhe votimeve të ardhshme</a>
      </section>
    `;
  }
  
  window.onload = showQuestion;
  
  
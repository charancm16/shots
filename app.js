(() => {
  const subjects = window.STUDY_DATA || [];
  const allQuestions = [];
  subjects.forEach(subject => subject.units.forEach((unit, unitIndex) =>
    unit.questions.forEach(q => allQuestions.push({
      ...q, subjectId: subject.id, subjectTitle: subject.title,
      unitTitle: unit.title, unitIndex, key: `${subject.id}-${unitIndex}-${q.number}`
    }))
  ));

  const state = {
    subject: "ALL", unit: "ALL", search: "", favoritesOnly: false,
    unmasteredOnly: false, sort: "original", visible: 30,
    opened: new Set(), mastered: new Set(JSON.parse(localStorage.getItem("shots-mastered") || "[]")),
    favorites: new Set(JSON.parse(localStorage.getItem("shots-favorites") || "[]"))
  };
  const $ = id => document.getElementById(id);
  const subjectGrid = $("subjectGrid"), unitChips = $("unitChips"), questionList = $("questionList");
  const subjectShort = { DL: "Deep Learning", EMI: "Electronic Measurements & Instrumentation", HR: "HRM & Project Management", PCMC: "Cellular & Mobile Communication", SADP: "Software Engineering & Design Patterns" };
  const colors = ["#111111", "#e34242", "#2364d2", "#d44c91", "#777777"];

  function countFor(subjectId) {
    return allQuestions.filter(q => subjectId === "ALL" || q.subjectId === subjectId).length;
  }
  function save() {
    localStorage.setItem("shots-mastered", JSON.stringify([...state.mastered]));
    localStorage.setItem("shots-favorites", JSON.stringify([...state.favorites]));
  }
  function renderSubjects() {
    const all = `<button class="subject-card ${state.subject === "ALL" ? "selected" : ""}" data-subject="ALL">
      <span class="subject-code">00 / OVERVIEW</span><strong>All subjects</strong><small>${allQuestions.length} questions</small></button>`;
    subjectGrid.innerHTML = all + subjects.map((s, i) => `<button class="subject-card ${state.subject === s.id ? "selected" : ""}" data-subject="${s.id}">
      <span class="subject-code">0${i + 1} / SUBJECT</span><strong>${subjectShort[s.id] || s.title}</strong><small>${countFor(s.id)} questions · ${s.units.length} units</small></button>`).join("");
    subjectGrid.querySelectorAll("[data-subject]").forEach(btn => btn.addEventListener("click", () => {
      state.subject = btn.dataset.subject; state.unit = "ALL"; state.visible = 30; renderSubjects(); renderUnits(); renderQuestions();
    }));
  }
  function getUnits() {
    if (state.subject === "ALL") return subjects.flatMap(s => s.units.map((u, i) => ({ subject: s, unit: u, index: i })));
    const s = subjects.find(x => x.id === state.subject); return s ? s.units.map((u, i) => ({ subject: s, unit: u, index: i })) : [];
  }
  function renderUnits() {
    const units = getUnits();
    $("unitHeading").textContent = state.subject === "ALL" ? "All units" : (subjectShort[state.subject] || "Subject") + " units";
    $("unitCount").textContent = `${units.length} unit${units.length === 1 ? "" : "s"}`;
    unitChips.innerHTML = `<button class="unit-chip ${state.unit === "ALL" ? "selected" : ""}" data-unit="ALL">All units</button>` +
      units.map(x => `<button class="unit-chip ${state.unit === x.subject.id + "-" + x.index ? "selected" : ""}" data-unit="${x.subject.id}-${x.index}">${x.subject.id} · ${x.unit.title.replace(/^UNIT\s*[IVX\d]+\s*:\s*/i, "")}</button>`).join("");
    unitChips.querySelectorAll("[data-unit]").forEach(btn => btn.addEventListener("click", () => {
      state.unit = btn.dataset.unit; state.visible = 30; renderUnits(); renderQuestions();
    }));
  }
  function filteredQuestions() {
    let arr = allQuestions.filter(q => {
      if (state.subject !== "ALL" && q.subjectId !== state.subject) return false;
      if (state.unit !== "ALL" && `${q.subjectId}-${q.unitIndex}` !== state.unit) return false;
      if (state.favoritesOnly && !state.favorites.has(q.key)) return false;
      if (state.unmasteredOnly && state.mastered.has(q.key)) return false;
      const needle = state.search.toLowerCase().trim();
      if (needle && !`${q.question} ${q.answer} ${q.example} ${q.subjectTitle} ${q.unitTitle}`.toLowerCase().includes(needle)) return false;
      return true;
    });
    if (state.sort === "az") arr.sort((a, b) => a.question.localeCompare(b.question));
    if (state.sort === "random") arr = arr.slice().sort(() => Math.random() - .5);
    return arr;
  }
  function renderQuestions() {
    const arr = filteredQuestions(), shown = arr.slice(0, state.visible);
    $("resultCount").textContent = `${arr.length} question${arr.length === 1 ? "" : "s"}`;
    $("questionHeading").textContent = state.search ? `Search results` : (state.subject === "ALL" ? "All questions" : subjectShort[state.subject] || "Questions");
    questionList.innerHTML = shown.map((q, i) => {
      const open = state.opened.has(q.key), mastered = state.mastered.has(q.key), favorite = state.favorites.has(q.key);
      return `<article class="question-card ${mastered ? "mastered" : ""}" style="animation-delay:${Math.min(i % 30, 12) * 18}ms" data-key="${q.key}">
        <div class="card-top">
          <span class="q-number">${String(q.number).padStart(2, "0")}</span>
          <div class="q-content"><div class="q-meta">${q.subjectId} / ${q.unitTitle.replace(/^UNIT\s*[IVX\d]+\s*:\s*/i, "").toUpperCase()}</div><div class="q-text">${escapeHTML(q.question)}</div></div>
          <div class="card-actions">
            <button class="mini-btn ${favorite ? "favorite" : ""}" data-action="favorite" title="Favorite" aria-label="Favorite question">${favorite ? "♥" : "♡"}</button>
            <button class="mini-btn ${mastered ? "mastered" : ""}" data-action="master" title="${mastered ? "Unmark mastered" : "Mark mastered"}" aria-label="Mark mastered">${mastered ? "✓" : "○"}</button>
          </div>
        </div>
        ${open ? `<div class="answer-area"><div class="answer-label">ANSWER / 2 MARKS</div><div class="answer-text">${escapeHTML(q.answer)}</div>${q.example ? `<div class="example-box"><div class="example-label">EXAMPLE</div><div class="example-text">${escapeHTML(q.example)}</div></div>` : ""}</div>` : ""}
        <div class="card-bottom"><button class="reveal-btn" data-action="reveal">${open ? "Hide answer" : "Reveal answer"} <span>${open ? "↑" : "↓"}</span></button><span class="card-bottom-note">${mastered ? "✓ MASTERED" : "TAP TO REVISE"}</span></div>
      </article>`;
    }).join("");
    $("emptyState").classList.toggle("hidden", arr.length !== 0);
    $("loadMore").classList.toggle("hidden", arr.length <= state.visible);
    updateProgress();
  }
  function updateProgress() {
    const total = allQuestions.length, mastered = state.mastered.size, percent = Math.round(mastered / total * 100);
    $("topProgress").textContent = `${mastered} / ${total} mastered`;
    $("progressFill").style.width = percent + "%";
    $("progressLabel").textContent = `${percent}% mastered`;
    $("totalQuestions").textContent = total;
    $("totalUnits").textContent = subjects.reduce((n, s) => n + s.units.length, 0);
  }
  function escapeHTML(str = "") { return String(str).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }
  function toast(msg) { const el = $("toast"); el.textContent = msg; el.classList.add("show"); clearTimeout(toast.timer); toast.timer = setTimeout(() => el.classList.remove("show"), 1900); }
  questionList.addEventListener("click", e => {
    const btn = e.target.closest("[data-action]"); if (!btn) return;
    const card = btn.closest(".question-card"), key = card.dataset.key;
    if (btn.dataset.action === "reveal") { state.opened.has(key) ? state.opened.delete(key) : state.opened.add(key); renderQuestions(); }
    if (btn.dataset.action === "favorite") { state.favorites.has(key) ? state.favorites.delete(key) : state.favorites.add(key); save(); renderQuestions(); toast(state.favorites.has(key) ? "Added to favorites" : "Removed from favorites"); }
    if (btn.dataset.action === "master") { state.mastered.has(key) ? state.mastered.delete(key) : state.mastered.add(key); save(); renderQuestions(); toast(state.mastered.has(key) ? "Marked as mastered ✓" : "Added back to revision"); }
  });
  $("searchInput").addEventListener("input", e => { state.search = e.target.value; state.visible = 30; renderQuestions(); });
  $("favoritesOnly").addEventListener("click", () => { state.favoritesOnly = !state.favoritesOnly; $("favoritesOnly").classList.toggle("active", state.favoritesOnly); state.visible = 30; renderQuestions(); });
  $("unmasteredOnly").addEventListener("click", () => { state.unmasteredOnly = !state.unmasteredOnly; $("unmasteredOnly").classList.toggle("active", state.unmasteredOnly); state.visible = 30; renderQuestions(); });
  $("randomBtn").addEventListener("click", () => { state.sort = "random"; $("sortSelect").value = "random"; state.visible = 30; renderQuestions(); document.querySelector(".question-section").scrollIntoView({ behavior: "smooth" }); toast("Questions shuffled ✦"); });
  $("sortSelect").addEventListener("change", e => { state.sort = e.target.value; state.visible = 30; renderQuestions(); });
  $("loadMore").addEventListener("click", () => { state.visible += 30; renderQuestions(); });
  $("clearFilters").addEventListener("click", () => { state.subject = "ALL"; state.unit = "ALL"; state.search = ""; state.favoritesOnly = false; state.unmasteredOnly = false; $("searchInput").value = ""; $("favoritesOnly").classList.remove("active"); $("unmasteredOnly").classList.remove("active"); renderSubjects(); renderUnits(); renderQuestions(); });
  $("themeToggle").addEventListener("click", () => { document.body.classList.toggle("dark"); localStorage.setItem("shots-dark", document.body.classList.contains("dark") ? "1" : "0"); });
  if (localStorage.getItem("shots-dark") === "1") document.body.classList.add("dark");
  document.addEventListener("keydown", e => { if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); $("searchInput").focus(); } if (e.key === "Escape") { $("searchInput").value = ""; state.search = ""; renderQuestions(); } });
  renderSubjects(); renderUnits(); renderQuestions();
})();
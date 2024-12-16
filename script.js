
let mainId = document.getElementById("mainId");
let mainBtn = document.getElementById("mainBtn");

mainBtn?.addEventListener("click", ()=>{
    mainId.classList.toggle('hide')
})


let skillId = document.getElementById("skills");
let skillBtn = document.getElementById("skillBtn");

skillBtn?.addEventListener("click", ()=>{
    skills.classList.toggle('hidden')
})
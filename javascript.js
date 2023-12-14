let input_search = document.getElementById("input_search");
let form_search = document.getElementById("form_search");
let recent_SearchEl = document.querySelector(".recent_Search");

let recentSearchList = [];
form_search.addEventListener("submit",(e) => {
    e.preventDefault();
    recentSearchList.unshift(input_search.value )
    renderFunction()
});

function renderFunction() {
    let recent_Search_html = '';
recentSearchList.forEach(el => {
    recent_Search_html += `
    <div class="recent_list">
        <i class="fa-solid fa-clock-rotate-left"></i>
        <p>${el}</p>
    </div>
    `;
})

recent_SearchEl.innerHTML = recent_Search_html;
}

renderFunction();

// console.log("log -", recent_SearchEl);
// console.log("log2: ", recent_Search_html);
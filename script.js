const tabs = document.querySelectorAll("[data-tab-names]");
const tabContent = document.querySelectorAll("[data-tab-contents]");
for(let i=0;i<tabs.length;i++){
    tabs[i].addEventListener("click" , ()=>{
        const tabs_content = document.querySelector("#"+tabs[i].dataset.tabNames);
        for(let i=0;i<tabs.length;i++){
            tabs[i].classList.remove("active");
            tabContent[i].classList.remove("active");
        }
        tabs_content.classList.add("active");
        tabs[i].classList.add("active");
    });

}


var li_items = document.querySelectorAll(".sid_bar_bottom ul li");

li_items.forEach(function(li_main) {
    li_items.forEach(function(li){
        li.classList.remove("active");
    })
    li_main.classList.add("active");
})
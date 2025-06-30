document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");
    const content = document.getElementById("content");

    form.addEventListener("click",function(e) {
        content.style.display = "block";
        e.stopPropagation();
    });

    const divs = content.querySelectorAll('.choice');
    divs.forEach(div => {
        div.addEventListener('click', function() {
            document.getElementById("name").textContent = this.textContent;
            content.style.display = "none";
        });
    });


    document.addEventListener('click', function(event) {
        if (content.style.display === "block" && !content.contains(event.target)) {
            content.style.display = "none";
        };
    });
});
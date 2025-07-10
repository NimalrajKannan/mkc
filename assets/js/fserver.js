
    document.addEventListener("DOMContentLoaded", function() {
        fetch("header.html")
            .then(response => response.text())
            .then(data => {
                const header = document.getElementById("header");
                if (header) { // Check if the header element exists
                    header.innerHTML = data;
                } else {
                    console.error("Header element not found.");
                }
            });

        fetch("footer.html")
            .then(response => response.text())
            .then(data => {
                const footer = document.getElementById("footer");
                if (footer) { // Check if the footer element exists
                    footer.innerHTML = data;
                } else {
                    console.error("Footer element not found.");
                }
            });
    });


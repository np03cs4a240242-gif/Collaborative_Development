document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("search").addEventListener("keyup", function () {
        let q = this.value;

        fetch("search.php?q=" + q)
            .then(response => response.text())
            .then(data => {
                document.getElementById("result").innerHTML = data;
            });
    });
});

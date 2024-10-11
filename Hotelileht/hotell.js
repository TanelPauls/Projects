document.addEventListener('DOMContentLoaded', function() {
    var yearSpan = document.getElementById('current-year');
    var currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
});
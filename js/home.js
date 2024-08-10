// Script Untuk Filter Job dengan searchbar dan select option
document.querySelector('.btn-jobsearch').addEventListener('click', function() {
    // Ambil nilai dari input search bar, departemen, dan job level
    var keyword = document.getElementById('search-keyword').value.toLowerCase();
    var selectedDepartment = document.getElementById('department-filter').value;
    var selectedJobLevel = document.getElementById('job-level-filter').value.toLowerCase();

    // Ambil semua baris pekerjaan
    var jobs = document.querySelectorAll('.list-job');

    // Loop melalui setiap pekerjaan dan filter
    jobs.forEach(function(job) {
        var jobTitle = job.querySelector('.list-job-title a').textContent.toLowerCase();
        var jobDepartment = job.querySelector('.job-departement').textContent;
        var jobTime = job.querySelector('.job-time').textContent.toLowerCase();

        // Filter berdasarkan kata kunci, departemen, dan level pekerjaan
        if (
            (keyword === '' || jobTitle.includes(keyword)) && // Filter berdasarkan keyword
            (selectedDepartment === '' || jobDepartment === selectedDepartment) && // Filter berdasarkan departemen
            (selectedJobLevel === '' || jobTime.includes(selectedJobLevel)) // Filter berdasarkan job level
        ) {
            job.style.display = ''; // Tampilkan pekerjaan jika sesuai dengan semua kriteria
        } else {
            job.style.display = 'none'; 
        }
    });
});


// Script Untuk Icon Menu Bar(Pas Responsive)
const navLinks = document.getElementById("nav-links-btn");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
navLinks.classList.toggle("open");

const isOpen = navLinks.classList.contains("open");
menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-line"
);
});

navLinks.addEventListener("click", (e) => {
navLinks.classList.remove("open");
menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// Script buat bagian navbar pas discroll
window.onscroll = function() {
    var navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 50) { 
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};



// Script buat bagian select job (Hover)

// Pilih semua elemen dengan kelas 'list-job'
const jobs = document.querySelectorAll('.list-job');

// warna yang dipake
const colors = ['#ff6b6b', '#4caf50', '#ffcc00', '#2c4596', '#ffa07a', '#20b2aa', '#778899'];
let colorIndex = 0;

// Fungsi untuk mengubah warna saat di-hover
function changeColor() {
    this.querySelector('.list-job-title').style.backgroundColor = colors[colorIndex];
    this.querySelector('.list-job-title').style.color = colorIndex % 2 === 0 ? 'white' : 'black';

    colorIndex = (colorIndex + 1) % colors.length;
}

// Fungsi untuk mengatur ulang warna setelah kursor meninggalkan elemen
function resetColor() {
    this.querySelector('.list-job-title').style.backgroundColor = '';
    this.querySelector('.list-job-title').style.color = ''; 
}

// Tambahkan event listener untuk setiap elemen
jobs.forEach(job => {
    job.addEventListener('mouseenter', changeColor);  
    job.addEventListener('mouseleave', resetColor);  
});
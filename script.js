const faqBoxes = document.querySelectorAll('.faqbox');
faqBoxes.forEach(box => {
    box.addEventListener('click', () => {
        if (box.classList.contains('active')) {
            box.classList.remove('active');
        } else {
            faqBoxes.forEach(b => b.classList.remove('active'));
            box.classList.add('active');
        }
    });
});
const searchIcon = document.getElementById('searchIcon');
const searchBar = document.getElementById('searchBar');
const searchInput = document.getElementById('searchInput');
const productItems = document.querySelectorAll('.product-item');


searchIcon.addEventListener('click', () => {
  searchBar.classList.toggle('active');
  searchInput.focus();
});


searchInput.addEventListener('keyup', () => {
  const filter = searchInput.value.toLowerCase();
  productItems.forEach(item => {
    const name = item.querySelector('h3').textContent.toLowerCase();
    item.style.display = name.includes(filter) ? 'block' : 'none';
  });
});

        function togglePassword() {
            const pwd = document.getElementById("password");
            pwd.type = (pwd.type === "password") ? "text" : "password";
        }

        function func(event) {
            event.preventDefault(); 

            const name = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();

            const namePattern = /^[A-Z][a-zA-Z]*$/;
            if (!namePattern.test(name)) {
                alert("Username must start with a capital letter and contain only letters!");
                return false;
            }

            if (password.length !== 6) {
                alert("Password must be exactly 6 characters long!");
                return false;
            } 

            const expiryDate = new Date();
            expiryDate.setDate(expiryDate.getDate() + 2);
            
            document.cookie = `username=${encodeURIComponent(name)}; expires=${expiryDate.toUTCString()}; path=/`;
            document.cookie = `password=${encodeURIComponent(password)}; expires=${expiryDate.toUTCString()}; path=/`;

            alert("Login successful! Cookies saved ");

           
            window.location.href = "menu.html";      
        }
 
        function showHome() {
            document.getElementById('homeSection').classList.remove('d-none');
            document.getElementById('productsSection').classList.add('d-none');
            document.getElementById('aboutSection').classList.add('d-none');
        }

        function showProducts() {
            document.getElementById('homeSection').classList.add('d-none');
            document.getElementById('productsSection').classList.remove('d-none');
            document.getElementById('aboutSection').classList.add('d-none');
        }

        function showAbout() {
            document.getElementById('homeSection').classList.add('d-none');
            document.getElementById('productsSection').classList.add('d-none');
            document.getElementById('aboutSection').classList.remove('d-none'); 
        }

        function filterProducts(category) {
            const products = document.querySelectorAll('.product');
            products.forEach(product => {
                if (category === 'All' || product.getAttribute('data-category') === category) {
                    product.style.display = 'block'; 
                } else {
                    product.style.display = 'none'; 
                }
            });
        }

        document.getElementById('modeToggle').addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
        });
    const rootDiv = document.querySelector('.root');
    const popupDiv = document.getElementById('popup');
    const overlay = document.getElementById('overlay');

    // Fetch data from API
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(products => {
            // Display products on the screen
            products.forEach(product => {
                // console.log(product);
                const container = document.createElement('div');
                const image = document.createElement('img');
                const title = document.createElement('h4');
                const price = document.createElement('p');
                const category = document.createElement('p');
                container.classList.add('product');
               
                image.setAttribute("src",product.image);
                image.setAttribute("alt",product.title);
                title.textContent = product.title;
                price.innerHTML = `<b>Price : $ ${product.price}</b>` ;
                category.innerHTML = `<b>Category: ${product.category}<b>`;
                container.append(image, title , price , category);
                title.addEventListener('click', () => showProductDetails(product));
                rootDiv.appendChild(container);
            });
        });

    function showProductDetails(product) {
        // Display product details in popup
        const image = document.createElement('img');
        const title = document.createElement('h4');
        const price = document.createElement('p');
        const category = document.createElement('p');
        const button = document.createElement("button");

        button.classList.add("btn");
        button.textContent = "❌";
        title.textContent = product.title;
        image.classList.add("image-popup");
        image.setAttribute("src", product.image);
        price.innerHTML = `<b>Price : $ ${product.price}</b>`;
        category.innerHTML =`<b>Category: ${product.category}<b>`;
        popupDiv.append(button, image, title , price , category);
        popupDiv.style.display = 'block';
        overlay.style.display = 'block';
        button.addEventListener('click', () => closePopup());

    }

    function closePopup() {
        // Close popup
        popupDiv.style.display = 'none';
        overlay.style.display = 'none';
        popupDiv.innerHTML= "";
    }

    // Close popup when overlay is clicked
    overlay.addEventListener('click', closePopup);
   

fetch("products.json")
    .then(response => response.json())
    .then(products => {
        let container = document.getElementById("products-container");
        products.forEach(product => {
            let productDiv = document.createElement("div");
            productDiv.classList.add("product");
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>${product.price}</p>
                <p>${product.description}</p>
            `;
            container.appendChild(productDiv);
        });
    });

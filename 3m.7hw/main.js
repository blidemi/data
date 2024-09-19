document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById('loader');
    const userContainer = document.getElementById('usercontainer');

    loader.style.display = 'block';

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            loader.style.display = 'none';
            data.forEach(user => {
                const userDiv = document.createElement('div');
                userDiv.classList.add('user');

                userDiv.innerHTML = `
                    <div>ID: ${user.id}</div>
                    <div>Name: ${user.name}</div>
                    <div>Username: ${user.username}</div>
                    <div>Email: ${user.email}</div>
                    <div class="line"></div>
                `;

                userContainer.appendChild(userDiv);
            });
        })
        .catch(error => {
            loader.style.display = 'none';
            userContainer.innerHTML = 'error loading data';
            console.error('Mistake:', error);
        });
});
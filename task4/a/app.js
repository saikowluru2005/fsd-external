async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    const data = await response.json();

    const tableBody = document.getElementById("data");
    data.forEach(item => {
        tableBody.innerHTML += `<tr><td>${item.id}</td><td>${item.title}</td></tr>`;
    });
}

fetchData();
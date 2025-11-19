const tableBody = document.querySelector("#userTable tbody");
const loader = document.getElementById("loader");

async function fetchUsers() {
    loader.style.display = "block";
    tableBody.innerHTML = "";
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();

        data.forEach(user => {
            const row = `
                <tr>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.address.city}</td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    } catch (err) {
        console.log(err);
    } finally {
        loader.style.display = "none";
    }
}

document.getElementById("refreshBtn").addEventListener("click", fetchUsers);

fetchUsers();

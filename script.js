document.getElementById("donationForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const amount = document.getElementById("amount").value;

  const res = await fetch("http://localhost:5000/donate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, amount })
  });

  const data = await res.json();
  document.getElementById("message").innerText = data.message;
});
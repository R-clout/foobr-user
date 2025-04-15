const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["user", "user", "user", "user", "user"],
      datasets: [{
        label: 'User Statistics',
        data: [4.9, 5.7, 8, 1, 4.7],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


const copyButton = document.getElementById("copy-button")
const number = document.getElementById("number");

function copyText(){
  navigator.clipboard.writeText(number.textContent);
}

copyButton.addEventListener("click", () => {
  copyText();
  setTimeout(() => {
    copyButton.innerHTML = `<img src="./assets/img/copy.svg" alt="copy Button" loading="lazy"
                        class="w-[1rem] h-[1rem]" />`
  }, 2000);
  // Change the button text to "copied!" for 2 seconds  
  copyButton.innerHTML = `<img src="./assets/img/circle-check.svg" alt="copy Button" loading="lazy"
                        class="w-[1rem] h-[1rem]" />`;
});
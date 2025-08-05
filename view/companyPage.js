import { getCompanyProfile } from "../model/companyData.js";
import { mockCompanyProfile } from "../model/mockRequestData.js";

const companyProfile = getCompanyProfile();
function renderCompanyProfile(companyProfile) {
  const company = companyProfile;

  const $companyProfile = $(`
    <div class="bg-white  rounded-lg p-6  mx-auto mt-8 text-center">
      <img src="${company.profile.image}" alt="${company.profile.companyName} logo" class="mx-auto h-24 w-24 rounded-full mb-4 object-contain">
      <h2 class="text-2xl font-bold text-gray-800">${company.profile.companyName}</h2>
      <h3 class="text-sm text-gray-500 mb-2">${company.profile.industry}</h3>
      <h3 class="text-xl font-semibold text-green-600 mb-2">$${company.profile.price}</h3>
      <div class="text-sm text-${company.profile.changes > 0 ? 'green' : 'red'}-500 font-medium">(${company.profile.changes}%)</div>
      <p class="mt-4 max-w-2xl mx-auto text-gray-700 text-sm leading-relaxed text-center">
      ${company.profile.description}
    </p>
    </div>
  `);
  
  $(".container").empty().append($companyProfile);
  generateChart("")
}




function generateChart(companyData) {
  const $canvasContainer = $(`
    <div class="max-w-4xl mx-auto mt-10 p-4 bg-white shadow-md rounded-lg">
      <canvas id="stockChart" class="w-full h-64"></canvas>
    </div>
  `);

  $(".container").append($canvasContainer);

  const labels = [];
  const prices = [];
  companyData.forEach((item) => {
    labels.push(item.date);
    prices.push(item.price);
  });

  const ctx = document.getElementById("stockChart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Stock Price History",
          data: prices,
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 2,
          pointBackgroundColor: "white",
          pointBorderColor: "rgba(54, 162, 235, 1)",
          fill: true,
          tension: 0.4,
          pointRadius: 3,
          pointHoverRadius: 5,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: false,
        },
      },
      plugins: {
        legend: {
          position: "top",
        },
      },
    },
  });
}
    renderCompanyProfile(mockCompanyProfile);
    
import { getCompanyProfile } from "../model/companyData.js";
import { mockCompanyProfile } from "../model/mockRequestData.js";
import { mockChartData } from "../model/mockRequestData.js";

const companyProfile = getCompanyProfile();
function renderCompanyProfile(companyProfile) {
  const company = companyProfile;

  const $companyProfile = $(`<div class="company-profile">
        <img src="${company.profile.image}" alt="${company.profile.companyName} logo"></img>
        <h2>${company.profile.companyName}</h2>
        <h2 class="company-industry">(${company.profile.industry})</h2>
        <h3>Stock price: $${company.profile.price}</h3>
        <div class="changes">${company.profile.changes}</div>
        </div>`);
  const $companyDescription = $(`<p class=company-description>       
        </p>`).text(`${company.profile.description}`);

  $(".container").empty().append($companyProfile, $companyDescription);
}





function generateChart(companyDate){

    const $canvas = $('<canvas id="stockChart" width="400" height="200"></canvas>');
    $(".chart-container").append($canvas);
    const labels = [];
    const prices = [];
    mockChartData.forEach((item) => {
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
    
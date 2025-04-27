function navigateTo(page) {
    // Remove active class from all links
    document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));

    // Add active class to the clicked link
    document.getElementById(page + '-link').classList.add('active');

    // Only dynamically load content for the home page
    if (page === 'home') {
        const content = `
            <h1>Welcome to the Energy Website</h1>
            <p>Learn about appliance energy consumption in the Australian market.</p>
            <h2>Appliance Energy Consumption</h2>
            <p>Understanding the energy consumption of various appliances can help you make informed decisions about energy use and efficiency. Here are some common appliances and their average energy consumption in Australia:</p>
            <ul>
                <li><strong>Refrigerators:</strong> 100-800 kWh/year</li>
                <li><strong>Washing Machines:</strong> 200-400 kWh/year</li>
                <li><strong>Televisions:</strong> 50-400 kWh/year</li>
                <li><strong>Air Conditioners:</strong> 500-2000 kWh/year</li>
                <li><strong>Dishwashers:</strong> 200-300 kWh/year</li>
            </ul>
            <p>By choosing energy-efficient appliances, you can reduce your energy consumption and save on electricity bills.</p>
        `;
        document.getElementById('content').innerHTML = content;
    }
}

// Set the initial page to Home if on index.html
if (document.getElementById('content')) {
    navigateTo('home');
}

// Set the current year in the footer
if (document.getElementById('year')) {
    document.getElementById('year').textContent = new Date().getFullYear();
}
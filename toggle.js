function loadPlot() {
    var plotSelector = document.getElementById('plotSelector');
    var plotContainer = document.getElementById('plot-container');

    // Get the selected option's value (HTML file path)
    var selectedPlot = plotSelector.value;

    // Load and display the HTML content
    fetch(selectedPlot)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
            }
            return response.text();
        })
        .then(html => {
            plotContainer.innerHTML = html;
        })
        .catch(error => {
            console.error(error);
        });
}

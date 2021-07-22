const singleRegionData = (data) => ({
    labels: ["cases", "active", "deaths", "critical", "recovered"],
    datasets: [
        {
            // Label for bars
            label: "covid detail",
            // Color of each bar
            backgroundColor: ["purple", "coral", "red", "yellow", "green"],
            // Border color of each bar
            borderColor: ["#fff"],
            borderWidth: 1,
            // Data or value of your each variable
            data: [
                data.cases,
                data.active,
                data.deaths,
                data.critical,
                data.recovered,
            ],
        },
    ],
});

export default singleRegionData;

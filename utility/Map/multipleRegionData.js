const multipleRegionData = (data) => {
    if (!Array.isArray(data)) return null;

    let labels = ["cases", "active", "deaths", "critical", "recovered"];
    let backgrounds = [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(75, 192, 192)",
    ];

    let datasets = [];
    // console.log(data);
    data.forEach((region, i) => {
        let info = {
            label: region.country || region.continent || "world",
            data: [
                region.cases,
                region.active,
                region.deaths,
                region.critical,
                region.recovered,
            ],
            backgroundColor: backgrounds[i],
        };
        datasets.push(info);
    });

    return {
        labels,
        datasets,
        // datasets: [
        //     {
        //         label: "# of Red Votes",
        //         data: [12, 19, 3, 5, 2, 3],
        //         backgroundColor: "rgb(255, 99, 132)",
        //     },
        //     {
        //         label: "# of Blue Votes",
        //         data: [2, 3, 20, 5, 1, 4],
        //         backgroundColor: "rgb(54, 162, 235)",
        //     },
        //     {
        //         label: "# of Green Votes",
        //         data: [3, 10, 13, 15, 22, 30],
        //         backgroundColor: "rgb(75, 192, 192)",
        //     },
        // ],
    };
};

export default multipleRegionData;

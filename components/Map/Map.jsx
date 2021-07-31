// import { Bar } from "react-chartjs-2";

// function App() {
//     let data = {
//         labels: ["cases", "active", "death", "critical", "recovered"],
//         datasets: [
//             {
//                 // Label for bars
//                 label: "covid detail",
//                 // Data or value of your each variable
//                 data: [1552, 1319, 613, 1400, 20],
//                 // Color of each bar
//                 backgroundColor: ["brown", "green", "red", "yellow"],
//                 // Border color of each bar
//                 borderColor: ["black", "black", "black", "black"],
//                 borderWidth: 1.5,
//             },
//         ],
//     };
//     let options = {
//         maintainAspectRatio: false,
//         scales: {
//             yAxes: [
//                 {
//                     ticks: {
//                         // The y-axis value will start from zero
//                         beginAtZero: true,
//                     },
//                 },
//             ],
//         },
//         legend: {
//             labels: {
//                 // fontSize: 15,
//                 fontSize: 20,
//             },
//         },
//     };

//     return (
//         <div>
//             <h1 className="mx-auto bg-blue text-center">
//                 GEEKSFORGEEKS BAR CHART REACTJS
//             </h1>
//             <div style={{ maxWidth: "650px" }} className="mx-auto">
//                 <Bar
//                     data={data}
//                     // Height of graph
//                     height={400}
//                     options={options}
//                 />
//             </div>
//         </div>
//     );
// }

// export default App;

import { Bar } from "react-chartjs-2";
import Image from "next/image";
import singleRegionData from "../../utility/Map/singleRegionData";
import multipleRegionData from "../../utility/Map/multipleRegionData";

const Map = ({ data, multipleSelected }) => {
    let state = multipleSelected
        ? multipleRegionData(data)
        : singleRegionData(data);

    if (state === null) return null;

    let options = {
        maintainAspectRatio: false,
        title: {
            display: true,
            text: "Covid Detail",
            fontSize: 20,
        },
        legend: {
            display: true,
            position: "right",
        },
    };

    let multiHeader =
        multipleSelected &&
        data
            .map((region) => region.country || region.continent || "Global")
            .join(" vs ");

    return (
        <section className="mt-6">
            <header className="text-center mb-6 ">
                <div className="flex items-center justify-center">
                    {data.country && (
                        <figure className="mr-1 pt-1 lg:pt-3">
                            <Image
                                src={data.countryInfo.flag}
                                width={20}
                                height={16}
                                alt={`${data.country}'s flag`}
                            />
                        </figure>
                    )}
                    <h1 className="text-2xl lg:text-4xl text-blue tracking-wider font-semibold">
                        {multipleSelected
                            ? multiHeader || "COMPARING..."
                            : data.country || data.continent || "Global"}
                    </h1>
                </div>
                <span className="text-sm">
                    ({multipleSelected ? data.length : data.population})
                </span>
            </header>
            <div className="mx-auto h-96 max-w-3xl">
                <Bar data={state} height={100} options={options} />
            </div>
        </section>
    );
};

export default Map;

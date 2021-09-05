import { WorldMap } from "react-svg-worldmap";

const CovidMap = () => {
    const data = [
        { country: "cn", value: 1389618778 }, // china
        { country: "in", value: 1311559204 }, // india
        { country: "us", value: 331883986 }, // united states
        { country: "id", value: 264935824 }, // indonesia
        { country: "pk", value: 210797836 }, // pakistan
        { country: "br", value: 210301591 }, // brazil
        { country: "ng", value: 208679114 }, // nigeria
        { country: "bd", value: 161062905 }, // bangladesh
        { country: "ru", value: 141944641 }, // russia
        { country: "mx", value: 127318112 }, // mexico
    ];
    return (
        <figure className="text-center py-10 bg-blue-lighter bg-opacity-10">
            <div>WORLD MAP SHOWING COVID DEATHS</div>
            <div className="text-blue text-xl">COMING SOON!!</div>
            {/* <WorldMap
                color="red"
                title="Top 10 Populous Countries"
                value-suffix="people"
                size="lg"
                data={data}
            /> */}
        </figure>
    );
};

export default CovidMap;

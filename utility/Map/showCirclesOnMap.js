import Image from "next/image";
import { Circle, Popup } from "react-leaflet";
export const showCirclesOnMap = (countries) =>
    countries.map(
        ({
            countryInfo: { lat, long, flag },
            deaths,
            country,
            cases,
            recovered,
        }) => (
            <Circle
                key={country}
                center={[lat, long]}
                fillOpacity={0.4}
                color="#f12"
                fillColor="#f128"
                radius={Math.sqrt(deaths) * 800}
            >
                <Popup className="p-0">
                    <div className="space-y-2">
                        {flag && (
                            <figure className=" mb-2 ">
                                <Image
                                    src={flag}
                                    width={100}
                                    height={50}
                                    layout="responsive"
                                    className="w-full rounded-md"
                                />
                            </figure>
                        )}
                        <div className="text-lg font-bold text-white-primary">
                            {country}
                        </div>
                        <div className="">
                            <span className="text-white text-sm text-opacity-20">
                                cases:
                            </span>{" "}
                            <span className="text-orange">{cases}</span>
                        </div>
                        <div>
                            <span className="text-sm text-white-primary text-opacity-20">
                                recovered:
                            </span>{" "}
                            <span className="text-green">{recovered}</span>
                        </div>
                        <div>
                            <span className="text-white text-sm text-opacity-20">
                                deaths:
                            </span>{" "}
                            <span className="text-red-primary">{deaths}</span>
                        </div>
                    </div>
                </Popup>
            </Circle>
        )
    );

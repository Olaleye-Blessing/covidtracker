import dynamic from "next/dynamic";

import React from "react";

const ShowMap = ({ mapCoords, mapZoom }) => {
    const DisplayWorldMap = dynamic(() => import("./DisplayWorldMap"), {
        ssr: false,
    });
    return <DisplayWorldMap mapCoords={mapCoords} mapZoom={mapZoom} />;
};

export default ShowMap;

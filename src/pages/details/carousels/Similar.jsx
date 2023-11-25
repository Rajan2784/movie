import React from "react";

import useFetch from "../../../hooks/useFetch";
import Caurousel from "../../../components/carousel/Caurousel";

const Similar = ({ mediaType, id }) => {
    const { data, loading } = useFetch(`/${mediaType}/${id}/similar`);

    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

    return (
        <Caurousel
            title={title}
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Similar;
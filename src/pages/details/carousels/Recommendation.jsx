
import React from "react";

import useFetch from "../../../hooks/useFetch";
import Caurousel from "../../../components/carousel/Caurousel";

const Recommendation = ({ mediaType, id }) => {
    const { data, loading } = useFetch(
        `/${mediaType}/${id}/recommendations`
    );

    return (
        <Caurousel
            title="Recommendations"
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Recommendation;
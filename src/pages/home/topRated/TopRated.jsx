import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import Swithchtabs from '../../../components/switchTabs/Swithchtabs';
import useFetch from '../../../hooks/useFetch';
import Caurousel from '../../../components/carousel/Caurousel';


const TopRated = () => {

  const [endpoint,setEndPoint] = useState("movie");

  const {data,loading} = useFetch(`/${endpoint}/top_rated`)

  const onTabChange = (tab) =>{
      setEndPoint(tab === "Movies" ? "movie" : "tv")
  }


  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Top Rated</span>
        <Swithchtabs data={["Movies","TV Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Caurousel data={data?.results} endpoint={endpoint} loading={loading}/>
    </div>
  )
}

export default TopRated

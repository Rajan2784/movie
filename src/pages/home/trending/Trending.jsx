import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import Swithchtabs from '../../../components/switchTabs/Swithchtabs';
import useFetch from '../../../hooks/useFetch';
import Caurousel from '../../../components/carousel/Caurousel';


const Trending = () => {

  const [endpoint,setEndPoint] = useState("day");

  const {data,loading} = useFetch(`/trending/all/${endpoint}`)

  const onTabChange = (tab) =>{
      setEndPoint(tab=== "Day" ? "day" : "week")
  }

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <Swithchtabs data={["Day","Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Caurousel data={data?.results} loading={loading}/>
    </div>
  )
}

export default Trending

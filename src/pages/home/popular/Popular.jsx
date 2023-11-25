import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import Swithchtabs from '../../../components/switchTabs/Swithchtabs';
import useFetch from '../../../hooks/useFetch';
import Caurousel from '../../../components/carousel/Caurousel';


const Popular = () => {

  const [endpoint,setEndPoint] = useState("movie");

  const {data,loading} = useFetch(`/${endpoint}/popular`)

  const onTabChange = (tab) =>{
      setEndPoint(tab === "Movies" ? "movie" : "tv")
  }

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">What's Popular</span>
        <Swithchtabs data={["Movies","TV Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Caurousel data={data?.results} endpoint={endpoint} loading={loading}/>
    </div>
  )
}

export default Popular

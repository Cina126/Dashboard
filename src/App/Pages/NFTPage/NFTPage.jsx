/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import './NFTPage.css'
import context from '../../Context/Context'

// start imports componenets ----------------------------------------------------------------------------------------------------------------------------- 
import LeftMenue from './../../Components/LeftMenue/LeftMenue';
import RightSideHeader from './../../Components/RightSideHeader/RightSideHeader';
import TopCreators from './../../Components/TopCreators/TopCreators';
import History from './../../Components/History/History'
import TrendNFTs from '../../Components/TrendNFTs/TrendNFTs';
// end imports componenets ----------------------------------------------------------------------------------------------------------------------------- 

export default function NFTPage() {

  const contextUser = useContext(context);

  useEffect(() => {
    let allCreators = contextUser.topCreators;
    for (let x of allCreators) {
      let timer = setInterval(() => {
        if (x.FirstCount < x.FinalCount) {
          x.FirstCount += 1;
          contextUser.setTopCreators([...allCreators]);
        } else {
          clearInterval(timer);
        }
      }, 0.1);
    }
  }, []);

  return (
    <div className={`NFTPage ${contextUser.windowSize <= 800 ? "changeDirect" : ""}`}>

      {contextUser.windowSize >= 800 ? <LeftMenue></LeftMenue> : <LeftMenue classProps={"PhoneStyle"} />}

      <div className={`NFTPage__Right-Side ${contextUser.windowSize <= 800 ? "fullWidth" : ""}`}>

        <RightSideHeader></RightSideHeader>

        <div className='NFTPage__Right-Side__Boxes'>

          <div className='NFTPage__Right-Side__Boxes__Left-Side'>
            <div className='NFTPage__Right-Side__Boxes__Left-Side__Big-Img'></div>
            <span className='NFTPage__Right-Side__Boxes__Left-Side__Trnding-Text'>Trending NFTs</span>
            <div className='NFTPage__Right-Side__Boxes__Left-Side__Products-Container'>
              {contextUser.histories.map((informs) => {
                return <TrendNFTs key={informs.id} {...informs}></TrendNFTs>
              })}
            </div>
          </div>

          <div className='NFTPage__Right-Side__Boxes__Right-Side'>
            <div className='NFTPage__Right-Side__Boxes__Right-Side__Top-Creators'>
              <div className='NFTPage__Right-Side__Boxes__Right-Side__Top-Creators__Titles'>
                <span>Top Creators</span>
                <span className='NFTPage__Right-Side__Boxes__Right-Side__Top-Creators__Titles__See-All'>See All</span>
              </div>
              <div className='NFTPage__Right-Side__Boxes__Right-Side__Top-Creators__Categories'>
                <span>Name</span>
                <span>Artworks</span>
                <span>Raiting</span>
              </div>
              <div className='NFTPage__Right-Side__Boxes__Right-Side__Top-Creators__Componenet-Container'>
                {contextUser.topCreators.map((informs) => {
                  return <TopCreators key={informs.id} {...informs} ></TopCreators>
                })}
              </div>
            </div>

            <div className='NFTPage__Right-Side__Boxes__Right-Side__Historty'>
              <div className='NFTPage__Right_Side__Boxes__Right-Side__Historty__Titles'>
                <span className='NFTPage__Right-Side__Boxes__Right-Side__Historty__Titles__Big'>History</span>
                <span className='NFTPage__Right-Side__Boxes__Right-Side__Historty__Titles__See-All'>See All</span>
              </div>
              <div className='NFTPage__Right-Side__Boxes__Right-Side__Historty__Container'>
                {contextUser.histories.map((informs) => {
                  return <History key={informs.id} {...informs}></History>
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

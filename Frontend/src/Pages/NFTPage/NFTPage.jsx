/* eslint-disable react-hooks/exhaustive-deps */

import { useContext, useEffect } from 'react'
import './NFTPage.css'
import { Context } from '../../Context/ContextProvider';

// start imports componenets ----------------------------------------------------------------------------------------------------------------------------- 
import LeftMenue from './../../Components/LeftMenue/LeftMenue';
import RightSideHeader from './../../Components/RightSideHeader/RightSideHeader';
import TopCreators from './../../Components/TopCreators/TopCreators';
import History from './../../Components/History/History'
import TrendNFTs from '../../Components/TrendNFTs/TrendNFTs';
import LoadingPage from '../../Components/LoadingPage/LoadingPage';
// end imports componenets ----------------------------------------------------------------------------------------------------------------------------- 

export default function NFTPage() {

  const contextUser = useContext(Context);

  useEffect(() => {
    contextUser.setTopCreatorsFlag(prev => !prev)
    contextUser.setHistoriesFlag(prev => !prev)
  }, [])

  useEffect(() => {
    let allCreators = contextUser.topCreators ? contextUser.topCreators : [];
    for (let x of allCreators) {
      let timer = setInterval(() => {
        if (x.FirstCount < x.FinalCount) {
          x.FirstCount += 1;
          contextUser.setTopCreators([...allCreators])
        } else {
          clearInterval(timer);
        }
      }, 100);
    }
  }, [contextUser.topCreators])

  return (
    <div className="NFTPage" >

      {
        (
          !contextUser.histories ||
          !contextUser.topCreators
        )
          ?
          <LoadingPage></LoadingPage>
          :
          ""
      }

      <LeftMenue></LeftMenue>

      <div className={`NFTPage__Right-Side`}>

        <RightSideHeader></RightSideHeader>

        <div className='NFTPage__Right-Side__Boxes'>

          <div className='NFTPage__Right-Side__Boxes__Left-Side'>
            <div className='NFTPage__Right-Side__Boxes__Left-Side__Big-Img'></div>
            <span className='NFTPage__Right-Side__Boxes__Left-Side__Trnding-Text'>Trending NFTs</span>
            <div className='NFTPage__Right-Side__Boxes__Left-Side__Products-Container'>
              {
                contextUser.histories
                  ?
                  contextUser.histories.map((informs) => <TrendNFTs key={informs.id} {...informs} />)
                  :
                  ""
              }
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
                {
                  contextUser.topCreators
                    ?
                    contextUser.topCreators.map(informs => <TopCreators key={informs.id} {...informs} />)
                    :
                    ""
                }
              </div>
            </div>

            <div className='NFTPage__Right-Side__Boxes__Right-Side__Historty'>
              <div className='NFTPage__Right_Side__Boxes__Right-Side__Historty__Titles'>
                <span className='NFTPage__Right-Side__Boxes__Right-Side__Historty__Titles__Big'>History</span>
                <span className='NFTPage__Right-Side__Boxes__Right-Side__Historty__Titles__See-All'>See All</span>
              </div>
              <div className='NFTPage__Right-Side__Boxes__Right-Side__Historty__Container'>
                {
                  contextUser.histories
                    ?
                    contextUser.histories.map((informs) => <History key={informs.id} {...informs} />)
                    :
                    ""
                }
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

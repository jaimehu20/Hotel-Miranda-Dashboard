import styled from 'styled-components'
import { IoBedOutline } from "react-icons/io5";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { LuArrowRightFromLine } from "react-icons/lu";
import { LuArrowLeftFromLine } from "react-icons/lu";
import { SideBar } from '../components/SideBar/SideBar';
import { NavContainer } from '../components/NavBar/NavBar';
import { ReviewsContainer } from '../components/Reviews/Reviews';
import { useState } from 'react';

const Stats = styled.section`
  display: flex;
  justify-content: space-around;
  padding-top: 50px;
  padding-bottom: 50px;
  background: #F8F8F8;
`
const StatsContainer = styled.div`
  align-items: center;
  gap: 2em;
  box-shadow: 0px 4px 4px #00000005;
  border-radius: 12px;
  padding: 0px 20px 0px 16px;
  background: #ffffff;
  min-width: 164px;
  height: 90px;
  transition: all 1s ease-out ;
  @media only screen and (min-width: 1920px) {
    padding: 0px 104px 0px 45px;
  }
  &:hover {
   
    transform: scale(1.2); 
    svg {
      background: #E23428;
      color: #ffffff;
    }
  }
  svg {
    width: 28px;
    height: 28px;
    background: #FFEDEC;
    padding: 10px;
    border-radius: 9px;
    color: #E23428;
  }
  div {
    flex-direction: column;
    padding-top: 10px;
    p:first-of-type {
      margin-bottom: 0px;
      margin-top: 0px;
      font-size: 30px;
      font-weight: 600;
    }
    p:last-of-type {
      margin-top: 0px;
      font-size: 14px;
      color: #787878;
    }
  }
`

const Main = styled.main`
  display: flex;
  background: #ffffff;
`

const Section = styled.section`
  width: 100%;
  background: #f8f8f8;
`
function Home() {

  const [ hidden, setHidden ] = useState<boolean>(false);

  return (
    <>
      <Main>
        <SideBar hidden={hidden} />
        <Section>
          <NavContainer title="Dashboard" setHidden={setHidden} hidden={hidden} />
          <Stats>
            <StatsContainer>
              <IoBedOutline />
              <div>
                <p>8,461</p>
                <p>New Booking</p>
              </div>
            </StatsContainer>
            <StatsContainer>
              <FaRegCalendarCheck />
              <div>
                <p>963</p>
                <p>Scheduled Room</p>
              </div>
            </StatsContainer>
            <StatsContainer>
              <LuArrowRightFromLine />
              <div>
                <p>753</p>
                <p>Check In</p>
              </div>
            </StatsContainer>
            <StatsContainer>
              <LuArrowLeftFromLine />
              <div>
                <p>516</p>
                <p>Check Out</p>
              </div>
            </StatsContainer>
          </Stats>
          <ReviewsContainer />
        </Section>
      </Main>
    </>
  )
}

export default Home;
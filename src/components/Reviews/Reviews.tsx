import styled from "styled-components"
import profilePic from "../../assets/profilePic.jpg"
import { SiTicktick } from "react-icons/si"
import { RxCrossCircled } from "react-icons/rx"

const ReviewsSection = styled.section`
    background: #f8f8f8;
    padding-top: 10px;
`

const ReviewsBox = styled.div`
    display: flex;
    flex-direction: column;
    background: #ffffff;
    width: 92%;
    margin: 0 auto;
    border-radius: 18px;
    padding-bottom: 40px;
    box-shadow: 0px 4px 4px #00000005;
    max-width: 1238px;
    min-width: 1035px;
    h3 {
        font-size: 20px;
        font-weight: 500;
        padding: 15px;
        padding-left: 28px;
        padding-top: 28px;
    }
`
const SlideContainer = styled.div`
    border: 1px solid #EBEBEB;
    border-radius: 18px;
    flex-direction: column;
    padding-bottom: 20px;
    p {
        color: #4E4E4E;
        font-size: 16px;
        width: 290px;
        padding-left: 20px;
        padding-bottom: 30px;
    }
    div {
        img {
            width: 48px;
            height: 58px;
            object-fit: cover;
            padding-left: 20px;
        }
        div:first-of-type {
            flex-direction: column;
            width: 60%;
            p{
                font-weight: bold;
                color: black;
                padding-bottom: 0px;
                margin-bottom: 0px;
            }
            small {
                padding-left: 20px;
                color: #799283;
            }
        }
        div:last-of-type {
            align-items: center;
            svg:first-of-type{
                color: #5AD07A;
                cursor: pointer;
                width: 30px;
                height: 25px;
            }
            svg:last-of-type{
                color: #E23428;
                cursor: pointer;
                width: 30px;
                height: 25px;
            }
        }
    }
`

export function ReviewsContainer() {
    return (
        <>
            <ReviewsSection>
                <ReviewsBox>
                    <div>
                        <h3>Latest Reviews</h3>
                    </div>
                    <div className="hola">
                        <SlideContainer>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                <div>
                                    <img src={profilePic}/>
                                    <div>
                                    
                                        <small>4m ago</small>
                                    </div>
                                    <div>
                                        <SiTicktick />
                                        <RxCrossCircled />
                                    </div>
                                </div>
                        </SlideContainer>
                        <SlideContainer>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                <div>
                                    <img src={profilePic}/>
                                    <div>
                                    
                                        <small>4m ago</small>
                                    </div>
                                    <div>
                                        <SiTicktick />
                                        <RxCrossCircled />
                                    </div>
                                </div>
                        </SlideContainer>
                        <SlideContainer>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                <div>
                                    <img src={profilePic}/>
                                    <div>
                                    
                                        <small>4m ago</small>
                                    </div>
                                    <div>
                                        <SiTicktick />
                                        <RxCrossCircled />
                                    </div>
                                </div>
                        </SlideContainer>
                    </div>
                </ReviewsBox>
            </ReviewsSection>
        </>
    )
}
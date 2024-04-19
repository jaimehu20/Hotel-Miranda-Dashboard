import { SwiperSlide, Swiper } from "swiper/react"
import 'swiper/swiper-bundle.css';
import styled from "styled-components";
import { data } from "../../app/OrderData";
import { SiTicktick } from "react-icons/si";
import { RxCrossCircled } from "react-icons/rx";
import profilePic from "../../assets/profilePic.jpg"

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

export const Slider = () => {
    return (
        <Swiper
            loop={true}
            spaceBetween={74}
            slidesPerView={3}>
                <SwiperSlide>
                    <SlideContainer>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        <div>
                            <img src={profilePic}/>
                            <div>
                                <p>{`${data[0].first_name} ${data[0].last_name}`}</p>
                                <small>4m ago</small>
                            </div>
                            <div>
                                <SiTicktick />
                                <RxCrossCircled />
                            </div>
                        </div>
                    </SlideContainer>
                </SwiperSlide>
                <SwiperSlide>
                    <SlideContainer>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        <div>
                            <img src={profilePic}/>
                            <div>
                                <p>{`${data[0].first_name} ${data[0].last_name}`}</p>
                                <small>4m ago</small>
                            </div>
                            <div>
                                <SiTicktick />
                                <RxCrossCircled />
                            </div>
                        </div>
                    </SlideContainer>
                </SwiperSlide>
                <SwiperSlide>
                    <SlideContainer>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        <div>
                            <img src={profilePic}/>
                            <div>
                                <p>{`${data[0].first_name} ${data[0].last_name}`}</p>
                                <small>4m ago</small>
                            </div>
                            <div>
                                <SiTicktick />
                                <RxCrossCircled />
                            </div>
                        </div>
                    </SlideContainer>
                </SwiperSlide>
                <SwiperSlide>
                    <SlideContainer>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        <div>
                            <img src={profilePic}/>
                            <div>
                                <p>{`${data[0].first_name} ${data[0].last_name}`}</p>
                                <small>4m ago</small>
                            </div>
                            <div>
                                <SiTicktick />
                                <RxCrossCircled />
                            </div>
                        </div>
                    </SlideContainer>
                </SwiperSlide>
        </Swiper>
    )
}
import styled from "styled-components"
import { Slider } from "./Slider"

const ReviewsSection = styled.section`
    background: #f8f8f8;
    height: 100vh;
    padding-top: 10px;
`

const ReviewsBox = styled.div`
    display: block;
    background: #ffffff;
    width: 95%;
    margin: 0 auto;
    border-radius: 18px;
    padding-bottom: 40px;
    h3 {
        font-size: 20px;
        font-weight: 500;
        padding: 15px;
        padding-left: 28px;
        padding-top: 28px;
    }
`

export function ReviewsContainer() {
    return (
        <>
            <ReviewsSection>
                <ReviewsBox>
                    <h3>Latest Reviews by Customers</h3>
                    <Slider />
                </ReviewsBox>
            </ReviewsSection>
        </>
    )
}
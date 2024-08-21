import React from "react"
import styled from "styled-components"

const IconContainer = styled.div`
    display: flex;
    justify-content: center;
`

const Icon = styled.svg`
    width: 40px;
`
export const LoadingContent : React.FC = () => {
    return <>
    <IconContainer>
        <Icon
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 200 200">
            <radialGradient id="a11" cx=".66" fx=".66" cy=".3125" fy=".3125" gradientTransform="scale(1.5)">
                <stop offset="0" stop-color="#A74D4A"></stop>
                <stop offset=".3" stop-color="#A74D4A" stop-opacity=".9"></stop>
                <stop offset=".6" stop-color="#A74D4A" stop-opacity=".6"></stop>
                <stop offset=".8" stop-color="#A74D4A" stop-opacity=".3"></stop>
                <stop offset="1" stop-color="#A74D4A" stop-opacity="0"></stop>
            </radialGradient>
            <circle transform-origin="center" fill="none" stroke="url(#a11)" strokeWidth="9" strokeLinecap="round" strokeDasharray="200 1000" strokeDashoffset="0" cx="100" cy="100" r="70">
                <animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="2" values="360;0" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform>
            </circle>
            <circle transform-origin="center" fill="none" opacity=".2" stroke="#A74D4A" stroke-Width="9" strokeLinecap="round" cx="100" cy="100" r="70">
            </circle>
        </Icon>
    </IconContainer>
    </>
}
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    color: #fff;
`
const Footer = styled.footer`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: rgba(42, 193, 188);
    color: white;
    text-align: center;
`
export default function Mentor() {
    return (
    <Div>
        <Footer>
            <p>Footer</p>
        </Footer>
    </Div>
    )
}
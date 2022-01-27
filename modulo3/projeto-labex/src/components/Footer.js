import styled from "styled-components"
import React from "react"

const FooterPrincipal = styled.footer`
  margin: 0;
  border: 2px solid #00FA9A;   
  flex-grow: 0;
  display: flex;
  justify-content: center;
  background-color: #3CB371;
 `


function Footer() {
    return (
        <FooterPrincipal>

            <p><b>João Lucas Roque Cerqueira</b></p>

        </FooterPrincipal>
    )
}

export default Footer;
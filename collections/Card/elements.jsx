import styled, { css } from "styled-components";
//import { SectionInnerHeading, SectionParagraph, SectionBigHeading, SectionSubheading } from "~/components";

export const StyledMainContainer=styled.div`
    display: flex;
    padding: 5px 10px;
    border-radius: 5px;
    align-items: center;
    background-color: #F0F0F0;
    width: 100%;
    border: 1px ;
    
    &:hover{
        border: 1px solid #269dff;
        h2{
            color: #269dff;
            border-bottom: 2px solid #269dff;
        }
        cursor: pointer;
    }
    ${({ variant }) => {
    switch (variant) {
      case 'small':
        return css`
          width: 80%;
          
        `;
      case 'medium':
        return css`
          width: 90%;
        `;
      case 'big':
        return css`
          width: 100%;
        `;
      default:
        return '';
    }
  }}

`

export const StyledTextContainer=styled.div`
    font-family: Poppins;
    width: 80%;
`

export const StyledImageContainer=styled.div`
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledHeading=styled.h2`
    margin: 5px 0;
    
    border-bottom: 2px solid #F0F0F0;
    display: inline-block;
     white-space: nowrap;
    font-size: 25px;
`
export const StyledParagraph=styled.p`
    margin: 0;
    font-size: 19px;
`

export const StyledBoldSpan=styled.span`
    margin: 0;
    display: inline;
    font-weight: bold;
`
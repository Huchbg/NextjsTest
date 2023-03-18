import styled, { css } from "styled-components";
//import { SectionInnerHeading, SectionParagraph, SectionBigHeading, SectionSubheading } from "~/components";

export const StyledMainContainer=styled.div`
    display: flex;
    height: 150px;
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
    }
`

export const StyledTextContainer=styled.div`
    
    width: 80%;
`

export const StyledImageContainer=styled.div`
    width: 20%;
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
    font-size: 20px;
`

export const StyledBoldSpan=styled.span`
    margin: 0;
    display: inline;
    font-weight: bold;
`
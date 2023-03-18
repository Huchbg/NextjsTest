import styled from "styled-components";
import { Button, SectionContainer, SectionBigHeading, SectionSubheading } from "~/components";
import {Card} from "~/collections"

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  align-items: center;
  justify-content: center;
  @media (max-width: 1024px) {
    flex-direction:column;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledCard = styled((props) => <Card {...props} />)`
  margin: 0;
  
`;



export const StyledGetStartedBtn = styled((props) => <Button {...props} variant="contained" color="main" />)`
  margin-top: 4.375rem;
  padding-top: 0;
  padding-bottom: 0;
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
`;

export const StyledBigHed = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
  text-align: center;
`;
export const StyledSmall = styled((props) => <SectionSubheading {...props} />)`
  margin: 0;
  margin-bottom: 20px;
  text-align: center;
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
  margin: 1.563rem 0 0;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 30%;
  margin-left: 11.125rem;
  font-family: sans-serif;
  @media (max-width: 1024px) {
    margin:0;
  }
`;

export const StyledCTAContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  max-width: 32.03rem;
  max-height: 65rem;
  
  width: 25%;
  @media (max-width: 1024px) {
    margin:0;
    width: 40%;
  }
`;

export const StyledCardContainer=styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 40%;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 10rem;
  @media (max-width: 1024px) {
    padding: 0;
    width: 90%;
    padding-top: 3rem;
  }
`;

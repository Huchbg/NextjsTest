import Image from "next/image";

import {
  StyledTextContainer,
  StyledContainer,
  StyledGetStartedBtn,
  StyledTitle,
  StyledDescription,
  StyledCTAContainer,
  StyledImageContainer,
  StyledBigHed,
  StyledSmall,
  StyledCardContainer
} from "./elements";

export const Hero = ({ image,titleM,titleS,cards, ...props }) => {
  return (
    <>
    <StyledBigHed>{titleM}</StyledBigHed>
    <StyledSmall>{titleS}</StyledSmall>
      <StyledContainer {...props}>
        
        <StyledImageContainer>
          <Image layout="intrinsic" src={image.src}  alt={image.alt} width={image.width} height={image.height} />
        </StyledImageContainer>
        <StyledCardContainer>
          
        </StyledCardContainer>
      </StyledContainer>
    </>
  );
};

/*<StyledTitle>{title}</StyledTitle>
  <StyledDescription>{description}</StyledDescription>
  <StyledCTAContainer>
    <StyledGetStartedBtn>{ctaText}</StyledGetStartedBtn>
  </StyledCTAContainer>
 */

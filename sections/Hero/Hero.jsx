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
} from "./elements";

export const Hero = ({ image, title,titleM,titleS, description, ctaText, ...props }) => {
  return (
    <>
    <StyledBigHed>{titleM}</StyledBigHed>
    <StyledSmall>{titleS}</StyledSmall>
      <StyledContainer {...props}>
        
        <StyledImageContainer>
          <Image layout="intrinsic" src={image.src}  alt={image.alt} width={image.width} height={image.height} />
        </StyledImageContainer>
        <StyledTextContainer>
          <div>
            HElloWorld
          </div>
        </StyledTextContainer>
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

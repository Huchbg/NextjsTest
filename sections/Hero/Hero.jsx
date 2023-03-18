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
  StyledCardContainer,
  StyledCard
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
          {cards.map((card)=>{
            return (<StyledCard key={card.title} title={card.title} BeforeBold={card.BeforeBold} Bold={card.Bold} AfterBold={card.AfterBold} image={card.image} variant={card.variant}/>)
          })}
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

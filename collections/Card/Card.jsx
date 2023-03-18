// The Card to be exported goes here
import Image from "next/image";
import { StyledMainContainer, StyledTextContainer,StyledImageContainer,StyledHeading,StyledParagraph,StyledBoldSpan} from "./elements";

export const Card=({title,BeforeBold,Bold,AfterBold,variant,image})=>{
    return  (
    <StyledMainContainer>
        <StyledImageContainer>
        <Image layout="intrinsic" src={image.src}  alt={image.alt} width={image.width} height={image.height} />
        </StyledImageContainer>
        <StyledTextContainer>
        <StyledHeading>{title}</StyledHeading>
        <StyledParagraph>
            {BeforeBold}
            <StyledBoldSpan>{Bold}</StyledBoldSpan>
            {AfterBold}
        </StyledParagraph>
        </StyledTextContainer>
    </StyledMainContainer>)
}

/*<Image layout="intrinsic" src={image.src}  alt={image.alt}  /> */
// The Card to be exported goes here
import Image from "next/image";
import { StyledMainContainer, StyledTextContainer,StyledImageContainer,StyledHeading,StyledParagraph,StyledBoldSpan} from "./elements";

export const Card=({title,Bold,variant,image,Text})=>{
    
    const boldTextIndex = Bold !== "" ? Text.indexOf(Bold) : 0
    return  (
    <StyledMainContainer variant={variant} >
        <StyledImageContainer>
        <Image layout="intrinsic" src={image.src}  alt={image.alt} width={image.width} height={image.height} />
        </StyledImageContainer>
        <StyledTextContainer>
        <StyledHeading>{title}</StyledHeading>
        <StyledParagraph>
        {Text.substring(0, boldTextIndex)}
        {Bold !== "" && <StyledBoldSpan>{Bold}</StyledBoldSpan>}
            <StyledBoldSpan>{Bold}</StyledBoldSpan>
            {Text.substring(boldTextIndex + Bold.length)}
        </StyledParagraph>

        </StyledTextContainer>
    </StyledMainContainer>)
}

/*<Image layout="intrinsic" src={image.src}  alt={image.alt}  /> */
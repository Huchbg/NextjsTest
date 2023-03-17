import styled from "styled-components";

export const StyledSectionContainer = styled(({ topMargin = 0, bottomMargin = 0,bgimage, ...props }) => <div {...props} />)`
  display: flex;
  max-width: 1920px;
  width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${({ topMargin }) => topMargin}rem;
  margin-bottom: ${({ bottomMargin }) => bottomMargin}rem;
  background-image: url(${({ bgimage }) => bgimage });
  background-repeat: no-repeat;
  background-size: cover;
`;

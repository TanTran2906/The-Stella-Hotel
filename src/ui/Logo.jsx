import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
    text-align: center;
`;

const Img = styled.img`
    height: 18rem;
    width: auto;
`;

function Logo() {
    const { isDarkMode } = useDarkMode();
    //logo-light.png: Nằm ở folder public
    const src = isDarkMode
        ? "/logo_dark_transparent.png"
        : "/logo_light_transparent.png";

    return (
        <StyledLogo>
            <Img src={src} alt="Logo" />
        </StyledLogo>
    );
}

export default Logo;

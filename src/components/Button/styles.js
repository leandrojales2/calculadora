import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 20px;
    border: 1px solid #CDCDCD;
    background-color: #000000;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 700;
    flex: 1;
    
    &:hover {
        opacity: 0.6;
    }

    @media (min-width: 600px) {
        padding: 10px;
    }

    @media (max-width: 460px) {
        padding: 10px;
    }
`
import styled from 'styled-components';

type StyleContainer = {
    bgContainer: string;
}
export const Container = styled.div<StyleContainer>`
    background-color: ${props => props.bgContainer};
    color: #fff;
    padding: 20px;
    border-radius: 5px;
`;

type BotaoProps = {
    bg: string;
    small?: boolean;
    corTexto: string;
}
export const Botao = styled.button<BotaoProps>`
    font-size: ${(props) => props.small ? '15px' : '31px'};
    border-radius: 5px;
    margin-left: 12px;
    background-color: ${props => props.bg};
    color: ${props => props.corTexto};
`;
import styled from 'styled-components';

type StyleContainer = {
    bgContainer: string;
}
export const Container = styled.div<StyleContainer>`
    background-color: ${props => props.bgContainer};
    color: #fff;
    padding: 20px;
    border-radius: 5px;
    span{
        font-weight: bold;
        text-transform: uppercase;
    }
    .link{
        color: lightgreen;
        margin: 1.1rem;
        background-color: indigo;
        padding-right: 12px;
        padding-left: 12px;
        padding-top: 3px;
        padding-bottom: 3px;
        border-radius: 5px;
        font-weight: bold;
        font-size: 1.7rem;
        text-transform: uppercase;

        &:hover{
            background-color: grey;
            color: #000;
        }
    }
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
import styled from 'styled-components';
import _default from '../../themes/default';

export const Container = styled.div`
    background: ${({ theme }) => theme.bgLight};
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 60px 0;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background:
            radial-gradient(circle at 10% 20%, ${({ theme }) => theme.shadow_primary} 0%, transparent 40%),
            radial-gradient(circle at 90% 80%, ${({ theme }) => theme.shadow_secondary} 0%, transparent 40%);
        opacity: 0.3;
        pointer-events: none;
    }
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 100px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

export const ToggleButtonGroup = styled.div`
    display: flex;
    border: 2px solid ${({ theme }) => theme.card_border};
    background: ${({ theme }) => theme.card};
    color: ${({ theme }) => theme.text_primary};
    font-size: 15px;
    border-radius: 16px;
    font-weight: 500;
    margin: 28px 0px;
    padding: 6px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);

    @media (max-width: 768px) {
        font-size: 13px;
        padding: 4px;
    }
`

export const ToggleButton = styled.div`
    padding: 10px 24px;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    z-index: 1;

    ${({ active, theme }) =>
        active && `
        background: ${theme.primary};
        color: ${theme.bg};
        box-shadow: 0 2px 12px ${theme.shadow_primary};
    `}

    &:hover {
        background: ${({ active, theme }) =>
            active ? theme.primary : theme.primary + '20'};
        color: ${({ active, theme }) =>
            active ? theme.bg : theme.primary};
    }

    @media (max-width: 768px) {
        padding: 8px 16px;
        border-radius: 10px;
    }
`
export const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
`


export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
    // display: grid;
    // grid-template-columns: repeat(3, 1fr);
    // grid-gap: 32px;
    // grid-auto-rows: minmax(100px, auto);
    // @media (max-width: 960px) {
    //     grid-template-columns: repeat(2, 1fr);
    // }
    // @media (max-width: 640px) {
    //     grid-template-columns: repeat(1, 1fr);
    // }
`;

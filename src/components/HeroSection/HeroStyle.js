import styled from "styled-components";
import _default from "../../themes/default";

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.bg};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 100px 30px 80px;
  @media (max-width: 960px) {
    padding: 80px 16px 66px;
  }
  @media (max-width: 640px) {
    padding: 60px 16px 40px;
  }
  z-index: 1;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(circle at 20% 50%, ${({ theme }) => theme.shadow_primary} 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, ${({ theme }) => theme.shadow_secondary} 0%, transparent 50%);
    opacity: 0.4;
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.primary}20;
    top: -250px;
    right: -250px;
    z-index: 0;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.primary};
  box-shadow:
    0 0 40px ${({ theme }) => theme.glow_primary},
    0 20px 60px rgba(0, 0, 0, 0.3),
    inset 0 0 20px rgba(0, 0, 0, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;

  &:hover {
    transform: scale(1.05);
    border-color: ${({ theme }) => theme.secondary};
    box-shadow:
      0 0 60px ${({ theme }) => theme.glow_secondary},
      0 25px 80px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    max-width: 350px;
    max-height: 350px;
  }

  @media (max-width: 640px) {
    max-width: 260px;
    max-height: 260px;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

export const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 32px;
    color: ${({ theme }) => theme.bg};
    border-radius: 12px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 700;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    background: ${({ theme }) => theme.primary};
    border: 2px solid ${({ theme }) => theme.primary};
    box-shadow: 0 4px 20px ${({ theme }) => theme.shadow_primary},
                0 0 40px ${({ theme }) => theme.shadow_primary};
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: ${({ theme }) => theme.secondary};
        transition: left 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: -1;
    }

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 30px ${({ theme }) => theme.shadow_primary},
                    0 0 60px ${({ theme }) => theme.glow_primary};
        border-color: ${({ theme }) => theme.secondary};
    }

    &:hover::before {
        left: 0;
    }

    &:active {
        transform: translateY(0);
    }

    @media (max-width: 640px) {
        padding: 12px 24px;
        font-size: 16px;
    }
`;

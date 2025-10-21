import React from 'react'
import styled from 'styled-components'
import { skills } from '../../data/constants'

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

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
        font-size: 16px;
    }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 2px solid ${({ theme }) => theme.card_border};
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.3),
    0 0 0 1px ${({ theme }) => theme.card_border};
  border-radius: 20px;
  padding: 24px 36px;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({ theme }) => theme.primary};
  }

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    box-shadow:
      0 12px 40px rgba(0, 0, 0, 0.4),
      0 0 60px ${({ theme }) => theme.shadow_primary};
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 20px 28px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 18px 24px;
  }
`

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`

const SkillItem = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  background-color: ${({ theme }) => theme.bgLight};
  border: 2px solid ${({ theme }) => theme.card_border};
  border-radius: 12px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary}10;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${({ theme }) => theme.shadow_primary};
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 14px;
  }
  @media (max-width: 500px) {
    font-size: 13px;
    padding: 7px 12px;
  }
`

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`


const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>Here are some of my skills on which I have been working on for the past 2 years.
        </Desc>
        <SkillsContainer>
          {skills.map((skill) => (
            <Skill>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item) => (
                  <SkillItem>
                    <SkillImage src={item.image}/>
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}

        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills
// comp/SubmitButton.js
import React from 'react';
import styled from 'styled-components/native';

const StyledWrapper = styled.View`
  width: 100%;
  max-width: 140px;
  height: 50px;
  border-radius: 8px;
  overflow: hidden;
`;

const StyledButtonTouchable = styled.TouchableOpacity`
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const ButtonSection = styled.View`
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: #ffffff;
`;

const SubmitButton = ({ onPress }) => {
  return (
    <StyledWrapper>
      <StyledButtonTouchable onPress={onPress}>
        <ButtonSection style={{ backgroundColor: '#1e90ff' }}>
          <ButtonText>Hover Me</ButtonText>
        </ButtonSection>
        <ButtonSection style={{ backgroundColor: '#21dc62' }}>
          <ButtonText>Thanks</ButtonText>
        </ButtonSection>
      </StyledButtonTouchable>
    </StyledWrapper>
  );
};

export default SubmitButton;

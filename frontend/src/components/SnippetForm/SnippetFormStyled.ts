import styled from 'styled-components';

export const FormContainer = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

export const FormField = styled.div`
  margin-bottom: 15px;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const FormInput = styled.input`
  width: 100%;
  color: #fff;
  background-color: #444;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 8px;
  background-color: #444;
  color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 100px;
`;

export const FormButton = styled.button`
  padding: 10px 20px;
  background-color:rgb(73, 106, 85);
  box-shadow: 0 2px 5px rgba(15, 15, 15, 0.7);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color:rgb(113, 146, 126);
  }
`;

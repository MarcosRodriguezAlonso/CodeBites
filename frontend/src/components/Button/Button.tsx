import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { Button } from './ButtonStyled';

interface DeleteButtonProps {
  onClick: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <FaTrash />
    </Button>
  )
};

export default DeleteButton;

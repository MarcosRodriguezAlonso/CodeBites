import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { Button } from './ButtonStyled';

interface DeleteButtonProps {
  onClick: () => void;
}

const FaTrashIcon: React.FC = FaTrash as React.FC;

const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <FaTrashIcon />
    </Button>
  );
};

export default DeleteButton;

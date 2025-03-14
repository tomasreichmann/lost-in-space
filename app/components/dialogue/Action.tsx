import React from "react";
import { useDialogueStore } from "../../model/dialogStore";

interface ActionProps {
  children: React.ReactNode;
  targetDialogueId?: string;
  condition?: () => boolean;
  onClick?: () => void;
}

export const Action: React.FC<ActionProps> = ({
  children,
  targetDialogueId,
  condition = () => true,
  onClick,
}) => {
  const { advanceDialogue } = useDialogueStore();

  const handleClick = () => {
    // If a condition is specified, check it first
    if (!condition()) return;

    // Custom onClick handler if provided
    if (onClick) {
      onClick();
    }

    // Advance to target dialogue if specified
    if (targetDialogueId) {
      advanceDialogue(targetDialogueId);
    }
  };

  return (
    <button className="dialogue-action" onClick={handleClick}>
      {children} ({targetDialogueId})
    </button>
  );
};

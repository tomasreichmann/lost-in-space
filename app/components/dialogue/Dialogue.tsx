import { useDialogueStore } from "~/model/dialogStore";

export default function Dialogue() {
  const { currentDialogueId, canGoBack, goBack } = useDialogueStore();

  return (
    <div>
      <p>Current Dialogue: {currentDialogueId}</p>
      {canGoBack() && <button onClick={goBack}>Previous</button>}
    </div>
  );
}

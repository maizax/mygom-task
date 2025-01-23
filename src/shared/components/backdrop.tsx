import { useEffect } from 'react';

export const Backdrop = ({
  setDialogState,
  dialogState,
}: {
  setDialogState: (state: boolean) => void;
  dialogState: boolean;
}) => {
  useEffect(() => {
    // TODO: recheck
    console.log('use effect');
    if (dialogState) {
      console.log(dialogState);
      window.document.onkeydown = (event: KeyboardEvent) => {
        console.log(event);
        if (event.key === 'Escape') {
          setDialogState(false);
        }
      };
    }
  }, [dialogState, setDialogState]);
  const onBackDropClick = () => {
    setDialogState(false);
  };
  return (
    <>
      <div
        className="w-full h-full opacity-50 bg-lime-900"
        onClick={onBackDropClick}
      ></div>
    </>
  );
};

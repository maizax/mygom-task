import { useEffect } from 'react';

export const Backdrop = ({
  setDialogState,
  dialogState,
}: {
  setDialogState: (state: boolean) => void;
  dialogState: boolean;
}) => {
  useEffect(() => {
    if (dialogState) {
      window.document.onkeydown = (event: KeyboardEvent) => {
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

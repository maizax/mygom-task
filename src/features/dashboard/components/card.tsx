import { useState } from 'react';
import { Backdrop } from '../../../shared/components/backdrop';
import { Button } from '../../../shared/components/button';
import { Dialog } from '../../../shared/components/dialog';
import { LinkModel } from '../../../shared/models';
import { dialogText } from '../consts';

export const Card = () => {
  const [dialogState, setDialogState] = useState(false);
  const onClick = () => {
    setDialogState(true);
  };
  const links: LinkModel[] = [
    { tabIndex: 1, text: 'Link 1', route: '#' },
    { tabIndex: 2, text: 'Link 2', route: '#' },
    { tabIndex: 3, text: 'Link 3', route: '#' },
  ];
  return (
    <>
      <div className="p-8 max-w-md border border-gray-300 rounded-xl shadow-lg bg-white">
        <h1 className="mb-4 font-extrabold text-gray-800 text-4xl">
          What is Lorem Ipsum?
        </h1>
        <p className="mb-6 text-gray-500 text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <Button tabIndex={0} text="Open me!" onClick={onClick} />
      </div>

      <div
        className={`w-full h-full absolute flex items-center justify-center transition-all duration-500 ease-in-out 
        ${dialogState ? 'opacity-100 z-10' : 'opacity-0 -z-10'}`}
      >
        <Backdrop setDialogState={setDialogState} dialogState={dialogState} />
        <Dialog
          links={links}
          setDialogState={setDialogState}
          text={dialogText}
          dialogButtonText="Close"
        />
      </div>
    </>
  );
};

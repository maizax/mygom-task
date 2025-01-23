import { LinkModel } from '../models';
import { Button } from './button';
import { Link } from './link';

export const Dialog = ({
  setDialogState,
  links,
  text,
  dialogButtonText,
}: {
  setDialogState: (state: boolean) => void;
  links: LinkModel[];
  text: string;
  dialogButtonText: string;
}) => {
  const onButtonClick = () => {
    setDialogState(false);
  };

  return (
    <>
      <div className="z-50 fixed">
        <div className="p-8 max-w-lg rounded-xl bg-white">
          <p className="mb-6 text-black text-lg">{text}</p>
          <div className="flex justify-around my-4">
            {links.map(link => (
              <Link
                key={link.tabIndex}
                tabIndex={link.tabIndex}
                text={link.text}
                route={link.route}
              />
            ))}
          </div>
          <Button
            tabIndex={0}
            text={dialogButtonText}
            onClick={onButtonClick}
          />
        </div>
      </div>
    </>
  );
};

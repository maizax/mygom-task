import { LinkModel } from '../models';
import { Button } from './button';
import { Link } from './link';

export const Dialog = ({
  setDialogState,
}: {
  setDialogState: (state: boolean) => void;
}) => {
  const links: LinkModel[] = [
    { tabIndex: 1, text: 'Link 1', route: '#' },
    { tabIndex: 2, text: 'Link 2', route: '#' },
    { tabIndex: 3, text: 'Link 3', route: '#' },
  ];
  const onButtonClick = () => {
    setDialogState(false);
  };

  return (
    <>
      <div className="z-50 fixed">
        <div className="p-8 max-w-lg rounded-xl bg-white">
          <p className="mb-6 text-black text-lg">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
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
          <Button tabIndex={4} text="Close" onClick={onButtonClick} />
        </div>
      </div>
    </>
  );
};

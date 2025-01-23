import { LinkModel } from '../models';

export const Link = ({ tabIndex, route, text }: LinkModel) => {
  return (
    <>
      <a
        className="font-medium text-blue-800 hover:underline"
        tabIndex={tabIndex}
        href={route}
      >
        {text}
      </a>
    </>
  );
};

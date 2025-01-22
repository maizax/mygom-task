export const Button = ({
  tabIndex,
  text,
  onClick,
}: {
  tabIndex: number;
  text: string;
  onClick: () => void;
}) => {
  return (
    <>
      <button
        className="flex items-center justify-center w-full p-3 font-medium text-white bg-lime-600 rounded-lg hover:bg-lime-500"
        tabIndex={tabIndex}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
};

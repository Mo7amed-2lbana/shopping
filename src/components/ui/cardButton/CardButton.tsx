interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  width?: "w-full" | "w-fit";
  children?: React.ReactNode;
}

const CardButton = ({
  children,
  className,
  width = "w-full",
  ...rest
}: IProps) => {
  return (
    <button
      className={`${className}  ${width} rounded-md p-2  text-white cursor-pointer`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default CardButton;

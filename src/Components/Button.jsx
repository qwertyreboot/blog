const Button = ({
  onClick,
  color = "green",
  text = "Submit",
  type = "button",
}) => {
  const colorMap = {
    green: "bg-green-500",
    red: "bg-red-500",
    blue: "bg-blue-500",
    gray: "bg-gray-500",
  };

  return (
    <button
      onClick={onClick}
      className={
        type === "a"
          ? "mt-4 cursor-pointer text-blue-500 hover:text-blue-700"
          : "py-2 px-4 text-white rounded shadow " + colorMap[color]
      }
    >
      {text}
    </button>
  );
};

export default Button;

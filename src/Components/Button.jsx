const Button = ({ type, onClick, text }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`rounded-lg border border-gray-400 bg-cyan-600 p-2 text-sm text-gray-200 shadow-lg transition-transform duration-700 hover:scale-110`}
    >
      {text}
    </button>
  );
};

export default Button;

function Button({ onClickHandle, children }) {
  return (
    <button className="btn" onClick={onClickHandle}>
      {children}
    </button>
  );
}

export default Button;

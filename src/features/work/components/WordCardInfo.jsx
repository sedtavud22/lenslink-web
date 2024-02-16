function WordCardInfo({ children, textSize = "text-sm" }) {
  return (
    <div className={`flex items-center gap-1 text-lightGrayText ${textSize}`}>
      {children}
    </div>
  );
}

export default WordCardInfo;

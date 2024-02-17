function InfoBlock({ title, children }) {
  return (
    <div>
      <h3 className="font-semibold">{title}</h3>
      <p className="break-words">{children}</p>
    </div>
  );
}

export default InfoBlock;

function FooterMenu({ children, title }) {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      {children}
    </div>
  );
}

export default FooterMenu;

function Avatar({ src, size = 3, firstName }) {
  return (
    <>
      {src ? (
        <div className="avatar">
          <div
            className="rounded-full"
            style={{ width: `${size}rem`, height: `${size}rem` }}
          >
            <img src={src} />
          </div>
        </div>
      ) : (
        <div className="avatar placeholder">
          <div
            className="bg-primary text-white rounded-full"
            style={{ width: `${size}rem`, height: `${size}rem` }}
          >
            <span style={{ fontSize: `${size / 2}rem` }}>
              {firstName?.[0].toUpperCase()}
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default Avatar;

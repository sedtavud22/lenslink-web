function Loading() {
  return (
    <>
      <div className="fixed inset-0 bg-black opacity-15 z-40"></div>
      <div className="fixed inset-0 z-50">
        <div className="flex items-center justify-center min-h-full">
          <span className="loading loading-ball loading-lg"></span>
          <span className="loading loading-ball loading-lg"></span>
          <span className="loading loading-ball loading-lg"></span>
        </div>
      </div>
    </>
  );
}

export default Loading;

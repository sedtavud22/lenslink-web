function Modal({ modalId, title, text, spanText, spanOnClick, children }) {
  return (
    <>
      <dialog id={modalId} className="modal">
        <div className="modal-box">
          {/* Close Modal */}
          <form method="dialog">
            <button className="btn h-8 w-8 min-h-0 text-sm hover:bg-[#f2f5f7] btn-circle btn-ghost absolute right-6 top-6 text-center">
              &#10005;
            </button>
          </form>

          <h3 className="font-bold text-2xl">{title}</h3>
          <div className="pt-4 pb-8 flex gap-1">
            <div>{text}</div>
            <span
              className="text-accent hover:underline"
              role="button"
              onClick={() => spanOnClick(modalId)}
            >
              {spanText}
            </span>
          </div>
          <div>{children}</div>
        </div>
      </dialog>
    </>
  );
}

export default Modal;

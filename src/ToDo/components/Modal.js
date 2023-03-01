export function Modal({ isActive, setActiveModal, children }) {

  return (
    <div
       className={isActive ? "modal_wrapper active" : "modal_wrapper"}
    >
      <div className="modal_content">
        <button
        className="modal_close_btn"
        onClick={() => setActiveModal(false)}
        >
          close
        </button>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
}
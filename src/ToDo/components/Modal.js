export function Modal({ isActive, setActiveModal }) {

  return (
    <div
       className={isActive ? "modal_wrapper active" : "modal_wrapper"}
    >
      <div className="modal_content">
        <button
        >
          close
        </button>
      </div>
    </div>
  );
}
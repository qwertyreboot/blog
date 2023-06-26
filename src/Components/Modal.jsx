import { TbX } from "react-icons/tb";

const Modal = ({ show, onClose, children }) => {
  return show ? (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl p-4">
            <div
              onClick={onClose}
              className="flex justify-end pt-2 pr-5 text-gray-500 cursor-pointer"
            >
              <TbX size={20} />
            </div>

            {children}
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;

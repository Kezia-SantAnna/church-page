interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function Modal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) {
    return null; // Não renderiza nada se o modal não estiver aberto
  }

  return (
    <section className="box-modal">
      <div className="modal">
        <button className="button-close" onClick={onClose}>
          X
        </button>
        <div>
          <h2>Todos os Domingos</h2>
          <h3>Manhã</h3>
          <p>8H - Oração</p>
          <p>9H - Café da Manhã</p>
          9H30 - EBD / Teens / Kids
        </div>
        <div>
          <h3>Noite</h3>
          <p>18H30 - Culto de Louvor e Adoração</p>
        </div>
      </div>
    </section>
  );
}

export default Modal;

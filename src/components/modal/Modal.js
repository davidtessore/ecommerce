import "./modal.scss";

const Modal = ({ title, close, children }) => {
	return (
		<div>
			<h2>{title}</h2>
			{children}
		</div>
	);
};

export default Modal;
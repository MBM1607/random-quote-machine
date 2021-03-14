import PropTypes from 'prop-types';

const Button = ({ onClick }) => {

	return (
		<button id='new-quote' className="button button-block" onClick={onClick}>New Quote</button>
	);
};

Button.propTypes = {
	onClick: PropTypes.func.isRequired
}

export default Button;

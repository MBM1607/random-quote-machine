import PropTypes from 'prop-types';

const Quote = ({ text, author }) => {
	return (
		<div className="quote">
			<p id='text'>&ldquo; {text}</p>
			<p id='author'>- {author}</p>
		</div>
	);
};

Quote.propTypes = {
	text: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired
}

export default Quote;

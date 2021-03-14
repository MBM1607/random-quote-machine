import Button from './components/Button';
import Quote from './components/Quote';
import { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

const App = () => {
	const [quotes, setQuotes] = useState([]);
	const [link, setLink] = useState('');
	const [text, setText] = useState('');
	const [author, setAuthor] = useState('');

	const getQuotes = async () => {
		const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

		const data = await fetch(url);

		const json_data = await data.json();

		setQuotes(json_data.quotes);
	};

	const newQuote = useCallback(async () => {

		const quote = quotes[Math.floor(Math.random() * quotes.length)];
		setText(quote.quote);
		setAuthor(quote.author);
		setLink('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
				`"${quote.quote}" ${quote.author}`);
	}, [quotes]);

	useEffect(() => {
		getQuotes();
	}, [])

	useEffect(() => {
		if (quotes.length) {
			newQuote();
		}
	}, [quotes, newQuote]);

	return (
		<>
		{ text.length > 0 &&
			<main id="quote-box">
				<Quote text={text} author={author} />
				<a id='tweet-quote' href={link} target='_blank' rel="noreferrer" className="button"><FontAwesomeIcon icon={faTwitter} /></a>
				<Button onClick={newQuote} />
			</main>
		}
		</>
	);
};

export default App;

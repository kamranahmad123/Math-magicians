import { useState, useEffect } from 'react';

function DisplayQuotes() {
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);
  const [response, setResponse] = useState([]);
  useEffect(() => {
    setLoad(true);
    const getData = async () => {
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=knowledge', {
          method: 'GET',
          headers: {
            'content-Type': 'application/json',
            'X-Api-Key': 'fnAT/M7RXW/Z6o/USLJf8w==YPBOWhYVvzydMXmi',
          },
        });
        const receivedData = await response.json();
        setResponse(receivedData);
      } catch {
        setError(true);
      }
      setLoad(false);
    };
    getData();
  }, [setLoad, setResponse]);
  if (error) { return <div className="Load">Something went wrong</div>; }
  if (load) { return <div className="Response">Data is loading</div>; }
  return (
    <div className="Quote">
      {response.map((quotes) => (
        <div key={response.indexOf(quotes)}>
          <div className="quotes">{quotes.quote}</div>
          <div className="quotes-author">{quotes.author}</div>
        </div>
      ))}
    </div>
  );
}

export default DisplayQuotes;

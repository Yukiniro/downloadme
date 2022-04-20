import { useState } from 'react';
import './App.css';
import { download } from 'downloadmejs'

function App() {
  const [url, setUrl] = useState('https://images.unsplash.com/photo-1580761743271-99d222ab2758');
  const [name, setName] = useState('test.png');
  const [loading, setLoading] = useState(false);
  const onUrlInputChange = (e) => {
    setUrl(e.target.value);
  };
  const onNameInputChange = (e) => {
    setName(e.target.value);
  };
  const onClick = () => {
    setLoading(true);
    fetch(url)
      .then(res => res.blob())
      .then(blob => download(blob, { name }))
      .catch(e => alert(e))
      .finally(() => {
        setLoading(false);
      });
  }
  return (
    <div className="App">
      <div>
        <textarea value={url} onChange={onUrlInputChange} />
      </div>
      <div>
        name: <input value={name} onChange={onNameInputChange} />
      </div>
      <button style={{
        opacity: loading ? 0.6 : 1,
        pointerEvents: loading ? 'none' : 'initial',
      }} onClick={onClick}>{loading ? 'Downloading...' : 'Donwload'}</button>
    </div>
  )
}

export default App

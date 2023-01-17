import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect,  } from 'react';
import axios from 'axios';

import AllPosts from './components/All posts/AllPosts';
import Forms from './components/Form/Form';
import { Context } from './Context';

function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState('');
  const [valueName, setValueName] = useState(''); 
    const [valueDescription, setValueDescription ] = useState('');
  
  function reload(){
    axios.get('http://localhost:3001/posts')
    .then(res => setPosts(res.data))
  }

  useEffect(() => {
    reload()
  }, [])

  console.log(posts)

  return (
    <div className='container'>
      <Context.Provider value={{ setSelectedPost, reload, setValueName, setValueDescription }}>
        <AllPosts posts={posts}/>
      </Context.Provider>
        
      <Forms posts={posts}
      reload={reload}
      selectedPost={selectedPost}
      setPosts={setPosts}
      setSelectedPost={setSelectedPost}
      valueName={valueName}
      valueDescription={valueDescription}
      setValueName={setValueName}
      setValueDescription={setValueDescription}
      />
    </div>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect,  } from 'react';
import axios from 'axios';

import AllPosts from './components/All posts/AllPosts';
import Forms from './components/Form/Form';
import { Context } from './Context';

function App(){
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState({
    id: '',
    name: '',
    description: ''
  }); 
  
  function reload(){
    axios.get('http://localhost:3001/posts')
    .then(res => setPosts(res.data))
  }

  useEffect(() => {
    reload()
  }, [])

  return (
    <div className='container'>
      <Context.Provider value={{ reload, setValue, posts }}>
        <AllPosts />
      </Context.Provider>
      <Context.Provider value={{ reload, setPosts, value, setValue }}>
        <Forms />
      </Context.Provider>
    </div>
  );
}

export default App;

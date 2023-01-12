import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AllPosts from './components/All posts/AllPosts';
import Forms from './components/Form/Form';

function App() {
  return (
      <div className='container'>
        <AllPosts />
        <Forms />
      </div>
  );
}

export default App;

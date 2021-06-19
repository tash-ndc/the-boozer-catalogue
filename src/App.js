import Header from './Features/Header/Header';
import CategoriesMenu from './Features/Categories/CategoriesMenu';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header className='header'/>
      <CategoriesMenu className='categories-menu' />
    </div>
  );
}

export default App;

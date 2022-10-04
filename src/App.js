import './App.css';
import Counter from './components/Counter';
import List from './components/List';
import Search from './components/Search';

function App() {
  const birdList = ['ovenbird', 'red-winged blackbird', 'red-eyed vireo', 'gray vireo', 'eastern wood-pewee', 'red-breasted merganser', 'blue grosbeak', 'gray flycatcher', 'gray catbird', 'eastern kingbird', 'brown-headed cowbird', 'brown creeper', 'blue-headed vireo'];

  return (
    <div className="App">
      <Search birds={birdList} />
      <Counter />
      <List />
    </div>
  );
}

export default App;

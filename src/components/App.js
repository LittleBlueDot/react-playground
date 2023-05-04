import ComponentLifecycle from './ComponentLifecycle';
import CounterChallenge from './CounterChallenge';
import NameState from './NameState';
import ShoppingList from './ShoppingList';
import TaskList from './TaskList';

function App() {
  return (
    <div>
      <CounterChallenge />
      <ComponentLifecycle />
      <NameState />
      <ShoppingList />
      <TaskList />
    </div>
  );
}

export default App;

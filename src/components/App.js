import ComponentLifecycle from './ComponentLifecycle';
import CounterChallenge from './CounterChallenge';
import HigherOrderComponent from './HigherOrderComponent';
import NameState from './NameState';
import ShoppingList from './ShoppingList';
import TaskList from './TaskList';

function App() {
  return (
    <div>
      <CounterChallenge />
      <ComponentLifecycle />
      <HigherOrderComponent />
      <NameState />
      <ShoppingList />
      <TaskList />
    </div>
  );
}

export default App;

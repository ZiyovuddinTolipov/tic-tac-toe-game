
import './scss/App.scss';
import Board from './Components/Board';
import Square from './Components/Square';


function App() {
  return (
    <main>
      <Board>
        <Square />
        <Square />
        <Square />
        {/*  */}
        <Square />
        <Square />
        <Square />
        {/*  */}
        <Square />
        <Square />
        <Square />
      </Board>
    </main>
  );
}

export default App;

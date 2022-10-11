import {useReducer} from 'react';

type reducerState = {
  count: number;
}
type reducerAction = {
  type: string;
}

const initialState = {count: 0};
const reducer = (state: reducerState, action: reducerAction) => {
  switch(action.type){
    case 'ADD':
      return{...state, count: state.count + 1};
    break;
    case 'DEL':
      return {...state, count: state.count -1};
    break;
    case 'RESET':
      return initialState;
    break;
  }
  return state;
}

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="p-5">
      Contagem: {state.count}
      <hr />
      <button onClick={() => dispatch
        ({type: 'ADD'})} className="mt-3 ml-3 mr-3 text-green-700">
          Adicionar
      </button>
      <button onClick={() => dispatch
        ({type: 'DEL'})} className="mt-3 ml-3 mr-3 text-green-700">
          Deletar
      </button>
      <button onClick={() => dispatch
        ({type: 'RESET'})} className="mt-3 ml-3 mr-3 text-green-700">
          Resetar
      </button>
    </div>
  );
}
export default App;
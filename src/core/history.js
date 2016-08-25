import { createHistory, createMemoryHistory } from 'history';

const history = CLIENT ? createHistory() : createMemoryHistory();

export default history;

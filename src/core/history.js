import { createHistory, createMemoryHistory } from 'history';

const history = TYPE == 'client' ? createHistory() : createMemoryHistory();

export default history;

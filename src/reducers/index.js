import * as types from '../constants/actions/index';
const initialState = {
	isFetching: 0,      //是否已经获取 
	text:"test"
};
export default function(state = initialState, action) {
	switch (action.type) {
		case types.INDEX_MAIN_CLICK:
			state = {
				isFetching: 0,      //是否已经获取 
				text:"2"
			};
			return state;
		default:
			return state;
	}
};
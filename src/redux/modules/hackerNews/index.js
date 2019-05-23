import { hackerNewsApi } from '../../../api'

export const GET_JOB_IDS_REQUEST = 'GET_JOB_IDS_REQUEST'
export const GET_JOB_IDS_SUCCESS = 'GET_JOB_IDS_SUCCESS'
export const GET_JOB_IDS_FAILURE = 'GET_JOB_IDS_FAILURE'

export const fetchJobIds = () => (dispatch, getState) => {
	dispatch({ type: GET_JOB_IDS_REQUEST })
	return hackerNewsApi.fetchJobIds('https://hacker-news.firebaseio.com/v0/jobstories.json')
		.then(data => {
			dispatch({ type: GET_JOB_IDS_SUCCESS, data })
			return data
		})
		.catch(err => {
			console.log('Error getting job IDs:', err)
			dispatch({ type: GET_JOB_IDS_FAILURE, err })
			throw err
		})
}

const DEFAULT_STATE = {
	jobIds: [],
	processing: false,
}

const hackerNewsReducer = (state = DEFAULT_STATE, action) => {
	switch(action.type) {
		case GET_JOB_IDS_REQUEST:
			return {
				...state,
				processing: true
			}
		case GET_JOB_IDS_SUCCESS:
			return {
				...state,
				jobIds: action.data,
				processing: false
			}
		default:
			return state
	}
}

export default hackerNewsReducer

export const selectJobIds = state => state.hackerNews.jobIds
export const selectHackerNewsProcessing = state => state.hackerNews.processing
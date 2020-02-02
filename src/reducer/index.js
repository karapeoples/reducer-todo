export const initialState = {
	tasks: [
		{
			task: "Organize Garage",
			id: 1,
			completed: false,
		},
		{
			task: "Clean Living Room",
			id: 2,
			completed: false,
		},
		{
			task: "Buy Bleach",
			id: 3,
			completed: false,
		},
		{
			task: "Vacuum Cabinets",
			id: 4,
			completed: false,
		},
		{
			task: "Pick/Price Paint",
			id: 5,
			completed: false,
		},
		{
			task: "Make Appointments",
			id: 6,
			completed: false,
		},
	],
};

export const errandReducer = (state, action) => {
	switch (action.type) {
		case "ADD_NEW_TASK":
			return {
				...state,
				tasks: [
					...state.tasks,
					{
						task: action.payload,
						id: Date.now(),
						completed: false,
					},
				],
			};
		case "TOGGLE_COMPLETED":
			return {
				...state,
				tasks: state.tasks.map(item => {
					if (item.id === action.payload) {
						return {
							...item,
							completed: !item.completed,
						};
					}

					return item;
				}),
			};
		case "CLEAR_COMPLETED":
			return {
				...state,
				tasks: state.tasks.filter(item => {
					return !item.completed;
				}),
			};

		default:
			return state;
	}
};

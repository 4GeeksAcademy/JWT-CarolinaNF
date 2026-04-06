export const initialStore = () => {
	return {
		token: sessionStorage.getItem("token") || null,
		user: null,
		privateData: null
	};
};

export default function storeReducer(store, action = {}) {
	switch (action.type) {
		case "set_token":
			return {
				...store,
				token: action.payload
			};

		case "set_user":
			return {
				...store,
				user: action.payload
			};

		case "set_private":
			return {
				...store,
				privateData: action.payload
			};

		case "logout":
			return {
				...store,
				token: null,
				user: null,
				privateData: null
			};

		default:
			throw Error("Unknown action.");
	}
}
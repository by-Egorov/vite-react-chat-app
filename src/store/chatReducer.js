const initialState = {
    chats: []
}

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CHATS' : {
            return {
                state
            }
        }
    }
}
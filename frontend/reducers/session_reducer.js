import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

import _ from 'lodash';

const _nullSession = {
    currentUser: null
};

export default (state = _nullSession, action) => {
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            let currentUser = action.user;
            return _.merge({}, state, {
                currentUser
            });
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        default:
            return state;
    }
};
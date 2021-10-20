import types from '../actionTypes';

const initialState = {};

const FoodCategoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_FOODS_CATEGORIES_NAMES: {
            return {
                ...state,
                foodCategories: action.payload,
            };
        }
        case types.SET_FOODS_TYPES_NAMES: {
            return {
                ...state,
                foodsCategoriesTypes: action.payload,
            };
        }
        default:
            return state;
    }
};

export default FoodCategoriesReducer;

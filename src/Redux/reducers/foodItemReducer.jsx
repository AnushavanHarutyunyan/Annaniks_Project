import types from '../actionTypes';

const initialState = {
    foodsData: [
        // {
        //     id: 1,
        //     title: 'ЗАВТРАК-1',
        //     starsCount: 6,
        //     description: 'Бекон,яичница,картофельная запеканка,тосты,чай/кофе ',
        //     wieght: '500 ',
        //     quantity: 10,
        //     price: '300 ',
        // },
        //{
        //     id: 2,
        //     title: 'ЗАВТРАК-2',
        //     starsCount: 3,
        //     description: 'Бекон,яичница,картофельная запеканка,тосты,чай/кофе ',
        //     wieght: '500 ',
        //     quantity: 10,
        //     price: '300 ',
        // },
        // {
        //     id: 3,
        //     title: 'ЗАВТРАК-3',
        //     starsCount: 1,
        //     description: 'Бекон,яичница,картофельная запеканка,тосты,чай/кофе ',
        //     wieght: '500 ',
        //     quantity: 10,
        //     price: '300 ',
        // },
        // {
        //     id: 4,
        //     title: 'ЗАВТРАК-4',
        //     starsCount: 2,
        //     description: 'Бекон,яичница,картофельная запеканка,тосты,чай/кофе ',
        //     wieght: '500 ',
        //     quantity: 10,
        //     price: '300 ',
        // },
        // {
        //     id: 5,
        //     title: 'ЗАВТРАК-5',
        //     starsCount: 2,
        //     description: 'Бекон,яичница,картофельная запеканка,тосты,чай/кофе ',
        //     wieght: '500 ',
        //     quantity: 10,
        //     price: '300 ',
        // },
        // {
        //     id: 6,
        //     title: 'ЗАВТРАК-6',
        //     starsCount: 2,
        //     description: 'Бекон,яичница,картофельная запеканка,тосты,чай/кофе ',
        //     wieght: '500 ',
        //     quantity: 10,
        //     price: '300 ',
        // },
    ],
    foodItem: [],
};

const allFoodsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_FOOD: {
            return {
                ...state,
                foodsData: action.payload,
            };
        }
        case types.SET_FOODS: {
            return {
                ...state,
                foodsData: action.payload,
            };
        }
        case types.SET_USER_BY_ID: {
            return {
                ...state,
                foodItem: action.payload,
            };
        }

        default:
            return state;
    }
};

export default allFoodsReducer;

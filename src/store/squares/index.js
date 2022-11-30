import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            squares: generateSquares(),
            verticalCoordinates: ['8', '7', '6', '5', '4', '3', '2', '1'],
            horizontalCoordinates: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
        }
    },
    mutations,
    actions,
    getters
};


function generateSquares() {
    const cells = [];
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    for (let i = 8; i > 0; i--) {
        let row = i % 2 ? 'even' : 'not even';
        for (let index in letters) {
            cells.push({
                name: letters[index] + '' + i,
                variant: generateVariant(row, index),
                hasShape: false,
                shape: null
            });
        }
    }

    function generateVariant(row, index) {
        if (row === 'even') {
            return index % 2 === 0 ? 'black' : 'white';
        } else {
            return index % 2 === 0 ? 'white' : 'black';
        }
    }

    return cells;
}


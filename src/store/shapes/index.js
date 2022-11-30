import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            active: false,
            shapes: [{
                id: '1',
                color: 'Black',
                name: 'Queen',
                defaultPosition: 'd8',
                position: 'd8',
                url: '/black-chess/black-queen.png',
                live: true,
                selected: false

            }, {

                id: '2',
                color: 'Black',
                name: 'King',
                defaultPosition: 'e8',
                position: 'e8',
                url: '/black-chess/black-korol.png',
                live: true,
                selected: false

            }, {

                id: '3',
                color: 'Black',
                name: 'Bishop',
                defaultPosition: 'c8',
                position: 'c8',
                url: '/black-chess/black-slon.png',
                live: true,
                selected: false

            }, {

                id: '4',
                color: 'Black',
                name: 'Bishop',
                defaultPosition: 'f8',
                position: 'f8',
                url: '/black-chess/black-slon.png',
                live: true,
                selected: false

            }, {

                id: '5',
                color: 'Black',
                name: 'Knight',
                defaultPosition: 'b8',
                position: 'b8',
                url: '/black-chess/black-kon.png',
                live: true,
                selected: false

            }, {

                id: '6',
                color: 'Black',
                name: 'Knight',
                defaultPosition: 'g8',
                position: 'g8',
                url: '/black-chess/black-kon.png',
                live: true,
                selected: false

            }, {

                id: '7',
                color: 'Black',
                name: 'Rook',
                defaultPosition: 'a8',
                position: 'a8',
                url: '/black-chess/black-ladya.png',
                live: true,
                selected: false

            }, {

                id: '8',
                color: 'Black',
                name: 'Rook',
                defaultPosition: 'h8',
                position: 'h8',
                url: '/black-chess/black-ladya.png',
                live: true,
                selected: false

            }, {

                id: '9',
                color: 'Black',
                name: 'Pawn',
                defaultPosition: 'a7',
                position: 'a7',
                url: '/black-chess/black-pesh.png',
                live: true,
                selected: false

            }, {

                id: '10',
                color: 'Black',
                name: 'Pawn',
                defaultPosition: 'b7',
                position: 'b7',
                url: '/black-chess/black-pesh.png',
                live: true,
                selected: false

            }, {

                id: '11',
                color: 'Black',
                name: 'Pawn',
                defaultPosition: 'c7',
                position: 'c7',
                url: '/black-chess/black-pesh.png',
                live: true,
                selected: false

            }, {

                id: '12',
                color: 'Black',
                name: 'Pawn',
                defaultPosition: 'd7',
                position: 'd7',
                url: '/black-chess/black-pesh.png',
                live: true,
                selected: false

            }, {

                id: '13',
                color: 'Black',
                name: 'Pawn',
                defaultPosition: 'e7',
                position: 'e7',
                url: '/black-chess/black-pesh.png',
                live: true,
                selected: false

            }, {

                id: '14',
                color: 'Black',
                name: 'Pawn',
                defaultPosition: 'f7',
                position: 'f7',
                url: '/black-chess/black-pesh.png',
                live: true,
                selected: false

            }, {

                id: '15',
                color: 'Black',
                name: 'Pawn',
                defaultPosition: 'g7',
                position: 'g7',
                url: '/black-chess/black-pesh.png',
                live: true,
                selected: false

            }, {

                id: '16',
                color: 'Black',
                name: 'Pawn',
                defaultPosition: 'h7',
                position: 'h7',
                url: '/black-chess/black-pesh.png',
                live: true,
                selected: false

            }, {

                id: '17',
                color: 'White',
                name: 'Queen',
                defaultPosition: 'd1',
                position: 'd1',
                url: '/white-chess/white-queen.png',
                live: true,
                selected: false

            }, {

                id: '18',
                color: 'White',
                name: 'King',
                defaultPosition: 'e1',
                position: 'e1',
                url: '/white-chess/white-korol.png',
                live: true,
                selected: false

            }, {

                id: '19',
                color: 'White',
                name: 'Bishop',
                defaultPosition: 'c1',
                position: 'c1',
                url: '/white-chess/white-slon.png',
                live: true,
                selected: false

            }, {

                id: '20',
                color: 'White',
                name: 'Bishop',
                defaultPosition: 'f1',
                position: 'f1',
                url: '/white-chess/white-slon.png',
                live: true,
                selected: false

            }, {

                id: '21',
                color: 'White',
                name: 'Knight',
                defaultPosition: 'b1',
                position: 'b1',
                url: '/white-chess/white-kon.png',
                live: true,
                selected: false

            }, {

                id: '22',
                color: 'White',
                name: 'Knight',
                defaultPosition: 'g1',
                position: 'g1',
                url: '/white-chess/white-kon.png',
                live: true,
                selected: false

            }, {

                id: '23',
                color: 'White',
                name: 'Rook',
                defaultPosition: 'a1',
                position: 'a1',
                url: '/white-chess/white-ladya.png',
                live: true,
                selected: false

            }, {

                id: '24',
                color: 'White',
                name: 'Rook',
                defaultPosition: 'h1',
                position: 'h1',
                url: '/white-chess/white-ladya.png',
                live: true,
                selected: false

            }, {

                id: '25',
                color: 'White',
                name: 'Pawn',
                defaultPosition: 'a2',
                position: 'a2',
                url: '/white-chess/white-pesh.png',
                live: true,
                selected: false

            }, {

                id: '26',
                color: 'White',
                name: 'Pawn',
                defaultPosition: 'b2',
                position: 'b2',
                url: '/white-chess/white-pesh.png',
                live: true,
                selected: false

            }, {

                id: '27',
                color: 'White',
                name: 'Pawn',
                defaultPosition: 'c2',
                position: 'c2',
                url: '/white-chess/white-pesh.png',
                live: true,
                selected: false

            }, {

                id: '28',
                color: 'White',
                name: 'Pawn',
                defaultPosition: 'd2',
                position: 'd2',
                url: '/white-chess/white-pesh.png',
                live: true,
                selected: false

            }, {

                id: '29',
                color: 'White',
                name: 'Pawn',
                defaultPosition: 'e2',
                position: 'e2',
                url: '/white-chess/white-pesh.png',
                live: true,
                selected: false

            }, {

                id: '30',
                color: 'White',
                name: 'Pawn',
                defaultPosition: 'f2',
                position: 'f2',
                url: '/white-chess/white-pesh.png',
                live: true,
                selected: false

            }, {

                id: '31',
                color: 'White',
                name: 'Pawn',
                defaultPosition: 'g2',
                position: 'g2',
                url: '/white-chess/white-pesh.png',
                live: true,
                selected: false

            }, {

                id: '32',
                color: 'White',
                name: 'Pawn',
                defaultPosition: 'h2',
                position: 'h2',
                url: '/white-chess/white-pesh.png',
                live: true,
                selected: false

            }]
        };
    },
    mutations,
    actions,
    getters
};
const app = new Vue({
    el: '#app-whats',
    data:{
        user: {
            name: 'Paolo C.',
            avatar: '_my'
        },
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                active: true,
            },
            {
                name: 'Fabio',
                avatar: '_2',
                active: false,
            },
            {
                name: 'Samuele',
                avatar: '_3',
                active: false,
            },
            {
                name: 'Alessandro B.',
                avatar: '_4',
                active: false,
            },
            {
                name: 'Alessandro L.',
                avatar: '_5',
                active: false,
            },
            {
                name: 'claudia',
                avatar: '_6',
                active: false,
            },
            {
                name: 'Federico',
                avatar: '_7',
                active: false,
            },
            {
                name: 'Davide',
                avatar: '_8',
                active: false,
            },
        ],
    }
})
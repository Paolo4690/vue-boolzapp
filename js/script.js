const app = new Vue({
    el: '#app-whats',
    data:{
        user: {
            name: 'Paolo C.',
            avatar: '_my'
        },
        counter: 0,
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 10:02:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 10:05:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 10:10:22',
                        message: 'prova1',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: false,
                messages: [
                    {
                        date: '10/01/2020 10:32:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 10:35:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 10:40:22',
                        message: 'prova2!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: false,
                messages: [
                    {
                        date: '10/01/2020 11:02:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 11:05:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 11:10:22',
                        message: 'prova3',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: false,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'prova4',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: false,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'prova5!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'claudia',
                avatar: '_6',
                visible: false,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'prova6!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: '_7',
                visible: false,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'prova7!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: '_8',
                visible: false,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
        ],
    },
    methods:{
        sentOr(i, j) {
            if (this.contacts[i].messages[j].status == 'sent') {
                return 'my-message'
            } else {
                return 'your-message'
            }
        },
        hour(i, j) {
            ora = this.contacts[i].messages[j].date.split(' ')[1].split(':')[0] + ':'
            ora += this.contacts[i].messages[j].date.split(' ')[1].split(':')[1]
            return ora
        },
        changeProfile(index) {
            this.counter = index
        },
    }
})


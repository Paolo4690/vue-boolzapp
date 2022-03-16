const app = new Vue({
    el: '#app-whats',
    data:{
        user: {
            name: 'Paolo C.',
            avatar: '_my'
        },
        counter: 0,
        cerca: '',
        ora: '',
        newMessage: {
            date: '',
            message: '',
            status: ''
        },
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '2020-01-10T10:02:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '2020-01-10T10:05:32',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '2020-01-10T10:06:10',
                        message: 'Tutto fatto!',
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
                        date: '2022-01-10T09:25:03',
                        message: 'Ciao Paolo, è iniziato il corso?',
                        status: 'received'
                    },
                    {
                        date: '2022-01-10T09:27:00',
                        message: 'Ehi, ciao Fabio, si sto per iniziare!',
                        status: 'sent'
                    },
                    {
                        date: '2022-01-10T09:27:22',
                        message: 'Ci vediamo tra 6 mesi!',
                        status: 'sent'
                    },
                    {
                        date: '2022-01-10T09:29:00',
                        message: 'Dai mi raccomando, IMPEGNATI! 😉',
                        status: 'received'
                    },
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: false,
                messages: [
                    {
                        date: '2022-01-10T11:02:55',
                        message: 'wè usciamo!',
                        status: 'sent'
                    },
                    {
                        date: '2022-01-10T11:05:00',
                        message: 'Seee usciamo", vuoi fare la badoria"',
                        status: 'received'
                    },
                    {
                        date: '2022-01-10T11:10:22',
                        message: 'Dai vatti a vestire!',
                        status: 'sent'
                    },
                    {
                        date: '2022-01-10T11:12:00',
                        message: 'Ma dove andiamoooo? A fare che? Con chi? Perchè?',
                        status: 'received'
                    },
                    {
                        date: '2022-01-10T11:12:22',
                        message: 'Ma ci andiamo a divertire!',
                        status: 'sent'
                    },
                    {
                        date: '2022-01-10T11:15:00',
                        message: 'Te vuoi fare la baldoriaaa?',
                        status: 'received'
                    },
                    {
                        date: '2022-01-10T11:16:22',
                        message: 'Yeeeeeeaa!',
                        status: 'sent'
                    },
                    {
                        date: '2022-01-10T11:18:00',
                        message: 'Io.... NO, e non mi va! Anzi sai che è! Statt alla casa!',
                        status: 'received'
                    },
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: false,
                messages: [
                    {
                        date: '2022-02-05T15:30:55',
                        message: 'Problemi con il compito?',
                        status: 'sent'
                    },
                    {
                        date: '2022-02-05T15:50:00',
                        message: 'Sfogati...!',
                        status: 'sent'
                    },
                    {
                        date: '2022-02-05T16:15:22',
                        message: 'Voglio morireeeee!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro U.',
                avatar: '_5',
                visible: false,
                messages: [
                    {
                        date: '2022-03-10T15:30:55',
                        message: 'Quando vieni a Roma?',
                        status: 'sent'
                    },
                    {
                        date: '2022-03-10T15:50:00',
                        message: 'Andiamo a cena!',
                        status: 'sent'
                    },
                    {
                        date: '2022-03-10T16:15:22',
                        message: 'Appena mi libero un Week end salgo!',
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
                        date: '2022-02-14T15:30:55',
                        message: 'Ciao Claudia, mi serve aiuto!',
                        status: 'sent'
                    },
                    {
                        date: '2022-02-14T15:50:00',
                        message: 'Conosci una bravo?',
                        status: 'sent'
                    },
                    {
                        date: '2022-02-14T16:15:22',
                        message: 'www.unobravo.it',
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
                        date: '2022-02-18T15:30:55',
                        message: 'Fede volevo dirti che il corso è 🔝',
                        status: 'sent'
                    },
                    {
                        date: '2022-02-18T15:50:00',
                        message: 'Appena puoi inscriviti!',
                        status: 'sent'
                    },
                    {
                        date: '2022-02-18T16:15:22',
                        message: 'Inizio con la prossima classe!',
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
                        date: '2022-03-15T08:30:55',
                        message: 'Davideeee! mi servono le Orate!',
                        status: 'sent'
                    },
                    {
                        date: '2022-03-15T08:31:00',
                        message: 'Sei andato a pesca stanotte, si??? 🎣',
                        status: 'sent'
                    },
                    {
                        date: '2022-03-15T08:33:00',
                        message: 'Alle 10:00 sono al ristorante',
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
        changeProfile(index) {
            this.counter = index
        },
        deleteMessage(i, j) {
            this.contacts[i].messages.splice(j, 1)
        },
        convertData() {
            for(let i = 0; i < this.contacts.length; i++) {
                for(let j = 0; j < this.contacts[i].messages.length; j++) {
                    this.ora = luxon.DateTime.fromISO(this.contacts[i].messages[j].date).toFormat('dd/MM/yyyy HH:mm:ss')
                    this.contacts[i].messages[j].date = this.ora;
                }
            }
        },
        sendNewMessage(i){
            this.ora = luxon.DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss')
            this.newMessage.date = this.ora
            this.newMessage.status = 'sent'
            this.contacts[i].messages.push({...this.newMessage})
            this.newMessage.date = ''
            this.newMessage.message = ''
            this.newMessage.status = ''
        },
        search() { // RICERCA SOLUZIONE 1// RICERCA SOLUZIONE 1// RICERCA SOLUZIONE 1// RICERCA SOLUZIONE 1// RICERCA SOLUZIONE 1
            this.contacts.forEach(search => {
                if (search.name.toLowerCase().includes(this.cerca.toLowerCase())) {
                    search.visible = true
                } else {
                    search.visible = false
                }
            });
        }
    },
    created() {
        this.convertData()
    }
})

const audio1 = new Audio('../audio/1.mp3')
const audio2 = new Audio('../audio/2.mp3')

const app = new Vue({
    el: '#app-whats',
    data:{
        user: {
            name: 'Paolo C.',
            avatar: '_my'
        },
        audio1sent: false,
        audio2sent: false,
        dark: false,
        goChat: null,
        counter: 0,
        cerca: '',
        idMessage: 0,
        boolOnline: false,
        attesaRisposta: false,
        menuDelete: false,
        menuNewUser: false,
        contacts: [
            {
                name: 'Michele',
                avatar: 'avatar_1',
                visible: true,
                lastMessage: 'gg/dd/yyyy',
                newMessage: {
                        date: '',
                        message: '',
                        sent: '',
                        visibleDelete: false,
                        idMessage: 0
                    },
                messages: [
                    {
                        date: '2020-01-10T10:02:55',
                        message: 'Hai portato a spasso il cane?',
                        sent: true,
                        visibleDelete: false,
                    },
                    {
                        date: '2020-01-10T10:05:32',
                        message: 'Ricordati di stendere i panni',
                        sent: true,
                        visibleDelete: false,
                    },
                    {
                        date: '2020-01-10T10:06:10',
                        message: 'Tutto fatto!',
                        sent: false,
                        visibleDelete: false,
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: 'avatar_2',
                visible: true,
                lastMessage: 'gg/dd/yyyy',
                newMessage: {
                        date: '',
                        message: '',
                        sent: '',
                        visibleDelete: false,
                        idMessage: 0
                    },
                messages: [
                    {
                        date: '2022-01-10T09:25:03',
                        message: 'Ciao Paolo, è iniziato il corso?',
                        sent: false,
                        visibleDelete: false,
                    },
                    {
                        date: '2022-01-10T09:27:00',
                        message: 'Ehi, ciao Fabio, si sto per iniziare!',
                        sent: true,
                        visibleDelete: false,
                    },
                    {
                        date: '2022-01-10T09:27:22',
                        message: 'Ci vediamo tra 6 mesi!',
                        sent: true,
                        visibleDelete: false,
                    },
                    {
                        date: '2022-01-10T09:29:00',
                        message: 'Dai mi raccomando, IMPEGNATI! 😉',
                        sent: false,
                        visibleDelete: false,
                    },
                ],
            },
            {
                name: 'Samuele',
                avatar: 'avatar_3',
                visible: true,
                lastMessage: 'gg/dd/yyyy',
                newMessage: {
                        date: '',
                        message: '',
                        sent: '',
                        visibleDelete: false,
                        idMessage: 0
                    },
                messages: [
                    {
                        date: '2022-01-10T11:02:55',
                        message: 'wè usciamo!',
                        sent: true,
                        visibleDelete: false,
                    },
                    {
                        date: '2022-01-10T11:05:00',
                        message: 'Seee usciamo", vuoi fare la badoria"',
                        sent: false,
                        visibleDelete: false,
                    },
                    {
                        date: '2022-01-10T11:10:22',
                        message: 'Dai vatti a vestire!',
                        sent: true,
                        visibleDelete: false,
                    },
                    {
                        date: '2022-01-10T11:12:00',
                        message: 'Ma dove andiamoooo? A fare che? Con chi? Perchè?',
                        sent: false,
                        visibleDelete: false,
                    },
                    {
                        date: '2022-01-10T11:12:22',
                        message: 'Ma ci andiamo a divertire!',
                        sent: true,
                        visibleDelete: false,
                    },
                    {
                        date: '2022-01-10T11:15:00',
                        message: 'Te vuoi fare la baldoriaaa?',
                        sent: false,
                        visibleDelete: false,
                    },
                    {
                        date: '2022-01-10T11:16:22',
                        message: 'Yeeeeeeaa!',
                        sent: true,
                        visibleDelete: false,
                    },
                    {
                        date: '2022-01-10T11:18:00',
                        message: 'Io.... NO, e non mi va! Anzi sai che è! Statt alla casa!',
                        sent: false,
                        visibleDelete: false,
                    },
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: 'avatar_4',
                visible: true,
                lastMessage: 'gg/dd/yyyy',
                newMessage: {
                        date: '',
                        message: '',
                        sent: '',
                        visibleDelete: false,
                        idMessage: 0
                    },
                messages: [
                    {
                        date: '2022-02-05T15:30:55',
                        message: 'Problemi con il compito?',
                        sent: true,
                        visibleDelete: false,
                    },
                    {
                        date: '2022-02-05T15:50:00',
                        message: 'Sfogati...!',
                        sent: true,
                        visibleDelete: false,
                    },
                    {
                        date: '2022-02-05T16:15:22',
                        message: 'Voglio morireeeee!',
                        sent: false,
                        visibleDelete: false,
                    }
                ],
            },
            {
                name: 'Alessandro U.',
                avatar: 'avatar_5',
                visible: true,
                lastMessage: 'gg/dd/yyyy',
                newMessage: {
                        date: '',
                        message: '',
                        sent: '',
                        visibleDelete: false,
                        idMessage: 0
                    },
                messages: [
                    {
                        date: '2022-03-10T15:30:55',
                        message: 'Quando vieni a Roma?',
                        sent: true,
                        visibleDelete: false,
                    },
                    {
                        date: '2022-03-10T15:50:00',
                        message: 'Andiamo a cena!',
                        sent: true,
                        visibleDelete: false,
                    },
                    {
                        date: '2022-03-10T16:15:22',
                        message: 'Appena mi libero un Week end salgo!',
                        sent: false,
                        visibleDelete: false,
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: 'avatar_6',
                visible: true,
                lastMessage: 'gg/dd/yyyy',
                newMessage: {
                        date: '',
                        message: '',
                        sent: '',
                        visibleDelete: false,
                        idMessage: 0
                    },
                messages: [
                    {
                        date: '2022-02-14T15:30:55',
                        message: 'Ciao Claudia, mi serve aiuto!',
                        sent: true,
                        visibleDelete: false,
                    },
                    {
                        date: '2022-02-14T15:50:00',
                        message: 'Conosci una bravo?',
                        sent: true,
                        visibleDelete: false,
                    },
                    {
                        date: '2022-02-14T16:15:22',
                        message: 'www.unobravo.it',
                        sent: false,
                        visibleDelete: false,
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: 'avatar_7',
                visible: true,
                lastMessage: 'gg/dd/yyyy',
                newMessage: {
                        date: '',
                        message: '',
                        sent: '',
                        visibleDelete: false,
                        idMessage: 0
                    },
                messages: [
                    {
                        date: '2022-02-18T15:30:55',
                        message: 'Fede volevo dirti che il corso è 🔝',
                        sent: true,
                        visibleDelete: false,
                    },
                    {
                        date: '2022-02-18T15:50:00',
                        message: 'Appena puoi inscriviti!',
                        sent: true,
                        visibleDelete: false,
                    },
                    {
                        date: '2022-02-18T16:15:22',
                        message: 'Inizio con la prossima classe!',
                        sent: false,
                        visibleDelete: false,
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: 'avatar_8',
                visible: true,
                lastMessage: 'gg/dd/yyyy',
                newMessage: {
                        date: '',
                        message: '',
                        sent: '',
                        visibleDelete: false,
                        idNewMessage: null
                    },
                messages: [
                    {
                        date: '2022-03-15T08:30:55',
                        message: 'Davideeee! mi servono le Orate!',
                        sent: true,
                        visibleDelete: false,
                    },
                    {
                        date: '2022-03-15T08:31:00',
                        message: 'Sei andato a pesca stanotte, si??? 🎣',
                        sent: true,
                        visibleDelete: false,
                    },
                    {
                        date: '2022-03-15T08:33:00',
                        message: 'Alle 10:00 sono al ristorante',
                        sent: false,
                        visibleDelete: false,
                    }
                ],
            },
        ],
        messageRandom : [
            'Ok, va bene!',
            'Scusa inizio il corso, ci sentiamo dopo!',
            'Chiamami, ci capiamo meglio!',
            'Mi dispiace, ho da fare! ci aggiorniamo…',
            'Ci penso io, non ti preoccupare!',
            'Guarda non so che dirti!',
            'Forse hai sbagliato chat!',
            'Vue js è stupendo!',
            'Vienimi a prendere!',
        ],
        newUser: 
        {
            name: '',
            avatar: '',
            visible: true,
            lastMessage: 'gg/dd/yyyy',
            newMessage: {
                date: '',
                message: '',
                sent: true,
                visibleDelete: false,
                idMessage: 100
            },
        messages: [],
        }
    },
    methods:{
        addNewUser() {
            if (this.newUser.name != '' &&this.newUser.newMessage.message != ''){
                this.newUser.avatar = this.getRandomInteger(1, 4)
                this.newUser.newMessage.date = luxon.DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss')
                this.newUser.lastMessage = this.newUser.newMessage.date
                this.newUser.newMessage.idMessage += 10
                this.newUser.messages.push({...this.newUser.newMessage})
                this.contacts.push({...this.newUser})
                this.newUser.name = ''
                this.newUser.avatar = ''
                this.newUser.lastMessage = ''
                this.newUser.newMessage.message = ''
                this.menuNewUser = false

                this.received(this.counter)
            }
        },

        changeProfile(i) {
            this.counter = i
            this.contacts[i].lastMessage =  this.contacts[i].messages[this.contacts[i].messages.length - 1].date
            setTimeout(() => {
                this.scrollToEnd()
            }, 1);

            this.goChat = 0

            this.asideToMain()

        },

        asideToMain() {

            const eleAside = document.querySelector('.aside')
            const eleMain = document.querySelector('main')
            eleMain.classList.toggle('none')
            eleAside.classList.toggle('none')
        },

        isMobile() {
            if(window.innerWidth < 670) {
                this.goChat = 0
            }
        },

        deleteMessage(i, j) {
            this.contacts[i].messages[j].message = 'Messaggio eliminato'   
        },

        audioPlay(nAudio) {
            nAudio.play()
        },

        sendNewMessage(i){
            if(this.contacts[this.counter].newMessage.message != '') {
                this.contacts[this.counter].newMessage.date = luxon.DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss')
                this.contacts[this.counter].newMessage.idMessage++
                this.contacts[this.counter].newMessage.sent = true
                this.contacts[this.counter].messages.push({...this.contacts[this.counter].newMessage})
                this.contacts[this.counter].newMessage.message = ''
                this.contacts[this.counter].newMessage.sent = ''


                setTimeout(() => {
                    this.scrollToEnd()
                }, 1);

                this.attesaRisposta = true
                this.received(this.counter)
            }
        },

        received(i) {
            setTimeout(() => {
                this.attesaRisposta = false
                this.contacts[i].newMessage.date = luxon.DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss')
                this.contacts[i].lastSeen = this.contacts[i].newMessage.date
                this.contacts[i].newMessage.message = this.messageRandom[this.getRandomInteger(0, this.messageRandom.length - 1)]
                this.contacts[i].newMessage.message.sent = false
                this.contacts[i].newMessage.idMessage++
                this.contacts[i].messages.push({...this.contacts[i].newMessage})
                this.contacts[i].newMessage.message = ''
                this.contacts[i].newMessage.sent = ''
                this.contacts[i].lastMessage =  this.contacts[i].messages[this.contacts[i].messages.length - 1].date

                this.boolOnline = true
                this.online()

                if(i == this.counter) {
                    this.audioPlay(audio1)
                } else {
                    this.audioPlay(audio2)
                }

                setTimeout(() => {
                    this.scrollToEnd()
                }, 1);

            }, 1500);
        },

        online() {
            setTimeout(() => {
                this.boolOnline = false
            }, 2000);
        },

        search() {
            this.contacts.forEach(search => {
                if (search.name.toLowerCase().includes(this.cerca.toLowerCase())) {
                    search.visible = true
                } else {
                    search.visible = false
                }
            });
        },

        getId(i, j) {
            for(i = 0; i < this.contacts.length; i++) {
                for(j = 0; j < this.contacts[i].messages.length; j++) {
                    this.idMessage = i + '_' + j
                    this.contacts[i].messages[j].idMessage = this.idMessage
                }
            }   
        },

        getRandomInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1) ) + min;
        },

        convertData() {
            for(let i = 0; i < this.contacts.length; i++) {
                for(let j = 0; j < this.contacts[i].messages.length; j++) {
                    this.ora = luxon.DateTime.fromISO(this.contacts[i].messages[j].date).toFormat('dd/MM/yyyy HH:mm:ss')
                    this.contacts[i].messages[j].date = this.ora;
                }
            }           
        },

        deleteChat(i) {
            this.contacts[i].messages.splice(0, this.contacts[i].messages.length)
        },

        deleteUser(i) {
            this.contacts.splice(i, 1)
            this.menuDelete = false
        },

        scrollToEnd() {
            let container = document.querySelector('.content-conversation')
            let scrollHeight = container.scrollHeight + 1
            container.scrollTop = scrollHeight
        }

    },
    created() {
        this.convertData()
        this.getId()
        this.isMobile()
    },

})

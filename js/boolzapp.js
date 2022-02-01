/*
MILESTONE DI OGGI

Milestone 1
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

Milestone 2
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato

Consigli e raccomandazioni:
Spendiamo un po' di tempo per quel che riguarda l'analisi del layout prima di buttarci subito sul codice
Cerchiamo di mettere in pratica tutte le best practice imparate a partire dalla centralizzazione.
Se lo ritenete potete utilizzare Bootstrap nella misura che ritenete opportuna
Completiamo la grafica prima di passare alla logica di vue

Note:
All'interno della cartella trovate le immagini che vi servono e la struttura dati necessaria per la milestone di oggi. Per la struttura dati, ritagliate l'oggetto fornito e inseritelo nel vostro data di Vue!
Sono a disposizione per i ticket fino alle 13 e nel pomeriggio i tutor saranno disponibili dallle 15 alle 18
NON MODIFICATE LA STRUTTURA DATI FORNITA
*/

console.log('Vue ok', Vue);
Vue.config.devtools = true
dayjs.extend(dayjs_plugin_customParseFormat);

const app = new Vue({
    el: '#root',
    data: {
        myMessage: '',
        currentContact: 0,
        time: dayjs().format('DD/MM/YYYY HH:MM:ss'),
        user: {
            name: 'Nome utente',
            avatar: '_io'
        },
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                    date: '28/03/2020 10:10:40',
                    text: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    text: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    text: 'Ah scusa!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
                ],
            },

        ],

    },
    methods: {
        selectContact(index) {
            this.currentContact = index;
            console.log(this.currentContact)
        },
        isConfirmed(index) {
            return index === this.currentContact;

        },

    },

});
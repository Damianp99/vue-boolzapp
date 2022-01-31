/*
MILESTONE DI OGGI

Milestone 1
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

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

const app = new Vue({
    el: '#root',
    data: {
        user: {
            name: 'Nome Utente',
            avatar: '_io'
        },
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
            },
            {
                name: 'Fabio',
                avatar: '_2',
            },
            {
                name: 'Samuele',
                avatar: '_3',
            },
            {
                name: 'Luisa',
                avatar: '_4',
            },
        ]
    }
});
/*
Creare uno slider di immagini
usate immagini delle stesse dimensioni 

Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider 

Inoltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera.

Utiliziamo una classe first e last per capire quali sono la prima e ultima immagine dello slider 

Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider

Bonus: Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
*/
const app = new Vue(
    {
        el: '#app',

        data: {
            timer: null,
            characters: [
                "img/foto1.jpg",
                "img/foto2.jpg",
                "img/foto3.jpg",
                "img/foto4.jpg",
                "img/foto5.jpg"
            ],
            activeImage: 0,
        },


        methods: {

        /**
         * @param {number} direction - +1 se vogliamo andare avanti, -1 se indietro.
        */
            changeImg(direction, changedByAI) {
                let newIndex = this.activeImage + direction;

                if (newIndex < 0) {
                    /*
                    Se indice < di 0, facciamo andare l'utente all'ultima immagine della lista
                    */
                    newIndex = this.characters.length - 1;

                } else if (newIndex > (this.characters.length - 1)) {
                    /*
                    Se l'indice è già l'ultimo della lista delle immagini, facciamo andare l'utente alla prima immagine
                    */
                    newIndex = 0;
                }

                this.activeImage = newIndex;
            },

            onDotClick(clickedIndex) {
                this.activeImage = clickedIndex;
            },

            play() {
                clearInterval(this.timer);

                this.timer = setInterval(() => {
                    this.changeImg(+1, true);
                }, 5000);
            },

            pause() {
                clearInterval(this.timer);
            }

        },
        mounted() {
            const elementoHtml = document.querySelector(".wrapper-flex");
    
            elementoHtml.focus();
    
            this.play();
        }
    }
)

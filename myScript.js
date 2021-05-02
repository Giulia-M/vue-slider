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
            activeImage: 2,
           
        },
        mounted: function () {
            this.startSlider()
        },

        methods: {
            startSlider: function () {
               this.timer = setInterval(this.next, 3000)

            },

            currentImg: function () {
                return this.characters[Math.abs(this.activeImage) % this.characters.length];
            },
            next: function () {
                this.activeImage += 1;
                if(this.activeImage > this.characters.length -1 ) this.activeImage = 0
            },
            prev: function () {
                this.activeImage -= 1;
                if(this.activeImage < this.characters.length -1 ) this.activeImage = 0 
            },

            jump(index) {
               
                this.activeImage = index
            }

        }
    }
)

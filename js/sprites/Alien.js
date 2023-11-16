class Alien {
    constructor (id) {
        this.id = id
        this.node = document.querySelector("#"+this.id)
        let nodeScore = document.getElementById("input-score")
        let nodeTemps = document.getElementById("input-timer")
        this.compteur = 0
        this.gameOver = false
        
        this.x = 500
        this.y = 400

        this.node.style.left = this.x + "px"
        this.node.style.top = this.y + "px"

        this.speed = -2

        this.node.onclick = () => {
            if (!this.gameOver) { 
                this.x = 100 + Math.random() * (window.innerWidth - 200)
                this.y = 400
                this.compteur++
                nodeScore.value = this.compteur
            }
        }


        let countdown = 10;
        nodeTemps.value = countdown;

        const timerInterval = setInterval(() => {
            countdown--;
            if (countdown >= 0) {
                nodeTemps.value = countdown
            } else {
                clearInterval(timerInterval)
                this.gameOver = true
            }
        }, 1000);


    }

    tick () {
        if (!this.gameOver) { 
            this.y += this.speed;
            
            if (this.y < 0) {
                this.y = 0; 
            }

            this.node.style.left = this.x + "px";
            this.node.style.top = this.y + "px";
        }
    }
}
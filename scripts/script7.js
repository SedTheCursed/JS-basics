class AdoBot {
    react(msg) {
        if (/\?$/.test(msg)) {
            return "Ouais Ouais..."
        } else if (/^[^a-z]+$/.test(msg)) {
            return "Pwa, calme-toi..."
        } else if (/[fF]ort?nite/.test(msg)) {
            return "on s' fait une partie soum-soum ?"
        } else if (msg === ""){
            return "t'es en PLS ?"
        } else {
            return "balek."
        }
    }
    
    chat() {
        do {
            var msg = prompt("Kes-tu m'veux encore ?")
            console.log(this.react(msg))  
        } while (msg)
    }
}
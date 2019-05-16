class AdoBot {
    react(msg) {
        //if it ends with a question mark, it's a question
        if (/\?$/.test(msg)) {
            return "Ouais Ouais..."
        //if it doesn't contain lowercase letters, then it's shouting with only uppercase letters.
        } else if (/^[^a-z]+$/.test(msg)) {
            return "Pwa, calme-toi..."
        //If it contains Fortnite, fortnite, Fornite, fornite
        } else if (/[fF]ort?nite/.test(msg)) {
            return "on s' fait une partie soum-soum ?"
        //if it's an empty string
        } else if (msg === ""){
            return "t'es en PLS ?"
        } else {
            return "balek."
        }
    }
    
    chat() {
        return `<p>> ${this.react(prompt("Kes-tu m'veux encore ?"))}</p>`;
    }
}
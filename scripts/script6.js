class Genome {
    constructor(arn) {
        this.sequence = this.sequencedARN(arn);
        this.proteins = this.ARNtoProteins();
    }

    sequencedARN(arn) {
        let sequence = ""

        for(let i=0, l = arn.length/3; i < l; i++) {
            sequence += this.subSequence(arn, i)
            sequence += (i !== l-1) ? "-" : "";
        }
        
        return sequence
    }

    subSequence(arn, brick) {
        return arn.substr(brick*3, 3)
    }

    ARNtoProteins() {
        return this.sequence
            .split("-")
            .map (subsequence => {
                switch(subsequence) {
                    case "UCU":
                    case "UCC":
                    case "UCA":
                    case "UCG":
                    case "AGU":
                    case "AGC":
                        return "Sérine";
                    case "CCU":
                    case "CCC":
                    case "CCA":
                    case "CCG":
                        return "Proline";
                    case "UUA":
                    case "UUG":
                        return "Leucine";
                    case "UUU":
                    case "UUC":
                        return "Phénylalanine";
                    case "CGU":
                    case "CGC":
                    case "CGA":
                    case "CGG":
                    case "AGA":
                    case "AGG":
                        return "Arginine";
                    case "UAU":
                    case "UAC":
                        return "Tyrosine";
                    default :
                        return ""
                }
            })
            .join("-")
    }

    presentation() {
        return `<p>> Le génome ${this.sequence} correspond à la chaine de protéines suivante&nbsp;: ${this.proteins}</p>`
    }
}

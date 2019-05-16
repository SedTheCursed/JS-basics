function pyramid() {
    let floors = 0;
    let pyramid = "<table>"

    while (!floors) { floors = parseInt(prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"))}

    for (
        let bricks = 1, spaces = floors - bricks;
        bricks <= floors;
        bricks++, spaces--) {
        let floor = "<tr>";

        for (i = 1; i <= spaces; i++) {floor += "<td></td>"};
        for (i = 1; i <= bricks; i++) {floor += "<td>#</td>"};
        
        pyramid += `${floor}</tr>`;
    }

    return pyramid + "</table>"
}
function pyramide() {
    let floors = 0;

    while (!floors) { floors = parseInt(prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"))}

    for (
        let bricks = 1, spaces = floors - bricks;
        bricks <= floors;
        bricks++, spaces--) {
        let floor = "";

        for (i = 1; i <= spaces; i++) {floor += " "};
        for (i = 1; i <= bricks; i++) {floor += "#"};
        
        console.log(floor);
    }
}
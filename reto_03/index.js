const fs = require("fs");

try {
    const data = fs.readFileSync("./reto_03/encryptation.txt", "utf8").toLowerCase();
    const splittedData = data.replaceAll(':', '').split('\n');
    const invalidKeys = [];

    function letterCount(letter, str) {
        let count = 0;

        str.split('').forEach(ch => ch === letter ? count++ : null);

        return count;
    }

    splittedData.forEach(element => {
        const [rep, letter, secretKey] = element.split(' ');
        const appearences = letterCount(letter, secretKey);

        const [minRep, maxRep] = rep.split('.');

        if (appearences < parseInt(minRep) || appearences > parseInt(maxRep)) {
            invalidKeys.push(element);
        }
    });

    console.log('invalid key pos 42', invalidKeys[41]);
    console.log('invalid key pos 13', invalidKeys[12]);

} catch (e) {
    console.error(e);
}

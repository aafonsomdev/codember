const fs = require("fs");

try {
    const data = fs.readFileSync("./reto_01/message_01.txt", "utf8").toLowerCase();
    const splittedData = data.split(" ");
    const keyValueData = {};
    const orderData = [];

    splittedData.forEach((item) => {
        if (keyValueData[item]) {
            keyValueData[item] += 1;
        } else {
            keyValueData[item] = 1;
        }
        if (!orderData.some((x) => item === x)) {
            orderData.push(item);
        }
    });

    // console.log(keyValueData);
    // console.log(orderData.length);
    let stringifyCount = "";
    Object.entries(keyValueData).forEach((item) => {
        stringifyCount += `${item[0]}${item[1]}`;
    });

    fs.writeFileSync("./reto_01/output_01.txt", stringifyCount);
} catch (e) {
    console.error(e);
}

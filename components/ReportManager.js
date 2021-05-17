const XlsxPopulate = require('xlsx-populate');

const getFilePostFix = function () {
    const date = new Date();
    return date.getFullYear() + "." +
        (date.getMonth() + 1) + "." +
        date.getDate() + "." +
        date.getHours() + "_" +
        date.getMinutes() + "_" +
        date.getSeconds()
}

const cellLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
                        'U', 'V', 'W', 'X', 'Y', 'Z', 'AA', 'AB', 'AC', 'AD', 'AE', 'AF', 'AG', 'AH', 'AI', 'AK', 'AL',
                        'AM', 'AN', 'AO', 'AP', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AV', 'AW', 'AX', 'AY', 'AZ']


class ReportManager {

    constructor() {
        this.filename = `./storage/report_${getFilePostFix()}.xlsx`;

        XlsxPopulate.fromBlankAsync().then(workbook => {
            return workbook.toFileAsync(filename, {password: "secret"});
        });
    }

    parseData(data) {
        XlsxPopulate.fromBlankAsync()
            .then(workbook => {
                data.map((item, idx) => {
                    let letterIdx = 0;
                    for (const [key, value] of Object.entries(item)) {
                        workbook.sheet("Sheet1").cell(`${cellLetters[letterIdx]}${(idx + 1)}`).value(value);
                        letterIdx++;
                    }
                });

                workbook.toFileAsync(this.filename, {password: "secret"});
            });
    }


}

module.exports = ReportManager;
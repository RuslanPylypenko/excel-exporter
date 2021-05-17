const XlsxPopulate = require('xlsx-populate');

const getFilePostFix = function (){
    const date = new Date();
    return date.getFullYear() + "." +
        (date.getMonth()+1) + "." +
        date.getDate() + "." +
        date.getHours() + "_" +
        date.getMinutes() + "_" +
        date.getSeconds()
}

const cellLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'K', 'L']


class ReportManager {

    constructor(type) {
        this.filename = `./${type}_${getFilePostFix()}.xlsx`;

        XlsxPopulate.fromBlankAsync().then(workbook => {
            return workbook.toFileAsync(filename, {password: "secret"});
        });
    }

    parseData(data) {
        XlsxPopulate.fromFileAsync(this.filename)
            .then(workbook => {

                data.map((item, idx) => {
                    workbook.sheet("Sheet1").cell("A1").value();
                })

                const value = workbook.sheet("Sheet1").cell("A1").value();

                // Log the value.
                console.log(value);
            });

        // XlsxPopulate.fromBlankAsync().then(workbook => {
        //     body.map((report, index) => {
        //         index+=1;
        //         workbook.sheet("Sheet1").cell(`A${index}`).value(report.surname);
        //         workbook.sheet("Sheet1").cell(`B${index}`).value(report.name);
        //         workbook.sheet("Sheet1").cell(`C${index}`).value(report.patronymic);
        //         workbook.sheet("Sheet1").cell(`D${index}`).value(report.passport);
        //         workbook.sheet("Sheet1").cell(`E${index}`).value(report.phone);
        //         workbook.sheet("Sheet1").cell(`F${index}`).value(report.email);
        //         workbook.sheet("Sheet1").cell(`G${index}`).value(report.projects_name);
        //     })
        //
        //  return   workbook.toFileAsync("./test.xlsx", { password: "secret" });
        // });
    }


}

module.exports = ReportManager;
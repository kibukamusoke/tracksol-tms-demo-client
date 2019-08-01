let jsonminify = require('jsonminify');

module.exports = {

    stockTakeConfiguration: () => {
        let fileType = 7;
        let fileId = 1;
        let otherHeaders = '';
        let fileName = 'STTAKE.CFG';

        let fileData = {
            id: "stockTake",
            form: {
                title: 'Stock Take',
                genvar: 1,
                layout: [
                    {
                        ctrl: 'input',
                        id: 'storeCode',
                        label: 'Store',
                        type: 'lbox',
                        def: {
                            t: "N/A",
                            k: "-1"
                        },
                        dsrc: "6,1,STORES.LST",
                        nline: 3
                    },
                    {
                        ctrl: "input",
                        id: "listref",
                        label: "Stock Selection",
                        type: "listform",
                        minlen: 1,
                        maxlen: 0,
                        keyin: "stock",
                        title: "Please scan or key in item",
                        form: {
                            title: "Scan, key in or select from list",
                            genvar: 1,
                            layout: [
                                {// start detail
                                    ctrl: 'input',
                                    id: 'stockCode',
                                    label: 'Stock Code',
                                    type: 'lbox',
                                    dsrc: "6,1,STOCK.LST",
                                    nline: 3
                                },// end detail
                                {
                                    ctrl: 'input',
                                    id: 'operation',
                                    label: 'Operation',
                                    type: 'lbox',
                                    def: {
                                        t: "N/A",
                                        k: "-1"
                                    },
                                    dsrc: "6,1,OP.LST",
                                    nline: 3
                                },
                                {
                                    ctrl: "input",
                                    id: "quantity",
                                    label: "Quantity",
                                    type: "number",
                                    minlen: 1,
                                    maxlen: 255,
                                    keyin: null,
                                    title: null
                                },
                                {
                                    ctrl: "input",
                                    id: "remark",
                                    label: "Remark",
                                    type: "string",
                                    minlen: 0,
                                    maxlen: 255,
                                    keyin: null,
                                    title: null
                                }
                            ]
                        }
                    }
                ]
            }
        };

        fileData = jsonminify(JSON.stringify(fileData));
        let fdData = 'T=' + fileType.toString(16) + '\n';
        fdData += 'I=' + fileId.toString(16) + '\n';
        fdData += 'R=1\n';
        fdData += 'L=' + fileName + '\n';
        fdData += 'M=1\n';
        fdData += otherHeaders;
        fdData += 'D=\n';
        fdData += fileData + '\n';

        return 'B=' + fdData.length + '\n' + fdData;
    }

};

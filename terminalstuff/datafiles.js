let Promise = require('bluebird');

module.exports = {

    storesDataFile: () => {
        return new Promise((resolve, reject) => {
            let fileType = 6;
            let fileId = 1;
            let fileName = 'STORES.LST';
            let otherHeaders = 'O_EN=Select Store\n';
            otherHeaders += 'SEARCH_COL=3;6,1,STORES.LST;2,1\n';
            // specify the column containing the line description
            otherHeaders += 'COL_DESC=3\n';
            // specify the column containing the code :: for scanning and searching
            otherHeaders += 'COL_CODE=2\n';
            // specify the column containing the identity value
            otherHeaders += 'COL_IDX=1\n';
            // a random number to force terminal to update local file.
            otherHeaders += 'IDX_SESS_ID=' + Math.ceil(Math.random() * 1000000).toString(16) + '\n';

            let stores = require('./sampleData/stores');
            let completeDataFile = 'T=' + fileType.toString(16) + '\n';
            completeDataFile += 'I=' + fileId.toString(16) + '\n';
            completeDataFile += 'R=1\n';
            completeDataFile += 'L=' + fileName + '\n';
            completeDataFile += 'M=1\n';
            completeDataFile += otherHeaders;
            completeDataFile += 'D=\n';

            // if no data in file, return a the file anyway without the item list ::
            if (!(stores && stores.length > 0)) {
                resolve('B=' + completeDataFile.length + '\n' + completeDataFile);
                return;
            }

            // otherwise append data and resolve ::
            let fileData = '';
            stores.forEach((store, index) => {
                fileData += store.id + '|' + store.code + '|' + store.name + '|' + store.id + '|\n';
                if (stores.length === index + 1) { //finally
                    completeDataFile += fileData + '\n';
                    resolve('B=' + completeDataFile.length + '\n' + completeDataFile);
                }
            });
        });
    },

    stockDataFile: () => {
        return new Promise((resolve, reject) => {
            let fileType = 6;
            let fileId = 1;
            let fileName = 'STOCK.LST';
            let otherHeaders = 'O_EN=Select stock Item\n';
            otherHeaders += 'SEARCH_COL=3;6,1,STOCK.LST;2,1\n';
            // specify the column containing the line description
            otherHeaders += 'COL_DESC=3\n';
            // specify the column containing the code :: for scanning and searching
            otherHeaders += 'COL_CODE=2\n';
            // specify the column containing the identity value
            otherHeaders += 'COL_IDX=1\n';
            // a random number to force terminal to update local file.
            otherHeaders += 'IDX_SESS_ID=' + Math.ceil(Math.random() * 1000000).toString(16) + '\n';

            let stockItems = require('./sampleData/stock');
            let completeDataFile = 'T=' + fileType.toString(16) + '\n';
            completeDataFile += 'I=' + fileId.toString(16) + '\n';
            completeDataFile += 'R=1\n';
            completeDataFile += 'L=' + fileName + '\n';
            completeDataFile += 'M=1\n';
            completeDataFile += otherHeaders;
            completeDataFile += 'D=\n';

            // if no data in file, return a the file anyway without the item list ::
            if (!(stockItems && stockItems.length > 0)) {
                resolve('B=' + completeDataFile.length + '\n' + completeDataFile);
                return;
            }

            // otherwise append data and resolve ::
            let fileData = '';
            stockItems.forEach((stockItem, index) => {
                fileData += stockItem.id + '|' + stockItem.code + '|' + stockItem.name + '|' + stockItem.id + '|\n';
                if (stockItems.length === index + 1) { //finally
                    completeDataFile += fileData + '\n';
                    resolve('B=' + completeDataFile.length + '\n' + completeDataFile);
                }
            });
        });
    },
    StockoperationsDataFile: () => {
        return new Promise((resolve, reject) => {
            let fileType = 6;
            let fileId = 1;
            let fileName = 'OP.LST';
            let otherHeaders = 'O_EN=Select operation\n';
            otherHeaders += 'SEARCH_COL=3;6,1,OP.LST;2,1\n';
            // specify the column containing the line description
            otherHeaders += 'COL_DESC=3\n';
            // specify the column containing the code :: for scanning and searching
            otherHeaders += 'COL_CODE=2\n';
            // specify the column containing the identity value
            otherHeaders += 'COL_IDX=1\n';
            // a random number to force terminal to update local file.
            otherHeaders += 'IDX_SESS_ID=' + Math.ceil(Math.random() * 1000000).toString(16) + '\n';

            let operations = require('./sampleData/stockOperations');
            let completeDataFile = 'T=' + fileType.toString(16) + '\n';
            completeDataFile += 'I=' + fileId.toString(16) + '\n';
            completeDataFile += 'R=1\n';
            completeDataFile += 'L=' + fileName + '\n';
            completeDataFile += 'M=1\n';
            completeDataFile += otherHeaders;
            completeDataFile += 'D=\n';

            // if no data in file, return a the file anyway without the item list ::
            if (!(operations && operations.length > 0)) {
                resolve('B=' + completeDataFile.length + '\n' + completeDataFile);
                return;
            }

            // otherwise append data and resolve ::
            let fileData = '';
            operations.forEach((operation, index) => {
                fileData += operation.id + '|' + operation.code + '|' + operation.name + '|' + operation.id + '|\n';
                if (operations.length === index + 1) { //finally
                    completeDataFile += fileData + '\n';
                    resolve('B=' + completeDataFile.length + '\n' + completeDataFile);
                }
            });
        });
    },

};
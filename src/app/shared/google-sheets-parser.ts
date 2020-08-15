import { SheetData } from './google-sheets.service';

export const parseSheetsData = <T>(rawData: SheetData): T[] => {
    const entries = new Map<string, T>();

    const headers = parseHeaders(rawData);

    rawData.feed.entry.forEach(cell => {
        const row = cell.gs$cell.row;
        const col = cell.gs$cell.col;
        const value = cell.gs$cell.inputValue;
        // console.log(`${row}:${col} = ${value}`);

        if (row === "1") {
            return;
        }

        if (!entries.has(row)) {
            entries.set(row, {} as T);
        }

        const header = headers.get(col);

        setHeaderBasedData(value, header, entries.get(row));
    });

    let keys = [...entries.keys()];
    let sortedKeys = keys.sort();

    let entriesArray = [];
    sortedKeys.forEach(key => {
        entriesArray.push(entries.get(key));
    });


    // console.log(headers);
    // console.log(entries);
    // console.log(entriesArray);
    return entriesArray;
};

const parseHeaders = (rawData: SheetData): Map<string, string> => {
    const headers = new Map<string, string>();

    const rawHeaders = rawData.feed.entry.filter(cell => {
        return cell.gs$cell.row === "1";
    });

    rawHeaders.forEach(rawHeader => {
        headers.set(rawHeader.gs$cell.col, rawHeader.gs$cell.inputValue);
    });

    return headers;
};

const setHeaderBasedData = <T>(value: string, header: string, obj: any): any => {
    const keyPath = header.split('_');

    var temp = obj;
    for(var i = 0; i < keyPath.length; i++) {
        
        if (i === keyPath.length - 1) {
            temp[keyPath[i]] = value;
        } else if (temp.hasOwnProperty(keyPath[i])) {
            temp = temp[keyPath[i]];
        }
        
        else {
            temp = temp[keyPath[i]] = {};
        }
    }

    return obj;
};
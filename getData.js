const getSheetData = async ({ sheetID, sheetName, query }) => {
  const base = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
  const url = `${base}&sheet=${encodeURIComponent(
    sheetName
  )}&tq=${encodeURIComponent(query)}&headers=1`;

  const response = await fetch(url).then((res) => res.text());

  function responseToObjects(res) {
    // credit to Laurence Svekis https://www.udemy.com/course/sheet-data-ajax/
    const jsData = JSON.parse(res.substring(47).slice(0, -2));
    let data = [];
    const columns = jsData.table.cols;
    const rows = jsData.table.rows;
    let rowObject;
    let cellData;
    let propName;
    for (let r = 0, rowMax = rows.length; r < rowMax; r++) {
      rowObject = {};
      for (let c = 0, colMax = columns.length; c < colMax; c++) {
        cellData = rows[r]["c"][c];
        propName = columns[c].label;
        if (cellData === null) {
          rowObject[propName] = "";
        } else if (
          typeof cellData["v"] == "string" &&
          cellData["v"].startsWith("Date")
        ) {
          const [year, month, day] = cellData["v"]
            .match("\\(.*\\)")[0]
            .slice(1, -1)
            .split(",");
          rowObject[propName] = new Date(year, month - 1, day);
        } else {
          rowObject[propName] = cellData["v"];
        }
      }
      data.push(rowObject);
    }
    return data;
  }
  return responseToObjects(response);
};

export const getData = (callback) => {
  const sheetID = "1Kr8GDsjpjb5V6oPt2KfASm6LSR2j2WAzHchLLkCQvw8";
  const sheetName = "locales-bailables";
  const query = "SELECT A, B, C, D, E, F, G, H, I, J, K, L, M, N, O";
  getSheetData({ sheetID, sheetName, query }).then((data) => {
    callback(data);
  });
};

/**
 * @function jsonToTable
 * @description Converts an array of JSON objects into a responsive and styled HTML table
 * @param {Array} jsonData - Array of objects to convert into a table
 * @returns {string} - HTML table string
 */
function jsonToTable(jsonData) {
    if (!Array.isArray(jsonData)) {
      throw new Error("Input must be an array of objects");
    }
  
    if (jsonData.length === 0) return "<table></table>";
  
    const headers = Object.keys(jsonData[0]);
  
    // Inline CSS for styling
    let table = `
      <style>
        table.json-table {
          border-collapse: collapse;
          width: 100%;
          font-family: Arial, sans-serif;
          margin: 10px 0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        table.json-table th {
          background: #6c63ff;
          color: #ffffff;
          padding: 10px;
          text-align: left;
        }
        table.json-table td {
          padding: 8px 10px;
          border: 1px solid #ddd;
        }
        table.json-table tr:nth-child(even) {
          background-color: #f9f9f9;
        }
        table.json-table tr:hover {
          background-color: #f1f1f1;
        }
      </style>
    `;
  
    // Create table header
    table += "<table class='json-table'><thead><tr>";
    headers.forEach(header => {
      table += `<th>${header}</th>`;
    });
    table += "</tr></thead>";
  
    // Create table body
    table += "<tbody>";
    jsonData.forEach(row => {
      table += "<tr>";
      headers.forEach(header => {
        table += `<td>${row[header] !== undefined ? row[header] : ""}</td>`;
      });
      table += "</tr>";
    });
    table += "</tbody></table>";
  
    return table;
  }
  
  module.exports = jsonToTable;
  
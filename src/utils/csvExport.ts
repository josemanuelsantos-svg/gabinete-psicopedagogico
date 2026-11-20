// Clean UTF-8 BOM CSV Export Utility for Excel (Spanish locale uses ';' separator)

function escapeCsvCell(value: unknown): string {
  if (value === null || value === undefined) return '';
  const str = String(value).replace(/\r?\n/g, ' ').trim();
  if (str.includes(';') || str.includes('"') || str.includes(',')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

export function downloadCsvFile(
  filename: string,
  headers: string[],
  rows: unknown[][]
): void {
  const headerLine = headers.map(escapeCsvCell).join(';');
  const bodyLines = rows.map(row => row.map(escapeCsvCell).join(';'));
  // UTF-8 BOM so Microsoft Excel preserves Spanish accents (á, é, í, ó, ú, ñ, ª)
  const csvContent = '\uFEFF' + [headerLine, ...bodyLines].join('\r\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', filename.endsWith('.csv') ? filename : `${filename}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

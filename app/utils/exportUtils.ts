/**
 * Utility functions for exporting transcripts to different formats
 */

interface TranscriptItem {
  timestamp: string;
  text: string;
}

/**
 * Exports transcripts as CSV file
 * Includes UTF-8 BOM for proper encoding in Excel
 */
export function exportAsCSV(transcripts: TranscriptItem[], filename: string = 'transcripts') {
  // Create CSV content
  const headers = ['Timestamp', 'Text'];
  const rows = transcripts.map(item => [
    item.timestamp,
    `"${item.text.replace(/"/g, '""')}"` // Escape quotes in CSV
  ]);
  
  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.join(','))
  ].join('\n');

  // Create blob and download
  const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', `${filename}_${new Date().toISOString().slice(0, 10)}.csv`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Exports transcripts as PDF via print dialog
 * Opens a new window with formatted HTML for printing
 */
export function exportAsPDF(
  transcripts: TranscriptItem[], 
  title: string, 
  confirmedTitle: string,
  dateLabel: string = 'Date',
  totalLabel: string = 'Total Transcripts'
): boolean {
  const printWindow = window.open('', '', 'width=800,height=600');
  if (!printWindow) {
    return false;
  }

  const currentDate = new Date().toLocaleDateString(undefined, { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  // Generate HTML content for PDF
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>${confirmedTitle} - ${currentDate}</title>
      <style>
        @page {
          margin: 2cm;
        }
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        h1 {
          color: #2196F3;
          border-bottom: 3px solid #2196F3;
          padding-bottom: 10px;
          margin-bottom: 30px;
          font-size: 24px;
        }
        .meta {
          color: #666;
          font-size: 13px;
          margin-bottom: 30px;
        }
        .transcript {
          margin-bottom: 25px;
          padding: 15px;
          border-left: 4px solid #2196F3;
          background-color: #f5f5f5;
          page-break-inside: avoid;
        }
        .timestamp {
          color: #2196F3;
          font-weight: 600;
          font-size: 13px;
          margin-bottom: 8px;
        }
        .text {
          font-size: 14px;
          line-height: 1.8;
        }
        @media print {
          body {
            padding: 0;
          }
        }
      </style>
    </head>
    <body>
      <h1>${confirmedTitle}</h1>
      <div class="meta">
        <strong>${dateLabel}:</strong> ${currentDate}<br>
        <strong>${totalLabel}:</strong> ${transcripts.length}
      </div>
      ${transcripts.map((item, index) => `
        <div class="transcript">
          <div class="timestamp">🕒 ${item.timestamp}</div>
          <div class="text">${item.text}</div>
        </div>
      `).join('')}
    </body>
    </html>
  `;

  printWindow.document.write(htmlContent);
  printWindow.document.close();
  
  // Wait for content to load, then print
  printWindow.onload = () => {
    printWindow.focus();
    printWindow.print();
    // Close window after printing (with a delay)
    setTimeout(() => {
      printWindow.close();
    }, 100);
  };

  return true;
}

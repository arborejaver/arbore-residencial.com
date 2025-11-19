const sheetName = 'Leads-Arbore-2025';
const scriptProp = PropertiesService.getScriptProperties();

function intialSetup() {
  const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  scriptProp.setProperty('key', activeSpreadsheet.getId());
}

function sendEmail(data) {
  const recipientEmail = 'arboreres@gmail.com'; // Reemplaza con la dirección de correo a la que quieres enviar los datos
  const subject = 'Arbore Residencial - Nueva Consulta';
  const message = 'Nueva consulta en formulario web:\n\n' + data;

  MailApp.sendEmail(recipientEmail, subject, message);
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    const doc = SpreadsheetApp.openById(scriptProp.getProperty('key'));
    const sheet = doc.getSheetByName(sheetName);

    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const nextRow = sheet.getLastRow() + 1;

    const newRow = headers.map(function (header) {
      return header === 'Date' ? new Date() : e.parameter[header];
    });

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

    // Enviar datos por correo electrónico
    sendEmail(newRow.join('\n'));

    // Devuelve solo el mensaje en el cuerpo de la respuesta
    return ContentService
      .createTextOutput('Información enviada correctamente')
      .setMimeType(ContentService.MimeType.TEXT);
  } catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
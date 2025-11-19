# Cambios en el Formulario - Integración con Google Sheet

## Resumen
Se ha actualizado el formulario de contacto en `index.html` para enviar los datos directamente a un Google Sheet en lugar de Salesforce.

## Archivos Modificados

### 1. **index.html** (actualizado)
- Formulario modificado para enviar datos a Google Sheet
- Formulario anterior de Salesforce comentado para referencia

### 2. **index-backup.html** (nuevo)
- Copia de seguridad del `index.html` original con el formulario de Salesforce

## Campos del Formulario

Los campos del formulario ahora coinciden con las columnas del Google Sheet:

| Campo HTML | Columna en Google Sheet | Descripción |
|------------|-------------------------|-------------|
| `Nombre` | Nombre | Nombre del usuario |
| `Apellido1` | Apellido1 | Apellido paterno |
| `Apellido2` | Apellido2 | Apellido materno |
| `Telefono` | Telefono | Número telefónico (10 dígitos) |
| `Email` | Email | Correo electrónico |
| `Ingresos` | Ingresos | Rango de ingresos mensuales |
| (automático) | Date | Fecha/hora de envío (agregado por Google Script) |

## Configuración de Google Sheet

### Script URL
```
https://script.google.com/macros/s/AKfycbwU29kfe9a6mTJqw-pxMhQ8n1-1KNvQ2pSbOPcR5NdKZZMxcunBMJrAdKMGImiNoKa9Wg/exec
```

### Script ID
```
AKfycbwU29kfe9a6mTJqw-pxMhQ8n1-1KNvQ2pSbOPcR5NdKZZMxcunBMJrAdKMGImiNoKa9Wg
```

### Nombre de la Hoja
```
Leads-Arbore-2025
```

## Funcionalidades Implementadas

1. **Envío asíncrono**: El formulario se envía sin recargar la página usando `fetch()`
2. **Validación de privacidad**: Verifica que el usuario acepte las políticas de privacidad
3. **Mensajes de estado**: 
   - Mensaje de éxito al enviar correctamente
   - Mensaje de error si falla el envío
   - Mensaje de advertencia si no se aceptan las políticas
4. **Retroalimentación visual**: 
   - El botón se deshabilita durante el envío
   - Cambia el texto a "Enviando..." mientras procesa
5. **Auto-reset**: El formulario se limpia automáticamente después de un envío exitoso
6. **Notificación por email**: El script de Google envía un correo a `arboreres@gmail.com` con cada registro

## Cambios Técnicos

### Formulario
- **Antes**: `action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST"`
- **Después**: `name="submit-to-google-sheet"` (envío manejado por JavaScript)

### Nombres de Campos
- **Antes**: `first_name`, `middle_name`, `last_name`, `phoneInput`, `email`, `00N3l00000Q7A54`
- **Después**: `Nombre`, `Apellido1`, `Apellido2`, `Telefono`, `Email`, `Ingresos`

### reCAPTCHA
- **Estado**: Temporalmente comentado (puede ser reactivado si es necesario)

## Código del Google Apps Script (Code.gs)

El script en Google está configurado para:
1. Recibir datos del formulario vía POST
2. Agregar automáticamente la fecha/hora
3. Guardar en la hoja "Leads-Arbore-2025"
4. Enviar notificación por email a `arboreres@gmail.com`
5. Retornar mensaje de éxito o error

## Testing

Para probar el formulario:
1. Abrir `index.html` en un navegador
2. Llenar todos los campos requeridos
3. Marcar el checkbox de privacidad
4. Hacer clic en "Enviar mensaje"
5. Verificar que aparezca el mensaje de éxito
6. Revisar el Google Sheet para confirmar que se agregó el registro

## Restaurar Versión Anterior

Si necesitas volver al formulario de Salesforce:
```bash
cp public/index-backup.html public/index.html
```

## Notas Adicionales

- El script de Google debe estar desplegado como "Web App" con acceso "Anyone"
- La URL del script es permanente y no cambiará a menos que se re-despliegue
- Los datos se guardan en tiempo real en el Google Sheet
- El email de notificación se envía automáticamente con cada registro

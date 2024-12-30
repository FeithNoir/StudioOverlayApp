# StudiOverlay

StudiOverlay es una aplicación desarrollada en Angular que permite a los usuarios personalizar imágenes agregando un logo de Patreon, ajustando el diseño del filtro y descargando la imagen procesada.

## Características
- **Subir imagen**: Los usuarios pueden cargar imágenes desde su dispositivo.
- **Vista previa**: Visualización en tiempo real de la imagen con el filtro aplicado.
- **Agregar logo de Patreon**: Opciones para usar el logo en versión oscura o clara.
- **Personalización del fondo del div del logo**:
  - Cambiar el color de fondo.
  - Ajustar la opacidad del fondo.
- **Texto personalizado**: Agregar un texto que acompañe al logo.
  - Definir estilo del texto: negrita, cursiva, subrayado.
  - Ajustar la distancia entre el logo y el texto.
- **Tamaño y posición del div**:
  - Cambiar el tamaño del div.
  - Ajustar la posición vertical (eje Y).
- **Descargar imagen**: Guardar la imagen procesada con el filtro aplicado.

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/FeithNoir/studioverlay.git
   ```

2. Ingresa al directorio del proyecto:
   ```bash
   cd studioverlay
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

4. Inicia la aplicación:
   ```bash
   ng serve -o
   ```

5. Abre la aplicación en tu navegador en la dirección [http://localhost:4200](http://localhost:4200).

## Uso

1. **Subir una imagen**:
   - Haz clic en el botón "Subir Imagen" y selecciona una imagen desde tu dispositivo.

2. **Configurar el filtro**:
   - Selecciona la versión del logo (oscuro o claro).
   - Ajusta el color y la opacidad del fondo del div del logo.
   - Ingresa un texto opcional que acompañará al logo.
   - Personaliza el estilo del texto (negrita, cursiva, subrayado).
   - Ajusta la distancia entre el logo y el texto.
   - Cambia el tamaño del div y su posición vertical.

3. **Vista previa**:
   - Observa los cambios aplicados en tiempo real en la vista previa.

4. **Descargar la imagen**:
   - Haz clic en el botón "Descargar Imagen" para guardar la imagen con el filtro aplicado.

## Tecnologías Utilizadas
- **Angular**: Framework principal para el desarrollo de la aplicación.
- **TypeScript**: Lenguaje de programación para una escritura tipada.
- **SCSS**: Estilización avanzada de la interfaz.
- **HTML5**: Estructuración del contenido.

## Scripts Disponibles

- `ng serve`: Inicia la aplicación en modo de desarrollo.
- `ng build`: Genera los archivos para producción.
- `ng test`: Ejecuta las pruebas unitarias.
- `ng lint`: Verifica el código con TSLint.

## Licencia
Este proyecto está licenciado bajo la [MIT License](LICENSE).

---

### ¡Gracias por usar StudiOverlay! Si tienes preguntas o comentarios, no dudes en contribuir o contactarnos.


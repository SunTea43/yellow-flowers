# Flores amarillas

Una página estática, pensada para compartirse el 21 de septiembre. Cada persona puede recibir una URL con su nombre y un mensaje distinto.

## Cómo personalizar los mensajes

Edita el objeto `destinatarios` en `script.js`:

```javascript
const destinatarios = {
  Valeria: {
    mensaje: [
      "Primer párrafo.",
      "Segundo párrafo.",
    ],
    despedida: "Te quiero mucho.",
  },
};
```

- El nombre de la clave es el que irá en la URL: `?nombre=Valeria`
- La comparación ignora mayúsculas, minúsculas y acentos (`laura` y `Laura` funcionan igual)
- Si el nombre no está en la lista, o si no hay parámetro, se usa `mensajeGenerico`

## Cómo compartir el enlace

Cuando la página esté publicada, cambia `TU_USUARIO` por tu usuario de GitHub:

```text
https://TU_USUARIO.github.io/yellow-flowers/?nombre=Valeria
https://TU_USUARIO.github.io/yellow-flowers/?nombre=Laura
https://TU_USUARIO.github.io/yellow-flowers/?nombre=Laura%20Stefanía
https://TU_USUARIO.github.io/yellow-flowers/?nombre=Stephania
https://TU_USUARIO.github.io/yellow-flowers/?nombre=Luz%20Stella
https://TU_USUARIO.github.io/yellow-flowers/?nombre=Blanca%20Nieves
https://TU_USUARIO.github.io/yellow-flowers/?nombre=Gabriela
https://TU_USUARIO.github.io/yellow-flowers/?nombre=Manuela
https://TU_USUARIO.github.io/yellow-flowers/?nombre=Alba
https://TU_USUARIO.github.io/yellow-flowers/?nombre=Andrés%20Camilo
https://TU_USUARIO.github.io/yellow-flowers/?nombre=Luis%20Felipe
https://TU_USUARIO.github.io/yellow-flowers/?nombre=Samuel
https://TU_USUARIO.github.io/yellow-flowers/?nombre=Felipe
https://TU_USUARIO.github.io/yellow-flowers/?nombre=Óscar
https://TU_USUARIO.github.io/yellow-flowers/?nombre=Gabriel
https://TU_USUARIO.github.io/yellow-flowers/?nombre=Diego
https://TU_USUARIO.github.io/yellow-flowers/?nombre=Sebastián
https://TU_USUARIO.github.io/yellow-flowers/?nombre=Jorge%20Daniel
https://TU_USUARIO.github.io/yellow-flowers/?nombre=Juan%20Sebastián
https://TU_USUARIO.github.io/yellow-flowers/?nombre=Luis%20Efraín
https://TU_USUARIO.github.io/yellow-flowers/
```

Atajos que también funcionan: `Gabii`, `Manuu`, `Albilla`, `Mamá`, `Mamita`, `Papá`, `Tío Felipe`, `Tío Óscar`.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub (por ejemplo, `yellow-flowers`).
2. Sube estos archivos a la rama `main`:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
3. En el repositorio, ve a **Settings → Pages**.
4. En **Build and deployment**, elige:
   - Source: **Deploy from a branch**
   - Branch: **main** / **/** (root)
5. Guarda y espera uno o dos minutos.
6. La URL quedará así: `https://TU_USUARIO.github.io/yellow-flowers/`

Si el repositorio se llama `TU_USUARIO.github.io`, la página quedará en la raíz: `https://TU_USUARIO.github.io/?nombre=Valeria`.

## Verla en local

No hace falta instalar nada. Puedes abrir `index.html` en el navegador, o servir la carpeta:

```bash
python3 -m http.server 8080
```

Luego visita, por ejemplo:

- [http://127.0.0.1:8080/?nombre=Valeria](http://127.0.0.1:8080/?nombre=Valeria)
- [http://127.0.0.1:8080/?nombre=Laura](http://127.0.0.1:8080/?nombre=Laura)
- [http://127.0.0.1:8080/?nombre=Luis%20Efraín](http://127.0.0.1:8080/?nombre=Luis%20Efraín)
- [http://127.0.0.1:8080/](http://127.0.0.1:8080/)

## Notas

- Está pensada para verse primero en el celular, desde WhatsApp.
- No usa frameworks ni dependencias externas.
- Respeta `prefers-reduced-motion`: si alguien tiene reducidas las animaciones, la página aparece sin pétalos ni movimiento.

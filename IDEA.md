Quiero crear una experiencia web interactiva de alto nivel para regalarle flores amarillas a **Hannia el 21 de septiembre**.

No quiero una página genérica ni una simple animación de flores. Quiero que parezca un pequeño regalo digital hecho a mano, romántico, elegante, memorable y técnicamente impresionante.

## OBJETIVO

Construir una experiencia web donde Hannia entre a una escena inicialmente tranquila y, mediante una secuencia cinematográfica, aparezca un hermoso ramo de flores amarillas.

La experiencia debe transmitir:

* cariño
* ternura
* sorpresa
* romanticismo
* elegancia
* sensación de regalo personalizado

Debe sentirse como una experiencia diseñada específicamente para ella.

---

# CONCEPTO VISUAL

Tema principal:

**"Un ramo de flores amarillas para Hannia — 21 de septiembre"**

Paleta:

* amarillo cálido
* amarillo dorado
* crema
* verde natural
* blanco cálido
* pequeños detalles dorados

Evitar una apariencia infantil o excesivamente cursi.

Quiero una estética:

**romántica + elegante + cinematográfica + minimalista + mágica**

La página debe verse excelente tanto en computadora como en teléfono.

---

# EXPERIENCIA INICIAL

Al entrar:

Pantalla oscura o con un fondo muy suave.

Aparece lentamente una pequeña frase:

> "Hannia..."

Después de unos segundos:

> "Hay regalos que se pueden envolver."

Pausa.

Luego:

> "Y hay otros que simplemente florecen."

Pausa.

Después aparece:

> "Este es para ti."

Debe existir un botón elegante:

**"Abrir mi regalo 🌼"**

No mostrar inmediatamente todo el ramo.

Quiero generar expectativa.

---

# ANIMACIÓN PRINCIPAL

Cuando Hannia presione el botón:

1. La pantalla debe hacer una transición cinematográfica.
2. Deben comenzar a aparecer pequeñas partículas doradas.
3. Deben caer suavemente algunos pétalos amarillos.
4. Deben aparecer tallos desde la parte inferior de la pantalla.
5. Las flores deben crecer progresivamente.
6. Cada flor debe abrir sus pétalos mediante animación.
7. El ramo debe construirse gradualmente.
8. Algunas flores deben moverse ligeramente como si existiera una brisa.
9. Las hojas deben tener movimientos naturales.
10. La cámara/escena debe hacer un pequeño zoom hacia el ramo.

El resultado final debe parecer un ramo vivo.

NO quiero simplemente imágenes PNG apareciendo.

Preferir:

* CSS
* SVG
* Canvas
* JavaScript
* animaciones procedurales

Siempre que sea razonable.

---

# EL RAMO

Crear un ramo abundante de flores amarillas.

Debe contener diferentes tamaños y posiciones para evitar que parezca una copia repetida.

Cada flor debe tener:

* pétalos amarillos
* centro detallado
* pequeñas variaciones de tamaño
* ligera rotación
* movimiento independiente
* iluminación/sombra sutil

Agregar hojas verdes y tallos.

El ramo debe verse tridimensional aunque sea una experiencia web.

Si usar SVG permite obtener mejores flores que CSS puro, utilizar SVG.

Priorizar calidad visual sobre simplicidad.

---

# DETALLES ESPECIALES

Agregar partículas muy sutiles alrededor del ramo.

Algunas deben parecer:

✨ pequeñas luces doradas

Otras:

🌼 pequeños pétalos.

Debe existir una animación de viento muy suave.

Nada debe moverse demasiado rápido.

La sensación debe ser:

**calma, cálida y romántica.**

---

# MENSAJE FINAL

Cuando el ramo esté completamente formado, mostrar lentamente:

> "Feliz 21 de septiembre, Hannia 🌼"

Después:

> "No podía regalarte flores amarillas sin hacerlas un poquito más especiales."

Y finalmente:

> "Así que hice estas para ti."

Agregar un último mensaje personal que pueda modificarse fácilmente desde una variable/configuración.

Por ejemplo:

> "Espero que hoy tengas una razón más para sonreír."

NO hacer que el texto aparezca todo de golpe.

Utilizar:

* fade-in
* pequeñas pausas
* escritura progresiva cuando corresponda

---

# INTERACCIÓN

Después de aparecer el ramo, permitir que Hannia interactúe con él.

Por ejemplo:

### Al tocar/clickear una flor

La flor puede:

* moverse ligeramente
* soltar pequeños pétalos
* producir partículas
* mostrar una pequeña frase

Ejemplos:

> "🌼 Esta floreció para ti."

> "🌼 Una más porque una nunca es suficiente."

> "🌼 Esta también es tuya."

No abusar de esto.

---

# MÚSICA

Agregar soporte opcional para música romántica de fondo.

IMPORTANTE:

No utilizar música con copyright de manera predeterminada.

Crear el sistema para que pueda agregarse posteriormente un archivo de audio propio.

Debe existir un botón discreto:

🔊 Música

La música debe comenzar únicamente después de una interacción del usuario, respetando las restricciones de autoplay del navegador.

---

# EFECTO FINAL

Cuando todo esté terminado:

La cámara debe mostrar el ramo completo.

Fondo cálido.

Pétalos moviéndose.

Partículas doradas.

Música opcional.

Mensaje:

> "Para Hannia 🌼"

Y debajo:

> "21 de septiembre"

La escena debe permanecer viva, no convertirse en una imagen estática.

---

# TECNOLOGÍA

Utilizar una arquitectura limpia.

Preferencia:

* React
* TypeScript
* Vite
* CSS moderno
* SVG
* Framer Motion si realmente aporta valor

Si existe una alternativa técnicamente superior para lograr la animación, evaluarla antes de implementarla.

No introducir dependencias innecesarias.

---

# ARQUITECTURA

Separar correctamente:

components/
intro/
bouquet/
flowers/
effects/
messages/
audio/
ui/

components/flowers/
Flower.tsx
Petal.tsx
Stem.tsx
Leaf.tsx
Bouquet.tsx

effects/
PetalFall.tsx
GoldenParticles.tsx
WindEffect.tsx

data/
flowers.ts
messages.ts

hooks/
useBouquetAnimation.ts
useReducedMotion.ts
useAudio.ts

Mantener los componentes desacoplados.

Una animación rota no debe destruir toda la experiencia.

---

# RENDIMIENTO

La experiencia debe ser visualmente impresionante pero ligera.

Objetivo:

* 60 FPS cuando sea posible
* buena experiencia en teléfonos
* no crear cientos de elementos DOM innecesarios
* utilizar Canvas si resulta más eficiente para partículas
* respetar prefers-reduced-motion
* evitar memory leaks
* limpiar timers/listeners
* lazy loading cuando corresponda

La animación debe escalar dependiendo del dispositivo.

En móviles reducir partículas y efectos secundarios sin destruir la experiencia.

---

# RESPONSIVE

Debe funcionar perfectamente en:

* móvil vertical
* móvil horizontal
* laptop
* monitor grande

En móvil el ramo debe ocupar aproximadamente el 80–90% del área visual sin cortar flores.

El texto debe adaptarse automáticamente.

El botón debe ser fácil de tocar.

---

# CALIDAD

No quiero una implementación rápida o genérica.

Antes de escribir código:

1. Analiza la experiencia.
2. Diseña la estructura.
3. Determina cómo representar visualmente las flores.
4. Decide qué animaciones deben ser CSS, SVG, Canvas o Framer Motion.
5. Define el flujo completo.
6. Identifica posibles problemas de rendimiento.
7. Después implementa.

Si ya existe un proyecto, primero inspecciona su estructura y reutiliza lo que tenga sentido.

NO sobrescribas código existente sin analizarlo.

---

# IMPORTANTE

No quiero que simplemente cumplas literalmente estas instrucciones.

Quiero que actúes como:

**diseñador UI/UX + desarrollador frontend senior + motion designer.**

Si encuentras una forma de hacer la experiencia más bonita, elegante o memorable sin complicarla innecesariamente, hazlo.

Puedes agregar detalles que mejoren el regalo, pero evita convertirlo en una página sobrecargada.

La prioridad es:

1. emoción
2. belleza
3. fluidez
4. personalización
5. rendimiento
6. código limpio

El resultado final debe hacer que al abrirlo Hannia piense:

**"Esto no parece una página web cualquiera; alguien realmente hizo esto para mí."**

---

# ENTREGA

Implementa la experiencia completa.

Al terminar:

1. Ejecuta el proyecto.
2. Comprueba que no existan errores.
3. Comprueba desktop y móvil.
4. Comprueba que las animaciones funcionen correctamente.
5. Comprueba que el audio no bloquee la experiencia.
6. Comprueba que no existan errores de consola.
7. Corrige cualquier problema visual evidente.
8. Entrega un resultado funcional y listo para ejecutar.

No te detengas después de crear únicamente la estructura.

Quiero la experiencia terminada.

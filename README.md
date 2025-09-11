
## climatizacion aguimol
Climatización AGUIMOL - Landing Page
Esta es una landing page (página de aterrizaje) responsive diseñada para "Climatización AGUIMOL", una empresa de servicios técnicos especializada en la instalación, reparación y mantenimiento de equipos de climatización y electrodomésticos.

✨ Características Principales
Diseño Moderno y Responsivo: La página se adapta perfectamente a cualquier dispositivo, ya sea un teléfono móvil, una tablet o un ordenador de escritorio.

Navegación Intuitiva: Una sola página con secciones bien definidas (Inicio, Servicios, Nosotros y Contacto) para una experiencia de usuario fluida.

Sección de Servicios Clara: Muestra los servicios principales de la empresa (Calderas, Aire Acondicionado, Heladeras y Lavarropas) utilizando íconos descriptivos de Font Awesome.

Múltiples Puntos de Contacto:

Formulario de Contacto Funcional: Integrado con FormSubmit.co para una fácil recepción de mensajes sin necesidad de un backend propio.

Botones de WhatsApp: Incluye un botón de contacto principal en la sección de inicio y un botón flotante persistente para facilitar la comunicación instantánea.

Interactividad con JavaScript: El formulario de contacto tiene una validación simple que muestra una alerta de agradecimiento al usuario tras el envío.

🛠️ Tecnologías Utilizadas
HTML5: Para la estructura y el contenido de la web.

CSS3: Para el diseño y la estilización, incluyendo Flexbox, Grid y Media Queries para la responsividad.

JavaScript: Para la interactividad del formulario y la creación dinámica del botón flotante de WhatsApp.

Font Awesome: Para los íconos utilizados en toda la página.

Google Fonts: Para la tipografía principal del sitio (Roboto).

🚀 Cómo Empezar
Para ver o modificar este proyecto, sigue estos sencillos pasos:

Clona el repositorio (o descarga los archivos).

Navega a la carpeta del proyecto.

Abre el archivo index.html en tu navegador web para ver la página en acción.

Configuración del Formulario
Para recibir los mensajes del formulario en tu propio correo electrónico:

Ve al archivo index.html.

Busca la etiqueta <form> dentro de la sección de contacto (id="contacto").

Cambia la URL en el atributo action por tu propio enlace de FormSubmit, reemplazando el email actual:

HTML

<form id="contact-form" action="https://formsubmit.co/TU-CORREO-ELECTRONICO" method="POST">
Nota Importante sobre el Botón Flotante
El código JavaScript en script.js crea un botón flotante de WhatsApp. Para que se muestre correctamente, debes copiar las siguientes reglas de CSS y pegarlas en tu archivo style.css, ya que actualmente se encuentran comentadas en el archivo JavaScript:

CSS

.floating-whatsapp {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #25D366;
    color: white;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1000;
}

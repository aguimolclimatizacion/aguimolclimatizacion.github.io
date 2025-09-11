// Validación del formulario
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Nos contactaremos pronto.');
    this.reset();
});


// Botón de WhatsApp flotante (opcional)
const floatingBtn = document.createElement('a');
floatingBtn.href = 'https://wa.me/5491165564513';
floatingBtn.className = 'floating-whatsapp';
floatingBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
document.body.appendChild(floatingBtn);

// Estilos para el botón flotante (agregar en CSS)
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

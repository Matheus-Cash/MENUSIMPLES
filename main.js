// Selecione o elemento do ícone fluente
const iconeFluente = document.getElementById('icone-fluente');

// Adicione um evento ao documento para quando o mouse se move
document.addEventListener('mousemove', (e) => {
  // Obtenha as coordenadas do mouse
  const x = e.clientX;
  const y = e.clientY;

  // Ajuste a posição do ícone fluente para seguir o mouse
  iconeFluente.style.transform = `translate(${x}px, ${y}px)`;
});
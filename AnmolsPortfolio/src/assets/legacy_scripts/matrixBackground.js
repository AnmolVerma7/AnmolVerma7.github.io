const canvas = document.getElementById("canv");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");
let cols = Math.floor(window.innerWidth / 20) + 1;
let ypos = Array(cols).fill(0);

// Read customizable colors from CSS variables
const rootStyles = getComputedStyle(document.documentElement);
const MATRIX_COLOR =
  (rootStyles.getPropertyValue("--matrixRainColor") || "#00ff00").trim() || "#00ff00";
const FADE_ALPHA = 0.08; // Slightly stronger fade to prevent ghosting/imprints

// Helper to build the vertical gradient background
function buildGradient(h) {
  const grad = ctx.createLinearGradient(0, 0, 0, h);
  grad.addColorStop(0, "#1B0F13");
  grad.addColorStop(1, "#151018");
  return grad;
}

// Initial paint with full-opacity gradient
ctx.fillStyle = buildGradient(canvas.height);
ctx.fillRect(0, 0, canvas.width, canvas.height);

function matrix() {
  const w = window.innerWidth;
  const h = window.innerHeight;

  if (canvas.width !== w) {
    canvas.width = w;
    cols = Math.floor(window.innerWidth / 20) + 1;
    ypos = Array(cols).fill(0);
  }
  if (canvas.height !== h) {
    canvas.height = h;
  }

  // Fading trail: low-alpha gradient overlay instead of flat black
  const fadeGrad = ctx.createLinearGradient(0, 0, 0, h);
  fadeGrad.addColorStop(0, `rgba(27,15,19,${FADE_ALPHA})`);
  fadeGrad.addColorStop(1, `rgba(21,16,24,${FADE_ALPHA})`);
  ctx.fillStyle = fadeGrad;
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = MATRIX_COLOR; // Rain Color from CSS variable
  ctx.font = "12pt monospace";

  ypos.forEach((y, ind) => {
    const text = String.fromCharCode(Math.random() * 128);
    const x = ind * 20;
    ctx.fillText(text, x, y);
    // Reset sooner after leaving the viewport to avoid long-lived imprints
    if (y > h + Math.random() * 3000) ypos[ind] = 0;
    else ypos[ind] = y + 20;
  });
}

setInterval(matrix, 35);


function Navecita() {
    this.x = 0;
    this.y = 0;
    this.rotation = 0;
    this.showFlame = false;

    // Tamaño de la nave
    this.width = 60;
    this.height = 76;
}

Navecita.prototype.draw = function (context) {
    context.save();

    // Colocar y rotar la nave
    context.translate(this.x, this.y);
    context.rotate(this.rotation);

    // Dibujar el fuego de los motores
    if (this.showFlame) {
        context.beginPath();
        context.moveTo(-10, 23);
        context.lineTo(0, 43 + Math.random() * 8);
        context.lineTo(10, 23);
        context.closePath();

        context.fillStyle = "#ffb7e5";
        context.fill();

        context.beginPath();
        context.moveTo(-5, 23);
        context.lineTo(0, 34 + Math.random() * 5);
        context.lineTo(5, 23);
        context.closePath();

        context.fillStyle = "#fff0fa";
        context.fill();
    }

    // Cuerpo de la nave
    context.beginPath();
    context.moveTo(0, -38);
    context.lineTo(22, 20);
    context.lineTo(9, 15);
    context.lineTo(0, 23);
    context.lineTo(-9, 15);
    context.lineTo(-22, 20);
    context.closePath();

    context.fillStyle = "#c9b6ff";
    context.fill();

    context.lineWidth = 2;
    context.strokeStyle = "#f6eaff";
    context.stroke();

    // Ventana de la cabina
    context.beginPath();
    context.moveTo(0, -25);
    context.lineTo(8, -5);
    context.lineTo(0, 2);
    context.lineTo(-8, -5);
    context.closePath();

    context.fillStyle = "#8be9fd";
    context.fill();

    // Detalles de las alas
    context.beginPath();
    context.moveTo(-15, 12);
    context.lineTo(-7, 16);
    context.moveTo(15, 12);
    context.lineTo(7, 16);

    context.strokeStyle = "#a78bfa";
    context.lineWidth = 3;
    context.stroke();

    context.restore();
};
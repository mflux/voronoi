const RAY_VISUAL_LENGTH = 100000;
/** A surface for drawing and debugging. Creates a canvas. */
export class Whiteboard {
    constructor(width = 0, height = 0) {
        this.width = width;
        this.height = height;
        this.canvas = document.createElement('canvas');
        this.canvas.setAttribute('width', width.toString());
        this.canvas.setAttribute('height', height.toString());
        this.context = this.canvas.getContext('2d');
        this.context.imageSmoothingEnabled = false;
    }
    clear() {
        this.context.clearRect(0, 0, this.width, this.height);
    }
    stroke(color, lineWidth = 1) {
        this.context.strokeStyle = color;
        this.context.lineWidth = lineWidth;
    }
    fill(color) {
        if (color === 'none') {
            color = 'transparent';
        }
        this.context.fillStyle = color;
    }
    strokeDash(space = 0) {
        if (space === 0) {
            this.context.setLineDash([]);
        }
        else {
            this.context.setLineDash([space, space * 2]);
        }
    }
    drawCircle(x = 0, y = 0, radius = 4) {
        this.context.beginPath();
        this.context.arc(x, y, radius, 0, 2 * Math.PI);
        if (this.context.fillStyle !== 'transparent') {
            this.context.fill();
        }
        if (this.context.strokeStyle !== 'transparent') {
            this.context.stroke();
        }
    }
    drawLine(sx, sy, ex, ey) {
        this.context.beginPath();
        this.context.moveTo(sx, sy);
        this.context.lineTo(ex, ey);
        this.context.stroke();
    }
    drawRay(point, direction) {
        this.drawCircle(point.x, point.y, 4);
        this.context.beginPath();
        this.context.moveTo(point.x, point.y);
        this.context.lineTo(point.x + direction.x * RAY_VISUAL_LENGTH, point.y + direction.y * RAY_VISUAL_LENGTH);
        this.context.stroke();
    }
}
const lavColorSeq = [
    'rgba(180,40,50,0.4)',
    'rgba(50,40,180,0.4)',
    'rgba(50,180,40,0.4)',
    'rgba(200,200,40,0.4)'
];
//# sourceMappingURL=whiteboard.js.map
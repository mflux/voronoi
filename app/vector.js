/** A 2D vector object. */
export class Vector {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
        this.x = x;
        this.y = y;
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    normalize() {
        const length = this.length();
        this.x /= length;
        this.y /= length;
        return this;
    }
    sub(b) {
        return new Vector(this.x - b.x, this.y - b.y);
    }
    add(b) {
        return new Vector(this.x + b.x, this.y + b.y);
    }
    mult(b) {
        return new Vector(this.x * b.x, this.y * b.y);
    }
    scale(s) {
        return new Vector(this.x * s, this.y * s);
    }
    perp() {
        const y = this.x;
        const x = -this.y;
        return new Vector(x, y);
    }
    dot(other) {
        return this.x * other.x + this.y * other.y;
    }
    lerp(other, alpha) {
        const dx = (other.x - this.x) * alpha;
        const dy = (other.y - this.y) * alpha;
        const nx = this.x + dx;
        const ny = this.y + dy;
        return new Vector(nx, ny);
    }
    distanceTo(other) {
        const dx = (other.x - this.x);
        const dy = (other.y - this.y);
        return Math.sqrt(dx * dx + dy * dy);
    }
    copy(other) {
        this.x = other.x;
        this.y = other.y;
        return this;
    }
    equals(other) {
        return this.x === other.x && this.y === other.y;
    }
    isLeftOfEdge([a, b]) {
        return (b.x - a.x) * (this.y - a.y) - (b.y - a.y) * (this.x - a.x) < 0;
    }
}
//# sourceMappingURL=vector.js.map
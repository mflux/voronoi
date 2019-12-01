import { Edge } from './types';

/** A 2D vector object. */
export class Vector {

  constructor(public x:number = 0, public y:number = 0){
  	this.x = x;
    this.y = y;
  }

  length(){
    return Math.sqrt(this.x*this.x + this.y*this.y);
  }

  normalize(){
    const length = this.length();
    this.x /= length;
    this.y /= length;
    return this;
  }

  sub(b:Vector){
    return new Vector(this.x-b.x, this.y-b.y);
  }

  add(b:Vector){
    return new Vector(this.x + b.x, this.y + b.y);
  }

  mult(b:Vector){
    return new Vector(this.x * b.x, this.y * b.y);
  }

  scale( s:number ) {
    return new Vector( this.x * s, this.y * s );
  }

  perp() {
    const y = this.x;
    const x = -this.y;
    return new Vector( x, y );
  }

  dot(other: Vector) {
    return this.x * other.x + this.y * other.y;
  }

  lerp(other: Vector, alpha: number) {
    const dx = (other.x - this.x) * alpha;
    const dy = (other.y - this.y) * alpha;
    const nx = this.x + dx;
    const ny = this.y + dy;
    return new Vector(nx, ny);
  }

  distanceTo(other: Vector) {
    const dx = (other.x - this.x);
    const dy = (other.y - this.y);
    return Math.sqrt(dx * dx + dy * dy);
  }

  copy(other: Vector) {
    this.x = other.x;
    this.y = other.y;
    return this;
  }

  equals(other: Vector){
    return this.x === other.x && this.y === other.y;
  }

  isLeftOfEdge([a,b]:Edge){
    return (b.x - a.x) * (this.y - a.y) - (b.y - a.y) * (this.x - a.x) < 0;
  }

}
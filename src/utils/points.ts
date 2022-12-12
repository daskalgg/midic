export default class Point {
    public x: number;
    public y: number;

    constructor(x : number, y : number) {
        this.x = x;
        this.y = y;
    }

    public static sub(a: Point, b: Point) :Point {
       return new Point(a.x - b.x, a.y - b.y);
    }

    public static add(a: Point, b: Point) :Point {
       return new Point(a.x + b.x, a.y + b.y);
    }

    public static distance(a: Point, b: Point) : number {
        return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
    }

    public static ldistance(a: Point, b: Point) : number {
        let da = b.x - a.x;
        let db = a.y - b.y;
        console.log(da, db);
        if(Math.abs(da) > Math.abs(db)) return da;
        return db;
    }

    public sub(other: Point) :void {
       this.x -= other.x;
       this.y -= other.y;
    }

    public add(other: Point) :void {
        this.x += other.x;
        this.y += other.y;
    }

    public length() : number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

}

var Geometry = require('../index.js');
var Vector2 = Geometry.Vector2;

console.info("Testing Vector2");
console.info("Beginning dumb checks");

new Vector2();
new Vector2(1);
new Vector2(1,2);
new Vector2().length;
new Vector2().clone;
new Vector2()._;
new Vector2().tangent;
new Vector2().normal;
new Vector2().reciprocal;
new Vector2().angle;
new Vector2().add(new Vector2());
new Vector2().subtract(new Vector2());
new Vector2().multiplyByScalar(2);
new Vector2().multiplyByVector2(new Vector2());
new Vector2().divideByScalar(2);
new Vector2().divideByVector2(new Vector2());
new Vector2().tangentOfLength(5);
new Vector2().normalOfLength(4);

Vector2.x;
Vector2.y;
Vector2.zero;
Vector2.one;
Vector2.unit;
Vector2.crossProductMagnitude(new Vector2(0,1), new Vector2(1,0));
Vector2.fromObject({x: 2, y: 3});
Vector2.fromObject({});
Vector2.displacement(new Vector2(1,0), new Vector2(0,1));
Vector2.linearInterpolation(new Vector2(1,0), new Vector2(0,1), 0.4);
Vector2.lerp(new Vector2(1,0), new Vector2(0,1), 0.4);

console.info("Ending dumb checks")
console.info("Completed Testing Vector2");

var Geometry = require('../index.js');
var Vector2 = Geometry.Vector2;
var LineSegment2 = Geometry.LineSegment2;

console.info("Testing LineSegment2");
console.info("Beginning dumb checks");

new LineSegment2(new Vector2(0,1), new Vector2(1,0));

new LineSegment2(new Vector2(0,1), new Vector2(1,0)).offset;
new LineSegment2(new Vector2(0,1), new Vector2(1,0)).tangent;
new LineSegment2(new Vector2(0,1), new Vector2(1,0)).normal;
new LineSegment2(new Vector2(0,1), new Vector2(1,0)).linearInterpolation(0.4);
new LineSegment2(new Vector2(0,1), new Vector2(1,0)).lerp(0.6);
new LineSegment2(new Vector2(0,1), new Vector2(1,0)).intersect([new LineSegment2(new Vector2(0,0), new Vector2(1,1))]);
new LineSegment2(new Vector2(0,1), new Vector2(1,0)).normalPoint;

console.info("Ending dumb checks")
console.info("Completed Testing LineSegment2");

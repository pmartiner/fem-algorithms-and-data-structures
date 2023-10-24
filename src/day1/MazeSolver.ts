/*
Input example:

const maze = 
  ["############E#",
   "##########   #"
   "########## ###"
   "##S        ###"]

where S = start of the maze,
      E = end of the maze
*/

const directions = [
  // Left
  [-1, 0],
  // Right
  [1, 0],
  // Up
  [0, -1],
  // Down
  [0, 1],
];

function walk(
  maze: string[],
  wall: string,
  currentPoint: Point,
  end: Point,
  pointsSeen: boolean[][],
  path: Point[],
): boolean {
  // First we get our base case:

  // 1. The walker is out of bounds
  if (
    currentPoint.x < 0 ||
    currentPoint.x >= maze[0].length ||
    currentPoint.y < 0 ||
    currentPoint.y >= maze.length
  ) {
    return false;
  }

  // 2. The walker hits a wall
  if (maze[currentPoint.y][currentPoint.x] === wall) {
    return false;
  }

  // 3. We've been to a previous point
  if (pointsSeen[currentPoint.y][currentPoint.x]) {
    return false;
  }

  // 4. The point is the end
  if (currentPoint.x === end.x && currentPoint.y === end.y) {
    path.push(end);
    return true;
  }

  // We add the path we've followed to the result array (`path`)
  pointsSeen[currentPoint.y][currentPoint.x] = true;
  path.push(currentPoint);

  for (let i = 0; i < directions.length; i++) {
    const [x, y] = directions[i];
    if (
      walk(
        maze,
        wall,
        {
          x: currentPoint.x + x,
          y: currentPoint.y + y,
        },
        end,
        pointsSeen,
        path,
      )
    ) {
      return true;
    }
  }

  // If the path's not the right one, we pop it
  path.pop();

  return false;
}

export default function solve(
  maze: string[],
  wall: string,
  start: Point,
  end: Point,
): Point[] {
  const pointsSeen: boolean[][] = [];
  const correctPath: Point[] = [];

  for (let i = 0; i < maze.length; i++) {
    pointsSeen.push(new Array(maze[0].length).fill(false));
  }

  walk(maze, wall, start, end, pointsSeen, correctPath);

  return correctPath;
}

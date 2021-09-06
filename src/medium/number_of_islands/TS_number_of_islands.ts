const numIslands = (grid: string[][]): number => {
  let counter = 0;
  let rowLength = grid.length;
  let colLength = grid[0].length;
  if(rowLength === 0) return 0;

  const searchNeighbors = (x: number, y: number, grid: string[][]): void => {
    if(x < 0 || y < 0 || x >= rowLength || y >= colLength || grid[x][y] === '0') return;

    grid[x][y] = '0';

    searchNeighbors(x + 1, y, grid);
    searchNeighbors(x - 1, y, grid);
    searchNeighbors(x, y + 1, grid);
    searchNeighbors(x, y - 1, grid);
  }


  for(let r = 0; r < rowLength; r++) {
    for(let c = 0; c < colLength; c++) {
      if(grid[r][c] === '1') {
        counter++;
        searchNeighbors(r, c, grid);
      }
    }
  }
  return counter;
};


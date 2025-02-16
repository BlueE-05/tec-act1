interface GridProps {
  width: number;
  height: number;
  blackColor?: string; // Optional prop to set the black square color
  whiteColor?: string; // Optional prop to set the white square color
}

export default function Grid({ width, height,
  blackColor = 'bg-black', // Default color if not passed
  whiteColor = 'bg-white', // Default color if not passed
}: GridProps) {

  const renderSquares = () => {
    let squares = [];
    for (let row = 0; row < height; row++) { // Creating the matrix
      for (let col = 0; col < width; col++) {
        const isBlack = (row + col) % 2 === 1; //interchange colors = pair boxes must be black
        squares.push(
          <div key={`${row}-${col}`} className={`w-16 h-16 ${isBlack ? blackColor : whiteColor}`}/>
        );
      }
    }
    return squares;
  };

  return ( // Arranging squares
    <div>
      
      <div className="grid" style={{ gridTemplateColumns: `repeat(${width}, 4rem)` }}> {renderSquares()} </div>
    
    </div>
  );
}
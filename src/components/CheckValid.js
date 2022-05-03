import React from "react";

const CheckValid = ({ sudoku, setInvalid, originalData, setSudoku }) => {
	const checkValid = () => {
		const bigSquares = [];

		for (let i = 0; i < 9; i++) {
			bigSquares.push([]);
		}

		//row check
		for (let i = 0; i < sudoku.length; i++) {
			const testArr = [];

			for (let j = 0; j < sudoku.length; j++) {
				if (sudoku[i][j] !== 0) {
					if (!testArr.includes(sudoku[i][j])) testArr.push(sudoku[i][j]);
					else {
						setInvalid({ row: i });
						return;
					}
					const bigSquareIndex1 = j >= 3 ? Math.floor(j / 3) : 0;

					let bigSquareIndex2 = 0;

					if (i <= 2) bigSquareIndex2 = 0;
					else if (3 <= i && i <= 5) bigSquareIndex2 = 3;
					else if (6 <= i && i <= 8) bigSquareIndex2 = 6;

					bigSquares[bigSquareIndex1 + bigSquareIndex2].length < 9 &&
						bigSquares[bigSquareIndex1 + bigSquareIndex2].push(sudoku[i][j]);
				} else {
					alert("Sudoku not full!");
					return;
				}
			}
		}

		//column check
		for (let i = 0; i < sudoku.length; i++) {
			const testArr = [];
			for (let j = 0; j < sudoku.length; j++) {
				if (sudoku[j][i] !== 0) {
					if (!testArr.includes(sudoku[j][i])) testArr.push(sudoku[j][i]);
					else {
						setInvalid({ column: i });
						return;
					}
				}
			}
		}

		//squares check
		for (let i = 0; i < 9; i++) {
			const checkArr = [];
			for (let j = 0; j < bigSquares[i].length; j++) {
				if (!checkArr.includes(bigSquares[i][j]))
					checkArr.push(bigSquares[i][j]);
				else {
					setInvalid({ square: i });
					return;
				}
			}
		}

		alert("correct");
		setInvalid(false);
	};

	const refreshSudoku = () => {
		setSudoku(originalData);
	};

	return (
		<div
			style={{
				width: "100%",
				display: "flex",
				justifyContent: "center",
			}}
		>
			<button
				onClick={checkValid}
				style={{
					margin: "2rem",
					cursor: "pointer",
					backgroundColor: "transparent",
					border: "2px solid #66fcf1",
					color: "#66fcf1",
					fontSize: "16px",
					padding: "5px 10px",
					transition: "all 0.2s ease-out",
				}}
			>
				Check sudoku
			</button>

			<button
				onClick={refreshSudoku}
				style={{
					margin: "2rem",
					cursor: "pointer",
					backgroundColor: "transparent",
					border: "2px solid #66fcf1",
					color: "#66fcf1",
					fontSize: "16px",
					padding: "5px 10px",
					transition: "all 0.2s ease-out",
				}}
			>
				Refresh sudoku
			</button>
		</div>
	);
};

export default CheckValid;

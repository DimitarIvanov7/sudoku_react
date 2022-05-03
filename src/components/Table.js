import React from "react";
import { v4 as uuidv4 } from "uuid";

const classes = {
	table: {
		display: "flex",
		flexDirection: "column",
		margin: "auto",
		width: "fit-content",
	},
	row: {
		display: "flex",
	},
};

const Table = ({ sudoku, setSudoku, invalid }) => {
	const setData = (index, i) => {
		const stateCopy = [...sudoku];

		stateCopy[index][i] < 9
			? (stateCopy[index][i] += 1)
			: (stateCopy[index][i] = 0);

		setSudoku(stateCopy);
	};
	const getSquare = (data) => {
		switch (data) {
			case 0:
				return [0, 2, 0, 2];
			case 1:
				return [3, 5, 0, 2];
			case 2:
				return [6, 8, 0, 2];

			case 3:
				return [0, 2, 3, 5];
			case 4:
				return [3, 5, 3, 5];
			case 5:
				return [6, 8, 3, 5];

			case 6:
				return [0, 2, 6, 8];

			case 7:
				return [3, 5, 6, 8];

			case 8:
				return [6, 8, 6, 8];
			default:
				return;
		}
	};

	const smallSquareRow = (i) => {
		if (invalid.column === i) {
			return "red";
		}
	};

	const smallSquareBackground = (i, index) => {
		if (
			i >= getSquare(invalid.square)[0] &&
			i <= getSquare(invalid.square)[1] &&
			index >= getSquare(invalid.square)[2] &&
			index <= getSquare(invalid.square)[3]
		) {
			return "red";
		}
	};

	return (
		<div style={classes.table}>
			{sudoku.map((element, index) => {
				return (
					<div
						key={uuidv4()}
						style={{
							display: "flex",
							borderBottom: (index + 1) % 3 === 0 && "4px solid #45A29E",
							borderTop: index === 0 && "4px solid #45A29E",
							backgroundColor: invalid && invalid.row === index && "red",
						}}
					>
						{element.map((num, i) => {
							return (
								<div
									key={uuidv4()}
									onClick={() => setData(index, i)}
									style={{
										color: "#66fcf1",
										textAlign: "center",
										borderTop: "1px solid #45A29E",
										borderBottom: "1px solid #45A29E",
										borderRight:
											(i + 1) % 3 === 0
												? "4px solid #45A29E"
												: "1px solid #45A29E",
										borderLeft: i === 0 && "4px solid #45A29E",
										padding: ".5rem",
										minWidth: "1rem",
										aspectRatio: "1/1",
										cursor: "pointer",
										backgroundColor: !isNaN(invalid.column)
											? smallSquareRow(i)
											: !isNaN(invalid.square) &&
											  smallSquareBackground(i, index),
									}}
								>
									{num !== 0 ? num : ""}
								</div>
							);
						})}
					</div>
				);
			})}
		</div>
	);
};

export default Table;

import Table from "./components/Table";
import { useState } from "react";
import CheckValid from "./components/CheckValid";

function SudokuMain() {
	const data = [
		[5, 3, 0, 0, 7, 0, 0, 0, 0],
		[6, 0, 0, 1, 9, 5, 0, 0, 0],
		[0, 9, 8, 0, 0, 0, 0, 6, 0],
		[8, 0, 0, 0, 6, 0, 0, 0, 3],
		[4, 0, 0, 8, 0, 3, 0, 0, 1],
		[7, 0, 0, 0, 2, 0, 0, 0, 6],
		[0, 6, 0, 0, 0, 0, 2, 8, 0],
		[0, 0, 0, 4, 1, 9, 0, 0, 5],
		[0, 0, 0, 0, 8, 0, 0, 7, 9],
	];

	const [sudoku, setSudoku] = useState(data);

	const [invalid, setInvalid] = useState(false);

	return (
		<div
			style={{
				backgroundColor: "#1f2833",
				height: "calc(100vh - 3rem)",
				paddingTop: "3rem",
			}}
		>
			{sudoku && (
				<Table sudoku={sudoku} setSudoku={setSudoku} invalid={invalid} />
			)}
			<CheckValid
				sudoku={sudoku}
				setInvalid={setInvalid}
				setSudoku={setSudoku}
				originalData={data}
			/>
		</div>
	);
}

export default SudokuMain;

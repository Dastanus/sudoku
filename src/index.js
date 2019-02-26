module.exports = function solveSudoku(arr) {
	for(let row = 0; row < arr.length; row++){
		for(let col = 0; col < arr.length; col++){
			if(arr[row][col]==0){
				let possibleValue = [1, 2, 3, 4, 5, 6, 7, 8, 9];
				for(i = Math.floor(row/3)*3; i < (Math.floor(row/3)*3 + 3); i++){
					for(j = Math.floor(col/3)*3; j < (Math.floor(col/3)*3 + 3); j++){
						if(arr[i][j] > 0){ 
							possibleValue = possibleValue.filter(value => !(value==arr[i][j]));
						}
					}
				}
				for(i = 0; i < arr.length; i++){
					if(arr[row][i]>0){
						possibleValue = possibleValue.filter(value => !(value==arr[row][i]));
					}
					if(arr[i][col]>0){
						possibleValue = possibleValue.filter(value => !(value==arr[i][col]));
					}
				}
				let currentArr = []; 
				for(let i = 0; i < possibleValue.length; i++){ 
					arr[row][col] = possibleValue[i]; 
					currentArr=solveSudoku(arr); 
					if(currentArr) return currentArr; 
				} 
				arr[row][col] = 0; 
				return false;
			}
		}
	}
	return arr;
}
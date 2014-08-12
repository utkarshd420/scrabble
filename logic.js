var colors = ['grey','red','green','blue','yellow'];
var x = "";
function disp(board,board_size)
{
	
	var html_str = "";var row = 0; var col = 0;
	for(i = 0; i<board_size;i++)
	{
		for (j=0;j<board_size;j++)
		{
			html_str+= "<span class= 'embossed box' id='box"+i+""+j+"' style='left:"+row+"px;top:"+col+"px;background-color:"+colors[board[i][j]]+"'></span>";
			row+=20;
		}
		//html_str+= "<br>";
		row =0;
		col+=20;
	}
//	console.log(html_str);
	var x = document.getElementById("container");
	document.getElementById("container").innerHTML=html_str;
}
/*function animate(xcoord,ycoord,value)
{
	
}*/
function init(board,board_size)
{
	board = new Array(board_size);
	for (i = 0; i < board_size; i++)
		board[i] = new Array(board_size);
	for(i = 0;i<board_size; i++)
		for(j = 0;j < board_size; j++)
			board[i][j] = Math.floor(Math.random()*5 );
	board[0][board_size-1] = 0;
	board[board_size-1][0] = 4;
	console.log(board);
	disp(board,board_size);
	return board;
}
var board = new Array();
var board_size = 30
board = init(board,board_size);
var score_user1 = 0;
var score_user2 = 0;
function clicked(value,user)
{
	if( user == 1 )
	{
		/*if(value == board[board_size-1][0])
			return;*/
		score_user1 = 0;
		var currvalue = board[0][board_size-1] ;
		var temp_stack = new Array(1);
		//temp_stack.push();
		temp_stack[0] = new Array(0,board_size-1);
		while(temp_stack.length != 0)
		{
			var coord = temp_stack.pop();
			var xcoord = coord[0];
			var ycoord = coord[1];
			console.log(coord);
			//animate(xcoord,ycoord,value);
			board[xcoord][ycoord] = value;
			score_user1++;
			if((xcoord+1) < board_size && board[xcoord+1][ycoord] == currvalue )
			{
				temp_ele = new Array(xcoord+1,ycoord);
				if(temp_stack.indexOf(temp_ele) == -1)
					temp_stack.push(temp_ele);
			}
			if((ycoord+1) <board_size && board[xcoord][ycoord+1] == currvalue)
			{
				temp_ele = new Array(xcoord,ycoord+1);
				if(temp_stack.indexOf(temp_ele) == -1)
					temp_stack.push(temp_ele);
			}
			if((xcoord-1) >=0 && board[xcoord-1][ycoord] == currvalue )
			{
				temp_ele = new Array(xcoord-1,ycoord);
				if(temp_stack.indexOf(temp_ele) == -1)
					temp_stack.push(temp_ele);
			}
			if((ycoord-1) >=0 && board[xcoord][ycoord-1] == currvalue )
			{
				temp_ele = new Array(xcoord,ycoord-1);
				if(temp_stack.indexOf(temp_ele) == -1)
					temp_stack.push(temp_ele);
			}
			if((xcoord+1) < board_size && (ycoord+1) < board_size && board[xcoord+1][ycoord+1] == currvalue )
			{
				temp_ele = new Array(xcoord+1,ycoord+1);
				if(temp_stack.indexOf(temp_ele) == -1)
					temp_stack.push(temp_ele);
			}
		}
		if(score_user1 >= (board_size*board_size*0.5))
			return;
		disp(board,board_size);
	}
	if( user == 2 )
	{
		/*if(value == board[board_size-1][0])
			return;*/
		score_user2 = 0;
		var currvalue = board[board_size-1][0] ;
		var temp_stack = new Array(1);
		//temp_stack.push();
		temp_stack[0] = new Array(board_size-1);
		while(temp_stack.length != 0)
		{
			var coord = temp_stack.pop();
			//console.log(coord);
			var xcoord = coord[0];
			var ycoord = coord[1];
			board[xcoord][ycoord] = value;
			score_user1++;
			if((xcoord+1) < board_size && board[xcoord+1][ycoord] == currvalue )
			{
				temp_ele = new Array(xcoord+1,ycoord);
				if(temp_stack.indexOf(temp_ele) == -1)
					temp_stack.push(temp_ele);
			}
			if((ycoord+1) <board_size && board[xcoord][ycoord+1] == currvalue)
			{
				temp_ele = new Array(xcoord,ycoord+1);
				if(temp_stack.indexOf(temp_ele) == -1)
					temp_stack.push(temp_ele);
			}
			if((xcoord-1) >=0 && board[xcoord-1][ycoord] == currvalue )
			{
				temp_ele = new Array(xcoord-1,ycoord);
				if(temp_stack.indexOf(temp_ele) == -1)
					temp_stack.push(temp_ele);
			}
			if((ycoord-1) >=0 && board[xcoord][ycoord-1] == currvalue )
			{
				temp_ele = new Array(xcoord,ycoord-1);
				if(temp_stack.indexOf(temp_ele) == -1)
					temp_stack.push(temp_ele);
			}
			if((xcoord+1) < board_size && (ycoord+1) < board_size && board[xcoord+1][ycoord+1] == currvalue )
			{
				temp_ele = new Array(xcoord+1,ycoord+1);
				if(temp_stack.indexOf(temp_ele) == -1)
					temp_stack.push(temp_ele);
			}
		}
		if(score_user1 >= (board_size*board_size*0.5))
			return;
		disp(board,board_size);
	}
}




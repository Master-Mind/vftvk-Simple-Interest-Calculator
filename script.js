function compute()
{
	//get values
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
	
	//validate inputs
	if (principal <= 0)
	{
		alert("Enter a positive number");
		document.getElementById("principal").focus();
		
		return;
	}
	
	//calculate interest and new year
	var interest = principal * years * rate / 100;
	
	var year = new Date().getFullYear() + parseInt(years);
	
	//make output string and assign it
	var outStr = "If you deposit <span class=\"highlighted\">" + principal + "</span>,<br/>";
	outStr += "at an interest rate of <span class=\"highlighted\">" + rate + "%</span>.<br/>";
	outStr += "You will receive an amount of <span class=\"highlighted\">" + interest + "</span>,<br/>";
	outStr += "in the year <span class=\"highlighted\">" + year + "</span>";
	
	document.getElementById("result").innerHTML = outStr;
}

function updateRate()
{
	var rateval = document.getElementById("rate").value;
	document.getElementById("rate_val").innerText = rateval;
}
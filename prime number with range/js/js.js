var input = document.createElement("input");
input.setAttribute("id","input");
input.placeholder="Enter a range:";
bod=document.getElementById("b")
bod.style.backgroundColor="#E3A78C"

 input.style.backgroundColor="white";
input.style.border="10px solid #A1B19F";
input.style.marginLeft="10%";
input.style.width="20%";
input.style.padding="10px";
document.body.appendChild(input);
document.write("<br>");



var buton1 = document.createElement("button");
buton1.setAttribute("id","buton1");
buton1.innerHTML="click ME!";
buton1.style.marginLeft="10%";
buton1.style.marginTop="50px";
//body.style.backgroundColor=yellow;

document.body.appendChild(buton1);


buton1.onclick=function()
{
	divt=document.createElement("div")
	divt.style.marginLeft="11%";
	divt.style.marginTop="50px";
	divt.innerHTML=""
	var rangeInput = parseInt(document.getElementById("input").value);
	
	for(i=2;i<=rangeInput;i++)
	{
		for(j=2;j<i;j++)
		{
			if(i%j==0)
			{
				break;
			}
		}
		if(i==j)
		//console.log(i)	
		
	{
		//divt=document.createElement("div")
		
		divt.innerHTML+=i+"<br>";
	}
	}
	document.body.appendChild(divt)
	
}
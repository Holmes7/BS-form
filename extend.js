function populate(s1)
{
	var des = document.getElementById(s1);
	var div1 = document.getElementById("firs");
	var div2 = document.getElementById("seco");
	if(des.value == "professor"){
		var newLabel1 = document.createElement("label");
		var newInput1 = document.createElement("input");
		var newLabel2 = document.createElement("label");
		var newInput2 = document.createElement("input");
		newLabel2.setAttribute("class", "form-check-label");
		newInput2.setAttribute("class", "form-control");
		newLabel1.setAttribute("class", "form-check-label");
		newInput1.setAttribute("class", "form-control");
		newLabel2.setAttribute("id", "pl2");
		newInput2.setAttribute("id", "pi2");
		newLabel1.setAttribute("id", "pl1");
		newInput1.setAttribute("id", "pi1");
		div1.appendChild(newLabel1);
		div1.appendChild(newInput1);
		div2.appendChild(newLabel2);
		div2.appendChild(newInput2);
		newLabel1.innerHTML = "Employee ID";
		newLabel2.innerHTML = "Department";
		var sl1 = document.getElementById("sl1");
		var sl2 = document.getElementById("sl2");
		var si1 = document.getElementById("si1");
		var si2 = document.getElementById("si2");
		div1.removeChild(sl1);
		div1.removeChild(si1);
		div2.removeChild(sl2);
		div2.removeChild(si2);
	}
	else {
		var newLabel1 = document.createElement("label");
		var newInput1 = document.createElement("input");
		var newLabel2 = document.createElement("label");
		var newInput2 = document.createElement("input");
		newLabel2.setAttribute("class", "form-check-label");
		newInput2.setAttribute("class", "form-control");
		newLabel1.setAttribute("class", "form-check-label");
		newInput1.setAttribute("class", "form-control");
		newLabel2.setAttribute("id", "sl2");
		newInput2.setAttribute("id", "si2");
		newLabel1.setAttribute("id", "sl1");
		newInput1.setAttribute("id", "si1");
		div1.appendChild(newLabel1);
		div1.appendChild(newInput1);
		div2.appendChild(newLabel2);
		div2.appendChild(newInput2);
		newLabel1.innerHTML = "Roll Number";
		newLabel2.innerHTML = "Department";
		var pl1 = document.getElementById("pl1");
		var pl2 = document.getElementById("pl2");
		var pi1 = document.getElementById("pi1");
		var pi2 = document.getElementById("pi2");
		div1.removeChild(pl1);
		div1.removeChild(pi1);
		div2.removeChild(pl2);
		div2.removeChild(pi2);
	}
	/*var des = document.getElementById(s1);
	var newLabel1 = document.createElement("label");
	var newInput1 = document.createElement("input");
	var newLabel2 = document.createElement("label");
	var newInput2 = document.createElement("input");
	var newLabel3 = document.createElement("label");
	var newInput3 = document.createElement("input");
	var newLabel4 = document.createElement("label");
	var newInput4 = document.createElement("input");
	var div1 = document.getElementById("firs");
	var div2 = document.getElementById("seco");
	newLabel2.setAttribute("class", "form-check-label");
	newInput2.setAttribute("class", "form-control");
	newLabel1.setAttribute("class", "form-check-label");
	newInput1.setAttribute("class", "form-control");

	newLabel4.setAttribute("class", "form-check-label");
	newInput4.setAttribute("class", "form-control");
	newLabel3.setAttribute("class", "form-check-label");
	newInput3.setAttribute("class", "form-control");

	if(des.value == "professor"){
		div1.appendChild(newLabel1);
		div1.appendChild(newInput1);
		div2.appendChild(newLabel2);
		div2.appendChild(newInput2);
		newLabel1.innerHTML = "Employee ID";
		newLabel2.innerHTML = "Department";
		div1.removeChild(newLabel3);
		div1.removeChild(newInput3);
		div2.removeChild(newLabel4);
		div2.removeChild(newInput4);
	}
	else if(des.value == "student") {
		div1.appendChild(newLabel3);
		div1.appendChild(newInput3);
		div2.appendChild(newLabel4);
		div2.appendChild(newInput4);
		newLabel3.innerHTML = "Roll Number";
		newLabel4.innerHTML = "Department";
		div1.removeChild(newLabel1);
		div1.removeChild(newInput1);
		div2.removeChild(newLabel2);
		div2.removeChild(newInput2);
	}*/
}
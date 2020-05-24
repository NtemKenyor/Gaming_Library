var ctx = "";
function $(selector){

	var specs = {};
	specs.selector = selector; 
	specs.element = document.querySelector(specs.selector);
	

	/*specs.canvas = function(id, h, w){
		h = (!h) ? "100vh" : h;
		w = (!w) ? "100%" : w;
		var element = document.createElement('canvas');
		id = (!id) ? "": id;
		element.setAttribute("id", id);
		element.style.height = h;
		element.style.width  = w;

		//element.setAttribute("height", h);
		element.innerHTML = (!content)? "": content;
		var ref = document.querySelector('body')
		ref.appendChild(element, ref);
	}*/

	specs.mode = 	function game_mode(interface){
		ctx = specs.element.getContext(interface);
		return specs;
	}

	//function to draw rectangle
	specs.drawRectangle = (x, y, width, height, fill, line, l_w) => {
		ctx.beginPath();
		ctx.lineWidth = l_w;
		ctx.fillStyle = fill;
		ctx.strokeStyle = line;
		ctx.rect(x, y, width, height);
		ctx.fill();
		ctx.stroke();
		return specs;
	}

	// Function to draw the circle
	specs.drawCircle = (x, y, radius, start, end, fill, line, l_w, bol) => {
		ctx.beginPath();
		ctx.lineWidth = l_w;
		ctx.fillStyle = fill;
		ctx.strokeStyle = line;
		ctx.arc(x, y, radius, start, end, bol);
		ctx.stroke();
		ctx.fill();
		return specs;
	}

	specs.drawLine = (x, y, l_x, l_y, fill, line, l_w, ) => {
		ctx.beginPath();
		ctx.lineWidth = l_w;
		ctx.fillStyle = fill;
		ctx.strokeStyle = line;
		ctx.moveTo(x, y);
		ctx.lineTo(l_x, l_y);
		//ctx.arc(x, y, radius, start, end, bol);
		ctx.stroke();
		ctx.fill();
		
		return specs;
	}

	specs.drawImage = function(src,x,y,w,h){
		ctx.drawImage(src,x,y,w,h);
		return specs;
	}


	return specs;

}

//the content to the canvas and the gaming library sections.........
	function  createTag  (tag_name, content, id, properties){
		var element = document.createElement(tag_name);
		properties = (!properties) ? "": properties;
		id = (!id) ? "": id;

		element.setAttribute("id", id);
		properties = obj_to_string (properties);
		//property = obj_to_string(property);
		properties = properties.replace(/,/g, ";").replace(/{|}|"/g, "").toString();
		element.setAttribute("style", (properties));
		element.innerHTML = (!content)? "": content;
		var ref = document.querySelector('body');
		if (ref == null){
			ref = document.querySelector('head');
		}
		ref.appendChild(element, ref);
		return id;
	}

	//createTag("table");
	function type(version){
		var dec = "<!DOCTYPE html>";
	}


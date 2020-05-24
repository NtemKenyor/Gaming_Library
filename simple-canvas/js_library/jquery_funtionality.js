//alert("connected");
//PROPOSED NAME = HASHGACHA GAMING LIBRARY aka the dark gaming library
var Hgl = $;
// I am going to make it very easy for we to move from JQuery to this Gaming L
//first of all, I want people to know that it is not just a gaming library... It is more and still 
//an effective gaming library. 
var JQuery = $; // I do not know if doing this legal but we would be getting a great market from them
function $(selector){
	var specs = {};
	specs.selector = selector;
	specs.element = document.querySelector(specs.selector);
	
	//TODO ::: we would work with innerHTML against node
	specs.html = function (html_content){
		if(!html_content){
			//TODO needs to be worked on to collect everything within the tag
		   return specs.element;
		}else{
			specs.element.innerHTML = html_content;
		}
		return specs.element;
	}
	
	//TODO ::: getting the test using textContent, innerText against node
	//TODO ::: sending or displaying text with document.creatTextNode(" new text");
	//TODO ::: cloneNode()can be used to make a copy of the node ;
	//TODO ::: using elem.appendChild();
	//TODO ::: using elem.insertBefore();
	
	///const element = document.querySelector('.element')
	//pseudoElementStyle = getComputedStyle(element, '::before')
	//console.log(pseudoElementStyle.content) // Before pseudo element
	
	specs.text = function (text_content){
		if(!text_content){
			//TODO ::: not working, needs small addition here...
			specs.element.innerText;
		}else{
			text_content = document.creatTextNode = text_content;
			specs.element.innerText = text_content;
		}
		return specs;
	}
	
	specs.attr = function (attribute, value){
		if(!value){
			specs.element.getAttribute(attribute);
		}
		else{
			specs.element.setAttribute(attribute, value);
		}
		return specs;
	}
	
	specs.val = function (value){
		if(!value){
			specs.element.value = "";
		}else{
			specs.element.value = value;
		}
		
		return specs;
	}
	
	specs.height = function (){ return specs.element.offsetHeight; }
	specs.width = function (){ return specs.element.offsetWidth; }
	specs.parent = function (){ 
		specs.element = specs.element.parentNode; 
		return specs;
	}
	specs.children = function (key){ 
		if(!key) key = 0;
		specs.element = specs.element.childNodes[key]; 
		return specs;
	}
	
	//adding event listeners to carry out different actions
	specs.on = function (event, callback){
		specs.element["on"+event] = callback;	
		return specs;	
	}
	//From here you can get the double click and others
	specs.click = function(callback){
		specs.element.onclick = callback;
		return specs;
	}
	//dealing with stylesheets and design stuffs
	/*specs.insertRule = function (name, value, position, stylesheet){
		if(!stylesheet) stylesheet = 0;
		if(!position) position = 0;
		
		//check for the specified style sheet
		if(document.styleSheets[stylesheet]){
			document.styleSheets[stylesheet].insertRule(self.selector)
		}
	}*/
	
	specs.addScript = function (script){
		var in_script = document.createElement('script');
		in_script.innerHTML = script.toString();
		var ref = document.querySelector('head');
		ref.appendChild(in_script, ref);
		return specs;
	}
	
	specs.addStyle = function (css_code){
		var style = document.createElement('style');
		css_code = obj_to_string (css_code);
		css_code = css_code.replace(/,/g, ";").replace(/"/g, "").toString();
		style.innerHTML = selector + css_code;
		var ref = document.querySelector('head');
		ref.appendChild(style, ref);
		return specs;
	}
	
	specs.css = function (property, value){
		if(!value){
			
			if(isString(property)){
				var css_value = specs.element.style.property;
				if(!css_value ){
					const style = getComputedStyle(specs.element);
					css_value = style.getPropertyValue(property); 

					if(!css_value){
						//getting the style value of a pseudoELEMENT
						//pseudoElementStyle = getComputedStyle(element, '::before');
						css_value = getComputedStyle(specs.element, property);
					}
				}
				//alert(css_value);
				return css_value;
			}else{
				//TODO - change the object to strings and add it one after the other;
				property = obj_to_string (property);
				//property = obj_to_string(property);
				property = property.replace(/,/g, ";").replace(/{|}|"/g, "").toString();
				specs.element.setAttribute("style", (property));
			}
			
			
			
			
			//style.innerHTML = 'div {' + 'color: green;' + ' }';
			//Get  the first script tag
			//var ref = document.querySelector('script');
			//Insert our new styles before the frist script tag
			//ref.parentNode.insertBefore(style, ref)
		}else{
			specs.element.setAttribute("style", (property + ":" + value+";"));
			return specs;
		}
		
		return specs;
	}
	
	return specs;

}

//associative functions that are very helpful
function isString (property){
	if(typeof property === "string" ||  (property instanceof String) || property.constructor === String){
			return true;
		}else{
			return false;
		}
}
function obj_to_string (obj){
	obj = JSON.stringify(obj)
	return obj;
		/*if(!(obj = JSON.stringify(obj))){
				//const element = document.querySelector('.element')
				//pseudoElementStyle = getComputedStyle(element, '::before')
				//console.log(pseudoElementStyle.content) // Before pseudo element
				var string_val = "";
				for (var i in obj){
					string_val += i + ":" + obj[i]+ ";";
					//alert(string_val);
				}
				obj = string_val;
			}
			return obj;*/
	}
function addScript (script){
		var in_script = document.createElement('script');
		in_script.innerHTML = script.toString();
		var ref = document.querySelector('head');
		ref.appendChild(in_script, ref);
		return in_script;
	}
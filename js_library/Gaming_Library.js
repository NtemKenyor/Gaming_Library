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
		   specs.element;
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
	
	specs.css = function (property, value){
		if(!value){
			property = property.replace(/","/g, ";");
			specs.element.setAttribute("style", property);
		}else{
			specs.element.setAttribute("style", (property + ":" + value));
		}
		
		return specs;
	}
	
	return specs;

}
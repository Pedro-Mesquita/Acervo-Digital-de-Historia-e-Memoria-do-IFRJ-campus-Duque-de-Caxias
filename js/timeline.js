// Selecting the elements of DOM
const [arrowLeft, arrowRight] = document.querySelectorAll("#timeline > img");
const pTagRadioInput = document.querySelectorAll(".circle > p:nth-child(1)"); 
const imgContainer = document.querySelector("#img-container");
const textContainer = document.querySelector("#text-container");

// Adding function to events
arrowLeft.addEventListener("click", minusOne);
arrowRight.addEventListener("click", sizeVerify);

function sizeVerify(){
	if(window.innerWidth > 470){
		if(pTagRadioInput[pTagRadioInput.length - 1].innerHTML == "2012"){
			menssage();
		}else{
			addOne();
		}
	}else if(window.innerWidth <= 470 && window.innerWidth >= 360){
		if(pTagRadioInput[pTagRadioInput.length - 2].innerHTML == "2012"){
			menssage();
		}else{
			addOne();
		}
	}else if(window.innerWidth < 360 && window.innerWidth >= 310){
		if(pTagRadioInput[pTagRadioInput.length - 3].innerHTML == "2012"){
			menssage();
		}else{
			addOne();
		}
	}else{
		if(pTagRadioInput[pTagRadioInput.length - 4].innerHTML == "2012"){
			menssage();
		}else{
			addOne();
		}
	}
}

function minusOne(){
	if(pTagRadioInput[0].innerHTML == "2006"){
		alert("Nosso acervo só vai até 2006.");
	}else{
		for(let i = 0; i < pTagRadioInput.length; i++){
			pTagRadioInput[i].innerHTML--;
		}
	}
}
	

function addOne(){
	for(let i = 0; i < pTagRadioInput.length; i++){
		pTagRadioInput[i].innerHTML++;
	}
}

function menssage(){
	return alert("Nosso acervo só vai até 2012");
} 


// Event click on radio input


document.getElementById("container-circle").onclick = function (element) {
	if(element.target.type == "radio"){
		// 2006
		if(element.target.previousElementSibling.innerHTML == "2006"){
			textContainer.innerHTML = `          
			<p>
            Lacus vestibulum sed arcu non odio euismod. Enim sit amet venenatis
            urna cursus eget nunc. Et malesuada fames ac turpis egestas.
            Ultrices dui sapien eget mi proin sed libero enim sed. Ornare massa
            eget egestas purus viverra accumsan. Ac odio tempor orci dapibus
            ultrices. Neque aliquam vestibulum morbi blandit cursus. Sit amet
            facilisis magna etiam tempor orci. Massa placerat duis ultricies
            lacus sed turpis. Mollis aliquam ut porttitor leo.
          </p>
          <p>
            Id cursus metus aliquam eleifend mi in. Dictum sit amet justo donec
            enim diam vulputate ut pharetra. Amet tellus cras adipiscing enim eu
            turpis egestas. Risus commodo viverra maecenas accumsan lacus vel.
            Cum sociis natoque penatibus et. Tincidunt augue interdum velit
            euismod in pellentesque massa placerat. Consequat interdum varius
            sit amet. Nulla aliquet porttitor lacus luctus accumsan. Adipiscing
            vitae proin sagittis nisl rhoncus mattis. Odio aenean sed adipiscing
            diam donec. Quam quisque id diam vel quam elementum pulvinar etiam
            non. Sit amet consectetur adipiscing elit pellentesque habitant
            morbi tristique. Lectus sit amet est placerat in egestas erat
            imperdiet.
          </p>`;
			imgContainer.innerHTML = `<img
		  src="../images/example.jpg"
		  alt="ifrj engenheiro paulo de frontin"
		/>`;
		}
		if(element.target.previousElementSibling.innerHTML == "2007"){
			// eslint-disable-next-line quotes
			textContainer.innerHTML = `          
			<p>
			Texto para o ano de 2007
          </p>`;
			imgContainer.innerHTML = `<img
		  src="../images/example.jpg"
		  alt="ifrj engenheiro paulo de frontin"
		/>`;
		}
	}
};
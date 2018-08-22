window.onload = function() {
	
	// PERSON OBJ
	
	let person = {
		name: '',
		age: '',
		sex: 'Мужской',
		color: 'url(img/skin/skin-1.png)',
		hair: 'url(img/hair/construct/hair-1.png)',
		politicalViews: 'Либеральные',
		biography: '',
		costume: 'url(img/clothes/construct/clothes-1.png)',
		skinIndex: 1,
		hairIndex: 1,
		costumeIndex: 1,
		minIndexValueMale: 1,
		maxIndexValueMale: 3,
		minIndexValueFemale: 4,
		maxIndexValueFemale: 6
	};

	
	// Divs
	
	let popUpBtn = document.querySelector('#popup-btn');
	let overlay = document.querySelector('.overlay');
	let popup = document.querySelector('.popup');
	let mainCardsItem = document.querySelectorAll('.main-cards-item');
	
	let newCandidateWrap = document.querySelector('.new-candidate');
	let newCandidate = document.querySelector('.photo-3');
	let newCandidateName = document.querySelector('.new-candidate .name');
	let newCandidateAge = document.querySelector('.new-candidate .age');
	let newCandidateSex = document.querySelector('.new-candidate .sex');
	let newCandidateViews = document.querySelector('.new-candidate .views');
	let newCandidateBio = document.querySelector('.new-candidate .bio');
	let mainCards = document.querySelector('.main');
	let custom = document.querySelector('.custom');
	let customInfo = document.querySelector('.custom-info');
	let customChar = document.querySelector('.custom-char');
	let customStyle = document.querySelector('.custom-style');
	
	let readyBtn = document.querySelector('#ready');
	let resetBtn = document.querySelector('#reset');
	let votingBtn = document.querySelector('#voting');
	let crimeBtn = document.querySelector('#crime');
	
	let progressBar1 = document.querySelector('.progress-bar-1');
	let progressBar2 = document.querySelector('.progress-bar-2');
	let progressBar3 = document.querySelector('.progress-bar-3');
	
	let result1 = document.querySelector('.result-1');
	let result2 = document.querySelector('.result-2');
	let result3 = document.querySelector('.result-3');
	
	let skinPrevBtn = document.querySelector('.skin .prev');
	let skinNextBtn = document.querySelector('.skin .next');
	let skinColor = document.querySelectorAll('.skin .skin-color');
	
	let hair = document.querySelectorAll('.hair .hair-style');
	let hairMale = document.querySelectorAll('.hair .male-hair');
	let hairFemale = document.querySelectorAll('.hair .female-hair');
	let hairPrevBtn = document.querySelector('.hair .prev');
	let hairNextBtn = document.querySelector('.hair .next');
	
	let clothes = document.querySelectorAll('.clothes .clothes-style');
	let maleClothes = document.querySelectorAll('.clothes .male-clothes');
	let femaleClothes = document.querySelectorAll('.clothes .female-clothes');
	let clothesPrevBtn = document.querySelector('.clothes .prev');
	let clothesNextBtn = document.querySelector('.clothes .next');
	
	let personSkin = document.querySelector('.person-skin');
	let personClothes = document.querySelector('.person-clothes');
	let personHair = document.querySelector('.person-hair');
	
	let resultCount = document.querySelectorAll('.result-count');
	
	newCandidateWrap.style.display = 'none';
	
	// Custom Sliders
	
	// Skin Slider
	let skinSlider = new Slider(skinColor, skinPrevBtn, skinNextBtn);


	skinNextBtn.addEventListener('click', function(){
		skinSlider.next();
		
		if (person.sex === 'Мужской') {
			person.skinIndex++;
			
			if (person.skinIndex == person.minIndexValueFemale) {
					person.skinIndex = person.minIndexValueMale;
				}
				
			changeSkin(person.skinIndex);
			
		} else if (person.sex === 'Женский') {

			person.skinIndex++;

			if (person.skinIndex > person.maxIndexValueFemale) {
				person.skinIndex = person.minIndexValueFemale;
			}
			changeSkin(person.skinIndex);
		}
	});
	
	skinPrevBtn.addEventListener('click', function(){
		skinSlider.prev();
		
		if (person.sex === 'Мужской') {
			person.skinIndex--;

			if (person.skinIndex < person.minIndexValueMale) {
					person.skinIndex = person.maxIndexValueMale;
				}
				
			changeSkin(person.skinIndex);
			
		} else if (person.sex === 'Женский') {
			person.skinIndex--;

			if (person.skinIndex < person.minIndexValueFemale) {
				person.skinIndex = person.maxIndexValueFemale;
			}
			changeSkin(person.skinIndex);
		}
		
	});
	
	// Hair Slider
	

	let hairSlider = new Slider(hairMale, hairPrevBtn, hairNextBtn);
	
	hairNextBtn.addEventListener('click', function(){
		hairSlider.next();
		
		if (person.sex === 'Мужской') {
			person.hairIndex++;
			
			if (person.hairIndex == person.minIndexValueFemale) {
					person.hairIndex = person.minIndexValueMale;
				}
				
			changeHair(person.hairIndex);
			
		} else if (person.sex === 'Женский') {

			person.hairIndex++;

			if (person.hairIndex > person.maxIndexValueFemale) {
				person.hairIndex = person.minIndexValueFemale;
			}
			changeHair(person.hairIndex);
		}
	});
	
	hairPrevBtn.addEventListener('click', function(){
		hairSlider.prev();
		
		if (person.sex === 'Мужской') {
			person.hairIndex--;

			if (person.hairIndex < person.minIndexValueMale) {
					person.hairIndex = person.maxIndexValueMale;
				}
				
			changeHair(person.hairIndex);
			
		} else if (person.sex === 'Женский') {
			person.hairIndex--;

			if (person.hairIndex < person.minIndexValueFemale) {
				person.hairIndex = person.maxIndexValueFemale;
			}
			changeHair(person.hairIndex);
		}
	});
	
	// Clothes Slider
	
	let clothesSlider = new Slider(maleClothes, clothesPrevBtn, clothesNextBtn);
	
	clothesNextBtn.addEventListener('click', function(){
		clothesSlider.next();
		
		if (person.sex === 'Мужской') {
			person.costumeIndex++;
			
			if (person.costumeIndex == person.minIndexValueFemale) {
					person.costumeIndex = person.minIndexValueMale;
				}
				
			changeClothes(person.costumeIndex);
			
		} else if (person.sex === 'Женский') {

			person.costumeIndex++;

			if (person.costumeIndex > person.maxIndexValueFemale) {
				person.costumeIndex = person.minIndexValueFemale;
			}
			changeClothes(person.costumeIndex);
		}
	});
	
	clothesPrevBtn.addEventListener('click', function(){
		clothesSlider.prev();
		
		if (person.sex === 'Мужской') {
			person.costumeIndex--;

			if (person.costumeIndex < person.minIndexValueMale) {
					person.costumeIndex = person.maxIndexValueMale;
				}
				
			changeClothes(person.costumeIndex);
			
		} else if (person.sex === 'Женский') {
			person.costumeIndex--;

			if (person.costumeIndex < person.minIndexValueFemale) {
				person.costumeIndex = person.maxIndexValueFemale;
			}
			changeClothes(person.costumeIndex);
		}
	});
	
	
	// INPUTS
	
	let nameInput = document.querySelector('#name');
	let ageInput = document.querySelector('#age');
	let sexInput = document.querySelectorAll('.radio input');
	let viewsInput = document.querySelector('#select');
	let bioInput = document.querySelector('#bio');
	
	// EVENTS
	
	for (let i = 0; i < mainCardsItem.length; i++) {
		mainCardsItem[i].addEventListener('mouseover', function(){
			this.classList.add('main-cards-item-active');
		});
	}
	
	for (let i = 0; i < mainCardsItem.length; i++) {
		mainCardsItem[i].addEventListener('mouseleave', function(){
			if (this.classList.contains('main-cards-item-active')) {
				this.classList.remove('main-cards-item-active');
			}
		});
	}
	
	popUpBtn.addEventListener('click', function(e){
		e.preventDefault();
		
		popup.classList.add('animated', 'bounceOutUp');
		setTimeout(function(){
			overlay.style.display = 'none';
			mainCards.style.display = 'none';
			custom.style.display = 'flex';
			customInfo.style.display = 'block';
			customInfo.classList.add('animated', 'bounceInLeft');
			customChar.style.display = 'block';
			customChar.classList.add('animated', 'bounceIn');
			customStyle.style.display = 'block';
			customStyle.classList.add('animated', 'bounceInRight');
		}, 1000);
	});
	
	nameInput.addEventListener('change', function(){
		person.name = this.value;
	});
	
	ageInput.addEventListener('change', function(){
		person.age = this.value;
	}); 
	
	for (let i = 0; i < sexInput.length; i++) {
		sexInput[i].addEventListener('change', function(){
			person.sex = this.value;
			if (this.value === "Женский") {
			
			for (let i = 0; i < hairMale.length; i++) {
				hairMale[i].style.display = 'none';
			}
			
			hairSlider = new Slider(hairFemale, hairPrevBtn, hairNextBtn);
			
			for (let i = 0; i < maleClothes.length; i++) {
				maleClothes[i].style.display = 'none';
			}
			
			clothesSlider = new Slider(femaleClothes, clothesNextBtn, clothesPrevBtn);
			
			skinSlider.start();
			hairSlider.start();
			clothesSlider.start();

			
			person.skinIndex = person.minIndexValueFemale;
			person.costumeIndex = person.minIndexValueFemale;
			person.hairIndex = person.minIndexValueFemale;
			
			changeSkin(person.skinIndex);
			changeHair(person.hairIndex);
			changeClothes(person.costumeIndex);
			
			

		} else if (this.value === "Мужской") {
			
			for (let i = 0; i < hairFemale.length; i++) {
				hairFemale[i].style.display = 'none';
			}
			
			hairSlider = new Slider(hairMale, hairPrevBtn, hairNextBtn);
			
			for (let i = 0; i < femaleClothes.length; i++) {
				femaleClothes[i].style.display = 'none';
			}
			
			clothesSlider = new Slider(maleClothes, clothesNextBtn, clothesPrevBtn);
			
			skinSlider.start();
			hairSlider.start();
			clothesSlider.start();
			person.skinIndex = person.minIndexValueMale;
			person.costumeIndex = person.minIndexValueMale;;
			person.hairIndex = person.minIndexValueMale;;
			
			changeSkin(person.skinIndex);
			changeHair(person.hairIndex);
			changeClothes(person.costumeIndex);
		}
		});
		
		
	}

	viewsInput.addEventListener('change', function(){
		let index = this.selectedIndex;
		let choose = this[index].value;
		person.politicalViews = choose;
	});
	
	bioInput.addEventListener('change', function(){
		person.biography = this.value;
	});
	
	// READY

	readyBtn.addEventListener('click', function(e){
		e.preventDefault();
		
		for (let i = 0 ; i < resultCount.length; i++) {
		   resultCount[i].innerHTML = '0%';
	   }
	   
	   progressBar1.style.height = 0;
	   progressBar2.style.height = 0;
	   progressBar3.style.height = 0;
		
		if (person.name == '') {
			alert('Вы не указали свое имя!');
		} else if (person.age == '') {
			alert('Вы не указали свой возраст!');
		} else if (person.politicalViews == '') {
			alert('Вы не указали свои политические взгляды!');
		} else if (person.biography == '') {
			alert('Вы ничего не написали в своей биографии');
		} else {
			
		}


		customInfo.classList.remove('bounceInLeft');
		customInfo.classList.add('bounceOutLeft');
		customChar.classList.remove('bounceIn');
		customChar.classList.add('bounceOut');
		customStyle.classList.remove('bounceInRight');
		customStyle.classList.add('bounceOutRight');
		
		setTimeout(function(){
			custom.style.display = 'none';
		}, 1000);
		
		
		newCandidate.style.cssText = `
		background-image: url(img/clothes/construct/shoes.png),
		${person.costume},
		${person.hair},
		${person.color};
	`;

	newCandidate.style.backgroundSize = 'cover';
	newCandidate.style.backgroundPosition = 'center';
	
	newCandidateName.innerHTML = person.name;
	newCandidateAge.innerHTML = person.age;
	newCandidateSex.innerHTML = person.sex;
	newCandidateViews.innerHTML = person.politicalViews;
	newCandidateBio.innerHTML = person.biography;
	
	setTimeout(function(){
		newCandidateWrap.style.display = 'block';
	    mainCards.style.display = 'block';
	}, 1000);
	
	
	});
	
	// VOTING
	
	votingBtn.addEventListener('click', function(){
		
		let votes1 = Math.floor(Math.random() * 100);
		let total = 100 - votes1;
		let votes2 = Math.floor(Math.random() * total);
		let votes3 = total - votes2;
		
		progressBar1.style.height = votes1+'%';
		progressBar2.style.height = votes2+'%';
		progressBar3.style.height = votes3+'%';
		
		let id1 = setInterval(moove1, 50);
		let num1 = 0;
		

		function moove1() {
			
			if (num1 >= votes1) {
				clearInterval(id1);
			} else {
				num1++;
				result1.innerHTML = num1+'%';
			}
		}
		
		let id2 = setInterval(moove2, 50);
		let num2 = 0;
		

		function moove2() {
			
			if (num2 >= votes2) {
				clearInterval(id2);
			} else {
				num2++;
				result2.innerHTML = num2+'%';
			}
		}
		
		let id3 = setInterval(moove3, 50);
		let num3 = 0;
		

		function moove3() {
			
			if (num3 >= votes3) {
				clearInterval(id3);
			} else {
				num3++;
				result3.innerHTML = num3+'%';
			}
		}
		
	});
	
	crimeBtn.addEventListener('click', function(){
		let votes1 = Math.floor(Math.random() * 75);
		let total = 75 - votes1;
		let votes2 = Math.floor(Math.random() * total);
		let votes3 = total - votes2;
		votes3 = votes3 + 25;
		
		let id1 = setInterval(moove1, 50);
		let num1 = 0;
		

		function moove1() {
			
			if (num1 >= votes1) {
				clearInterval(id1);
			} else {
				num1++;
				result1.innerHTML = num1+'%';
			}
		}
		
		let id2 = setInterval(moove2, 50);
		let num2 = 0;
		

		function moove2() {
			
			if (num2 >= votes2) {
				clearInterval(id2);
			} else {
				num2++;
				result2.innerHTML = num2+'%';
			}
		}
		
		let id3 = setInterval(moove3, 50);
		let num3 = 0;
		

		function moove3() {
			
			if (num3 >= votes3) {
				clearInterval(id3);
			} else {
				num3++;
				result3.innerHTML = num3+'%';
			}
		}
		
	});
	
	// RESET

	resetBtn.addEventListener('click', function(){
		
		nameInput.value = '';
		ageInput.value = '';
		bioInput.value = '';
		sexInput[0].checked = true;
		viewsInput[0].selected = true;
		
		changeSkin(person.minIndexValueMale);
		changeHair(person.minIndexValueMale);
		changeClothes(person.minIndexValueMale);
		
		skinSlider.start();
		hairSlider.start();
		clothesSlider.start();
		

		newCandidateWrap.style.display = 'none';
	    mainCards.style.display = 'none';
		
		setTimeout(function(){
			custom.style.display = 'flex';
			customInfo.style.display = 'block';
			customInfo.classList.remove('bounceOutLeft');
			customInfo.classList.add('animated', 'bounceInLeft');
			customChar.style.display = 'block';
			customChar.classList.remove('bounceOut');
			customChar.classList.add('animated', 'bounceIn');
			customStyle.style.display = 'block';
			customStyle.classList.remove('bounceOutRight');
			customStyle.classList.add('animated', 'bounceInRight');
		}, 1000);

	});
	
	
	
	//FUNC.
	
	function changeSkin(index) {
		personSkin.style.background = `url(img/skin/skin-${index}.png)`;
		personSkin.style.backgroundPosition = 'center';
		personSkin.style.backgroundSize = 'cover';
		
		person.color = `url(img/skin/skin-${index}.png)`;
	}
	
	function changeHair(index) {
		personHair.style.background = `url(img/hair/construct/hair-${index}.png)`;
		personHair.style.backgroundPosition = 'center';
		personHair.style.backgroundSize = 'cover';
		
		person.hair = `url(img/hair/construct/hair-${index}.png)`;
		
	}
	
	function changeClothes(index) {
		personClothes.style.background = `url(img/clothes/construct/clothes-${index}.png)`;
		personClothes.style.backgroundPosition = 'center';
		personClothes.style.backgroundSize = 'cover';
		
		person.costume = `url(img/clothes/construct/clothes-${index}.png)`;
	}
	
	
}

// SLIDER CONSTRUCTOR

function Slider(obj) {
	this.obj = obj;
	let index = 0;
	
	this.start = function() {
		this.obj[index].style.display = 'none';
		index = 0;
		this.obj[index].style.display = 'block';
	};
	
	this.next = function() {
		this.obj[index].style.display = 'none';
		index++;

		if (index > this.obj.length -1) {
			index = 0;
		}
		
		this.obj[index].style.display = 'block';
	};
	
	this.prev = function() {
		this.obj[index].style.display = 'none';
		index--;

		if (index < 0) {
			index = this.obj.length -1;
		}
		
		this.obj[index].style.display = 'block';
	}
	
}







	
const iconItems1 = {
	icon1 : {'top': 73, 'left': 13, 'mTop': 20, 'mLeft': 11, 'url': 'img/icon01.svg', 'hover_url': 'img/icon01_hover.svg', 'title': '我的證書牆', 'link': '#0'},
	icon2 : {'top': 66, 'left': 25, 'mTop': 30, 'mLeft': 25, 'url': 'img/icon02.svg', 'hover_url': 'img/icon02_hover.svg', 'title': '證書熱點地圖', 'link': '#0'},
	icon3 : {'top': 32, 'left': 46, 'mTop': 40, 'mLeft': 40, 'url': 'img/icon03.svg', 'hover_url': 'img/icon03_hover.svg', 'title': '錯字大熱透', 'link': '#0'},
	icon4 : {'top': 45, 'left': 65, 'mTop': 50, 'mLeft': 55, 'url': 'img/icon04.svg', 'hover_url': 'img/icon04_hover.svg', 'title': '產業證書大搜密', 'link': '#0'},
	icon5 : {'top': 65, 'left': 75, 'mTop': 60, 'mLeft': 47, 'url': 'img/icon05.svg', 'hover_url': 'img/icon05_hover.svg', 'title': '學群證書大觀園', 'link': '#0'},
	// icon6 : {'top': 75, 'left': 65, 'mTop': 67, 'mLeft': 10, 'url': 'img/icon06.svg', 'hover_url': 'img/icon06_hover.svg', 'title': '', 'link': '#0'},
}

const iconItems2 = {
	icon1 : {'top': 55, 'left': 30, 'mTop': 15, 'mLeft': 11, 'url': 'img/icon01.svg', 'hover_url': 'img/icon01_hover.svg', 'title': '聽讀寫超群指數', 'link': '#0'},
	icon2 : {'top': 24, 'left': 32, 'mTop': 29, 'mLeft': 25, 'url': 'img/icon02.svg', 'hover_url': 'img/icon02_hover.svg', 'title': '職屬於你', 'link': '#0'},
	icon3 : {'top': 83, 'left': 40, 'mTop': 40, 'mLeft': 27, 'url': 'img/icon03.svg', 'hover_url': 'img/icon03_hover.svg', 'title': '升級增能模擬考', 'link': '#0'},
	icon4 : {'top': 16, 'left': 55, 'mTop': 60, 'mLeft': 30, 'url': 'img/icon04.svg', 'hover_url': 'img/icon04_hover.svg', 'title': '動態儀表板', 'link': '#0'},
	icon5 : {'top': 72, 'left': 60, 'mTop': 72, 'mLeft': 12, 'url': 'img/icon05.svg', 'hover_url': 'img/icon05_hover.svg', 'title': '豐功偉業下載區', 'link': '#0'},
}

const iconItems3 = {
	icon1 : {'top': 60, 'left': 15, 'mTop': 21, 'mLeft': 11, 'url': 'img/icon01.svg', 'hover_url': 'img/icon01_hover.svg', 'title': '雞首or牛後', 'link': '#0'},
	icon2 : {'top': 70, 'left': 35, 'mTop': 35, 'mLeft': 27, 'url': 'img/icon02.svg', 'hover_url': 'img/icon02_hover.svg', 'title': '隨拉隨選自由比', 'link': '#0'},
	icon3 : {'top': 31, 'left': 44, 'mTop': 50, 'mLeft': 40, 'url': 'img/icon03.svg', 'hover_url': 'img/icon03_hover.svg', 'title': '', 'link': '#0'},
	icon4 : {'top': 13, 'left': 52, 'mTop': 65, 'mLeft': 12, 'url': 'img/icon04.svg', 'hover_url': 'img/icon04_hover.svg', 'title': '', 'link': '#0'},
	icon5 : {'top': 68, 'left': 60, 'mTop': 75, 'mLeft': 35, 'url': 'img/icon05.svg', 'hover_url': 'img/icon05_hover.svg', 'title': '', 'link': '#0'},
}

function setIcon(target) {
	let position = $('#section-'+target).find('.ice-icon-items');

	let items;
	switch (target) {
		case '1':
			items = iconItems1;
			break;
		case '2':
			items = iconItems2;	
			break;
		case '3':
			items = iconItems3;		
			break;
	}
	
	Object.values(items).forEach((element, index) => {
		let number = index + 1;
		let delay = (index * .5) + .5;
		let div = 
		`<div class="ice-icon-item t${number} fade_in">
			<a href="${element.link}">
				<img src="${element.url}" alt="">
			</a>
			<div class="pop_content">${element.title}</div>
			<div class="pop_arrow" />
		</div>`
		let top ;
		let left;
		if($(window).width()< 450) {
			top = element.mTop;
			left = element.mLeft;
		} else {
			top = element.top
			left = element.left;
		}

		position.append(div);
		position.find('.ice-icon-item.t'+(number)).css({"top": top+"%", "left": left+"%", "animation-delay": delay+'s'});
		$('.ice-icon-item.t'+(number)).hover(function() {
			$(this).find('img').attr('src', element.hover_url);
			$(this).find('img').css('transform', 'scale(1.2)');
		}, function() {
			$(this).find('img').attr('src', element.url);	
			$(this).find('img').css('transform', 'scale(1)');
		})

		$('.side_nav').find('.nav-item').removeClass('active');
		$('.side_nav').find('a[href="#section-'+target+'"]').parent().addClass('active');

	});
}
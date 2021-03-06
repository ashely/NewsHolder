Ext.define('NewsHolder.controller.ButtonController', {
	extend : 'Ext.app.Controller',
	
	config : {
		refs : {
			feedIcon : "#feedIcon",
			homeButton : "#homeButton",
			articleScrapButton : "#articleScrapButton",
			mainSearchButton : "#mainSearchButton",
			mainPanel:"#mainPanel"
		},

		control : {
			'#article_font_size_up' : {
				tap : 'font_size_up'
			},
			'#article_font_size_down' : {
				tap : 'font_size_down'
			},
			homeButton : {
				tap : "homeButtonTap",
			},
			articleScrapButton : {
				tap : "articleScrapButtonTap",
			},
			mainSearchButton : {
				tap : "mainSearchButtonTap",
			},
		}
	},

	/** 기사 화면에서 글자 키우기 버튼을 눌렀을 때 */
	font_size_up : function(button, event) {
		var current = parseInt($("#mainArticle").css("font-size"));
		console.log(current);
		$("#mainArticle").css("font-size", (++current) + "px");
	},

	/** 기사 화면에서 글자 줄이기 버튼을 눌렀을 때 */
	font_size_down : function(button, event) {
		var current = parseInt($("#mainArticle").css("font-size"));
		console.log(current);
		$("#mainArticle").css("font-size", (--current) + "px");
	},

	/** 왼쪽 상단의 홈 버튼을 눌렀을 때 */
	homeButtonTap : function(button, event) {
		var mainController = this.getApplication().getController("MainController");
		var ArticleController = this.getApplication().getController("ArticleController");
		mainController.getMainPanel().animateActiveItem(0, {
			type : "slide",
			direction : "right"
		});
		this.getHomeButton().hide();
		this.getArticleScrapButton().hide();
		ArticleController.getList().deselectAll();
		mainController.getTitlebar().setTitle("SMART NEWS");
		this.getMainSearchButton().show();
	},

	/** 기사 화면에서 오른쪽 상단의 스크랩 버튼을 눌렀을 때 */
	articleScrapButtonTap : function(button, event) {
		
		var data = Ext.getCmp("articleContent")._data;
		
		var scrapDate = Date();
		
		var store = Ext.getStore('Scraps');
		
		if (store.find('title', data.title) > -1) { // 중복확인
			Ext.Msg.alert('확인', '이미 저장되어 있습니다.');
		} else {
	        store.add({ 
	        	title : data.title,
	        	description : data.description ,
	        	pubDate : data.pubDate,
	        	scrapDate: scrapDate,
	        	link: data.link
        });
        	store.sync();
		}
	},

	/** 오른쪽 상단의 검색 버튼을 눌렀을 때 */
	// //////////////////////////////////////////////
	mainSearchButtonTap : function(button, event) {
		var mainController = this.getApplication().getController(
				"MainController");
		mainController.getMainPanel().animateActiveItem(
				6, {
					type : "slide",
					direction : "left"
				});
		mainController.getTitlebar().setTitle("키워드 검색");
		this.getHomeButton().show();
		this.getMainSearchButton().hide();
		this.getApplication().getController("KeywordSearchController").setRankStore();
		localStorage.History_navigator = "Search";
	},
});
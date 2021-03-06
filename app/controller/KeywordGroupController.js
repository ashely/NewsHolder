Ext.define('NewsHolder.controller.KeywordGroupController', {
	extend : 'Ext.app.Controller',

	config : {
		selectedKeyword : null,
		refs : {
			keywordGroupId : "#keywordGroupId",
			keywordGroupText : "#keywordGroupText",
			keywordGroupList : "#keywordGroupList",
			keywordpanel : "#keywordpanel",
			mainPanel : "#mainPanel",
			kgDetailBackButton : "#kgDetailBackButton",
			kgDetailAlarmButton : "#kgDetailAlarmButton",
			keywordGroupHomeButton : "#homeButton"
		},

		control : {
			keywordGroupId : {
				tap : "onKeywordGroupIdTap"
			},
			keywordGroupList : {
				itemtap : "onKeywordGroupListItemTap"
			}
		}
	},

	onKeywordGroupIdTap : function(event, button) {
		var text = this.getKeywordGroupText().getValue();
		var store = Ext.getStore("keywordGroupStore");

		store.add({
			keywordName : text
		});
		store.sync();
	},

	init : function() {
		var store = Ext.getStore("keywordGroupStore");

		store.load({
			callback : function() {
				console.log(store.data.length);
				if (store.data.length <= 0) {
					console.log("데이터가 없습니다.");
				} else {
					console.log("데이터가 있습니다.");
				}

			}
		});
	},

	onKeywordGroupListItemTap : function(list, index, item, record, e) {
		var mainController = this.getApplication().getController(
				"MainController");

		this.setSelectedKeyword(record.data.keywordName);

		mainController.getMainPanel().animateActiveItem(7, {
			type : "slide",
			direction : "left"
		});
		mainController.getTitlebar().setTitle(record.data.keywordName);
		this.getKgDetailBackButton().show();
		this.getKgDetailAlarmButton().show();
		this.getKeywordGroupHomeButton().hide();
		localStorage.History_navigator = "Search";
		this.getApplication().getController("KGDetailController")
				.setKeywordArticleList();
	}
});
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%><%
String callback = request.getParameter("callback");%><%
if(callback != null) { %>
<%=callback%>
({ "rss" : [
			{
				"rssName" : "중앙일보",
				"rssImage" : "./resources/images/rss_joongang.jpg",
				"rssUrl" : "http://rss.joinsmsn.com/joins_news_list.xml"
			},
			{
				"rssName" : "조선일보",
				"rssImage" : "./resources/images/rss_chosun.png",
				"rssUrl" : "http://myhome.chosun.com/rss/www_section_rss.xml"
			
			},
			{
				"rssName" : "likejazz.COM",
				"rssImage" : "./resources/images/rss_blog.gif",
				"rssUrl" : "http://likejazz.com/rss"
			
			},
			{
				"rssName" : "Channy’s Blog",
				"rssImage" : "./resources/images/rss_blog.gif",
				"rssUrl" : "http://feeds.feedburner.com/channy"
			
			},
			{
				"rssName" : "PAPERon.Net - 페이퍼온넷",
				"rssImage" : "./resources/images/rss_blog.gif",
				"rssUrl" : "http://feeds.feedburner.com/PAPERon"
			
			},
			{
				"rssName" : "두호리닷컴 ★ Dooholee.com",
				"rssImage" : "./resources/images/rss_blog.gif",
				"rssUrl" : "http://dooholee.com/blog/dooholee/rss"
			
			},
			{
				"rssName" : "헝클어진 생각",
				"rssImage" : "./resources/images/rss_blog.gif",
				"rssUrl" : "http://coolengineer.com/tt/rss"
			
			},
			{
				"rssName" : "▒ 제닉스의 사고뭉치 ▒",
				"rssImage" : "./resources/images/rss_blog.gif",
				"rssUrl" : "http://xenix.egloos.com/index.xml"
			
			},
			{
				"rssName" : "Kielhouse",
				"rssImage" : "./resources/images/rss_blog.gif",
				"rssUrl" : "http://blog.rss.naver.com/kielhong.xml"
			
			},
			{
				"rssName" : "스팅구리 공책",
				"rssImage" : "./resources/images/rss_blog.gif",
				"rssUrl" : "http://feeds.feedburner.com/sting"
			
			}
		]
})
<%} %>

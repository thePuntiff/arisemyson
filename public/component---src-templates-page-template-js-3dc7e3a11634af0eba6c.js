(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"8vKr":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),r=n("Zttt"),c=n("gGy4"),i=n("t8Zj");function m(e){var t=e.likes,n=t.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:e.data.url},l.a.createElement("img",{src:e.data.author.photo,className:"liked-by",alt:e.data.author.name}),"👏"))}));return l.a.createElement(l.a.Fragment,null,t&&t.length&&l.a.createElement("div",{className:"likes"},l.a.createElement("ul",null,n)))}function o(e){var t=e.replies,n=t.map((function(e){return l.a.createElement("li",{key:e.id},"💬 ",l.a.createElement("a",{href:e.data.url},e.data.author.name)," replied:"," ",l.a.createElement("span",{dangerouslySetInnerHTML:{__html:e.data.content}}))}));return l.a.createElement(l.a.Fragment,null,t&&t.length&&l.a.createElement("div",{className:"mentions"},l.a.createElement("ul",null,n)))}var s=function(e){var t=e.target,n=Object(a.useState)(0),r=n[0],c=(n[1],Object(a.useState)("fetching")),s=c[0],u=c[1],p=function(e,t){return[].concat(Object(i.a)(e),Object(i.a)(t))},h=Object(a.useReducer)(p,[]),d=h[0],f=h[1],E=Object(a.useReducer)(p,[]),g=E[0],b=E[1];return Object(a.useEffect)((function(){fetch("https://webmention.io/api/mentions?page="+r+"&per-page=30&target="+t).then((function(e){return e.json()})).then((function(e){return Object(i.a)(e.links)})).then((function(e){var t=e.filter((function(e){return["like","repost"].indexOf(e.activity.type)>=0})),n=e.filter((function(e){return["like","repost"].indexOf(e.activity.type)<0}));b(t),f(n),u("done")}))}),[]),l.a.createElement("div",null,"fetching"===s&&l.a.createElement("span",null,"Fetching Replies..."),(g.length>0||d.length>0)&&l.a.createElement("h5",null,"Recent Mentions"),g.length>0&&l.a.createElement(m,{likes:g}),d.length>0&&l.a.createElement(o,{replies:d}))},u=n("qhky");t.default=function(e){var t=e.data,n=Object(c.a)().title,a=t.markdownRemark,i=a.html,m=a.frontmatter,o=a.fields;return l.a.createElement(r.a,{title:m.title+" | "+n,description:m.description},l.a.createElement(u.a,null,l.a.createElement("script",{type:"application/ld+json"},'{\n            "@context": "http://schema.org",\n            "@type": "WebPage",\n            "name": "'+m.title+" | "+n+'",\n            "url": "https://arisemyson.com'+o.slug+'",\n            "description": "'+m.description+'"\n          }')),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"section-title"},m.title),l.a.createElement("article",{dangerouslySetInnerHTML:{__html:i}}),l.a.createElement("hr",null),l.a.createElement("div",{className:"socialize"},l.a.createElement("form",{id:"comment-form",method:"get",action:"https://quill.p3k.io/",target:"_blank"},l.a.createElement("input",{type:"hidden",name:"dontask",value:"1"}),l.a.createElement("input",{type:"hidden",name:"me",value:"https://commentpara.de/"}),l.a.createElement("input",{type:"hidden",name:"reply",value:"https://arisemyson.com"+o.slug})),l.a.createElement("a",{className:"button button-outline button-small",target:"_blank",href:"https://twitter.com/intent/tweet/?text=My%20thoughts%20on%20https://hbish.com"+o.slug},"Tweet this post"," "),l.a.createElement("input",{form:"comment-form",className:"button button-outline button-small",type:"submit",value:"Write a comment"})," "),l.a.createElement(s,{target:"https://hbish.com"+o.slug})))}}}]);
//# sourceMappingURL=component---src-templates-page-template-js-3dc7e3a11634af0eba6c.js.map
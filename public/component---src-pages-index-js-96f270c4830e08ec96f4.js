(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{RXBc:function(e,t,a){"use strict";a.r(t);var n=a("9Hrx"),r=a("q1tI"),i=a.n(r),l=a("Wbzz"),c=a("mwIZ"),s=a.n(c),o=a("TJpk"),m=a.n(o),p=a("Zttt"),d=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=s()(this,"props.data.site.siteMetadata"),t=s()(this,"props.data.allMarkdownRemark.edges"),a=new Map;return t.forEach((function(e){var t=e.node;a.get(s()(t,"frontmatter.year"))?a.set(s()(t,"frontmatter.year"),a.get(s()(t,"frontmatter.year")).concat(t)):a.set(s()(t,"frontmatter.year"),[t])})),i.a.createElement(p.a,{title:e.title,description:e.description},i.a.createElement(m.a,null,i.a.createElement("script",{type:"application/ld+json"},'{\n            "@context": "http://schema.org",\n            "@type": "WebSite",\n            "name": "'+e.title+'",\n            "url": "'+e.siteUrl+'",\n            "description": "'+e.description+'"\n          }'),i.a.createElement("script",{type:"application/ld+json"},'{\n            "@context": "http://schema.org",\n            "@type": "WebPage",\n            "name": "'+e.title+'",\n            "url": "'+e.siteUrl+'",\n            "description": "'+e.description+'"\n          }')),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"section-title"},"Posts"),Array.from(a).map((function(e){var t=e[0];return e[1].map((function(e,a){var n=s()(e,"frontmatter.title")||e.fields.slug;return i.a.createElement("div",{key:e.fields.slug},0===a&&i.a.createElement("h3",null,t),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"column"},i.a.createElement(l.Link,{to:e.fields.slug},n)," | "," ",i.a.createElement("strong",null,e.frontmatter.date)),i.a.createElement("div",{className:"column column-20 text-right"},i.a.createElement("span",{className:"time-to-read"},"~",e.timeToRead," min read"))),i.a.createElement("div",null,i.a.createElement("p",{className:"summary text-justify",dangerouslySetInnerHTML:{__html:e.excerpt}})))}))}))))},t}(i.a.Component);t.default=d}}]);
//# sourceMappingURL=component---src-pages-index-js-96f270c4830e08ec96f4.js.map
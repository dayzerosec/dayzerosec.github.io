(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{187:function(t,e,s){},188:function(t,e){},206:function(t,e,s){"use strict";var n=s(187);s.n(n).a},207:function(t,e,s){"use strict";var n=s(188),o=s.n(n);e.default=o.a},212:function(t,e,s){"use strict";s.r(e);s(130),s(131),s(129),s(77),s(132);var n=s(177),o=s(176),a=s(175),i=s(195),r=s(87),p=(s(193),s(194),{components:{SocialIcons:r.a,Author:a.a,PostMeta:n.a,PostTags:o.a,Transcript:i.a},metaInfo:function(){return{title:this.$page.post.title,meta:[{name:"title",content:this.$page.post.title},{name:"description",content:this.$page.post.description},{name:"og:type",content:"article"},{name:"og:description",content:this.$page.post.description},{name:"og:title",content:this.$page.post.title},{name:"og:article:published_time",content:this.$page.post.date_iso},{name:"og:article:tag",content:this.$page.post.tags.map((function(t){return t.title}))},{name:"og:image",content:this.$page.post.cover_image?this.$page.post.cover_image:"https://dayzerosec.com/zero_square.png"}],link:[{rel:"stylesheet",href:"/prism/nord.css"}]}},mounted:function(){Prism.highlightAll()},data:function(){return{showTranscript:!1}},methods:{toggleTranscript:function(){console.log(this.showTranscript),this.showTranscript=!this.showTranscript},hasComment:function(t){var e="\x3c!--"+(t=t.toUpperCase().trim()),s=t+"--\x3e";return-1!=this.$page.post.content.indexOf(e)&&-1!=this.$page.post.content.indexOf(s)},getComment:function(t){var e="\x3c!--"+(t=t.toUpperCase().trim()),s=t+"--\x3e";if(-1!=this.$page.post.content.indexOf(e)&&-1!=this.$page.post.content.indexOf(s)){var n=this.$page.post.content.indexOf(e)+e.length,o=this.$page.post.content.indexOf(s);return this.$page.post.content.substring(n,o)}},transcript:function(){var t=this.getComment("transcript");if(t)return JSON.parse(t)}}}),c=(s(206),s(18)),g=s(207),h=Object(c.a)(p,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Layout",[s("div",{staticClass:"post-title"},[s("h1",{staticClass:"post-title__text"},[t._v("\n      "+t._s(t.$page.post.title)+"\n    ")]),t._l(t.$page.post.authors,(function(t){return s("Author",{key:t.name,staticClass:"post-author",attrs:{author:t}})}))],2),s("div",{staticClass:"post content-box"},[s("div",{staticClass:"post__header"},[t.$page.post.cover_image?s("g-image",{attrs:{alt:"Cover image",src:t.$page.post.cover_image}}):t._e(),s("PostMeta",{attrs:{post:t.$page.post,showAuthor:!1,"show-posted":!1}})],1),s("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post__content",domProps:{innerHTML:t._s(t.$page.post.content)}}),s("div",{staticClass:"post__footer"},[t.hasComment("transcript")?s("div",{staticClass:"transcript-button"},[t._v("Prefer Reading? "),s("a",{attrs:{href:"/transcript/"+t.$page.post.slug}},[t._v("View Transcript")])]):t._e(),s("PostTags",{attrs:{post:t.$page.post}})],1)])])}),[],!1,null,null,null);"function"==typeof g.default&&Object(g.default)(h);e.default=h.exports}}]);
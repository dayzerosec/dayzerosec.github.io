(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{171:function(t,s,a){},172:function(t,s,a){},173:function(t,s,a){},174:function(t,s,a){},175:function(t,s,a){"use strict";var e={props:["showTitle","author"]},o=(a(176),a(18)),n=a(0),i=n.a.config.optionMergeStrategies.computed,r={metadata:{siteName:"DAY[0]"}},c=function(t){var s=t.options;s.__staticData?s.__staticData.data=r:(s.__staticData=n.a.observable({data:r}),s.computed=i({$static:function(){return s.__staticData.data}},s.computed))},u=Object(o.a)(e,(function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"author"},[s("g-link",{staticClass:"author__link",attrs:{to:"/author/"+this.author.slug}},[s("g-image",{staticClass:"author__image",attrs:{alt:"Author image",src:this.author.profile_image,width:"180",height:"180",blur:"5"}})],1),s("div",{staticClass:"author__name_container"},[s("div",{staticClass:"author__name"},[this._v(this._s(this.author.name))])])],1)}),[],!1,null,null,null);"function"==typeof c&&c(u);s.a=u.exports},176:function(t,s,a){"use strict";var e=a(171);a.n(e).a},177:function(t,s,a){"use strict";var e=a(172);a.n(e).a},178:function(t,s,a){"use strict";var e=a(173);a.n(e).a},179:function(t,s,a){"use strict";var e={props:["post","showAuthor"]},o=(a(177),a(18)),n=Object(o.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"post-meta"},[t._v("\n      "+t._s(t.post.date)+"\n      "),t.post.authors&&t.showAuthor?[a("br"),1==t.post.authors.length?[t._v("\n\t      \tAuthor: "),t._l(t.post.authors,(function(s){return a("span",{key:s.name},[a("g-link",{attrs:{to:"/author/"+s.slug}},[t._v(t._s(s.name))])],1)}))]:[t._v("\n\t      \tAuthors: "),t._l(t.post.authors,(function(s){return a("span",{key:s.name,staticClass:"comma"},[a("g-link",{attrs:{to:"/author/"+s.slug}},[t._v(t._s(s.name))])],1)}))]]:t._e(),t.post.timeToRead?[a("strong",[t._v(t._s(t.post.timeToRead)+" min read.")])]:t._e()],2)}),[],!1,null,null,null);s.a=n.exports},180:function(t,s,a){"use strict";var e={props:["post"]},o=(a(178),a(18)),n=Object(o.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"post-tags"},t._l(t.post.tags,(function(s){return a("g-link",{key:s.id,staticClass:"post-tags__link",attrs:{to:"/tag/"+s.path}},[t._v("\n\t\t\t"+t._s(s.title)+"\n\t\t")])})),1)}),[],!1,null,null,null);s.a=n.exports},181:function(t,s,a){"use strict";var e=a(174);a.n(e).a},182:function(t,s,a){"use strict";var e=a(179),o=a(180),n=a(175),i={components:{PostMeta:e.a,PostTags:o.a,Author:n.a},props:["post"]},r=(a(181),a(18)),c=Object(r.a)(i,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"post-card content-box",class:{"post-card--has-poster":t.post.poster}},[a("div",{staticClass:"post-card__header"},[t.post.cover_image?a("g-image",{staticClass:"post-card__image",attrs:{alt:"Cover image",src:t.post.cover_image}}):t._e()],1),a("div",{staticClass:"post-card__content"},[a("h2",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-card__title",domProps:{innerHTML:t._s(t.post.title)}}),a("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-card__description",domProps:{innerHTML:t._s(t.post.description)}}),a("PostMeta",{staticClass:"post-card__meta",attrs:{post:t.post}}),a("PostTags",{staticClass:"post-card__tags",attrs:{post:t.post}}),a("g-link",{staticClass:"post-card__link",attrs:{to:"/posts/"+t.post.slug}},[t._v("Link")])],1)])}),[],!1,null,null,null);s.a=c.exports},183:function(t,s){},190:function(t,s,a){"use strict";var e=a(183),o=a.n(e);s.default=o.a},206:function(t,s,a){"use strict";a.r(s);var e=a(175),o=a(182),n={components:{Author:e.a,PostCard:o.a},metaInfo:function(){return{title:this.$page.tag.title}}},i=a(18),r=a(190),c=Object(i.a)(n,(function(){var t=this.$createElement,s=this._self._c||t;return s("Layout",[s("h1",{staticClass:"tag-title text-center space-bottom"},[this._v("\n    "+this._s(this.$page.tag.title)+"\n  ")]),s("div",{staticClass:"posts"},this._l(this.$page.tag.belongsTo.edges,(function(t){return s("PostCard",{key:t.node.id,attrs:{post:t.node}})})),1)])}),[],!1,null,null,null);"function"==typeof r.default&&Object(r.default)(c);s.default=c.exports}}]);
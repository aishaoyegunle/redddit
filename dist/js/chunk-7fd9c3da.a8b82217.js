(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7fd9c3da"],{5319:function(t,r,a){"use strict";var e=a("d784"),n=a("825a"),i=a("7b0b"),s=a("50c4"),c=a("a691"),o=a("1d80"),l=a("8aa5"),u=a("14c3"),d=Math.max,f=Math.min,v=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,h=/\$([$&'`]|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};e("replace",2,(function(t,r,a,e){var _=e.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,m=e.REPLACE_KEEPS_$0,b=_?"$":"$0";return[function(a,e){var n=o(this),i=void 0==a?void 0:a[t];return void 0!==i?i.call(a,n,e):r.call(String(n),a,e)},function(t,e){if(!_&&m||"string"===typeof e&&-1===e.indexOf(b)){var i=a(r,t,this,e);if(i.done)return i.value}var o=n(t),v=String(this),p="function"===typeof e;p||(e=String(e));var h=o.global;if(h){var E=o.unicode;o.lastIndex=0}var S=[];while(1){var A=u(o,v);if(null===A)break;if(S.push(A),!h)break;var $=String(A[0]);""===$&&(o.lastIndex=l(v,s(o.lastIndex),E))}for(var x="",w=0,k=0;k<S.length;k++){A=S[k];for(var F=String(A[0]),I=d(f(c(A.index),v.length),0),L=[],P=1;P<A.length;P++)L.push(g(A[P]));var R=A.groups;if(p){var U=[F].concat(L,I,v);void 0!==R&&U.push(R);var T=String(e.apply(void 0,U))}else T=C(F,v,I,L,R,e);I>=w&&(x+=v.slice(w,I)+T,w=I+F.length)}return x+v.slice(w)}];function C(t,a,e,n,s,c){var o=e+t.length,l=n.length,u=h;return void 0!==s&&(s=i(s),u=p),r.call(c,u,(function(r,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return a.slice(0,e);case"'":return a.slice(o);case"<":c=s[i.slice(1,-1)];break;default:var u=+i;if(0===u)return r;if(u>l){var d=v(u/10);return 0===d?r:d<=l?void 0===n[d-1]?i.charAt(1):n[d-1]+i.charAt(1):r}c=n[u-1]}return void 0===c?"":c}))}}))},"559e":function(t,r,a){},6547:function(t,r,a){var e=a("a691"),n=a("1d80"),i=function(t){return function(r,a){var i,s,c=String(n(r)),o=e(a),l=c.length;return o<0||o>=l?t?"":void 0:(i=c.charCodeAt(o),i<55296||i>56319||o+1===l||(s=c.charCodeAt(o+1))<56320||s>57343?t?c.charAt(o):i:t?c.slice(o,o+2):s-56320+(i-55296<<10)+65536)}};t.exports={codeAt:i(!1),charAt:i(!0)}},"8aa5":function(t,r,a){"use strict";var e=a("6547").charAt;t.exports=function(t,r,a){return r+(a?e(t,r).length:1)}},ae8d:function(t,r,a){"use strict";a.r(r);var e=function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("div",{staticClass:"card"},[a("figure",[t.post.thumbnail.includes(".jpg")?a("img",{staticClass:"card__img",attrs:{src:t.post.thumbnail,alt:t.post.name}}):a("img",{staticClass:"card__img",attrs:{src:"https://via.placeholder.com/150",alt:t.post.name}}),a("figcaption",{staticClass:"card__details"},[a("h5",{staticClass:"card__details-title"},[t._v(t._s(t.post.title))]),a("p",[t._v("Name: "+t._s(t.post.name))]),a("p",[t._v("Upvotes: "+t._s(t.numberFormatter(t.post.ups.toString())))]),a("div",{staticClass:"card__details-item"},[a("p",{staticClass:"date"},[t._v(t._s(t.dateFormatter(t.post.created)))]),a("a",{attrs:{href:t.post.url,target:"_blank"}},[t._v("Read more")])])])])])},n=[],i=(a("ac1f"),a("5319"),a("c1df")),s=a.n(i),c={name:"Card",props:["post"],methods:{dateFormatter:function(t){return s()(t,"X").format("LLL")},numberFormatter:function(t){return t?t.replace(/\B(?=(\d{3})+(?!\d))/g,","):0}}},o=c,l=(a("af7e"),a("2877")),u=Object(l["a"])(o,e,n,!1,null,"4e250468",null);r["default"]=u.exports},af7e:function(t,r,a){"use strict";var e=a("559e"),n=a.n(e);n.a}}]);
//# sourceMappingURL=chunk-7fd9c3da.a8b82217.js.map
webpackJsonp([2],{"+E39":function(t,e,n){t.exports=!n("S82l")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"+ZMJ":function(t,e,n){var r=n("lOnJ");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},"3Eo+":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},"52gC":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"6EHE":function(t,e){},"77Pl":function(t,e,n){var r=n("EqjI");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},"7KvD":function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},Cdx3:function(t,e,n){var r=n("sB3e"),o=n("lktj");n("uqUo")("keys",function(){return function(t){return o(r(t))}})},D2L2:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},EqjI:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},FeBl:function(t,e){var n=t.exports={version:"2.6.12"};"number"==typeof __e&&(__e=n)},Ibhu:function(t,e,n){var r=n("D2L2"),o=n("TcQ7"),a=n("vFc/")(!1),i=n("ax3d")("IE_PROTO");t.exports=function(t,e){var n,c=o(t),u=0,s=[];for(n in c)n!=i&&r(c,n)&&s.push(n);for(;e.length>u;)r(c,n=e[u++])&&(~a(s,n)||s.push(n));return s}},MU5D:function(t,e,n){var r=n("R9M2");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},MmMw:function(t,e,n){var r=n("EqjI");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},O4g8:function(t,e){t.exports=!0},ON07:function(t,e,n){var r=n("EqjI"),o=n("7KvD").document,a=r(o)&&r(o.createElement);t.exports=function(t){return a?o.createElement(t):{}}},QRG4:function(t,e,n){var r=n("UuGF"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},R9M2:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},S82l:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},SfB7:function(t,e,n){t.exports=!n("+E39")&&!n("S82l")(function(){return 7!=Object.defineProperty(n("ON07")("div"),"a",{get:function(){return 7}}).a})},TcQ7:function(t,e,n){var r=n("MU5D"),o=n("52gC");t.exports=function(t){return r(o(t))}},UuGF:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},Wqiw:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("mvHQ"),o=n.n(r),a=n("fZjL"),i=n.n(a),c={name:"AddTransaction",components:{NavMenu:n("c4o7").a},data:function(){return{selected_ET:null,optionsExpense:[{value:"A",name:"Gcash Cash In"},{value:"B",name:"Salary"},{value:"C",name:"Money Transfer"},{value:"D",name:"Food"},{value:"E",name:"Transfer Payments"},{value:"F",name:"Travel Expenses"},{value:"G",name:"Load Transaction"}],selected_TT:null,optionsTransact:[{value:1,name:"Debit"},{value:2,name:"Credit"}]}},methods:{storeExpType:function(t){console.log(t)},storeTransType:function(t){console.log(t)},getFormData:function(t){var e,n=t.elements,r=i()(n).filter(function(t){return"honeypot"!==n[t].name||(e=n[t].value,!1)}).map(function(t){return void 0!==n[t].name?n[t].name:n[t].length>0?n[t].item(0).name:void 0}).filter(function(t,e,n){return n.indexOf(t)==e&&t}),a={};return r.forEach(function(t){var e=n[t];if(a[t]=e.value,e.length){for(var r=[],o=0;o<e.length;o++){var i=e.item(o);(i.checked||i.selected)&&r.push(i.value)}a[t]=r.join(", ")}}),a.formDataNameOrder=o()(r),a.formGoogleSheetName="transactions",a.formGoogleSendEmail=t.dataset.email||"",{data:a,honeypot:e}},createTransaction:function(t){var e=this;t.preventDefault();var n=t.target,r=this.getFormData(n).data,o=n.action,a=new XMLHttpRequest;a.open("POST",o),a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),a.onreadystatechange=function(){4===a.readyState&&200===a.status&&e.$router.push({path:"/home"})};var c=i()(r).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(r[t])}).join("&");a.send(c)}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("body",[n("div",{staticClass:"container"},[n("div",{staticClass:"header"},[n("div",{staticClass:"circle"}),t._v(" "),n("div",{staticClass:"circle1"}),t._v(" "),n("div",{staticClass:"circle2"}),t._v(" "),n("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"/home"}},[n("font-awesome-icon",{staticClass:"back",staticStyle:{color:"#ffffff",float:"left"},attrs:{icon:["fas","chevron-left"]}})],1),t._v(" "),t._m(0)],1),t._v(" "),n("div",{staticClass:"main-body"},[n("div",{staticClass:"add-transaction"},[n("form",{staticClass:"gform pure-form pure-form-stacked",attrs:{method:"POST","data-email":"",action:"https://script.google.com/macros/s/AKfycbwxUrtZCfje7pLaoUG_ENSe_w7N6K0XfYxry1Nsr0qcc-h49p2ZRslWkkukWlW8T_5u/exec"},on:{submit:function(e){return e.preventDefault(),t.createTransaction.apply(null,arguments)}}},[n("label",[t._v("Name")]),t._v(" "),n("input",{staticClass:"inputfield",attrs:{type:"text",placeholder:"Enter name",id:"input-name",name:"input-name"}}),t._v(" "),n("label",[t._v("Amount")]),t._v(" "),t._m(1),t._v(" "),n("label",[t._v("Date")]),t._v(" "),n("input",{staticClass:"inputfield",attrs:{type:"date",name:"input-date",id:"input-date"}}),t._v(" "),n("label",[t._v("Expense Type")]),t._v(" "),n("div",{staticClass:"dropdown"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.selected_ET,expression:"selected_ET"}],attrs:{id:"selectfield-expense",name:"expense_type"},on:{input:function(e){return t.storeExpType(t.selected_ET)},change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selected_ET=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"",id:"selecttext-expense",disabled:"",selected:""}},[t._v("Select Expense Type")]),t._v(" "),t._l(t.optionsExpense,function(e){return n("option",{key:e.value,attrs:{id:"list-expense"}},[t._v("\n                          "+t._s(e.name)+"\n                      ")])})],2)]),t._v(" "),n("label",[t._v("Transaction Type")]),t._v(" "),n("div",{staticClass:"dropdown"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.selected_TT,expression:"selected_TT"}],attrs:{id:"selectfield-transaction",name:"transaction_type"},on:{input:function(e){return t.storeTransType(t.selected_TT)},change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selected_TT=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"",id:"selecttext-transaction",disabled:"",selected:""}},[t._v("Select Expense Type")]),t._v(" "),t._l(t.optionsTransact,function(e){return n("option",{key:e.value,attrs:{id:"list-transaction"}},[t._v("\n                          "+t._s(e.name)+"\n                      ")])})],2)]),t._v(" "),n("div",{staticStyle:{"text-decoration":"none",color:"inherit"}},[n("input",{staticClass:"buttone",attrs:{type:"submit",value:"SAVE"}}),t._v(" "),n("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"/home"}},[n("input",{staticClass:"buttone",attrs:{type:"button",value:"CANCEL"}})])],1)])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"foreground-text"},[e("span",{staticStyle:{flex:"1","text-align":"center","font-size":"large"}},[this._v("Add Transaction")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"price-input"},[e("input",{staticClass:"inputfield",attrs:{type:"number",id:"price-input",name:"price-input",placeholder:"Enter price",min:"0"}})])}]};var s=n("VU/8")(c,u,!1,function(t){n("6EHE")},"data-v-45dc7caf",null);e.default=s.exports},X8DO:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},ax3d:function(t,e,n){var r=n("e8AB")("keys"),o=n("3Eo+");t.exports=function(t){return r[t]||(r[t]=o(t))}},e8AB:function(t,e,n){var r=n("FeBl"),o=n("7KvD"),a=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return a[t]||(a[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n("O4g8")?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},evD5:function(t,e,n){var r=n("77Pl"),o=n("SfB7"),a=n("MmMw"),i=Object.defineProperty;e.f=n("+E39")?Object.defineProperty:function(t,e,n){if(r(t),e=a(e,!0),r(n),o)try{return i(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},fZjL:function(t,e,n){t.exports={default:n("jFbC"),__esModule:!0}},fkB2:function(t,e,n){var r=n("UuGF"),o=Math.max,a=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):a(t,e)}},hJx8:function(t,e,n){var r=n("evD5"),o=n("X8DO");t.exports=n("+E39")?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},jFbC:function(t,e,n){n("Cdx3"),t.exports=n("FeBl").Object.keys},kM2E:function(t,e,n){var r=n("7KvD"),o=n("FeBl"),a=n("+ZMJ"),i=n("hJx8"),c=n("D2L2"),u=function(t,e,n){var s,l,f,p=t&u.F,v=t&u.G,d=t&u.S,m=t&u.P,_=t&u.B,y=t&u.W,h=v?o:o[e]||(o[e]={}),x=h.prototype,E=v?r:d?r[e]:(r[e]||{}).prototype;for(s in v&&(n=e),n)(l=!p&&E&&void 0!==E[s])&&c(h,s)||(f=l?E[s]:n[s],h[s]=v&&"function"!=typeof E[s]?n[s]:_&&l?a(f,r):y&&E[s]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):m&&"function"==typeof f?a(Function.call,f):f,m&&((h.virtual||(h.virtual={}))[s]=f,t&u.R&&x&&!x[s]&&i(x,s,f)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},lOnJ:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},lktj:function(t,e,n){var r=n("Ibhu"),o=n("xnc9");t.exports=Object.keys||function(t){return r(t,o)}},mvHQ:function(t,e,n){t.exports={default:n("qkKv"),__esModule:!0}},qkKv:function(t,e,n){var r=n("FeBl"),o=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},sB3e:function(t,e,n){var r=n("52gC");t.exports=function(t){return Object(r(t))}},uqUo:function(t,e,n){var r=n("kM2E"),o=n("FeBl"),a=n("S82l");t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],i={};i[t]=e(n),r(r.S+r.F*a(function(){n(1)}),"Object",i)}},"vFc/":function(t,e,n){var r=n("TcQ7"),o=n("QRG4"),a=n("fkB2");t.exports=function(t){return function(e,n,i){var c,u=r(e),s=o(u.length),l=a(i,s);if(t&&n!=n){for(;s>l;)if((c=u[l++])!=c)return!0}else for(;s>l;l++)if((t||l in u)&&u[l]===n)return t||l||0;return!t&&-1}}},xnc9:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")}});
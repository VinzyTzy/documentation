(window.webpackJsonp=window.webpackJsonp||[]).push([[19,28],{245:function(e,t,s){"use strict";s.r(t);var n={name:"VersionSelectItem",props:{version:{type:Object,required:!0}},computed:{classes(){return{deprecated:["text-orange"],current:["text-green-dark"],stable:["text-green-dark"],beta:["text-blue"]}[this.version.status]||["text-grey"]}}},i=s(15),r=Object(i.a)(n,(function(){var e=this._self._c;return e("div",{staticClass:"inline-block"},[this._v("\n  "+this._s(this.version.title||this.version.name)+"\n  "),e("span",{staticClass:"rounded-full ml-2",class:this.classes},[this._v(this._s(this.version.status))])])}),[],!1,null,null,null);t.default=r.exports},251:function(e,t,s){"use strict";s.r(t);var n={name:"VersionSelect",components:{VersionSelectItem:s(245).default},props:{versions:{type:Array,required:!0},tabindex:{type:Number,required:!1,default:0},value:{type:String,required:!1}},data:function(){return{selected:this.versions.find(e=>e.name===this.value)||(this.versions.length>0?this.versions[0]:null),open:!1}},watch:{value(e,t){if(e!==t){let e=this.versions.find(e=>e.name===this.value);e&&(this.selected=e)}}},mounted(){this.$emit("input",this.selected.name)}},i=s(15),r=Object(i.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"version-select custom-select",attrs:{tabindex:e.tabindex},on:{blur:function(t){e.open=!1}}},[t("div",{staticClass:"selected",class:{open:e.open},on:{click:function(t){e.open=!e.open}}},[t("VersionSelectItem",{attrs:{version:e.selected}}),e._v(" "),t("span",{staticClass:"arrow"})],1),e._v(" "),t("div",{staticClass:"items",class:{hidden:!e.open}},e._l(e.versions,(function(s){return t("div",{key:s.name,staticClass:"item",on:{click:function(t){e.selected=s,e.open=!1,e.$emit("input",s.name)}}},[t("VersionSelectItem",{attrs:{version:s}})],1)})),0)])}),[],!1,null,null,null);t.default=r.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3c8e"],{"+9th":function(t,e,a){"use strict";a.d(e,"p",function(){return r}),a.d(e,"n",function(){return s}),a.d(e,"a",function(){return n}),a.d(e,"h",function(){return i}),a.d(e,"j",function(){return l}),a.d(e,"l",function(){return c}),a.d(e,"m",function(){return u}),a.d(e,"u",function(){return d}),a.d(e,"s",function(){return f}),a.d(e,"f",function(){return m}),a.d(e,"d",function(){return h}),a.d(e,"k",function(){return p}),a.d(e,"g",function(){return v}),a.d(e,"q",function(){return b}),a.d(e,"t",function(){return _}),a.d(e,"r",function(){return k}),a.d(e,"o",function(){return y}),a.d(e,"e",function(){return g}),a.d(e,"b",function(){return D}),a.d(e,"c",function(){return w}),a.d(e,"i",function(){return L});var o=a("t3Un");function r(t){return Object(o.a)({url:"oa/task/subTaskList",method:"post",data:t})}function s(t){return Object(o.a)({url:"oa/task/myTask",method:"post",data:t})}function n(t){return Object(o.a)({url:"oa/task/save",method:"post",data:t})}function i(t){return Object(o.a)({url:"oa/task/delete",method:"post",data:t})}function l(t){return Object(o.a)({url:"oa/task/read",method:"post",data:t})}function c(t){return Object(o.a)({url:"oa/task/update",method:"post",data:t})}function u(t){return Object(o.a)({url:"oa/task/updateName",method:"post",data:t})}function d(t){return Object(o.a)({url:"oa/task/updateStoptime",method:"post",data:t})}function f(t){return Object(o.a)({url:"oa/task/updateOwner",method:"post",data:t})}function m(t){return Object(o.a)({url:"oa/task/updateLable",method:"post",data:t})}function h(t){return Object(o.a)({url:"oa/tasklable/save",method:"post",data:t})}function p(t){return Object(o.a)({url:"oa/tasklable/update",method:"post",data:t})}function v(t){return Object(o.a)({url:"oa/tasklable/delete",method:"post",data:t})}function b(t){return Object(o.a)({url:"oa/tasklable/index",method:"post",data:t})}function _(t){return Object(o.a)({url:"oa/task/updatePriority",method:"post",data:t})}function k(t){return Object(o.a)({url:"oa/task/taskOver",method:"post",data:t})}function y(t){return Object(o.a)({url:"oa/task/readLoglist",method:"post",data:t})}function g(t){return Object(o.a)({url:"oa/task/delOwnerById",method:"post",data:t})}function D(t){return Object(o.a)({url:"oa/taskcomment/save",method:"post",data:t})}function w(t){return Object(o.a)({url:"oa/taskcomment/delete",method:"post",data:t})}function L(t){return Object(o.a)({url:"oa/task/delrelation",method:"post",data:t})}},"1RnH":function(t,e,a){"use strict";var o=a("QbLZ"),r=a.n(o),s=a("+9th"),n=a("mkuN"),i=a("Er7M"),l=a("7Qib"),c=a("L2JU"),u={components:{CrmRelative:n.a,RelatedBusinessCell:i.a},props:{marginLeft:{type:String,default:"20px"},allData:{type:Object,default:function(){return{contacts:[],customer:[],business:[],contract:[]}}},isTask:{type:Boolean,default:!1},taskID:Number,alterable:{type:Boolean,default:!0},alterableColor:{type:String,default:"#999"}},data:function(){return{showTypes:["customer","contacts","business","contract"],showPopover:!1,relevanceAll:{customer_ids:[],contract_ids:[],contacts_ids:[],business_ids:[]},relatedListData:{},showRelative:!1,showTaskRelative:!1}},computed:r()({},Object(c.b)(["crm"]),{showCRMPermission:function(){return this.crm}}),watch:{allData:function(){this.relatedListData=this.allData}},mounted:function(){this.relatedListData=this.allData},methods:{crmrelativeClose:function(){this.showPopover=!1},checkInfos:function(t){var e=this;this.showPopover=!1,this.relatedListData=t.data;var a=function(a){var o=t.data[a];e.relevanceAll[a+"_ids"]=o.map(function(t,e,o){return t[a+"_id"]})};for(var o in t.data)a(o);this.$emit("checkInfos",this.relevanceAll)},delRelevance:function(t,e,a){var o=this;this.$confirm("确认取消关联?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",customClass:"is-particulars"}).then(function(){Object(s.i)({task_id:o.taskID,type:{customer:1,contacts:2,business:3,contract:4}[t],id:a[t+"_id"]}).then(function(a){o.relatedListData[t].splice(e,1),o.relatedListData=Object(l.i)(o.relatedListData),o.$message.success("关联取消成功")}).catch(function(){})}).catch(function(){o.$message.info("已取消操作")})},checkRelatedDetail:function(t,e){e.key=e[t+"_id"],this.$emit("checkRelatedDetail",t,e)}}},d=(a("GsUu"),a("KHd+")),f=Object(d.a)(u,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"related-business",style:{"margin-left":t.marginLeft}},[!t.isTask&&t.alterable?o("el-popover",{attrs:{placement:"bottom",width:"800","popper-class":"no-padding-popover",trigger:"click"},model:{value:t.showPopover,callback:function(e){t.showPopover=e},expression:"showPopover"}},[t.showRelative?o("crm-relative",{ref:"crmrelative",attrs:{show:t.showPopover,radio:!1,"selected-data":t.relatedListData,"show-types":t.showTypes},on:{close:t.crmrelativeClose,changeCheckout:t.checkInfos}}):t._e(),t._v(" "),t.showCRMPermission?o("p",{staticClass:"add-file",attrs:{slot:"reference"},on:{click:function(e){t.showRelative=!0}},slot:"reference"},[o("img",{attrs:{src:a("AFlK"),alt:""}}),t._v("\n      关联业务\n    ")]):t._e()],1):t._e(),t._v(" "),t.alterable?t._e():o("p",{staticClass:"alterable-p",style:{color:t.alterableColor}},[t._v("关联业务")]),t._v(" "),t._l(t.relatedListData,function(e,a){return o("div",{key:a},t._l(e,function(e,r){return o("related-business-cell",{key:r,attrs:{data:e,"cell-index":r,type:a,"show-foot":t.isTask},on:{unbind:t.delRelevance,detail:function(o){t.checkRelatedDetail(a,e)}}})}))}),t._v(" "),t.isTask?o("el-popover",{attrs:{placement:"bottom",width:"800","popper-class":"no-padding-popover",trigger:"click"},model:{value:t.showPopover,callback:function(e){t.showPopover=e},expression:"showPopover"}},[t.showTaskRelative?o("crm-relative",{ref:"crmrelative",attrs:{radio:!1,show:t.showPopover,"selected-data":t.relatedListData,"show-types":t.showTypes},on:{close:t.crmrelativeClose,changeCheckout:t.checkInfos}}):t._e(),t._v(" "),t.showCRMPermission?o("p",{staticClass:"add-file",attrs:{slot:"reference"},on:{click:function(e){t.showTaskRelative=!0}},slot:"reference"},[o("img",{attrs:{src:a("AFlK"),alt:""}}),t._v("\n      关联业务\n    ")]):t._e()],1):t._e()],2)},[],!1,null,"8253b738",null);f.options.__file="relatedBusiness.vue";e.a=f.exports},BuGm:function(t,e,a){"use strict";a.r(e);var o=a("gDS+"),r=a.n(o),s=a("FyfS"),n=a.n(s),i=a("Dh/N"),l=a("1RnH"),c=a("0hym"),u=a("7Qib"),d={components:{relatedBusiness:l.a,XhUser:c.a},props:{formData:{type:Object,default:function(){return{color:""}}},text:{type:String,default:"创建日程"},appendToBody:{type:Boolean,default:!1}},data:function(){var t=this,e=function(e,a,o){t.formData.start_time&&t.formData.end_time&&t.formData.start_time.getTime()>=t.formData.end_time.getTime()&&o(new Error("开始时间必须小于结束时间")),o()};return{zIndex:Object(u.g)(),formList:[{label:"主题",field:"title",type:"color"},{label:"开始时间",field:"start_time",type:"time"},{label:"结束时间",field:"end_time",type:"time"},{label:"参与人",field:"owner_user_ids",type:"participant"},{label:"备注",field:"remark",type:"textarea",width:"100%"}],options:[{value:0,label:"无"},{value:1,label:"准时提醒"},{value:2,label:"5分钟前"},{value:3,label:"15分钟前"},{value:4,label:"30分钟前"},{value:5,label:"一个小时前"},{value:6,label:"二个小时前"},{value:7,label:"一天前"},{value:8,label:"二天前"},{value:9,label:"一周前"}],fileList:[],loading:!1,colorList:["#3E8EF7","#11C06C","#0BB2D4","#EB6709","#FF4C52","#526069","#9262F4"],rules:{title:[{required:!0,message:"主题不能为空",trigger:"blur"},{max:50,message:"主题长度最多为50个字符",trigger:"blur"}],start_time:[{required:!0,message:"开始时间不能为空",trigger:"blur"},{validator:e,trigger:"blur"}],end_time:[{required:!0,message:"结束时间不能为空",trigger:"blur"},{validator:e,trigger:"blur"}]},relevanceAll:{},allData:{},colleaguesList:[]}},created:function(){},mounted:function(){this.appendToBody&&document.body.appendChild(this.$el),this.allData.business=this.formData.businessList?this.formData.businessList:[],this.allData.contacts=this.formData.contactsList?this.formData.contactsList:[],this.allData.contract=this.formData.contractList?this.formData.contractList:[],this.allData.customer=this.formData.customerList?this.formData.customerList:[],this.formData.ownerList&&(this.colleaguesList=[].concat(this.formData.ownerList)),"创建日程"==this.text&&this.$set(this.formData,"color","#3E8EF7")},beforeDestroy:function(){this.appendToBody&&this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el)},methods:{close:function(){1==this.$route.query.routerKey?this.$router.go(-1):this.$emit("closeDialog")},checkInfos:function(t){this.relevanceAll=t},onSubmit:function(){var t=this;this.$refs.form.validate(function(e){if(!e)return!1;t.loading=!0;var a=t.formData,o=[],s=!0,l=!1,c=void 0;try{for(var u,d=n()(t.colleaguesList);!(s=(u=d.next()).done);s=!0){var f=u.value;o.push(f.id)}}catch(t){l=!0,c=t}finally{try{!s&&d.return&&d.return()}finally{if(l)throw c}}if("创建日程"==t.text)Object(i.a)({title:a.title,start_time:a.start_time.getTime()/1e3,end_time:a.end_time.getTime()/1e3,owner_user_ids:o,remark:a.remark,color:a.color,customer_ids:t.relevanceAll.customer_ids,contacts_ids:t.relevanceAll.contacts_ids,business_ids:t.relevanceAll.business_ids,contract_ids:t.relevanceAll.contract_ids}).then(function(e){1==t.$route.query.routerKey?t.$router.push("schedule"):t.$emit("onSubmit"),t.loading=!1}).catch(function(){t.loading=!1});else{var m={customer_ids:[],contract_ids:[],contacts_ids:[],business_ids:[]};if(t.allData.customer){var h=!0,p=!1,v=void 0;try{for(var b,_=n()(t.allData.customer);!(h=(b=_.next()).done);h=!0){var k=b.value;m.customer_ids.push(k.customer_id)}}catch(t){p=!0,v=t}finally{try{!h&&_.return&&_.return()}finally{if(p)throw v}}}if(t.allData.contract){var y=!0,g=!1,D=void 0;try{for(var w,L=n()(t.allData.contract);!(y=(w=L.next()).done);y=!0){var C=w.value;m.contract_ids.push(C.contract_id)}}catch(t){g=!0,D=t}finally{try{!y&&L.return&&L.return()}finally{if(g)throw D}}}if(t.allData.contacts){var x=!0,O=!1,j=void 0;try{for(var $,T=n()(t.allData.contacts);!(x=($=T.next()).done);x=!0){var R=$.value;m.contacts_ids.push(R.contacts_id)}}catch(t){O=!0,j=t}finally{try{!x&&T.return&&T.return()}finally{if(O)throw j}}}if(t.allData.business){var B=!0,P=!1,I=void 0;try{for(var A,S=n()(t.allData.business);!(B=(A=S.next()).done);B=!0){var F=A.value;m.business_ids.push(F.business_id)}}catch(t){P=!0,I=t}finally{try{!B&&S.return&&S.return()}finally{if(P)throw I}}}var N="{}"==r()(t.relevanceAll)?m:t.relevanceAll;Object(i.c)({event_id:a.event_id,title:a.title,start_time:new Date(a.start_time).getTime()/1e3,end_time:new Date(a.end_time).getTime()/1e3,owner_user_ids:o,remark:a.remark,color:a.color,customer_ids:N.customer_ids,contacts_ids:N.contacts_ids,business_ids:N.business_ids,contract_ids:N.contract_ids}).then(function(e){t.$emit("onSubmit"),t.loading=!1}).catch(function(){t.loading=!1})}})},httpRequest:function(t){this.fileList.push(t.file)},onRemove:function(t){for(var e in this.fileList)this.fileList[e].uid==t.uid&&this.fileList.splice(e,1)},changeColor:function(t){this.$set(this.formData,"color",t)},changeCheckout:function(t){this.colleaguesList=t.data},selectDelect:function(t,e){this.$refs.xhuser[0].cancelCheckItem(t),this.colleaguesList.splice(e,1)}}},f=(a("tgh5"),a("KHd+")),m=Object(f.a)(d,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"create-schedule",style:{"z-index":t.zIndex}},[o("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"add-schedule"},[o("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[o("span",{staticClass:"text"},[t._v(t._s(t.text))]),t._v(" "),o("img",{staticClass:"el-icon-close rt",attrs:{src:a("cjwK"),alt:""},on:{click:t.close}})]),t._v(" "),o("div",{staticClass:"content"},[o("el-form",{ref:"form",attrs:{model:t.formData,rules:t.rules}},t._l(t.formList,function(e,a){return o("el-form-item",{key:a,class:"el-form-item-"+e.field,style:{width:e.width},attrs:{prop:e.field,label:e.label}},["time"==e.type?[o("el-date-picker",{attrs:{type:"datetime",format:"yyyy-MM-dd HH:mm:ss",placeholder:"选择日期时间"},model:{value:t.formData[e.field],callback:function(a){t.$set(t.formData,e.field,a)},expression:"formData[item.field]"}})]:"textarea"==e.type?[o("el-input",{attrs:{autosize:{minRows:6},type:"textarea",placeholder:"请输入内容"},model:{value:t.formData[e.field],callback:function(a){t.$set(t.formData,e.field,a)},expression:"formData[item.field]"}})]:"participant"==e.type?[o("el-popover",{attrs:{placement:"bottom-end",width:"280",trigger:"click"}},[o("xh-user",{ref:"xhuser",refInFor:!0,attrs:{"selected-data":t.colleaguesList},on:{changeCheckout:t.changeCheckout}}),t._v(" "),o("div",{staticClass:"select-box",attrs:{slot:"reference"},slot:"reference"},[t._l(t.colleaguesList,function(e,a){return o("span",{key:a,staticClass:"select-box-span"},[t._v("\n                  "+t._s(e.realname)+"\n                  "),o("span",{staticClass:"el-icon-close",on:{click:function(o){o.stopPropagation(),t.selectDelect(e,a)}}})])}),t._v(" "),o("span",{staticClass:"el-icon-plus"})],2)],1)]:"select"==e.type?[o("el-select",{attrs:{placeholder:"请选择"},model:{value:t.formData[e.field],callback:function(a){t.$set(t.formData,e.field,a)},expression:"formData[item.field]"}},t._l(t.options,function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))]:"color"==e.type?[o("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.formData[e.field],callback:function(a){t.$set(t.formData,e.field,a)},expression:"formData[item.field]"}},[o("i",{staticClass:"el-input__icon",attrs:{slot:"prefix"},slot:"prefix"},[o("span",{staticClass:"bg-color",style:{background:t.formData.color}})])]),t._v(" "),o("div",{staticClass:"color-box"},t._l(t.colorList,function(e,a){return o("span",{key:a,style:{background:e},on:{click:function(a){t.changeColor(e)}}})}))]:o("el-input",{model:{value:t.formData[e.field],callback:function(a){t.$set(t.formData,e.field,a)},expression:"formData[item.field]"}})],2)})),t._v(" "),o("related-business",{attrs:{"all-data":t.allData},on:{checkInfos:t.checkInfos}})],1),t._v(" "),o("div",{staticClass:"footer"},[o("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("保存")]),t._v(" "),o("el-button",{on:{click:t.close}},[t._v("取消")])],1)])])},[],!1,null,"8e8c2aa8",null);m.options.__file="createSchedule.vue";e.default=m.exports},"Dh/N":function(t,e,a){"use strict";a.d(e,"d",function(){return r}),a.d(e,"a",function(){return s}),a.d(e,"b",function(){return n}),a.d(e,"c",function(){return i});var o=a("t3Un");function r(t){return Object(o.a)({url:"oa/event/index",method:"post",data:t})}function s(t){return Object(o.a)({url:"oa/event/save",method:"post",data:t})}function n(t){return Object(o.a)({url:"oa/event/delete",method:"post",data:t})}function i(t){return Object(o.a)({url:"oa/event/update",method:"post",data:t})}},GsUu:function(t,e,a){"use strict";var o=a("SvQs");a.n(o).a},NUF6:function(t,e,a){},SvQs:function(t,e,a){},tgh5:function(t,e,a){"use strict";var o=a("NUF6");a.n(o).a}}]);
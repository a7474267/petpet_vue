(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0dd63c"],{"80d2":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("Navbar",{attrs:{isAuth:!0,currentUserName:t.currentUser.name}}),e("main",[e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-10"},[e("div",{staticClass:"row vh-100 align-items-center"},[e("div",{staticClass:"col-md-6"},[e("MemberDetail",{attrs:{currentUser:t.currentUser}})],1),e("div",{staticClass:"col-md-6"},[e("h3",{staticClass:"h4 h3-lg mb-4 text-primary font-weight-bold"},[t._v(" Hi, "+t._s(t.currentUser.name)),e("br"),t._v(" 喜歡我們提供的服務嗎？"),e("br"),t._v("現在你也可以成為寵物保姆囉 "),e("span",{staticClass:"d-none d-xl-inline"},[t._v("！")])]),t._m(0)])])])])])])],1)},r=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row mt-8 mt-lg-9"},[e("div",{staticClass:"col-lg-6"},[e("button",{staticClass:"btn btn-secondary btn-block",attrs:{type:"button"}},[t._v(" 下一步 ")])])])}],l=e("d178"),c=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[t._m(0),e("div",{staticClass:"d-flex align-items-center mt-3"},[e("img",{staticClass:"mr-3",attrs:{src:t.currentUser.avatar,alt:"..."}}),e("h4",{staticClass:"text-primary"},[t._v(t._s(t.currentUser.name))])]),e("ul",{staticClass:"list-unstyled mt-5"},[e("li",{staticClass:"mb-5"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-3 col-md-4 col-lg-3"},[t._v("電子信箱")]),e("div",{staticClass:"col-9 col-md-8 col-lg-9 text-primary"},[t._v(" "+t._s(t.currentUser.email)+" ")])])]),e("li",{staticClass:"mb-5"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-3 col-md-4 col-lg-3"},[t._v("聯絡電話")]),e("div",{staticClass:"col-9 col-md-8 col-lg-9 text-primary"},[t._v(" "+t._s(t.currentUser.tel)+" ")])])]),e("li",{staticClass:"mb-5"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-3 col-md-4 col-lg-3"},[t._v("性別")]),e("div",{staticClass:"col-9 col-md-8 col-lg-4 text-primary"},[t._v(t._s(t.currentUser.gender))])])]),e("li",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-3 col-md-4 col-lg-3"},[t._v("聯絡地址")]),e("div",{staticClass:"col-9 col-md-8 col-lg-9 text-primary"},[t._v(" "+t._s(t.currentUser.address)+" ")])])])])])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"d-flex align-items-center mb-8 mb-md-8 text-primary"},[e("h2",{staticClass:"font-weight-bold"},[t._v("會員資料")]),e("span",{staticClass:"material-icons"},[t._v("create")])])}],n={props:{currentUser:{type:Object,required:!0}},data:function(){return{}}},o=n,d=e("2877"),m=Object(d["a"])(o,c,i,!1,null,null,null),v=m.exports,u={currentUser:{id:1,avatar:"https://hexschool.github.io/webLayoutTraining1st/petpet-week8/person-5.png",name:"Joanne",email:"cycample@gmail.com",tel:"0912-345-789",gender:"女",address:" 高雄市鹽埕區七賢三路123號"}},C={name:"Member",data:function(){return{isAuth:!0,currentUser:{id:-1,avatar:"",name:"",email:"",tel:"",gender:"",address:""}}},components:{Navbar:l["a"],MemberDetail:v},created:function(){this.fetchUser()},methods:{fetchUser:function(){var t=u.currentUser;this.currentUser=t}}},_=C,b=Object(d["a"])(_,a,r,!1,null,null,null);s["default"]=b.exports}}]);
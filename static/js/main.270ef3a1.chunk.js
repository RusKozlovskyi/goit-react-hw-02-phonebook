(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={book:"App_book__HIY-v",contacts:"App_contacts__25Id9"}},13:function(t,e,n){t.exports={filter:"filter_filter__2wjnQ"}},2:function(t,e,n){t.exports={formEditor:"contactForm_formEditor__KlugE",formEditor_label:"contactForm_formEditor_label__fbSN5",formEditor_input:"contactForm_formEditor_input__tfYEJ",formEditor_button:"contactForm_formEditor_button__c9g_c"}},20:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n(1),c=n(12),r=n.n(c),i=n(14),s=n(3),l=n(5),u=n(6),m=n(8),b=n(7),d=n(22),h=n(9),f=n.n(h),j=function(t){var e=t.contacts,n=t.onRemoveContact;return Object(a.jsx)("ul",{className:f.a.phoneList,children:e.map((function(t){return Object(a.jsxs)("li",{className:f.a.phoneList_item,children:[t.name+" : "+t.number,Object(a.jsx)("button",{className:f.a.phoneList_button,type:"button",name:"delete",onClick:function(){return n(t.id)},children:"delete"})]},t.id)}))})},p=n(13),_=n.n(p);function O(t){var e=t.value,n=t.onChangeFilter;return Object(a.jsxs)("div",{className:_.a.filter,children:["Find contacts by name :",Object(a.jsx)("p",{}),Object(a.jsx)("input",{type:"text",value:e,onChange:function(t){return n(t.target.value)}})]})}var v=n(4),x=n(2),C=n.n(x),g=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,o=n.value;t.setState(Object(v.a)({},a,o))},t.handleSubmit=function(e){e.preventDefault(),t.props.onAddContact(Object(s.a)({},t.state)),t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{className:C.a.formEditor,onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{className:C.a.formEditor_label,children:["Name",Object(a.jsx)("input",{className:C.a.formEditor_input,type:"text",name:"name",value:this.state.name,onChange:this.handleChange})]}),Object(a.jsxs)("label",{className:C.a.formEditor_label,children:["Number",Object(a.jsx)("input",{className:C.a.formEditor_input,type:"text",name:"number",value:this.state.number,onChange:this.handleChange})]}),Object(a.jsx)("button",{className:C.a.formEditor_button,type:"submit",children:"Add contact"})]})}}]),n}(o.Component),E=n(11),N=n.n(E),y=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){if(t.state.contacts.map((function(t){return t.name})).includes(e.name))alert("".concat(e.name," is already in contacts"));else if(0===e.name.length)alert("Please fill in all fields !");else{var n=Object(s.a)(Object(s.a)({},e),{},{id:Object(d.a)()});t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[n])}}))}},t.changeFilter=function(e){t.setState({filter:e})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(a.jsxs)("div",{children:[Object(a.jsxs)("h1",{className:N.a.book,children:["Phonebook ",Object(a.jsx)("span",{children:"\ud83d\udd7f"})," "]}),Object(a.jsx)(g,{onAddContact:this.addContact}),Object(a.jsx)("h2",{className:N.a.contacts,children:"Contacts"}),e.length>1&&Object(a.jsx)(O,{value:t,onChangeFilter:this.changeFilter}),e.length>0&&Object(a.jsx)(j,{contacts:e,onRemoveContact:this.removeContact})]})}}]),n}(o.Component);r.a.render(Object(a.jsx)(y,{}),document.getElementById("root"))},9:function(t,e,n){t.exports={phoneList:"contactList_phoneList__29_Yb",phoneList_item:"contactList_phoneList_item__2D3OJ",phoneList_button:"contactList_phoneList_button__2vorA"}}},[[20,1,2]]]);
//# sourceMappingURL=main.270ef3a1.chunk.js.map
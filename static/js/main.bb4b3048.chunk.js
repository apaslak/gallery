(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{154:function(e,t,n){},155:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(50),i=n.n(o),r=n(26),c=n(27),s=n(29),d=n(28),u=n(12),h=n(30),m=n(31),p=function(e){var t,n=function(t,n){return l.a.createElement(m.Row,{key:n},t.map(function(t){return function(t){return l.a.createElement(m.Col,{key:t.id},l.a.createElement("img",{onClick:function(){return e.handleOpenModal(t)},src:t.url,className:t.className,alt:t.title}))}(t)}))};return t=e.rows?e.rows.map(function(e,t){return n(e,t)}):"",l.a.createElement(m.Container,{fluid:!0},t)},g=n(70),f=n.n(g),O=function(e){return e.isOpen?l.a.createElement(f.a,{isOpen:e.isOpen,style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},appElement:document.getElementById("root")},e.children):null},b=window.localStorage,E=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={description:""},n.handleChange=n.handleChange.bind(Object(u.a)(n)),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=b.getItem("id-".concat(this.props.imageId))||"";this.setState({description:e})}},{key:"handleChange",value:function(e){var t=e.target.value;this.setState({description:t}),b.setItem("id-".concat(this.props.imageId),t)}},{key:"render",value:function(){var e=this.state.description;return l.a.createElement("div",null,l.a.createElement("label",null,"Description:",l.a.createElement("textarea",{value:e,onChange:this.handleChange})))}}]),t}(a.Component),v=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={rows:[],showModal:!1,selectedImage:{},isLoading:!1},n.handleOpenModal=n.handleOpenModal.bind(Object(u.a)(n)),n.handleCloseModal=n.handleCloseModal.bind(Object(u.a)(n)),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleOpenModal",value:function(e){this.setState({showModal:!0,selectedImage:e})}},{key:"handleCloseModal",value:function(){this.setState({showModal:!1,selectedImage:{}})}},{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),fetch("https://jsonplaceholder.typicode.com/photos").then(function(e){return e.json()}).then(function(t){e.setState({rows:[t.slice(0,5),t.slice(5,10),t.slice(10,15),t.slice(15,20),t.slice(20,25)],isLoading:!1})})}},{key:"render",value:function(){var e=this.state,t=e.rows,n=e.showModal,o=e.selectedImage;return e.isLoading?l.a.createElement("p",null,"Loading..."):l.a.createElement(a.Fragment,null,n&&l.a.createElement(O,{isOpen:n},l.a.createElement("button",{onClick:this.handleCloseModal,className:"float-right"},"Close Modal"),l.a.createElement(a.Fragment,null,l.a.createElement("h2",null,o.title),l.a.createElement("img",{src:o.url,alt:o.title}),l.a.createElement(E,{imageId:o.id}))),l.a.createElement(p,{rows:t,handleOpenModal:this.handleOpenModal,handleCloseModal:this.handleCloseModal}))}}]),t}(a.Component);n(96),n(154);i.a.render(l.a.createElement(v,null),document.getElementById("root"))},71:function(e,t,n){e.exports=n(155)}},[[71,1,2]]]);
//# sourceMappingURL=main.bb4b3048.chunk.js.map
(this["webpackJsonpdelivery-do-fran6"]=this["webpackJsonpdelivery-do-fran6"]||[]).push([[0],{239:function(e,a,t){e.exports=t(405)},244:function(e,a,t){},245:function(e,a,t){},405:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(29),o=t.n(l),c=(t(244),t(20)),i=t(21),s=t(22),u=t(23),d=(t(245),t(419)),m=t(426),p=t(57),h=t(424),E=t(420),f=t(104),g=t(229),v=t(18),b=function(e){Object(u.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={orderDetails:"",cep:"",logradouro:"",numero:"",bairro:"",cidade:"",complemento:"",bag:[],total:0,companyTitle:"Delivery do Fran6",companyDescription:"Rua Janary Nunes 815, Infraero 1, Macap\xe1-AP",companyContact:"5541998943368",orderOwner:""},e}return Object(i.a)(t,[{key:"formatPrice",value:function(e){return parseInt(e.replace(",","."),10)}},{key:"addToBag",value:function(e){this.setState((function(a){return{bag:a.bag.concat(e),total:a.total+=e.price}}))}},{key:"addAdditionalsToItem",value:function(e,a){var t=this.state.bag.filter((function(e){return e.id==a}));t.additionals=e;this.state.bag.map((function(e){return(e.id=a)&&(e=t),e}))}},{key:"removeFromBag",value:function(e){this.setState((function(a){return{bag:a.bag.filter((function(a){return a.id!=e.id})),total:a.total-=e.price}}))}},{key:"clearOrder",value:function(){this.setState({bag:[],orderOwner:"",orderDetails:"",addressPlaceholder:"Adicione o endere\xe7o de entrega.."})}},{key:"setOrderDetails",value:function(e){this.setState({orderDetails:e})}},{key:"setOrderOwner",value:function(e){this.setState({orderOwner:e})}},{key:"setCep",value:function(e){this.setState({cep:e})}},{key:"setComplemento",value:function(e){this.setState({complemento:e})}},{key:"setNumero",value:function(e){this.setState({numero:e})}},{key:"setLogradouro",value:function(e){this.setState({logradouro:e})}},{key:"setBairro",value:function(e){this.setState({bairro:e})}},{key:"setCidade",value:function(e){this.setState({cidade:e})}},{key:"isEnderecoPreenchido",value:function(){return this.state.complemento&&this.state.numero&&this.state.logradouro&&this.state.bairro&&this.state.cidade}},{key:"formatAdditionals",value:function(e){var a="";return e&&(a=" com adicionais de: ",e.forEach((function(e){a+=e.name+", "}))),a}},{key:"getTotalOrder",value:function(){var e=0;return this.state.bag.forEach((function(a){e+=a.price,a.additionals.forEach((function(a){e+=a.price*a.qtt}))})),e}},{key:"getOrderLink",value:function(){var e=this,a="";return this.state.bag.forEach((function(t){return a+=t.name+e.formatAdditionals(t.additionals)})),"https://wa.me/"+this.state.companyContact+"?text=Pedido para *".concat(this.state.orderOwner,"*: ")+a+"%0a*Endere\xe7o*%0a"+"*CEP*: ".concat(this.state.cep,"%0a")+"*Cidade*: ".concat(this.state.cidade,"%0a")+"*Logradouro*: ".concat(this.state.logradouro,"%0a")+"*Bairro*: ".concat(this.state.bairro,"%0a")+"*N\xfamero*: ".concat(this.state.numero,"%0a")+"*Complemento*: ".concat(this.state.complemento,"%0a")+"*Pedido as*: ".concat(new Date((new Date).toLocaleString("pt-BR",{timeZone:"America/Sao_Paulo"})),"%0a")+"*Total*: R$ ".concat(this.getTotalOrder(),"%0a")+"*OBS*: ".concat(this.state.orderDetails,"%0a")}}]),t}(v.a),C=function(e){Object(u.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={message:"ovni",address:"https://goo.gl/maps/KQ5dSCDLqy2Bv8pU7"},e}return Object(i.a)(t,[{key:"render",value:function(){var e={color:"white",textShadow:"2px 2px #636363"};return r.a.createElement(v.c,{to:[b]},(function(a){return r.a.createElement("div",null,r.a.createElement(f.a,{className:"test"},r.a.createElement(f.a.Item,null,r.a.createElement(g.a,{src:"img/banner.jpeg",alt:"Delivery do Fran6"}),r.a.createElement(f.a.Caption,null,r.a.createElement(m.a,{as:"h1",icon:!0,textAlign:"center",style:e},r.a.createElement(m.a.Content,null,a.state.companyTitle))))),r.a.createElement("br",null))}))}}]),t}(r.a.Component),y=function(e){Object(u.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={mostrarDetalhesModal:!1,products:[{id:"asteroide",name:"Asteroide",description:"2 X-Larica, 500g batata, cheddar, 1 coca litro",price:25,image:"img/products/asteroide.jpeg",link:"#",color:"red"},{id:"cometa",name:"Cometa",description:"4 X-Larica, 500g batata, cheddar, 1 coca litro",price:35,image:"img/products/cometa.jpeg",link:"#",color:"green"},{id:"espacial",name:"Espacial",description:"2 Super X-Larica, 500g batata, bacon, cheddar, calabresa acebolada, 1 coca litro",price:40,image:"img/products/espacial.jpeg",link:"#",color:"violet"},{id:"ovni",name:"OVNI",description:"Batata frita, an\xe9is de Saturno (cebola empanada), cheddar, cream cheese, bacon, calabresa acebolada, 1 coca litro",price:35,image:"img/products/ovni.jpeg",link:"#",color:"orange"}],additionals:[{id:"calabresa",name:"calabresa",price:2,qtt:0},{id:"bacon",name:"bacon",price:3,qtt:0},{id:"carne",name:"carne",price:2,qtt:0},{id:"ovo",name:"ovo",price:1,qtt:0},{id:"cheddar",name:"cheddar",price:2,qtt:0},{id:"cheese",name:"cream cheese",price:3,qtt:0},{id:"catupiry",name:"catupiry",price:2,qtt:0},{id:"mussarela",name:"mussarela",price:2,qtt:0},{id:"presunto",name:"presunto",price:1,qtt:0},{id:"cebola",name:"cebola",price:1,qtt:0},{id:"frango",name:"fil\xe9 de frango",price:4,qtt:0},{id:"carne",name:"fil\xe9 de carne",price:4,qtt:0}],addressLink:""},e}return Object(i.a)(t,[{key:"setAddressLink",value:function(e){this.setState({addressLink:e})}}]),t}(v.a),O=t(48),k=t(422),w=t(406),S=t(427),j=t(423),A=function(e){Object(u.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={open:!1,qtt:0,additionals:[]},e.handleOpen=function(){return e.setState({modalOpen:!0})},e.handleClose=function(){return e.setState({modalOpen:!1})},e}return Object(i.a)(t,[{key:"addToAdditional",value:function(e){var a=this.state.additionals;a.length<=0||!a.filter((function(a){return a.id===e.id}))[0]?(e.qtt+=1,a.push(e)):a=this.state.additionals.map((function(a){return a.id===e.id&&(a.qtt+=1),a.total=a.price*a.qtt,a})),this.setState({additionals:a})}},{key:"subtractFromAdditional",value:function(e){this.setState({additionals:this.state.additionals.map((function(a){return a.id===e&&a.qtt>0&&(a.qtt-=1),a}))})}},{key:"showQuantity",value:function(e){var a=this.state.additionals.filter((function(a){return a.id===e}))[0];return a?a.qtt:0}},{key:"render",value:function(){var e=this;return r.a.createElement(v.c,{to:[y,b]},(function(a,t){return r.a.createElement(k.a,{className:"my-modal",size:"mini",open:e.state.modalOpen,onClose:e.handleClose,trigger:r.a.createElement(w.a,{basic:!0,color:"green",icon:"cart plus",size:"tiny",onClick:e.handleOpen})},r.a.createElement(k.a.Content,null,r.a.createElement(k.a.Description,null,r.a.createElement(m.a,{as:"h4"},"Adicionais"),r.a.createElement(S.a,{style:{overflow:"auto",maxHeight:200}},r.a.createElement(j.a,{striped:!0,textAlign:"center",size:"small",basic:"very"},r.a.createElement(j.a.Body,null,a.state.additionals.map((function(a){return r.a.createElement(j.a.Row,null,r.a.createElement(j.a.Cell,null,a.name),r.a.createElement(j.a.Cell,null,r.a.createElement(O.a,{value:a.price,displayType:"text",prefix:"R$ ",thousandSeparator:".",decimalSeparator:",",fixedDecimalScale:!0,decimalScale:2,renderText:function(e){return r.a.createElement("span",null,e)}})),r.a.createElement(j.a.Cell,null,r.a.createElement(w.a.Group,null,r.a.createElement(w.a,{color:"green",size:"tiny",onClick:function(){e.addToAdditional(a)}},"+"),r.a.createElement(w.a.Or,{text:e.showQuantity(a.id)}),r.a.createElement(w.a,{color:"red",size:"tiny",onClick:function(){e.subtractFromAdditional(a.id)}},"-"))))}))),r.a.createElement("br",null))),r.a.createElement(k.a.Actions,null,r.a.createElement(w.a,{content:"adicionar",color:"green",icon:"cart plus",size:"tiny",onClick:function(){t.addToBag({id:t.state.bag.length+e.props.item.name,name:e.props.item.name,price:e.props.item.price,additionals:e.state.additionals}),e.handleClose(),console.log(e.state.additionals),e.props.showAlert(e.props.item.name)}})))))}))}}]),t}(r.a.Component),x=function(e){Object(u.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={message:"ovni",address:"https://goo.gl/maps/KQ5dSCDLqy2Bv8pU7"},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(v.c,{to:[b]},(function(a){return r.a.createElement(h.a,{style:{width:"255px"}},r.a.createElement(g.a,{src:e.props.product.image,wrapped:!0,ui:!1}),r.a.createElement(h.a.Content,null,r.a.createElement(h.a.Header,null,e.props.product.name),r.a.createElement(h.a.Meta,null,r.a.createElement(O.a,{value:e.props.product.price,displayType:"text",prefix:"R$ ",thousandSeparator:".",decimalSeparator:",",fixedDecimalScale:!0,decimalScale:2,renderText:function(e){return r.a.createElement("span",null,e)}})),r.a.createElement(h.a.Description,null,e.props.product.description)),r.a.createElement(h.a.Content,{extra:!0},r.a.createElement(A,{item:e.props.product,showAlert:e.props.showAlert})))}))}}]),t}(r.a.Component),P=t(139),q=t.n(P),B=t(220),T=t(421),D=t(416),L=t(417),F=function(e){Object(u.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={preencherPeloCep:!1,cep:"",logradouro:"",numero:"",complemento:"",bairro:"",cidade:""},e.onChangeCheckbox=function(a,t){e.setState({preencherPeloCep:t.checked})},e}return Object(i.a)(t,[{key:"findAddressByCep",value:function(){var e=Object(B.a)(q.a.mark((function e(a,t){var n,r;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://viacep.com.br/ws/".concat(a,"/json"));case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,t.setCep(r.cep),t.setLogradouro(r.logradouro),t.setBairro(r.bairro),t.setCidade(r.localidade);case 10:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement(v.c,{to:[b]},(function(a){return r.a.createElement("div",null,r.a.createElement(m.a,{as:"h3"},r.a.createElement(p.a,{name:"truck",color:"brown"})," Endere\xe7o de Entrega"),r.a.createElement(T.a,null,r.a.createElement(T.a.Field,null,r.a.createElement(T.a.Field,null,r.a.createElement(D.a,{label:"Preencher automaticamente pelo CEP",onClick:function(a,t){return e.onChangeCheckbox(a,t)}})),r.a.createElement("label",null,"CEP"),r.a.createElement(L.a,{icon:r.a.createElement(p.a,{name:"search",inverted:!0,circular:!0,link:!0,onClick:function(t){return e.findAddressByCep(a.state.cep,a)}}),placeholder:"Pesquise pelo CEP...",onChange:function(e){return a.setCep(e.target.value)},onKeyPress:function(t){"Enter"===t.key&&e.findAddressByCep(t.target.value,a)}})),r.a.createElement(T.a.Field,null,r.a.createElement("label",null,"Logradouro"),r.a.createElement("input",{value:a.state.logradouro,disabled:e.state.preencherPeloCep,onChange:function(e){return a.setLogradouro(e.target.value)}})),r.a.createElement(T.a.Field,null,r.a.createElement("label",null,"Cidade"),r.a.createElement("input",{value:a.state.cidade,disabled:e.state.preencherPeloCep,onChange:function(e){return a.setCidade(e.target.value)}})),r.a.createElement(T.a.Field,null,r.a.createElement("label",null,"Bairro"),r.a.createElement("input",{value:a.state.bairro,disabled:e.state.preencherPeloCep,onChange:function(e){return a.setBairro(e.target.value)}})),r.a.createElement(T.a.Field,null,r.a.createElement("label",null,"N\xfamero"),r.a.createElement("input",{value:a.state.numero,onChange:function(e){return a.setNumero(e.target.value)}})),r.a.createElement(T.a.Field,null,r.a.createElement("label",null,"Complemento"),r.a.createElement("input",{value:a.state.complemento,onChange:function(e){return a.setComplemento(e.target.value)}}))))}))}}]),t}(r.a.Component),R=t(54),H=function(){return r.a.createElement(R.a,{position:"top-right",autoClose:3e3,hideProgressBar:!0,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})},z=t(418),N=function(e){Object(u.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={open:!1},e.handleOpen=function(){return e.setState({modalOpen:!0})},e.handleClose=function(){return e.setState({modalOpen:!1})},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(v.c,{to:[b]},(function(a){return r.a.createElement(k.a,{className:"my-modal",size:"mini",open:e.state.modalOpen,onClose:e.handleClose,trigger:r.a.createElement(w.a,{color:"orange",onClick:e.handleOpen},r.a.createElement(p.a,{name:"box"})," Fechar sacola")},r.a.createElement(k.a.Content,null,r.a.createElement(k.a.Description,null,r.a.createElement(T.a,null,r.a.createElement(T.a.Field,null,r.a.createElement("label",null,"Entrega para:"),r.a.createElement(L.a,{placeholder:"insira seu nome",value:a.state.orderOwner,onChange:function(e,t){var n=t.value;return a.setOrderOwner(n)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(z.a,{placeholder:"Alguma observa\xe7\xe3o ou detalhe do pedido aqui..",onChange:function(e,t){var n=t.value;return a.setOrderDetails(n)}})))),r.a.createElement("br",null),r.a.createElement(k.a.Actions,null,r.a.createElement(w.a,{negative:!0,onClick:e.handleClose},"Cancelar"),r.a.createElement(w.a,{color:"green",disabled:!(0!=a.state.bag.length&&a.state.orderOwner&&a.isEnderecoPreenchido()),onClick:function(){window.open(a.getOrderLink(),"_blank"),a.clearOrder(),e.handleClose()}},r.a.createElement(p.a,{name:"whatsapp"})," Finalizar Pedido"))))}))}}]),t}(r.a.Component),I=function(e){Object(u.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={message:"ovni",address:"https://goo.gl/maps/KQ5dSCDLqy2Bv8pU7"},e}return Object(i.a)(t,[{key:"sumAdditionalsTotal",value:function(e){var a=0;return e.forEach((function(e){return a+=e.qtt+e.price})),a}},{key:"render",value:function(){var e=this;return r.a.createElement(v.c,{to:[b]},(function(a){return r.a.createElement("div",null,r.a.createElement(m.a,{as:"h3"},r.a.createElement(p.a,{name:"shopping bag",color:"red"})," Sacola"),r.a.createElement(j.a,{striped:!0,textAlign:"center"},r.a.createElement(j.a.Header,null,r.a.createElement(j.a.Row,null,r.a.createElement(j.a.HeaderCell,null,"Pedido"),r.a.createElement(j.a.HeaderCell,null,"Pre\xe7o"),r.a.createElement(j.a.HeaderCell,null,"Adicionais"),r.a.createElement(j.a.HeaderCell,null,"Remover"))),r.a.createElement(j.a.Body,null,a.state.bag.map((function(t){return r.a.createElement(j.a.Row,null,r.a.createElement(j.a.Cell,null,t.name),r.a.createElement(j.a.Cell,null,r.a.createElement(O.a,{value:t.price,displayType:"text",prefix:"R$ ",thousandSeparator:".",decimalSeparator:",",fixedDecimalScale:!0,decimalScale:2,renderText:function(e){return r.a.createElement("span",null,e)}})),r.a.createElement(j.a.Cell,null,r.a.createElement(O.a,{value:e.sumAdditionalsTotal(t.additionals),displayType:"text",prefix:"R$ ",thousandSeparator:".",decimalSeparator:",",fixedDecimalScale:!0,decimalScale:2,renderText:function(e){return r.a.createElement("span",null,e)}})),r.a.createElement(j.a.Cell,null,r.a.createElement(w.a,{icon:"close",onClick:function(){a.removeFromBag(t),R.b.info("".concat(t.name," removido \ud83c\udf54"),{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}})))})),r.a.createElement(j.a.Row,null,r.a.createElement(j.a.Cell,null,"Total:"),r.a.createElement(j.a.Cell,null,r.a.createElement("b",null,r.a.createElement(O.a,{value:a.state.total,displayType:"text",prefix:"R$ ",thousandSeparator:".",decimalSeparator:",",fixedDecimalScale:!0,decimalScale:2,renderText:function(e){return r.a.createElement("span",null,e)}}))),r.a.createElement(j.a.Cell,null),r.a.createElement(j.a.Cell,null,r.a.createElement(N,null))))),r.a.createElement(H,null))}))}}]),t}(r.a.Component),$=t(425),Q=function(){return r.a.createElement($.a,{color:"cian"},r.a.createElement($.a.Header,null,r.a.createElement(p.a,{name:"shopping cart",color:"green"})," Como fazer seu pedido em 3 simples passos"),r.a.createElement($.a.List,null,r.a.createElement($.a.Item,null,"Adicione os itens a sacola"),r.a.createElement($.a.Item,null,"Selecione o endere\xe7o de entrega pelo CEP"),r.a.createElement($.a.Item,null,"Finalize o pedido")))},K=function(e){Object(u.a)(t,e);var a=Object(s.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"orderAdded",value:function(e){R.b.success("".concat(e," adicionado \ud83c\udf54"),{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},{key:"render",value:function(){var e=this;return r.a.createElement(v.c,{to:[y]},(function(a){return r.a.createElement("div",{className:"App"},r.a.createElement(C,null),r.a.createElement(d.a,null,r.a.createElement(Q,null),r.a.createElement(m.a,{as:"h3"},r.a.createElement(p.a,{name:"food",color:"orange"})," Adicione o(s) item(s) desejado(s)"),r.a.createElement(h.a.Group,{centered:!0},a.state.products.map((function(a,t){return r.a.createElement(x,{id:t,product:a,showAlert:e.orderAdded})})))),r.a.createElement(E.a,null),r.a.createElement(F,null),r.a.createElement(E.a,null),r.a.createElement(I,null),r.a.createElement(H,null))}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(402),t(403),t(404);o.a.render(r.a.createElement(v.b,null,r.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[239,1,2]]]);
//# sourceMappingURL=main.67e7ca07.chunk.js.map
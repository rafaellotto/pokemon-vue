import{u as m,a as p,r as i,o as g,b as v,c as k,d as s,e as o,f as e,g as f,w as y,h as b,F as x,t as c,i as l,j as w,P as N}from"./index-BpGLUc9y.js";const B={class:"w-full max-w-screen-sm mx-auto"},F={class:"text-center mb-5"},P={class:"border rounded-lg bg-white grid grid-cols-2 items-center p-5 mb-5"},R={class:"flex justify-center items-center"},V=["src"],j={class:"my-1"},C=e("hr",null,null,-1),L={class:"capitalize my-1"},M=e("hr",null,null,-1),D={key:0,class:"my-1"},S=e("hr",null,null,-1),T={key:1,class:"my-1"},z=e("hr",null,null,-1),E={key:2,class:"my-1"},H={key:3,class:"mt-3",controls:""},I=["src"],W={class:"border rounded-lg bg-white grid grid-cols-2 lg:grid-cols-4 p-5 gap-5"},$={key:0,class:"text-center"},q=["src"],A=e("small",null,"Male (front)",-1),G={key:1,class:"text-center"},J=["src"],K=e("small",null,"Male (back)",-1),O={key:2,class:"text-center"},Q=["src"],U=e("small",null,"Female (front)",-1),X={key:3,class:"text-center"},Y=["src"],Z=e("small",null,"Female (back)",-1),oe={__name:"Pokemon",setup(ee){const n=m(),_=p(),a=i({}),t=i([]),r=i(!0);return g(()=>{a.value=_.findById(n.params.id),a.value&&v.get(`https://pokeapi.co/api/v2/pokemon/${n.params.id}`).then(({data:u})=>t.value=u).finally(()=>r.value=!1)}),(u,te)=>{const d=k("RouterLink");return s(),o("main",B,[e("div",F,[f(d,{to:"/",class:"border block rounded-full px-3 py-2 bg-white hover:bg-gray-200"},{default:y(()=>[w(" Return home ")]),_:1})]),r.value?(s(),b(N,{key:0})):(s(),o(x,{key:1},[e("section",P,[e("div",R,[e("img",{src:a.value.sprite,alt:"",width:"192",height:"192"},null,8,V)]),e("div",null,[e("p",j,"No. "+c(a.value.id),1),C,e("h1",L,"Name: "+c(a.value.name),1),M,t.value.types?(s(),o("p",D,"Type: "+c(t.value.types.map(h=>h.type.name).join(", ")),1)):l("",!0),S,t.value.weight?(s(),o("p",T,"Weight: "+c(t.value.weight/10)+" kg",1)):l("",!0),z,t.value.height?(s(),o("p",E,"Height: "+c(t.value.height/10)+" m",1)):l("",!0),t.value.cries.latest?(s(),o("audio",H,[e("source",{src:t.value.cries.latest,type:"audio/ogg"},null,8,I)])):l("",!0)])]),e("section",W,[t.value.sprites.front_default?(s(),o("div",$,[e("img",{class:"mx-auto",src:t.value.sprites.front_default,alt:"",width:"96",height:"96"},null,8,q),A])):l("",!0),t.value.sprites.back_default?(s(),o("div",G,[e("img",{class:"mx-auto",src:t.value.sprites.back_default,alt:"",width:"96",height:"96"},null,8,J),K])):l("",!0),t.value.sprites.front_female?(s(),o("div",O,[e("img",{class:"mx-auto",src:t.value.sprites.front_female,alt:"",width:"96",height:"96"},null,8,Q),U])):l("",!0),t.value.sprites.back_female?(s(),o("div",X,[e("img",{class:"mx-auto",src:t.value.sprites.back_female,alt:"",width:"96",height:"96"},null,8,Y),Z])):l("",!0)])],64))])}}};export{oe as default};
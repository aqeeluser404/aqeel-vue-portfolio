(function(){"use strict";var a={791:function(a,e,t){var s=t(5130),i=t(6768);function l(a,e,t,s,l,n){const r=(0,i.g2)("MouseCursor"),d=(0,i.g2)("NavBar"),o=(0,i.g2)("NoiseBackground");return(0,i.uX)(),(0,i.CE)("div",null,[(0,i.bF)(r),(0,i.bF)(d),(0,i.bF)(o)])}var n=t(4232),r=t.p+"img/a.da1106fe.png",d=t.p+"img/paper-plane-regular.6e4e6b48.svg";const o={key:0},c={id:"navbar"},v={class:"nav-header"},u={class:"nav-logo"},h=(0,i.Lk)("div",{class:"header-divider"},[(0,i.Lk)("hr")],-1),m=(0,i.Lk)("div",{class:"nav-title"},[(0,i.Lk)("h1",{class:"headline-small-2 line-height-low"},"DEV"),(0,i.Lk)("h1",{class:"headline-xsmall-2 line-height-low"},"INTERN")],-1),p={class:"nav-list-items"},b={class:"filler-container"};function g(a,e,t,l,g,k){const y=(0,i.g2)("router-link"),L=(0,i.g2)("router-view");return(0,i.uX)(),(0,i.CE)(i.FK,null,[k.showLoadingPage||k.isNavbarVisible?(0,i.Q3)("",!0):((0,i.uX)(),(0,i.CE)("picture",o,[(0,i.Lk)("img",{src:r,alt:"a-logo",class:"logo logo-container",onClick:e[0]||(e[0]=(...a)=>k.toggleNavbar&&k.toggleNavbar(...a))})])),(0,i.Lk)("div",{class:(0,n.C4)(["navbar-vertical-fixed",{hidden:!k.isNavbarVisible}])},[(0,i.Lk)("nav",c,[(0,i.Lk)("div",v,[(0,i.Lk)("div",u,[(0,i.Lk)("picture",null,[(0,i.Lk)("img",{src:r,alt:"a-logo",class:"logo",onClick:e[1]||(e[1]=(...a)=>k.toggleNavbar&&k.toggleNavbar(...a))})])]),h,m]),(0,i.Lk)("div",p,[(0,i.bF)(y,{to:"/",class:"nav-item",onClick:k.hideNavbarOnSmallScreens},{default:(0,i.k6)((()=>[(0,i.eW)("HOME")])),_:1},8,["onClick"]),(0,i.bF)(y,{to:"/about",class:"nav-item",onClick:k.hideNavbarOnSmallScreens},{default:(0,i.k6)((()=>[(0,i.eW)("ABOUT")])),_:1},8,["onClick"]),(0,i.bF)(y,{to:"/skills",class:"nav-item",onClick:k.hideNavbarOnSmallScreens},{default:(0,i.k6)((()=>[(0,i.eW)("SKILLS")])),_:1},8,["onClick"]),(0,i.bF)(y,{to:"/projects",class:"nav-item",onClick:k.hideNavbarOnSmallScreens},{default:(0,i.k6)((()=>[(0,i.eW)("PROJECTS")])),_:1},8,["onClick"])]),(0,i.Lk)("div",b,[(0,i.Lk)("img",{src:d,alt:"#",onClick:e[2]||(e[2]=(...a)=>k.GoToContact&&k.GoToContact(...a)),class:"plane-icon"})])])],2),(0,i.bF)(L,null,{default:(0,i.k6)((({Component:a,route:e})=>[(0,i.bF)(s.eB,{name:"slide",mode:"out-in"},{default:(0,i.k6)((()=>[((0,i.uX)(),(0,i.CE)("div",{key:e.name},[((0,i.uX)(),(0,i.Wv)((0,i.$y)(a)))]))])),_:2},1024)])),_:1})],64)}t(4114);var k=t(782),y={name:"NavBar",computed:{...(0,k.aH)(["isNavbarVisible"]),isNavbarVisible(){return this.$store.state.isNavbarVisible},showLoadingPage(){return this.$store.state.showLoading}},methods:{...(0,k.PY)(["toggleNavbar"]),hideNavbarOnSmallScreens(){window.innerWidth<=900&&this.isNavbarVisible&&this.toggleNavbar()},toggleNavbar(){this.$store.commit("toggleNavbar")},GoToContact(){this.$router.push("/contact")}},mounted(){this.hideNavbarOnSmallScreens(),window.addEventListener("resize",this.hideNavbarOnSmallScreens)},beforeUnmount(){window.removeEventListener("resize",this.hideNavbarOnSmallScreens)}},L=t(1241);const f=(0,L.A)(y,[["render",g]]);var w=f;const x={class:"circle"};function T(a,e,t,s,l,n){return(0,i.uX)(),(0,i.CE)("div",x)}var C={name:"MouseCursor",data(){return{cursorOpacity:0}},mounted(){const a=document.querySelector(".circle"),e={x:0,y:0},t={x:0,y:0},s={x:0,y:0};let i=0,l=0;window.addEventListener("mousemove",(a=>{e.x=a.x,e.y=a.y}));const n=.17,r=()=>{const r=()=>{s.x+=(e.x-s.x)*n,s.y+=(e.y-s.y)*n;const d=`translate(${s.x}px, ${s.y}px)`,o=e.x-t.x,c=e.y-t.y;t.x=e.x,t.y=e.y;const v=Math.min(4*Math.sqrt(o**2+c**2),150),u=v/150*.5;i+=(u-i)*n;const h=`scale(${1+i}, ${1-i})`,m=180*Math.atan2(c,o)/Math.PI;v>20&&(l=m);const p=`rotate(${l}deg)`;a.style.transform=`${d} ${p} ${h}`,this.cursorOpacity+=.02,a.style.opacity=Math.min(1,this.cursorOpacity),window.requestAnimationFrame(r)};r()};a.style.opacity=0,setTimeout(r,2500)}};const S=(0,L.A)(C,[["render",T]]);var A=S;const N={class:"noise"};function I(a,e,t,s,l,n){return(0,i.uX)(),(0,i.CE)("div",N)}var E={name:"NoiseBackground"};const M=(0,L.A)(E,[["render",I]]);var V=M,O={name:"App",components:{NavBar:w,MouseCursor:A,NoiseBackground:V}};const j=(0,L.A)(O,[["render",l]]);var W=j,P=t(1387),_=t.p+"img/github.09398c5a.svg",H=t.p+"img/instagram.d2f2aaec.svg",F=t.p+"img/linkedin.64d926fb.svg",q=t.p+"media/video-Wallpaper-low.1d71f2e2.mp4";const G=a=>((0,i.Qi)("data-v-784cca86"),a=a(),(0,i.jt)(),a),D=(0,i.Fv)('<div class="text-container" data-v-784cca86><h1 class="headline-xsmall" data-v-784cca86>Hi there,</h1><h1 class="headline-large" data-v-784cca86>I&#39;m Aqeel Hanslo</h1><h1 class="headline-medium" data-v-784cca86> &lt;Software Developer/&gt; </h1><p class="font-inter-medium" data-v-784cca86><span class="opacity-full" data-v-784cca86><br data-v-784cca86>The design of an application or website usually </span><span class="opacity-half" data-v-784cca86><br data-v-784cca86>mirrors the thought process of the creator. Tell me </span><span class="opacity-quarter" data-v-784cca86><br data-v-784cca86> what to do and I&#39;ll try to visualize your ideas</span></p></div>',1),B={class:"links-container"},X={class:"styled-button"},R=G((()=>(0,i.Lk)("div",{class:"left"},[(0,i.Lk)("div",{class:"box-1"}),(0,i.Lk)("div",{class:"box-2"}),(0,i.Lk)("div",{class:"box-3"})],-1))),$={class:"middle"},J=G((()=>(0,i.Lk)("div",{class:"box-4"},null,-1))),Q={class:"box-5"},U=G((()=>(0,i.Lk)("div",{class:"box-6"},null,-1))),Y=G((()=>(0,i.Lk)("div",{class:"right"},[(0,i.Lk)("div",{class:"box-7"}),(0,i.Lk)("div",{class:"box-8"}),(0,i.Lk)("div",{class:"box-9"})],-1))),K=(0,i.Fv)('<div class="social-links" data-v-784cca86><a href="https://github.com/aqeeluser404" target="_blank" rel="noopener noreferrer" data-v-784cca86><img src="'+_+'" alt="github-logo" class="social-icon" data-v-784cca86></a><a href="https://www.instagram.com/aqeeluser404/" target="_blank" rel="noopener noreferrer" data-v-784cca86><img src="'+H+'" alt="github-logo" class="social-icon" data-v-784cca86></a><a href="https://www.linkedin.com/in/aqeel-hanslo-234961210" target="_blank" rel="noopener noreferrer" data-v-784cca86><img src="'+F+'" alt="linkedin-logo" class="social-icon unique-icon" data-v-784cca86></a></div>',1),z=G((()=>(0,i.Lk)("div",{class:"page-number"},[(0,i.Lk)("h1",{class:"headline-xsmall"},"01")],-1))),Z=G((()=>(0,i.Lk)("video",{autoplay:"",muted:"",loop:"",id:"video-background",style:{width:"100%",height:"100vh"}},[(0,i.Lk)("source",{src:q,type:"video/mp4"}),(0,i.eW)(" Your browser does not support the video tag. ")],-1)));function aa(a,e,t,s,l,r){return(0,i.uX)(),(0,i.CE)("div",{class:"main-container",style:(0,n.Tr)(r.getAdjustedWidth)},[D,(0,i.Lk)("div",B,[(0,i.Lk)("div",X,[R,(0,i.Lk)("div",$,[J,(0,i.Lk)("div",Q,[(0,i.Lk)("button",{class:"button",onClick:e[0]||(e[0]=(...a)=>r.GotoContact&&r.GotoContact(...a))},"Get In Touch")]),U]),Y]),K]),z,Z],4)}var ea={name:"HomeCard",computed:{...(0,k.aH)(["isNavbarVisible"]),getAdjustedWidth(){return{width:this.isNavbarVisible?"calc(100% - 6.5rem)":"100%",position:"relative",left:this.isNavbarVisible?"6.5rem":"0"}}},methods:{GotoContact(){console.log("GotoContact method called"),this.$router.push("/contact")}}};const ta=(0,L.A)(ea,[["render",aa],["__scopeId","data-v-784cca86"]]);var sa=ta;const ia=a=>((0,i.Qi)("data-v-31818ea6"),a=a(),(0,i.jt)(),a),la={class:"row-1"},na={class:"container-one line-height-low"},ra=ia((()=>(0,i.Lk)("h1",{class:"headline-large-black"},"About Me",-1))),da=ia((()=>(0,i.Lk)("br",null,null,-1))),oa={class:"typing-text-animation headline-medium"},ca={class:"typed-text weight-bold"},va=ia((()=>(0,i.Lk)("div",null,[(0,i.Lk)("p",{class:"font-inter-medium-black"},"My name is Aqeel Hanslo , third year graduate at CPUT, I have chosen the career in Applications Development because I not only enjoy building applications but also consider it one of my strong suits. I possess the ability to think outside the box to create innovative solutions for problems."),(0,i.Lk)("br"),(0,i.Lk)("br"),(0,i.Lk)("br"),(0,i.Lk)("br"),(0,i.Lk)("a",{href:"/aqeel-cv.pdf",download:"",class:"button-hover-white",target:"_blank"},"Download CV")],-1))),ua={class:"container-two line-height-low"},ha={class:"image-container"},ma=["src"],pa=["src"],ba=["src"],ga=(0,i.Fv)('<div class="row-2" data-v-31818ea6><h1 class="headline-large-blue" data-v-31818ea6>Education</h1><br data-v-31818ea6><div class="timeline" data-v-31818ea6><ul data-v-31818ea6><li data-v-31818ea6><div class="timeline-content" data-v-31818ea6><h3 class="date" data-v-31818ea6>2023 - 2024</h3><h1 data-v-31818ea6>CapaCiTi</h1><br data-v-31818ea6><p data-v-31818ea6>LEARNERSHIP IN FULLSTACK DEVELOPMENT</p></div></li><li data-v-31818ea6><div class="timeline-content" data-v-31818ea6><h3 class="date" data-v-31818ea6>2021 - 2023</h3><h1 data-v-31818ea6>Cape Peninsula University of Technology</h1><br data-v-31818ea6><p data-v-31818ea6>DIPLOMA IN ICT: APPLICATION DEVELOPMENT</p></div></li><li data-v-31818ea6><div class="timeline-content" data-v-31818ea6><h3 class="date" data-v-31818ea6>2020 - 2021</h3><h1 data-v-31818ea6>College of Cape Town</h1><br data-v-31818ea6><p data-v-31818ea6>HIGHER CERTIFICATION IN INFO &amp; COM</p></div></li><li data-v-31818ea6><div class="timeline-content" data-v-31818ea6><h3 class="date" data-v-31818ea6>2019 - 2020</h3><h1 data-v-31818ea6>Gap year at Emcon Construction</h1><br data-v-31818ea6><p data-v-31818ea6>WORK EXPERIENCE</p></div></li><li data-v-31818ea6><div class="timeline-content" data-v-31818ea6><h3 class="date" data-v-31818ea6>2013 - 2018</h3><h1 data-v-31818ea6>Oracle Academy High School</h1><br data-v-31818ea6><p data-v-31818ea6>BACHELOR&#39;S DEGREE CERTIFICATION</p></div></li></ul></div></div><div class="page-number" data-v-31818ea6><h1 class="headline-xsmall" data-v-31818ea6>02</h1></div>',2);function ka(a,e,t,s,l,r){return(0,i.uX)(),(0,i.CE)("div",{class:"main-container",style:(0,n.Tr)(r.getAdjustedWidth)},[(0,i.Lk)("div",la,[(0,i.Lk)("div",na,[(0,i.Lk)("div",null,[ra,da,(0,i.Lk)("h1",oa,[(0,i.Lk)("span",ca,(0,n.v_)(a.typeValue),1),(0,i.Lk)("span",{class:(0,n.C4)(["cursor",{typing:a.typeStatus}])}," ",2)])]),va]),(0,i.Lk)("div",ua,[(0,i.Lk)("div",ha,[(0,i.Lk)("img",{src:a.gifPath,alt:"#",class:"image-1"},null,8,ma),(0,i.Lk)("img",{src:a.gifPath,alt:"#",class:"image-2"},null,8,pa),(0,i.Lk)("img",{src:a.gifPath,alt:"#",class:"image-3"},null,8,ba)])])]),ga],4)}var ya={name:"AboutCard",computed:{...(0,k.aH)(["isNavbarVisible"]),getAdjustedWidth(){return{width:this.isNavbarVisible?"calc(100% - 5.8rem)":"100%",position:"relative",left:this.isNavbarVisible?"5.9rem":"0"}}},data:()=>({typeValue:"",typeStatus:!1,typeArray:["Creative.","Innovative.","Humble.","Curious."],typingSpeed:200,erasingSpeed:100,newTextDelay:500,typeArrayIndex:0,charIndex:0,gifPath:t(4536)}),methods:{typeText(){this.charIndex<this.typeArray[this.typeArrayIndex].length?(this.typeStatus||(this.typeStatus=!0),this.typeValue+=this.typeArray[this.typeArrayIndex].charAt(this.charIndex),this.charIndex+=1,setTimeout(this.typeText,this.typingSpeed)):(this.typeStatus=!1,setTimeout(this.eraseText,this.newTextDelay))},eraseText(){this.charIndex>0?(this.typeStatus||(this.typeStatus=!0),this.typeValue=this.typeArray[this.typeArrayIndex].substring(0,this.charIndex-1),this.charIndex-=1,setTimeout(this.eraseText,this.erasingSpeed)):(this.typeStatus=!1,this.typeArrayIndex+=1,this.typeArrayIndex>=this.typeArray.length&&(this.typeArrayIndex=0),setTimeout(this.typeText,this.typingSpeed+1e3))}},created(){setTimeout(this.typeText,this.newTextDelay+200)}};const La=(0,L.A)(ya,[["render",ka],["__scopeId","data-v-31818ea6"]]);var fa=La,wa=t.p+"img/quote.025f6838.png",xa=t.p+"img/afika.53023677.jpg",Ta=t.p+"img/coding-2.ce2e8042.svg",Ca=t.p+"img/coding.8d98c147.svg",Sa=t.p+"img/coding-3.ee245071.svg";const Aa=a=>((0,i.Qi)("data-v-a8dbadda"),a=a(),(0,i.jt)(),a),Na={class:"column-left"},Ia={class:"text-container line-height-low"},Ea=Aa((()=>(0,i.Lk)("h1",{class:"headline-large"},"Skills",-1))),Ma={class:"font-inter-medium-white"},Va=Aa((()=>(0,i.Lk)("span",{class:"opacity-full"},[(0,i.Lk)("br"),(0,i.eW)(" I've always been the type of person who can spend hours designing stuff. ")],-1))),Oa=Aa((()=>(0,i.Lk)("span",{class:"opacity-half"},[(0,i.Lk)("br"),(0,i.eW)(" I simply enjoy being able to illustrate my thoughts into something visually appealing. ")],-1))),ja=Aa((()=>(0,i.Lk)("span",{class:"opacity-quarter"},[(0,i.Lk)("br"),(0,i.eW)(" That being said, I am knowledgeable in most languages, including some backend code.")],-1))),Wa=Aa((()=>(0,i.Lk)("br",null,null,-1))),Pa=Aa((()=>(0,i.Lk)("br",null,null,-1))),_a=Aa((()=>(0,i.Lk)("br",null,null,-1))),Ha=Aa((()=>(0,i.Lk)("br",null,null,-1))),Fa=Aa((()=>(0,i.Lk)("br",null,null,-1))),qa=Aa((()=>(0,i.Lk)("div",{class:"skill-container"},[(0,i.Lk)("div",{class:"skill"},[(0,i.Lk)("div",{class:"skill-name"},"HTML"),(0,i.Lk)("div",{class:"skill-bar"},[(0,i.Lk)("div",{class:"skill-per",per:"90%",style:{"max-width":"90%"}})])]),(0,i.Lk)("div",{class:"skill"},[(0,i.Lk)("div",{class:"skill-name"},"CSS"),(0,i.Lk)("div",{class:"skill-bar"},[(0,i.Lk)("div",{class:"skill-per",per:"85%",style:{"max-width":"85%"}})])]),(0,i.Lk)("div",{class:"skill"},[(0,i.Lk)("div",{class:"skill-name"},"Javascript"),(0,i.Lk)("div",{class:"skill-bar"},[(0,i.Lk)("div",{class:"skill-per",per:"69%",style:{"max-width":"69%"}})])]),(0,i.Lk)("div",{class:"skill"},[(0,i.Lk)("div",{class:"skill-name"},"Vue.JS"),(0,i.Lk)("div",{class:"skill-bar"},[(0,i.Lk)("div",{class:"skill-per",per:"78%",style:{"max-width":"78%"}})])]),(0,i.Lk)("div",{class:"skill"},[(0,i.Lk)("div",{class:"skill-name"},"SPRINGBOOT"),(0,i.Lk)("div",{class:"skill-bar"},[(0,i.Lk)("div",{class:"skill-per",per:"77%",style:{"max-width":"77%"}})])]),(0,i.Lk)("div",{class:"skill"},[(0,i.Lk)("div",{class:"skill-name"},"MYSQL"),(0,i.Lk)("div",{class:"skill-bar"},[(0,i.Lk)("div",{class:"skill-per",per:"70%",style:{"max-width":"70%"}})])]),(0,i.Lk)("div",{class:"skill"},[(0,i.Lk)("div",{class:"skill-name"},"JAVA"),(0,i.Lk)("div",{class:"skill-bar"},[(0,i.Lk)("div",{class:"skill-per",per:"80%",style:{"max-width":"80%"}})])]),(0,i.Lk)("div",{class:"skill"},[(0,i.Lk)("div",{class:"skill-name"},"GIT"),(0,i.Lk)("div",{class:"skill-bar"},[(0,i.Lk)("div",{class:"skill-per",per:"90%",style:{"max-width":"90%"}})])])],-1))),Ga=(0,i.Fv)('<div class="column-right" data-v-a8dbadda><div class="container" data-v-a8dbadda><h1 class="headline-small-2" data-v-a8dbadda><span class="headline-large-blue" data-v-a8dbadda><img src="'+wa+'" alt="#" width="50px" data-v-a8dbadda></span><br data-v-a8dbadda>Aqeel has good coding knowledge. He is quite shy and quiet but always gets work done on time and meets deadlines. </h1><div class="container-splitter" data-v-a8dbadda><hr data-v-a8dbadda></div><div class="testimonial-box" data-v-a8dbadda><div data-v-a8dbadda><img src="'+xa+'" alt="#" class="testimonial-img" data-v-a8dbadda></div><h1 class="font-inter-small" data-v-a8dbadda>Afika Maliwa <br data-v-a8dbadda>Line Manager - CapaCiTi</h1></div></div><br data-v-a8dbadda><div class="text-block-row" data-v-a8dbadda><div class="text-block" data-v-a8dbadda><img src="'+Ta+'" alt="#" data-v-a8dbadda><p class="font-inter-small" data-v-a8dbadda> Backend Frontend Coding Languages</p></div><div class="text-block" data-v-a8dbadda><img src="'+Ca+'" alt="#" data-v-a8dbadda><p class="font-inter-small" data-v-a8dbadda>Full stack java applications</p></div><div class="text-block" data-v-a8dbadda><img src="'+Sa+'" alt="#" data-v-a8dbadda><p class="font-inter-small" data-v-a8dbadda>Practical coding experience</p></div></div></div><div class="page-number" data-v-a8dbadda><h1 class="headline-xsmall" data-v-a8dbadda>03</h1></div><video autoplay muted loop id="video-background" style="width:100%;height:100vh;" data-v-a8dbadda><source src="'+q+'" type="video/mp4" data-v-a8dbadda> Your browser does not support the video tag. </video>',3);function Da(a,e,t,s,l,r){return(0,i.uX)(),(0,i.CE)("div",{class:"main-container",style:(0,n.Tr)(r.getAdjustedWidth)},[(0,i.Lk)("div",Na,[(0,i.Lk)("div",Ia,[Ea,(0,i.Lk)("p",Ma,[Va,Oa,ja,Wa,Pa,_a,Ha,(0,i.Lk)("button",{class:"button",onClick:e[0]||(e[0]=(...a)=>r.GoToProjects&&r.GoToProjects(...a))},"View My work")])]),Fa,qa]),Ga],4)}var Ba={name:"SkillsCard",computed:{...(0,k.aH)(["isNavbarVisible"]),getAdjustedWidth(){return{width:this.isNavbarVisible?"calc(100% - 6.5rem)":"100%",position:"relative",left:this.isNavbarVisible?"6.5rem":"0"}}},methods:{GoToProjects(){this.$router.push("/projects")}}};const Xa=(0,L.A)(Ba,[["render",Da],["__scopeId","data-v-a8dbadda"]]);var Ra=Xa,$a=t.p+"img/first-portfolio.fe3fcf98.png",Ja=t.p+"img/animeapp.ff6786e4.png",Qa=t.p+"img/jwt-login.db8b8eb2.png",Ua=t.p+"img/bankapp2.6540f271.png";const Ya=a=>((0,i.Qi)("data-v-0825ce68"),a=a(),(0,i.jt)(),a),Ka=(0,i.Fv)('<div class="text-container" data-v-0825ce68><h1 class="headline-large" data-v-0825ce68>Projects</h1><p class="font-inter-medium-white" data-v-0825ce68><span class="opacity-full" data-v-0825ce68><br data-v-0825ce68> I&#39;ve always been the kind of person who can spend hours designing stuff. </span><span class="opacity-half" data-v-0825ce68><br data-v-0825ce68> Solving the problem is the journey </span></p></div><div class="scroller" data-v-0825ce68><div class="icon-container" data-v-0825ce68><div class="icon-circle" data-v-0825ce68><i class="devicon-spring-original icon" data-v-0825ce68></i></div><div class="icon-circle" data-v-0825ce68><i class="devicon-vuejs-plain icon" data-v-0825ce68></i></div><div class="icon-circle" data-v-0825ce68><i class="devicon-githubactions-plain icon" data-v-0825ce68></i></div><div class="icon-circle" data-v-0825ce68><i class="devicon-mysql-original icon" data-v-0825ce68></i></div><div class="icon-circle" data-v-0825ce68><i class="devicon-aftereffects-plain icon" data-v-0825ce68></i></div><div class="icon-circle" data-v-0825ce68><i class="devicon-spring-original icon" data-v-0825ce68></i></div><div class="icon-circle" data-v-0825ce68><i class="devicon-vuejs-plain icon" data-v-0825ce68></i></div><div class="icon-circle" data-v-0825ce68><i class="devicon-githubactions-plain icon" data-v-0825ce68></i></div><div class="icon-circle" data-v-0825ce68><i class="devicon-mysql-original icon" data-v-0825ce68></i></div><div class="icon-circle" data-v-0825ce68><i class="devicon-aftereffects-plain icon" data-v-0825ce68></i></div></div></div>',2),za={class:"card-row"},Za={class:"card"},ae=Ya((()=>(0,i.Lk)("img",{src:$a,class:"card-img",alt:"#"},null,-1))),ee={class:"card-body"},te=Ya((()=>(0,i.Lk)("h1",{class:"card-title headline-small-2"},"First Portfolio",-1))),se=Ya((()=>(0,i.Lk)("p",{class:"card-sub-title font-inter-medium"},[(0,i.eW)("Static - HTML - CSS - JS "),(0,i.Lk)("br"),(0,i.Lk)("br"),(0,i.eW)(),(0,i.Lk)("b",null,"(No Framework)")],-1))),ie=Ya((()=>(0,i.Lk)("p",{class:"card-info font-inter-medium-white"},"This was my first portfolio, created using the fundamentals of HTML and CSS, complemented by some JavaScript. It is a single-page portfolio featuring a fixed navigation at the top.",-1))),le={class:"card"},ne=Ya((()=>(0,i.Lk)("img",{src:Ja,class:"card-img",alt:"#"},null,-1))),re={class:"card-body"},de=Ya((()=>(0,i.Lk)("h1",{class:"card-title headline-small-2"},"Anime Web App",-1))),oe=Ya((()=>(0,i.Lk)("p",{class:"card-sub-title font-inter-medium"},[(0,i.eW)("Java - Springboot - Workbench "),(0,i.Lk)("br"),(0,i.Lk)("br"),(0,i.eW)(),(0,i.Lk)("b",null,"(Vue Framework)")],-1))),ce=Ya((()=>(0,i.Lk)("p",{class:"card-info font-inter-medium-white"},"I developed a small full-stack application implementing CRUD operations to store, retrieve, update and delete entries from the database.",-1))),ve={class:"card"},ue=Ya((()=>(0,i.Lk)("img",{src:Qa,class:"card-img",alt:"#"},null,-1))),he={class:"card-body"},me=Ya((()=>(0,i.Lk)("h1",{class:"card-title headline-small-2"},"JWT Login System",-1))),pe=Ya((()=>(0,i.Lk)("p",{class:"card-sub-title font-inter-medium"},[(0,i.eW)("Express - MongoDB - NodeJS "),(0,i.Lk)("br"),(0,i.Lk)("br"),(0,i.eW)(),(0,i.Lk)("b",null,"(Quasar Framework)")],-1))),be=Ya((()=>(0,i.Lk)("p",{class:"card-info font-inter-medium-white"},"I created a Json web token login system for standard and admin users, storing tokens in local storage.",-1))),ge={class:"card"},ke=Ya((()=>(0,i.Lk)("img",{src:Ua,class:"card-img",alt:"#"},null,-1))),ye={class:"card-body"},Le=Ya((()=>(0,i.Lk)("h1",{class:"card-title headline-small-2"},"Python Bank App",-1))),fe=Ya((()=>(0,i.Lk)("p",{class:"card-sub-title font-inter-medium"},[(0,i.eW)("Python - Custom Tkinter - Gui "),(0,i.Lk)("br"),(0,i.Lk)("br"),(0,i.eW)(),(0,i.Lk)("b",null,"(CapaCiTi Project)")],-1))),we=Ya((()=>(0,i.Lk)("p",{class:"card-info font-inter-medium-white"},"A banking application that my team and I created during our learnership at CapaCiTi. We used Custom Tkinter and implemented various functions to perform banking operations.",-1))),xe=Ya((()=>(0,i.Lk)("div",{class:"page-number"},[(0,i.Lk)("h1",{class:"headline-xsmall"},"04")],-1))),Te=Ya((()=>(0,i.Lk)("video",{autoplay:"",muted:"",loop:"",id:"video-background",style:{width:"100%",height:"100vh"}},[(0,i.Lk)("source",{src:q,type:"video/mp4"}),(0,i.eW)(" Your browser does not support the video tag. ")],-1)));function Ce(a,e,t,s,l,r){return(0,i.uX)(),(0,i.CE)("div",{class:"main-container",style:(0,n.Tr)(r.getAdjustedWidth)},[Ka,(0,i.Lk)("div",za,[(0,i.Lk)("div",Za,[ae,(0,i.Lk)("div",ee,[te,se,ie,(0,i.Lk)("button",{class:"button",onClick:e[0]||(e[0]=(...a)=>r.redirectToSource1&&r.redirectToSource1(...a))},"Source Code")])]),(0,i.Lk)("div",le,[ne,(0,i.Lk)("div",re,[de,oe,ce,(0,i.Lk)("button",{class:"button",onClick:e[1]||(e[1]=(...a)=>r.redirectToSource2&&r.redirectToSource2(...a))},"Source Code")])]),(0,i.Lk)("div",ve,[ue,(0,i.Lk)("div",he,[me,pe,be,(0,i.Lk)("button",{class:"button",onClick:e[2]||(e[2]=(...a)=>r.redirectToSource4&&r.redirectToSource4(...a))},"View Demo")])]),(0,i.Lk)("div",ge,[ke,(0,i.Lk)("div",ye,[Le,fe,we,(0,i.Lk)("button",{class:"button",onClick:e[3]||(e[3]=(...a)=>r.redirectToSource3&&r.redirectToSource3(...a))},"Source Code")])])]),(0,i.Lk)("button",{class:"button",onClick:e[4]||(e[4]=(...a)=>r.redirectToGitHub&&r.redirectToGitHub(...a))},"View GitHub"),xe,Te],4)}var Se={name:"ProjectsCard",computed:{...(0,k.aH)(["isNavbarVisible"]),getAdjustedWidth(){return{width:this.isNavbarVisible?"calc(100% - 6.5rem)":"100%",position:"relative",left:this.isNavbarVisible?"6.5rem":"0"}}},data:()=>({typeValue:"",typeStatus:!1,typeArray:["Willing to implement new ideas.","Learning new things."],typingSpeed:200,erasingSpeed:100,newTextDelay:500,typeArrayIndex:0,charIndex:0}),methods:{typeText(){this.charIndex<this.typeArray[this.typeArrayIndex].length?(this.typeStatus||(this.typeStatus=!0),this.typeValue+=this.typeArray[this.typeArrayIndex].charAt(this.charIndex),this.charIndex+=1,setTimeout(this.typeText,this.typingSpeed)):(this.typeStatus=!1,setTimeout(this.eraseText,this.newTextDelay))},eraseText(){this.charIndex>0?(this.typeStatus||(this.typeStatus=!0),this.typeValue=this.typeArray[this.typeArrayIndex].substring(0,this.charIndex-1),this.charIndex-=1,setTimeout(this.eraseText,this.erasingSpeed)):(this.typeStatus=!1,this.typeArrayIndex+=1,this.typeArrayIndex>=this.typeArray.length&&(this.typeArrayIndex=0),setTimeout(this.typeText,this.typingSpeed+1e3))},redirectToGitHub(){window.open("https://github.com/aqeeluser404","_blank")},redirectToSource1(){window.open("https://github.com/aqeeluser404/aqeel-portfolio","_blank")},redirectToSource2(){window.open("https://github.com/aqeeluser404/animeapp-frontend","_blank")},redirectToSource3(){window.open("https://github.com/aqeeluser404/CodeX-Bank-GUI","_blank")},redirectToSource4(){window.open("https://jwt-login-frontend.onrender.com/#/","_blank")}},mounted(){const a=document.querySelectorAll(".scroller");function e(){a.forEach((a=>{a.setAttribute("data-animated",!0)}))}window.matchMedia("(prefers-reduced-motion: reduce)").matches||e()},created(){setTimeout(this.typeText,this.newTextDelay+200)}};const Ae=(0,L.A)(Se,[["render",Ce],["__scopeId","data-v-0825ce68"]]);var Ne=Ae;const Ie=a=>((0,i.Qi)("data-v-dbb9a358"),a=a(),(0,i.jt)(),a),Ee=(0,i.Fv)('<div class="container-one line-height-low" data-v-dbb9a358><div data-v-dbb9a358><h1 class="headline-large-black" data-v-dbb9a358>Contact</h1><br data-v-dbb9a358><h1 class="headline-medium" data-v-dbb9a358><span class="weight-bold" data-v-dbb9a358>Let&#39;s Talk</span></h1><br data-v-dbb9a358><p class="headline-small-black line-height-med" data-v-dbb9a358><span data-v-dbb9a358><b data-v-dbb9a358>Questions</b> or <b data-v-dbb9a358>ideas?</b></span><br data-v-dbb9a358><span data-v-dbb9a358>Drop me a message in the form</span><br data-v-dbb9a358><br data-v-dbb9a358><span data-v-dbb9a358>Let&#39;s talk about your next project!</span></p></div></div>',1),Me={class:"container-two"},Ve={class:"contact-form"},Oe=["action"],je={class:"form-group"},We=Ie((()=>(0,i.Lk)("label",{for:"name"},"NAME",-1))),Pe={key:0,class:"error-message"},_e={class:"form-group"},He=Ie((()=>(0,i.Lk)("label",{for:"email"},"EMAIL",-1))),Fe={key:0,class:"error-message"},qe={class:"form-group"},Ge=Ie((()=>(0,i.Lk)("label",{for:"message"},"MESSAGE",-1))),De={key:0,class:"error-message"},Be=Ie((()=>(0,i.Lk)("div",{class:"form-group"},[(0,i.Lk)("div",{class:"g-recaptcha"}),(0,i.Lk)("input",{id:"submit",type:"submit",value:"Say Hi!",class:"button-hover-white"})],-1))),Xe=Ie((()=>(0,i.Lk)("div",{class:"page-number"},[(0,i.Lk)("h1",{class:"headline-xsmall"},"05")],-1)));function Re(a,e,t,l,r,d){return(0,i.uX)(),(0,i.CE)("div",{class:"main-container",style:(0,n.Tr)(d.getAdjustedWidth)},[Ee,(0,i.Lk)("div",Me,[(0,i.Lk)("div",Ve,[(0,i.Lk)("form",{action:r.FORM_ENDPOINT,onSubmit:e[3]||(e[3]=(...a)=>d.handleSubmit&&d.handleSubmit(...a)),method:"POST"},[(0,i.Lk)("div",je,[We,(0,i.bo)((0,i.Lk)("input",{type:"text",id:"name",name:"Name",required:"",placeholder:"Type Here","onUpdate:modelValue":e[0]||(e[0]=a=>r.userMessage.name=a)},null,512),[[s.Jo,r.userMessage.name]]),r.isNameValid?(0,i.Q3)("",!0):((0,i.uX)(),(0,i.CE)("span",Pe,"Name is required"))]),(0,i.Lk)("div",_e,[He,(0,i.bo)((0,i.Lk)("input",{type:"email",id:"email",name:"Email",required:"",placeholder:"Type Here","onUpdate:modelValue":e[1]||(e[1]=a=>r.userMessage.email=a)},null,512),[[s.Jo,r.userMessage.email]]),r.isEmailValid?(0,i.Q3)("",!0):((0,i.uX)(),(0,i.CE)("span",Fe,"Enter a valid email address"))]),(0,i.Lk)("div",qe,[Ge,(0,i.bo)((0,i.Lk)("textarea",{id:"message",name:"Message",required:"","onUpdate:modelValue":e[2]||(e[2]=a=>r.userMessage.message=a)},null,512),[[s.Jo,r.userMessage.message]]),r.isMessageValid?(0,i.Q3)("",!0):((0,i.uX)(),(0,i.CE)("span",De,"Message is required"))]),Be],40,Oe)])]),Xe],4)}var $e=t(8355),Je={name:"ContactCard",data(){return{userMessage:{name:"",email:"",message:"",dateTime:""},submitted:!1,FORM_ENDPOINT:"https://public.herotofu.com/v1/037ba170-ca37-11ee-bb69-515451de93af",isNameValid:!0,isEmailValid:!0,isMessageValid:!0}},computed:{...(0,k.aH)(["isNavbarVisible"]),getAdjustedWidth(){return{width:this.isNavbarVisible?"calc(100% - 6.5rem)":"100%",position:"relative",left:this.isNavbarVisible?"6.5rem":"0"}}},methods:{handleSubmit(){this.validateForm(),this.isFormValid()?(this.userMessage.dateTime=(new Date).toISOString(),grecaptcha.execute("6LdGoW8pAAAAAK_oMIExegB957yAhvHfVYIJUoOk",{action:"submit"}).then((a=>{a?(this.userMessage.recaptchaResponse=a,$e.A.post("https://aqeel-dev-portfolio-default-rtdb.firebaseio.com/messages.json",this.userMessage).then((a=>{console.log(a)})),this.userMessage.name="",this.userMessage.email="",this.userMessage.message="",this.userMessage.recaptchaResponse="",this.userMessage.dateTime="",setTimeout((()=>{this.submitted=!0}),100)):console.error("reCAPTCHA verification failed")}))):(this.nameErrorMessage=this.isNameValid?"":"Name is required",this.emailErrorMessage=this.isEmailValid?"":"Enter a valid email address",this.messageErrorMessage=this.isMessageValid?"":"Message is required")},validateForm(){this.isNameValid=""!==this.userMessage.name.trim(),this.isEmailValid=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(this.userMessage.email),this.isMessageValid=""!==this.userMessage.message.trim()},isFormValid(){return this.isNameValid&&this.isEmailValid&&this.isMessageValid}},mounted(){const a=document.createElement("script");a.src="https://www.google.com/recaptcha/api.js?render=6LdGoW8pAAAAAK_oMIExegB957yAhvHfVYIJUoOk",a.async=!0,a.defer=!0,document.head.appendChild(a)}};const Qe=(0,L.A)(Je,[["render",Re],["__scopeId","data-v-dbb9a358"]]);var Ue=Qe;const Ye={class:"main-container"},Ke=(0,i.Lk)("h1",{class:"headline-small-blue weight-bold"},[(0,i.Lk)("b",null,"Thank you!")],-1),ze=(0,i.Lk)("br",null,null,-1),Ze=(0,i.Lk)("div",{class:"font-inter-medium-black"},"We'll be in touch soon.",-1),at=(0,i.Lk)("br",null,null,-1),et=(0,i.Lk)("br",null,null,-1);function tt(a,e,t,s,l,n){return(0,i.uX)(),(0,i.CE)("div",Ye,[Ke,ze,Ze,at,et,(0,i.Lk)("button",{class:"button-hover-white",onClick:e[0]||(e[0]=(...a)=>n.GoToHome&&n.GoToHome(...a))},"Go Back")])}var st=(0,k.y$)({state:{isNavbarVisible:!0,showLoading:!0},mutations:{setShowLoading(a,e){a.showLoading=e},toggleNavbar(a){a.isNavbarVisible=!a.isNavbarVisible}}}),it={name:"ThankCard",methods:{GoToHome(){this.$router.push("/")}},mounted(){setTimeout((()=>{st.commit("toggleNavbar")}),1)},beforeUnmount(){st.commit("toggleNavbar")}};const lt=(0,L.A)(it,[["render",tt]]);var nt=lt;const rt=[{name:"HomeCard",component:sa,path:"/"},{name:"AboutCard",component:fa,path:"/about"},{name:"SkillsCard",component:Ra,path:"/skills"},{name:"ProjectsCard",component:Ne,path:"/projects"},{name:"ContactCard",component:Ue,path:"/contact"},{name:"ThankCard",component:nt,path:"/thank-you"}],dt=(0,P.aE)({history:(0,P.LA)(),routes:rt,scrollBehavior(a,e,t){return t||{top:0}}});var ot=dt,ct=t.p+"img/hour.4527c937.gif";const vt=a=>((0,i.Qi)("data-v-3b04a0ea"),a=a(),(0,i.jt)(),a),ut={class:"main-container"},ht=vt((()=>(0,i.Lk)("div",null,[(0,i.Lk)("img",{src:ct,alt:"#",class:"hour-glass"})],-1))),mt=vt((()=>(0,i.Lk)("h1",{class:"headline-small"},[(0,i.eW)("Loading"),(0,i.Lk)("span",{class:"loading-dots"})],-1))),pt=[ht,mt];function bt(a,e,t,s,l,n){return(0,i.uX)(),(0,i.CE)("div",ut,pt)}var gt={name:"LoadingCard"};const kt=(0,L.A)(gt,[["render",bt],["__scopeId","data-v-3b04a0ea"]]);var yt=kt;let Lt=!0;const ft=document.createElement("div");document.body.appendChild(ft),st.commit("toggleNavbar"),ot.beforeResolve(((a,e,t)=>{Lt?((0,s.Ef)(yt).mount(ft),setTimeout((()=>{ft.remove(),Lt=!1,st.commit("toggleNavbar"),t()}),4e3)):t()})),ot.afterEach((()=>{st.commit("setShowLoading",!1)}));const wt=(0,s.Ef)(W);wt.use(ot),wt.use(st),wt.component("NavBar",w),wt.mount("#app")},4536:function(a,e,t){a.exports=t.p+"img/me-low.bc706dc4.png"}},e={};function t(s){var i=e[s];if(void 0!==i)return i.exports;var l=e[s]={exports:{}};return a[s].call(l.exports,l,l.exports,t),l.exports}t.m=a,function(){var a=[];t.O=function(e,s,i,l){if(!s){var n=1/0;for(c=0;c<a.length;c++){s=a[c][0],i=a[c][1],l=a[c][2];for(var r=!0,d=0;d<s.length;d++)(!1&l||n>=l)&&Object.keys(t.O).every((function(a){return t.O[a](s[d])}))?s.splice(d--,1):(r=!1,l<n&&(n=l));if(r){a.splice(c--,1);var o=i();void 0!==o&&(e=o)}}return e}l=l||0;for(var c=a.length;c>0&&a[c-1][2]>l;c--)a[c]=a[c-1];a[c]=[s,i,l]}}(),function(){t.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return t.d(e,{a:e}),e}}(),function(){t.d=function(a,e){for(var s in e)t.o(e,s)&&!t.o(a,s)&&Object.defineProperty(a,s,{enumerable:!0,get:e[s]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){t.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){t.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var a={524:0};t.O.j=function(e){return 0===a[e]};var e=function(e,s){var i,l,n=s[0],r=s[1],d=s[2],o=0;if(n.some((function(e){return 0!==a[e]}))){for(i in r)t.o(r,i)&&(t.m[i]=r[i]);if(d)var c=d(t)}for(e&&e(s);o<n.length;o++)l=n[o],t.o(a,l)&&a[l]&&a[l][0](),a[l]=0;return t.O(c)},s=self["webpackChunkvue_portfolio"]=self["webpackChunkvue_portfolio"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=t.O(void 0,[504],(function(){return t(791)}));s=t.O(s)})();
//# sourceMappingURL=app.b131f984.js.map
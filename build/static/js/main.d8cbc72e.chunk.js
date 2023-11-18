(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,a,t){e.exports=t(57)},26:function(e,a,t){},28:function(e,a,t){},30:function(e,a,t){},32:function(e,a,t){},34:function(e,a,t){},36:function(e,a,t){},55:function(e,a,t){},57:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(17),r=t.n(i),c=(t(26),t(2)),s=t(3),o=t(5),m=t(4),u=t(6),p=(t(28),function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"SignIn",href:"#about"},"SignIn")),l.a.createElement("li",null,l.a.createElement("a",{className:"SignUp",href:"#resume"},"SignUp")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Partners")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"}," ",e.name,"."),l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},"Planit is a innovative website designed to streamline the academic experience for both professors and students. By automating the integration of coursework into personalized calendars, Planit ensures that students can easily organize and manage their schedules according to their preferences."),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component)),h=(t(30),function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"images/myPortfolio.png",alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("span",null,e.address),l.a.createElement("br",null),l.a.createElement("span",null,e.website),l.a.createElement("br",null),l.a.createElement("span",null,e.email),l.a.createElement("br",null),l.a.createElement("span",null,e.phone)))))))}}]),a}(n.Component)),g=(t(32),function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,e.Diploma,l.a.createElement("span",null)," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),l.a.createElement("h3",null,e.highSchoolName),l.a.createElement("p",{className:"info"},e.highSchoolSpecialization,l.a.createElement("span",null)," ",l.a.createElement("em",{className:"date"},e.highMonthOfPassing," ",e.highYearOfPassing))))}))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"Skills"},l.a.createElement("section",{className:"container"},l.a.createElement("div",{className:"container-box"},e.skills.map(function(e){return l.a.createElement("div",{key:e.skillname,className:"container-box-1"},l.a.createElement("img",{src:e.imgSrc,alt:e.skillname,className:"img"}),l.a.createElement("h2",{className:"heading"},e.skillname))}))))))}}]),a}(n.Component)),d=(t(34),function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some of My Works."),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(function(e){return l.a.createElement("div",{className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:"".concat(e.link)},l.a.createElement("div",{clasName:"hovereffect"},l.a.createElement("img",{href:"".concat(e.link),src:"".concat(e.imgurl),alt:"skills",className:"item-img"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.name),l.a.createElement("p",null,e.description)))))))})))))}}]),a}(n.Component)),f=t(7),E=t(18),b=t(20),v=(t(36),t(19)),N=t.n(v);var w=function(e){var a=Object(n.useState)({fullName:"",email:"",message:""}),t=Object(b.a)(a,2),i=t[0],r=t[1],c=function(e){console.log(i),r(Object(E.a)({},i,Object(f.a)({},e.target.name,e.target.value)))};return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"background"},l.a.createElement("p",{classNameName:"lead"},"Feel free to contact me for any work or suggestions below"),l.a.createElement("form",{onSubmit:function(){N.a.post("https://contact-backend-app.herokuapp.com/contacts",i).then(function(e){console.log(e)}).catch(function(e){console.log(typeof e.message)})}},l.a.createElement("label",null,"Name"),l.a.createElement("input",{className:"input",required:!0,type:"text",name:"fullName",value:i.fullName,onChange:c,placeholder:"Full Name"}),l.a.createElement("label",null,"Email"),l.a.createElement("input",{required:!0,type:"text",name:"email",value:i.email,onChange:c,placeholder:"Email"}),l.a.createElement("label",null,"Message"),l.a.createElement("textarea",{required:!0,name:"message",rows:"5",placeholder:"Message",value:i.message,onChange:c}),l.a.createElement("button",null,"Send"))))},k=(t(55),function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component)),y={imagebaseurl:"https://rbhatia46.github.io/",name:"Welcome To Planit",role:"Full Stack Web Developer",linkedinId:"Your LinkedIn Id",skypeid:"Your skypeid",roleDescription:"I like dabbling in various parts of web development and like to learn about new technologies, work on personal projects, or simply play games in my free time.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/jarvise-billups-brown-a41a44172/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/Fullmetal235",className:"fa fa-github"},{name:"twitter",url:"https://twitter.com/BrownJarvise",className:"fa fa-twitter"}],aboutme:"I am currently a student in Lambda School training to become a full stack web developer. I believe that to be successful in life, one needs to be obsessive with their dreams and keep working towards them.",address:"United States",website:"www.jarvisebillupsbrown.com",email:"jjbillupsbrown@gmail.com",phone:"+1(205)535-7624",education:[{UniversityName:"University of Alabama",specialization:"Bachelor Degree",MonthOfPassing:"May 2022-TBD",YearOfPassing:""},{UniversityName:"Shelton State Community College",specialization:"Associate Degree",MonthOfPassing:"Jan 2021",YearOfPassing:"May 2022"},{UniversityName:"Lambda School",specialization:"Computer Science",MonthOfPassing:"May 2019",YearOfPassing:"Feb 2020"},{UniversityName:"University of Alabama-Huntsville",specialization:"Aerospace Engineering",MonthOfPassing:"Aug 2015",YearOfPassing:"May 2017"},{highSchoolName:"Aliceville High School",highSchoolSpecialization:"High School Diploma",highMonthOfPassing:"May",highYearOfPassing:"2015"}],work:[{CompanyName:"Walmart Supercenter",specialization:"Maintenance",MonthOfLeaving:"May",YearOfLeaving:"2022"},{CompanyName:"Jacks Family Restaurants",specialization:"Team Member",MonthOfLeaving:"May",YearOfLeaving:"2019"},{CompanyName:"Walmart Supercenter",specialization:"Overnight Maintenance",MonthOfLeaving:"May",YearOfLeaving:"2019"},{CompanyName:"Peco Foods",specialization:"Shipping and recieving",MonthOfLeaving:"Oct",YearOfLeaving:"2017"}],skillsDescription:"My skills",skills:[{skillname:"HTML5",imgSrc:"img/html.jpg"},{skillname:"CSS",imgSrc:"img/css1.png"},{skillname:"JS",imgSrc:"img/js.png"},{skillname:"React",imgSrc:"img/react.png"},{skillname:"Node",imgSrc:"img/node2.jpg"},{skillname:"Git",imgSrc:"img/git.png"},{skillname:"Bootstrap",imgSrc:"img/bootstrap1.png"},{skillname:"Python",imgSrc:"img/python.png"},{skillname:"SQL",imgSrc:"img/sql.png"}],portfolio:[{name:"Lendr",description:"A website dedicated to lending items to users using node.js for the backend with react and redux for frontend.",imgurl:"images/portfolio/retrocam.jpg",link:"https://frontend.lendr.now.sh"},{name:"Github User Search",description:"A react app dedicated to making searxhing for github users more easily.",imgurl:"images/portfolio/github.png",link:"https://githubusersearch235.netlify.com"},{name:"StopWatch",description:"An appication for using a personal stopwatch.",imgurl:"images/portfolio/stopwatch.png",link:"https://github.com/Fullmetal235/stopwatch"},{name:"Swaap",description:"A way for people to gather, collect and stay in contact with people that you meet.",imgurl:"images/portfolio/swaaplogoblues.png",link:"https://swaap.co"},{name:"Project Phoenix",description:"An e-commerce site I have build to showcase my knowledge in context api and a prototype of an e-commerce site I am currently brainstorming.",imgurl:"images/portfolio/E-commerce.jpg",link:"https://projectphoenix.netlify.app/"}],testimonials:[{description:"This is a sample testimonial",name:"Some technical guy"},{description:"This is a sample testimonial",name:"Some technical guy"}]},O=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,{resumeData:y}),l.a.createElement(h,{resumeData:y}),l.a.createElement(g,{resumeData:y}),l.a.createElement(d,{resumeData:y}),l.a.createElement(w,{resumeData:y}),l.a.createElement(k,{resumeData:y}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.d8cbc72e.chunk.js.map
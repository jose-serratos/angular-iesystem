"use strict";(self.webpackChunkapplication=self.webpackChunkapplication||[]).push([[87],{8087:(T,s,r)=>{r.r(s),r.d(s,{WelcomeModule:()=>Z});var c=r(9808),u=r(4100),l=r(8966),o=r(5e3),d=r(7322),g=r(7531),i=r(3075),f=r(7423);let b=(()=>{class e{constructor(t,a){this.dialogRef=t,this.data=a}onNoClick(){this.dialogRef.close()}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(l.so),o.Y36(l.WI))},e.\u0275cmp=o.Xpm({type:e,selectors:[["iems-dialog"]],decls:12,vars:2,consts:[["mat-dialog-content",""],["matInput","",3,"ngModel","ngModelChange"],["mat-dialog-actions",""],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","primary","cdkFocusInitial","",3,"mat-dialog-close"]],template:function(t,a){1&t&&(o.TgZ(0,"div",0)(1,"p"),o._uU(2,"Escribe tu nombre"),o.qZA(),o.TgZ(3,"mat-form-field")(4,"mat-label"),o._uU(5,"Tu nombre"),o.qZA(),o.TgZ(6,"input",1),o.NdJ("ngModelChange",function(p){return a.data.nombreIngresado=p}),o.qZA()()(),o.TgZ(7,"div",2)(8,"button",3),o.NdJ("click",function(){return a.onNoClick()}),o._uU(9,"Cancelar"),o.qZA(),o.TgZ(10,"button",4),o._uU(11,"Confirmar"),o.qZA()()),2&t&&(o.xp6(6),o.Q6J("ngModel",a.data.nombreIngresado),o.xp6(4),o.Q6J("mat-dialog-close",a.data.nombreIngresado))},directives:[l.xY,d.KE,d.hX,g.Nt,i.Fj,i.JJ,i.On,l.H8,f.lW,l.ZT],styles:["p[_ngcontent-%COMP%]{color:#fff}  .mat-dialog-container{background-color:#000}"]}),e})(),C=(()=>{class e{transform(t,...a){let m={a:"4",e:"3",i:"1",o:"0",u:"9"};return(t=t.toLowerCase()).replace(/[aeiou]/gi,y=>m[y])}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=o.Yjl({name:"cambioLetras",type:e,pure:!0}),e})();function h(e,n){if(1&e&&(o.TgZ(0,"div",5)(1,"div",2)(2,"h4"),o._uU(3,"El nombre ingresado es: "),o.TgZ(4,"span"),o._uU(5),o.ALo(6,"cambioLetras"),o.qZA()()()()),2&e){const t=o.oxw();o.xp6(5),o.Oqu(o.lcZ(6,1,t.nombreIngresado))}}const M=[{path:"",component:(()=>{class e{constructor(t){this.dialog=t}ngOnInit(){}openDialog(){this.dialog.open(b,{width:"250px",data:{nombreIngresado:this.nombreIngresado}}).afterClosed().subscribe(a=>{console.log("The dialog was closed"),this.nombreIngresado=a})}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(l.uw))},e.\u0275cmp=o.Xpm({type:e,selectors:[["iems-welcome-page"]],decls:14,vars:1,consts:[[1,"container"],[1,"row","welcome"],[1,"col-12","text-center"],["mat-stroked-button","","color","primary",3,"click"],["class","row welcome-name",4,"ngIf"],[1,"row","welcome-name"]],template:function(t,a){1&t&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1")(4,"span"),o._uU(5,"Bienvenido"),o.qZA(),o._uU(6," a mi Portal!"),o.qZA()(),o.TgZ(7,"div",2)(8,"h4"),o._uU(9,"Nos podr\xedas indicar tu nombre"),o.qZA()(),o.TgZ(10,"div",2)(11,"button",3),o.NdJ("click",function(){return a.openDialog()}),o._uU(12,"Escribe tu nombre"),o.qZA()()(),o.YNc(13,h,7,3,"div",4),o.qZA()),2&t&&(o.xp6(13),o.Q6J("ngIf",a.nombreIngresado))},directives:[f.lW,c.O5],pipes:[C],styles:["h1[_ngcontent-%COMP%], h4[_ngcontent-%COMP%]{color:#fff}h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#ffd900}.text-center[_ngcontent-%COMP%]{text-align:center}.welcome[_ngcontent-%COMP%]{margin-top:30px}button.mat-primary[_ngcontent-%COMP%]{color:#fff}.mat-stroked-button[_ngcontent-%COMP%]:not(.mat-button-disabled){border-color:#fff;margin-bottom:30px}.welcome-name[_ngcontent-%COMP%]{height:50px;margin:15px}  .mat-form-field{width:100%;font-size:1.2rem}  .mat-form-field .mat-form-field-label{color:#fff}  .mat-form-field .mat-input-element{color:#fff}  .mat-form-field .mat-form-field-underline{background-color:#fff}  .mat-form-field .mat-form-field-ripple{background-color:#fff}  .mat-form-field .mat-form-field-required-marker{color:#fff}  .mat-form-field.mat-focused .mat-form-field-label{color:#ffd900}  .mat-form-field.mat-focused .mat-form-field-ripple{background-color:#ffd900}  .mat-form-field.mat-focused .mat-form-field-required-marker{color:#ffd900!important}  .mat-form-field.mat-focused .mat-input-element{color:#ffd900}  .mat-raised-button.mat-primary{color:#000;background-color:#ffd900}  .mat-raised-button.mat-primary:hover{color:#000000b3}"]}),e})()}];let P=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[u.Bz.forChild(M)],u.Bz]}),e})(),v=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[c.ez]]}),e})(),Z=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[c.ez,P,i.u5,f.ot,l.Is,d.lN,g.c,v]]}),e})()}}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[773],{4992:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/train",function(){return a(2692)}])},2692:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return V}});var n=a(1844),o=a(1163),i=a(5784),r=a(6727),l=a.n(r),c=a(7920),s=a(5987),d=a(7462),p=a(8642),m=a(1591),u=[0,1,2,3,4,5,6,7,8,9,10],g=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=parseFloat(e);return"".concat(a/t).concat(String(e).replace(String(a),"")||"px")}var x=i.forwardRef(function(e,t){var a=e.alignContent,n=void 0===a?"stretch":a,o=e.alignItems,r=void 0===o?"stretch":o,l=e.classes,c=e.className,m=e.component,u=e.container,g=e.direction,h=void 0===g?"row":g,x=e.item,f=e.justify,b=e.justifyContent,y=void 0===b?"flex-start":b,v=e.lg,w=void 0!==v&&v,S=e.md,C=void 0!==S&&S,j=e.sm,k=void 0!==j&&j,Z=e.spacing,z=void 0===Z?0:Z,N=e.wrap,R=void 0===N?"wrap":N,T=e.xl,E=void 0!==T&&T,I=e.xs,_=void 0!==I&&I,W=e.zeroMinWidth,$=(0,s.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),L=(0,p.Z)(l.root,c,void 0!==u&&u&&[l.container,0!==z&&l["spacing-xs-".concat(String(z))]],void 0!==x&&x&&l.item,void 0!==W&&W&&l.zeroMinWidth,"row"!==h&&l["direction-xs-".concat(String(h))],"wrap"!==R&&l["wrap-xs-".concat(String(R))],"stretch"!==r&&l["align-items-xs-".concat(String(r))],"stretch"!==n&&l["align-content-xs-".concat(String(n))],"flex-start"!==(f||y)&&l["justify-content-xs-".concat(String(f||y))],!1!==_&&l["grid-xs-".concat(String(_))],!1!==k&&l["grid-sm-".concat(String(k))],!1!==C&&l["grid-md-".concat(String(C))],!1!==w&&l["grid-lg-".concat(String(w))],!1!==E&&l["grid-xl-".concat(String(E))]);return i.createElement(void 0===m?"div":m,(0,d.Z)({className:L,ref:t},$))}),f=(0,m.Z)(function(e){var t;return(0,d.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},(t={},u.forEach(function(a){var n=e.spacing(a);0!==n&&(t["spacing-".concat("xs","-").concat(a)]={margin:"-".concat(h(n,2)),width:"calc(100% + ".concat(h(n),")"),"& > $item":{padding:h(n,2)}})}),t),e.breakpoints.keys.reduce(function(t,a){var n,o,i;return n=t,o=e,i={},g.forEach(function(e){var t="grid-".concat(a,"-").concat(e);if(!0===e){i[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"};return}if("auto"===e){i[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};return}var n="".concat(Math.round(e/12*1e8)/1e6,"%");i[t]={flexBasis:n,flexGrow:0,maxWidth:n}}),"xs"===a?(0,d.Z)(n,i):n[o.breakpoints.up(a)]=i,t},{}))},{name:"MuiGrid"})(x),b=a(9693),y=a(6119),v=a(3871),w=i.forwardRef(function(e,t){var a=e.children,n=e.classes,o=e.className,r=e.color,l=void 0===r?"default":r,c=e.component,m=e.disabled,u=void 0!==m&&m,g=e.disableElevation,h=e.disableFocusRipple,x=e.endIcon,f=e.focusVisibleClassName,b=e.fullWidth,w=e.size,S=void 0===w?"medium":w,C=e.startIcon,j=e.type,k=e.variant,Z=void 0===k?"text":k,z=(0,s.Z)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),N=C&&i.createElement("span",{className:(0,p.Z)(n.startIcon,n["iconSize".concat((0,v.Z)(S))])},C),R=x&&i.createElement("span",{className:(0,p.Z)(n.endIcon,n["iconSize".concat((0,v.Z)(S))])},x);return i.createElement(y.Z,(0,d.Z)({className:(0,p.Z)(n.root,n[Z],o,"inherit"===l?n.colorInherit:"default"!==l&&n["".concat(Z).concat((0,v.Z)(l))],"medium"!==S&&[n["".concat(Z,"Size").concat((0,v.Z)(S))],n["size".concat((0,v.Z)(S))]],void 0!==g&&g&&n.disableElevation,u&&n.disabled,void 0!==b&&b&&n.fullWidth),component:void 0===c?"button":c,disabled:u,focusRipple:!(void 0!==h&&h),focusVisibleClassName:(0,p.Z)(n.focusVisible,f),ref:t,type:void 0===j?"button":j},z),i.createElement("span",{className:n.label},N,a,R))}),S=(0,m.Z)(function(e){return{root:(0,d.Z)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:(0,b.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,b.Fq)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,b.Fq)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat((0,b.Fq)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:(0,b.Fq)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat((0,b.Fq)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:(0,b.Fq)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}},{name:"MuiButton"})(w),C=i.forwardRef(function(e,t){var a=e.classes,n=e.className,o=e.component,r=(0,s.Z)(e,["classes","className","component"]);return i.createElement(void 0===o?"div":o,(0,d.Z)({ref:t,className:(0,p.Z)(a.root,n)},r))}),j=(0,m.Z)({root:{width:"100%",overflowX:"auto"}},{name:"MuiTableContainer"})(C),k=a(9895),Z=i.createContext(),z="table",N=i.forwardRef(function(e,t){var a=e.classes,n=e.className,o=e.component,r=void 0===o?z:o,l=e.padding,c=void 0===l?"normal":l,m=e.size,u=void 0===m?"medium":m,g=e.stickyHeader,h=void 0!==g&&g,x=(0,s.Z)(e,["classes","className","component","padding","size","stickyHeader"]),f=i.useMemo(function(){return{padding:c,size:u,stickyHeader:h}},[c,u,h]);return i.createElement(Z.Provider,{value:f},i.createElement(r,(0,d.Z)({role:r===z?null:"table",ref:t,className:(0,p.Z)(a.root,n,h&&a.stickyHeader)},x)))}),R=(0,m.Z)(function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,d.Z)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}},{name:"MuiTable"})(N),T=i.createContext(),E={variant:"head"},I="thead",_=i.forwardRef(function(e,t){var a=e.classes,n=e.className,o=e.component,r=void 0===o?I:o,l=(0,s.Z)(e,["classes","className","component"]);return i.createElement(T.Provider,{value:E},i.createElement(r,(0,d.Z)({className:(0,p.Z)(a.root,n),ref:t,role:r===I?null:"rowgroup"},l)))}),W=(0,m.Z)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(_),$=i.forwardRef(function(e,t){var a=e.classes,n=e.className,o=e.component,r=void 0===o?"tr":o,l=e.hover,c=e.selected,m=(0,s.Z)(e,["classes","className","component","hover","selected"]),u=i.useContext(T);return i.createElement(r,(0,d.Z)({ref:t,className:(0,p.Z)(a.root,n,u&&({head:a.head,footer:a.footer})[u.variant],void 0!==l&&l&&a.hover,void 0!==c&&c&&a.selected),role:"tr"===r?null:"row"},m))}),L=(0,m.Z)(function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:(0,b.Fq)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}},{name:"MuiTableRow"})($),M=i.forwardRef(function(e,t){var a,n,o=e.align,r=void 0===o?"inherit":o,l=e.classes,c=e.className,m=e.component,u=e.padding,g=e.scope,h=e.size,x=e.sortDirection,f=e.variant,b=(0,s.Z)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),y=i.useContext(Z),w=i.useContext(T),S=w&&"head"===w.variant;m?(n=m,a=S?"columnheader":"cell"):n=S?"th":"td";var C=g;!C&&S&&(C="col");var j=u||(y&&y.padding?y.padding:"normal"),k=h||(y&&y.size?y.size:"medium"),z=f||w&&w.variant,N=null;return x&&(N="asc"===x?"ascending":"descending"),i.createElement(n,(0,d.Z)({ref:t,className:(0,p.Z)(l.root,l[z],c,"inherit"!==r&&l["align".concat((0,v.Z)(r))],"normal"!==j&&l["padding".concat((0,v.Z)(j))],"medium"!==k&&l["size".concat((0,v.Z)(k))],"head"===z&&y&&y.stickyHeader&&l.stickyHeader),"aria-sort":N,role:a,scope:C},b))}),q=(0,m.Z)(function(e){return{root:(0,d.Z)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?(0,b.$n)((0,b.Fq)(e.palette.divider,1),.88):(0,b._j)((0,b.Fq)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}},{name:"MuiTableCell"})(M),F={variant:"body"},H="tbody",A=i.forwardRef(function(e,t){var a=e.classes,n=e.className,o=e.component,r=void 0===o?H:o,l=(0,s.Z)(e,["classes","className","component"]);return i.createElement(T.Provider,{value:F},i.createElement(r,(0,d.Z)({className:(0,p.Z)(a.root,n),ref:t,role:r===H?null:"rowgroup"},l)))}),P=(0,m.Z)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(A),D=a(9008),B=a.n(D);l().vfs=c.I.vfs;let O=()=>{let e=(0,o.useRouter)(),[t,a]=(0,i.useState)(!1),[r,c]=(0,i.useState)([]),{id:s}=e.query;if((0,i.useEffect)(()=>{(async function(){if(!e.isReady)return;let{id:t}=e.query,n=await fetch("https://staging.simrail.deadlykungfu.ninja/train/".concat(t)),o=await n.json();o.forEach(async e=>{}),Promise.all([]).then(()=>{c(o),a(!0)}).catch(e=>{console.error(e)})})()},[e.isReady]),!t)return(0,n.jsx)("div",{children:"Loading data... Please Wait"});let d=()=>{let e={content:[{text:"Train ".concat(s," Information : "),style:"header"},{style:"table",table:{headerRows:1,widths:["*","*","*","*","*","*"],body:[["Station Name","Arrival Time","Departure Time","Stop Type","Layover Time","Line"],...r.map(e=>[e.station,e.scheduled_arrival_hour,e.scheduled_departure_hour,e.stop_type,e.layover,e.line])]}}],styles:{header:{fontSize:18,bold:!0,alignment:"center",margin:[0,0,0,10]},table:{margin:[0,10,0,10]}}};l().createPdf(e).download("".concat(s," Timetable.pdf"))},p=t=>{let{server:a}=e.query;e.push("/".concat(a))};return(0,n.jsxs)("div",{children:[(0,n.jsx)(B(),{children:(0,n.jsx)("title",{children:"SimRail Information"})}),t&&(0,n.jsxs)("div",{children:[(0,n.jsx)(f,{container:!0,spacing:0,alignItems:"flex-start",children:(0,n.jsx)(S,{variant:"contained",color:"secondary",size:"small",onClick:p,children:"Go back to the main menu"})}),(0,n.jsxs)(f,{container:!0,spacing:0,justifyContent:"center",alignItems:"center",children:[(0,n.jsxs)(S,{variant:"contained",color:"primary",size:"medium",onClick:d,children:["Download timetable for ",s]}),(0,n.jsx)(f,{container:!0,spacing:1,justifyContent:"center",alignItems:"center",children:(0,n.jsx)(f,{item:!0,xs:8,children:(0,n.jsx)("p",{children:" If there is no data available, please check again in a few minutes"})})})]}),(0,n.jsx)(f,{container:!0,spacing:1,justifyContent:"center",alignItems:"center",children:(0,n.jsx)(f,{item:!0,xs:8,children:(0,n.jsx)(j,{component:k.Z,children:(0,n.jsxs)(R,{stickyHeader:!0,children:[(0,n.jsx)(W,{children:(0,n.jsxs)(L,{children:[(0,n.jsx)(q,{children:(0,n.jsx)("b",{children:"Station Name"})}),(0,n.jsx)(q,{children:(0,n.jsx)("b",{children:"Arrival Time"})}),(0,n.jsx)(q,{children:(0,n.jsx)("b",{children:"Departure Time"})}),(0,n.jsx)(q,{children:(0,n.jsx)("b",{children:"Stop Type"})}),(0,n.jsx)(q,{children:(0,n.jsx)("b",{children:"Layover Time"})}),(0,n.jsx)(q,{children:(0,n.jsx)("b",{children:"Line"})})]})}),(0,n.jsx)(P,{children:r.map(e=>(0,n.jsxs)(L,{children:[(0,n.jsx)(q,{children:e.station}),(0,n.jsx)(q,{children:e.scheduled_arrival_hour}),(0,n.jsx)(q,{children:e.scheduled_departure_hour}),(0,n.jsx)(q,{children:e.stop_type}),(0,n.jsx)(q,{children:e.layover}),(0,n.jsx)(q,{children:e.line})]},e.station))})]})})})})]})]})};var V=O},9008:function(e,t,a){e.exports=a(5322)},1163:function(e,t,a){e.exports=a(5337)}},function(e){e.O(0,[957,270,243,888,179],function(){return e(e.s=4992)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3226:function(e,t,r){Promise.resolve().then(r.bind(r,7215))},7215:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return $}});var s=r(7437);r(6648);var a=r(7222),n=r(7223),i=r(5125),l=r(8746),o=r(5614),d=r(1379),c=r(2265);let u=0,f=new Map,m=e=>{if(f.has(e))return;let t=setTimeout(()=>{f.delete(e),h({type:"REMOVE_TOAST",toastId:e})},1e6);f.set(e,t)},x=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?m(r):e.toasts.forEach(e=>{m(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};default:return e}},p=[],g={toasts:[]};function h(e){g=x(g,e),p.forEach(e=>{e(g)})}function v(e){let t=(u=(u+1)%Number.MAX_VALUE).toString(),r=()=>h({type:"DISMISS_TOAST",toastId:t});return h({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:e=>{e||r()}}}),{id:t,dismiss:r,update:e=>h({type:"UPDATE_TOAST",toast:{...e,id:t}})}}var j=r(4839),b=r(8077);function y(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,b.m)((0,j.W)(...t))}function N(e){let{className:t,...r}=e;return(0,s.jsx)("div",{className:y("animate-pulse rounded-md bg-muted",t),...r})}var w=r(1714),C=r(1825);async function S(e,t){await e.load();let{file:r,to:s,file_name:a,file_type:n}=t,i=function(e){let t=/(?:\.([^.]+))?$/.exec(e);return t&&t[1]?t[1]:""}(a),l=function(e){let t=e.lastIndexOf(".");return -1!==t?e.slice(0,t):e}(a)+"."+s;e.FS("writeFile",i,await (0,C.dc)(r));let o=[];o="3gp"===s?["-i",i,"-r","20","-s","352x288","-vb","400k","-acodec","aac","-strict","experimental","-ac","1","-ar","8000","-ab","24k",l]:["-i",i,l],await e.run(...o);let d=new Blob([e.FS("readFile",l).buffer],{type:n.split("/")[0]});return{url:URL.createObjectURL(d),output:l}}var E=r(3370),k=r(2218);let T=(0,k.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function _(e){let{className:t,variant:r,...a}=e;return(0,s.jsx)("div",{className:y(T({variant:r}),t),...a})}var A=r(505),O=r(3850),R=r(6762);let D=R.fC,F=c.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(R.aV,{ref:t,className:y("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",r),...a})});F.displayName=R.aV.displayName;let V=c.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(R.xz,{ref:t,className:y("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",r),...a})});V.displayName=R.xz.displayName;let z=c.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(R.VY,{ref:t,className:y("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",r),...a})});z.displayName=R.VY.displayName;var I=r(9313),M=r(2421),U=r(2468);let B=I.fC;I.ZA;let L=I.B4,Z=c.forwardRef((e,t)=>{let{className:r,children:a,...n}=e;return(0,s.jsxs)(I.xz,{ref:t,className:y("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),...n,children:[a,(0,s.jsx)(I.JO,{asChild:!0,children:(0,s.jsx)(M.Z,{className:"h-4 w-4 opacity-50"})})]})});Z.displayName=I.xz.displayName;let Y=c.forwardRef((e,t)=>{let{className:r,children:a,position:n="popper",...i}=e;return(0,s.jsx)(I.h_,{children:(0,s.jsx)(I.VY,{ref:t,className:y("relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===n&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",r),position:n,...i,children:(0,s.jsx)(I.l_,{className:y("p-1","popper"===n&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:a})})})});Y.displayName=I.VY.displayName,c.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(I.__,{ref:t,className:y("py-1.5 pl-8 pr-2 text-sm font-semibold",r),...a})}).displayName=I.__.displayName;let P=c.forwardRef((e,t)=>{let{className:r,children:a,...n}=e;return(0,s.jsxs)(I.ck,{ref:t,className:y("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r),...n,children:[(0,s.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(I.wU,{children:(0,s.jsx)(U.Z,{className:"h-4 w-4"})})}),(0,s.jsx)(I.eT,{children:a})]})});P.displayName=I.ck.displayName,c.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(I.Z0,{ref:t,className:y("-mx-1 my-1 h-px bg-muted",r),...a})}).displayName=I.Z0.displayName;var W=r(1538);let K=(0,k.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),q=c.forwardRef((e,t)=>{let{className:r,variant:a,size:n,asChild:i=!1,...l}=e,o=i?W.g7:"button";return(0,s.jsx)(o,{className:y(K({variant:a,size:n}),r),ref:t,...l})});async function G(){let e=new w.C,t="https://unpkg.com/@ffmpeg/core@0.12.2/dist/umd";return await e.load({coreURL:await (0,C.Wn)("".concat(t,"/ffmpeg-core.js"),"text/javascript"),wasmURL:await (0,C.Wn)("".concat(t,"/ffmpeg-core.wasm"),"application/wasm")}),e}q.displayName="Button";let J=["mp4","m4v","mp4v","3gp","3g2","avi","mov","wmv","mkv","flv","ogv","webm","h264","264","hevc","265"];var X=()=>{let{toast:e}=function(){let[e,t]=c.useState(g);return c.useEffect(()=>(p.push(t),()=>{let e=p.indexOf(t);e>-1&&p.splice(e,1)}),[e]),{...e,toast:v,dismiss:e=>h({type:"DISMISS_TOAST",toastId:e})}}(),[t,r]=(0,c.useState)(!1),[u,f]=(0,c.useState)([]),[m,x]=(0,c.useState)(!1),[j,b]=(0,c.useState)([]),[y,C]=(0,c.useState)(!1),[k,T]=(0,c.useState)(!1),[R,I]=(0,c.useState)(!1),M=(0,c.useRef)(null),[U,W]=(0,c.useState)("video"),[K,X]=(0,c.useState)("..."),$={"video/*":J.map(e=>".".concat(e))},H=e=>{let t=document.createElement("a");t.style.display="none",t.href=e.url,t.download=e.output,document.body.appendChild(t),t.click(),URL.revokeObjectURL(e.url),document.body.removeChild(t)},Q=async()=>{let e=u.map(e=>({...e,isConverting:!0}));for(let t of(f(e),T(!0),e))try{let{url:r,output:s}=await S(M.current,t);e=e.map(e=>e===t?{...e,isConverted:!0,isConverting:!1,url:r,output:s}:e),f(e)}catch(r){f(e=e.map(e=>e===t?{...e,isConverted:!1,isConverting:!1,isError:!0}:e))}I(!0),T(!1)},ee=()=>r(!1),et=(e,t)=>{f(u.map(r=>r.fileName===e?{...r,to:t}:r))},er=()=>{let e=!0;u.forEach(t=>{t.to||(e=!1)}),x(e)},es=e=>{f(u.filter(t=>t!==e)),b(j.filter(t=>t.name!==e.fileName))};(0,c.useEffect)(()=>{u.length?er():(I(!1),b([]),x(!1),T(!1))},[u]);let ea=async()=>{try{let e=await G();if(e instanceof w.C)M.current=e,C(!0);else throw Error("Loaded module is not an instance of FFmpeg")}catch(e){console.error("Error loading FFmpeg:",e),C(!1)}};return((0,c.useEffect)(()=>{ea()},[]),u.length)?(0,s.jsxs)("div",{className:"space-y-6",children:[u.map((e,t)=>(0,s.jsxs)("div",{className:"w-full py-4 space-y-2 lg:py-0 relative cursor-pointer rounded-xl border h-fit lg:h-20 px-4 lg:px-10 flex flex-wrap lg:flex-nowrap items-center justify-between",children:[!y&&(0,s.jsx)(N,{className:"h-full w-full -ml-10 cursor-progress absolute rounded-xl"}),(0,s.jsxs)("div",{className:"flex gap-4 items-center",children:[(0,s.jsx)("span",{className:"text-2xl text-orange-600",children:e.fileType.includes("video")?(0,s.jsx)(o.dKm,{}):(0,s.jsx)(d.xNt,{})}),(0,s.jsxs)("div",{className:"flex items-center gap-1 w-96",children:[(0,s.jsx)("span",{className:"text-md font-medium overflow-x-hidden",children:function(e){if(!(e.length>18))return e.trim();{let t=e.split(".").slice(0,-1).join("."),r=e.split(".").pop(),s=18-(t.length+r.length+3);return t.substring(0,18-r.length-3)+"..."+t.slice(-s)+"."+r}}(e.fileName)}),(0,s.jsxs)("span",{className:"text-muted-foreground text-sm",children:["(",function(e){if(0===e)return"0 Byte";let t=Math.floor(Math.log(e)/Math.log(1024)),r=(e/Math.pow(1024,t)).toFixed(2);return"".concat(r," ").concat(["Bytes","KB","MB","GB","TB"][t])}(e.fileSize),")"]})]})]}),e.isError?(0,s.jsxs)(_,{variant:"destructive",className:"flex gap-2",children:[(0,s.jsx)("span",{children:"Error Converting File"}),(0,s.jsx)(O.I2T,{})]}):e.isConverted?(0,s.jsxs)(_,{variant:"default",className:"flex gap-2 bg-green-500",children:[(0,s.jsx)("span",{children:"Done"}),(0,s.jsx)(i.vB0,{})]}):e.isConverting?(0,s.jsxs)(_,{variant:"default",className:"flex gap-2",children:[(0,s.jsx)("span",{children:"Converting"}),(0,s.jsx)("span",{className:"animate-spin",children:(0,s.jsx)(E.Nbw,{})})]}):(0,s.jsxs)("div",{className:"text-muted-foreground text-md flex items-center gap-4",children:[(0,s.jsx)("span",{children:"Convert to"}),(0,s.jsxs)(B,{onValueChange:t=>{X(t),et(e.fileName,t)},value:K,children:[(0,s.jsx)(Z,{className:"w-32 outline-none focus:outline-none focus:ring-0 text-center text-muted-foreground bg-background text-md font-medium",children:(0,s.jsx)(L,{placeholder:"..."})}),(0,s.jsx)(Y,{className:"h-fit",children:(0,s.jsxs)(D,{defaultValue:U,className:"w-full",children:[(0,s.jsx)(F,{className:"w-full",children:(0,s.jsx)(V,{value:"video",className:"w-full",children:"Video"})}),(0,s.jsx)(z,{value:"video",children:(0,s.jsx)("div",{className:"grid grid-cols-3 gap-2 w-fit",children:J.map((e,t)=>(0,s.jsx)("div",{className:"col-span-1 text-center",children:(0,s.jsx)(P,{value:e,className:"mx-auto",children:e})},t))})})]})})]})]}),e.isConverted?(0,s.jsx)(q,{variant:"outline",onClick:()=>H(e),children:"Download"}):(0,s.jsx)("span",{onClick:()=>es(e),className:"absolute top-3 right-3 lg:top-auto lg:bottom-1 lg:right-1 rounded-full cursor-pointer bg-muted-foreground/10 p-2 transition hover:bg-muted-foreground/20 flex items-center justify-center text-2xl text-foreground",children:(0,s.jsx)(i.FU5,{})})]},t)),(0,s.jsx)("div",{className:"flex w-full justify-end",children:R?(0,s.jsxs)("div",{className:"space-y-4 w-fit",children:[(0,s.jsxs)(q,{size:"lg",className:"rounded-xl font-semibold relative py-4 text-md flex gap-2 items-center w-full",onClick:()=>{u.forEach(e=>{e.isError||H(e)})},children:[u.length>1?"Download All":"Download",(0,s.jsx)(A.yFZ,{})]}),(0,s.jsx)(q,{size:"lg",onClick:()=>{I(!1),f([]),b([]),x(!1),T(!1)},variant:"outline",className:"rounded-xl",children:"Convert Another File(s)"})]}):(0,s.jsx)(q,{size:"lg",disabled:!m||k,className:"rounded-xl font-semibold relative py-4 text-md flex items-center w-44",onClick:Q,children:k?(0,s.jsx)("span",{className:"animate-spin text-lg",children:(0,s.jsx)(E.Nbw,{})}):(0,s.jsx)("span",{children:"Convert Now"})})})]}):(0,s.jsx)("div",{children:(0,s.jsx)(l.ZP,{onDrop:e=>{ee(),b(e);let t=[];e.forEach(e=>{t.push({fileName:e.name,fileSize:e.size,from:e.name.slice((e.name.lastIndexOf(".")-1>>>0)+2),to:null,fileType:e.type,file:e,isConverted:!1,isConverting:!1,isError:!1})}),f(t)},onDragEnter:()=>r(!0),onDragLeave:ee,accept:$,onDropRejected:()=>{ee(),e({variant:"destructive",title:"Error uploading your file(s)",description:"Allowed Files: Videos.",duration:5e3})},onError:()=>{ee(),e({variant:"destructive",title:"Error uploading your file(s)",description:"Allowed Files: Videos.",duration:5e3})},children:e=>{let{getRootProps:r,getInputProps:i}=e;return(0,s.jsxs)("div",{...r(),className:"bg-background h-72 lg:h-80 xl:h-96 rounded-3xl shadow-sm border-secondary border-2 border-dashed cursor-pointer flex items-center justify-center",children:[(0,s.jsx)("input",{...i()}),(0,s.jsx)("div",{className:"space-y-4 text-foreground",children:t?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"justify-center flex text-6xl",children:(0,s.jsx)(n.T6D,{})}),(0,s.jsx)("h3",{className:"text-center font-medium text-2xl",children:"Yes, right there"})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"justify-center flex text-6xl",children:(0,s.jsx)(a.Re4,{})}),(0,s.jsx)("h3",{className:"text-center font-medium text-2xl",children:"Click, or drop your files here"})]})})]})}})})};function $(){return(0,s.jsxs)("main",{className:"p-4 flex flex-col justify-center items-center h-screen",children:[(0,s.jsxs)("div",{className:"w-[80%] flex flex-col justify-center items-center",children:[(0,s.jsx)("p",{className:"text-4xl",children:"Convert your Video Format Online Easily"}),(0,s.jsx)("p",{className:"text-center",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"})]}),(0,s.jsx)(X,{})]})}}},function(e){e.O(0,[582,33,724,982,502,447,115,712,506,971,23,744],function(){return e(e.s=3226)}),_N_E=e.O()}]);
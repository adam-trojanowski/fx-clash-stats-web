import{j as e,t as T,u as p,m as Q,E as V,r as X}from"./vendor-71757edf.js";import{D as u,H as h,C as q,R as Y,A as Z,u as N,a as B,b as F,f as _}from"./formatting-6f336439.js";import{I as ee}from"./index-2aab8e36.js";import{u as C}from"./useDrivers-b1049fb3.js";import{u as O,a as E,b as I,c as A,d as G,e as L}from"./useSuspensions-9577369e.js";const M=i=>{const{children:t,className:r}=i;return e.jsx("h3",{className:T("text-3xl font-bold dark:text-white mb-3",r),children:t})},y=i=>{const{children:t,className:r}=i;return e.jsx("h6",{className:T("text-lg font-bold dark:text-white mb-3",r),children:t})},U=i=>{const{stat:t}=i,{t:r}=p(["drivers"]);return e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-row gap-2 divide-x justify-between divide-gray-200 dark:divide-gray-700",children:[e.jsx("div",{className:"flex w-1/3 justify-center",children:e.jsx(u,{className:"text-center",term:r("drivers:overtaking"),children:t.overtaking})}),e.jsx("div",{className:"flex w-1/3 justify-center pl-2",children:e.jsx(u,{className:"text-center",term:r("drivers:defending"),children:t.defending})}),e.jsx("div",{className:"flex w-1/3 justify-center pl-2",children:e.jsx(u,{className:"text-center",term:r("drivers:qualifying"),children:t.qualifying})})]}),e.jsx(h,{}),e.jsxs("div",{className:"flex flex-row gap-2 divide-x justify-between divide-gray-200 dark:divide-gray-700",children:[e.jsx("div",{className:"flex w-1/2 justify-center",children:e.jsx(u,{className:"text-center",term:r("drivers:raceStart"),children:t.raceStart})}),e.jsx("div",{className:"flex w-1/2 justify-center pl-2",children:e.jsx(u,{className:"text-center",term:r("drivers:tireManagement"),children:t.tireManagement})})]})]})},se=i=>{const{stat:t}=i,{t:r}=p(["parts"]);return e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-row gap-2 divide-x justify-between divide-gray-200 dark:divide-gray-700",children:[e.jsx("div",{className:"flex w-1/3 justify-center",children:e.jsx(u,{className:"text-center",term:r("parts:speed"),children:t.speed})}),e.jsx("div",{className:"flex w-1/3 justify-center pl-2",children:e.jsx(u,{className:"text-center",term:r("parts:cornering"),children:t.cornering})}),e.jsx("div",{className:"flex w-1/3 justify-center pl-2",children:e.jsx(u,{className:"text-center",term:r("parts:powerUnit"),children:t.powerUnit})})]}),e.jsx(h,{}),e.jsxs("div",{className:"flex flex-row gap-2 divide-x justify-between divide-gray-200 dark:divide-gray-700",children:[e.jsx("div",{className:"flex w-1/2 justify-center",children:e.jsx(u,{className:"text-center",term:r("parts:reliability"),children:t.reliability})}),e.jsx("div",{className:"flex w-1/2 justify-center pl-2",children:e.jsx(u,{className:"text-center",term:r("parts:pitStopTime"),children:t.pitStopTime.toFixed(2)})})]})]})},te=i=>{const{children:t}=i;return e.jsx("div",{className:"grid justify-items-center max-sm:grid-cols-1 max-lg:grid-cols-2 max-2xl:grid-cols-3 grid-cols-4 gap-5",children:t})},S=i=>{const{asset:t,children:r}=i,{t:c}=p(),l=Q(),n=!1,s=t.rarity==="stock",a=()=>{s||l(t.id.toString())};return e.jsx(q,{className:"",children:e.jsxs("div",{className:"p-3",children:[e.jsxs("div",{className:"flex flex-row justify-between items-center mb-2 gap-2 flex-wrap",children:[e.jsxs("button",{className:T("flex flex-row items-center gap-2 text-gray-900 dark:text-white",s?"cursor-not-allowed":"hover:underline hover:text-blue-600 hover:dark:text-blue-500"),onClick:a,children:[e.jsxs("h5",{className:"text-2xl font-bold tracking-tight",children:[t.name," "]}),!s&&e.jsx(ee,{Icon:V,size:20})]}),n]}),e.jsxs("div",{className:"flex flex-row justify-between items-center mb-3",children:[e.jsx("p",{className:"font-normal text-gray-700 dark:text-gray-400",children:c("series",{series:t.series})}),e.jsx(Y,{rarity:t.rarity})]}),r]})},t.id)},H=i=>{const{bestParts:{bestBrake:t,bestEngine:r,bestFrontWing:c,bestGearbox:l,bestRearWing:n,bestSuspension:s}}=i,{t:a}=p(["parts"]),o=X.useMemo(()=>[{data:t,label:a("parts:brake",{count:1})},{data:l,label:a("parts:gearbox",{count:1})},{data:n,label:a("parts:rearWing",{count:1})},{data:c,label:a("parts:frontWing",{count:1})},{data:s,label:a("parts:suspension",{count:1})},{data:r,label:a("parts:engine",{count:1})}],[t,r,c,l,n,s,a]);return e.jsx(te,{children:o.map((d,g)=>e.jsxs("div",{className:"w-full",children:[e.jsx(y,{className:"mb-1",children:d.label}),e.jsxs(S,{asset:d.data.asset,children:[e.jsx(h,{}),e.jsx(se,{stat:d.data.stat})]})]},g))})},z=i=>{const{bestDrivers:t}=i,{t:r}=p(["calculators"]);return t.hasTwoDrivers?e.jsxs("div",{className:"grid justify-items-center max-sm:grid-cols-1 grid-cols-2 gap-5 mb-5",children:[e.jsxs("div",{className:"max-w-sm w-full",children:[e.jsx(y,{className:"mb-1",children:r("calculators:driver1")}),e.jsxs(S,{asset:t.driver1.asset,children:[e.jsx(h,{}),e.jsx(U,{stat:t.driver1.stat})]})]}),e.jsxs("div",{className:"max-w-sm w-full",children:[e.jsx(y,{className:"mb-1",children:r("calculators:driver2")}),e.jsxs(S,{asset:t.driver2.asset,children:[e.jsx(h,{}),e.jsx(U,{stat:t.driver2.stat})]})]})]}):e.jsx(Z,{severity:"warning",children:r("calculators:error.twoDriverRequired")})},m=i=>{const{children:t,title:r}=i;return e.jsx(q,{className:"max-w-[250px] w-full",children:e.jsx("div",{className:"p-3",children:e.jsx(u,{className:"text-center",term:r,children:t})})})},re=i=>{const{score:t}=i,{t:r}=p(["calculators"]);return e.jsx("div",{className:"flex flex-row justify-center w-full mb-5",children:e.jsx(m,{title:r("calculators:teamScore"),children:t})})},$=i=>{const{bestParts:{sum:{cornering:t,pitStopTime:r,powerUnit:c,reliability:l,speed:n}}}=i,{t:s}=p(["parts"]);return e.jsxs("div",{className:"mb-3",children:[e.jsxs("div",{className:"max-md:hidden flex flex-row gap-2 justify-between w-full",children:[e.jsx(m,{title:s("parts:speed"),children:n}),e.jsx(m,{title:s("parts:powerUnit"),children:c}),e.jsx(m,{title:s("parts:cornering"),children:t}),e.jsx(m,{title:s("parts:reliability"),children:l}),e.jsx(m,{title:s("parts:pitStopTime"),children:r.toFixed(2)})]}),e.jsxs("div",{className:"md:hidden flex flex-col gap-2 items-center w-full",children:[e.jsxs("div",{className:"flex flex-row justify-evenly gap-2 w-full",children:[e.jsx(m,{title:s("parts:speed"),children:n}),e.jsx(m,{title:s("parts:powerUnit"),children:c}),e.jsx(m,{title:s("parts:cornering"),children:t})]}),e.jsxs("div",{className:"flex flex-row justify-evenly gap-2 w-full",children:[e.jsx(m,{title:s("parts:reliability"),children:l}),e.jsx(m,{title:s("parts:pitStopTime"),children:r.toFixed(2)})]})]})]})},ae=()=>{const i=C(),t=N(s=>s.drivers),r=i.filter(s=>Object.keys(t).map(a=>parseInt(a,10)).includes(s.id));if(r.length<2)return{driver1:void 0,driver2:void 0,hasTwoDrivers:!1};const c=r.map(s=>{const a=s.stats.find(o=>o.level===t[s.id].level);return{asset:s,score:a.score.weighted,stat:a}}),[l,n]=c.sort((s,a)=>s.score>a.score?-1:1);return{driver1:l,driver2:n,hasTwoDrivers:!0}},b=(i,t)=>{const r=N(s=>s[t]),l=i.filter(s=>Object.keys(r).map(a=>parseInt(a,10)).includes(s.id)).map(s=>{const a=s.stats.find(o=>o.level===r[s.id].level);return{asset:s,score:a.score.weighted,stat:a}}),[n]=l.sort((s,a)=>s.score>a.score?-1:1);return n},J=i=>{const{bestBrake:t,bestEngine:r,bestFrontWing:c,bestGearbox:l,bestRearWing:n,bestSuspension:s}=i;return{cornering:t.stat.cornering+r.stat.cornering+c.stat.cornering+l.stat.cornering+n.stat.cornering+s.stat.cornering,pitStopTime:t.stat.pitStopTime+r.stat.pitStopTime+c.stat.pitStopTime+l.stat.pitStopTime+n.stat.pitStopTime+s.stat.pitStopTime,powerUnit:t.stat.powerUnit+r.stat.powerUnit+c.stat.powerUnit+l.stat.powerUnit+n.stat.powerUnit+s.stat.powerUnit,reliability:t.stat.reliability+r.stat.reliability+c.stat.reliability+l.stat.reliability+n.stat.reliability+s.stat.reliability,speed:t.stat.speed+r.stat.speed+c.stat.speed+l.stat.speed+n.stat.speed+s.stat.speed}},ie=()=>{const i=O(),t=b(i,"brakes"),r=E(),c=b(r,"engines"),l=I(),n=b(l,"frontWings"),s=A(),a=b(s,"gearboxes"),o=G(),d=b(o,"rearWings"),g=L(),x=b(g,"suspensions"),w=J({bestBrake:t,bestEngine:c,bestFrontWing:n,bestGearbox:a,bestRearWing:d,bestSuspension:x});return{bestBrake:t,bestEngine:c,bestFrontWing:n,bestGearbox:a,bestRearWing:d,bestSuspension:x,sum:w}},K=(i,t)=>{const{driver1:r,driver2:c,hasTwoDrivers:l}=i,{bestBrake:n,bestEngine:s,bestFrontWing:a,bestGearbox:o,bestRearWing:d,bestSuspension:g}=t,x=v=>v.cornering+v.powerUnit+v.reliability+v.reliability,w=n.stat.pitStopTime+s.stat.pitStopTime+a.stat.pitStopTime+o.stat.pitStopTime+d.stat.pitStopTime+g.stat.pitStopTime;let j=x(n.stat)+x(s.stat)+x(a.stat)+x(o.stat)+x(d.stat)+x(g.stat);return j+=Math.floor((6-w)/.0201),l&&(j+=r.stat.statsSum,j+=c.stat.statsSum),j.toFixed(0)},ne=()=>{const{t:i}=p(["calculators"]),t=ae(),r=ie(),c=K(t,r);return e.jsxs(B,{maxWidth:"2xl",children:[e.jsx(M,{children:i("calculators:bestTeam")}),e.jsx(re,{score:c}),e.jsx(z,{bestDrivers:t}),e.jsx($,{bestParts:r}),e.jsx(H,{bestParts:r})]})},ce=()=>{const i=C(),t=N(s=>s.drivers),r=i.filter(s=>Object.keys(t).map(a=>parseInt(a,10)).includes(s.id));if(r.length<2)return{driver1:void 0,driver2:void 0,hasTwoDrivers:!1};const c=r.map(s=>{const a=t[s.id],o=F(s.stats,a.level,a.cards);return{driver:s,driverUpgradeRequirements:o,maxStat:s.stats.find(d=>o.maxLevelAvailable===d.level)}}),[l,n]=c.sort((s,a)=>s.maxStat.score.weighted>a.maxStat.score.weighted?-1:1);return{driver1:{asset:l.driver,score:l.maxStat.score.weighted,stat:l.maxStat},driver2:{asset:n.driver,score:n.maxStat.score.weighted,stat:n.maxStat},hasTwoDrivers:!0,upgradeRequirements:{coinsNeeded:l.driverUpgradeRequirements.coinsNeeded+n.driverUpgradeRequirements.coinsNeeded}}},f=(i,t)=>{const r=N(s=>s[t]),l=i.filter(s=>Object.keys(r).map(a=>parseInt(a,10)).includes(s.id)).map(s=>{const a=r[s.id],o=F(s.stats,a.level,a.cards);return{maxStat:s.stats.find(d=>o.maxLevelAvailable===d.level),part:s,partUpgradeRequirements:o}}),[n]=l.sort((s,a)=>s.maxStat.score.weighted>a.maxStat.score.weighted?-1:1);return{asset:n.part,score:n.maxStat.score.weighted,stat:n.maxStat,upgradeRequirements:n.partUpgradeRequirements}},le=()=>{var v,k,P,D,R,W;const i=O(),t=f(i,"brakes"),r=E(),c=f(r,"engines"),l=I(),n=f(l,"frontWings"),s=A(),a=f(s,"gearboxes"),o=G(),d=f(o,"rearWings"),g=L(),x=f(g,"suspensions"),w=J({bestBrake:t,bestEngine:c,bestFrontWing:n,bestGearbox:a,bestRearWing:d,bestSuspension:x}),j=(((v=t.upgradeRequirements)==null?void 0:v.coinsNeeded)??0)+(((k=c.upgradeRequirements)==null?void 0:k.coinsNeeded)??0)+(((P=n.upgradeRequirements)==null?void 0:P.coinsNeeded)??0)+(((D=a.upgradeRequirements)==null?void 0:D.coinsNeeded)??0)+(((R=d.upgradeRequirements)==null?void 0:R.coinsNeeded)??0)+(((W=x.upgradeRequirements)==null?void 0:W.coinsNeeded)??0);return{bestBrake:t,bestEngine:c,bestFrontWing:n,bestGearbox:a,bestRearWing:d,bestSuspension:x,sum:w,upgradeRequirements:{coinsNeeded:j}}},oe=()=>{var n,s;const{t:i}=p(["calculators"]),t=ce(),r=le(),c=K(t,r),l=(((n=t.upgradeRequirements)==null?void 0:n.coinsNeeded)??0)+(((s=r.upgradeRequirements)==null?void 0:s.coinsNeeded)??0);return e.jsxs(e.Fragment,{children:[e.jsx(M,{children:i("calculators:bestTeamOnceUpgraded")}),e.jsxs("div",{className:"flex flex-row justify-center w-full mb-5 gap-5",children:[e.jsx(m,{title:i("calculators:teamScore"),children:c}),e.jsx(m,{title:i("calculators:coinsNeeded"),children:_(l)})]}),e.jsx(z,{bestDrivers:t}),e.jsx($,{bestParts:r}),e.jsx(H,{bestParts:r})]})},de=()=>e.jsxs(B,{maxWidth:"2xl",children:[e.jsx(ne,{}),e.jsx(h,{className:"my-10"}),e.jsx(oe,{})]}),ve=de;export{ve as CalculatorPage};
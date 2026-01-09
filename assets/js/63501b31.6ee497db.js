"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["618985"],{404165:function(e,t,r){r.d(t,{Z:()=>a});let a={root:"root_I89i",header:"header_hcW8",title:"title_PVNO",actions:"actions_UGHV",toggle:"toggle_Lt_M",grid:"grid_KnVp",pane:"pane_ZV3u",paneHeader:"paneHeader_BCLE",badge:"badge_AbCQ",badgeError:"badgeError_AXsw",textarea:"textarea_Tv1L",output:"output_kaK0",error:"error_T1Eh",hint:"hint_qv06",editor:"editor_k97k",editorError:"editorError_dBFn",actionBar:"actionBar__rjl",runButton:"runButton_P1Ri"}},919633:function(e,t,r){r.r(t),r.d(t,{default:()=>b});var a=r(785893),s=r(584239),n=r(942991),o=r(667294),i=r(874981);r(782679),r(990252),r(979253),r(767653),r(682658),r(509986);var l=r(404165);let c=r(659635);"undefined"!=typeof ace&&ace.config&&ace.config.setModuleUrl("ace/mode/json_worker",new URL("https://ajaxorg.github.io/ace-builds/src-noconflict/worker-json.js").toString());let d=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return String(e).padStart(t,"0")};function u(e){return new Date(null==e?NaN:e instanceof Date?e.getTime():e)}let p={now:()=>new Date,parse:e=>u(e),format(e,t){let r=t?u(t):new Date;return isNaN(r.getTime())?"Invalid Date":function(e,t){let r=-e.getTimezoneOffset(),a=r>=0?"+":"-",s=Math.abs(r),n=d(Math.floor(s/60)),o=d(s%60);return t.replace(/YYYY/g,String(e.getFullYear())).replace(/YY/g,String(e.getFullYear()).slice(-2)).replace(/MM/g,d(e.getMonth()+1)).replace(/DD/g,d(e.getDate())).replace(/HH/g,d(e.getHours())).replace(/mm/g,d(e.getMinutes())).replace(/ss/g,d(e.getSeconds())).replace(/ZZ/g,`${a}${n}:${o}`).replace(/Z/g,`${a}${n}`)}(r,e.replace(/yyyy/g,"YYYY").replace(/\byy\b/g,"YY").replace(/dd/g,"DD"))},add(e,t,r){let a=u(e??new Date);if(isNaN(a.getTime()))return new Date(NaN);let s=new Date(a.getTime());switch(r){case"seconds":s.setSeconds(s.getSeconds()+t);break;case"minutes":s.setMinutes(s.getMinutes()+t);break;case"hours":s.setHours(s.getHours()+t);break;case"days":s.setDate(s.getDate()+t);break;case"months":s.setMonth(s.getMonth()+t);break;case"years":s.setFullYear(s.getFullYear()+t)}return s},iso(e){let t=e?u(e):new Date;return isNaN(t.getTime())?"Invalid Date":t.toISOString()}},h=`
{
        "reauthorizationRequired": false,
        "name": "Chemists",
        "type": "ENTITLEMENT",
        "id": "8f2d16f25ee736cc9f6d55a7ad3f423a",
        "cancelledRequestDetails": null,
        "errorMessages": null,
        "state": "REQUEST_COMPLETED",
        "approvalDetails": [],
        "approvalIds": [],
        "manualWorkItemDetails": null,
        "accessRequestPhases": [
            {
                "started": "2025-08-20T22:32:41.198121Z",
                "finished": "2025-08-20T22:32:44.375348Z",
                "name": "PROVISIONING_PHASE",
                "result": "SUCCESSFUL",
                "state": "COMPLETED",
                "phaseReference": null
            }
        ],
        "accountActivityItemId": "787062231a5e4a40a794e8a88cb7f6b9",
        "requestType": "REVOKE_ACCESS",
        "modified": "2025-08-20T22:32:47.777Z",
        "created": "2025-08-20T22:32:40.910Z",
        "requester": {
            "type": "IDENTITY",
            "id": "90fa418f8c17490ebbb27c65712d4ab7",
            "name": "Prasad.Uplenchwar"
        },
        "requestedFor": {
            "type": "IDENTITY",
            "id": "3dbd66045c1541deb15ae4ee91545d44",
            "name": "Prasad.U"
        },
        "requesterComment": {
            "comment": "Test",
            "author": {
                "type": "IDENTITY",
                "id": "90fa418f8c17490ebbb27c65712d4ab7",
                "name": "Prasad.Uplenchwar"
            },
            "created": "2025-08-20T22:32:40.910Z"
        },
        "sodViolationContext": null,
        "provisioningDetails": null,
        "preApprovalTriggerDetails": null,
        "description": "All Chemists in Ascoop",
        "removeDate": null,
        "cancelable": false,
        "accessRequestId": "e8b5a97c922947528e7b0970dab2c786",
        "clientMetadata": null,
        "accessRequestContext": null,
        "requestedAccounts": [
            {
                "sourceName": "GK AD",
                "accountId": "CN\u003dPrasad.U,OU\u003daccounts,OU\u003dascoopiam,DC\u003dascoop,DC\u003dorg",
                "accountUuid": null,
                "type": "ACCOUNT",
                "id": null,
                "name": "Prasad.U"
            }
        ],
        "privilegeLevel": null
    }`,m=`#macro(renderProvisioningPhaseIST $phases)
#foreach($phase in $phases)
#if($phase.name == "PROVISIONING_PHASE" && $phase.state == "COMPLETED")
Access Request Phase Name: $phase.name
#if($phase.started)
Access Request Started (IST): $date.format("yyyy-MM-dd HH:mm:ss", $phase.started)
#else
Access Request Started: Not Available
#end
#if($phase.finished)
Access Request Finished (IST): $date.format("yyyy-MM-dd HH:mm:ss", $phase.finished)
#else
Access Request Finished: Not Available
#end
Access Request Result: $phase.result
Access Request State: $phase.state
#end
#end
#end
## Usage Example:
#renderProvisioningPhaseIST($accessRequestPhases)
`;function g(e,t){let[r,a]=(0,o.useState)(()=>{try{return("undefined"!=typeof window?localStorage.getItem(e):null)??t}catch{return t}});return(0,o.useEffect)(()=>{try{localStorage.setItem(e,r)}catch{}},[e,r]),[r,a]}function f(e){let{jsonText:t,setJsonText:r,template:n,setTemplate:o,state:c,data:d,formatJson:u,copyOutput:p,resetSample:h,forceRender:m}=e,{colorMode:g}=(0,s.I)();return(0,a.jsxs)("div",{className:l.Z.root,children:[(0,a.jsxs)("header",{className:l.Z.header,children:[(0,a.jsx)("div",{className:l.Z.title,children:"Velocity Playground"}),(0,a.jsxs)("div",{className:l.Z.actions,children:[(0,a.jsx)("button",{className:l.Z.runButton,onClick:u,title:"Prettify JSON (Ctrl/Cmd+Enter to render)",children:"Format JSON"}),(0,a.jsx)("button",{className:l.Z.runButton,onClick:p,disabled:!c.output,children:"Copy Output"}),(0,a.jsx)("button",{className:l.Z.runButton,onClick:h,children:"Reset Sample"})]})]}),(0,a.jsxs)("main",{className:l.Z.grid,children:[(0,a.jsxs)("section",{className:l.Z.pane,children:[(0,a.jsxs)("div",{className:l.Z.paneHeader,children:[(0,a.jsx)("span",{children:"JSON Input"}),d.error&&(0,a.jsx)("span",{className:`${l.Z.badge} ${l.Z.badgeError}`,children:"Invalid"})]}),(0,a.jsx)(i.default,{className:d.error?l.Z.editorError:l.Z.editor,mode:"json",theme:"dark"===g?"github_dark":"github_light_default",value:t,onChange:r,name:"json-input-editor",fontSize:"14px",width:"100%",height:"400px",showPrintMargin:!1,showGutter:!0,highlightActiveLine:!0,editorProps:{$blockScrolling:!0},setOptions:{fontFamily:"monospace",useWorker:!0,enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,enableSnippets:!1,showLineNumbers:!0,tabSize:2,wrap:!0},onLoad:e=>{e.session.setMode("ace/mode/json"),e.session.setUseWorker(!0),e.commands.addCommand({name:"render",bindKey:{win:"Ctrl-Enter",mac:"Command-Enter"},exec:m})}}),d.error?(0,a.jsxs)("div",{className:l.Z.error,children:["JSON Error: ",d.error]}):(0,a.jsx)("div",{className:l.Z.hint,children:"Tip: Press Ctrl/Cmd + Enter to render"})]}),(0,a.jsxs)("section",{className:l.Z.pane,children:[(0,a.jsx)("div",{className:l.Z.paneHeader,children:(0,a.jsx)("span",{children:"Velocity Template"})}),(0,a.jsx)(i.default,{className:l.Z.editor,mode:"velocity",theme:"dark"===g?"github_dark":"github_light_default",value:n,onChange:o,name:"velocity-template-editor",fontSize:"14px",width:"100%",height:"400px",showPrintMargin:!1,showGutter:!0,highlightActiveLine:!0,editorProps:{$blockScrolling:!0},setOptions:{fontFamily:"monospace",useWorker:!1,enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,showLineNumbers:!0,tabSize:2,wrap:!0},onLoad:e=>{e.session.setMode("ace/mode/velocity"),e.commands.addCommand({name:"render",bindKey:{win:"Ctrl-Enter",mac:"Command-Enter"},exec:m})}}),(0,a.jsxs)("div",{className:l.Z.hint,children:["Supports directives like ",(0,a.jsx)("code",{children:"#foreach"}),", ",(0,a.jsx)("code",{children:"#if"}),", and variables like"," ",(0,a.jsx)("code",{children:"$now"}),", ",(0,a.jsx)("code",{children:"#macros"}),"."]})]}),(0,a.jsxs)("section",{className:l.Z.pane,children:[(0,a.jsxs)("div",{className:l.Z.paneHeader,children:[(0,a.jsx)("span",{children:" Output"}),c.error&&(0,a.jsx)("span",{className:`${l.Z.badge} ${l.Z.badgeError}`,children:"Error"})]}),(0,a.jsx)(i.default,{className:l.Z.editor,mode:"text",theme:"dark"===g?"github_dark":"github_light_default",value:c.error?c.error:c.output,readOnly:!0,name:"output-editor",fontSize:"14px",width:"100%",height:"400px",showPrintMargin:!1,showGutter:!0,highlightActiveLine:!1,editorProps:{$blockScrolling:!0},setOptions:{fontFamily:"monospace",useWorker:!1,showLineNumbers:!0,wrap:!0}})]})]})]})}function b(){let[e,t]=g("velocity-playground:json",h),[r,s]=g("velocity-playground:template",m),[i,l]=(0,o.useState)({output:""}),d=(0,o.useRef)(null),u=(0,o.useMemo)(()=>{try{return{value:JSON.parse(e),error:void 0}}catch(e){return{value:void 0,error:e?.message??"Invalid JSON"}}},[e]);(0,o.useEffect)(()=>(d.current&&window.clearTimeout(d.current),d.current=window.setTimeout(()=>{try{if(u.error)return void l({output:"",error:`JSON Error: ${u.error}`});let e={...u.value||{},date:p},t=c.render(r,e);l({output:t,error:void 0})}catch(e){l({output:"",error:`Template Error: ${e?.message??"Unknown error while rendering template"}`})}},200),()=>{d.current&&window.clearTimeout(d.current)}),[r,u.error,u.value]);let b=async()=>{try{await navigator.clipboard.writeText(i.output??"")}catch{}};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.Z,{title:"Velocity PlayGround",description:"The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.",children:(0,a.jsx)("main",{children:(0,a.jsx)(f,{jsonText:e,setJsonText:t,template:r,setTemplate:s,state:i,data:u,formatJson:()=>{try{let r=JSON.parse(e);t(JSON.stringify(r,null,2))}catch{}},copyOutput:b,resetSample:()=>{t(h),s(m)},forceRender:()=>{d.current&&(window.clearTimeout(d.current),d.current=null);try{if(u.error)return void l({output:"",error:`JSON Error: ${u.error}`});let e=c.render(r,u.value||{});l({output:e,error:void 0})}catch(e){l({output:"",error:`Template Error: ${e?.message??"Unknown error while rendering template"}`})}}})})})})}}}]);
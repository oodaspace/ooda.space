/*
© (c) Copyright 2020 ooda space ltd
###############################################################################
A. Redistribution and use:
    1. Redistribution and use in source and binary forms, without modification, are permitted provided that the following conditions are met:
            i.    Redistributions of source code must retain the above copyright notice and this text (Sections A., B., C., D.*, E.*, and F.*).
            ii.   Redistributions in binary form must reproduce the above copyright notice and this text (Sections A., B., C., D.*, E.*, and F.*) in the documentation and/or other materials provided with the distribution.
    2. Redistribution and use in source and binary forms, with modification, are permitted provided that the following conditions are met:
            i.    Redistributions of source code must retain the above copyright notice and this text (Sections A., B., C., D.*, E.*, and F*. with Section C. modified as per A.2.iii).
            ii.   Redistributions in binary form must reproduce the above copyright notice and this text (Sections A., B., C., D.*, E.*, and F.* with Section C. modified as per A.2.iii) in the documentation and/or other materials provided with the distribution.
            iii.  The modifier has updated Section C. below as described in Section D.
            iv.   The modifier has signalled value in the modified file on the ideas.oodaspace.eth smart contract as described in section E.
            v.    The modified file is stored on the Arweave system as described in Section F.
    3. If any part of this text (Sections A., B., C., D.*, E.*, and F.*) is held to be invalid it shall not invalidate the text as a whole or any other part of this text (Sections A., B., C., D., E., and F.).
    * Sections D., E., and F. may be replaced by reference to an arweave transaction containing version 0 of the full license (with nothing else included). I.e. "For Sections D., E., and F. refer to the Arweave transaction am0Zxgnoxrip32hGUzCd3VTFoLMpZ9VbyfdvA_fIZ-I"
###############################################################################
B. Disclaimer:
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
###############################################################################
C. The file
    1. Media-type:                                              text/plain
    2. Ethereum address of modifier:                            0x266D80d1a7f8926FE44BA310eA2bDa7d302a9615
    3. Distance [integer dec]:                                  0
    4. Context [256bit word hex]:                               0x0000000000000000000000000000000000000000000000000000000000000000
    5. SHA3 256-bit hash of the file [only for redistributions in binary form, else "Not Applicable"]:  Not Applicable
###############################################################################
For Sections D., E., and F. refer to the Arweave transaction am0Zxgnoxrip32hGUzCd3VTFoLMpZ9VbyfdvA_fIZ-I
###############################################################################
*/
let inputidea_proc = function(context,prospective,distance,x=0,name="inputidea",_class='base'){
let description = `template for a inputidea`
let inputidea_outerTemplateObj = {
  name: `${name}`,
  distance: `${distance}`,
  class: `${_class}`,
  content: `<style>
                #${name} {left:${x}px;}
                #${name}_content {overflow:unset;border-style:dashed;}
                #${name}title {position: relative;display:grid;grid-template: 150px auto auto auto/ 300px;width:300px;}
                #${name}idea {font-size:30px; text-align: center;align-self: center;grid-area: 1 / 1 / 2 / 2;padding-left:0px;padding-right:0px;position: absolute;clip: rect(0px,300px,150px,0px);top:0px;height: 150px; width: 300px;justify-content: center;  display:table-cell;align-items:center;justify-items:center;vertical-align:middle;line-height:150px;box-sizing:border-box;}
                #${name}idea:empty{ line-height:150px; box-sizing:border-box; text-align:left; padding-left:150px;  }/*ensures cursor starts in center of box*/
                #${name}loadinginfo {display:none;font-size:30px; text-align: center;align-self: center;grid-area: 1 / 1 / 5 / 3;padding-left:10px;padding-right:10px;}
                #${name}input {border:solid 2px black;width:298px;max-width:298px;justify-self:start;height:50px;}
                #${name}idea:focus {vertical-align:middle;}
                #${name}inputideaIcon {display:none;grid-area: 3 / 1 / 5 / 2; padding-bottom: 22.5px;align-self:end;justify-self:start;width:100%;justify-content: start;position: relative;top:-70px;cursor: pointer;}
                #${name}inputideaIcon:hover {color:blue;}
                #${name}inputcontainer {grid-area: 1 / 1 / 2 / 2; padding-bottom: 22.5px;align-self:end;justify-self:start;width:100%;justify-content: start;position: relative;top: 46px; left:-1px;display: grid; /*grid-template: 150px auto / 300px;*/ width:300px;}
                #${name}inputcontainer:hover {display:grid;}
                #${name}inputtypeselectorbar {width:300px;height:25px;background-color:transparent;grid-area: 2 / 1 / 3 / 2; display: flex; justify-content: center;align-content:center;display:none;height:22px;}
                #${name}inputbuttons{ display: none; grid-area: 3 / 1 / 4 /2;  align-self: center;  text-align:center; }
                #${name}inputhtmlcontainer{ display: none; grid-area: 4 / 1 / 5 /2; border:2px solid black; overflow: auto; font-size: 30px;  height:150px; background-color:white; }
                #${name}LabelHelperNote {display:none; font-size: 12px; text-align:center;align-items:end; grid-area: 1 / 1 / 2 /2;height: 20px;  width: 300px; align-self:end;background-color:#eee;justify-content: center; }
                #${name}inputtypeselectorbarLabelButton {margin-top:0.5px;background-color: #d0eaf1;cursor: pointer; }
                button {font-family: dingbats;background-color:#d0eaf1;}
                @keyframes rotationbig {
                  from {
                    transform: rotate(359deg) scale(0.85);/*transform="rotate(45,32,32) scale(0.85) translate(5,5)"*/
                    transform-origin: 32px 32px;
                  }
                  to {
                    transform: rotate(0deg) scale(0.85);
                    transform-origin: 32px 32px;
                  }
                }

            </style>
            \<div id="${name}title" >
            \<div id="${name}loadinginfo">\Loading ideas...</div>
                    \<div id="${name}idea"  contenteditable="true"></div>
                    \<div id="${name}inputtypeselectorbar">
                          <button id="${name}inputtypeselectorbarLabelButton"  title="Label" type="button">&#10000;</button>
                          <!--<button id="${name}inputtypeselectorbarPlainTextButton"  title="Plain Text" type="button">&#128196;</button>
                          <button id="${name}inputtypeselectorbarImageButton" title="Image" type="button">&#128247;</button>
                          <button title="Audio" type="button">&#127911;</button>
                          <button title="Video" type="button">&#127909;</button>
                          <button title="Article" type="button">&#128240;</button>-->
                    </div>
                    \<div id="${name}inputbuttons" class="${name}inputbuttons-actionbar"></div>
                    \<div id="${name}inputhtmlcontainer" contenteditable="true"></div>
                    \<div id="${name}inputideaIcon">
                    <svg class="bi bi-pencil" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M13.293 3.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-9 9a1 1 0 01-.39.242l-3 1a1 1 0 01-1.266-1.265l1-3a1 1 0 01.242-.391l9-9zM14 4l2 2-9 9-3 1 1-3 9-9z" clip-rule="evenodd"/>
                      <path fill-rule="evenodd" d="M14.146 8.354l-2.5-2.5.708-.708 2.5 2.5-.708.708zM5 12v.5a.5.5 0 00.5.5H6v.5a.5.5 0 00.5.5H7v.5a.5.5 0 00.5.5H8v-1.5a.5.5 0 00-.5-.5H7v-.5a.5.5 0 00-.5-.5H5z" clip-rule="evenodd"/>
                    </svg>
                    <svg class="bi bi-search" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M12.442 12.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clip-rule="evenodd"/>
                      <path fill-rule="evenodd" d="M8.5 14a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM15 8.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clip-rule="evenodd"/>
                    </svg>\</div>
                    \<div id="${name}LabelHelperNote"> <i>Use up to 29 characters. Press enter to finish. </i>\</div>
            \</div>
                      `,
  objectDefs : `


  let currentidea = '0x0000000000000000000000000000000000000000000000000000000000000000'
  let isMainHidden = true;
  let isHidden = true;
  let isIconHidden = true;
  let pendamt = 0;
  let currentcontext = "${context}";
  let currentprospective = "${context}";
  let ancestorObj = {'0x0000000000000000000000000000000000000000000000000000000000000000':true}  // this object tracks the ancestors, used to prevent circular references, updated by setAncestors case, informed by context manager.
  let urlHexChunkList = [] // list that will contain hexified url chunks uf required.
  let protcontext // this will contain the protocol context if url required.
  let enterJustPressed = false;
  let buttonPressed = false;
  let valueSignalJustPressed = false;

  // on mouseout from the content box, hides icon to be removed.
  function ${name}_all_mouseout(ev){

      document.getElementById('${name}inputideaIcon').style.cssText += " display: none;"


      isIconHidden = true;
  }
  document.getElementById("${name}title").addEventListener("mouseout",${name}_all_mouseout);

  // on mouseout from the inputcontainer box, slides up box if mouseout direction is downwarnds
  function ${name}inputcontainer_mouseout(e){
     if ((!(document.getElementById('${name}idea') === document.activeElement))  ){//&& document.getElementById('${name}').style['z-index'] < 0
        let mousedownwards = (e.clientY > window.innerHeight - 420 + 174 +20) ? true : false;
        //if (mousedownwards) send({"jsonrpc":"2.0","method":"slideUpInput","params":{"to":["_"+"${context}" + "_"+"0x0000000000000000000000000000000000000000000000000000000000000000"],"from":"${name}"}});
      if (mousedownwards) document.getElementById('${name}inputtypeselectorbar').style.cssText += " display: none;"
      }

  }
  document.getElementById("${name}inputtypeselectorbar").addEventListener("mouseout",${name}inputcontainer_mouseout);



  // this will retrieve an item from the arweave blockweave, based on the context (in Arweave terminology). The sanitised html is only added if its hash is correct.
  async function ARgetter(lookupTx) {
          let tx = await arweave.transactions.get(lookupTx)
          let contenttype
          let data
          let config = {
                ALLOWED_TAGS: ["a", "article", "b", "blockquote", "br", "caption", "code", "del", "details", "div", "em", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "i", "ins", "kbd", "li", "main", "ol",  "p", "pre", "section", "span", "strike", "strong", "sub", "summary", "sup", "table",  "tbody", "td", "th", "thead", "tr", "u", "ul"], // only <P> and text nodes
                KEEP_CONTENT: false, // remove content from non-white-listed nodes too
                ADD_ATTR: ['oo'], // custom attributes
                USE_PROFILES: {html: true,mathMl: true, svg: true},
                ALLOWED_URI_REGEXP: ""
          }; //config for html sanitizer
          tx.contexts.forEach(context => {
              let key = context.get('name', {decode: true, string: true});
              let value = context.get('value', {decode: true, string: true});
              if (String(key)=='Content-Type'){
                  contenttype = value
              }
          });
          let r = new Rusha
          let responseHash
          let html
          switch (contenttype) {
                case "text/html":
                      data = tx.get('data',{decode:true})

                      responseHash = r.digestFromArrayBuffer(data)
                      idea = '0x545854000000000000000000'+String(responseHash)
                      html = tx.get('data', {decode: true, string: true})
                      break;
                default:
                      html = 'content-type not supported'
            }


            currentprospective = XORcontextidea(currentcontext,idea,distance)
            send({"jsonrpc": "2.0", "method": "createSVG", "params": {"context": currentcontext,"idea": idea,"prospective": currentprospective,"to":[txtToOOId("IconCreator")],"from":"${name}"},"id": "ICON" })
            document.getElementById("${name}idea").innerHTML = '';
            document.getElementById("${name}idea").innerHTML = DOMPurify.sanitize(html,config);

  }

  // Handler for input key presses.
  let initiatorIconTimeout
  async function ${name}inputfunc2(e){

    let val = document.getElementById('${name}idea').innerText
    if (e.keyCode == 13){ // enter keycode
                e.preventDefault()
                // in the not impossible event that the proposed prospective clashes with another in the layout, ask the user to adjust
                if (currentprospective in ancestorObj){
                          alert('This oo is already loaded, try another.')
                }
                else {
                          // enter has been pressed. create a new oo in the context, and put the cursor in the the input box of the child context (allows rapid insertion of oos)
                          enterJustPressed = true;
                          let newchildcontextid = '_' + metaooManagerProspective +'_'+XORcontextidea(metaooManagerProspective,currentprospective,metaoodistance);

                          // tells context manager to create a new oo based on the input value.
                          send({"jsonrpc":"2.0","method":"newIdea","params":{'prospective':currentprospective,"isForMeta":isMeta,"distance":distance,"to":[thisContextMan],"from":"${name}"}})
                          let rightlim = Number(document.getElementById("${name}").style.left.replace('px',''))//getBoundingClientRect()
                          let widtth = document.getElementById("${name}").getBoundingClientRect().width
                          await pause(0.1)
                          let leftpos = rightlim + widtth - 31;

                          // tells context curators to create a new context. tells the new context manager the distance and left position for layout.
                          send({"jsonrpc":"2.0","method":"setDistance","params":{"distance":Number(distance+1),"fromParent":true,"to":[newchildcontextid],"from":"${name}"}});
                          send({"jsonrpc":"2.0","method":"ShiftLeft","params":{"left":leftpos,"fromParent":true,"to":[newchildcontextid],"from":"${name}"}});
                          send({"jsonrpc":"2.0","method":"newContext","params":{'context':currentprospective,"isForMeta":isMeta,"left":leftpos,"to":[txtToOOId('contextCurator'),txtToOOId("filterCurator")],"from":"${name}"}})

                          //send({"jsonrpc":"2.0","method":"MOVEX","params":{'x':leftpos,"to":['_'+currentprospective+'_'+'0x0000000000000000000000000000000000000000000000000000000000000000'],"from":"${name}"}});
                          send({"jsonrpc":"2.0","method":"setCursorContext","params":{"to":['_'+currentprospective+'_'+'0x0000000000000000000000000000000000000000000000000000000000000000'],"from":"${name}"}});

                          document.getElementById('${name}idea').value=''

                          valueSignalJustPressed = true
                          send({"jsonrpc":"2.0","method":"ValueSignal","params":{"context":currentcontext,"prospective":currentprospective,"distance":distance,"amt": 10000000000000000,"to":[txtToOOId("pendingTx")],"from":"${name}"}});
                          send({"jsonrpc": "2.0", "method": "addtoContextPendingTotal", "params": {"amt":pendamt,"prospective":"${prospective}","context":currentcontext,"to":[thisContextMan],"from":"${name}"}});
                          await pause(0.1)

                          setTimeout(function () {
                            valueSignalJustPressed = false
                          }, 10);

                }

                // timeout the enter pressed flag
                setTimeout(function () {
                  enterJustPressed = false
                }, 500);

      }
      else{
              // if here then user is typing in a new idea.
              if (val.length == 0){
                //have to adjust css to get central vertical alignment, due to quirk of browsers
                document.getElementById("${name}idea").style.cssText += " line-height: 150px; display:table-cell;"
              }
              else if (val.length == 1){
                //have to adjust css to get central vertical alignment, due to quirk of browsers
                document.getElementById("${name}idea").style.cssText += " display:flex; line-height: unset;align-items:center;"
              }
              if (val.length >0 && val.length <=29){
                        // can handle no more than 29 chars
                        currentidea = hexifyString(String.raw\`\${val}\`.replace(\/(?:\\r\\n\|\\r\|\\n)/g, ''))  // remove superfluous line breaks
                        currentprospective = XORcontextidea(currentcontext,currentidea,distance)
                        send({"jsonrpc": "2.0", "method": "createSVG", "params": {"context": currentcontext,"idea": hexifyString(val),"prospective": currentprospective,"to":[txtToOOId("IconCreator")],"from":"${name}"},"id": "ICON" })
                        isHidden = false;
                        clearTimeout(initiatorIconTimeout);
                        initiatorIconTimeout = setTimeout(function () {
                         send({"jsonrpc": "2.0", "method": "requestInitiators", "params": {"context": currentcontext,"prospective": currentprospective,"idea":hexifyString(val),"to":[txtToOOId("web3wsManager")],"from":"${name}"},"id": "requestInitiators" })
                        }, 10);
                      }
                      else {
                        // user has reached character limit.
                        document.getElementById("${name}idea").innerText = val.slice(0,29);
                        document.getElementById("${name}idea").focus()
                        document.execCommand('selectAll', false, null);
                        document.getSelection().collapseToEnd();
                      }
            }
  }
document.getElementById("${name}idea").addEventListener("keyup", ${name}inputfunc2);

  // brings input box to front on context to text box.
  function ${name}inputContext(e){
        buttonPressed = true;
    send({"jsonrpc":"2.0","method":"gotoinput","params":{"prospective":"0x0000000000000000000000000000000000000000000000000000000000000000","to":[thisContextMan],"from":"${name}"}});
    document.getElementById("${name}idea").innerText = ''
    document.getElementById("${name}idea").focus();
    document.getElementById("${name}LabelHelperNote").style.cssText += " display: flex;"
    document.getElementById("${name}idea").style.cssText += "font-size:30px; vertical-align:middle;"
    document.getElementById('${name}inputtypeselectorbar').style.cssText += " display: none;"
    let buttoncontainer = document.getElementById("${name}inputbuttons").style.cssText += " display: none;"
    document.getElementById("${name}inputhtmlcontainer").style.cssText += " display: none;"

  setTimeout(function () {
      buttonPressed = false;
      }, 100)
  }
  document.getElementById("${name}inputtypeselectorbarLabelButton").addEventListener("click",${name}inputContext);



  // on context away from input, tells context manager to go back to the top idea.
 function ${name}inputContextout(e){

    if (!enterJustPressed){
        setTimeout(function () {
          if (!valueSignalJustPressed && !buttonPressed){
          send({"jsonrpc":"2.0","method":"gotoprevprospective","dontshowrear":true,"params":{"to":[thisContextMan],"from":"${name}"}});
        }
      }, 100);
    }
  }
  document.getElementById("${name}").addEventListener("focusout",${name}inputContextout);

/*  else if (e.target=="${name}inputtypeselectorbar" || document.getElementById("${name}inputtypeselectorbar").contains(e.target)){
    // clicked on content
    valueSignalJustPressed = true
  }*/


  // if user clicks outside input oo, go back to previous oo in the context
  function ${name}windowclick(e){

    if (document.getElementById("${name}").style['z-index'] != -1){ // only care about this click if the input is live
              if (e.target=="${name}_content" || document.getElementById("${name}_content").contains(e.target)){
                // clicked on content
                valueSignalJustPressed = true
              }

              else {
                // clicked outside content
                valueSignalJustPressed = false
                setTimeout(function () {
                  send({"jsonrpc":"2.0","method":"gotoprevprospective","params":{"dontshowrear":true,"to":[thisContextMan],"from":"${name}"}});
              }, 100);
              }
    }

  }
  window.addEventListener("click",${name}windowclick);


  function ${name}_onresize(){
    // set position when window resizes.
    let y = window.innerHeight-420;
    send({"jsonrpc":"2.0","method":"SETY","params":{"y":y,"to":["${name}"],"from":"${name}"}})
  }
  window.addEventListener("resize",${name}_onresize);


  let hasChildren = false;
  let isTop = false;
  let hasFilter = false;

  // this function sets a flag to indicate if this oo is presently at the front of the layout.
  function setTop(val){
    if (val){
      isTop = true;
    }
    else {
      isTop = false;
    }
  }

  // toggles expand or collapse of content onclick of left half of icon. Informs context manager.
  function ${name}_left_click(e){
            let tel = document.getElementById('${name}_content');
            let relX = e.clientX - el.getBoundingClientRect().left
            let relY = e.clientY - el.getBoundingClientRect().top
            isHidden = false;
            if(tel.style.display=='none' || tel.style.display==' none'){
                send({"jsonrpc":"2.0","method":"CLICK-Xpand","params":{"to":[thisContextMan],"from":"${name}"}})
            }
            else{
                send({"jsonrpc":"2.0","method":"CLICK-Collapse","params":{"to":[thisContextMan],"from":"${name}"}})
            }
  }
  document.getElementById("${name}_left").addEventListener("click",${name}_left_click);


  // toggles expand or collapse of content onclick of left half of icon. Informs context manager.
  function ${name}_right_click(e){
            // clicking on the right side of the icon should mimc the action when the user presses enter - an new oo is spawned under this context, and cursor context is passed to the new input idea in the child.
            // in the not impossible event that the proposed prospective clashes with another in the layout, ask the user to adjust
            if (currentprospective in ancestorObj){
                //alert('Cannot go into this context as already exists elsewhere in this session.')
            }
            else {
              let newchildcontextid = '_' + metaooManagerProspective +'_'+XORcontextidea(metaooManagerProspective,currentprospective,metaoodistance);
              let leftpos = document.getElementById("${name}").getBoundingClientRect().right - 45;
              send({"jsonrpc":"2.0","method":"newIdea","params":{'prospective':currentprospective,"isForMeta":isMeta,"distance":distance,"to":[thisContextMan],"from":"${name}"}})
              send({"jsonrpc":"2.0","method":"setDistance","params":{"distance":Number(distance+1),"fromParent":true,"to":[newchildcontextid],"from":"${name}"}});
              send({"jsonrpc":"2.0","method":"ShiftLeft","params":{"left":leftpos,"fromParent":true,"to":[newchildcontextid],"from":"${name}"}});
              send({"jsonrpc":"2.0","method":"newContext","params":{'context':currentprospective,"isForMeta":true,"to":[txtToOOId('contextCurator'),txtToOOId("filterCurator")],"from":"${name}"}})
              setTimeout(function () {
                  send({"jsonrpc":"2.0","method":"MOVEX","params":{'x':leftpos,"to":['_'+currentprospective+'_'+'0x0000000000000000000000000000000000000000000000000000000000000000'],"from":"${name}"}});
                  send({"jsonrpc":"2.0","method":"ShiftLeft","params":{"left":leftpos,"fromParent":true,"to":[newchildcontextid],"from":"${name}"}});
              }, 300);
              send({"jsonrpc":"2.0","method":"setCursorContext","params":{"to":['_'+currentprospective+'_'+'0x0000000000000000000000000000000000000000000000000000000000000000'],"from":"${name}"}})
              send({"jsonrpc":"2.0","method":"MOVEX","params":{'x':leftpos,"to":['_'+currentprospective+'_'+'0x0000000000000000000000000000000000000000000000000000000000000000'],"from":"${name}"}});
              document.getElementById('${name}input').value=''
              document.getElementById("${name}idea").innerHTML = \`</b> <br>\`
              currentprospective = XORcontextidea(currentcontext,hexifyString("0x0000000000000000000000000000000000000000000000000000000000000000"),distance)
              send({"jsonrpc": "2.0", "method": "createSVG", "params": {"context": currentcontext,"idea": "0x0000000000000000000000000000000000000000000000000000000000000000","prospective": currentprospective,"to":[txtToOOId("IconCreator")],"from":"${name}"},"id": "ICON" })
          }

          // This last part of the function makes the right prospective icon spin for 10 seconds.
          let ccel = el.getElementsByClassName('prospectiveiconparent')[0];
          let ccelchild = ccel.childNodes[2];
          ccelchild.style.cssText = "animation: rotation 2s infinite linear;";

          setTimeout(function () {
              ccelchild.style.cssText = "animation: none;";
            }, 10000);
    }
  document.getElementById("${name}_right").addEventListener("click",${name}_right_click);


let ccel
let ccelchild
let ccelchilda
let ccelchildb
el.style['z-index'] = "1";


setTimeout(function () {
       document.getElementById("${name}_leftSignalMask").style.cssText += "display:grid;"
       document.getElementById("${name}_rightSignalMask").style.cssText += "display:grid;"
}, 2000);



  `,
  RESULTcases : ``
                    ,
  METHODcases : `
                  /*
                      setContext:     sets the context and request new icon from icon creator oo
                      setCursorContext:    makes sure everyidea in the input box is visible and puts focus in input box.
                      shiftBackAsIdea   Used to set the position of this oo in the layout.
                      LOADINGSTATE  puts this into the loading state, with css animations, used to cover up layout whilst loading
                      CLEARLOADINGSTATE: clears the loading state, puts back to base state.
                      setAncestors: give this an object containing its ancestors so that circular referencing is avoided.
                      setDistanceAsIdea:  Used to set the distance of this oo.
                      distance was incorrectly initialised (e.g. due to msg dropping, or error else where)
                      setMetaStatus: tells this oo whether or not it's in the meta layout or the base.
                      SETTOP: notifies this oo that it's at the front of the layout
                      shiftBackAsIdea: Used to set the position of this oo in the layout.

                  */

                    case 'slideUpInput':
                      //document.getElementById('${name}inputcontainer').style.cssText += ' top: 0px';
                      document.getElementById('${name}inputtypeselectorbar').style.cssText += " display: none;"
                    break;

                    case 'slideDownInput':
                      //document.getElementById('${name}inputcontainer').style.cssText += ' top: 46px';
                      document.getElementById('${name}inputtypeselectorbar').style.cssText += " display: flex;"
                    break;

                    case 'setContext':
                      currentcontext = msg.params.context;
                      send({"jsonrpc": "2.0", "method": "createSVG", "params": {"context": currentcontext,"idea": currentidea,"prospective": XORcontextidea(currentcontext,currentidea,distance),"to":[txtToOOId("IconCreator")],"from":"${name}"},"id": "ICON" })
                    break;

                    case 'setCursorContext':
                            //makes sure everyidea in the input box is visible and puts focus in input box.
                            document.getElementById("${name}idea").focus();
                            document.getElementById('${name}_content').style.cssText += ' display:grid; ';
                            document.getElementById('${name}_left').style.cssText += ' display:block';
                            document.getElementById('${name}_right').style.cssText += ' display:block';
                            document.getElementById('${name}_upFlagsL').style.cssText += ' display:grid';
                            setTimeout(function () {
                              document.getElementById("${name}idea").focus();

                          }, 100);
                    break;

                    case "shiftBackAsIdea":
                            //Used to set the position of this oo in the layout.
                            // relay MOVEYZ to self
                            send({"jsonrpc":"2.0","method":"MOVEXYZ","params":{"x":msg.params.x,"y":window.innerHeight - 420,"z":0,"to":["${name}"],"from":"${name}"}});
                            //if z <0 then check if has children
                            if (msg.params.z < 0){
                                if (hasChildren){
                                  let rightpos = el.getBoundingClientRect().right;
                                  send({"jsonrpc":"2.0","method":"shiftBack","params":{"x":String(rightpos),"y":msg.params.y,"z":msg.params.z,"to":["_"+metaooManagerProspective + "_"+XORcontextidea(metaooManagerProspective,currentprospective,metaoodistance)],"from":"${name}"}});
                                }
                                send({"jsonrpc":"2.0","method":"SETZIND","params":{"zind":-1,"to":["${name}"],"from":"${name}"}});
                              }
                              else if (msg.params.z == 0){
                                //  send({"jsonrpc":"2.0","method":"atFront","params":{"to":["_"+metaooManagerProspective + "_"+ XORcontextidea(metaooManagerProspective,currentprospective,metaoodistance)],"from":"${name}"}});
                                  send({"jsonrpc":"2.0","method":"SETZIND","params":{"zind":1,"to":["${name}"],"from":"${name}"}});
                              }
                            //if has children, get right dim of self and inform context manager to shift back.
                    break;


                    case "LOADINGSTATE":
                            //puts this into the loading state, with css animations, used to cover up layout whilst loading
                             document.getElementById("${name}loadinginfo").style.cssText += ' display:grid;'
                             document.getElementById("${name}").style.cssText += ' display:grid; z-index: 2;'
                             try {
                                   ccelchilda = el.getElementsByClassName('bigcirc')[0];
                                   ccelchildb = el.getElementsByClassName('bigcirc')[1];

                                   ccelchilda.style.cssText = "animation: rotationbig 2s infinite linear;";
                                   ccelchildb.style.cssText = "animation: rotationbig 2s infinite linear;";

                                   ccel = el.getElementsByClassName('contexticonparent')[0];

                                   ccelchild = ccel.childNodes[2];
                                   ccelchild.style.cssText = "animation: rotation 2s infinite linear;";
                             }
                             catch{}
                    break;


                    case "CLEARLOADINGSTATE":
                              //clears the loading state, puts back to base state.
                              document.getElementById("${name}loadinginfo").style.cssText += ' display:none;'
                              el.style['z-index'] = "-1"
                              try {
                              ccelchilda = el.getElementsByClassName('bigcirc')[0];
                              ccelchildb = el.getElementsByClassName('bigcirc')[1];
                              ccelchilda.style.cssText = "animation: none;";
                              ccelchildb.style.cssText = "animation: none;";
                              ccelchild.style.cssText = "animation: none;";
                            }
                            catch{}
                    break;

                    case "setAncestors":
                            ancestorObj = msg.params.ancestorObj
                    break;

                    case 'setDistanceAsIdea':
                          //Used to set the distance of this oo.
                          distance = msg.params.distance;

                    break;

                    case 'setMetaStatus':
                          //tells this oo whether or not it's in the meta layout or the base.
                          if (msg.params.isForMeta){
                                  isMeta = true
                                  el.classList.add('meta');
                                  el.classList.remove('base');
                          }
                          else {
                                  isMeta = false;
                                  el.classList.add('base');
                                  el.classList.remove('meta');
                          }
                    break;

                      `,
  STARTUPmessages : `[]`,
  context: context,
  prospective: prospective

}

return base_template(inputidea_outerTemplateObj);
}

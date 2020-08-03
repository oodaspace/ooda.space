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
let contentGetter_proc = function(context,prospective,distance=1,name="contentGetter",_class='meta'){
let description = `Interprets a 256bit word (an idea) and sends back html`
let contentGetter_outerTemplateObj = {
  name: `${name}`,
  distance: `${distance}`,
  class: `${_class}`,
  content: `<style>
                #${name}title {display:flex;flex-direction:column;max-height: 125px;font-family:lucida console;word-break: break-all;}
                #${name}toscreen {overflow: scroll;scrollbar-width: none;}
                #${name}overlayBottom {    font-size: 12px;  text-align: center; align-items: end;   padding: 4px; width: 300px; align-self: end;  background-color: #eee; justify-content: center;}
            </style>
            \<div id="${name}title">
                    <div id="${name}overlayBottom"> <i>\<b>contentGetter\</b> </i></div>
                    \<div> ${description}\</div>
                    \<div> \<b>context: \</b>${context}\</div>
                    \<div> \<b>prospective: \</b>${prospective}\</div>
                    \<div> \<b>distance: \</b>${distance}\</div>
                    \<div> \<b>idea: \</b>${XORcontextprospective(context,prospective,distance)}\</div>
                    \<div> \<b>idea (UTF8): \</b>${stringifyHex(XORcontextprospective(context,prospective,distance))}\</div>

            \</div>
                      `,
  objectDefs : `

  /********************************************************************************/ // thissection handles events for this oo's representation in the meta layer

  let hasChildren = false
  let isTop = false;
  function setTop(val){
    if (val){
      isTop = true;
    }
    else {
      isTop = false;
    }
  }

  function ${name}_left_click(){
    let tel = document.getElementById('${name}_content');
    let ymsg
    if(tel.style.display=='none'){
        tel.style.cssText += ' display:grid;'
        let xpmsg = {"jsonrpc":"2.0","method":"XPANDALL","params":{"toggle":"true","to":["_"+String(hexifyString('context'))+"_"+String(XORcontextprospective(hexifyString('context'),context))],"from":"${name}"}};
        send(xpmsg);
      }
    else{
        tel.style.cssText += ' display:none;'
        let collmsg = {"jsonrpc":"2.0","method":"COLLAPSEALL","params":{"toggle":"true","to":["_"+String(hexifyString('context'))+"_"+String(XORcontextprospective(hexifyString('context'),context))],"from":"${name}"}};
        send(collmsg);
    }
  }
  document.getElementById("${name}_left").addEventListener("click",${name}_left_click);

  function ${name}_content_hover(e){
      if (!(isHidden)){
        send({"jsonrpc":"2.0","method":"HOVERING","params":{"to":[parentcontextManId],"from":"${name}"}})
        //send({"jsonrpc":"2.0","method":"UPDATEPOSITIONS","params":{"to":[parentcontextManId],"from":"${name}"}});
        //send({"jsonrpc":"2.0","method":"SHOWALL","params":{context:"${context}","to":[parentcontextManId],"from":"${name}"}})
      }
  }
  document.getElementById("${name}_content").addEventListener("mouseover",${name}_content_hover);


  send({"jsonrpc":"2.0","method":"addideatoMetaManContext","params":{"prospective":"${prospective}","fromParent":true,"to":["_"+ metaooManagerProspective + "_" + XORcontextidea(metaooManagerProspective,metaooManagerProspective,metaoodistance)],"from":"${name}"}});


  let parentcontextManId = thisContextMan
  function ${name}_scroll(e){
    if (e.deltaY >0){
      send({"jsonrpc":"2.0","method":"ShiftUp","params":{context:"${context}","to":[parentcontextManId],"from":"${name}"}});
    }
    else {
      send({"jsonrpc":"2.0","method":"ShiftDown","params":{context:"${context}","to":[parentcontextManId],"from":"${name}"}});
    }
  }
  document.getElementById("${name}").addEventListener("wheel",${name}_scroll);

  function ${name}_content_mouseout(e){
      if (!(isHidden)){
        send({"jsonrpc":"2.0","method":"MOUSEOUT","params":{context:"${context}","to":[parentcontextManId],"from":"${name}"}})
      }
  }
  document.getElementById("${name}_content").addEventListener("mouseout",${name}_content_mouseout);

  /********************************************************************************/


  let urlhex = "0x0000000055524c00000000000000000000000000000000000000000000000000";
  let https = "0x0000000048545450530000000000000000000000000000000000000000000000";
  let http = "0x0000000048545450000000000000000000000000000000000000000000000000";
  let hashToHtmlMap = {}
  let html

  let URLs = {}

  let config = {
        ALLOWED_TAGS: ["a", "article", "b", "blockquote", "br", "caption", "code", "del", "details", "div", "em", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "i", "ins", "kbd", "li", "main", "ol",  "p", "pre", "section", "span", "strike", "strong", "sub", "summary", "sup", "table",  "tbody", "td", "th", "thead", "tr", "u", "ul"], // only <P> and text nodes
        KEEP_CONTENT: false, // remove content from non-white-listed nodes too
        ADD_ATTR: ['oo'], // permit kitty-litter attributes
        USE_PROFILES: {html: true,mathMl: true, svg: true},
        ALLOWED_URI_REGEXP: ""
  }; //config for html sanitizer

  `,
  RESULTcases : ``
                    ,
  METHODcases : `
            case 'INTERPRET':
                // A request to find some html based on a 256bit word. First an atempt is made to interpret it as UTF8 text. If that is unsuccessful, the arweave blockweave is searched for it (interpretted as html).
                let txt = stringifyHex(msg.params.idea);
                if (txt.length <= 30){
                  send({"jsonrpc": "2.0", "result": {"html": txt,"fmt":"CHR","to":[msg.params.from], "from": "${name}"}, "id": msg.id});
                }
                else {
                      switch (msg.params.idea.slice(0,8)) {
                              case "0x4d4544":
                                    // searches arweave blockweave for the idea. to be included once licence MIT
                                  /*  let txids = await arweave.arql({
                                    op: "equals",
                                      expr1: "idea",
                                      expr2: msg.params.idea
                                    })
                                    let tx = await arweave.transactions.get(txids[0])
                                    let data = DOMPurify.sanitize(tx.get('data',{decode:true,string:true}),config);
                                    send({"jsonrpc": "2.0", "result": {"html": data,"fmt":"CHR","to":[msg.params.from], "from": "${name}"}, "id": msg.id});*/
                        break;
                        default:
                      }
                }
                break;

                /********************************************************************************/ //handles layout in meta layer
                 case "shiftBackAsIdea":
                        // relay MOVEYZ to self
                        send({"jsonrpc":"2.0","method":"MOVEXYZ","params":{"x":msg.params.x,"y":msg.params.y,"z":msg.params.z,"to":["${name}"],"from":"${name}"}});
                        //if z <0 then check if has children
                        if (msg.params.z < 0){
                                if (hasChildren){
                                  let rightpos = el.getBoundingClientRect().right;
                                  send({"jsonrpc":"2.0","method":"shiftBack","params":{"x":String(rightpos),"y":msg.params.y,"z":msg.params.z,"to":["_"+String(hexifyString('context'))+"_"+String(XORcontextidea(hexifyString('context'),"${prospective}"),1)],"from":"${name}"}});
                                }
                                send({"jsonrpc": "2.0", "method": "HIDEADDRESSES", "params": {"to":["${name}"],"from":"${name}"}})
                                setTop(false)
                        }
                        else if (msg.params.z == 0){
                                setTop(true)
                                send({"jsonrpc": "2.0", "method": "SHOWADDRESSES", "params": {"to":["${name}"],"from":"${name}"}})
                                if (hasChildren){
                                  send({"jsonrpc":"2.0","method":"atFront","params":{"to":["_"+String(hexifyString('context'))+"_"+String(XORcontextidea(hexifyString('context'),"${prospective}"),1)],"from":"${name}"}});
                                }
                        }
                    break;

                    case 'setDistanceAsIdea':
                        if (distance != msg.params.distance){
                              distance = msg.params.distance;
                              send({"jsonrpc":"2.0","method":"INTERPRET","params":{"idea":XORcontextprospective(context,prospective,distance),"context":"${context}","prospective":"${prospective}","to":[txtToOOId("contentGetter")],"from":"${name}"},"id":"INTERPRET"});
                        }
                    break;
                    /********************************************************************************/
                      `,
  STARTUPmessages : `[]`,
  context:   context,
  prospective:  prospective

}
    return base_template(contentGetter_outerTemplateObj);
}

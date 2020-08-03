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
let contextCurator_proc = function(context,prospective,distance,name="contextCurator",_class='meta'){
let description = `Context curator manages all the contexts in the document`
let contextCurator_outerTemplateObj = {
  name: `${name}`,
  distance: `${distance}`,
  class: `${_class}`,
  content: `<style>
                #${name}title {display:grid;grid-template: auto auto / auto;max-height: 125px;}
                #${name}toscreen {overflow: scroll;scrollbar-width: none;}
            </style>
            \<div id="${name}title">
                    \<div> \<b>${name}: \</b>${description}\</div>
                    \<div id="${name}toscreen">\</div>
            \</div>
                      `,
  objectDefs : `

                let contextObj = {}; // keeps a record of the contexts that exist in the document
                let filterColours = {}




                /********************************************************************************/ //handles positioning/events in the metalayout

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

                function ${name}_content_hover(e){

                    send({"jsonrpc":"2.0","method":"setLayoutState","params":{"setting":"isFixed","flag":true,"to":[parentcontextManId],"from":"${name}"}})
                    if (!(isHidden)){
                      send({"jsonrpc":"2.0","method":"HOVERING","params":{"to":[parentcontextManId],"from":"${name}"}})
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

                function ${name}_left_click(){
                  let tel = document.getElementById('${name}_content');
                  let ymsg
                  if(tel.style.display=='none'){
                      tel.style.cssText += ' display:grid;'
                    }
                  else{
                      tel.style.cssText += ' display:none;'
                  }
                }
                document.getElementById("${name}_left").addEventListener("click",${name}_left_click);

                /********************************************************************************/


    let contextlabel
    let contextname


    // Note the startup messages for this, the context curator oo, instruct new base and meta contexts 0x0000000000000000000000000000000000000000000000000000000000000000 and 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff

    send({"jsonrpc":"2.0","method":"newContext","params":{"context":"0x0000000000000000000000000000000000000000000000000000000000000000","isForMeta":false,"to":[txtToOOId("contextCurator"),txtToOOId("filterCurator")],"from":"${name}"}})

    send({"jsonrpc":"2.0","method":"newContext","params":{"context":"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff","isForMeta":true,"to":[txtToOOId("contextCurator"),txtToOOId("filterCurator")],"from":"${name}"}})

    let rootcontextMan = "_"+metaooManagerProspective+"_"+XORcontextidea(metaooManagerProspective,"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",metaoodistance)
    let thiscontext = XORcontextidea("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",hexifyString('this'))


    send({"jsonrpc":"2.0","method":"newFilterForContext","params":{"context":"0x0000000000000000000000000000000000000000000000000000000000000000","to":[txtToOOId("web3wsManager")],"from":"${name}"}})
    send({"jsonrpc":"2.0","method":"newFilterForContext","params":{"context":"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff","to":[txtToOOId("web3wsManager")],"from":"${name}"}})
    send({"jsonrpc":"2.0","method":"newFilterForContext","params":{"context":thiscontext,"to":[txtToOOId("web3wsManager")],"from":"${name}"}})

                `,
  RESULTcases : ``
                    ,
  METHODcases : ` /*

                  newContext:  Informs the context curator of a new context. Each of the known context managers is informed. A new context manager oo is then spawned for the new context. and its meta/base status in updated
                                params:
                                    context: the context to add
                                    isMeta does the context manage ideas in the base layer [false] or meta [true]
                  Signal: a new signal containing revised information for the weighting of value signals from a given filter. This is forwarded to the relevant context manager.
                                params:
                                  context: the context to which the revised signal weighting is sent
                                  isMeta: is the filter for the base layer [true], or meta.
                  setColours: update the filter colour scheme (informs spawner oo, for new oos) and the existing context managers.
                                params:
                                    filterColours: a list of the colours.
                  moveIdeasZ *depreciated* tells the context mangers to move all ideas by z

                  */


                  case 'newContext':
                    // Informs the context curator (this oo) of a new context. Each of the known context managers is informed. A new context manager oo is then spawned for the new context. and its meta/base status in updated
                    for (let t in contextObj){
                        send({"jsonrpc":"2.0","method":"newContext","params":{"context":String(msg.params.context),"to":[contextObj[t].contextMan],"from":"${name}"}});
                    }
                    if (!(msg.params.context in contextObj)){
                            contextObj[msg.params.context] = {};
                            //spawn context manager...
                            contextlabel = XORcontextidea(metaooManagerProspective,String(msg.params.context),metaoodistance)
                            contextname = '_'+metaooManagerProspective+'_'+contextlabel;
                            send({"jsonrpc":"2.0","method":"spawnContextManager","params":{"context":metaooManagerProspective,"prospective":contextlabel,"left":msg.params.left,"distance":metaoodistance,"name":contextname,"to":[txtToOOId('Spawner')],"from":"${name}___1"}})
                            if (msg.params.isForMeta){
                                    send({"jsonrpc":"2.0","method":"setMetaManStatus","params":{"isForMeta":true,"left":msg.params.left,"to":[contextname],"from":"${name}"}})
                            }
                            else {
                                    send({"jsonrpc":"2.0","method":"setMetaManStatus","params":{"isForMeta":false,"left":msg.params.left,"to":[contextname],"from":"${name}"}})
                            }
                            // add the new context to the contextcurators record of existing contexts.
                            contextObj[msg.params.context]['contextMan'] = contextname
                            // inform the new context manager of the filter colour scheme.
                            send({"jsonrpc":"2.0","method":"setColours","params":{"filterColours":filterColours,"to":[contextname],"from":"${name}"}});

                    }
                    // inform context managers of all existing contexts.
                    for (let t in contextObj){
                        send({"jsonrpc":"2.0","method":"TAGS","params":{"contexts":contextObj,"to":[contextObj[t].contextMan],"from":"${name}"}});
                    }
                    break;

                    case 'SignalForContextCurator':
                          //a new signal containing revised information for the weighting of value signals from a given filter. This is forwarded to the relevant context manager.
                          if (!(msg.params.context in contextObj)){
                              send({"jsonrpc":"2.0","method":"newContext","params":{"group":"originBlkchnEvent","context":String(msg.params.context),"to":['_'+metaooManagerProspective+'_'+XORcontextidea(metaooManagerProspective,String(msg.params.context),metaoodistance)],"from":"${name}"}});
                          }
                          msg.params.to = ['_'+metaooManagerProspective+'_'+XORcontextidea(metaooManagerProspective,String(msg.params.context),metaoodistance)]
                          msg.params.from = name
                          msg.method = "Signal"
                          send(msg)

                    break;

                    case 'setColours':
                          // update the filter colour scheme (informs spawner oo, for new oos) and the existing context managers.
                          filterColours = msg.params.filterColours
                          send({"jsonrpc":"2.0","method":"setColours","params":{"filterColours":filterColours,"to":[txtToOOId("Spawner")],"from":"${name}"}});
                          for (let t in contextObj){
                              send({"jsonrpc":"2.0","method":"setColours","params":{"filterColours":filterColours,"to":[contextObj[t].contextMan],"from":"${name}"}});
                          }
                    break;


                    /********************************************************************************/ //handles positioning in the metalayout

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
                            //if has children, get right dim of self and inform context manager to shift back.

                        break;
                        case 'setDepthAsIdea':
                            if (distance != msg.params.distance){
                                  distance = msg.params.distance;
                                  send({"jsonrpc":"2.0","method":"INTERPRET","params":{"idea":XORcontextprospective(context,prospective,distance),"context":"${context}","prospective":"${prospective}","to":[txtToOOId("contentGetter")],"from":"${name}"},"id":"INTERPRET"});
                            }
                        break;


                          /********************************************************************************/
                      `,
  STARTUPmessages : `[]`,
  context: context,
  prospective: prospective

}
return base_template(contextCurator_outerTemplateObj);
}

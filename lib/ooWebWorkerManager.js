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
let webWorker_proc = function(context,prospective,distance,name="webWorker",_class='meta'){
let description = `manages webWorkers for other oos to send work to be done in background`
let webWorker_outerTemplateObj = {
  name: `${name}`,
  distance: `${distance}`,
  class: `${_class}`,
  content: `<style>
                #${name}title {display:flex;flex-direction:column;max-height: 125px;font-family:lucida console;word-break: break-all;}
                #${name}toscreen {overflow: scroll;scrollbar-width: none;}
                #${name}overlayBottom {    font-size: 12px;  text-align: center; align-items: end;   padding: 4px; width: 300px; align-self: end;  background-color: #eee; justify-content: center;}
            </style>
            \<div id="${name}title">
                    <div id="${name}overlayBottom"> <i>\<b>WebWorkerManager\</b> </i></div>
                    \<div> ${description}\</div>
                    \<div> \<b>context: \</b>${context}\</div>
                    \<div> \<b>prospective: \</b>${prospective}\</div>
                    \<div> \<b>distance: \</b>${distance}\</div>
                    \<div> \<b>idea: \</b>${XORcontextprospective(context,prospective,distance)}\</div>
                    \<div> \<b>idea (UTF8): \</b>${stringifyHex(XORcontextprospective(context,prospective,distance))}\</div>

            \</div> `,
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

  function ${name}_content_hover(e){
      send({"jsonrpc":"2.0","method":"setLayoutState","params":{"setting":"isFixed","flag":true,"to":[parentcontextManId],"from":"${name}"}})
      if (!(isHidden)){
          send({"jsonrpc":"2.0","method":"HOVERING","params":{"to":[parentcontextManId],"from":"${name}"}})
      }
  }
  document.getElementById("${name}_content").addEventListener("mouseover",${name}_content_hover);

  // this puts this in the meta layout under the metaooManagerProspective
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

    // get number of cores on user's system
    let noWWs = navigator.hardwareConcurrency
    WebWorkerList = []

                for (let i=0;i<noWWs;i++){
                                    //prepare URLs for libraries that the webworkers need to access.
                                    let f = await fetch('lib/biginteger.min.js')
                                    let txt = await f.text()
                                    let bigIntURL = URL.createObjectURL(new Blob([txt]))

                                    f = await fetch('lib/util_web3v2.js')
                                    txt = await f.text()
                                    let utilsURL = URL.createObjectURL(new Blob([txt]))

                                    /* This function decants a list of objects into a list of function definitions so that it can be passed to a webworker*/
                                    function getMethods(objs) {
                                          var result = 'let web3 = { utils: {';
                                          for (let i=0;i<objs.length;i++){
                                                    let obj = objs[i]
                                                    let nokeys = 0
                                                    Object.keys(obj).forEach(id=>{if(typeof(obj[id]) == "function"){nokeys++}})
                                                    let j = 0;
                                                            for (var id in obj) {
                                                              try {
                                                                      if (typeof(obj[id]) == "function") {
                                                                              if (j != nokeys-1){
                                                                                result += id + " : " + obj[id].toString() + ',';
                                                                              }
                                                                              else {
                                                                                result += id + " : " + obj[id].toString();
                                                                              }
                                                                              j++;
                                                                      }
                                                              } catch (err) {

                                                              }
                                                      }
                                              }
                                              result += '}}'
                                          return result;
                                    }

                                    //prepare to pass in utils lib to webworker.
                                    let w3utils = getMethods([web3.utils])
                                    web3URL = URL.createObjectURL(new Blob([w3utils]));

                                    WebWorkerList.push(new Worker(URL.createObjectURL(new Blob([\`
                                        let window = {}
                                        //import scripts so webworker has access to them.
                                        self.importScripts("\${bigIntURL}","\${utilsURL}","\${web3URL}");//,

                                        onmessage = function(e) {

                                                  switch (e.data[0]) {
                                                              case 'DOWORK':

                                                                    // the message must include a function definition, "func", and parameters to pass to it. This initialises the func.
                                                                    let func = new Function (e.data[1][0],e.data[1][1]);

                                                                    // run func
                                                                    let output  = func(e.data[1][2][0],e.data[1][2][1])

                                                                    // define output vars and output.
                                                                    let outputObj = output[0];
                                                                    let outMsgs = output[1];
                                                                    let name = output[2]
                                                                    postMessage([outputObj,outMsgs,name])
                                                        break;
                                                    default:

                                                  }//end of switch
                                          }//end of onmessage
                                    \`])  )  )  );

                                    // handle the outputs from the webWorker (a list of messages to send - the are iterated through and sent).
                                    WebWorkerList[i].onmessage = function(e){
                                          send({"jsonrpc": "2.0", "result": {"resultObj": e.data[0],"to":[e.data[2]], "from": "${name}"}, "id": "DOWORK"})
                                          let outMsgs = e.data[1]
                                          outMsgs.forEach(async function(msg){
                                                send(msg);
                                          })
                                    }
                  }

        let currentWorker = 0;
  `,
  RESULTcases : ``,
  METHODcases : `
          case 'DOWORK':
                // Sends the work (params.data) to the web worker. The work includes a function definition which the webworker interprets.
                WebWorkerList[currentWorker].postMessage(['DOWORK',msg.params.data]);
                currentWorker++;
                if (currentWorker >= noWWs){
                    currentWorker=0;
                }
          break;

          /********************************************************************************/ //handles layout positioning in meta layer.

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

            case 'setDistanceAsIdea':
                if (distance != msg.params.distance){
                      distance = msg.params.distance;
                      send({"jsonrpc":"2.0","method":"INTERPRET","params":{"idea":XORcontextprospective(context,prospective,distance),"context":"${context}","prospective":"${prospective}","to":[txtToOOId("contentGetter")],"from":"${name}"},"id":"INTERPRET"});
                    }

            break;

            /********************************************************************************/

  `,
  STARTUPmessages : `[{"jsonrpc": "2.0", "method": "HIDEADDRESSES", "params": {"to":["${name}"],"from":"${name}"}}]`,
  context: context,
  prospective: prospective

}

return base_template(webWorker_outerTemplateObj);
}

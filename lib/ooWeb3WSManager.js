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
let web3wsManager_proc = function(context,prospective,distance,name="web3wsManager",_class='meta'){
let description = `Manages web3 webSocket, installs filters to ETH node, forwards logs to logSorter`
let web3wsManager_outerTemplateObj = {
  name: `${name}`,
  distance: `${distance}`,
  class: `${_class}`,
  content: `<style>
                #${name}title {display:flex;flex-direction:column;max-height: 125px;font-family:lucida console;word-break: break-all;}
                #${name}toscreen {overflow: scroll;scrollbar-width: none;}
                #${name}overlayBottom {    font-size: 12px;  text-align: center; align-items: end;   padding: 4px; width: 300px; align-self: end;  background-color: #eee; justify-content: center;}
            </style>
            \<div id="${name}title">
                    <div id="${name}overlayBottom"> <i>\<b>web3wsManager\</b> </i></div>
                    \<div> ${description}\</div>
                    \<div> \<b>context: \</b>${context}\</div>
                    \<div> \<b>prospective: \</b>${prospective}\</div>
                    \<div> \<b>distance: \</b>${distance}\</div>
                    \<div> \<b>idea: \</b>${XORcontextprospective(context,prospective,distance)}\</div>
                    \<div> \<b>idea (UTF8): \</b>${stringifyHex(XORcontextprospective(context,prospective,distance))}\</div>

            \</div>
                      `,
  objectDefs : `let toscreen = document.getElementById("${name}toscreen");
  function ${name}_left_mousedown(e){ document.onmouseup = () => {
                                    document.onmouseup = null;
                                    document.onmousemove = null;
                                  }
                                  document.onmousemove = (e)=>{
                                    let xnew = e.clientX;
                                    let ynew = e.clientY;

                                    el.style.top = \`\${ynew}px\`;
                                    el.style.left = \`\${xnew}px\`;
                                  }
                              }

  document.getElementById("${name}_left").addEventListener("mousedown", ${name}_left_mousedown);



  //create new Websocket, connect to ethereum node
  let webSocket = new WebSocket("wss://eth.ooda.space/b07ac7a46d0d70b8cb01159cf2dd30b0d444c967/");
  let webSocketReady = false;
  let pollDelay = 1000;
  let refresh = false;
  let element;
  let filterList = []
  let msgq = []

  // sends an input message to the Ethereum node via the websocket, if the socket is ready.
  function wsSend(msg){
    if (webSocket.readyState !== 1) {
      msgq.push(msg)
    } else {
      webSocket.send(msg)
    }
  }

  // when the websocket is ready set the flag and send queued messages.
  webSocket.onopen = async function(event){
    webSocketReady = true;
    while (msgq.length > 0) {
      webSocket.send(msgq.pop())
    }
  }

    // clear ready flag if websocket closed (shouldn't get here in normal oepration)
    webSocket.onclose = async function(event){
      webSocketReady = false;
    }
    webSocket.onerror = async function(event){
      webSocketReady = false;
    }

    // listens for messages from the ETH node, takes conditional action based on the content. Detects if the message is confirmation of new filter and adds its id to the list if so. Else calls the graph update functions with the filter info.
    webSocket.onmessage = async function (msg) {
      inMsg = JSON.parse(msg.data);

  		if(!('error' in inMsg)){
        // uncomment this to see a stream of messages from the node in the oo's content box (meta mode)
        //toscreen.innerHTML +=\`\${new Date().toLocaleTimeString()}: Got \${inMsg.result.length} logs\<br>\`
        if (inMsg.id == "new"){
          // test if new filter, if so start polling for events
          filterList.push(String(inMsg.result));
          webSocket.send('{"jsonrpc":"2.0","method":"eth_getFilterLogs","params":["'+String(inMsg.result)+'"],"id":"A"}');
        }
        else {
          // must be a set of event logs - forward to the logSorter
          send({"jsonrpc":"2.0","method":"eventLogs","params":{"group":"originBlkchnEvent","logs":[inMsg.result],"to":[txtToOOId("logSorter")],"from":"${name}"}})

        }
      }
    }

    // periodically polls the node for changes. pollDelay variable defines period.
    ;(async function(){
      const delay = seconds => new Promise(resolve => timerID = setTimeout(resolve, seconds * 1000))
          while(!refresh){
              await delay(pollDelay)
              for (let i=0;i<filterList.length;i++){
          			let msg = '{"jsonrpc":"2.0","method":"eth_getFilterChanges","params":["'+String(filterList[i])+'"],"id":"filter"}'
          			webSocket.send(msg);
          		}
          refresh = false;
          //delete all filters here
        }
    })(webSocket,pollDelay,refresh);


    // handles click on left of icon (where this is represented - meta mode)
    function ${name}_left_click(){
      let tel = document.getElementById('${name}_content');
      let ymsg
      if(tel.style.display=='none'){
          tel.style.cssText += ' display:grid;'
          let xpmsg = {"jsonrpc":"2.0","method":"XPANDALL","params":{"toggle":"true","to":["_"+String(hexifyString('context'))+"_"+String(XORcontextprospective(hexifyString('context'),"${context}"))],"from":"${name}"}};
          send(xpmsg);
        }
      else{
          tel.style.cssText += ' display:none;'
          let collmsg = {"jsonrpc":"2.0","method":"COLLAPSEALL","params":{"toggle":"true","to":["_"+String(hexifyString('context'))+"_"+String(XORcontextprospective(hexifyString('context'),"${context}"))],"from":"${name}"}};
          send(collmsg);
      }
    }
    document.getElementById("${name}_left").addEventListener("click",${name}_left_click);

    /********************************************************************************/
    // Generic funcs to handle layout ideas in meta-mode

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



  `,
  RESULTcases : ``
                    ,
  METHODcases : `

  /*

      newFilter:     set up a new Ethereum filter on the connected Ethereum node via a webSocket
      newFilterURL:     set up a new Ethereum filter on the connected Ethereum node via a webSocket
      removeFilter:   remove/uninstall an Ethereum filter on the connected Ethereum node via a webSocket
      Refresh:   sets the refresh flag which causes the node polling loop to refresh the filters
      requestInitiators: gets the initiators of an oo, sends them back
      setDistanceAsIdea:  Used to set the distance of this oo. Used to workout the code for interpretting, re-asks content getter oo for idea, in case distance was incorrectly initialised (e.g. due to msg dropping, or error else where)
      setMetaStatus: tells this oo whether or not it's in the meta layout or the base.
      SETTOP: notifies this oo that it's at the front of the layout
      shiftBackAsIdea: Used to set the position of this oo in the layout.
      setasContext: notifies this oo that it has descendents in the layout.

      */


                  case 'newFilter':
                        newfiltermsg = '{"jsonrpc":"2.0","method":"eth_newFilter","params":['+JSON.stringify(msg.params.filterDict)+'],"id":"new"}'
                        try{wsSend(newfiltermsg);}catch(err){console.Error('${name} error sending filter via web socket',err,Date.now())}
                        break;
                  case 'newFilterURL':
                        newfiltermsg = '{"jsonrpc":"2.0","method":"eth_newFilter","params":['+JSON.stringify(msg.params.filterDict)+'],"id":"new"}'
                        try{wsSend(newfiltermsg);}catch(err){console.Error("${name} error sending URL filter via web socket",err)}
                        break;
                  case 'removeFilter':
                      removefiltermsg = '{"jsonrpc":"2.0","method":"eth_uninstallFilter","params":['+JSON.stringify(msg.params.filterId)+'],"id":"del"}';
                      webSocket.send(removefiltermsg)
                      break;
                  case 'Refresh':
                      refresh = true;
                      break;
                      case 'requestInitiators':
                          let prospectiveaddr
                          let contextaddr
                          let ideaaddr
                          try {prospectiveaddr = await oodaspacev0.methods.ownerOf(msg.params.prospective).call()} catch { prospectiveaddr = await oodaspacev0.methods.initiators(msg.params.prospective).call();}  // prospectiveaddr = "0x0000000000000000000000000000000000000000";
                          try {contextaddr = await oodaspacev0.methods.ownerOf(msg.params.context).call()} catch { contextaddr = await oodaspacev0.methods.initiators(msg.params.context).call();}
                          try {ideaaddr = await oodaspacev0.methods.ownerOf(msg.params.idea).call()} catch { ideaaddr = await oodaspacev0.methods.initiators(msg.params.idea).call();}

                          send({"jsonrpc": "2.0", "result": {"context":msg.params.context,"idea":msg.params.idea,"prospective":msg.params.prospective,"prospectiveaddr": prospectiveaddr,"contextaddr": contextaddr,"ideaaddr": ideaaddr, "address":msg.params.address,"to":[msg.params.from], "from": "${name}"}, "id": msg.id});
                          refresh = true;
                          break;

                          /********************************************************************************/

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
  STARTUPmessages : `[]`,
  context: context,
  prospective: prospective

}
return base_template(web3wsManager_outerTemplateObj);
}

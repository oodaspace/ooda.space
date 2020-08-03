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
let pendingTx_proc = function(context,prospective,distance,name="pendingTx",_class='base'){
let description = `Container to show/edit pending transactions.`
let pendingTx_outerTemplateObj = {
  name: `${name}`,
  distance: `${distance}`,
  class: `${_class}`,
  content: `<style>
                #${name} {z-index: 10 !important;}
                #${name}title {display:grid;grid-template: 12px auto auto 26px 22px / auto auto;max-height: 125px;}
                #${name}desc {display: none;}
                #${name}_content {background-color:transparent;font-size:small;font-family: courier;}
                #${name}table {grid-area:1 / 2 / 2 / 3; overflow: scroll;scrollbar-width: none;max-height: 125px;display: flex;flex-direction:row;flex-wrap:wrap;align-self: start;}
                #${name}table::-webkit-scrollbar {width: 0px;height:0px;}
                #${name}button {grid-area:1 / 1 / 2 / 2;margin:2px;border:solid 1px black;background-color:lightgoldenrodyellow;align-self: start;padding:10px;text-align:center;display:none;cursor: pointer;box-shadow: black 0px 0px 2px 0px;}
                #${name}CurrencyNote {grid-area:5 / 1 / 6 / 2;font-size:12px;color:#555;text-align: center;display:none;align-self:end;}
            </style>
            \<div id="${name}title">
                    \<div id="${name}desc"> \<b>${name}: \</b>${description}\</div>
                    \<div id="${name}table">\</div>
                    \<div id="${name}button">Send Value Signal(s)\</div>
                    <div id="${name}CurrencyNote">1 unit : 1 ETH </div>

            \</div>
                      `,
  objectDefs : `
      //initialise display to not visible

      document.getElementById('${name}_rank').style.cssText += ' display:none';
      document.getElementById('${name}_ranktotal').style.cssText += ' display:none';
      document.getElementById('${name}_upFlagsR').style.cssText += ' display:none';
      document.getElementById('${name}_upFlagsL').style.cssText += ' display:none';
      document.getElementById("${name}_content").style.cssText += " min-height: 40px; max-width:1000000px;height:auto;border: solid 0px;min-width:10000px;display:flex;"
      document.getElementById("${name}_left").style.cssText += " display:none;"
      document.getElementById("${name}_right").style.cssText += " display:none;"
      document.getElementById("${name}_rightSignalMask").style.cssText += " display:none;"
      document.getElementById("${name}_leftSignalMask").style.cssText += " display:none;"
      el.style.cssText += " grid-template:repeat(4,auto) / 14px 18px auto 18px 14px; height:auto; z-index:1;"

      // relocate on window resize
      function ${name}_onresize(){
          let y = window.innerHeight-43;
          send({"jsonrpc":"2.0","method":"MOVE","params":{"x":-15,"y":y,"to":["${name}"],"from":"${name}"}})
      }
      window.addEventListener("resize",${name}_onresize);

    let pendingIdeas = {}
    let accountset = false;

    // this function sends the queued transactions to the oodaspacev0 contract.
    async function ${name}_button_click(e){
      let frontRunProtection = false
          if (!accountset){
                if (typeof ethereum.request == 'function') {
                        accounts = await ethereum.request({ method: 'eth_requestAccounts' });//
                 }
                 else {
                       ethereum.send('eth_requestAccounts')//
                       accounts = await web3.eth.getAccounts();
                 }
                accountset = true;
          }

          let claims = [];
          let claimedWords = [];
          // Initialise salt - the random number mixed with the word to be claimed - used to reduce risk of front running
          let salt = []
          let arr = new Uint8Array(32)
          window.crypto.getRandomValues(arr).forEach(x => salt.push(Number(x).toString(16)))
          salt = '0x' + salt.join('').toLowerCase()
          if (salt.length < 66){
            for (let i = 0; i < 66 - salt.length; i++){
              salt += '0'
            }
          }
          if (frontRunProtection){
              // generate the claim hashes:
              for (let t in pendingIdeas){
                      let cel = document.getElementById('pendingidea'+String(t))
                      let prospective = pendingIdeas[t].prospective.toLowerCase();
                      let context = pendingIdeas[t].context.toLowerCase();
                      let idea = pendingIdeas[t].idea.toLowerCase();
                      let n = pendingIdeas[t].distance;
                      document.getElementById('pendingClaimprogressbar'+String(t)).style.cssText += "width:"+String(100)+"%";
                      document.getElementById('pendingClaimprogressbar'+String(t)).innerHTML = 'Notification';
                      let contractClaimHash
                      let prospectiveExists = await oodaspacev0.methods.exists(prospective).call();
                      let ideaExists = await oodaspacev0.methods.exists(idea).call()
                      let contextExists = await oodaspacev0.methods.exists(context).call()
                      if (!prospectiveExists) {
                              let buf = toBytesFromHexstlist([accounts[0].toLowerCase(),prospective,salt])
                              let claimHash = await window.crypto.subtle.digest('SHA-256',buf)
                              claimHash = '0x' + [... new Uint8Array(claimHash)].map (a => a.toString (16).padStart (2, "0")).join ("").toLowerCase();
                              claimHash = await oodaspacev0.methods.notificationHashCreator(prospective,accounts[0].toLowerCase(),salt).call();
                              claims.push(claimHash)
                              claimedWords.push(prospective);
                              pendingIdeas[t]["claimflag"] = true
                      }
                      if (!contextExists && (context !== prospective)) {
                              let buf = toBytesFromHexstlist([accounts[0].toLowerCase(),context,salt])
                              let claimHash = await window.crypto.subtle.digest('SHA-256',buf);
                              claimHash = '0x' + [... new Uint8Array(claimHash)].map (a => a.toString (16).padStart (2, "0")).join ("").toLowerCase();
                              claimHash = await oodaspacev0.methods.notificationHashCreator(context,accounts[0].toLowerCase(),salt).call();
                              claims.push(claimHash);
                              claimedWords.push(context);
                              pendingIdeas[t]["claimflag"] = true
                      }
                      if (!ideaExists && (idea !== prospective) && (idea !== context)) {
                              let buf = toBytesFromHexstlist([accounts[0],pendingIdeas[t].idea.toLowerCase(),salt])
                              let claimHash = await window.crypto.subtle.digest('SHA-256',buf);
                              claimHash = '0x' + [... new Uint8Array(claimHash)].map (a => a.toString (16).padStart (2, "0")).join ("").toLowerCase();
                              claimHash = await oodaspacev0.methods.notificationHashCreator(pendingIdeas[t].idea.toLowerCase(),accounts[0].toLowerCase(),salt).call();
                              claims.push(claimHash);
                              claimedWords.push(idea);
                              pendingIdeas[t]["claimflag"] = true;
                      }
              }
              // remove duplicates
              claims = [...new Set(claims)]
              claimedWords = [... new Set(claimedWords)]
              console.log('SALT',salt) // console retained as allows user to retrieve salt in event tx fails, if no refresh
              let salts = Array(claimedWords.length).fill(salt);
              for (let t in pendingIdeas){
                        let prospective = pendingIdeas[t].prospective.toLowerCase();
                        let context = pendingIdeas[t].context.toLowerCase();
                        let n = pendingIdeas[t].distance;
                        let idea =  pendingIdeas[t].idea.toLowerCase();
                        if (pendingIdeas[t].claimflag) {
                        await oodaspacev0.methods.notify(claims).send({from:accounts[0].toLowerCase(),gas:400000,"to":oodaspacev0._address})
                            .on('confirmation',async (confirmationNumber, receipt) =>{
                                if (confirmationNumber == 1){
                                          document.getElementById('pendingClaimprogressbar'+String(t)).innerHTML = 'Signalling value';
                                          await oodaspacev0.methods.signalValue(pendingIdeas[t].context,pendingIdeas[t].prospective,n).send({from:accounts[0].toLowerCase(),gas:400000,"to":oodaspacev0._address,value:parseInt(pendingIdeas[t].amt)}).on(
                                          'confirmation', async (confirmationNumber, receipt) => {
                                                  if (confirmationNumber == 1){
                                                        document.getElementById('pendingClaimprogressbar'+String(t)).innerHTML = 'Claiming oo-idea token(s)';
                                                        await oodaspacev0.methods.claimTokens(claimedWords,salts).send({from:accounts[0].toLowerCase(),gas:605000,"to":oodaspacev0._address})
                                                        .on('confirmation',async (confirmationNumber, receipt) =>{
                                                            if (confirmationNumber == 1){
                                                                    document.getElementById('pendingClaimprogressbar'+String(t)).innerHTML = 'Done!';
                                                                    setTimeout(function () {
                                                                        delete pendingIdeas[t];
                                                                        let tel = document.getElementById('pendingidea'+String(t))
                                                                        tel.parentNode.removeChild(tel)
                                                                    }, 500);
                                                            }
                                                          })
                                                  }
                                          })
                                }

                            })
                          }
                          else {
                            document.getElementById('pendingClaimprogressbar'+String(t)).innerHTML = 'Signalling value';
                            await oodaspacev0.methods.signalValue(pendingIdeas[t].context,pendingIdeas[t].prospective,n).send({from:accounts[0].toLowerCase(),gas:605000,"to":oodaspacev0._address,value:parseInt(pendingIdeas[t].amt)})
                            .on('confirmation',async (confirmationNumber, receipt) =>{
                                if (confirmationNumber == 1){
                                        document.getElementById('pendingClaimprogressbar'+String(t)).innerHTML = 'Claiming oo-idea token(s)';
                                        await oodaspacev0.methods.claimTokens(claimedWords,salts).send({from:accounts[0].toLowerCase(),gas:100000*claimedWords.length,"to":oodaspacev0._address})
                                        .on('confirmation',async (confirmationNumber, receipt) =>{
                                                  if (confirmationNumber == 1){
                                                          delete pendingIdeas[t];
                                                          let tel = document.getElementById('pendingidea'+String(t))
                                                          tel.parentNode.removeChild(tel)
                                                  }
                                          })
                                }
                          })

                          }
                }
            }
            else { // no frontrunprotection
              for (let t in pendingIdeas){
                      let cel = document.getElementById('pendingidea'+String(t))
                      let prospective = pendingIdeas[t].prospective.toLowerCase();
                      let context = pendingIdeas[t].context.toLowerCase();
                      let idea = pendingIdeas[t].idea.toLowerCase();
                      let n = pendingIdeas[t].distance;
                      document.getElementById('pendingClaimprogressbar'+String(t)).style.cssText += "width:"+String(100)+"%";
                      document.getElementById('pendingClaimprogressbar'+String(t)).innerHTML = 'Sending value signal';
                      await oodaspacev0.methods.signalValue(pendingIdeas[t].context,pendingIdeas[t].prospective,n).send({from:accounts[0].toLowerCase(),gas:605000,"to":oodaspacev0._address,value:parseInt(pendingIdeas[t].amt)})
                      .on('confirmation',async (confirmationNumber, receipt) =>{
                            if (confirmationNumber == 1){
                                  delete pendingIdeas[t];
                                  let tel = document.getElementById('pendingidea'+String(t))
                                  tel.parentNode.removeChild(tel)
                            }
                      })
               }
        }

    }
    document.getElementById("${name}button").addEventListener("click",${name}_button_click);
  `,
  RESULTcases : `case 'ICONforPending':
                        // response from IconCreator with small icon. Remove click event handler also added here.
                        document.getElementById('pend_'+String(msg.result.context)+'_'+String(msg.result.prospective)).innerHTML = msg.result.svg;
                        for (let t in pendingIdeas){
                            document.getElementById('pend'+String(t) +'close').addEventListener("click", () => {
                              delete pendingIdeas[t];
                              let tel = document.getElementById('pendingidea'+String(t))
                              tel.parentNode.removeChild(tel)
                              if (Object.keys(pendingIdeas).length==0){
                                  document.getElementById("${name}button").style.cssText += " display:none;";
                                  document.getElementById("${name}CurrencyNote").style.cssText += " display:none;";
                                  document.getElementById("${name}").style.cssText += " display:none;";
                              }
                            })
                          }
                  break;
                  `
                    ,
  METHODcases : `case 'ValueSignal':
                        // handles value signals (from pressing value signal button on an oo). Collates into provisional transactions to be sent.
                        let idea =  String(XORcontextprospective(msg.params.context,msg.params.prospective,msg.params.distance));
                        let ideaid = '_'+ String(msg.params.context) + '_' + String(msg.params.prospective)
                        let id = 'pend_'+String(msg.params.context)+'_'+String(msg.params.prospective)
                        if (!(ideaid in pendingIdeas)){
                                  document.getElementById('${name}table').innerHTML += \`<div id="pendingidea_\${msg.params.context}_\${msg.params.prospective}" style="padding:2px;margin:2px;border:solid 1px black;display:grid; grid-template: 32px / auto auto auto auto;height:32px;box-shadow: black 0px 0px 2px 0px;"><div id="amt\${ideaid}" style="grid-area: 1 / 1 / 2 / 2;align-self:center;">\${web3.utils.fromWei(String(BigInt(msg.params.amt)),"ether")}</div><div style="grid-area: 1 / 2 / 2 / 3;align-self:center;">&nbsp;ETH to&nbsp;</div><div id="\${id}" style="grid-area: 1 / 3 / 2 / 4;align-self:center;"></div><div id="\${id}close" style="grid-area: 1 / 4 / 2 / 5;align-self:center;"><button>x</button></div><div style="grid-area: 1 / 1 / 2 / 3;display:flex;"><div id="pendingprogressbar_\${msg.params.context}_\${msg.params.prospective}" style="background-color:green;width:0%;font-size: 9px;align-self:end;height:25%;"></div></div><div style="grid-area: 1 / 1 / 2 / 3;display:flex;"><div id="pendingClaimprogressbar_\${msg.params.context}_\${msg.params.prospective}" style="background-color:#e8a326;font-size: 9px;text-align: center;width:0%;height:25%;"></div></div></div>\`
                                  send({"jsonrpc": "2.0", "method": "createSVG25", "params": {"context": String(msg.params.context),"idea": idea,"prospective": String(msg.params.prospective),"prospectiveaddr": "0x0000000000000000000000000000000000000000000000000000000000000000","contextaddr": "0x0000000000000000000000000000000000000000000000000000000000000000","ideaaddr": "0x0000000000000000000000000000000000000000000000000000000000000000","to":[txtToOOId("IconCreator")],"from":"${name}"},"id": "ICONforPending" });


                                  let prospectiveaddr
                                  let contextaddr
                                  let ideaaddr
                                  try {prospectiveaddr = await oodaspacev0.methods.ownerOf(msg.params.prospective).call()} catch {prospectiveaddr = "0x0000000000000000000000000000000000000000"}
                                  try {contextaddr = await oodaspacev0.methods.ownerOf(msg.params.context).call()} catch {contextaddr = "0x0000000000000000000000000000000000000000"};
                                  try {ideaaddr = await oodaspacev0.methods.ownerOf(idea).call()} catch {ideaaddr = "0x0000000000000000000000000000000000000000"}
                                  pendingIdeas[ideaid] = {amt : msg.params.amt, context: msg.params.context, prospective:msg.params.prospective,idea:idea,distance:msg.params.distance,"prospectiveaddr":prospectiveaddr,"contextaddr":contextaddr,"ideaaddr":ideaaddr}


                                  document.getElementById("${name}button").style.cssText += " display:grid;";
                                  //document.getElementById("${name}CurrencyNote").style.cssText += " display:grid;";
                                  document.getElementById("${name}").style.cssText += " display:grid;";
                         }
                         else {
                                 let amt = document.getElementById(\`amt\${ideaid}\`).innerHTML
                                  document.getElementById(\`amt\${ideaid}\`).innerHTML = web3.utils.fromWei(String(BigInt(msg.params.amt) + BigInt(web3.utils.toWei(amt))),"ether");
                                  pendingIdeas[ideaid] = {amt : web3.utils.toWei(web3.utils.fromWei(String(BigInt(msg.params.amt) + BigInt(web3.utils.toWei(amt))),"ether")),context: msg.params.context, prospective:msg.params.prospective,idea:idea,distance:msg.params.distance}
                         }


                  break;
                  case 'DiscardSignal':
                          // place holder for discard signals
                  break;  `,
  STARTUPmessages : `[{"jsonrpc":"2.0","method":"MOVE","params":{"x":-15,"y":window.innerHeight-43,"to":["${name}"],"from":"${name}"}}]`,
  context: context,
  prospective: prospective

}
return base_template(pendingTx_outerTemplateObj);
}

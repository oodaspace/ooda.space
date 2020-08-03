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
let logo_proc = function(context,prospective,distance,name="logo",_class='base'){

  name = String(name)
let description = `logo holder`
let logo_outerTemplateObj = {
  name: `${name}`,
  distance: `${distance}`,
  class: `${_class}`,
  content: `<style>
  #${name} {z-index:-100 !important;top:0px;}
                #${name}_content {display:grid;min-width:0px;width:0px;border:0px;overflow:unset;}
                #${name}_title {display:grid;grid-template: 20px 40px auto auto / auto;max-height: 125px;}
                #${name}filter {display:flex;overflow: scroll;scrollbar-width: none;grid-area:1 / 1 /2 / 2;padding:5px;justify-self:center;}
                #${name}filter::-webkit-scrollbar {width: 0px;height:0px;}
                #${name}idea {font-size:20px; text-align: center;align-self: center;grid-area: 2 / 1 / 5 / 2;font-family:courier;position:relative;left:36px;width: 800px;text-align: left;top: -75px;display:grid;grid-template: auto / fit-content(200px) auto;}
                #${name}idea::-webkit-scrollbar {width: 0px;height:0px;pointer-events:none;}
                #${name}contextlinetxt {font-size:small;align-self:center;justify-self:start;text-align:left;padding-left:5px;}
                #${name}maintxt {align-self:center;}
                #${name}backgroundlabels {position:sticky;right:100vw;}
                #${name}filtername {display:flex;font-size:30px;padding:3px;overflow: scroll;scrollbar-width: none;grid-area:2 / 1 / 3 / 2;justify-self:center;align-self:start;}
                #${name}filtername::-webkit-scrollbar {width: 0px;height:0px;}
                #${name}_leftSignalMask {display:none;}
                #${name}_rightSignalMask {display:none;}
                #${name}filterbackground{top:calc(100vh - 233.5px);left:-70px;position:absolute;background-color:#81acd6;width:10000000px;height:185px;z-index:-4;pointer-events:none;}
                #${name}txbackground{top:calc(100vh - 51.5px);left:-70px;position:absolute;background-color:#b1dea0;width:10000000px;height:168px;z-index:-4;pointer-events:none;}
                #${name}oobackground{top:-50px;left:-70px;position:absolute;background-color:#d0eaf1;width:10000000px;height:100vh;z-index:-500;pointer-events:none;}
                #${name}topbackground{top:-50px;left:-70px;position:absolute;background-color:lightgoldenrodyellow;width:10000000px;height:70px;z-index:-499;pointer-events:none;}
            </style>
            \<div id="${name}_title">

            \<div id="${name}idea"><div id="${name}maintxt"> |||<b>ooda.space</b>|||</div><div id="${name}contextlinetxt"> A transparent system to rank and realize ideas</div>
<!--&#12295;&#12295;&#2039;&#4043;&#4043;&#4113;&#4218;&#5598;&#8272;&#8408;&#42830;

&#9438;&#9438;&#9427;&#9424;.&#9442;&#9439;&#9424;&#9426;&#9428;

-->


            <div id="${name}filterbackground">
            </div>
            <div id="${name}txbackground">
            </div>
            <div id="${name}oobackground">
            </div>


</div>
            \</div> `,
  objectDefs : `

  document.getElementById('${name}_left').style.cssText += ' display:none;';
  document.getElementById('${name}_right').style.cssText += ' display:none;';

  document.getElementById('${name}_leftSignalMask').style.cssText += ' top:-12px';
  document.getElementById('${name}_rightSignalMask').style.cssText += ' top:-12px';

  if (window.innerWidth < 800){
      document.getElementById("${name}contextlinetxt").style.cssText += "display:none;"
  }
  else {
      document.getElementById("${name}contextlinetxt").style.cssText += "display:grid;"
  }

  function ${name}_onresize(){

    if (window.innerWidth < 1000){
        document.getElementById("${name}contextlinetxt").style.cssText += "display:none;"
    }
    else {
        document.getElementById("${name}contextlinetxt").style.cssText += "display:grid;"
    }

  }
  window.addEventListener("resize",${name}_onresize);

  let metaFilterSent = false
  let isMetaMode = false
  let altPressed = false
  // this handles the transfer into "meta mode", presently activated by ctrl-M. Should really be in an "overall layout manager or similar"
  document.onkeydown = function(evt) {
      evt = evt || window.event;
      if (evt.keyCode == 18 || evt.metaKey){
        altPressed = true
        setTimeout(function () {
              altPressed = false
        }, 500);
      }

       if(altPressed && evt.keyCode == 77) { //"Alt-M"
            if (!isMetaMode){
                    document.getElementById('base').style.cssText += ' transform: scale(0.5) rotate(32deg) translate(-230px, 250px) skew(-46deg, -15deg);'
                    document.getElementById('meta').style.cssText += ' display: grid;'
                    document.getElementById('meta').appendChild(document.getElementById(txtToOOId('pendingTx')))
                    isMetaMode = true;
                    if (!metaFilterSent){
                      let metafilterDict = {fromBlock:"0x0",toBlock:'latest',address:oodaspacev0._address,topics:[[web3.utils.sha3('ValueSignal(address,uint256,uint256,uint256,int256)')],["0x000000000000000000000000266d80d1a7f8926fe44ba310ea2bda7d302a9615"],XORcontextidea("0x000000000000000000000000266d80d1a7f8926fe44ba310ea2bda7d302a9615",hexifyString("ooda.space"),1)]}
                      send({"jsonrpc":"2.0","method":"newFilter","params":{"filterDict":metafilterDict,"isMeta":true,"filter":"_0x000000000000000000000000266d80d1a7f8926fe44ba310ea2bda7d302a9615_"+String(XORcontextidea("0x000000000000000000000000266d80d1a7f8926fe44ba310ea2bda7d302a9615",hexifyString("ooda.space"),1)),"to":[txtToOOId("web3wsManager"),txtToOOId("logSorter"),txtToOOId("filterCurator")],"from":"${name}"}})
                    }
            }
            else {

                    document.getElementById('base').style.cssText += ' transform: none;'
                    document.getElementById('base').appendChild(document.getElementById(txtToOOId('pendingTx')))
                    document.getElementById('meta').style.cssText += ' display: none;'
                    isMetaMode = false

            }
      }
  };

  document.getElementById("${name}_leftSignalMask").style.cssText += ' display: none;'
  document.getElementById("${name}_rightSignalMask").style.cssText += ' display: none;'
  let hasFilter = true;
  isHidden = false;

  stopInitalIconRequest = true;


  `,
  RESULTcases : ``
                    ,
  METHODcases : ``,
  STARTUPmessages : `[{"jsonrpc": "2.0", "method": "createSVG", "params": {"context": "0x0000000000000000000000000000000000000000000000000000000000000000","idea": "0x0000000000000000000000000000000000000000000000000000000000000000","prospective": "0x0000000000000000000000000000000000000000000000000000000000000000","hideIdea":false,"to":[txtToOOId("IconCreator")],"from":"${name}"},"id": "ICON" },{"jsonrpc":"2.0","method":"MOVE","params":{"x":String(-75),"y":String(0),"to":["${name}"],"from":"${name}"}}, {"jsonrpc":"2.0","method":"HIDEADDRESSES","params":{"to":["${name}"],"from":"${name}"}},{"jsonrpc":"2.0","method":"SHOW","params":{"to":["${name}"],"from":"${name}"}}]`,
  context: context,
  prospective: prospective

}

return base_template(logo_outerTemplateObj);
}

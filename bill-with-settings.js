const radioBillAddButton = document.querySelector(".radioBilladdButton");
const callTotalSettingsElem = document.querySelector(".callTotalSettings");
const smsTotalSettingsElem = document.querySelector(".smsTotalSettings");
const totalSettingsElem = document.querySelector(".totalSettings");
const callCostSettingElem = document.querySelector(".callCostSetting");
const smsCostSettingElem = document.querySelector(".smsCostSetting");
const warningLevelSettingElem = document.querySelector(".warningLevelSetting");
const criticalLevelSettingElem = document.querySelector(".criticalLevelSetting");
const updateSettingsElem = document.querySelector(".updateSettings");

var callTotal = 0
var smsTotal = 0
var total = 0

var call = 0
var sms = 0
var warning = 0
var critical = 0

function settingsUpdate(){

    call = Number(callCostSettingElem.value);
    sms = Number(smsCostSettingElem.value);
    warning = Number(warningLevelSettingElem.value);
    critical = Number(criticalLevelSettingElem.value);

    settingsStyleColor();

}

function totalSettings(){
    if(total<critical) {
      var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
      if (checkedRadioBtn){
          var billItemType = checkedRadioBtn.value

          if(billItemType === "call"){
              callTotal += call;
          }
          else if (billItemType === "sms"){
              smsTotal += sms;
          }

callTotalSettingsElem.innerHTML = callTotal.toFixed(2);
smsTotalSettingsElem.innerHTML = smsTotal.toFixed(2);

total = callTotal + smsTotal;
totalSettingsElem.innerHTML = total.toFixed(2);

settingsStyleColor();
      }
    }
}

function settingsStyleColor(){
    totalSettingsElem.classList.remove("danger");
    totalSettingsElem.classList.remove("warning");

    if (total>= critical){
        totalSettingsElem.classList.remove("warning")

        totalSettingsElem.classList.add("danger");
    }
    else if (total >= warning && total < critical){
        totalSettingsElem.classList.remove("danger");

        totalSettingsElem.classList.add("warning");

    }
}
radioBillAddButton.addEventListener("click", totalSettings);
updateSettingsElem.addEventListener("click", settingsUpdate);
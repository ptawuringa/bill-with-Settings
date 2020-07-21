function BillWithSettings() {
    var theCallCost = 0;
    var theSmsCost = 0;
    var theCriticalLevel = 0;
    var theWarningLevel = 0;

    var callCostTotal = 0;
    var smsCostTotal = 0;

    function setCallCost(callCost) {
        theCallCost = callCost;

    }

    function getCallCost() {
        return theCallCost;
    }



    function setSmsCost(smsCost) {
        theSmsCost = smsCost;

    }

    function getSmsCost() {
        return theSmsCost;
    }

    function setCriticalLevel(criticalLevel) {
        theCriticalLevel = criticalLevel;
    }

    function getCriticalLevel() {
        return theCriticalLevel;
    }

    function setWarningLevel(warningLevel) {
        theWarningLevel = warningLevel;
    }

    function getWarningLevel() {
        return theWarningLevel;
    }

    function makeCall() {
        if (!hasReachedCriticalLevel()) {
            callCostTotal += theCallCost;
        }
    }

    function getTotalCost() {
        return callCostTotal + smsCostTotal;
    }

    function getTotalCallCost() {
        return callCostTotal;
    }

    function grandTotal(itemType) {
        if (itemType === "call") {
            makeCall()
        }
        if (itemType === "sms") {
            sendSms()
        }
    }

    function getTotalSmsCost() {
        return smsCostTotal;
    }

    function sendSms() {

        if (!hasReachedCriticalLevel()) {
            smsCostTotal += theSmsCost;
        }
    }

    function hasReachedCriticalLevel() {
        // alert("total " + getTotalCost() + "critical " + getCriticalLevel())
        return getTotalCost() >= getCriticalLevel();
    }

    function totalClassName() {

        if (hasReachedCriticalLevel()) {
            return "danger"
        }


        else if (getTotalCost() >= getWarningLevel()) {
            return "warning"
        }

    }
    return {
        grandTotal,
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setCriticalLevel,
        getCriticalLevel,
        setWarningLevel,
        getWarningLevel,
        makeCall,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        sendSms,
        totalClassName,

    }
}


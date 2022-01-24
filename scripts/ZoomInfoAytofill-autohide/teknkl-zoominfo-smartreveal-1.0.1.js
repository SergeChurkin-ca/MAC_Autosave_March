MktoForms2.whenReady(function smartZIReveal(mktoForm) {
    const smartZIRevealSystemConfig = { ziDeveloperMode: document.location.hash == "#dev", eventBindings: { simple: true, advanced: false }, attrs: { behaviorsReady: "data-zi-managed-behaviors-ready", mktoErrorReady: "data-mkto-error-ready", isZIManaged: "data-zi-managed", isZIInteracted: "data-hasusertyped", isZIEmpty: "data-zi-empty" } };
    const formEl = mktoForm.getFormElem()[0],
        lookupEl = getNamedField(formEl, window.smartZIRevealUserConfig.ziLookupField);
    const arrayify = getSelection.call.bind([].slice);
    let lastZIFields;
    let tsLastMatch = 0,
        mktoFieldsRevealed = false;
    const advSealEventBindings = [{ target: mktoForm, event: "Validate" }, { target: lookupEl, event: "blur" }, { target: lookupEl, event: "keydown" }];
    if (smartZIRevealSystemConfig.eventBindings.simple) {
        let managedFields = window.smartZIRevealUserConfig.ziManagedFields.map(function(fieldName) { return getNamedField(formEl, fieldName); });
        managedFields.filter(function(el) { return el.name != window.smartZIRevealUserConfig.ziLookupField }).forEach(function(el) {
            const fieldName = el.name,
                wrapperRow = getMktoWrapperFor(formEl, fieldName);
            el.setAttribute(smartZIRevealSystemConfig.attrs.isZIInteracted, true);
            wrapperRow.setAttribute(smartZIRevealSystemConfig.attrs.isZIManaged, true);
        });
        formEl.setAttribute(smartZIRevealSystemConfig.attrs.isZIManaged, true);
    } else { formEl.setAttribute(smartZIRevealSystemConfig.attrs.isZIManaged, false); }

    function manageEventBindings(listener, bindings, stateEnabled) { bindings.forEach(function(binding) { if (binding.target == mktoForm) { binding.target[(stateEnabled ? "on" : "off") + binding.event](listener); } else { binding.target[(stateEnabled ? "addEventListener" : "removeEventListener")](binding.event, listener); } }); }

    function getMktoWrapperFor(formEl, fieldName) { return formEl.querySelector(".mktoFormRow[data-wrapper-for~='" + fieldName + "']"); }

    function getNamedField(formEl, fieldName) { return formEl.querySelector("[name='" + fieldName + "']"); }

    function sealZIFields(context) {
        if (typeof context == "undefined") {} else if (typeof context == "boolean") {} else if (context instanceof FocusEvent && context.type == "blur") {} else if (context instanceof KeyboardEvent && context.type == "keydown" && "Enter" == (context.key || context.keyIdentifier)) {} else { return; }
        if (!mktoFieldsRevealed && lastZIFields) {
            revealEmptyManagedFields(lastZIFields);
            mktoFieldsRevealed = true;
            if (smartZIRevealSystemConfig.eventBindings.advanced) { manageEventBindings(sealZIFields, advSealEventBindings, false); }
            return true;
        } else { return false; }
    }

    function revealEmptyManagedFields(fieldsObj) {
        delete fieldsObj.Email;
        mktoForm.setValues(fieldsObj);
        Object.keys(fieldsObj).filter(function(fieldName) { return !fieldsObj[fieldName] && !getNamedField(formEl, fieldName).hidden; }).forEach(function(emptyFieldName) {
            var wrapperRow = getMktoWrapperFor(formEl, emptyFieldName);
            wrapperRow.setAttribute(smartZIRevealSystemConfig.attrs.isZIEmpty, true);
            setTimeout(function() { wrapperRow.setAttribute(smartZIRevealSystemConfig.attrs.mktoErrorReady, true); }, 200)
        });
    }
    window._zi = {
        formId: window.smartZIRevealUserConfig.ziFormId,
        development: smartZIRevealSystemConfig.ziDeveloperMode,
        callbacks: {
            onMatch: function(ziFieldsObj) {
                lastZIFields = ziFieldsObj;
                sealZIFields();
            }
        }
    };
    var zi = document.createElement("script");
    zi.type = "text/javascript";
    zi.async = true;
    zi.src = "https://ws-assets.zoominfo.com/formcomplete.js";
    zi.onload = function() {
        if (smartZIRevealSystemConfig.eventBindings.simple) { formEl.setAttribute(smartZIRevealSystemConfig.attrs.behaviorsReady, true); }
        if (smartZIRevealSystemConfig.eventBindings.advanced) { manageEventBindings(sealZIFields, advSealEventBindings, true); }
    }
    document.head.appendChild(zi);
});
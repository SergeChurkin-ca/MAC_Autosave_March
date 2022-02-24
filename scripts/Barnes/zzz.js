var useImplicitAll = true; // check wildcard box when all other boxes are individually selected

/* -- NO NEED TO TOUCH BELOW THIS LINE -- */

var formEl = form.getFormElem()[0],
    arrayify = getSelection.call.bind([].slice);

var selectors = {
    checkboxGroups: ".mktoCheckboxList",
    wildcardBox: "input[value|='*'],input[value|='-*']",
    standardBox: "input:not([value|='*']):not([value|='-*'])"
};

formEl.addEventListener("change", function(e) {
    var clickedEl = e.target;

    if (clickedEl.type == "checkbox") {
        var allMemberGroups = formEl.querySelectorAll(selectors.checkboxGroups),
            thisMemberGroup = arrayify(allMemberGroups).filter(function(boxGroup) { return boxGroup.contains(clickedEl); })[0];

        var wildcardBoxes,
            isWildcardReversed,
            standardBoxes,
            allStandardChecked,
            anyStandardChecked;

        if (thisMemberGroup) {
            wildcardBoxes = thisMemberGroup && arrayify(thisMemberGroup.querySelectorAll(selectors.wildcardBox));

            if (wildcardBoxes.length) {
                standardBoxes = arrayify(thisMemberGroup.querySelectorAll(selectors.standardBox));
                allStandardChecked = standardBoxes.every(function(standard) { return standard.checked; });
                anyStandardChecked = standardBoxes.some(function(standard) { return standard.checked; });

                if (wildcardBoxes.indexOf(clickedEl) != -1) {
                    isWildcardReversed = /^-\*-?/.test(clickedEl.value);

                    standardBoxes.forEach(function(standard) {
                        if (!isWildcardReversed) {
                            standard.checked = clickedEl.checked;
                        } else if (clickedEl.checked) {
                            standard.checked = false;
                        }
                    });
                } else {
                    if (!allStandardChecked || (allStandardChecked && useImplicitAll)) {
                        wildcardBoxes.forEach(function(wildcard) {
                            var isWildcardReversed = /^-\*-?/.test(wildcard.value);
                            if (!isWildcardReversed) {
                                wildcard.checked = allStandardChecked;
                            } else if (anyStandardChecked) {
                                wildcard.checked = false;
                            }
                        });
                    }
                }
            }
        }
    }
});
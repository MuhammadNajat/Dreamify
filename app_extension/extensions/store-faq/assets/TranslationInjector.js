//import axios from 'axios';

function showLanguageSelectionDropdown() {
    console.log(">>>>> ENTERED showLanguageSelectionDropdown");
    // Create a select element
    var selectDropdown = document.createElement("select");
    selectDropdown.id = "dreamifyLanguaeDropdown"
    
    let supportedLanguageCount = 8;
    let languages = ["English", "Bengali", "Arabic", "Spanish", "German", "Urdu", "Korean", "Japanese"];
    let languageISO639Codes = ["en", "bn", "ar", "es", "de", "ur", "ko", "ja"];

    for(let i=0; i<supportedLanguageCount; i++) {
        var option = document.createElement("option");
        option.className = "languageOption";
        option.text = languages[i];
        option.value = languageISO639Codes[i];
        if(languages[i] == "English") {
            option.selected = "selected";
        }
        selectDropdown.add(option);
    }

    selectDropdown.addEventListener("change", async function() {
        console.log(">>> " + selectDropdown.value + " selected");

        function isValidText(data) {
            let valid = !(data == false || data == undefined || data == null);
            return valid;
        }
        
        // Function to recursively traverse the DOM tree and find leaf elements
        function findLeafElements(element, result = []) {
            // Check if the current element has no child nodes
            var tagName = element.tagName.toLowerCase();
            if (element.children.length === 0 || (tagName == "a" && isValidText(element.innerText))) {
                result.push(element);
            } else {
                // Recursively traverse child nodes
                for (var i = 0; i < element.children.length; i++) {
                //console.log("Normal Code:" + element.children[i]);	
                findLeafElements(element.children[i], result);
                }
            }
        }
        
        function getValidPageElements() {
            var bodyElement = document.body;
            var leafElements = [];
            findLeafElements(bodyElement, leafElements);

            let validElements = [];
        
            // Log the tag name and innerText of each leaf element
            for (var i = 0; i < leafElements.length; i++) {
                var currentElement = leafElements[i];

                console.log("### Class Name: " + currentElement.className);

                if(currentElement.className == "languageOption") {
                    continue;
                }
                
                if(!isValidText(currentElement.innerText)) {
                    continue;
                }
                var tagName = currentElement.tagName.toLowerCase();
                if(tagName == "script" || tagName == "style" || tagName == "noscript") {
                    continue;
                }

                validElements.push( currentElement );
            }

            return validElements;
        }

        let validElements = /*await*/ getValidPageElements();
        ///console.log("**==>>" + validElements);

        const translateTo = selectDropdown.value; // Set your target language

        // Use Promise.all to wait for all translations to complete
        await Promise.all(validElements.slice(0, validElements.length).map(async (element) => {
            try {
                const textToTranslate = element.innerText;
                
                let delay = 90;
                await new Promise(resolve => setTimeout(resolve, delay));

                ///Copy the API key from README.md file and set it to the variable `API_KEY`
                const API_KEY = 'AIzaSyArz3weROlTTW_IGEU3h8XEX33xZWY0IRQ';
                const res = await axios.post(
                    `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
                    { q: textToTranslate, target: translateTo }
                );

                const translation = res.data.data.translations[0].translatedText;
                element.innerText = translation;
                console.log("TRANSLATED: " + translation);
            } catch (error) {
                console.error('Error during translation:', error.message);
            }
        }));

        localStorage.setItem("dreamifyUserLanguageChoice", selectDropdown.value);

    });

    document.getElementById("selectDropDownHolder").appendChild(selectDropdown);

    console.log("<<<<< EXITING showLanguageSelectionDropdown");
}

async function translatePageToPastUserLanguageChoice() {
    console.log(">>>>> ENTERED translatePageToPastUserLanguageChoice");

    if(localStorage.getItem("dreamifyUserLanguageChoice") == null) {
        console.log(">>>>> dreamifyUserLanguageChoice NOT SET PREVIOUSLY");
        return;
    }

    function isValidText2(data) {
        let valid = !(data == false || data == undefined || data == null);
        return valid;
    }
    
    // Function to recursively traverse the DOM tree and find leaf elements
    function findLeafElements2(element, result = []) {
        // Check if the current element has no child nodes
        var tagName = element.tagName.toLowerCase();
        if (element.children.length === 0 || (tagName == "a" && isValidText2(element.innerText))) {
            result.push(element);
        } else {
            // Recursively traverse child nodes
            for (var i = 0; i < element.children.length; i++) {
            //console.log("Normal Code:" + element.children[i]);	
            findLeafElements2(element.children[i], result);
            }
        }
    }
    
    function getValidPageElements2() {
        var bodyElement = document.body;
        var leafElements = [];
        findLeafElements2(bodyElement, leafElements);

        let validElements = [];
    
        // Log the tag name and innerText of each leaf element
        for (var i = 0; i < leafElements.length; i++) {
            var currentElement = leafElements[i];

            console.log("### Class Name: " + currentElement.className);

            if(currentElement.className == "languageOption") {
                continue;
            }
            
            if(!isValidText2(currentElement.innerText)) {
                continue;
            }
            var tagName = currentElement.tagName.toLowerCase();
            if(tagName == "script" || tagName == "style" || tagName == "noscript") {
                continue;
            }

            validElements.push( currentElement );
        }

        return validElements;
    }

    let validElements = getValidPageElements2();
    ///console.log("**==>>" + validElements);

    const translateTo = localStorage.getItem("dreamifyUserLanguageChoice"); // Set your target language

    // Use Promise.all to wait for all translations to complete
    await Promise.all(validElements.slice(0, validElements.length).map(async (element) => {
        try {
            const textToTranslate = element.innerText;
            
            let delay = 90;
            await new Promise(resolve => setTimeout(resolve, delay));

            ///Copy the API key from README.md file and set it to the variable `API_KEY`
            const API_KEY = 'AIzaSyArz3weROlTTW_IGEU3h8XEX33xZWY0IRQ';
            const res = await axios.post(
                `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
                { q: textToTranslate, target: translateTo }
            );

            const translation = res.data.data.translations[0].translatedText;
            element.innerText = translation;
            console.log("TRANSLATED: " + translation);
        } catch (error) {
            console.error('Error during translation:', error.message);
        }
    }));
    console.log(">>>>> EXITING translatePageToPastUserLanguageChoice");
}

showLanguageSelectionDropdown();

let pastLanguageChoiceValue = localStorage.getItem("dreamifyUserLanguageChoice");
if(pastLanguageChoiceValue != null) {
    console.log("***** dreamifyUserLanguageChoice SET PREVIOUSLY");
    let languageDropdown = document.getElementById("dreamifyLanguaeDropdown");
    if(languageDropdown != null) {
        languageDropdown.value = pastLanguageChoiceValue;
        await translatePageToPastUserLanguageChoice();
        console.log("##### PAST LANGUAGE CHOICE IS CHECKED AND HANDLED");
    }
}
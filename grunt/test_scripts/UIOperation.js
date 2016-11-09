var fs = require('fs');
var envJson = JSON.parse(fs.readFileSync('./test/test_specs/properties/envoirnment.json'));
var uiJson = JSON.parse(fs.readFileSync('./test/test_specs/properties/ui_operation_constants.json'));
var objJson = JSON.parse(fs.readFileSync('./test/test_specs/properties/object-properties.json'));

//Creating a global varibae that will conatin all logs 
var finalLog = '';
var startTestCaseTimestamp;
var endTestCaseTimestamp;


this.startTestCase = function(stepNumber, testcaseName) {

    try {
        startTestCaseTimestamp = new Date().getTime();
        this.getConsoleLog(testcaseName + '::Test case Started at Timestamp::' + startTestCaseTimestamp);
        this.getConsoleLog(stepNumber + '****************************************************************************************');
        // this.getConsoleLog(stepNumber+'****************************************************************************************');
        this.getConsoleLog(stepNumber + '$$$$' + testcaseName + '$$$$');
        this.getConsoleLog(stepNumber + '****************************************************************************************');
        //this.getConsoleLog(stepNumber+'****************************************************************************************');


    } catch (err) {
        this.getConsoleLog(err);
    }
}

this.endTestCase = function(stepNumber) {
    try {
        //var text = 'driver.quit()';
        endTestCaseTimestamp = new Date().getTime();
        this.getConsoleLog(stepNumber + '::XXXXXXXXXXXXXXXXX ' + '-E---N---D-' + '::XXXXXXXXXXXXXXXXXXXXXXX ');
        this.getConsoleLog(stepNumber + "::XXXXXXXXXXXXXXXX");

        if (startTestCaseTimestamp) {
            this.getConsoleLog('This test took: ' + (endTestCaseTimestamp - startTestCaseTimestamp) / 1000 + ' Seconds.');
        } else {
            this.getConsoleLog('This test took: ' + endTestCaseTimestamp / 1000 + ' Seconds.');
        }

        this.getConsoleLog(stepNumber + '::XXXXXXXXXXXXXXXXXXXXXXX ' + '-E---N---D-' + '::XXXXXXXXXXXXXXXXXXXXXXX ');


    } catch (err) {
        this.getConsoleLog(err);

    }
    //return text;

}

this.createTestIt = function(Keyword) {

    var text = "it('" + Keyword + "',function() { \n";
    return text;
}


this.sleep = function() {
   // var text = "driver.sleep(5000) \n";
   // return text;
   return "";
}


this.maximizeWindow = function() {
    var text = "browser.manage().window().maximize();\n";
    return text;
}

this.openRetailUrlRebellion = function(stepNumber, Keyword) {

    var items = this.createTestIt(Keyword);
    items += this.getDriver();
    items += "driver.get('" + envJson.URLRetail + "')\n";
    items += this.startTryCatch();
    items += "expect(element(by.xpath(\"" + uiJson.LoginButtonRetail + "\")).isPresent()).toBe(true) \n"
    items += this.getConsoleLog(stepNumber + "PASS:: Landing page opened");
    items += this.endTryCatch();
    /*items += this.getErrorMessage(err);
    items += this.catchAssertion(err);*/
    items += this.getSingleClosingBrace();
    items += this.getClosingSemiBraces();
    return items;

}

this.loginRetailRepRebellion = function(stepNumber, Keyword) {
    var items = this.createTestIt(Keyword);
    items += this.getDriver();
    items += this.startTryCatch();
    items += "element(by.name('" + uiJson.username + "')).sendKeys('" + envJson.RetailRep + "') \n";
    items += this.getConsoleLog('::Pass----Entered username as:: ' + envJson.RetailRep);
    items += "element(by.name('" + uiJson.password + "')).sendKeys('" + envJson.RetailPassword + "') \n";
    items += this.getConsoleLog(stepNumber + '::Pass----Entered password as:: ' + envJson.RetailPassword);
    items += "expect(element(by.xpath(\"" + uiJson.LoginButtonRetail + "\")).isDisplayed()).toBe(true) \n"
    items += "element(by.xpath(\"" + uiJson.LoginButtonRetail + "\")).click() \n";
    items += this.browserWindowHandle();
    items += this.endTryCatch();
    items += this.getSingleClosingBrace();
    items += this.getClosingSemiBraces();
    return items;
}

this.loginCareRepRebellion = function(stepNumber, Keyword) {

    var items = this.createTestIt(Keyword);

    items += this.getDriver();

    items += this.startTryCatch();

    items += "element(by.name('" + uiJson.username + "')).sendKeys('" + envJson.CareRep + "') \n";

    items += "element(by.name('" + uiJson.password + "')).sendKeys('" + envJson.CarePassword + "') \n";

    items += "element(by.xpath(\"" + uiJson.LoginButtonRetail + "\")).click() \n";

    items += this.browserWindowHandle();

    items += this.getConsoleLog(stepNumber + ':: PASS---- Successfully performed switch window');

    items += "driver.findElement(by.xpath(\"" + uiJson.searchLookup + "\"))\n";

    items += "expect(element(by.xpath(\"" + uiJson.searchLookup + "\")).isDisplayed()).toBe(true) \n"

    items += this.getConsoleLog(stepNumber, '::PASS----User Logged in');

    
    items += this.endTryCatch();

    items += this.getSingleClosingBrace();

    items += this.getClosingSemiBraces();


    return items;
}

this.openWebUrlRebellion = function(stepNumber, Keyword) {
    var items = this.createTestIt(Keyword);

    items += this.getDriver();

    //items += "var ec = protractor.ExpectedConditions; \n";
    items += this.startTryCatch();

    items += "driver.get('" + envJson.URLWeb + "')\n";

   

    items += "driver.findElement(by.xpath(\"" + uiJson.mytmobileLink + "\"))\n";

    items += "expect(element(by.xpath(\"" + uiJson.mytmobileLink + "\")).isDisplayed()).toBe(true) \n"

    
    items += this.getConsoleLog(stepNumber + '::PASS----Landing page opened');

    items += this.endTryCatch();

    items += this.getSingleClosingBrace();

    items += this.getClosingSemiBraces();

    return items;

}

this.openCareUrlRebellion = function(stepNumber, Keyword) {

    var items = this.createTestIt(Keyword);

    items += this.getDriver();

    items += this.startTryCatch();

    items += "driver.get('" + envJson.URLCare + "')\n";

   

    items += "driver.findElement(by.xpath(\"" + uiJson.mytmobileLink + "\"))\n";

    items += "expect(element(by.xpath(\"" + uiJson.mytmobileLink + "\")).isDisplayed()).toBe(true) \n"

    
    items += this.getConsoleLog(stepNumber + '::PASS--- Landing page opened');

    items += this.endTryCatch();

    items += this.getSingleClosingBrace();

    items += this.getClosingSemiBraces();

    return items;

}

this.loginWebRebellion = function(stepNumber, Keyword) {

    var items = this.createTestIt(Keyword);

    items += this.getDriver();

    items += this.startTryCatch();

    items += "element(by.xpath(\"" + uiJson.mytmobileLink + "\")).click() \n";

    

    items += "element(by.name('" + uiJson.username + "')).sendKeys('" + envJson.WebUser2 + "') \n";

    items += "element(by.name('" + uiJson.password + "')).sendKeys('" + envJson.WebPassword + "') \n";

    items += "element(by.xpath(\"" + uiJson.LoginButton + "\")).click() \n";

    

    items += "expect(element(by.xpath(\"" + uiJson.searchLookup + "\")).isDisplayed()).toBe(true) \n"

    items += this.getConsoleLog(stepNumber + '::PASS----Landing page opened');

    items += this.endTryCatch();

    items += this.getSingleClosingBrace();

    items += this.getClosingSemiBraces();

    return items;
}

this.getObjectType = function(objectType) {
    var obj_text = "";
    switch (objectType) {
        case 'XPATH':
            obj_text = "by.xpath(";
            break;
        case 'CLASSNAME':
            obj_text = "by.className(";
            break;
        case 'NAME':
            obj_text = "by.name(";
            break;
        case 'CSS':
            obj_text = "by.css(";
            break;
        case 'ID':
            obj_text = "by.id(";
            break;
        case 'LINK':
            obj_text = "by.link(";
            break;
        case 'PARTIALLINK':
            obj_text = "by.xpath(";
            break;
        default:
            console.log(':::::::No valid Object type mentioned:::::::::' + objectType);

    }
    return obj_text;
}


this.verifyObjectExists = function(stepNumber, objectName, objectType, Keyword) {

    var elm_locator = this.getObjectType(objectType);

    var elm_json = this.getObjJsonValue(objectName);

    var elm_end_locator = ")";

    var items = this.createTestIt(Keyword);

    items += this.getDriver();

    items += this.startTryCatch();

    items += this.findElementWithoutNewline(objectName, objectType);

    items += this.getPromiseStart() + "\n";

    items += this.getConsoleLog(stepNumber + "::" + "PASS-------" + objectName + "---Exists on page ");

    items += "expect(element(" + elm_locator + "\"" + elm_json + "\"" + elm_end_locator + ").isDisplayed()).toBe(true) \n";

    items += this.getPromiseEnd();

    items += this.getConsoleLog(stepNumber + "::" + "FAIL-------" + objectName + "---Not found on page");

    items += this.getClosingSemiBraces();

    items += this.endTryCatch();

    items += this.getSingleClosingBrace();

    items += this.getClosingSemiBraces();

    return items;


}

this.getDriver = function() {
    var text = "var driver = browser.driver \n";
    //text += "driver.get('"++"')";
    return text;
}

this.getEC = function() {
    var text = "var ec = protractor.ExpectedConditions; \n";
    return text;
}

this.findElement = function(objectName, objectType) {

    var elm_locator = this.getObjectType(objectType);

    var elm_json = this.getObjJsonValue(objectName);

    var elm_end_locator = "))";

    var text = "driver.findElement(" + elm_locator + "\"" + elm_json + "\"" + elm_end_locator + "\n";
    //var img =driver.findElement(by.id('recaptcha_image'));
    return text;
}
this.findElementSingle = function(objectName, objectType) {

    var elm_locator = this.getObjectType(objectType);

    var elm_json = this.getObjJsonValue(objectName);

    var elm_end_locator = ")";

    var text = "driver.findElement(" + elm_locator + "\"" + elm_json + "\"" + elm_end_locator + "\n";
    //var img =driver.findElement(by.id('recaptcha_image'));
    return text;
}

this.findElementWithoutNewline = function(objectName, objectType) {

    var elm_locator = this.getObjectType(objectType);

    var elm_json = this.getObjJsonValue(objectName);

    var elm_end_locator = "))";

    var text = this.getDriver();

    text += "driver.findElement(" + elm_locator + "\"" + elm_json + "\"" + elm_end_locator;
    //var img =driver.findElement(by.id('recaptcha_image'));
    return text;
}
this.findElementWithoutNewlineSingle = function(objectName, objectType) {

    var elm_locator = this.getObjectType(objectType);

    var elm_json = this.getObjJsonValue(objectName);

    var elm_end_locator = ")";

    var text = this.getDriver();

    text += "driver.findElement(" + elm_locator + "\"" + elm_json + "\"" + elm_end_locator;
    //var img =driver.findElement(by.id('recaptcha_image'));
    return text;
}

this.isElementPresent = function(objectName, objectType) {

    var elm_locator = this.getObjectType(objectType);

    var elm_json = this.getObjJsonValue(objectName);

    var elm_end_locator = "))";

    var text = "driver.isDisplayed(" + elm_locator + "\"" + elm_json + "\"" + elm_end_locator + "\n";
    //var img =driver.findElement(by.id('recaptcha_image'));
    return text;
}

this.alertAccept = function(stepNumber, Keyword) {

    var items = this.createTestIt(Keyword);

    items += this.getDriver();

    items += "var alert = driver.switchTo().alert().then(function(alert) {\n";

    items += "alert.accept();\n";

    items += this.getConsoleLog(stepNumber + "::" + "::PASS-----Successfully performed alert accept ");

    items += this.getPromiseEnd();

    items += this.getConsoleLog(stepNumber + "::" + "FAIL----------Alert Accept ");

    items += this.getClosingSemiBraces();

    items += this.getClosingSemiBraces();

    return items;

}

this.switchToActive = function(stepNumber, Keyword, value) {

    var items = this.createTestIt(Keyword);

    items += this.getDriver();

    items += "browser.getAllWindowHandles().then(function(handles){ \n";

    items += "browser.switchTo().window(handles[" + value + " -1]) \n";

    items += this.getConsoleLog(stepNumber + "::" + "PASS ---- Successfully switched to active page numer:  " + value);

    items += "}, function(error) {";

    items += this.getConsoleLog(stepNumber + "::" + " FAIL------Error on the page switching to Page:::  " + value);

    items += "}); \n";

    return items;
}

this.click = function(objectName, objectType) {

    var text = this.findElementWithoutNewline(objectName, objectType) + ".click() \n";
    return text;

}
this.clickSingle = function(objectName, objectType) {

    var text = this.findElementWithoutNewlineSingle(objectName, objectType) + ".click() \n";
    return text;

}


this.getObjJsonValue = function(objectName) {
    var value = objJson[objectName];
    // console.log('json value is '+ value);
    return value;

}

this.getSpecifiedJsonValue = function(jsonObjName, keyItem) {
    var value = jsonObjName[keyItem];
    // console.log('json value is '+ value);

    return value;
}



this.clickMyTmobile = function(stepnumber, Keyword) {
    var text = this.createTestIt(Keyword);
    text += this.getDriver();
    text += this.getTryCatchStart();
    //ext +=this.explicitWaitOnJsonElement("//span[text()='My Account Home']","XPATH");
    text += "var e = element(XPATH( " + "\"" + "//span[text()='My Account Home']" + "\"" + "))\n";
    text += "browser.wait(ec.presenceOf(e), 20000)\n";
    text += this.getConsoleLog(stepnumber + '::PASS----Found the my account section as expected');
    text += "}\ncatch(err){\n";
    text += this.getConsoleLog(stepnumber + '::PASS----My Tmobile collapsed expanding it');
    text += "element(by.xpath(" + "\"" + "//span[text()='MY T-MOBILE']" + "\"" + ")).click();\n";
    text += this.getClosingBrace();
    text += "expect(element(by.xpath(" + "\"" + "//span[text()='MY T-MOBILE']" + "\"" + ")).isDisplayed()).toBe(true)\n";
    text += this.getClosingSemiBraces();
    return text;
}
this.placeholderText = function(stepNumber, objectName, objectType, Keyword, parameterOne) {
    var elm_locator = this.getObjectType(objectType);
    var elm_json = this.getObjJsonValue(objectName);
    var elm_end_locator = ")";
    var text = this.createTestIt(Keyword);
    text += "expect(element(" + elm_locator + "\"" + elm_json + "\"" + elm_end_locator + ").isDisplayed()).toBe(true) \n";
    text += this.findElementWithoutNewline(objectName, objectType);
    text += this.getPromiseStart();
    text += "var placetext = elem.getAttribute('placeholder');\n";
    text += "if(placetext.equals('" + parameterOne + "')){ \n";
    text += this.getConsoleLog(stepNumber + '::PASS-----Placeholder text matched :: placeHolderText ' + "::" + objectName);
    text += this.getClosingBrace() + "else { \n";
    text += this.getConsoleLog(stepNumber + '::FAIL-----Placeholder text not matched :: placeHolderText ' + "::" + objectName);
    text += this.getPromiseEnd();
    text += this.getConsoleLog('PROBLEM:: Element not found to check placeholder text:: ' + objectName);
    text += this.getClosingSemiBraces();
    //console.log("place holder text created is "+ text);
    return text;
}

this.clearText = function(stepNumber, objectName, objectType) {
    var elm_locator = this.getObjectType(objectType);
    var elm_json = this.getObjJsonValue(objectName);
    var elm_end_locator = ")";
    var text = "expect(element(" + elm_locator + "\"" + elm_json + "\"" + elm_end_locator + ").isDisplayed()).toBe(true) \n";
    text += this.findElement(objectName, objectType) + ".clear()";
    text += this.getConsoleLog(stepNumber + "::PASS-----Performed clear text on object, " + objectName);
    return text;
}

this.getTryCatchStart = function() {
    var text = "try {\n";
    return text;
}

/*this.getTryCatchEnd = function () {
	 			var text = "} catch (e) { \n";
	 			return text;
				}*/

this.getConsoleLog = function(message) {
    var text
    if (message) {
        text = "console.log('" + message + "');\n";
        //adding message to final log for final log creation
        //finalLog = finalLog+"\n"+message; 
    }
    return text;
}

this.getClosingBrace = function() {

    var braces = "}\n";
    return braces;
}
this.getClosingBrace = function() {

    var braces = "}\n";
    return braces;
}
this.getClosingBraceWithoutNewLine = function() {

    var braces = "}";
    return braces;
}



this.getPromiseStart = function() {
    var text = ".then(function(){";
    return text;
}

this.getPromiseStartForText = function() {
    var text = ".then(function(text){\n";
    return text;
}

this.getPromiseEnd = function() {
    var text = "},function(err){\n";
    return text;
}

this.getClosingSemiBraces = function() {

    var braces = "});\n";
    return braces;
}

this.getClosingBraces = function() {
    var text = "})";
    return text;
}

this.getDoubleBraces = function() {

    var text = "}}";
    return text;
}


this.explicitWaitOnKeywordsElement = function(stepNumber, objectType, objectName, Keyword) {
    var elm_end_locator = ")";
    var text = this.createTestIt(Keyword);
    text += this.getTryCatchStart();
    text += "var ec = protractor.ExpectedConditions;\n";
    text += "var e = element(";
    text += this.getObjectType(objectType) + '"';
    text += this.getObjJsonValue(objectName) + '")';
    text += elm_end_locator + '\n';
    text += "browser.wait(ec.presenceOf(e), 20000)\n";
    text += "expect(e.isPresent()).toBeTruthy()\n";
    text += this.getConsoleLog(stepNumber + '::PASS----Explicit Wait Pass on the object ' + objectName);
    text += this.endTryCatch();
    text += this.getClosingBrace();
    text += this.getClosingSemiBraces();
    return text;
}

this.explicitWaitOnJsonElement = function(element, byway) {
    var text = "var ec = protractor.ExpectedConditions;\n";
    text += "var e = element(" + byway + "(" + "\"" + element + "\"" + "))\n";
    text += "browser.wait(ec.presenceOf(e), 20000)\n";
    text += "expect(e.isPresent()).toBeTruthy()\n";
    return text;
}

this.getErrorMessage = function(errObj) {
    var mess;
    //console.log('inside getErrorMessage of UIoperations with ',errObj);
    switch (errObj.name) {
        case 'NoSuchElementError':
            mess = this.getConsoleLog('No Such Element founcd Exception', errObj.name);
            break;
        case 'NoSuchWindowError':
            mess = this.getConsoleLog('No Such Window Found Error', errObj.name);
            break;
        case 'TypeError':
            mess = this.getConsoleLog('Some Type Error Exist in the Code ', errObj.name);
            break;

        default:
            mess = this.getConsoleLog('Some Unindentified Error occured while processing', errObj.stack);
    }
    return mess;
}

this.generateFinalErrorLog = function(logDirectoryPath) {
    //console.log('Inside addAndGenerateErrorLog method of UIOperations');
    if (finalLog) {
        if (fs.existsSync(logDirectoryPath) === false) {
            fs.mkdirSync(logDirectoryPath);
        }
        //write log file to log folder.
        fs.writeFileSync(logDirectoryPath + '/' + 'TestLog.txt', finalLog);
    }
}

this.genarateJsonForReuse = function(jsonData) {
        var path = './test/test_specs/properties';

        if (jsonData) {
            if (fs.existsSync(path) === false) {
                fs.mkdirSync(path);
            }
            //write log file to log folder.
            fs.writeFileSync(path + '/' + 'searchKeywords.json', jsonData);
        }

    }
    //Method that will create a varible with value as some text by reading an element from dom.
this.storeVariable = function(stepNumber, objectName, objectType, Keyword, paramOne) {
    var elm_locator = this.getObjectType(objectType);
    var elm_json = this.getObjJsonValue(objectName);
    var elm_end_locator = ")";
    var text = this.createTestIt(Keyword);
    text += "expect(element(" + elm_locator + "\"" + elm_json + "\"" + elm_end_locator + ").isDisplayed()).toBe(true) \n";
    text += this.getDriver();
    text += this.getFsForFiles();
    text += this.getJsonObj();
    text += this.getDirectoryPathVarJson();
    text += this.getTryCatchStart();
    text += 'var paramOne ="' + paramOne + '"\n';
    text += this.findElementWithoutNewline(objectName, objectType) + '.getText()';
    text += this.getPromiseStartForText();
    text += 'jsonObj[paramOne] = text; \n';
    text += 'if(text){\n';
    text += 'if (fs.existsSync(directoryPathGlobalVarJson) === false) { \n';
    text += 'fs.mkdirSync(directoryPathGlobalVarJson);\n';
    text += this.getSingleClosingBrace();
    text += 'fs.writeFileSync(directoryPathGlobalVarJson+\'/searchKeywords.json\',JSON.stringify(jsonObj));\n';
    text += this.getConsoleLog(stepNumber + '::PASS----Successfully stored the value:')
    text += 'console.log( JSON.stringify(jsonObj))\n';
    text += this.getSingleClosingBrace();
    text += this.getPromiseEnd();
    text += this.getClosingSemiBraces();
    text += this.endTryCatch();
    text += this.getSingleClosingBrace();
    text += this.getClosingSemiBraces();
    return text;
}


this.verifyTextUsingKeyword = function(stepNumber, objectName, objectType, Keyword, paramOne) {
    var elm_locator = this.getObjectType(objectType);
    var elm_json = this.getObjJsonValue(objectName);
    var elm_end_locator = ")";
    var text = this.createTestIt(Keyword);
    text += this.getDriver();
    text += this.getFsForFiles();
    text += this.getDirectoryPathVarJson();
    text += this.getTryCatchStart();
    text += 'var paramOne = "' + paramOne + '"\n';
    text += 'var searchJson, value1;\n';
    text += 'if(paramOne) {\n';
    text += 'if (fs.existsSync(directoryPathGlobalVarJson+\'/searchKeywords.json\') === true) {\n';
    text += 'searchJson = JSON.parse(fs.readFileSync(directoryPathGlobalVarJson+\'/searchKeywords.json\', {encoding: \'utf8\'}));'
    text += 'value1 = searchJson[paramOne];';
    text += this.findElement(objectName, objectType);
    text += "expect(element(" + elm_locator + "\"" + elm_json + "\"" + elm_end_locator + ").isDisplayed()).toBe(true) \n";
    text += "var actionText = element(" + elm_locator + "\"" + elm_json + "\"" + elm_end_locator + ").getText() \n";
    text += "actionText.then(function(text){ \n";
    text += " if(text == value1){ \n";
    text += this.getConsoleLog(stepNumber + '::Pass----Text of the the object verified and was correct, text is: ');
    text += 'console.log(text)\n';
    text += "} else { \n";
    text += this.getConsoleLog(stepNumber + "::FAIL------Text of the the  object   " + objectName + "  verified and was not correct-----");
    text += " }}, function(err) { \n";
    text += this.getConsoleLog('ELement Not Found fsfsfson the Page');
    text += "}); \n";
    text += this.getSingleClosingBrace();
    text += this.getSingleClosingBrace();
    text += this.endTryCatch();
    text += this.getSingleClosingBrace();
    text += this.getClosingSemiBraces();
    return text;
}




this.startTryCatch = function() {
    var text = 'try{\n';
    return text;
}

this.endTryCatch = function() {
    var text = '}catch(err) {\n';
    text += "expect(err.name).toBe('err is not defined')\n";
    return text;
}
this.getSingleClosingBrace = function() {
    var text = '}\n';
    return text;
}

this.getDirectoryPathVarJson = function() {
    var text = "var directoryPathGlobalVarJson =\'./test/test_specs/properties\' \n";
    return text;
}

this.getFsForFiles = function() {
    var text = "var fs = require(\'fs\'); \n";
    return text;
}

this.getJsonObj = function() {
    var text = "var jsonObj = {}\n";
    return text;
}

//Shailesh Code 


//Shailesh Utility

this.browserWindowHandle = function() {

    var text = "browser.getAllWindowHandles().then(function(handles){ \n";

    text += "browser.switchTo().window(handles[1]) \n";

    text += "}); \n";

    return text;

}

this.getUiJsonValue = function(objectName) {
    var value = uiJson[objectName];
    return value;

}

//To Validate the Date Format as MM/DD/YYYY
this.checkDateFormat = function(dateString) {
    //console.log('date passed' , dateString);
    // First check for the pattern
    if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
        return false;
    // Parse the date parts to integers
    var parts = dateString.split("/");
    var day = parseInt(parts[1], 10);
    var month = parseInt(parts[0], 10);
    var year = parseInt(parts[2], 10);
    // Check the ranges of month and year
    if (year < 1000 || year > 3000 || month == 0 || month > 12)
        return false;
    var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // Adjust for leap years
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;
    // Check the range of the day
    return day > 0 && day <= monthLength[month - 1];
}

this.stopTest = function(objectName, objectType, Keyword) {
    var elm_locator = this.getObjectType(objectType);
    var elm_json = this.getObjJsonValue(objectName);
    var elm_end_locator = ")";
    var items = this.createTestIt(Keyword);
    items += this.getTryCatchStart();
    items += this.getDriver();
    items += "expect(element(" + elm_locator + "\"" + elm_json + "\"" + elm_end_locator + ").isDisplayed()).toBe(true) \n";
    items += "var actionText = element(" + elm_locator + "\"" + elm_json + "\"" + elm_end_locator + ").isDisplayed()\n";
    items += "actionText.then(function(text){ \n";
    items += " if(actionText){ \n"
    items += this.getConsoleLog('FAIL' + "::" + "---Terminating Test because ----" + objectName + "--- appeared ");
    items += "browser.close();\n"
    items += "} else {\n"
    items += this.getConsoleLog('FAIL' + "::" + "---Running Fine");
    items += " }}, function(err) { \n"
    items += this.getConsoleLog('ELement Not Found on the Page');
    items += "}); \n"
    items += this.endTryCatch();
    items += this.getSingleClosingBrace();
    items += this.getClosingSemiBraces();
    return items;
}

//End Shailesh

this.textContains = function(stepNumber, objectName, objectType, Keyword, value) {
    var elm_locator = this.getObjectType(objectType);
    var elm_json = this.getObjJsonValue(objectName);
    var elm_end_locator = ")";
    var items = this.createTestIt(Keyword);
    items += this.getTryCatchStart();
    items += this.getDriver();
    items += this.findElement(objectName, objectType);
    items += "expect(element(" + elm_locator + "\"" + elm_json + "\"" + elm_end_locator + ").isDisplayed()).toBe(true) \n";
    items += "var actionText = element(" + elm_locator + "\"" + elm_json + "\"" + elm_end_locator + ").getText() \n";
    items += "actionText.then(function(text){ \n";
    items += " if(text.indexOf('" + value + "') != '-1'){ \n"
    items += this.getConsoleLog(stepNumber + "::" + 'Pass----' + Keyword + "---Text found and Value = " + value + "--is present in the text ");
    items += "} else {\n"
    items += this.getConsoleLog(stepNumber + "::" + 'Pass-----' + Keyword + "--Text found and but the Value = " + value + "--is not present in the text");
    items += " }}, function(err) { \n"
    items += this.getConsoleLog('ELement Not Found fsfsfson the Page');
    items += "}); \n"
    items += this.endTryCatch();
    items += this.getSingleClosingBrace();
    items += this.getClosingSemiBraces();
    return items;

}
this.linkNewTab = function(stepNumber, objectName, objectType, Keyword) {

    var elm_locator = this.getObjectType(objectType);
    var elm_json = this.getUiJsonValue(objectName);
    var elm_end_locator = ")";
    var items = this.createTestIt(Keyword);
    items += this.getTryCatchStart();
    items += this.getDriver();
     items += "expect(element(" + elm_locator + "\"" + elm_json + "\"" + elm_end_locator + ").isDisplayed()).toBe(true) \n";
    items += "element(" + elm_locator + "\"" + elm_json + "\"" + elm_end_locator + ").click() \n";
       items += this.endTryCatch();
    items += this.getSingleClosingBrace();
    items += this.getClosingSemiBraces();
    return items;
}

this.validateDateFormat = function(stepNumber, Keyword, value) {
    var dateValid = this.checkDateFormat(value);
    var items = this.createTestIt(Keyword);
    //items += this.getTryCatchStart();						
    //items += this.getDriver();
    
    items += this.getConsoleLog('Is Date valid ? ' + dateValid);
    items += " if(" + dateValid + "){ \n"
    items += this.getConsoleLog(stepNumber + "::" + 'Pass----The Date is as per expected format');
    items += "} else {\n"
    items += this.getConsoleLog(stepNumber + "::" + 'Fail----The Date is not as per expected format');
    items += " } \n"
        //items += this.endTryCatch();
    items += this.getClosingSemiBraces();
    return items;
}

this.verifyButton = function(stepNumber, objectName, objectType, Keyword, value) {

    var elm_locator = this.getObjectType(objectType);
    var elm_json = this.getUiJsonValue(objectName);
    var elm_end_locator = ")";
    var items = this.createTestIt(Keyword);
    items += this.startTryCatch();
    items += this.getDriver();
    
    items += "expect(element(" + elm_locator + "\"" + elm_json + "\"" + elm_end_locator + ").isDisplayed()).toBe(true) \n";
    items += "var actionButton = element(" + elm_locator + "\"" + elm_json + "\"" + elm_end_locator + ").getText() \n";
    items += "actionButton.then(function(text){ \n";
    items += " if(text == '" + value + "'){ \n"
    items += this.getConsoleLog(stepNumber + "::" + 'Pass----Object' + objectName + 'Exist On the Page');
    items += "} else {\n"
    items += this.getConsoleLog(stepNumber + "::" + 'Pass----Object' + objectName + 'not found on the Exist On the Page');
    items += " }}, function(err) { \n"
    items += this.getConsoleLog('ELement Not Found on the Page');
    items += "}); \n"
    items += this.endTryCatch();
    items += this.getSingleClosingBrace();
    items += this.getClosingSemiBraces();
    return items;
}

this.verifyObjectNotExists = function(stepNumber, objectName, objectType, Keyword) {

    var elm_locator = this.getObjectType(objectType);
    var elm_json = this.getObjJsonValue(objectName);
    var elm_end_locator = ")";
    var items = this.createTestIt(Keyword);
    items += this.startTryCatch();
    items += this.getDriver();
    items += this.findElement(objectName, objectType);
    items += "expect(element(" + elm_locator + "\"" + elm_json + "\"" + elm_end_locator + ").isDisplayed()).not.toBe(true) \n";
    items += this.getConsoleLog(stepNumber + "::" + "FAIL-------" + objectName + "Exists on page ");
   
    items += this.endTryCatch();
    items += this.getSingleClosingBrace();
    items += this.getClosingSemiBraces();

    return items;

}

this.loginCareRepRebellion = function(stepNumber, objectName, objectType, Keyword) {

    var items = this.createTestIt(Keyword);
    items += this.startTryCatch();
    items += this.getDriver();
    items += "element(by.name('" + uiJson.username + "')).sendKeys('" + envJson.CareRep + "') \n";
    items += "element(by.name('" + uiJson.password + "')).sendKeys('" + envJson.CarePassword + "') \n";
    items += "element(by.xpath(\"" + uiJson.LoginButtonRetail + "\")).click() \n";
    
    items += this.browserWindowHandle();
    items += "driver.findElement(by.xpath(\"" + uiJson.searchLookup + "\"))\n";
    items += "expect(element(by.xpath(\"" + uiJson.searchLookup + "\")).isDisplayed()).toBe(true) \n"
    items += this.getConsoleLog(stepNumber + "::PASS---- User Logged in");
    items += this.endTryCatch();
    items += this.getSingleClosingBrace();
    items += this.getClosingSemiBraces();

    return items;
}
this.loginCareMngrRebellion = function(stepNumber, Keyword) {

    var items = this.createTestIt(Keyword);
    items += this.startTryCatch();
    items += this.getDriver();
    items += "element(by.name('" + uiJson.username + "')).sendKeys('" + envJson.CareManager + "') \n";
    items += "element(by.name('" + uiJson.password + "')).sendKeys('" + envJson.CarePassword + "') \n";
    items += "element(by.xpath(\"" + uiJson.LoginButtonRetail + "\")).click() \n";
   
    items += this.browserWindowHandle();
    items += "driver.sleep(10000) \n";
    items += "driver.findElement(by.xpath(\"" + uiJson.searchLookup + "\"))\n";
    items += "expect(element(by.xpath(\"" + uiJson.searchLookup + "\")).isDisplayed()).toBe(true) \n"
    
    items += this.getConsoleLog(stepNumber + "::PASS---- User Logged in");
    items += this.endTryCatch();
    items += this.getSingleClosingBrace();
    items += this.getClosingSemiBraces();

    return items;
}
this.loginRetailManagerRebellion = function(stepNumber, Keyword) {

    var items = this.createTestIt(Keyword);
    items += this.startTryCatch();
    items += this.getDriver();
    
    items += "element(by.name('" + uiJson.username + "')).sendKeys('" + envJson.RetailManager + "') \n";
    items += "element(by.name('" + uiJson.password + "')).sendKeys('" + envJson.RetailPassword + "') \n";
    items += "element(by.xpath(\"" + uiJson.LoginButtonRetail + "\")).click() \n";
    
    items += this.browserWindowHandle();
    items += "driver.sleep(10000) \n";
    items += "driver.findElement(by.xpath(\"" + uiJson.shopLink + "\"))\n";
    items += "expect(element(by.xpath(\"" + uiJson.shopLink + "\")).isDisplayed()).toBe(true) \n"
    
    items += this.getConsoleLog(stepNumber + "::PASS---- User Logged in");
    items += this.endTryCatch();
    items += this.getSingleClosingBrace();
    items += this.getClosingSemiBraces();

    return items;
}

this.verifyText = function(stepNumber, objectName, objectType, Keyword, value) {
    var elm_locator = this.getObjectType(objectType);
    var elm_json = this.getObjJsonValue(objectName);
    var elm_end_locator = ")";
    var items = this.createTestIt(Keyword);
    items += this.startTryCatch();
    items += this.getDriver();
    items += this.findElement(objectName, objectType);
    items += "expect(element(" + elm_locator + "\"" + elm_json + "\"" + elm_end_locator + ").isDisplayed()).toBe(true) \n";
    items += "var actionText = element(" + elm_locator + "\"" + elm_json + "\"" + elm_end_locator + ").getText() \n";
    items += "actionText.then(function(text){ \n";
    items += " if(text == '" + value + "'){ \n"
    items += this.getConsoleLog(stepNumber + '::Pass----Text of the the  object verified and was correct');
    items += "} else {\n"
    
    items += this.getConsoleLog(stepNumber + "::FAIL------Text of the the  object   " + objectName + "  verified and was not correct-----" + value);
    items += " }}, function(err) { \n"
    items += this.getConsoleLog('ELement Not Found fsfsfson the Page');
    items += "}); \n"
    items += this.endTryCatch();
    items += this.getSingleClosingBrace();
    items += this.getClosingSemiBraces();
    return items;
}


this.verifyObjectTextNotNull = function(stepNumber, objectName, objectType, Keyword) {

    var elm_locator = this.getObjectType(objectType);
    var elm_json = this.getObjJsonValue(objectName);
    var elm_end_locator = ")";
    var items = this.createTestIt(Keyword);
    items += this.startTryCatch();
    items += this.getDriver();
    //items += this.findElement(objectName,objectType);
    items += "expect(element(" + elm_locator + "\"" + elm_json + "\"" + elm_end_locator + ").isDisplayed()).toBe(true) \n";
    items += "var actionText = element(" + elm_locator + "\"" + elm_json + "\"" + elm_end_locator + ").getText() \n";
    items += "actionText.then(function(text){ \n";
    items += " if(text == ''){ \n"
    items += this.getConsoleLog(stepNumber + "::" + "FAIL----" + "There is no text in the object" + objectName);
    //items += this.getConsoleLog('Fail ::There is no text in the object"');
    items += "} else {\n"
   
    items += this.getConsoleLog(stepNumber + "::" + "PASS----" + "Text of the " + objectName + " is not empty and was -----");
    items += " }}, function(err) { \n"
    items += this.getConsoleLog('ELement Not Found on the Page');
    items += "}); \n"
    items += this.endTryCatch();
    items += this.getSingleClosingBrace();
    items += this.getClosingSemiBraces();

    return items;
}

this.verifyTextNotExist = function(stepNumber, objectName, objectType, Keyword, value) {

    var elm_locator = this.getObjectType(objectType);
    var elm_json = this.getObjJsonValue(objectName);
    var elm_end_locator = ")";
    var items = this.createTestIt(Keyword);
    items += this.startTryCatch();
    items += this.getDriver();
    items += this.findElement(objectName, objectType);
    items += "expect(element(" + elm_locator + "\"" + elm_json + "\"" + elm_end_locator + ").isDisplayed()).toBe(true) \n";
    items += "var actionText = element(" + elm_locator + "\"" + elm_json + "\"" + elm_end_locator + ").getText() \n";
    items += "actionText.then(function(text){ \n";
    items += " if(text == '" + value + "'){ \n"
    items += this.getConsoleLog(stepNumber + "::" + "FAIL------Text is present on the page for following object-----" + objectName + "Expected was=" + value + " actual was=" + text);
    items += "} else {\n"
    
    items += this.getConsoleLog(stepNumber + "::" + "PASS------Text does not exist on the page for the the  object   " + objectName + "  verified and was correct-----" + value);
    items += " }}, function(err) { \n"
    items += this.getConsoleLog('ELement Not Found on the Page');
    items += "}); \n"
    items += this.endTryCatch();
    items += this.getSingleClosingBrace();
    items += this.getClosingSemiBraces();

    return items;
}

this.refreshWindow = function(stepNumber, Keyword) {

    var text = this.createTestIt(Keyword);
    text += this.getDriver();
    text += "var ExactUrl = browser.getCurrentUrl() \n";
    text += "driver.navigate().refresh() \n";
    text += this.getConsoleLog(stepNumber + ":: PASS---- Page refresh successfull");
    
    text += "expect(ExactUrl).toBe(browser.getCurrentUrl()) \n";
    text += this.getClosingSemiBraces();
    return text;
}
this.checkTextAndClick = function(stepNumber, objectName, objectType, Keyword, value) {

    var elm_locator = this.getObjectType(objectType);
    var elm_json = this.getObjJsonValue(objectName);
    var elm_end_locator = ")";
    var text = this.createTestIt(Keyword);
    text += this.startTryCatch();
    text += this.getDriver();
    text += "expect(element(" + elm_locator + "\"" + elm_json + "\"" + elm_end_locator + ").isDisplayed()).toBe(true) \n";
    //text += "var actionText = element("+elm_locator+"\""+elm_json +"\""+ elm_end_locator+") \n";
    text += "var actionText = element(" + elm_locator + "\"" + elm_json + "\"" + elm_end_locator + ").getText() \n";
    text += "actionText.then(function(text){ \n";
    text += " if(text == '" + value + "'){ \n"
    text += this.getConsoleLog(stepNumber + "::" + "PASS------Value Match");
    text += "actionText.click() \n"
    
    text += "} else {\n"
    text += this.getConsoleLog(stepNumber + "::" + "PASS------Value  Not Match");
    
    text += " }}, function(err) { \n"
    text += this.getConsoleLog('ELement Not Found on the Page');
    text += "}); \n"
    text += this.endTryCatch();
    text += this.getSingleClosingBrace();
    text += this.getClosingSemiBraces();
    return text;
}
this.verifyPageTitle = function(stepNumber, Keyword, value) {

    var items = this.createTestIt(Keyword);
    items += this.startTryCatch();
    items += this.getDriver();
    items += "var actionText = browser.driver.getTitle(); \n";
    items += "actionText.then(function(text){ \n";
    items += "expect(text== '" + value + "').toBe(true)\n"
    items += " if(text == '" + value + "'){ \n"
    items += this.getConsoleLog(stepNumber + '::Pass----Text of the the  object verified and was correct');
    items += "} else {\n"
   
    items += this.getConsoleLog(stepNumber + "::FAIL------Text of the the  object verified and was not correct-----" + value);
    items += " }}, function(err) { \n"
    items += this.getConsoleLog('ELement Not Found fsfsfson the Page');
    items += "}); \n"
    items += this.endTryCatch();
    items += this.getSingleClosingBrace();
    items += this.getClosingSemiBraces();

    return items;
}
this.sendKey = function(stepNumber, objectName, objectType, Keyword, value) {

    var elm_locator = this.getObjectType(objectType);
    var elm_json = this.getUiJsonValue(objectName);
    var elm_end_locator = ")";
    var text = this.createTestIt(Keyword);
    text += this.startTryCatch();
    text += this.getDriver();
    text += "expect(element(" + elm_locator + "\"" + elm_json + "\"" + elm_end_locator + ").isDisplayed()).toBe(true) \n";
    text += "element(" + elm_locator + "\"" + elm_json + "\"" + elm_end_locator + ").sendKeys('" + value + "') \n";
    
    text += this.getConsoleLog(stepNumber + ":: PASS---- Entered value " + parameterOne + " on " + objectName);
    text += this.endTryCatch();
    text += this.getSingleClosingBrace();
    text += this.getClosingSemiBraces();

    return text;
}
this.windowClose = function(stepNumber, Keyword) {

        var items = this.createTestIt(Keyword);
        items += this.startTryCatch();
        items += this.getDriver();
        items += "browser.close();\n"
        items += this.getConsoleLog(stepNumber + "::PASS-----Window close operation performed");
        items += this.endTryCatch();
        items += this.getSingleClosingBrace();
        items += this.getClosingSemiBraces();

        return items;
    }
    //To Be varified 
this.switchFrame = function(stepNumber, Keyword, value) {

        var items = this.createTestIt(Keyword);
        items += this.startTryCatch();
        //items += this.getDriver();driver.switchTo().frame(iframe) -If gives max stack size error try below one
        //browser.driver.findelements(locator) instead of element(locator)
        //Here value is some iframe id provided by ExcelSheet 
        items += "browser.switchTo().frame('" + value + "');\n"
        items += this.getConsoleLog(stepNumber + ":: PASS-------Successfully switchFrame");
        items += this.endTryCatch();
        items += this.getSingleClosingBrace();
        items += this.getClosingSemiBraces();

        return items;
    }
    //To Be varified 
this.switchFrameParent = function(stepNumber, Keyword, value) {
    var items = this.createTestIt(Keyword);
    items += this.startTryCatch();
    //items += this.getDriver();driver.switchTo().frame(iframe) -If gives max stack size error try below one
    //browser.driver.findelements(locator) instead of element(locator)
    //Here value is some iframe id provided by ExcelSheet 
    items += "browser.switchTo().parentFrame('" + value + "');\n"
    items += this.getConsoleLog(stepNumber + ":: PASS-------Successfully switchFrameParent");
    items += this.endTryCatch();
    items += this.getSingleClosingBrace();
    items += this.getClosingSemiBraces();

    return items;
}
this.goBackPreviousUrl = function(stepNumber, Keyword) {
        var text = this.createTestIt(Keyword);
        text += this.getDriver();
        text += "var ExactUrl = browser.getCurrentUrl() \n";
        text += "driver.navigate().back() \n";
        text += this.getConsoleLog(stepNumber + ":: PASS-------Successfully redirectring to the previous link");
       
        text += "expect(ExactUrl).not.toBe(browser.getCurrentUrl()) \n";
       
        text += this.getClosingSemiBraces();
        return text;
    }
    //Need To Varify when Scenerio Presnt
this.switchTab = function(stepNumber, Keyword) {
    var text = this.createTestIt(Keyword);
    text += this.startTryCatch();
    text += this.getDriver();
   
    text += this.browserWindowHandle();
    text += this.getConsoleLog(stepNumber + ":: PASS-------Successfully perfomed switch Tab");
    text += this.endTryCatch();
    text += this.getSingleClosingBrace();
    text += this.getClosingSemiBraces();

    return text;
}
this.mouseHover = function(stepNumber, objectName, objectType, Keyword) {
    var elm_locator = this.getObjectType(objectType);
    var elm_json = this.getObjJsonValue(objectName);
    var elm_end_locator = ")";
    var text = this.createTestIt(Keyword);
    text += this.getDriver();
    text += "expect(element(" + elm_locator + "\"" + elm_json + "\"" + elm_end_locator + ").isDisplayed()).toBe(true) \n";
    //text += " var ptor = browser.driver; \n"
    text += "driver.actions().mouseMove(element(" + elm_locator + "\"" + elm_json + "\"" + elm_end_locator + ")).perform();\n"
    
    text += this.getConsoleLog(stepNumber + ":: PASS-------Successfully perfomed Mouse Hover");
    text += this.getClosingSemiBraces();
    return text;
}
this.getOptionWithText = function(value) {

    var optionTextXpath = ("//ancestor::div//div[contains(@class,'select2-drop')]//li//div[contains(text(),'" + value + "')]")
    return optionTextXpath;

}
this.getOptionCount = function(value) {

    var optionTextXpath = ("//ancestor::div//div[contains(@class,'select2-drop')]//li")
    return optionTextXpath;

}
this.selectByText = function(stepNumber, objectName, objectType, Keyword, value) {
    var elm_locator = this.getObjectType(objectType);
    var elm_json = this.getUiJsonValue(objectName);
    var elm_end_locator = ")";

    var selectElement = this.getOptionWithText(value);

    var items = this.createTestIt(Keyword);
    items += this.getDriver();
    items += this.startTryCatch();
    //items += "var ec = protractor.ExpectedConditions;\n";
    
    /*Start Need To remove this as it used to create test scenerio*/
    //performing click on the account look up that appers on the right side
    items += "element(by.xpath(\"" + uiJson.accountLookup + "\")).click() \n";
    
    //waiting for the close all accounts links to appear and performing click on it
    //items += this.explicitWaitOnJsonElement(uiJson.closeAllLink,'by.xpath');

    items += "element(by.xpath(\"" + uiJson.closeAllLink + "\")).click() \n";
    
    items += this.getConsoleLog(stepNumber + "::PASS----Closed all accounts");
    


    //waiting for customer look up and performing click 
    //items += this.explicitWaitOnJsonElement(uiJson.customer_Lookup,'by.xpath');
    
    items += "element(by.xpath(\"" + uiJson.customer_Lookup + "\")).click() \n";

    items += this.getConsoleLog(stepNumber + "::Pass----Successfully performed click on lookup option");
    /*End Remove*/
    //waiting for the default drop down option i.e. mobile number to be "displayed and clickable" and then performing click on it
    
    //text += "browser.wait(protractor.ExpectedConditions.elementToBeClickable(element(by.xpath(\""+uiJson.DefaultDropdownOption+"\")), 10000))\n";
    items += "element(by.xpath(\"" + uiJson.DefaultDropdownOption + "\")).click() \n";
    
    //working

    items += "element(" + elm_locator + "\"" + elm_json + selectElement + "\"" + elm_end_locator + ").click() \n";
    
    items += this.getConsoleLog(stepNumber + "::Successfully Selected the dropdown with text:: " + value);

    items += this.endTryCatch();
    items += this.getSingleClosingBrace();
    items += this.getClosingSemiBraces();

    return items;
}
this.dropDownValueCompare = function(stepNumber, objectName, objectType, Keyword, value) {
    var elm_locator = this.getObjectType(objectType);
    var elm_json = this.getUiJsonValue(objectName);
    var elm_end_locator = ")";

    var selectElement = this.getOptionWithText(value);

    var items = this.createTestIt(Keyword);
    items += this.getDriver();
    items += this.startTryCatch();
    //items += "var ec = protractor.ExpectedConditions;\n";
    
    /*Start Need To remove this as it used to create test scenerio*/

    //performing click on the account look up that appers on the right side
    items += "element(by.xpath(\"" + uiJson.accountLookup + "\")).click() \n";
   
    //waiting for the close all accounts links to appear and performing click on it
    //items += this.explicitWaitOnJsonElement(uiJson.closeAllLink,'by.xpath');

    items += "element(by.xpath(\"" + uiJson.closeAllLink + "\")).click() \n";
   
    items += this.getConsoleLog(stepNumber + "::PASS----Closed all accounts");
  


    //waiting for customer look up and performing click 
    //items += this.explicitWaitOnJsonElement(uiJson.customer_Lookup,'by.xpath');
    
    items += "element(by.xpath(\"" + uiJson.customer_Lookup + "\")).click() \n";

    items += this.getConsoleLog(stepNumber + "::Pass----Successfully performed click on lookup option");
    /*End Remove*/
    //waiting for the default drop down option i.e. mobile number to be "displayed and clickable" and then performing click on it
   
    //text += "browser.wait(protractor.ExpectedConditions.elementToBeClickable(element(by.xpath(\""+uiJson.DefaultDropdownOption+"\")), 10000))\n";
    items += "element(by.xpath(\"" + uiJson.DefaultDropdownOption + "\")).click() \n";
    
    //working
    items += "expect(element(" + elm_locator + "\"" + elm_json + selectElement + "\"" + elm_end_locator + ").isDisplayed()).toBe(true)\n"

    
    items += this.getConsoleLog(stepNumber + "::Successfully located the dropdown with text:: " + value);

    items += this.endTryCatch();
    items += this.getSingleClosingBrace();
    items += this.getClosingSemiBraces();

    return items;
}
this.validateDropDownCount = function(stepNumber, objectName, objectType, Keyword, value) {
    var elm_locator = this.getObjectType(objectType);
    var elm_json = this.getUiJsonValue(objectName);
    var elm_end_locator = ")";

    //var selectElement = "//ancestor::div//div[contains(@class,'select2-drop')]//li";
    var selectElement = this.getOptionCount(value);


    var items = this.createTestIt(Keyword);
    items += this.getDriver();
    items += this.startTryCatch();
    //items += "var ec = protractor.ExpectedConditions;\n";
    
    /*Start Need To remove this as it used to create test scenerio*/

    //performing click on the account look up that appers on the right side
    items += "element(by.xpath(\"" + uiJson.accountLookup + "\")).click() \n";
    
    //waiting for the close all accounts links to appear and performing click on it
    //items += this.explicitWaitOnJsonElement(uiJson.closeAllLink,'by.xpath');

    items += "element(by.xpath(\"" + uiJson.closeAllLink + "\")).click() \n";
    
    items += this.getConsoleLog(stepNumber + "::PASS----Closed all accounts");
    


    //waiting for customer look up and performing click 
    //items += this.explicitWaitOnJsonElement(uiJson.customer_Lookup,'by.xpath');
    
    items += "element(by.xpath(\"" + uiJson.customer_Lookup + "\")).click() \n";

    items += this.getConsoleLog(stepNumber + "::Pass----Successfully performed click on lookup option");
    /*End Remove*/
    //waiting for the default drop down option i.e. mobile number to be "displayed and clickable" and then performing click on it
    
    //text += "browser.wait(protractor.ExpectedConditions.elementToBeClickable(element(by.xpath(\""+uiJson.DefaultDropdownOption+"\")), 10000))\n";
    items += "element(by.xpath(\"" + uiJson.DefaultDropdownOption + "\")).click() \n";
   
    //working
    items += "element.all(" + elm_locator + "\"" + elm_json + selectElement + "\"" + elm_end_locator + ").then(function(items) { \n";
    items += "expect (items.length).toBe('" + value + "') \n"
    items += this.getClosingSemiBraces();

    
    items += this.getConsoleLog(stepNumber + "::Successfully located the dropdown with text:: " + value);

    items += this.endTryCatch();
    items += this.getSingleClosingBrace();
    items += this.getClosingSemiBraces();

    return items;
}

//Shailesh End


//Tarlochan Code 
this.verifyLinkUrl = function(stepNumber, objectName, objectType, value, Keyword) {
    var elm_locator = this.getObjectType(objectType);
    var elm_json = this.getObjJsonValue(objectName);
    var elm_end_locator = ")";
    var text = this.createTestIt(Keyword);
    text += this.startTryCatch();
    text += "var link = element(" + elm_locator + "\"" + elm_json + "\"" + elm_end_locator + ").getAttribute('href')\n";
    text += "link.then(function(text){ \n";
    text += "expect(text=='" + value + "').toBe(true)\n"
    text += "if(text == '" + value + "'){\n";
    text += this.getConsoleLog(stepNumber + "::PASS----The URL of the link is verified and is as expected ");
    text += "}else { \n";
    text += this.getConsoleLog(stepNumber + "::FAIL----The URL is not as expected");
    text += " }}, function(err) { \n"
    text += this.getConsoleLog(stepNumber + "::FAIL----Due to some error");
    text += "}); \n"
    text += this.endTryCatch();
    /* 	text += this.catchAssertion(err);*/
    text += this.getSingleClosingBrace();
    text += this.getClosingSemiBraces();
    return text;
};

//Validates the current Url with the expected one
this.verifyUrl = function(stepNumber, Value, Username, Keyword) {
    var text = this.createTestIt(Keyword);
    text += this.startTryCatch();
    text += this.getEC();
    text += "var ExactUrl = browser.getCurrentUrl() \n";
    text += "ExactUrl.then(function(text){ \n";
    switch (Value) {
        case "Web":
            text += "expect(text == '" + envJson.URLWeb + "/" + Username + "').toBe(true)\n"
            text += "if(text== '" + envJson.URLWeb + "/" + Username + "'){ \n"
            text += this.getConsoleLog(stepNumber + "::PASS----The expected URL is found correct in web");
            text += "}\nelse{";
            text += this.getConsoleLog(stepNumber + "::FAIL----The expected Url is not correct in web") + "}";
            break;

        case "Retail":
            text += "expect(text. == '" + envJson.URLRetail + "/" + Username + "').toBe(true)\n"
            text += "if(text== '" + envJson.URLRetail + "/" + Username + "'){ \n"
            text += this.getConsoleLog(stepNumber + "::PASS----The expected URL is found correct in Retail");
            text += "}\nelse{";
            text += this.getConsoleLog(stepNumber + "::FAIL---The expected Url is not correct in Retail") + "\n}";
            break;

        case "Care":
            text += "expect(text == '" + envJson.URLCare + "/" + Username + "').toBe(true)\n"
            text += "if(text == '" + envJson.URLCare + "/" + Username + "'){ \n"
            text += this.getConsoleLog(stepNumber + "::PASS----The expected URL is found correct in Care");
            text += "}\nelse{";
            text += this.getConsoleLog(stepNumber + "::FAIL----The expected Url is not correct in Care") + "\n}";
            break;

        default:
            text += this.getConsoleLog(stepNumber + "::FAIL----The value entered should be web, retail or care in the value coloumn");
    }
    text += this.getPromiseEnd();
    text += this.getClosingSemiBraces();
    text += this.endTryCatch();
    //	text += this.catchAssertion(err);
    //	text += this.getErrorMessage(err);
    text += this.getSingleClosingBrace();
    text += this.getClosingSemiBraces();
    return text;
};

//Performs rebellion logout
this.rebellionLogout = function(stepNumber, Keyword) {
    var text = this.createTestIt(Keyword);
    text += this.startTryCatch();
    text += this.explicitWaitOnJsonElement(uijson.mytmobileLink, 'by.xpath');
    text += "element(by.xpath(\"" + uiJson.mytmobileLink + "\")).click() \n";
    text += this.explicitWaitOnJsonElement(uijson.logoutLink, 'by.xpath');
    text += "element(by.xpath(\"" + uiJson.logoutLink + "\")).click() \n";
    text += this.explicitWaitOnJsonElement(uijson.logo, 'by.xpath');
    text += this.getConsoleLog(stepNumber + "::PASS----Logged out successfully");
    text += this.endTryCatch();
    /*text += this.catchAssertion(err);*/
    text += this.getErrorMessage(err);
    text += this.getSingleClosingBrace();
    text += this.getClosingSemiBraces();
    return text;
}


this.openUrl = function(stepNumber, value, Keyword) {
    var text = this.createTestIt(Keyword);
    text += this.startTryCatch();
    text += this.getDriver();
    text += "driver.get('" + value + "')\n";
    text += this.getConsoleLog(stepNumber + "::PASS----Successfully entered URL as " + value);
    text += "var CurrentUrl = browser.getCurrentUrl() \n";
    text += "CurrentUrl.then(function(text){ \n";
    text += "expect(text.indexOf('" + value + "') != '-1').toBe(true)\n";
    text += this.getPromiseEnd();
    text += this.getClosingSemiBraces();
    text += this.endTryCatch();
    /*text += this.catchAssertion(err);
						text += this.getErrorMessage(err);
*/
    text += this.getConsoleLog(stepNumber + "::Caught the exception in catch block of openUrl");
    text += this.getSingleClosingBrace();
    text += this.getClosingSemiBraces();
    return text;
}


this.verify_Attribute = function(stepNumber, objectName, objectType, Value, Username, Keyword) {
    var elm_locator = this.getObjectType(objectType);
    var elm_json = this.getObjJsonValue(objectName);
    var elm_end_locator = ")";
    var text = this.createTestIt(Keyword);
    text += this.startTryCatch();
    text += this.getDriver();
    text += "element(" + elm_locator + "\"" + elm_json + "\"" + elm_end_locator + ").getAttribute('" + Value + "').then(function(text) {\n"
    text += "expect(text=='" + Username + "').toBe(true)\n"
    text += "if(text =='" + Username + "'){\n";
    text += this.getConsoleLog(stepNumber + "::PASS----The attribute value is found as expected")
    text += "}\nelse{"
    text += this.getConsoleLog(stepNumber + "::FAIL----The attribute value is not the same as expected");
    
    text += this.getSingleClosingBrace();
    text += this.getClosingSemiBraces();
    text += this.endTryCatch();
    /*	text += this.getErrorMessage(err);
    	text += this.catchAssertion(err);*/
    text += this.getConsoleLog(stepNumber + "::FAIL----Exception caught in the catch block of verify attribute");
    text += this.getSingleClosingBrace();
    text += this.getClosingSemiBraces();
    return text;
}


this.pageUp = function(stepNumber, Keyword) {
    var text = this.createTestIt(Keyword);
    text += this.startTryCatch();
    text += "expect(browser.executeScript('window.scrollTo(0,0);')).toBe(null)\n";
    text += this.getConsoleLog(stepNumber + "::PASS----Successfullu scrolled Up");
    text += this.endTryCatch();
    /*text += this.getErrorMessage(err);
    text += this.catchAssertion(err);*/
    text += this.getSingleClosingBrace();
    text += this.getClosingSemiBraces();
    return text;
}


this.pageDown = function(stepNumber, Keyword) {
    var text = this.createTestIt(Keyword);
    text += this.startTryCatch();
    text += "expect(browser.executeScript('window.scrollTo(0,10000);')).toBe(null)\n";
    text += this.getConsoleLog(stepNumber + "::PASS----Successfully scrolled Down");
    text += this.endTryCatch();
    /*text += this.getErrorMessage(err);
    text += this.catchAssertion(err);*/
    text += this.getSingleClosingBrace();
    text += this.getClosingSemiBraces();
    return text;
}


this.verifyObjectEnabled = function(stepNumber, objectName, objectType, Keyword) {

    var elm_locator = this.getObjectType(objectType);
    var elm_json = this.getObjJsonValue(objectName);
    var elm_end_locator = ")";
    var text = this.createTestIt(Keyword);
    text += this.startTryCatch();
    text += this.getDriver();
    //text += this.verifyElementExist(objectName,objectType);
    text += "expect(element(" + elm_locator + "\"" + elm_json + "\"" + elm_end_locator + ").isEnabled()).toBe(true)\n"
    text += "if(element(" + elm_locator + "\"" + elm_json + "\"" + elm_end_locator + ").isEnabled()){ \n";
    text += this.getConsoleLog(stepNumber + "::PASS----The element is found to be enabled as expected");
    text += "}else{";
    text += this.getConsoleLog(stepNumber + "::FAIL----The element is not enabled");
    text += "}";
    //text += "expect(element("+elm_locator+"\""+elm_json +"\""+ elm_end_locator+").isEnabled()).toBe(true) \n";
    
    text += this.endTryCatch();
    /*text += this.getErrorMessage(err);
    text += this.catchAssertion(err);*/
    text += this.getClosingBrace();
    text += this.getClosingSemiBraces();
    return text;


}



this.sendkeysEnvironemnt = function(stepNumber, objectName, objectType, value, Keyword) {

    var elm_locator = this.getObjectType(objectType);
    var elm_json = this.getObjJsonValue(objectName);
    var elm_end_locator = ")";
    var text = this.createTestIt(Keyword);
    text += this.startTryCatch();
    text += this.getDriver();
    text += "expect(element(" + elm_locator + "\"" + elm_json + "\"" + elm_end_locator + ").isDisplayed()).toBe(true)\n"
        //text += this.verifyElementExist(objectName,objectType);
    text += "element(" + elm_locator + "\"" + elm_json + "\"" + elm_end_locator + ").sendKeys('" + this.getObjEnvValue(value) + "') \n";
    text += this.getConsoleLog(stepNumber + "::PASS----Successfully entered value from the environment file for: " + objectName + " ,value entered: " + this.getObjEnvValue(value));
    //text += console.log(value);	
   
    text += this.endTryCatch();
    /*text += this.getErrorMessage(err);
    text += this.catchAssertion(err);*/
    text += this.getClosingBrace();
    text += this.getClosingSemiBraces();
    return text;
}

//Gets the value from the environment file
this.getObjEnvValue = function(objectName) {
    var value = envJson[objectName];
    return value;
}

this.validateExactUrl = function(stepNumber, value, Keyword) {
    var text = this.createTestIt(Keyword);
    text += this.startTryCatch();
    text += "var ExactUrl = browser.getCurrentUrl() \n";
    text += "ExactUrl.then(function(text){ \n";
    text += "expect(text == '" + value + "').toBe(true)\n"
    text += " if(text == '" + value + "'){ \n"
    text += this.getConsoleLog(stepNumber + "::PASS----The expected URL is found right");
    text += "} else {\n"
    text += this.getConsoleLog(stepNumber + "::FAIL----The expected URL is not found right");
    //text += "}"
    /*text += this.getErrorMessage(err);
    text += this.catchAssertion(err);*/
    text += this.getSingleClosingBrace();
    text += " }, function(err) { \n"
    text += this.getConsoleLog(stepNumber + "::FAIL----Getting some error");
    text += "}); \n"
    text += this.endTryCatch();
    text += this.getSingleClosingBrace();
    text += this.getClosingSemiBraces();
    return text;
}

this.verifyLink = function(stepNumber, objectName, objectType, value, Keyword) {
    var text = this.createTestIt(Keyword);
    var elm_locator = this.getObjectType(objectType);
    var elm_json = this.getObjJsonValue(objectName);
    var elm_end_locator = ")";
    text += this.startTryCatch();
    text += "var ec = protractor.ExpectedConditions;\n";
    //text += this.verifyElementExist(objectName,objectType);
    text += "expect(element(" + elm_locator + "\"" + elm_json + "\"" + elm_end_locator + ").isDisplayed()).toBe(true)\n";
    text += this.getConsoleLog(stepNumber + "::PASS----The Link is displayed as expected")
    text += "if(element(" + elm_locator + "\"" + elm_json + "\"" + elm_end_locator + ").getText().toBe('" + value + "')){ \n";
    text += this.getConsoleLog(stepNumber + "::PASS----The Link is equal to the URL as expected")
    text += "}else{\n"
    text += this.getConsoleLog(stepNumber + "::FAIL----The link text is not equal")
    text += this.getSingleClosingBrace();
    text += this.endTryCatch();
    /*	text += this.getErrorMessage(err);
    	text += this.catchAssertion(err);*/
    text += this.getSingleClosingBrace();
    text += this.getClosingSemiBraces();
    return text;
}




this.checkboxStatusValidate = function(stepNumber, objectName, objectType, value, Keyword) {
    var elm_locator = this.getObjectType(objectType);
    var elm_json = this.getObjJsonValue(objectName);
    var elm_end_locator = ")";
    var text = this.createTestIt(Keyword);
    text += this.startTryCatch();
    text += this.getConsoleLog(stepNumber + "::----The expected value from the object is " + value);
    switch (value) {

        case 'TRUE':
            text += "expect(element(" + elm_locator + "\"" + elm_json + "\"" + elm_end_locator + ").isSelected()).toBe(true)\n"
            text += "if(element(" + elm_locator + "\"" + elm_json + "\"" + elm_end_locator + ").isSelected()){ \n";
            text += this.getConsoleLog(stepNumber + "::PASS----The Result is true as expected");
            text += "}else{\n";
            text += this.getConsoleLog(stepNumber + "::FAIL----The checkbox status is not true")
            text += "}"
            break;

        case 'FALSE':
            text += "expect(element(" + elm_locator + "\"" + elm_json + "\"" + elm_end_locator + ").isSelected()).toBe(false)\n"
            text += "if(!element(" + elm_locator + "\"" + elm_json + "\"" + elm_end_locator + ").isSelected()){ \n";
            text += this.getConsoleLog(stepNumber + "::PASS----The Result is false as expected");
            text += "}else{\n";
            text += this.getConsoleLog(stepNumber + "::FAIL----The checkbox status is not false")
            text += "}"
            break;
    }
    text += this.endTryCatch();
    /*text += this.getErrorMessage(err);
    text += this.catchAssertion(err);*/
    text += this.getSingleClosingBrace();
    text += this.getClosingSemiBraces();
    return text;
}


//Not tested
this.switchFrame = function(stepNumber, value, Keyword) {
    var text = this.createTestIt(Keyword);
    text += "browser.sleep('10000')\n";
    text += "expect(element(by.id('" + value + "')).isDisplayed()).toBe(true)"
    text += "browser.driver.switchTo().frame(element(by.id('" + value + "')))\n";
    text += this.getConsoleLog(stepNumber + "::PASS----Successfully switched to the frame");
    text += this.getClosingSemiBraces();
    return text;
}


this.clickObject = function(stepNumber, objectName, objectType, Keyword) {
    var elm_locator = this.getObjectType(objectType);
    var elm_json = this.getObjJsonValue(objectName);
    var elm_end_locator = ")";
    var text = this.createTestIt(Keyword);
    text += this.getDriver();
   
    text += "expect(element(" + elm_locator + "\"" + elm_json + "\"" + elm_end_locator + ").isDisplayed()).toBe(true) \n";
    text += this.click(objectName, objectType);
    
    text += this.getConsoleLog(stepNumber + "::PASS----Successfully perfomed click on " + objectName);
    text += this.getClosingSemiBraces();
    return text;
}


//Modified in test spec also
this.urlContains = function(stepNumber, value, Keyword) {
    var text = this.createTestIt(Keyword);
    text += this.startTryCatch();
    text += this.getDriver();
    text += this.getEC();
    text += "var UrlText = browser.getCurrentUrl()\n";
    text += "UrlText.then(function(text){\n"
    text += "expect(text.indexOf('" + value + "') != '-1').toBe(true)\n"
    text += "if(text.indexOf('" + value + "') != '-1'){ \n";
    text += this.getConsoleLog(stepNumber + "::Pass----URL contains the expected value");
    text += "}else{\n"
    text += this.getConsoleLog(stepNumber + "::FAIL----URL does not contain the expected value");
    text += "}}, function(err) {\n"
    text += this.getConsoleLog(stepNumber + "::FAIL----Due to some error");
    text += "});\n";
    text += this.endTryCatch();
    /*text += this.getErrorMessage(err);
    text += this.catchAssertion(err);*/
    text += this.getSingleClosingBrace();
    text += this.getClosingSemiBraces();
    return text;
}


//After logining in retail or care application this closes all the accounts and clicks on look up

this.customerLogin = function(stepNumber, value, Password, Keyword) {
    var text = this.createTestIt(Keyword);
    text += this.startTryCatch();
    text += this.getDriver();

    //waiting for the page to get loaded
    text += "var ec = protractor.ExpectedConditions;\n";
    

    //performing click on the account look up that appers on the right side
    text += "element(by.xpath(\"" + uiJson.accountLookup + "\")).click() \n";
    
    //waiting for the close all accounts links to appear and performing click on it
    text += this.explicitWaitOnJsonElement(uiJson.closeAllLink, 'by.xpath');

    text += "element(by.xpath(\"" + uiJson.closeAllLink + "\")).click() \n";
    
    text += this.getConsoleLog(stepNumber + "::PASS----Closed all accounts");



    //waiting for customer look up and performing click 
    text += this.explicitWaitOnJsonElement(uiJson.customer_Lookup, 'by.xpath');
   
    text += "element(by.xpath(\"" + uiJson.customer_Lookup + "\")).click() \n";

    text += this.getConsoleLog(stepNumber + "::Pass----Successfully performed click on lookup option");

    //waiting for the default drop down option i.e. mobile number to be "displayed and clickable" and then performing click on it
    
    //text += "browser.wait(protractor.ExpectedConditions.elementToBeClickable(element(by.xpath(\""+uiJson.DefaultDropdownOption+"\")), 10000))\n";
    text += "element(by.xpath(\"" + uiJson.DefaultDropdownOption + "\")).click() \n";
   
    text += this.getConsoleLog(stepNumber + "::Pass----Successfully found text mobile number");
    text += this.getConsoleLog(stepNumber + "::Pass----Successfully clicked on the mobile number");

    //validating if the user wants to log in via email or phone number

    switch (Password) {

        case "PHONE":
            text += this.explicitWaitOnJsonElement(uiJson.mobileNumberOption, 'by.xpath');
            text += "element(by.xpath(\"" + uiJson.mobileNumberOption + "\")).click() \n";
            
            text += this.getConsoleLog(stepNumber + "::Pass----Successfully found text mobile number");
            text += this.getConsoleLog(stepNumber + "::Pass----Successfully clicked on the mobile number");

            text += this.explicitWaitOnJsonElement(uiJson.msisdnTextbox, 'by.name');
            text += this.getConsoleLog(stepNumber + "::Pass----Successfully found look up feild");
            text += "element(by.name('" + uiJson.msisdnTextbox + "')).sendKeys('" + this.getObjEnvValue(value) + "') \n";
            
            text += this.getConsoleLog(stepNumber + "::Pass----Entered value  on look field");

            break;

        case "EMAIL":
            text += this.explicitWaitOnJsonElement(uiJson.emailOption, 'by.xpath');
            text += "element(by.xpath(\"" + uiJson.emailOption + "\")).click() \n";
            
            text += this.getConsoleLog(stepNumber + "::Pass----Performed click on email tab");

            text += this.explicitWaitOnJsonElement(uiJson.emailAddressTextbox, 'by.xpath');
            text += this.getConsoleLog(stepNumber + "::Pass found email address input feild");
            
            text += "element(by.xpath(\"" + uiJson.emailAddressTextbox + "\")).sendKeys('" + this.getObjEnvValue(value) + "')\n";
            


            text += this.getConsoleLog(stepNumber + "::Pass----Successfully entered email " + this.getObjEnvValue(value));

            break;

        default:
            text += this.getConsoleLog(stepNumber + "::FAIL----Wrong value insterted");

    }
    text += this.explicitWaitOnJsonElement(uiJson.buttonSearch, 'by.xpath');
    text += "element(by.xpath(\"" + uiJson.buttonSearch + "\")).click() \n";
    
    text += this.getConsoleLog(stepNumber + "::Pass----Successfully clicked on search feild");

    
    text += this.explicitWaitOnJsonElement(uiJson.searcResult1, 'by.xpath');
    text += this.getConsoleLog(stepNumber + "::Pass----Successfullly found first user account");
    text += "element(by.xpath(\"" + uiJson.searcResult1 + "\")).click() \n";
    
    text += this.getConsoleLog(stepNumber + "::Pass----Successfully performed click on first user account");

    
    text += "element(by.xpath(\"" + uiJson.verificationCheckbox + "\")).click() \n";
    
    text += this.getConsoleLog(stepNumber + "::Pass----Successfully clicked on the authentication checkbox");

    text += this.explicitWaitOnJsonElement(uiJson.buttonVerify, 'by.xpath');
    text += "element(by.xpath(\"" + uiJson.buttonVerify + "\")).click() \n";
    text += this.getConsoleLog(stepNumber + "::Pass----Successfully located the verify button");

    text += this.explicitWaitOnJsonElement(uiJson.mytmobileLink, 'by.xpath');
    text += this.getConsoleLog(stepNumber + "::Pass----My T-Mobile is found visivle as expected");

    text += this.endTryCatch();
    text += this.getSingleClosingBrace();
    text += this.getClosingSemiBraces();

    return text;

}

this.wait = function(stepNumber, Keyword, value) {
    var items = this.createTestIt(Keyword);
    items += this.startTryCatch();
    items += this.getDriver();
    items += this.getConsoleLog(stepNumber + "::Pass----Successfully performed wait")
    
    items += this.endTryCatch();
    items += this.getSingleClosingBrace();
    items += this.getClosingSemiBraces();
    return items;
}
this.colourValidation = function(stepnumber, objectName, objectType, value, Keyword) {
    var elm_locator = this.getObjectType(objectType);
    var elm_json = this.getObjJsonValue(objectName);
    var elm_end_locator = ")";
    var text = this.createTestIt(Keyword);
    text += this.startTryCatch();
    text += this.getConsoleLog(stepnumber + "::PASS----Perfoming colour validation")
    text += "var webElement= element(" + elm_locator + "\"" + elm_json + "\"" + elm_end_locator + ")\n"
    text += "webElement.getCssValue('color').then(function(rgb){\n"
    text += "expect(rgb=='" + value + "').toBe(true)\n"
    text += "if(rgb == '" + value + "'){\n"
    text += this.getConsoleLog(stepnumber + "::PASS----The colour is found as expected") + "}\n";
    text += "else{\n"
    text += this.getConsoleLog(stepnumber + "::FAIL----The expected colour is not as expected, expected is: " + value + "actual colour is: ")
    text += "console.log(rgb + ' Note: this keyword accepts value in rgba format, to get value in rgba format click on the colour in the application and see the validation in rgba ')\n}"
    text += this.getPromiseEnd();
    text += this.getClosingSemiBraces();
    text += this.endTryCatch();
    text += this.getSingleClosingBrace();
    text += this.getClosingSemiBraces();
    return text;
}


this.partialAuthorizationHandle = function(stepnumber, Keyword) {
    var text = this.createTestIt(Keyword);
    text += this.startTryCatch();
    text += this.getDriver();
    text += "if(element(by.xpath(" + "\"" + "//div[@id='care-partial-authorization-modal']" + "\"" + ")).isDisplayed()){\n"
    text += this.getConsoleLog(stepnumber + "::Pass----partial pop up found");
    text += "expect(element(by.xpath(" + "\"" + "//div[@id='care-partial-authorization-modal']" + "\"" + ")).isDisplayed()).toBe(true)\n"
    text += "element(by.xpath(" + "\"" + "//button[contains(@ng-click,'processPayment')]" + "\"" + ")).click()\n"
    text += this.getConsoleLog(stepnumber + "::PASS----Successfully clicked on process payment");
    text += "}\nelse{\n"
    text += "expect(element(by.xpath(" + "\"" + "//div[@id='care-partial-authorization-modal']" + "\"" + ")).isDisplayed()).toBe(false)\n";
    text += this.getConsoleLog(stepnumber + "::PASS----The partail pop up is not found ") + "\n}"
    text += this.endTryCatch();
    text += this.getConsoleLog(stepnumber + "::FAIL----Failed at partail authorization");
    text += this.getSingleClosingBrace();
    text += this.getClosingSemiBraces();
    return text;
}

var fs = require('fs');
var _ = require('lodash');

var uiOperations = require('./UIOperation.js');
var testCaseContent;

var directoryPathTC = './test/test_specs/test_cases';

var directoryPathJson ='./test/test_specs/json_excel';

var directoryPathGlobalVarJson ='./test/test_specs/properties';

 						

		this.creatTestsDetails = function (tcObj,workbookname){

				 
					var workbookDirPath = directoryPathTC+'/'+workbookname; 	
 					//console.log('workbookDirPath is    :::::'+ workbookDirPath);

 					//Creating directory paths if not exist.
				  	if (fs.existsSync(directoryPathTC) === false) {
				      fs.mkdirSync(directoryPathTC);
				      
				    }

				    if (fs.existsSync(workbookDirPath) === false) {
				      fs.mkdirSync(workbookDirPath);
				      
				    }
				    
					var tc_obj = tcObj[0];
					//getting test description
					
					testCaseContent = this.createTestDescription(tc_obj.TestCase);
					//console.log('testCaseContent is    :::::'+ testCaseContent);

					//Iterating on rest of the object for generating test cases insdie description.
					for(i in tcObj){
						testCaseContent += this.getJson(tcObj[i]);
					}
						
					//closing description braces 
					testCaseContent += this.getClosingEndBraces();	
					//console.log('Final text creatd is \n'+ testCaseContent);

				    //Writing test case file dynamically. 
					fs.writeFileSync(workbookDirPath+'/'+tc_obj.TestCase+'.spec.js', testCaseContent);
					
					//Once the test case id dynamically generated need to update the protractor.js as well 
					//this.generateProtactor(tc_obj.TestCase);

			} 

			this.getDriver = function(){
						var text = "var driver = browser.driver \n";
						//text += "driver.get('"++"')";
						return text;
			}


			this.getJson = function (obj) {
					var finalText = this.getKeyword(obj);
					//console.log("finalText  is "+ finalText);
					return finalText;
			}


			this.getKeyword = function (obj) {
		       // console.log (':::::::::::inside getKeyword :::::::::::::::::::::::::::::'+ obj.Keyword);
		        var text ="";
		        var readFlag="false";
			        switch (obj.Keyword) {
			        case 'START_TEST_CASE':
			        		uiOperations.startTestCase(obj.StepNumber,obj.TestCase);
			        		break;
			        case 'OPEN_RETAIL_URL':
			        		text =  uiOperations.openRetailUrlRebellion(obj.StepNumber,obj.Keyword);
			        		break;
			        case 'LOGIN_RETAIL_REP':
			        		text =  uiOperations.loginRetailRepRebellion(obj.StepNumber,obj.Keyword);			        
			        		break;
			        case 'LOGIN_RETAIL_MANAGER':
			        		text =  uiOperations.loginRetailManagerRebellion(obj.StepNumber,obj.Keyword);			        
			        		break;
					case 'OPEN_WEB_URL':
			        		text =  uiOperations.openWebUrlRebellion(obj.StepNumber,obj.Keyword);
			        		 break;
			        case 'LOGIN_WEB':
			        		text =  uiOperations.loginWebRebellion(obj.StepNumber,obj.Keyword);			        
			        		break;
			        case 'OPEN_CARE_URL':
			           		text =  uiOperations.openCareUrlRebellion(obj.StepNumber,obj.Keyword);
			        		 break;	
			         case 'LOGIN_CARE_REP':
			        		text =  uiOperations.loginCareRepRebellion(obj.StepNumber,obj.Object,obj.ObjectType,obj.Keyword);			        
			        		break;	        
			        case 'LOGIN_CARE_MNGR':
			      			text =  uiOperations.loginCareMngrRebellion(obj.StepNumber,obj.Keyword);			        
			        		break;			        
			        case 'VERIFY_OBJECT_EXISTS':
							text =  uiOperations.verifyObjectExists(obj.StepNumber,obj.Object,obj.ObjectType,obj.Keyword);						
							break;
					case 'VERIFY_OBJECT_NOT_EXISTS':
							text =  uiOperations.verifyObjectNotExists(obj.StepNumber,obj.Object,obj.ObjectType,obj.Keyword);						
							break;
					case 'CLICK':
							text =  uiOperations.clickObject(obj.StepNumber,obj.Object,obj.ObjectType,obj.Keyword);						
							break;
					case 'WAIT':
							text =  uiOperations.wait(obj.StepNumber,obj.Keyword,obj.value);						
							break;

						case 'CLICK_MYTMOBILE':
							text =  uiOperations.clickMyTmobile(obj.StepNumber,obj.Keyword);
							break;
							
					case 'EXPLICIT_WAIT':
							text =  uiOperations.explicitWaitOnKeywordsElement(obj.StepNumber,obj.ObjectType,obj.Object,obj.Keyword);
							break;
					case 'LOG':
							text =  uiOperations.getConsoleLog(obj.value);
							break;
					case 'PLACEHOLDER_TEXT':
							text = uiOperations.placeholderText(obj.StepNumber,obj.Object,obj.ObjectType,obj.Keyword,obj.value);
							break;
					case 'CLEAR_TEXT':
							text = uiOperations.clearText(obj.StepNumber,obj.Object,obj.ObjectType);
							break;
					case 'VERIFY_BUTTON':
			      			text =  uiOperations.verifyButton(obj.StepNumber,obj.Object,obj.ObjectType,obj.Keyword,obj.value);			        
			        		break;
			        case 'VERIFY_TEXT':
			        		text =  uiOperations.verifyText(obj.StepNumber,obj.Object,obj.ObjectType,obj.Keyword,obj.value);			        
			        		break;

			         case 'VERIFY_TEXT_STORED':
			        		text =  uiOperations.verifyTextUsingKeyword(obj.StepNumber,obj.Object,obj.ObjectType,obj.Keyword,obj.value);			        
			        		break;

			         case 'VERIFY_TEXT_NOTEXIST':
			        		text =  uiOperations.verifyTextNotExist(obj.StepNumber,obj.Object,obj.ObjectType,obj.Keyword,obj.value);			        
			        		break;
			         case 'VERIFY_OBJECT_TEXT_NOT_NULL':
			        		text =  uiOperations.verifyObjectTextNotNull(obj.StepNumber,obj.Object,obj.ObjectType,obj.Keyword);			        
			        		break;
			        case 'REFRESH_WINDOW':
						text = uiOperations.refreshWindow(obj.StepNumber,obj.Keyword);
						break;
					case 'CHECK_TEXT_AND_CLICK':
			        		text =  uiOperations.checkTextAndClick(obj.StepNumber,obj.Object,obj.ObjectType,obj.Keyword,obj.value);			        
			        		break;
			        case 'VERIFY_TITLE':
			        		text =  uiOperations.verifyPageTitle(obj.StepNumber,obj.Keyword,obj.value);		        
			        		break;
			        case 'SEND_KEY':
			        		text =  uiOperations.sendKey(obj.StepNumber,obj.Object,obj.ObjectType,obj.Keyword,obj.value);		        
			        		break;
			        case 'WINDOW_CLOSE':
			        		text =  uiOperations.windowClose(obj.StepNumber,obj.Keyword);		        
			        		break;		        
					case 'GO_BACK':
						text = uiOperations.goBackPreviousUrl(obj.StepNumber,obj.Keyword);
						break;	
					case 'SWITCH_TAB':
						text = uiOperations.switchTab(obj.StepNumber,obj.Keyword);
						break;
					case 'MOUSE_OVER':
						text = uiOperations.mouseHover(obj.StepNumber,obj.Object,obj.ObjectType,obj.Keyword);
					break;
					case 'LINK_NEW_TAB':
						text = uiOperations.linkNewTab(obj.StepNumber,obj.Object,obj.ObjectType,obj.Keyword);
					break;
					case 'VALIDATE_DATE_FORMAT':
						text = uiOperations.validateDateFormat(obj.StepNumber,obj.Keyword,obj.value);
					break;
					case 'TEXT_CONTAINS':
						text = uiOperations.textContains(obj.StepNumber,obj.Object,obj.ObjectType,obj.Keyword,obj.value);
					break;
			        case 'MAX':
			        		text =  uiOperations.maximizeWindow();			        
			        		break;
			        case 'USE_STORED_VARIABLE':
			        		//console.log('inside USE_STORED_VARIABLE with obj value as '+ obj.value);
			        		text = uiOperations.useStoredVariable(obj.Keyword,obj.value);
			        		 readFlag = true;

			        		/*var value = this.readJsonForGlobalVariable(obj.value);
			        		if(value){
			        				obj.value = value;
			        				obj.Keyword = obj.Username;
			        		}

			        		//console.log('::::object updated value is ::::'+obj.value);
			        		//console.log('::::object updated keyword is ::::'+obj.Keyword);
			        		
			        		text = this.getKeyword(obj);*/
							break; 

				case 'STORE_VARIABLE':
							text = uiOperations.storeVariable(obj.StepNumber,obj.Object,obj.ObjectType,obj.Keyword,obj.value);
							text += '\n';
							break; 	
							
					case 'STOP_TEST':
                            text = uiOperations.stopTest(obj.StepNumber,obj.Object,obj.ObjectType,obj.Keyword);
                            break;
                    case 'SELECT_BY_TEXT':
                            text = uiOperations.selectByText(obj.StepNumber,obj.Object,obj.ObjectType,obj.Keyword,obj.value);
                            break; 
                    case 'DROPDOWN_VALUE_COMPARE':
                            text = uiOperations.dropDownValueCompare(obj.StepNumber,obj.Object,obj.ObjectType,obj.Keyword,obj.value);
                            break;
                    case 'VALIDATE_DROPDOWN_COUNT':
                            text = uiOperations.validateDropDownCount(obj.StepNumber,obj.Object,obj.ObjectType,obj.Keyword,obj.value);
                            break; 
	
					//added by tarlochan
			        case 'VERIFY_LINK_URL':
							text = uiOperations.verifyLinkUrl(obj.StepNumber,obj.Object,obj.ObjectType,obj.value,obj.Keyword);
							break;
					case 'VERIFY_URL':
							text = uiOperations.verifyUrl(obj.StepNumber,obj.value,obj.Username,obj.Keyword);
							break;
					case 'CUSTOMER_LOGIN':
							text = uiOperations.customerLogin(obj.StepNumber,obj.value,obj.Password,obj.Keyword);
							break;
					case 'REBELLION_LOGOUT':
						text = uiOperations.rebellionLogout(obj.StepNumber,obj.Keyword);
						break;
					case 'OPEN_URL':
						text = uiOperations.openUrl(obj.StepNumber,obj.value,obj.Keyword);
						break;
					case 'VERIFY_ATTRIBUTE':
						text = uiOperations.verify_Attribute(obj.StepNumber,obj.Object,obj.ObjectType,obj.value,obj.Username,obj.Keyword);
					break;
					case 'MAX_LENGTH':
						text = uiOperations.verify_Attribute(obj.StepNumber,obj.Object,'maxlength',obj.value,obj.Username,obj.Keyword);
						break;
					case 'FIELD_LENGTH_VALIDATE':
						text = uiOperations.verify_Attribute(obj.StepNumber,obj.Object,'value',obj.value,obj.Username,obj.Keyword);
						break;
					case 'PAGE_UP':
						text = uiOperations.pageUp(obj.StepNumber,obj.Keyword);
					break;
					case 'PAGE_DOWN':
						text = uiOperations.pageDown(obj.StepNumber,obj.Keyword);	
						break;
					case 'SEND_KEYS_ENV':
						text = uiOperations.sendkeysEnvironemnt(obj.StepNumber,obj.Object,obj.ObjectType,obj.value,obj.Keyword);
						break;
					case 'VERIFY_BUTTONN':
						text = uiOperations.verify_Attribute(obj.StepNumber,obj.Object,'disabled',obj.value,obj.Username,obj.Keyword);
						break;
					case 'VALIDATE_EXACT_URL':
						text = uiOperations.validateExactUrl(obj.StepNumber,obj.value,obj.Keyword);
						break;
					case 'VERIFY_LINK':
						text = uiOperations.verifyLink(obj.StepNumber,obj.Object,obj.ObjectType,obj.value,obj.Keyword);
						break;
					case 'CHECK_BOX_STATUS_VALIDATE':
						text = uiOperations.checkboxStatusValidate(obj.StepNumber,obj.Object,obj.ObjectType,obj.value,obj.Keyword);
						break;
					case 'VERIFY_OBJECT_ENABLED':
						text = uiOperations.verifyObjectEnabled(obj.StepNumber,obj.Object,obj.ObjectType,obj.Keyword);
						break;
					case 'SWITCH_FRAME':
						text = uiOperations.switchFrame(obj.StepNumber,obj.value,obj.Keyword);
						break;
					case 'URL_CONTAINS':
						text = uiOperations.urlContains(obj.StepNumber,obj.value,obj.Keyword);
						break;
					case 'COLOUR_VALIDATION':
						text = uiOperations.colourValidation(obj.StepNumber,obj.Object,obj.ObjectType,obj.value,obj.Keyword);
						break;
					case 'END_TEST_CASE':
							uiOperations.endTestCase(obj.StepNumber);
						break;
					case 'LINK_EXTERNAL_CASE':
							//console.log('----Directory Path is----'+ obj.Object);
							//console.log('----File name is----'+obj.ObjectType);
					break;

					case	'PARTIAL_AUTHORIZATION_HANDLE': 
					text =	uiOperations.partialAuthorizationHandle(obj.StepNumber,obj.Keyword);
					break;
					
					
					default:
					 //console.log (':::::::::::Keyword not valid:::::::::::::::::::::::::::::');

				}
				//console.log (':::::::::::inside getKeyword text:::::::::::::::::::::::::::::'+ text);
				return text;


			}

				this.createTestDescription = function (testname) {
			
					var text = "describe( '"+testname+"',function() { \n" ;

						text += this.maximizeWindow(); +"\n";

						/*text += "beforeEach(function () { \n";
			
						text += "browser.ignoreSynchronization = true; \n"; 

						text += this.getDriver();
			
						text += "}); \n"; */
												
					return text;
				}

					this.createTestIt = function (testname) {

						var text = "it('"+testname+"',function() { \n" ;
						 
								
						return text;
					}
			 
					
					this.getClosingEndBraces = function () {
					 
					 var braces = "});\n";
						//console.log('inside getClosingEndBraces');

					return braces;
					}



					this.getClosingBraces = function () {
					 
					 var brace = "};";

					return brace;
					}

					this.getClosingBigBrackets = function () {
					var bb = "]";

					return bb;

					}
 
 					this.getComma = function () {
					var comma = ",";

					return comma;

					}
					//method to read the global json Keyword varibale for the provided value and return the content.
					this.getJsonValueforProperty = function (key) {
						//console.log('Inside getJsonValueforProperty with key::'+ key);
						var value = browser.params.jsonKeywordValues[key];
						//console.log('returned value from getJsonValueforProperty is::'+ value);
						return  value;

					}



					/*this.writeJsonForGlobalVariable = function (Value) {
						console.log('inside  writeJsonForGlobalVariable :::::::: ',Value);
						if(Value){
							if (fs.existsSync(directoryPathGlobalVarJson) === false) {
				      				fs.mkdirSync(directoryPathGlobalVarJson);
				      		}
				      		fs.writeFileSync(directoryPathGlobalVarJson+'/searchKeywords.json', JSON.stringfy(Value));
				    		}
						console.log(':::::::::successfully wrote Global josn file :::::::: ',Value);
						
					}*/

					this.readJsonForGlobalVariable = function (key) {
						var searchJson, value="";
						if(key) {
							if (fs.existsSync(directoryPathGlobalVarJson+'/searchKeywords.json') === true) {
						     searchJson = JSON.parse(fs.readFileSync(directoryPathGlobalVarJson+'/searchKeywords.json', {encoding: 'utf8'}));
					    }
						}
					   // console.log('::::::::Global Json Obj is :::::::: ',searchJson);
					   	if(searchJson.ContainsKey(key)) {
					    		value = searchJson[key];
					    }
					    //	console.log('::::::::value retrieved is Obj is :::::::: ',value);
					    	return value;
				      	}

					
					//Method that will be used for genarting All contents in protractor.js
					this.generateProtactorAllContent = function () {
						var finaltext, protractor_text;
						if (fs.existsSync('./grunt/protractor.js') === true) {
						    protractor_text = fs.readFileSync('./grunt/protractor.js', {encoding: 'utf8'});
					       
					    }

					    //console.log('protractor_text obtained is '+ protractor_text);
					    protractor_text = this.getValidProtractorText(protractor_text);
					    finaltext = protractor_text +"\n" + this.getStaticStartProtractotText();
					    finaltext += this.getDynamicProtractorStartText(); 
					    finaltext += this.getAllProtractorText();
					    finaltext += this.getClosingBigBrackets();
			            finaltext = finaltext + this.getStaticEndProtractorText();
			            finaltext = finaltext + this.getClosingBraces();

			            //console.log('final protractor text is :::' + finaltext);
					    //finally write the new content in protractor.
					    fs.writeFileSync('./grunt/protractor.js', finaltext);

					}

					//Method that will be used to generate protractor file dynamically by using the existing one. 
					this.generateProtactorMultipleContent = function (workbook,workbookname,sheetName){
						var finaltext, protractor_text;
						if (fs.existsSync('./grunt/protractor.js') === true) {
						    protractor_text = fs.readFileSync('./grunt/protractor.js', {encoding: 'utf8'});
					       
					    }
					   // console.log('protractor_text obtained is '+ protractor_text);
					    protractor_text = this.getValidProtractorText(protractor_text);

					    finaltext = protractor_text +"\n" + this.getStaticStartProtractotText();
					    finaltext += this.getDynamicProtractorStartText(); 

					    var arrayLength = workbook.SheetNames.length;
					    if (sheetName == 'All' && arrayLength > 0){
					    	for (var i = 0; i < arrayLength; i++) {
			                      var nameSheet = workbook.SheetNames[i];
			                       jsonObj = this.getSheetJsonObject(nameSheet,workbookname);
			                      finaltext += this.getDynamicProtractorText(jsonObj[0].TestCase,workbookname);
			                      if(i < (arrayLength-1)){
			                      	finaltext += this.getComma();
			                      }
			                      finaltext +="\n";
			                }//End for loop
			                //Removing the last comma for protractir text.
			                // var index = finaltext.lastIndexOf(",");
    						//finaltext = finaltext.slice(0, index);
			                finaltext += this.getClosingBigBrackets();
			                finaltext = finaltext + this.getStaticEndProtractorText();
					    } 

					    finaltext = finaltext + this.getClosingBraces();

					   // console.log('final protractor text is :::' + finaltext);
					    //finally write the new content in protractor.
					    fs.writeFileSync('./grunt/protractor.js', finaltext);
								
					}

					this.generateProtactorSingleContent = function (tc_name,workbookname) {
						var finaltext, protractor_text;
						if (fs.existsSync('./grunt/protractor.js') === true) {
						    protractor_text = fs.readFileSync('./grunt/protractor.js', {encoding: 'utf8'});
					       
					    }
					    //console.log('protractor_text obtained is '+ protractor_text);
					    protractor_text = this.getValidProtractorText(protractor_text);
					    finaltext = protractor_text +"\n" + this.getStaticStartProtractotText();
					    finaltext += this.getDynamicProtractorStartText(); 
					    finaltext += this.getDynamicProtractorText(tc_name,workbookname)+this.getClosingBigBrackets()+this.getStaticEndProtractorText();
					     finaltext = finaltext + this.getClosingBraces();
					     //finally write the new content in protractor.
					    fs.writeFileSync('./grunt/protractor.js', finaltext);
					   /* fs.writeFileSync('./grunt/protractor.js', finaltext, function(error) {
     						if (error) {
       						console.log("write error:  " + error.message);
     						} else {
       						console.log(" Successful Wrote protractor content ");
     						}
						});*/
					}


					//Method that will be used for static statrt protractor content.
					this.getStaticStartProtractotText = function() {
						   var text = "test_suit:{\n"+"options: {\n"+"configFile:'test/protractor-conf-e2e.js',\n" + "args: {\n";
			      		 return text;

			        }

			        this.getDynamicProtractorStartText = function () {
			        	var text = "specs: [";
			        	return text;
			        }				
			        //Method that will be used for dynamically adding test case spec file in protractor content.
			        this.getDynamicProtractorText = function (tc_name,workbookname) {
			        	       var workbookDirPath = directoryPathTC+'/'+workbookname;  
			        			var text = "'"+workbookDirPath+'/'+tc_name+".spec.js'";
			       	 return text;
			    	}

			    	this.getAllProtractorText = function () {
			        	     var text = "'"+directoryPathTC+"/**/*.spec.js'";
			       	 return text;
			    	}

			    	//Method that will be used for static end protractor content.
			        this.getStaticEndProtractorText = function () {
			      			var text ="	},\n" +"keepAlive: true \n"+ "} \n" + "}";
			  				return text;
					}

					this.getSheetJsonObject = function (sheetname, workbookname) {
						var workbookDirPath = directoryPathJson+'/'+workbookname; 
						if (fs.existsSync(workbookDirPath+'/'+sheetname+'.json') === true) {
							    var tcObj = JSON.parse(fs.readFileSync(workbookDirPath+'/'+sheetname+'.json'));
							    //console.log(' +++ Json obj successfully obtained');
						}
						return tcObj;

					}

					this.getValidProtractorText = function (protractor_text) {
						//Logic to verify if test_suit already exist in protractor.js
					    if( protractor_text.indexOf('test_suit') >= 0){
					    	var firstindex = protractor_text.indexOf('test_suit');

			  				protractor_text = protractor_text.slice(0, firstindex - 1);
			  				//console.log("protractor_text after slice is "+ protractor_text);
						} else {

							var lastindex = protractor_text.lastIndexOf(';');
							protractor_text = protractor_text.slice(0, lastindex - 2);
							protractor_text += this.getComma();
						}
						//console.log('sliced protractor_text+++++++'+ protractor_text);
						return protractor_text
					}

					this.maximizeWindow = function () {
						 var text = "browser.manage().window().maximize();\n";
						 return text;
					}


					this.generateConsoleLogs = function (logDirectoryPath) {
						//console.log('inside generateConsoleLogs method of test_specs' + logDirectoryPath);
						uiOperations.generateFinalErrorLog(logDirectoryPath);
					}
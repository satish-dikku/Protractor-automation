

module.exports = function(grunt) {
grunt.task.registerTask('excelRead', function () {

//console.log('::::::::::::Inside excelRead Task ::::::::::::::::');

var fs = require('fs');
var _ = require('lodash');

XLSX = require('xlsx');

var directoryPath = './test/test_specs/json_excel';

//console.log('+++++after every path +++++++++');

var test_specs = require('./test_scripts/test-spec.js');

//console.log('+++++after test_specs path +++++++++');

var directoryExcelPath = './grunt/test_scripts/test_sheets';

var logDirectoryPath ='./test/test_specs/test_logs'; 


var configValues = JSON.parse(fs.readFileSync('./grunt/test_scripts/build.config'));

console.log('config object is :::::', configValues)

//var workbookname = grunt.option('workbookname');

var workbookname = configValues.workbookName;


console.log('Workbook name is :::'+ workbookname);

//var sheetname = grunt.option('sheetname');

var sheetname = configValues.sheetName;

console.log('sheetname name is :::'+ sheetname);

var workbook,worksheet;

var all = 'All';

var workbook,worksheet;

var excelRead = function(workbookname,sheetname,directoryPath,logDirectoryPath,directoryExcelPath) {
            this.workbookname = workbookname,
            this.sheetname = sheetname,
            this.directoryPath = directoryPath,
            this.logDirectoryPath = logDirectoryPath,
            this.directoryExcelPath = directoryExcelPath;
           
}

//For handling all case, user has only provided All in workbook name.
excelRead.prototype.initiateTask = function(workbookname,sheetname,directoryPath,logDirectoryPath,directoryExcelPath) {

if (workbookname &&  workbookname === 'All') {

    var workBooks = fs.readdirSync(directoryExcelPath);

    //console.log('Excel sheets list obtained is '+ workBooks.length);

for (name in workBooks) {
    
    if(workBooks[name]){

        //console.log ('inside for loop of workbooks for All ',workBooks[name]);

        workbookname=workBooks[name];

        workbook = XLSX.readFile(directoryExcelPath+'/'+workbookname);

        // console.log ('+++ workbook object is +++ '+workbook);

         workbookname = this.processExcelName(workbookname);
        
        //console.log ('new name for workbook', workbookname);

         this.generateJsonData(workbook,workbookname);

        // console.log ('josn created for', workbookname);

         this.processSheetsandGenerateTest(workbook,workbookname,all);

        // console.log ('Test case genearted for workbook', workbookname);

         
    }
  }
        this.generateProtractorContent(workbook,all,all);

        // console.log ('protractor text  genearted for workbook', workbookname);

   
} else if (workbookname && workbookname !== 'All' && sheetname && sheetname === 'All') {

        //console.log ('inside if else when workbook name is'+ workbookname + ' and Sheetname is '+sheetname);

        workbook = XLSX.readFile(directoryExcelPath+'/'+workbookname+'.xlsx');

       // console.log ('workbook object is '+ workbook);

        this.generateJsonData(workbook,workbookname);

       // console.log ('josn created for workbook', workbookname);

         this.processSheetsandGenerateTest(workbook,workbookname,all);

        // console.log ('Test case genearted for workbook', workbookname);

         this.generateProtractorContent(workbook,workbookname,sheetname);

        // console.log ('protractor text  genearted for workbook', workbookname);
       
  } else if (workbookname && workbookname !== 'All' && sheetname && sheetname !== 'All') {

        //console.log ('inside if else when workbook name is'+ workbookname + ' and Sheetname is '+sheetname);

        workbook = XLSX.readFile(directoryExcelPath+'/'+workbookname+'.xlsx');

        //console.log ('workbook object is '+ workbook);

        this.generateJsonData(workbook,workbookname);

       // console.log ('josn created for workbook', workbookname);

         this.processSheetsandGenerateTest(workbook,workbookname,sheetname);

         //console.log ('Test case genearted for workbook', workbookname);

         this.generateProtractorContent(workbook,workbookname,sheetname);

        // console.log ('protractor text  genearted for workbook', workbookname);
            
} else {

     //console.log(' Error::::::::Either Valid WorKBook Name or Sheet name is not provided ::::::::::::: ');

}
//method that will generate the final log content after all task successfully completed.
  //   test_specs.generateConsoleLogs(logDirectoryPath); 
};

//Utility excel to json converter starts
excelRead.prototype.generateJsonData = function(workbook,workbookname) {
         //console.log ('inside generateJsonData ', workbookname);
          workbook.SheetNames.forEach(function (worksheet) {
                                            // Get headers.
                                            var headers = [];
                                            var sheet = workbook.Sheets[worksheet];
                                            //console.log ('inside generateJsonData ', sheet);
                                            var range = XLSX.utils.decode_range(sheet['!ref']);
                                            var C, R = range.s.r;
                                            
                                            for (C = range.s.c; C <= range.e.c; ++C) {
                                                var cell = sheet[XLSX.utils.encode_cell({c: C, r: R})];
                                                

                                                var hdr = "UNKNOWN " + C; // <-- replace with your desired default
                                                if (cell && cell.t) {
                                                    hdr = XLSX.utils.format_cell(cell);
                                                }
                                                headers.push(hdr);
                                            }
                                            // console.log ('before sheet_to_json');
                                            // For each sheets, convert to json.
                                            var roa = XLSX.utils.sheet_to_json(workbook.Sheets[worksheet]);
                                            // console.log ('inside generateJsonData roa', roa.length);
                                            if (roa.length > 0) {
                                                roa.forEach(function (row) {
                                                    // Set empty cell to ''.
                                                    headers.forEach(function (hd) {
                                                        if (row[hd] == undefined) {
                                                            row[hd] = '';
                                                        }
                                                    });
                                                });

                                            }
                                          //  console.log('directoryPath is :::::::'+directoryPath);
                                            if (fs.existsSync(directoryPath) === false) {
                                            fs.mkdirSync(directoryPath);
                                           
                                             }
                                             
                                              var workbookDirPath = directoryPath+'/'+workbookname;
                                            // console.log('WorkbookDir path is :::::::'+workbookDirPath);
                                            if(fs.existsSync(workbookDirPath) === false) {
                                                 
                                                fs.mkdirSync(workbookDirPath);
                                            }
                                                                      
                                            fs.writeFileSync(workbookDirPath+'/'+worksheet+'.json', JSON.stringify(roa));
                                       });
                            //Utility Excel to json ends.
};  


excelRead.prototype.processSheetsandGenerateTest = function(workbook,workbookname,sheetname) {
        
         if(workbookname && sheetname) {

             var workbookDirPath = directoryPath+'/'+workbookname;
            
                            if(sheetname === 'All') {
                                               
                                                    sheet_name_list = workbook.SheetNames;
                                                        var arrayLength = sheet_name_list.length;
                                                         
                                                        for (var i = 0; i < arrayLength; i++) {
                                                            var nameSheet = workbook.SheetNames[i];
                                                                
                                                            var tcObj = JSON.parse(fs.readFileSync(workbookDirPath+'/'+nameSheet+'.json'));
                                                            
                                                            //Send final json object to test_spec for further processing.    
                                                           test_specs.creatTestsDetails(tcObj,workbookname);
                                                            
                                                        }
                                                        

                            } else {
                                                     var tcObj = JSON.parse(fs.readFileSync(workbookDirPath+'/'+sheetname+'.json'));
                                                     //Send final json object to test_spec for further processing.    
                                                     test_specs.creatTestsDetails(tcObj,workbookname);
                                                        
                        }
        }
};

excelRead.prototype.processExcelName = function(fullName) {
 var firstName;
 if(fullName){
    var index = fullName.indexOf(".xlsx");
    firstName = fullName.slice(0, index) ;
   
 }
 return firstName;
}; 

excelRead.prototype.generateProtractorContent = function(workbook,workbookname,sheetname) {
    //console.log('inside generateProtractorContent method with ::'+ workbookname + '::sheetname::' + sheetname);
    var workbookDirPath = directoryPath+'/'+workbookname;
    if (workbookname !== 'All' && sheetname === 'All') { 
        //Writing the dynamic content to protractor.js for multiple case.
         test_specs.generateProtactorMultipleContent(workbook,workbookname,sheetname); 
    } else if (workbookname === 'All' && sheetname === 'All'){
         //Writing the dynamic content to protractor.js for all case.
         test_specs.generateProtactorAllContent(workbook,workbookname,sheetname); 
         
    } else if (workbookname !== 'All' && sheetname !== 'All') {
         //Writing the dynamic content to protractor.js for Single case.
         var tcObj = JSON.parse(fs.readFileSync(workbookDirPath+'/'+sheetname+'.json'));
         test_specs.generateProtactorSingleContent(tcObj[0].TestCase,workbookname);
    } else {

        console.log ('Valid combination of WorkBook and Sheetname is not provided ');
    }

}

var excelReaderTask = new excelRead(workbookname,sheetname,directoryPath,logDirectoryPath,directoryExcelPath);
excelReaderTask.initiateTask(workbookname,sheetname,directoryPath,logDirectoryPath,directoryExcelPath);

});

};


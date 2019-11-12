```javascript

var gSQL = function() {

    var Db, Table, Argument, Meth, Data, OriginalData, DataJoin, Row, Col, DataToUpdate,InnerData,AndIn, ColTake1, ColTake2;

    //Some functions
function getData(db,tableName,argument){
    var sheet = SpreadsheetApp.openById(db).getSheetByName(tableName);
     return sheet.getRange(1, 1, sheet.getLastRow(), sheet.getLastColumn()).getValues()
}

function insertion(db,table,data){
    var id = checkIfIDIsExisting(db, table);
    var sheet = SpreadsheetApp.openById(db).getSheetByName(table);
    //if we insert only one row
    if (!Array.isArray(data[0])){
        data.unshift(id + 1);
        sheet.appendRow(data);
    }else{
        for (var i = 0, j = 1; i < data.length; i++, j++) {
            data[i].unshift(id + j);
            sheet.appendRow(data[i]);
        }
    }
 return "The data has been added to your table"
}

function aCompareToB(arg1, arg2, arg3, data, bool, Meth) {
    var position = data[0].indexOf(arg1);
    var map = data.map(function(r) {return r[position]});
    var match = [];
    switch (arg2) {
        case '=': map.forEach(function(elt, index) {if(index > 0) {if(elt == arg3) {match.push(index);}}});
            break;
        case '>': map.forEach(function(elt, index) {if(index > 0) {if (elt > arg3) {match.push(index);}}});
            break;
        case '<': map.forEach(function(elt, index) {if(index > 0) {if (elt < arg3)  {match.push(index);}}});
            break;
        case '<=':map.forEach(function(elt, index) {if (index > 0) {if (elt <= arg3) {match.push(index);}}});
            break;
        case '>=':map.forEach(function(elt, index) {if (index > 0) {if (elt >= arg3) {match.push(index);}}});
            break;
        case '!=':map.forEach(function(elt, index) {if (index > 0) {if (elt != arg3) {match.push(index);}}});
            break;
        }
    if (bool == true) {
        var returnData = [];
    }else {
        var returnData = [data[0]];
    }
    match.forEach(function(elt) {
        returnData.push(data[elt]);
        
    });
   
    
    if (Meth == "GET") {
        return returnData
    }else if (Meth == "UPDATE") {
        return [match, returnData]
        }
    }
    
function compareArray(a, b) {
    var array = [];
    var map = b.map(function(r) {return r[0]});
        a.forEach(function(elt) {
            var pos = map.indexOf(elt[0])
            if (pos > -1) {
                array.push(pos);
            }
        });
    return array
}
function checkIfIDIsExisting(db, table) {
        var value = SpreadsheetApp.openById(db).getSheetByName(table).getRange(2, 1).getValue()
        if (value === "") {
            return -1
        } else {
            return SpreadsheetApp.openById(db).getSheetByName(table).getRange(SpreadsheetApp.openById(db).getSheetByName(table).getLastRow(), 1).getValue()
        }
}






    this.CREATEDB = function(dbName){ 
    Db = SpreadsheetApp.create(dbName).getId();
    return this
    }

    this.INFOLDER = function(folderId){

    var file = DriveApp.getFileById(Db);
    var folder = DriveApp.getFolderById(folderId);
    var newFile = file.makeCopy(folder).setName(file.getName());
    Db = newFile.getId();
    file.setTrashed(true);
    return this
    }

    this.SETTABLES = function(tablesNames){
        var spreadSheet = SpreadsheetApp.openById(Db);
        if(typeof tablesNames != "string"){
            tablesNames.forEach(function(elt){
            spreadSheet.insertSheet(elt);
        });
        }else {
            spreadSheet.insertSheet(tablesNames)
        }
    Table = tablesNames;
    return this
    }

    this.SETCOLUMNS = function(tableColumns){
        var spreadSheet = SpreadsheetApp.openById(Db);
        if(typeof Table == "string"){
            tableColumns.unshift("ID");
            spreadSheet.getSheetByName(Table).appendRow(tableColumns);
        SpreadsheetApp.openById(Db).deleteSheet(SpreadsheetApp.openById(Db).getSheets()[0]);
        }else{
            for(var i = 0; i< tableColumns.length; i++){
            tableColumns[i].unshift("ID");
            spreadSheet.getSheetByName(Table[i]).appendRow(tableColumns[i]);
        }
        SpreadsheetApp.openById(Db).deleteSheet(SpreadsheetApp.openById(Db).getSheets()[0]);
        }
        return "Database, Table and Columns have been created with success"
    }
    
    this.INSERTCOL = function(colName){
    var sheet = SpreadsheetApp.openById(Db).getSheetByName(Table);
    sheet.getRange(1,sheet.getLastColumn()+1).setValue(colName);
    return "The column has been added"
    }

    this.DB = function(dbId) {
        Db = dbId;
        return this
    }
    
    //------------------------------------------
    this.TABLE = function(tableName) {
        Table = tableName;
        return this
    }

    //----------------------------------------------------------------------------------------------------------
    this.INSERT = function(data) {

        return insertion(Db,Table,data)
    }

    //-------------------------------------------------------------------------------------------------------------
    this.SELECT = function(argument) {
        Argument = argument;
        if(Meth == undefined){
            Meth = "GET"
        }
         var sheet = SpreadsheetApp.openById(Db).getSheetByName(Table);
         Data = sheet.getRange(1, 1, sheet.getLastRow(), sheet.getLastColumn()).getValues()

        if(Meth == "GET"){
            OriginalData = Data;
        }else if (Meth == "JOIN"){
            DataJoin = Data;
        }
        
        return this
    }

    

    //-----------------------------------------------------------------------------------------------------------
    this.UPDATE = function(a) {
    
        Meth = "UPDATE";
        var sheet = SpreadsheetApp.openById(Db).getSheetByName(Table);
        Data = sheet.getRange(1, 1, sheet.getLastRow(), sheet.getLastColumn()).getValues();
        OriginalData= Data;
        var headers = Data[0]
        var position = []
        if (typeof a == "string") {
            var b = headers.indexOf(a);
            position.push(b);
        } else {
            a.forEach(function(elt) {
                var b = headers.indexOf(elt);
                position.push(b);
            });
        }
       Col = position;
        return this
    }

    //------------------------------------------------------------------------------------------------------------
    
    //------------------------------------------------------------------------------------------------------------
    this.VALUES = function(values) {
      DataToUpdate = values;
        return this
    }
    //-----------------------------------------------------------------------------------------------------------

    this.DELETEWHERE = function(a, b, c) {
        var call1 = this.SELECT("ALL");
        var call2 = this.WHERE(a, b, c);
        var m = OriginalData.map(function(r) {return r[0]});
        var map = m.splice(1, (m.length - 1))
        var sheet = SpreadsheetApp.openById(Db).getSheetByName(Table);
        var length = Data.length;
        Data.reverse().forEach(function(elt, index) {
            if (index < length) {
                var pos = map.indexOf(elt[0]);
                if (pos > -1) {
                    sheet.deleteRow(pos + 2);
                }
            }
        });
        return "The values have been deleted"
    }
    //--------------------------------------------------------------------------------------------------------------
    this.TRUNCATE = function() {

        var sheet = SpreadsheetApp.openById(Db).getSheetByName(Table);

        sheet.deleteRows(2, sheet.getLastRow() - 1);

        return "The table " + Table + " has been emptied";


    }

    //----------------------------------------------------------------------------------------------------------------
    this.DROPDB = function() {

        DriveApp.getFileById(Db).setTrashed(true);

        return "The Database have been deleted, if it was an error, you can find it in your drive --> Trash"
    }
    //--------------------------------------------------------------------------------------------------------------
    this.DROPTABLE = function() {

        var db = SpreadsheetApp.openById(Db);
        var sheet = db.getSheetByName(Table);
        db.deleteSheet(sheet);

        return "The table have been deleted"
    }

    //-----------------------------------------------------------------------------------------------------------
    this.WHERE = function(a, b, c) {

        var data = aCompareToB(a, b, c, Data, false, Meth);
        if (Meth == "GET") {
           Data = data;
          
        } else if (Meth == "UPDATE") {
            Data = data[1];
            Row = data[0];
        }
        return this
    }
    //-----------------------------------------------------------------------------------------------------------

    this.AND = function(a, b, c) {
        var data = aCompareToB(a, b, c, Data, false, Meth);
        if (Meth == "GET") {
            Data = data;
             
        }else if (this.Meth == "UPDATE") {
            Data = data[1];
            var rowArray = compareArray(data[1],OriginalData);
            Row = rowArray.splice(1, (rowArray.length - 1))
        }
        return this
    }
    //-----------------------------------------------------------------------------------------------------------
    this.OR = function(a, b, c) {
        var data = aCompareToB(a, b, c, OriginalData, true, Meth);
        if (Meth == "UPDATE") {
            data = data[1]
        };
        var dataToCompare = Data;
        var array = [OriginalData[0]];
        for (var i = 1; i < dataToCompare.length; i++) {
            var j = [];
            var eltToCompare = Number(dataToCompare[i][0]);
            data.forEach(function(elt) {
                if (Number(elt[0]) == eltToCompare) {
                    j.push('1');
                }
            });
            if (j.length == 0) {
                array.push(dataToCompare[i])
            }
        }
        var concatArray = array.concat(data);
        var arraySorted = concatArray.sort(function(a, b) {return a[0] - b[0]});
        Data = arraySorted;
        if (Meth == "UPDATE") {
            var rowArray = compareArray(arraySorted, OriginalData);
            Row = rowArray.splice(1, (rowArray.length - 1));
        }
        return this


    }
    //----------------------------------------------------------------------------------------------------------------
    this.INNERJOIN = function(a) {
        Meth = "INNERJOIN";
        var sheet = SpreadsheetApp.openById(Db).getSheetByName(a);
        InnerData = sheet.getRange(1, 1, sheet.getLastRow(), sheet.getLastColumn()).getValues();
        return this
    }
    //---------------------------------------------------------------------------------------------------------------
    this.ON = function(a, c) {
        var header1 = Data[0];
        var header2 = InnerData[0];
        var pos1 = header1.indexOf(a);
        var pos2 = header2.indexOf(c);
        var innerData = InnerData;
        var data = Data;
        var array = [];
        for (var i = 1; i < InnerData.length; i++) {
            var elt = innerData[i][pos2];
            for (var j = 1; j < data.length; j++) {
                if (data[j][pos1] == elt) {
                    array.push([data[j] + innerData[i]]);
                }
            }
        }
        return array

    }
    
    //---------------------------------------------------------------------------------------------------------------
    
    this.TAKE = function(col){
this.SELECT(col);//Call to get the Whole values
var data1 = Data
var data2 = this.getVal();
var DataToKeep = [data1, data2];
if(AndIn == undefined){
ColTake1 = DataToKeep;
}else{
ColTake2 = DataToKeep;
}
return this
}

//-------------------------------------------------------------------------------------------------------------------------
this.ANDIN = function(tableName){
  AndIn = true;
  Table = tableName
  return this
 }

//----------------------------------------------------------------------------------------------------------------------------------
this.JOINWHERE = function(a,b,c){

function joinReturnValue(m,n){
if(!Array.isArray(m) && !Array.isArray(n)){
return [m,n]
}else if (Array.isArray(m) && !Array.isArray(n)){
return m.concat(n)
}else if (!Array.isArray(m) && Array.isArray(n)){
n.unshift(m);
return n
}else {
return m.concat(n)
}

}
var argument = b;
 var header1 = ColTake1[0][0];
 var header2 = ColTake2[0][0];
 var position1 = header1.indexOf(a);;
 var position2 = header2.indexOf(c);
 var d = ColTake1[1];
 var e = ColTake2[1];
 var f = ColTake1[0].map(function(r){ return r[position1]});
 var g = ColTake2[0].map(function(r){ return r[position2]});
 var returnValues = []
 
 switch (argument) {
   case '=': for(var i = 1; i< f.length; i++){ for(var j = 1; j< g.length; j++){if(f[i] == g[j]){returnValues.push(joinReturnValue(d[i],e[j]));}}}
  break;
  case '>':for(var i = 1; i< f.length; i++){for(var j = 1; j< g.length; j++){if(f[i] > g[j]){returnValues.push(joinReturnValue(d[i],e[j]));}}}
   break;
  case '<': for(var i = 1; i< f.length; i++){for(var j = 1; j< g.length; j++){if(f[i] < g[j]){returnValues.push(joinReturnValue(d[i],e[j]));}}}
   break;
  case '<=':for(var i = 1; i< f.length; i++){for(var j = 1; j< g.length; j++){if(f[i] <= g[j]){returnValues.push(joinReturnValue(d[i],e[j]));}}}
   break;
  case '>=':for(var i = 1; i< f.length; i++){for(var j = 1; j< g.length; j++){if(f[i] >= g[j]){returnValues.push(joinReturnValue(d[i],e[j]));}}}
   break;
  case '!=':for(var i = 1; i< f.length; i++){for(var j = 1; j< g.length; j++){if(f[i] != g[j]){returnValues.push(joinReturnValue(d[i],e[j]));}}}
            break;
}

return returnValues
}

    //----------------------------------------------------------------------------------------------------------------
    this.getVal = function() {
    if(Argument == "ALL"){
     return Data.splice(1,(Data.length - 1))
    }else if  (typeof Argument ==  "string" && Argument != "ALL"){
    var headers = Data[0];
   // Logger.log(Data);
    var position = headers.indexOf(Argument);
    var dataToReturn = Data.map(function(r){return r[position]});
    return dataToReturn.splice(1,(dataToReturn.length - 1));
    }else if (Array.isArray(Argument)){
      var headers = Data[0];
      var array = [];
       Argument.forEach(function(elt) {
          var position = headers.indexOf(elt);
          array.push(Data.map(function(r) {return r[position]}));
       });
      var newArray = [];
         for (var i = 0; i < array[0].length; i++ ){
           var arr = [];
             for(var j = 0; j< array.length; j++){
             arr.push(array[j][i]);
           }
           newArray.push(arr);
         }
         return newArray.splice(1,(newArray.length -1))
    }
    
    
    
    }
   
    //-------------------------------------------------------------------------------------------------------------------------------------------
    this.setVal = function() {
        var dataToUpdate = DataToUpdate;
        var sheet = SpreadsheetApp.openById(Db).getSheetByName(Table);

        if (Row == undefined && Col.length == 1) {
            var dataToInsert = [];
            for (var i = 0; i < (sheet.getLastRow() - 1); i++) {
                var data = [dataToUpdate];
                dataToInsert.push(data);
                //sheet.getRange(i+2, (Col[0] + 1)).setValue(dataToUpdate);
            }
            sheet.getRange(2, (Col[0] + 1), (sheet.getLastRow() - 1)).setValues(dataToInsert);
            return "The values have been updated"
        } else if (Row == undefined && Col.length > 1) {
            for (var i = 0; i < Col.length; i++) {
                var dataToInsert = [];
                for (var j = 0; j < (sheet.getLastRow() - 1); j++) {
                    var data = [dataToUpdate[i]];
                    dataToInsert.push(data);
                }
                sheet.getRange(2, (Col[i] + 1), (sheet.getLastRow() - 1)).setValues(dataToInsert);
            }
            return "The values have been updated"
        } else if (Row != undefined) {
          if(Row.length < 2 && Col.length < 2){
          Logger.log(Row.join()+1)
          sheet.getRange(Number(Row)+1, Number(Col)+1).setValue(DataToUpdate);

          }else if(Row.length > 1 && Col.length <2){
           Row.forEach(function(elt){
           sheet.getRange(elt+1, Number(Col)+1).setValue(DataToUpdate);
           });
          
          }else if(Row.length < 2 && Col.length > 1){
          Col.forEach(function(elt){
          sheet.getRange(Number(Row)+1, elt+1).setValue(DataToUpdate);
          
          })
          }else{
           
            for (var i = 0; i < Col.length; i++) {
                var col = Col[i];
                var value = dataToUpdate[i];
               Row.forEach(function(elt) {
               
                    sheet.getRange(elt + 1, col + 1).setValue(value);
                });
            }
            }
            return "The values have been updated"
        }
    }
}

```

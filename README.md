# GoogleScriptSQL
This library has been created to help people which have the desire using Google Sheet as a database for their App Script Project. This library **will only works** with Google Script.

## Getting started
To be able to use this library, you got two way to use it : 
### Adding it as a library to your project : 

**PROJECT KEY : Mx-Tzz9D5V6nQm0MadrqNr550Ru5BP_bv**

[See Google to understand how to do it](https://developers.google.com/apps-script/guides/libraries)

***Note: using library is way slower than put the minified code directly into your project***

### Adding the minified code directly to your Google Script Project
Add this code
```javascript
var gSQL=function(){var e,t,n,r,a,h,s,i,u,o,p,f;function g(e,t,n){var r=function(e,t){return""===SpreadsheetApp.openById(e).getSheetByName(t).getRange(2,1).getValue()?-1:SpreadsheetApp.openById(e).getSheetByName(t).getRange(SpreadsheetApp.openById(e).getSheetByName(t).getLastRow(),1).getValue()}(e,t),a=SpreadsheetApp.openById(e).getSheetByName(t);if(Array.isArray(n[0]))for(var h=0,s=1;h<n.length;h++,s++)n[h].unshift(r+s),a.appendRow(n[h]);else n.unshift(r+1),a.appendRow(n);return"The data has been added to your table"}function c(e,t,n,r,a,h){var s=r[0].indexOf(e),i=r.map(function(e){return e[s]}),u=[];switch(t){case"=":i.forEach(function(e,t){t>0&&e==n&&u.push(t)});break;case">":i.forEach(function(e,t){t>0&&e>n&&u.push(t)});break;case"<":i.forEach(function(e,t){t>0&&e<n&&u.push(t)});break;case"<=":i.forEach(function(e,t){t>0&&e<=n&&u.push(t)});break;case">=":i.forEach(function(e,t){t>0&&e>=n&&u.push(t)});break;case"!=":i.forEach(function(e,t){t>0&&e!=n&&u.push(t)})}if(1==a)var o=[];else o=[r[0]];return u.forEach(function(e){o.push(r[e])}),"GET"==h?o:"UPDATE"==h?[u,o]:void 0}function l(e,t){var n=[],r=t.map(function(e){return e[0]});return e.forEach(function(e){var t=r.indexOf(e[0]);t>-1&&n.push(t)}),n}this.CREATEDB=function(t){return e=SpreadsheetApp.create(t).getId(),this},this.INFOLDER=function(t){var n=DriveApp.getFileById(e),r=DriveApp.getFolderById(t),a=n.makeCopy(r).setName(n.getName());return e=a.getId(),n.setTrashed(!0),this},this.SETTABLES=function(n){var r=SpreadsheetApp.openById(e);return"string"!=typeof n?n.forEach(function(e){r.insertSheet(e)}):r.insertSheet(n),t=n,this},this.SETCOLUMNS=function(n){var r=SpreadsheetApp.openById(e);if("string"==typeof t)n.unshift("ID"),r.getSheetByName(t).appendRow(n),SpreadsheetApp.openById(e).deleteSheet(SpreadsheetApp.openById(e).getSheets()[0]);else{for(var a=0;a<n.length;a++)n[a].unshift("ID"),r.getSheetByName(t[a]).appendRow(n[a]);SpreadsheetApp.openById(e).deleteSheet(SpreadsheetApp.openById(e).getSheets()[0])}return"Database, Table and Columns have been created with success"},this.INSERTCOL=function(n){var r=SpreadsheetApp.openById(e).getSheetByName(t);return"string"==typeof n?r.getRange(1,r.getLastColumn()+1).setValue(n):n.forEach(function(e){r.getRange(1,r.getLastColumn()+1).setValue(e)}),"The column has been added"},this.DB=function(t){return e=t,this},this.TABLE=function(e){return t=e,this},this.INSERT=function(n){return g(e,t,n)},this.SELECT=function(s){n=s,null==r&&(r="GET");var i=SpreadsheetApp.openById(e).getSheetByName(t);return a=i.getRange(1,1,i.getLastRow(),i.getLastColumn()).getValues(),"GET"==r?h=a:"JOIN"==r&&a,this},this.UPDATE=function(n){r="UPDATE";var s=SpreadsheetApp.openById(e).getSheetByName(t);a=s.getRange(1,1,s.getLastRow(),s.getLastColumn()).getValues(),h=a;var u=a[0],o=[];if("string"==typeof n){var p=u.indexOf(n);o.push(p)}else n.forEach(function(e){var t=u.indexOf(e);o.push(t)});return i=o,this},this.VALUES=function(e){return u=e,this},this.DELETEWHERE=function(n,r,s){this.SELECT("ALL"),this.WHERE(n,r,s);var i=h.map(function(e){return e[0]}),u=i.splice(1,i.length-1),o=SpreadsheetApp.openById(e).getSheetByName(t),p=a.length;return a.reverse().forEach(function(e,t){if(t<p){var n=u.indexOf(e[0]);n>-1&&o.deleteRow(n+2)}}),"The values have been deleted"},this.TRUNCATE=function(){var n=SpreadsheetApp.openById(e).getSheetByName(t);return n.deleteRows(2,n.getLastRow()-1),"The table "+t+" has been emptied"},this.DROPDB=function(){return DriveApp.getFileById(e).setTrashed(!0),"The Database have been deleted, if it was an error, you can find it in your drive --\x3e Trash"},this.DROPTABLE=function(){var n=SpreadsheetApp.openById(e),r=n.getSheetByName(t);return n.deleteSheet(r),"The table have been deleted"},this.WHERE=function(e,t,n){var h=c(e,t,n,a,!1,r);return"GET"==r?a=h:"UPDATE"==r&&(a=h[1],s=h[0]),this},this.AND=function(e,t,n){var i=c(e,t,n,a,!1,r);if("GET"==r)a=i;else if("UPDATE"==r){a=i[1];var u=l(i[1],h);s=u.splice(1,u.length-1)}return this},this.OR=function(e,t,n){var i=c(e,t,n,h,!0,r);"UPDATE"==r&&(i=i[1]);for(var u=a,o=[h[0]],p=1;p<u.length;p++){var f=[],g=Number(u[p][0]);i.forEach(function(e){Number(e[0])==g&&f.push("1")}),0==f.length&&o.push(u[p])}var d=o.concat(i).sort(function(e,t){return e[0]-t[0]});if(a=d,"UPDATE"==r){var v=l(d,h);s=v.splice(1,v.length-1)}return this},this.INNERJOIN=function(t){r="INNERJOIN";var n=SpreadsheetApp.openById(e).getSheetByName(t);return n.getRange(1,1,n.getLastRow(),n.getLastColumn()).getValues(),this},this.TAKE=function(e){this.SELECT(e);var t=[a,this.getVal()];return null==o?p=t:f=t,this},this.ANDIN=function(e){return o=!0,t=e,this},
this.JOINWHERE=function(e,t,n){function r(e,t){return Array.isArray(e)||Array.isArray(t)?Array.isArray(e)&&!Array.isArray(t)?e.concat(t):!Array.isArray(e)&&Array.isArray(t)?(t.unshift(e),t):e.concat(t):[e,t]}var a=t,h=p[0][0],s=f[0][0],i=h.indexOf(e),u=s.indexOf(n),o=p[1],g=f[1],c=p[0].map(function(e){return e[i]}),l=f[0].map(function(e){return e[u]}),d=[];switch(a){case"=":for(var v=1;v<c.length;v++)for(var E=1;E<l.length;E++)c[v]==l[E]&&d.push(r(o[v-1],g[E-1]));break;case">":for(v=1;v<c.length;v++)for(E=1;E<l.length;E++)c[v]>l[E]&&d.push(r(o[v-1],g[E-1]));break;case"<":for(v=1;v<c.length;v++)for(E=1;E<l.length;E++)c[v]<l[E]&&d.push(r(o[v-1],g[E-1]));break;case"<=":for(v=1;v<c.length;v++)for(E=1;E<l.length;E++)c[v]<=l[E]&&d.push(r(o[v-1],g[E-1]));break;case">=":for(v=1;v<c.length;v++)for(E=1;E<l.length;E++)c[v]>=l[E]&&d.push(r(o[v-1],g[E-1]));break;case"!=":for(v=1;v<c.length;v++)for(E=1;E<l.length;E++)c[v]!=l[E]&&d.push(r(o[v-1],g[E-1]))}return d},this.getVal=function(){if("ALL"==n)return a.splice(1,a.length-1);if("string"==typeof n&&"ALL"!=n){var e=(r=a[0]).indexOf(n),t=a.map(function(t){return t[e]});return t.splice(1,t.length-1)}if(Array.isArray(n)){var r=a[0],h=[];n.forEach(function(e){var t=r.indexOf(e);h.push(a.map(function(e){return e[t]}))});for(var s=[],i=0;i<h[0].length;i++){for(var u=[],o=0;o<h.length;o++)u.push(h[o][i]);s.push(u)}return s.splice(1,s.length-1)}},this.setVal=function(){var n=u,r=SpreadsheetApp.openById(e).getSheetByName(t);if(null==s&&1==i.length){for(var a=[],h=0;h<r.getLastRow()-1;h++){var o=[n];a.push(o)}return r.getRange(2,i[0]+1,r.getLastRow()-1).setValues(a),"The values have been updated"}if(null==s&&i.length>1){for(h=0;h<i.length;h++){a=[];for(var p=0;p<r.getLastRow()-1;p++){o=[n[h]];a.push(o)}r.getRange(2,i[h]+1,r.getLastRow()-1).setValues(a)}return"The values have been updated"}if(null!=s){if(s.length>0&&s.length<2&&i.length<2)r.getRange(Number(s)+1,Number(i)+1).setValue(u);else if(s.length>1&&i.length<2)s.forEach(function(e){r.getRange(e+1,Number(i)+1).setValue(u)});else if(s.length<2&&s.length>0&&i.length>1)i.forEach(function(e){r.getRange(Number(s)+1,e+1).setValue(u)});else if(s.length>0)for(h=0;h<i.length;h++){var f=i[h],g=n[h];s.forEach(function(e){r.getRange(e+1,f+1).setValue(g)})}return"The values have been updated"}}};

```

into your GS file within App script before anything as below : 
![](https://user-images.githubusercontent.com/47058511/68670161-88438080-054c-11ea-8268-4e1f3d6814a7.png)

## How to use the library?
### Create a new instance of the object "gSQL"

**If you are using the library :**
![Capture](https://user-images.githubusercontent.com/47058511/68757029-85f42b80-060b-11ea-90f4-2c4379cf95d4.PNG)

Use the below code : 
```javascript 
var SQL = new GoogleScriptSql.gSQL;
```  
**If you are using the minified code into your project**

Use the following code
```javascript 
var SQL = new gSQL;
```  
Now we are ready to use the library, let's move forward!!

## 1 - Creating a database, table(s) and rows headers 
***Note : This library has been created to have chaining function.***
### CREATEDB
When you will create a DB, it will create a Google Spreadsheet which will be used as a DB : 
```javascript 
var SQL = new gSQL;
SQL.CREATEDB("YOUR_DB_NAME")
```  
``` CREATEDB```  accept only one parameter which has to be a string (Name of your DB)
### INFOLDER
This is optional. You can choose where your Spreadsheet (DB) has to be stored in your Google Drive. To put your DB in a specific foler, use the following : 
```javascript 
var SQL = new gSQL
SQL.CREATEDB("YOUR_DB_NAME").INFOLDER("YOUR_FOLDER_ID")
``` 
``` INFOLDER```  accept only one parameter: The ID of the folder (a string) where you want to create the DB in. 
To find your folder ID, you can refer to this [article](https://ploi.io/documentation/mysql/where-do-i-get-google-drive-folder-id). 
If you choose to create your DB without ```INFOLDER``` you can find your DB into your [Google Spreadsheet App](https://docs.google.com/spreadsheets/u/0/)

### SETTABLES
When you are creating your(s) table(s), it will create one or multiple sheet in your Spreadsheet(DB).
To create it, use the following : 

**Single table**
```javascript 
var SQL = new gSQL;
SQL.CREATEDB("YOUR_DB_NAME").SETTABLES("YOUR_TABLE_NAME")
```  
If you want to create only one table, ```SETTABLES``` accept one parameter which has to be a string (Your table name)

**Multiple tables**
```javascript 
var SQL = new gSQL;
SQL.CREATEDB("YOUR_DB_NAME").SETTABLES(["YOUR_TABLE_NAME_1","YOUR_TABLE_NAME_2",...])
```  
If you want to create multiple tables, ```SETTABLES``` accept one parameter which has to be an array of strings (Array of your tables names).

### SETCOLUMNS
As any SQL DB, each table has to have some headers. You need to know that ***the first column will be automaticaly "ID"*** which is an auto increment. For the well working of the library, please **DO NOT DELETE IT AT ANY CASE**.

**If you are creating only one table**

It has to be as below : 
```javascript 
var SQL = new gSQL;
SQL.CREATEDB("YOUR_DB_NAME").SETTABLES("YOUR_TABLE_NAME_1").SETTABLES(["HEADER_1","HEADER_2",...]);
```  
In the case where you're creating only one table, ```SETTABLES``` accept one parameter which has to be an array of strings (Array of your headers).

**If you are creating multiple tables**

It has to be as below : 
```javascript 
var SQL = new gSQL;
SQL.CREATEDB("YOUR_DB_NAME").SETTABLES(["YOUR_TABLE_NAME_1","YOUR_TABLE_NAME_2",...]).SETCOLUMNS([["HEADER_1","HEADER_2",...],["HEADER_1","HEADER_2",...]);
```  
In the case where you're creating multiples tables, ```SETTABLES``` accept one parameter which has to be an 2 dimensional array of strings ([Array of your headers],[Array of your headers]).
It's important to note that each SETTABLES array refer to each Table. For example : 
```javascript 
var SQL = new gSQL;
SQL.CREATEDB("YOUR_DB_NAME").SETTABLES(["Table1","table2"]).SETCOLUMNS([["HEADER_1","HEADER_2"],["HEADER_3","HEADER_4"]]);
```  
where ```["HEADER_1","HEADER_2"]``` will refer to ```"Table1"``` and ```["HEADER_3","HEADER_4"]``` will refer to ```"table2"```

### Example of using the previous functions
We saw all functions which will help us to create DB, Tables and Headers.
Let's now have a look at one true example.
I want create a DB where will be stored some data around my customers.

I'll have one DB called customers.
I'll have two tables : One with my customer's infos and the second one with their order's infos.

It will be structured as the following : 
![screenshot-docs google com-2019 11 12-14_19_08](https://user-images.githubusercontent.com/47058511/68675094-73b8b580-0557-11ea-805c-bbbc2fd98246.png)
Then the function in Google script would be : 
```javascript 
function myFunction(){
var SQL = new gSQL;
SQL.CREATEDB("Customers").SETTABLES(["customers_infos","orders_infos"]).SETCOLUMNS([["name","surname","adress","phone","mail"],["order_number","total_amount","customer_id"]]);
}
```  
Now, if you run the previous code, you should have the following : 
![New Project (3) (1)](https://user-images.githubusercontent.com/47058511/68677141-d3b15b00-055b-11ea-8d3b-a32d654c911c.png)

## 2 - USING DB AND TABLE
In the following section, we'll see how to insert, read, update and delete the data into our DB.
Any request need to start like this 
```javascript 
function myFunction(){
var SQL = new gSQL;// You can also declare it as a global variable outside of your function
SQL.DB("YOUR_DB_ID").TABLE("YOUR_TABLE_ID")
}
```  
where ```"YOUR_DB_ID"``` has to be replaced by the ID of your DB (which is the ID of your spreadsheet) and "YOUR_TABLE_ID" has to be replaced by the name of your table (which is your sheet name).

Using my previous example, if I want to work in my DB "Customers" and my table "customers_infos", I'll need to use the following code : 
```javascript 
function myFunction(){
var SQL = new gSQL;
/* "1VcdfCyvyy8_RD67ji_GjtRXVUqIuX9abpO_oIo" is my Spredsheet ID and "customers_infos" my sheet name*/
SQL.DB("1VcdfCyvyy8_RD67ji_GjtRXVUqIuX9abpO_oIo").TABLE("customers_infos")
}
```
***Note : DB and TABLE accept one parameter - string***


## 3-INSERT DATA
As any SQL DB, we want to insert some data in our tables. For that, we need to use the function ```INSERT```

**Case where we want insert only one line of data**

If we just want to insert one line of data into our DB, we need to use the following: 
```javascript 
function myFunction(){
var SQL = new gSQL;
SQL.DB("MY_DB_ID").TABLE("MY_TABLE_NAME").INSERT(["value1","value2",....])
}
```
```INSERT``` accept only one parameter which is an Array of string (Array of data).
With my previous example : 
```javascript 
function myFunction(){
var SQL = new gSQL;
SQL.DB("1VcdfCyvyy8_RD67ji_GjtRXVUqIuX9abpO_oIo").TABLE("customers_infos").INSERT(["Lenon","John","8 Hollywood Bd", "0445879563","john.lenon@imastar.com"]);
}
```
And see now what we've got in our DB : 
![screenshot-docs google com-2019 11 12-15_14_39](https://user-images.githubusercontent.com/47058511/68678908-293b3700-055f-11ea-9b31-491bbbc1e590.png)

**Case where we want insert multiple line of data**

If we want to insert multiple line of data into our table, we need to use the following :
```javascript
function myFunction(){
var SQL = new gSQL;
SQL.DB("MY_DB_ID").TABLE("MY_TABLE_NAME").INSERT([["LINE_1_VALUE1","LINE_2_VALUE2",....],["LINE_2_VALUE1","LINE_2_VALUE2",...]]);
}
```
```INSERT``` accept only one parameter which also can be a 2 dimensional array of string ([[Array of value],[Array of value]]).
With my previous example :
```javascript 
function myFunction(){
var SQL = new gSQL;
SQL.DB("1VcdfCyvyy8_RD67ji_GjtRXVUqIuX9abpO_oIo").TABLE("customers_infos").INSERT([["Brown","James","6 famous place", "987654321","brown.james@imastar.com"], ["West", "Kanye", "Somewhere in LA", "123456789","Kanye.west@music.com"]]);
}
```
And see now what we've got in our DB :
![screenshot-docs google com-2019 11 12-15_25_25](https://user-images.githubusercontent.com/47058511/68679712-b16e0c00-0560-11ea-8237-ece7cdde09c3.png)
You can notice that the ID column is incremented by itself so you don't need to worry about it.

***Note : If you want leave some column empty, don't remove them but just insert empty data as for exampe [data1, data2 ,"",data4,...]. If not, the data will not match with his header.***

## 4-GET THE DATA

### SELECT
We'll be able to get the data which are in our table with the function ```SELECT```.

```SELECT``` accept only one parameter who can be :

**ALL**
```javascript 
function myFunction(){
var SQL = new gSQL;
SQL.DB("MY_DB_ID").TABLE("My_TABLE_NAME").SELECT("ALL").getVal()
}
```
The parameter "ALL" will select the whole data into our table.

**Single column**
```javascript 
function myFunction(){
var SQL = new gSQL;
SQL.DB("MY_DB_ID").TABLE("My_TABLE_NAME").SELECT("column_Name").getVal()
}
```
If you need only one column of data, you'll need to put the header name as parameter

**Multiple column**
```javascript 
function myFunction(){
var SQL = new gSQL;
SQL.DB("MY_DB_ID").TABLE("My_TABLE_NAME").SELECT(["column_Name1", "column_Name2",...]).getVal()
}
```
If you need to get multiple column of data, the headers's name needs to be into an array.

**Example with our previous case**
```javascript 
function myFunction(){
var SQL = new gSQL;
//The following will return us the whole data in our table as a 2D array
//as : [[0,"Lenon","John","8 Hollywood Bd","0445879563","john.lenon@imastar.com"],[1,"Brown","James",...]]
var allData = SQL.DB("1VcdfCyvyy8_RD67ji_GjtRXVUqIuX9abpO_oIo").TABLE("customers_infos").SELECT("ALL").getVal();

//The following will return us the whole data for the column "name" so ["Lenon","Brown","West"]
var oneColumn = SQL.DB("1VcdfCyvyy8_RD67ji_GjtRXVUqIuX9abpO_oIo").TABLE("customers_infos").SELECT("name").getVal();

//The following will return us the whole data for the column "name" & the column "surname" so [["Lenon","John"],["Brown","James],[...]]
var multipleColumn = SQL.DB("1VcdfCyvyy8_RD67ji_GjtRXVUqIuX9abpO_oIo").TABLE("customers_infos").SELECT(["name","surname"]).getVal();
}
```
***Note : You can notice that after our ```SELECT``` function we've got the function ```getVal()```. Without it, you'll be not able to get any values back so don't forget it.***

### WHERE
As in SQL, ```WHERE``` will help us to get more specific values.
```javascript
function myFunction(){
var SQL = new gSQL;
SQL.DB("MY_DB_ID").TABLE("MY_TABLE_NAME").SELECT("ALL").WHERE("argument1","comparaison","argument2").getVal();
}
```
As you can see, ```WHERE``` has to have 3 arguments which **MUST** be into quote.

**Example with our previous case**
```javascript 
function myFunction(){
var SQL = new gSQL;
//The following will return us  : [0,"Lenon","John","8 Hollywood Bd","0445879563","john.lenon@imastar.com"] as it's ID is 0.
var allData = SQL.DB("1VcdfCyvyy8_RD67ji_GjtRXVUqIuX9abpO_oIo").TABLE("customers_infos").SELECT("ALL").WHERE("ID","=","0").getVal();

//The following will return us : ["Lenon","Brown"] as they are different than "West".
var oneColumn = SQL.DB("1VcdfCyvyy8_RD67ji_GjtRXVUqIuX9abpO_oIo").TABLE("customers_infos").SELECT("name").WHERE("name","!=","West").getVal();

//The following will return us the whole data for the column "name" & the column "surname" so [["Lenon","John"],["Brown","James]] because their ID are less than 2.
var multipleColumn = SQL.DB("1VcdfCyvyy8_RD67ji_GjtRXVUqIuX9abpO_oIo")
.TABLE("customers_infos")
.SELECT(["name","surname"])
.WHERE("ID","<","2").getVal();
//You can translate the previous request as :  INTO THE DB "1VcdfCyvyy8_RD67ji_GjtRXVUqIuX9abpO_oIo" AND INTO THE TABLE "customers_infos", TAKE THE "name" AND THE "surname" WHERE THE "ID" IS LESS THAN "2"
}
```
***Note : Comparaison sign accepted are only the following : ``` "=" - "!=" - ">" - "<" - "<=" - ">=" ```  and needs to be inside quote.***

***The first argument need to be a column header. Be careful because it's case sensitive. If your column header is "name", "Name" will not work. Same for the second argument, if the name is "West", "west" will not work either.***

### AND
It will help us to get more specific than ```WHERE``` but it works pretty the same.
It must have 3 arguments : 
```javascript
function myFunction(){
var SQL = new gSQL;
SQL.DB("MY_DB_ID").TABLE("MY_TABLE_NAME").SELECT("ALL").WHERE("argument1","comparaison","argument2").AND("argument1","comparaison","argument2").getVal();
}
```
It works exactly as ```WHERE``` except that the condition into ```WHERE``` and ```AND``` has both to match : 
```javascript 
function myFunction(){
var SQL = new gSQL;
//The following will return us  : [0,"Lenon","John","8 Hollywood Bd","0445879563","john.lenon@imastar.com"] as it's ID is 0.
var allData = SQL.DB("1VcdfCyvyy8_RD67ji_GjtRXVUqIuX9abpO_oIo").TABLE("customers_infos").SELECT("ALL").WHERE("name","!=","West").AND("ID","=","0").getVal();

//The following will return us : ["Lenon"] as his name is different than "West" and his ID is less than 1.
// There, "Brown" is not showed because his ID is not < than 1.
var oneColumn = SQL.DB("1VcdfCyvyy8_RD67ji_GjtRXVUqIuX9abpO_oIo").TABLE("customers_infos").SELECT("name").WHERE("name","!=","West").AND("ID","<","1").getVal();

//The following will return us the whole data for the column "name" & the column "surname" so [["Lenon","John"],["Brown","James]] because their ID are less than 2 and their name are different than "West".
var multipleColumn = SQL.DB("1VcdfCyvyy8_RD67ji_GjtRXVUqIuX9abpO_oIo")
.TABLE("customers_infos")
.SELECT(["name","surname"])
.WHERE("ID","<=","2")
.AND("name","!=","West").getVal();
//You can translate the previous request as :  INTO THE DB "1VcdfCyvyy8_RD67ji_GjtRXVUqIuX9abpO_oIo" AND INTO THE TABLE "customers_infos", TAKE THE "name" AND THE "surname" WHERE THE "ID" IS LESS OR EQUAL THAN "3" AND WHERE THE "name" IS DIFFERENT THAN WEST
}
```

### OR
It's exactly the same than ```WHERE``` into his way to work and must have 3 arguments : 
```javascript
function myFunction(){
var SQL = new gSQL;
SQL.DB("MY_DB_ID").TABLE("MY_TABLE_NAME").SELECT("ALL").WHERE("argument1","comparaison","argument2").OR("argument1","comparaison","argument2").getVal();
}
```
It is different than ``` AND ``` because it will return the value who match with the ``` WHERE ``` or the value who match with the ```OR``` : 
```javascript 
function myFunction(){
var SQL = new gSQL;
//The following will return us  : [[0,"Lenon","John","8 Hollywood Bd","0445879563","john.lenon@imastar.com"],["Brown","James",....]]
// because Lenon's ID is less than 2 and because "Brown"'s mail is equal to brown.james@imastar.com
var allData = SQL.DB("1VcdfCyvyy8_RD67ji_GjtRXVUqIuX9abpO_oIo").TABLE("customers_infos").SELECT("ALL").WHERE("mail","=","brown.james@imastar.com").OR("ID","<","2").getVal();

//The following will return us : ["West","Brown"] because "West" name match with the WHERE and Brown ID match with the OR
var oneColumn = SQL.DB("1VcdfCyvyy8_RD67ji_GjtRXVUqIuX9abpO_oIo").TABLE("customers_infos").SELECT("name").WHERE("name","=","West").OR("ID",">=","1").getVal();

//The following will return us the whole data for the column "name" & the column "surname" so [["Lenon","John"],["Brown","James]] because Lenon match with the WHERE and BROWN match with the OR
var multipleColumn = SQL.DB("1VcdfCyvyy8_RD67ji_GjtRXVUqIuX9abpO_oIo")
.TABLE("customers_infos")
.SELECT(["name","surname"])
.WHERE("name","=","Lenon")
.OR("name","=","Brown").getVal();
//You can translate the previous request as :  INTO THE DB "1VcdfCyvyy8_RD67ji_GjtRXVUqIuX9abpO_oIo" AND INTO THE TABLE "customers_infos", TAKE THE "name" AND THE "surname" WHERE THE "name" EQUAL "Lenon" OR WHERE THE "name" EQUAL "Brown"
}
```

## 5-UPDATE THE DB

### INSERT A NEW COLUMN
Sometimes, you'll maybe need to add some column to your DB. For that, you'll need to use the function ```INSERTCOL``` : 
```javascript
var SQL = new gSQL;

//For a single Column
SQL.DB("MY_DB_ID").TABLE("MY_TABLE_NAME").INSERTCOL("NEW_COLUMN_NAME");

//For multiple Column 
SQL.DB("MY_DB_ID").TABLE("MY_TABLE_NAME").INSERTCOL(["NEW_COLUMN_NAME1","NEW_COLUMN_NAME2",...]);
}
```
***Note : The column(s) will be added after your table's last column. There is no chance at the moment to insert them somewhere else.
If you wish to add only one column, the ```INSERTCOL```'s parameter has to be a single string. If you wish to add multiple columns, then ```INSERTCOL``` parameter has to be an array of string.***

So now let's say I would like to add two new columns to my previous example DB, let's call them "age" and "right" : 
```javascript
var SQL = new gSQL;
SQL.DB("1VcdfCyvyy8_RD67ji_GjtRXVUqIuX9abpO_oIo").TABLE("customers_infos").INSERTCOL(["age","right"]);
}
```
This is now how my table is looking like : 
![screenshot-docs google com-2019 11 12-17_29_19](https://user-images.githubusercontent.com/47058511/68690235-f9495f00-0571-11ea-837e-1b30d546a9c0.png)

### UPDATE,VALUES,setVal()
With these function above, we'll be able to update our DB.
Let's see how it works ! 
Update the whole data of one or multiple column : 
```javascript
var SQL = new gSQL;
//Update one column 
SQL.DB("DB_ID").TABLE("TABLE_NAME").UPDATE("COLUMN_NAME").VALUES("VALUE").setVal();

//Update multiple column
SQL.DB("DB_ID").TABLE("TABLE_NAME").UPDATE(["COLUMN_NAME1", "COLUMN_NAME2").VALUES(["VALUE_FOR_COLUMN1","VALUE_FOR_COLUMN2").setVal();
}
```
Let's do it now with our previous example :  
```javascript
var SQL = new gSQL;
//Update one column 
SQL.DB("1VcdfCyvyy8_RD67ji_GjtRXVUqIuX9abpO_oIo").TABLE("customers_infos").UPDATE("right").VALUES("0").setVal();
```
Now, our DB is looking like this : 
![screenshot-docs google com-2019 11 12-18_06_25](https://user-images.githubusercontent.com/47058511/68693211-29473100-0577-11ea-9922-ed872c60df31.png)

### UPDATE + WHERE
You'll maybe need to update one particular value.
So for that, you can use ```UPDATE``` with ```WHERE```
```javascript
var SQL = new gSQL;
//Update one column 
SQL.DB("DB_ID").TABLE("TABLE_NAME").UPDATE("COLUMN_NAME").WHERE("condition1', "comparator", "condition2").VALUES("VALUE").setVal();
```
Let's do it with our previous example : 
```javascript
var SQL = new gSQL;
//Update the Lenon's age
SQL.DB("1VcdfCyvyy8_RD67ji_GjtRXVUqIuX9abpO_oIo").TABLE("customers_infos").UPDATE("age").WHERE("name","=","Lenon").VALUES("12").setVal();
//Update the Brown's age
SQL.DB("1VcdfCyvyy8_RD67ji_GjtRXVUqIuX9abpO_oIo").TABLE("customers_infos").UPDATE("age").WHERE("name","=","Brown").VALUES("46").setVal();
//Update the West's age
SQL.DB("1VcdfCyvyy8_RD67ji_GjtRXVUqIuX9abpO_oIo").TABLE("customers_infos").UPDATE("age").WHERE("name","=","West").VALUES("40").setVal();

```
Now, our DB is looking like this : 
![screenshot-docs google com-2019 11 12-18_13_23](https://user-images.githubusercontent.com/47058511/68693760-21d45780-0578-11ea-8737-4ad2923524fb.png)
Now let's say I would like to change right to "1" to every peoples's age > 18 and age < 42
```javascript
var SQL = new gSQL;
//Update the West's age
SQL.DB("1VcdfCyvyy8_RD67ji_GjtRXVUqIuX9abpO_oIo").TABLE("customers_infos").UPDATE("right").WHERE("age",">","18").AND("age","<","42").VALUES("1").setVal();
```
There is our DB updated : 
![screenshot-docs google com-2019 11 12-19_56_07](https://user-images.githubusercontent.com/47058511/68701329-d8d7cf80-0586-11ea-9010-061696d966be.png)
So you can notice that even for update, ```AND``` and ```OR``` are working too !

## 6-JOINWHERE
The idea behind it is to be able to join the values of two tables.
I'll explain how to do it and show you a true example to get it easily.

```javascript
var SQL = new gSQL;
SQL.DB("DB_ID").TABLE("TABLE_NAME").TAKE("COLUMN").ANDIN.("TABLE_NAME").TAKE("COLUMN").JOINWHERE("col_table_1","comparator","col_table_2");
```
The function ```TAKE``` is pretty much the same than the function ```SELECT``` then it accept one parameter who can be : 
- "1Column" if you want get only one column
- ["Col1", "Col2",...] if you want to get multiple column.

Let's have a look with our previous example.
So we have two table : 
- Table 1 with our customer's infos
![screenshot-docs google com-2019 11 13-09_15_20](https://user-images.githubusercontent.com/47058511/68745024-23446500-05f6-11ea-873f-3f7c3cdddfb5.png)
- Table 2 with customer's orders infos : 

![screenshot-docs google com-2019 11 13-09_16_56](https://user-images.githubusercontent.com/47058511/68745129-5b4ba800-05f6-11ea-8405-b5d7492ea5fe.png)

You can notice than in our second table, there is a column called "customer_id". This column is using to join both table.
In the first line, the customer's id is 0 which means that is the customer with the id 0 in our customers's table who belongs this order.
In the second line, the customer's id is 1 which means that is the customer with the id 1 in our customers's table who belongs this order

Etc...

Now let's have a look how it works
```javascript
//Get the name and the surname in table 1, get the order_number and the total_amount in the table number 2 and join these infos
// where ID match with customer_id
SQL.DB("1VcdfCyvyy8_RD67ji_GjtRXVUqIuX9abpO_oIo").TABLE("customers_infos").TAKE(["name","surname"])
.ANDIN("orders_infos").TAKE(["order_number","total_amount"]).JOINWHERE("ID","=","customer_id");
```
For this example, our return values will be 
```
[[Lenon, John, 51.0, 160.0], [Lenon, John, 55.0, 33.0], [Brown, James, 52.0, 210.0], [Brown, James, 53.0, 98.0], [West, Kanye, 54.0, 27.0]]
```
I could replace ```TAKE(["name","surname"])``` by ```TAKE("name")``` and replace ```TAKE(["order_number","total_amount"])``` by ```TAKE("total_amount")``` and it will work too.
***Note : The Keyword "ALL" is not working with ```TAKE```***

## 7-DELETE

It happens that we want to delete a line, a column, a table or even a DB.
For these tasks, there is different functions.

### DELETEWHERE
Quiet the same than ```WHERE```, it will delete the line who match with these conditions : 
```javascript
//Update one column 
SQL.DB("DB_ID").TABLE("TABLE_NAME").DELETEWHERE("condition1", "comparator", "condition2");
```
Let's do it with our previous example : 
```javascript
//DELETE the Kanye West line line
SQL.DB("1VcdfCyvyy8_RD67ji_GjtRXVUqIuX9abpO_oIo").TABLE("customers_infos").DELETEWHERE("age","=","40");
```
Below the table after deleting the KW's line :
![screenshot-docs google com-2019 11 12-20_15_15](https://user-images.githubusercontent.com/47058511/68702464-28b79600-0589-11ea-91f4-46cfa0c9406d.png)

### TRUNCATE
If you need to empty the whole table but want to keep the headers, you can use this function.
```javascript
SQL.DB("DB_ID").TABLE("TABLE_NAME").TRUNCATE();
```
See below with our previous example : 
```javascript
//Empty the whole data but keep the headers
SQL.DB("1VcdfCyvyy8_RD67ji_GjtRXVUqIuX9abpO_oIo").TABLE("customers_infos").TRUNCATE();
```
The table after using the function ```TRUNCATE```
![screenshot-docs google com-2019 11 12-20_19_50](https://user-images.githubusercontent.com/47058511/68702851-cb701480-0589-11ea-9240-6780831b3946.png)

### DROPTABLE
If you need to remove a table, you can use the function ```DROPTABLE```
```javascript
SQL.DB("DB_ID").TABLE("TABLE_NAME").DROPTABLE();
```
With our previous example : 
```javascript
//Remove the table "customer_infos"
SQL.DB("1VcdfCyvyy8_RD67ji_GjtRXVUqIuX9abpO_oIo").TABLE("customers_infos").DROPTABLE();
```

### DROPDB
If you need to delete a DB, you can use this function.
```javascript
//Remove the DB "Customers"
SQL.DB("DB_ID").DROPDB();
```
With our previous example : 
```javascript
//Remove the DB "Customers"
SQL.DB("1VcdfCyvyy8_RD67ji_GjtRXVUqIuX9abpO_oIo").DROPDB();
```
## NOTE
I hope this doc is clear for everyone. If you got any question or any comments, you can contact us throug kevin@academy-numerique.com.

I wish this library will help some of you and make your work easier through Google app script.

More tutorial video will follow as soon is possible, it will help to get a better understanding.

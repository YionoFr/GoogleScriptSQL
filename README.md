# GoogleScriptSQL
This library have been created to help people which have the desire using Google Sheet as a database for their App Script Project. This library **will only works** with Google Script.

## Getting started
To be able to use this library, you need to copy and paste this minified code 
```
var gSQL=function(){var e,t,n,r,a,h,s,i,u,o,p,f,g;function c(e,t,n){var r=function(e,t){return""===SpreadsheetApp.openById(e).getSheetByName(t).getRange(2,1).getValue()?-1:SpreadsheetApp.openById(e).getSheetByName(t).getRange(SpreadsheetApp.openById(e).getSheetByName(t).getLastRow(),1).getValue()}(e,t),a=SpreadsheetApp.openById(e).getSheetByName(t);if(Array.isArray(n[0]))for(var h=0,s=1;h<n.length;h++,s++)n[h].unshift(r+s),a.appendRow(n[h]);else n.unshift(r+1),a.appendRow(n);return"The data has been added to your table"}function l(e,t,n,r,a,h){var s=r[0].indexOf(e),i=r.map(function(e){return e[s]}),u=[];switch(t){case"=":i.forEach(function(e,t){t>0&&e==n&&u.push(t)});break;case">":i.forEach(function(e,t){t>0&&e>n&&u.push(t)});break;case"<":i.forEach(function(e,t){t>0&&e<n&&u.push(t)});break;case"<=":i.forEach(function(e,t){t>0&&e<=n&&u.push(t)});break;case">=":i.forEach(function(e,t){t>0&&e>=n&&u.push(t)});break;case"!=":i.forEach(function(e,t){t>0&&e!=n&&u.push(t)})}if(1==a)var o=[];else o=[r[0]];return u.forEach(function(e){o.push(r[e])}),"GET"==h?o:"UPDATE"==h?[u,o]:void 0}function d(e,t){var n=[],r=t.map(function(e){return e[0]});return e.forEach(function(e){var t=r.indexOf(e[0]);t>-1&&n.push(t)}),n}this.CREATEDB=function(t){return e=SpreadsheetApp.create(t).getId(),this},this.INFOLDER=function(t){var n=DriveApp.getFileById(e),r=DriveApp.getFolderById(t),a=n.makeCopy(r).setName(n.getName());return e=a.getId(),n.setTrashed(!0),this},this.SETTABLES=function(n){var r=SpreadsheetApp.openById(e);return"string"!=typeof n?n.forEach(function(e){r.insertSheet(e)}):r.insertSheet(n),t=n,this},this.SETCOLUMNS=function(n){var r=SpreadsheetApp.openById(e);if("string"==typeof t)n.unshift("ID"),r.getSheetByName(t).appendRow(n),SpreadsheetApp.openById(e).deleteSheet(SpreadsheetApp.openById(e).getSheets()[0]);else{for(var a=0;a<n.length;a++)n[a].unshift("ID"),r.getSheetByName(t[a]).appendRow(n[a]);SpreadsheetApp.openById(e).deleteSheet(SpreadsheetApp.openById(e).getSheets()[0])}return"Database, Table and Columns have been created with success"},this.INSERTCOL=function(n){var r=SpreadsheetApp.openById(e).getSheetByName(t);return r.getRange(1,r.getLastColumn()+1).setValue(n),"The column has been added"},this.DB=function(t){return e=t,this},this.TABLE=function(e){return t=e,this},this.INSERT=function(n){return c(e,t,n)},this.SELECT=function(s){n=s,null==r&&(r="GET");var i=SpreadsheetApp.openById(e).getSheetByName(t);return a=i.getRange(1,1,i.getLastRow(),i.getLastColumn()).getValues(),"GET"==r?h=a:"JOIN"==r&&a,this},this.UPDATE=function(n){r="UPDATE";var s=SpreadsheetApp.openById(e).getSheetByName(t);a=s.getRange(1,1,s.getLastRow(),s.getLastColumn()).getValues(),h=a;var u=a[0],o=[];if("string"==typeof n){var p=u.indexOf(n);o.push(p)}else n.forEach(function(e){var t=u.indexOf(e);o.push(t)});return i=o,this},this.VALUES=function(e){return u=e,this},this.DELETEWHERE=function(n,r,s){this.SELECT("ALL"),this.WHERE(n,r,s);var i=h.map(function(e){return e[0]}),u=i.splice(1,i.length-1),o=SpreadsheetApp.openById(e).getSheetByName(t),p=a.length;return a.reverse().forEach(function(e,t){if(t<p){var n=u.indexOf(e[0]);n>-1&&o.deleteRow(n+2)}}),"The values have been deleted"},this.TRUNCATE=function(){var n=SpreadsheetApp.openById(e).getSheetByName(t);return n.deleteRows(2,n.getLastRow()-1),"The table "+t+" has been emptied"},this.DROPDB=function(){return DriveApp.getFileById(e).setTrashed(!0),"The Database have been deleted, if it was an error, you can find it in your drive --\x3e Trash"},this.DROPTABLE=function(){var n=SpreadsheetApp.openById(e),r=n.getSheetByName(t);return n.deleteSheet(r),"The table have been deleted"},this.WHERE=function(e,t,n){var h=l(e,t,n,a,!1,r);return"GET"==r?a=h:"UPDATE"==r&&(a=h[1],s=h[0]),this},this.AND=function(e,t,n){var i=l(e,t,n,a,!1,r);if("GET"==r)a=i;else if("UPDATE"==this.Meth){a=i[1];var u=d(i[1],h);s=u.splice(1,u.length-1)}return this},this.OR=function(e,t,n){var i=l(e,t,n,h,!0,r);"UPDATE"==r&&(i=i[1]);for(var u=a,o=[h[0]],p=1;p<u.length;p++){var f=[],g=Number(u[p][0]);i.forEach(function(e){Number(e[0])==g&&f.push("1")}),0==f.length&&o.push(u[p])}var c=o.concat(i).sort(function(e,t){return e[0]-t[0]});if(a=c,"UPDATE"==r){var v=d(c,h);s=v.splice(1,v.length-1)}return this},this.INNERJOIN=function(t){r="INNERJOIN";var n=SpreadsheetApp.openById(e).getSheetByName(t);return o=n.getRange(1,1,n.getLastRow(),n.getLastColumn()).getValues(),this},this.ON=function(e,t){for(var n=a[0],r=o[0],h=n.indexOf(e),s=r.indexOf(t),i=o,u=a,p=[],f=1;f<o.length;f++)for(var g=i[f][s],c=1;c<u.length;c++)u[c][h]==g&&p.push([u[c]+i[f]]);return p},this.TAKE=function(e){this.SELECT(e);var t=[a,this.getVal()];return null==p?f=t:g=t,this},this.ANDIN=function(e){return p=!0,t=e,this},this.JOINWHERE=function(e,t,n){function r(e,t){return Array.isArray(e)||Array.isArray(t)?Array.isArray(e)&&!Array.isArray(t)?e.concat(t):!Array.isArray(e)&&Array.isArray(t)?(t.unshift(e),t):e.concat(t):[e,t]}var a=t,h=f[0][0],s=g[0][0],i=h.indexOf(e),u=s.indexOf(n),o=f[1],p=g[1],c=f[0].map(function(e){return e[i]}),l=g[0].map(function(e){return e[u]}),d=[];switch(a){case"=":for(var v=1;v<c.length;v++)for(var E=1;E<l.length;E++)c[v]==l[E]&&d.push(r(o[v],p[E]));break;case">":for(v=1;v<c.length;v++)for(E=1;E<l.length;E++)c[v]>l[E]&&d.push(r(o[v],p[E]));break;case"<":for(v=1;v<c.length;v++)for(E=1;E<l.length;E++)c[v]<l[E]&&d.push(r(o[v],p[E]));break;case"<=":for(v=1;v<c.length;v++)for(E=1;E<l.length;E++)c[v]<=l[E]&&d.push(r(o[v],p[E]));break;case">=":for(v=1;v<c.length;v++)for(E=1;E<l.length;E++)c[v]>=l[E]&&d.push(r(o[v],p[E]));break;case"!=":for(v=1;v<c.length;v++)for(E=1;E<l.length;E++)c[v]!=l[E]&&d.push(r(o[v],p[E]))}return d},this.getVal=function(){if("ALL"==n)return a.splice(1,a.length-1);if("string"==typeof n&&"ALL"!=n){var e=(r=a[0]).indexOf(n),t=a.map(function(t){return t[e]});return t.splice(1,t.length-1)}if(Array.isArray(n)){var r=a[0],h=[];n.forEach(function(e){var t=r.indexOf(e);h.push(a.map(function(e){return e[t]}))});for(var s=[],i=0;i<h[0].length;i++){for(var u=[],o=0;o<h.length;o++)u.push(h[o][i]);s.push(u)}return s.splice(1,s.length-1)}},this.setVal=function(){var n=u,r=SpreadsheetApp.openById(e).getSheetByName(t);if(null==s&&1==i.length){for(var a=[],h=0;h<r.getLastRow()-1;h++){var o=[n];a.push(o)}return r.getRange(2,i[0]+1,r.getLastRow()-1).setValues(a),"The values have been updated"}if(null==s&&i.length>1){for(h=0;h<i.length;h++){a=[];for(var p=0;p<r.getLastRow()-1;p++){o=[n[h]];a.push(o)}r.getRange(2,i[h]+1,r.getLastRow()-1).setValues(a)}return"The values have been updated"}if(null!=s){if(s.length<2&&i.length<2)Logger.log(s.join()+1),r.getRange(Number(s)+1,Number(i)+1).setValue(u);else if(s.length>1&&i.length<2)s.forEach(function(e){r.getRange(e+1,Number(i)+1).setValue(u)});else if(s.length<2&&i.length>1)i.forEach(function(e){r.getRange(Number(s)+1,e+1).setValue(u)});else for(h=0;h<i.length;h++){var f=i[h],g=n[h];s.forEach(function(e){r.getRange(e+1,f+1).setValue(g)})}return"The values have been updated"}}};
```

into your GS file within App script before anything as below : 
![](https://user-images.githubusercontent.com/47058511/68670161-88438080-054c-11ea-8268-4e1f3d6814a7.png)

## How to use the library?
### Create a new instance of the object "gSQL"
When you want to use the library into your code, you need to call it like this 
```javascript 
var SQL = new gSQL;
```  
Now we are ready to use the library, let's move forward!!

### Creating a database, table(s) and rows headers 
***Note : This library has been created to have chaining function.***
#### CREATEDB
When you want create a DB, it will create a Google Spreadsheet which will be used as a DB : 
```javascript 
var SQL = new gSQL;
SQL.CREATEDB("YOUR_DB_NAME")
```  
``` CREATEDB```  accept only one parameter which has to be a string (Name of your DB)
#### INFOLDER
This is optional. You can choose where your Spreadsheet (DB) has to be stored in your Google Drive. To put your DB in a specific foler, use the following : 
```javascript 
var SQL = new gSQL
SQL.CREATEDB("YOUR_DB_NAME").INFOLDER("YOUR_FOLDER_ID")
``` 
``` INFOLDER```  accept only one parameter: The ID of the folder (a string) where you want to create the DB in. 
To find your folder ID, you can refer to this [article](https://ploi.io/documentation/mysql/where-do-i-get-google-drive-folder-id). 
If you choose to create your DB without ```INFOLDER``` you can find your DB into your [Google Spreadsheet App](https://docs.google.com/spreadsheets/u/0/)

#### SETTABLES
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

#### SETCOLUMNS
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
SQL.CREATEDB("YOUR_DB_NAME").SETTABLES(["YOUR_TABLE_NAME_1","YOUR_TABLE_NAME_2",...]).SETTABLES([["HEADER_1","HEADER_2",...],["HEADER_1","HEADER_2",...]);
```  
In the case where you're creating multiples tables, ```SETTABLES``` accept one parameter which has to be an 2 dimensional array of strings ([Array of your headers],[Array of your headers]).
It's important to note that each SETTABLES array refer to each Table. For example : 
```javascript 
var SQL = new gSQL;
SQL.CREATEDB("YOUR_DB_NAME").SETTABLES(["Table1","table2"]).SETTABLES(["HEADER_1","HEADER_2"],["HEADER_3","HEADER_4"]);
```  
where ```["HEADER_1","HEADER_2"]``` will refer to ```"Table1"``` and ```["HEADER_3","HEADER_4"]``` will refer to ```"table2"```

#### Example of case of using the previous functions
We saw all function which will help us to create DB, Tables and Headers.
Let's now have a look at one true example.
I want create a DB where will be store some data around my customers.

I'll have one DB called customers.
I'll have two tables : One with my customer's infos and the second one with their order's infos.

It will be structured as the following : 
![screenshot-docs google com-2019 11 12-14_19_08](https://user-images.githubusercontent.com/47058511/68675094-73b8b580-0557-11ea-805c-bbbc2fd98246.png)
Then the function in Google script would be : 
```javascript 
function myFunction(){
var SQL = new gSQL;
SQL.CREATEDB("Customers").SETTABLES(["customers_infos","orders_infos"]).SETTABLES(["name","surname","adress","phone","mail"],["order_number","total_amount","customer_id"]);
}
```  
Now, if you run the previous code, you should have the following : 
![New Project (3) (1)](https://user-images.githubusercontent.com/47058511/68677141-d3b15b00-055b-11ea-8d3b-a32d654c911c.png)

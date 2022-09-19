# BuildMap Rule

## Overview

A BuildMap rule is used to manipulate the raw input data (provided via the rows and columns in the file) and build a map out of the incoming data.

## Execution

- **Connector Execution** - This rule executes within the Virtual Appliance and may offer special abilities to perform connector-related functions, and may offer managed connections to sources.
- **Logging** - Logging statements are viewable within the ccg.log on the Virtual Appliance and by SailPoint personnel.

![Rule Execution](../img/connector_execution.png)

## Input

| Argument    | Type                                   | Purpose                                                                   |
| ----------- | -------------------------------------- | ------------------------------------------------------------------------- |
| col         | java.util.List                         | An ordered list of the column names from the file’s header record or specified Columns list. |
| record      | java.util.List                         | An ordered list of the values for the current record (parsed based on the specified delimiter) |
| application | System.Collections.Hashtable           | Map of the application configuration.                                     |
| schema      | sailpoint.object.Schema                | A reference to the Schema object for the Delimited File source being read. |

## Template

```xml
<?xml version='1.0' encoding='UTF-8'?>
<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">
<Rule name="Example Rule" type="BuildMap">
  <Description>Describe your rule here.</Description>
  <Source><![CDATA[

  // Add your logic here.

  ]]></Source>
</Rule>
```

## Example

```java
<?xml version='1.0' encoding='UTF-8'?>
<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">
<Rule name="Example Rule" type="BuildMap">
  <Description>This basic rule performs the combines 2 values into a single attribute.</Description>
  <Source><![CDATA[

     import sailpoint.connector.DelimitedFileConnector;

     Map map = DelimitedFileConnector.defaultBuildMap( cols, record );
     String access = (String) map.get( "access" );
     String permission = (String) map.get( "permission" );

     if ( access != null && permission != null ) {
          map.remove("access");
          map.remove("permission");
          map.put("access", access + " - " + permission);
     }
     return map;

  ]]></Source>
</Rule>
```

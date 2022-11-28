---
id: buildmap-rule
title: BuildMap Rule
pagination_label: BuildMap Rule
sidebar_label: BuildMap Rule
sidebar_class_name: buildMapRule
keywords: ['cloud', 'rules']
description: This rule manipulates raw input data provided by the rows and columns in a file and builds a map from the incoming data.
slug: /docs/rules/connector-rules/buildmap-rule
tags: ['Rules']
---

# BuildMap Rule

## Overview

This rule manipulates raw input data provided by the rows and columns in a file and builds a map from the incoming data.

## Execution

- **Connector Execution** - This rule executes within the virtual appliance. It may offer special abilities to perform connector-related functions, and it may offer managed connections to sources.
- **Logging** - Logging statements are viewable within the ccg.log on the virtual appliance, and they are viewable by SailPoint personnel.

![Rule Execution](../img/connector_execution.png)

## Input

| Argument | Type | Purpose |
| --- | --- | --- |
| col | java.util.List | Ordered list of the column names from the file’s header records or specified columns list. |
| record | java.util.List | Ordered list of the values for the current record, parsed based on the specified delimiter. |
| application | System.Collections.Hashtable | Map of the application configuration. |
| schema | sailpoint.object.Schema | Reference to the schema object for the delimited file source being read. |

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

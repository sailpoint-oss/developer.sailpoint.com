---
id: buildmap-rule
title: BuildMap Rule
pagination_label: BuildMap Rule
sidebar_label: BuildMap Rule
sidebar_class_name: buildMapRule
keywords: ['cloud', 'rules']
description: This rule manipulates raw input data provided by the rows and columns in a file and builds a map from the incoming data.
slug: /docs/rules/cloud-rules/buildmap-rule
tags: ['Rules']
---

# BuildMap Rule

## Overview

This rule manipulates raw input data provided by the rows and columns in a file and builds a map from the incoming data.

:::info
This rule runs in the cloud, however it is truly a connector rule as it executes against the DelimitedFileConnector.
:::

## Execution

- **Cloud Execution** - This rule executes in the IdentityNow cloud, and it has read-only access to IdentityNow data models, but it does not have access to on-premise sources or connectors.
- **Logging** - Logging statements are currently only visible to SailPoint personnel.

![Rule Execution](../img/cloud_execution.png)

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

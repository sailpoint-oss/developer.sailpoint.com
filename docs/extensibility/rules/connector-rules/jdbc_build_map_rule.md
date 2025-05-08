---
id: jdbc-buildmap-rule
title: JDBC BuildMap Rule
pagination_label: JDBC BuildMap Rule
sidebar_label: JDBC BuildMap Rule
sidebar_class_name: jdbcBuildMapRule
keywords: ['cloud', 'rules']
description: This rule manipulates raw input data provided by the rows and columns in a file and builds a map from the incoming data.
slug: /extensibility/rules/connector-rules/jdbc-buildmap-rule
tags: ['Rules']
---

## Overview

This rule manipulates raw input data provided by the rows and columns in a file and builds a map from the incoming data.

## Execution

- **Connector Execution** - This rule executes within the virtual appliance. It may offer special abilities to perform connector-related functions, and it may offer managed connections to sources.
- **Logging** - Logging statements are viewable within the ccg.log on the virtual appliance, and they are viewable by SailPoint personnel.

![Rule Execution](../img/connector_execution.png)

## Input

| Argument | Type | Purpose |
| --- | --- | --- |
| result | java.sql.ResultSet | Current ResultSet from the JDBC Connector. |
| connection | java.sql.Connection | Reference to the current SQL connection. |
| state | java.util.Map | Map that can be used to store and share data between executions of this rule during a single aggregation run. |
| application | sailpoint.object.Application | Reference to the source JDBC Application. |
| schema | sailpoint.object.Schema | Reference to the schema object for the JDBC source being read. |

## Output

| Argument | Type | Purpose |
| --- | --- | --- |
| map | java.util.Map | Map of names/values representing a row of data from the JDBC resource. |

## Template

```xml
<?xml version='1.0' encoding='UTF-8'?>
<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">
<Rule name="Example Rule" type="JDBCBuildMap">
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
<Rule name="Example Rule" type="JDBCBuildMap">
  <Description>
This basic rule performs the default mapping and then replaces the “status” value read from the database with a
Boolean “inactive” attribute in the map.
</Description>
  <Source><![CDATA[

     import sailpoint.connector.*;

     Map map = JDBCConnector.buildMapFromResultSet(result, schema);

     String status = (String) map.get("status");

     if( "inactive".equals(status) ) {

          map.put("inactive", true);

     } else {

          map.put("inactive", false);

     }

     map.remove("status");

     return map;


  ]]></Source>
</Rule>
```

## Attach to source

Refer to [Attaching Connector-Related Rules to Sources](./index.md#jdbcbuildmap-rule) for details on how to attach your rule to your source.

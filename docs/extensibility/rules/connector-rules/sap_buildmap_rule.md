---
id: sap-buildmap-rule
title: SAP BuildMap Rule
pagination_label: SAP BuildMap Rule
sidebar_label: SAP BuildMap Rule
sidebar_class_name: sapBuildMapRule
keywords: ['cloud', 'rules', 'sap']
description: This rule gathers additional attributes from SAP systems to build accounts. This rule is implemented using SAP's Java Connector (JCo) framework provided by a supplied SAP connection.
slug: /extensibility/rules/connector-rules/sap-buildmap-rule
tags: ['Rules']
---

## Overview

This rule gathers additional attributes from SAP systems to build accounts. This rule is implemented using SAP's Java Connector (JCo) framework provided by a supplied SAP connection.

## Execution

- **Connector Execution** - This rule executes within the virtual appliance. It may offer special abilities to perform connector-related functions, and it may offer managed connections to sources.
- **Logging** - Logging statements are viewable within the ccg.log on the virtual appliance, and they are viewable by SailPoint personnel.

![Rule Execution](../img/connector_execution.png)

## Input

| Argument | Type | Purpose |
| --- | --- | --- |
| object | sailpoint.object.Attributes | Reference to a SailPoint attributes object (basically a map object with some added convenience methods) that holds the attributes that have been built up by the default connector implementation. The rule should modify this object to change, add, or remove attributes from the map. |
| connector | sailpoint.connector.SAPInternalConnector | Reference to the current SAP connector. |
| state | java.util.Map | Map that can be used to store and share data between executions of this rule during a single aggregation run. |
| application | sailpoint.object.Application | Attribute value for the identity attribute before the rule runs. |
| schema | sailpoint.object.Schema | Reference to the schema object for the delimited file source being read. |
| destination | com.sap.conn.jco.JCoDestination | Connected and ready-to-use SAP destination object that can be used to call BAPI function modules and call to SAP tables. |

## Template

```xml
<?xml version='1.0' encoding='UTF-8'?>
<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">
<Rule name="Example Rule" type="SAPBuildMap">
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
<Rule name="Example Rule" type="SAPBuildMap">
  <Description> This example SAP Build Map rule constructs an Initials attribute from the first character of the FirstName and LastName attributes and changes the name of the “InitDate” attribute to “HireDate”. </Description>
  <Source><![CDATA[
  import java.util.HashMap;

  // Create initials
  String firstName = object.get("FirstName");
  String lastName = object.get("LastName");

  StringBuilder initials = new StringBuilder();

  if (firstName != null && !firstName.isEmpty()) {
    initials.append(Character.toUpperCase(firstName.charAt(0))).append(".");
  }

  if (lastName != null && !lastName.isEmpty()) {
    initials.append(Character.toUpperCase(lastName.charAt(0))).append(".");
  }

  object.put("Initials", initials.toString());
  object.put("HireDate", object.remove("InitDate"));

]]></Source>
</Rule>
```

## Attach to Source

Refer to [Attaching Connector-Related Rules to Sources](./index.md#buildmap-rule) for details on how to attach your rule to your source.

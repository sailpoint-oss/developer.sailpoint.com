---
id: manager-correlation-rule
title: Manager Correlation Rule
pagination_label: Manager Correlation Rule
sidebar_label: Manager Correlation Rule
sidebar_class_name: managerCorrelationRule
keywords: ["cloud", "rules", "manager correlation"]
description:
  This rule is used to calculate a manager relationship between identities.
slug: /docs/rules/cloud-rules/manager-correlation-rule
tags: ["Rules"]
---

## Overview

This rule is used to calculate a manager relationship between identities.

## Execution

- **Cloud Execution** - This rule executes in the IdentityNow cloud, and has
  read-only access to IdentityNow data models, however it doesn't have access to
  on-premise sources or connectors.
- **Logging** - Logging statements are currently only visible to SailPoint
  personnel.

![Rule Execution](../img/cloud_execution.png)

## Input

| Argument              | Type                         | Purpose                                                                                                                                                                                                                                                                |
| --------------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| log                   | org.apache.log4j.Logger      | A logger to log statements. _Note: This executes in the cloud and logging is currently not exposed to anyone other than SailPoint._                                                                                                                                    |
| idn                   | sailpoint.server.IdnRuleUtil | Provides a read-only starting point for using the SailPoint API. From this passed reference, the rule can interrogate the IdentityNow data model including identities or account information via helper methods as described in [IdnRuleUtil](../idn_rule_utility.md). |
| link                  | sailpoint.object.Link        | A read-only representation of account data which has been aggregated. This is used as a basis to determine manager linkages to a specific manager identity.                                                                                                            |
| managerAttributeValue | java.lang.Object             | Attribute value that is stored in the manager attribute.                                                                                                                                                                                                               |

## Output

| Argument  | Type          | Purpose                                                                                                                                                                                    |
| --------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| returnMap | java.util.Map | A map object containing a reference to the identity attributes to identify the manager's identity. These should contain both `identityAttributeName` and `identityAttributeValue` as keys. |

## Template

```xml
<?xml version='1.0' encoding='UTF-8'?>
<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">
<Rule name="Example Rule" type="ManagerCorrelation">
  <Description>Describe your rule here.</Description>
  <Source><![CDATA[

  // Add your logic here.

  ]]></Source>
</Rule>
```

## Example - Find a manager based on the manager.email attribute

```java
<?xml version='1.0' encoding='UTF-8'?>
<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">
<Rule name="Manager Email Correlation" type="ManagerCorrelation">
  <Description>Finds a manager based on the manager.email attribute.</Description>
  <Source><![CDATA[

Map returnMap = new HashMap();

String managerEmail = link.getAttribute( "manager.email" );
returnMap.put( "identityAttributeName", "email");
returnMap.put( "identityAttributeValue", managerEmail );

return returnMap;

  ]]></Source>
</Rule>
```

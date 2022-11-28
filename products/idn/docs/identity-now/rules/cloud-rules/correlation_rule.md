---
id: correlation-rule
title: Correlation Rule
pagination_label: Correlation Rule
sidebar_label: Correlation Rule
sidebar_class_name: Correlation Rule
keywords: ["cloud", "rules", "correlation"]
description:
  This rule associates or correlates an account to an identity, based on
  complex logic.
slug: /docs/rules/cloud-rules/correlation-rule
tags: ["Rules"]
---

## Overview

This rule associates or correlates an account to an identity, based on complex logic.

## Execution

- **Cloud Execution** - This rule executes in the IdentityNow cloud, and it has
  read-only access to IdentityNow data models, but it does not have access to
  on-premise sources or connectors.
- **Logging** - Logging statements are currently only visible to SailPoint
  personnel.

![Rule Execution](../img/cloud_execution.png)

## Input

| Argument | Type                            | Purpose                                                                                                                                                                                                                                                                |
| -------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| log      | org.apache.log4j.Logger         | Logger to log statements. _Note: This executes in the cloud, and logging is currently not exposed to anyone other than SailPoint._                                                                                                                                     |
| idn      | sailpoint.server.IdnRuleUtil    | Provides a read-only starting point for using the SailPoint API. From this passed reference, the rule can interrogate the IdentityNow data model including identities or account information via helper methods as described in [IdnRuleUtil](../idn_rule_utility.md). |
| account  | sailpoint.object.ResourceObject | Read-only representation of account data that has been aggregated. Use this as a basis to determine correlation linkages with a specific identity.                                                                                                                     |

## Output

| Argument  | Type          | Purpose                                                                                                                                                               |
| --------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| returnMap | java.util.Map | Map object containing a reference to the identity attributes to correlate to. These should contain both `identityAttributeName` and `identityAttributeValue` as keys. |

## Template

```xml
<?xml version='1.0' encoding='UTF-8'?>
<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">
<Rule name="Example Rule" type="Correlation">
  <Description>Describe your rule here.</Description>
  <Source><![CDATA[

  // Add your logic here.

  ]]></Source>
</Rule>
```

## Example - Correlate Account to Identity Based on Calculated Email Address

```java
<?xml version='1.0' encoding='UTF-8'?>
<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">
<Rule name="Example Rule" type="Correlation">
  <Description>Correlates based on a calculated email address.</Description>
  <Source><![CDATA[

Map returnMap = new HashMap();

String calculatedEmail = account.getStringAttribute( "username" ) + "@example.com";

returnMap.put( "identityAttributeName", "email");
returnMap.put( "identityAttributeValue", calculatedEmail );

return returnMap;

  ]]></Source>
</Rule>
```

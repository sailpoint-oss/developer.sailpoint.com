---
id: identity-attribute-rule
title: Identity Attribute Rule
pagination_label: Identity Attribute Rule
sidebar_label: Identity Attribute Rule
sidebar_class_name: identityAttributeRule
keywords: ['cloud', 'rules', 'identity attribute']
description: This rule calculates and returns an identity attribute for a specific identity.
slug: /extensibility/rules/cloud-rules/identity-attribute-rule
tags: ['Rules']
---

# Identity Attribute Rule

## Overview

This rule calculates and returns an identity attribute for a specific identity. This rule is known as a "complex" rule on the identity profile.

An important consideration with IdentityAttribute rules is whether generation logic that includes uniqueness checks is acceptable. While not explicitly disallowed, this type of logic is firmly against SailPoint's [best practices](https://community.sailpoint.com/t5/Identity Security Cloud-Articles/Best-Practices-Generating-Usernames-in-Identity Security Cloud/ta-p/153749). When calculating and promoting identity attributes via a transform or a rule, the logic contained within the attribute is always re-run and new values might end up being generated where such behavior is not desired. Additionally, the attribute calculation process is multi-threaded, so the uniqueness logic contained on a single attribute is not always guaranteed to be accurate. For this reason, SailPoint strongly discourages the use of logic that conducts uniqueness checks within an IdentityAttribute rule. The recommendation is to execute this check during account generation for the target system where the value is needed.

## Execution

- **Cloud Execution** - This rule executes in the Identity Security Cloud cloud, and it has read-only access to Identity Security Cloud data models, but it does not have access to on-premise sources or connectors.
- **Logging** - Logging statements are currently only visible to SailPoint personnel.
- **Usage** - To use this rule once installed, first select "Complex Data Source" option under the Source dropdown, then select the rule name under the Transform drop down.

![Rule Execution](../img/cloud_execution.png)

## Input

| Argument | Type | Purpose |
| --- | --- | --- |
| log | org.apache.log4j.Logger | Logger to log statements. _Note: This executes in the cloud, and logging is currently not exposed to anyone other than SailPoint._ |
| idn | sailpoint.server.IdnRuleUtil | Provides a read-only starting point for using the SailPoint API. From this passed reference, the rule can interrogate the Identity Security Cloud data model including identities or account information via helper methods as described in [IdnRuleUtil](../idn_rule_utility.md). |
| identity | sailpoint.object.Identity | Reference to identity object representing the identity being calculated. |
| oldValue | java.lang.Object | Attribute value for the identity attribute before the rule runs. |

## Output

| Argument | Type | Purpose |
| --- | --- | --- |
| attributeValue | java.lang.Object | Value returned for the identity attribute. |

## Template

```xml
<?xml version='1.0' encoding='UTF-8'?>
<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">
<Rule name="Example Rule" type="IdentityAttribute">
  <Description>Describe your rule here.</Description>
  <Source><![CDATA[


  // Add your logic here.

  ]]></Source>
</Rule>
```

## Example - Calculate Lifecycle State Based on Start and End Dates

```java
<?xml version='1.0' encoding='UTF-8'?>
<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">
<Rule name="Example Rule" type="IdentityAttribute">
  <Description>Calculates LCS based on start and end dates.</Description>
  <Source><![CDATA[
import java.text.SimpleDateFormat;
import java.util.Date;

// Date format we expect dates to be in (ISO8601)
SimpleDateFormat dateFormat = new SimpleDateFormat( "yyyy-MM-dd" );

// Parse the start date from the identity, and put in a Date object.
Date startDate = null;
if ( identity.getAttribute( "startDate" ) != null ) {
  startDate = dateFormat.parse( identity.getAttribute( "startDate" ) );
}

// Parse the end date from the identity, and put in a Date object.
Date endDate = null;
if ( identity.getAttribute( "endDate" ) != null ) {
  endDate = dateFormat.parse( identity.getAttribute( "endDate" ) );
}

// Define a date for today
Date today = new Date();

// Calculate lifecycle state based on the attributes.
if( startDate.before( today ) && endDate.after( today ) ) {
  return "active";
} else if ( endDate.before( today ) ) {
  return "inactive";
}

// If we haven't calculated a state already, return null.
return null;

  ]]></Source>
</Rule>
```

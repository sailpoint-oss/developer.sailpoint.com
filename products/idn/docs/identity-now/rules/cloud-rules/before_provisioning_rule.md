---
id: before-provisioning-rule
title: Before Provisioning Rule
pagination_label: Before Provisioning Rule
sidebar_label: Before Provisioning Rule
sidebar_class_name: beforeProvisioningRule
keywords: ["cloud", "rules", "before provisioning"]
description: A rule that runs before provisioning to a source.
slug: /docs/rules/cloud-rules/before-provisioning-rule
tags: ["Rules"]
---

## Overview

This rule is used to modify a provisioning plan as provisioning is sent out.
This rule should not be used to create new attributes, instead an account
creation profile (provisioning policy) should be used.

## Execution

- **Cloud Execution** - This rule executes in the IdentityNow cloud, and has
  read-only access to IdentityNow data models, however it doesn't have access to
  on-premise sources or connectors.
- **Logging** - Logging statements are currently only visible to SailPoint
  personnel.

![Rule Execution](../img/cloud_execution.png)

## Input

| Argument    | Type                              | Purpose                                                                                                                                                                                                                                                                |
| ----------- | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| idn         | sailpoint.server.IdnRuleUtil      | Provides a read-only starting point for using the SailPoint API. From this passed reference, the rule can interrogate the IdentityNow data model including identities or account information via helper methods as described in [IdnRuleUtil](../idn_rule_utility.md). |
| plan        | sailpoint.object.ProvisioningPlan | Reference to identity object that represents the identity being calculated.                                                                                                                                                                                            |
| application | java.lang.Object                  | Attribute value of the identity attribute before the rule runs.                                                                                                                                                                                                        |

> Note: logs are not supported for BeforeProvisioning rules.

## Output

There is no output for a before provisioning rule.

## Template

```xml
<?xml version='1.0' encoding='UTF-8'?>
<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">
<Rule name="Example Rule" type="BeforeProvisioning">
  <Description>Describe your rule here.</Description>
  <Source><![CDATA[

  // Add your logic here.

  ]]></Source>
</Rule>
```

## Example - Before Provisioning Rule which changes disables and enables to a modify

```java
<?xml version='1.0' encoding='UTF-8'?>
<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">
<Rule name="Example Rule" type="BeforeProvisioning">
  <Description>Before Provisioning Rule which changes disables and enables to a modify.</Description>
  <Source><![CDATA[
import sailpoint.object.*;
import sailpoint.object.ProvisioningPlan.AccountRequest;
import sailpoint.object.ProvisioningPlan.AccountRequest.Operation;
import sailpoint.object.ProvisioningPlan.AttributeRequest;
import sailpoint.object.ProvisioningPlan;
import sailpoint.object.ProvisioningPlan.Operation;

for ( AccountRequest accountRequest : plan.getAccountRequests() ) {
  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Disable ) ) {
    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );
  }
  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Enable ) ) {
    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );
  }
}

  ]]></Source>
</Rule>
```

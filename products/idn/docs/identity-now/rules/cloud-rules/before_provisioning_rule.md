---
id: before-provisioning-rule
title: Before Provisioning Rule
pagination_label: Before Provisioning Rule
sidebar_label: Before Provisioning Rule
sidebar_class_name: beforeProvisioningRule
keywords: ['cloud', 'rules', 'before provisioning']
description: This rule runs before provisioning to a source.
slug: /docs/rules/cloud-rules/before-provisioning-rule
tags: ['Rules']
---

## Overview

Use this rule to modify a provisioning plan as provisioning is sent out. Do not use this rule to create new attributes. Use an account creation profile (provisioning policy) instead.

## Execution

- **Cloud Execution** - This rule executes in the IdentityNow cloud, and it has read-only access to IdentityNow data models, but it does not have access to on-premise sources or connectors.
- **Logging** - Logging statements are currently only visible to SailPoint personnel.

![Rule Execution](../img/cloud_execution.png)

## Input

| Argument | Type | Purpose |
| --- | --- | --- |
| log | org.apache.log4j.Logger | Logger to log statements. _Note: This executes in the cloud, and logging is currently not exposed to anyone other than SailPoint._ |
| idn | sailpoint.server.IdnRuleUtil | Provides a read-only starting point for using the SailPoint API. From this passed reference, the rule can interrogate the IdentityNow data model including identities or account information via helper methods as described in [IdnRuleUtil](../idn_rule_utility.md). |
| plan | sailpoint.object.ProvisioningPlan | A set of provisioning instructions which are sent to the source connectors. |
| application | sailpoint.object.Application | A read-only reference to application object that represents the source to which provisioning is being done. |

## Output

There is no output for a Before Provisioning rule.

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

## Example - Before Provisioning Rule that Changes Disables and Enables to a Modify

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

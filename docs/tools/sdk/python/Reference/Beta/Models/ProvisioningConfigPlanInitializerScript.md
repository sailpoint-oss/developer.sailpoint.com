---
id: beta-provisioning-config-plan-initializer-script
title: ProvisioningConfigPlanInitializerScript
pagination_label: ProvisioningConfigPlanInitializerScript
sidebar_label: ProvisioningConfigPlanInitializerScript
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ProvisioningConfigPlanInitializerScript', 'BetaProvisioningConfigPlanInitializerScript'] 
slug: /tools/sdk/python/beta/models/provisioning-config-plan-initializer-script
tags: ['SDK', 'Software Development Kit', 'ProvisioningConfigPlanInitializerScript', 'BetaProvisioningConfigPlanInitializerScript']
---

# ProvisioningConfigPlanInitializerScript

This is a reference to a plan initializer script.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | **str** | This is a Rule that allows provisioning instruction changes. | [optional] 
}

## Example

```python
from sailpoint.beta.models.provisioning_config_plan_initializer_script import ProvisioningConfigPlanInitializerScript

provisioning_config_plan_initializer_script = ProvisioningConfigPlanInitializerScript(
source='<?xml version='1.0' encoding='UTF-8'?>\r\n<!DOCTYPE Rule PUBLIC \"sailpoint.dtd\" \"sailpoint.dtd\">\r\n<Rule name=\"Example Rule\" type=\"BeforeProvisioning\">\r\n  <Description>Before Provisioning Rule which changes disables and enables to a modify.</Description>\r\n  <Source><![CDATA[\r\nimport sailpoint.object.*;\r\nimport sailpoint.object.ProvisioningPlan.AccountRequest;\r\nimport sailpoint.object.ProvisioningPlan.AccountRequest.Operation;\r\nimport sailpoint.object.ProvisioningPlan.AttributeRequest;\r\nimport sailpoint.object.ProvisioningPlan;\r\nimport sailpoint.object.ProvisioningPlan.Operation;\r\n\r\nfor ( AccountRequest accountRequest : plan.getAccountRequests() ) {\r\n  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Disable ) ) {\r\n    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );\r\n  }\r\n  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Enable ) ) {\r\n    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );\r\n  }\r\n}\r\n\r\n  ]]></Source>
'
)

```
[[Back to top]](#) 


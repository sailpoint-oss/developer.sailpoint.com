---
id: v2024-provisioning-config1-plan-initializer-script
title: ProvisioningConfig1PlanInitializerScript
pagination_label: ProvisioningConfig1PlanInitializerScript
sidebar_label: ProvisioningConfig1PlanInitializerScript
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ProvisioningConfig1PlanInitializerScript', 'V2024ProvisioningConfig1PlanInitializerScript'] 
slug: /tools/sdk/powershell/v2024/models/provisioning-config1-plan-initializer-script
tags: ['SDK', 'Software Development Kit', 'ProvisioningConfig1PlanInitializerScript', 'V2024ProvisioningConfig1PlanInitializerScript']
---


# ProvisioningConfig1PlanInitializerScript

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Source** | **String** | This is a Rule that allows provisioning instruction changes. | [optional] 

## Examples

- Prepare the resource
```powershell
$ProvisioningConfig1PlanInitializerScript = Initialize-PSSailpoint.V2024ProvisioningConfig1PlanInitializerScript  -Source <?xml version='1.0' encoding='UTF-8'?>\r\n<!DOCTYPE Rule PUBLIC \"sailpoint.dtd\" \"sailpoint.dtd\">\r\n<Rule name=\"Example Rule\" type=\"BeforeProvisioning\">\r\n  <Description>Before Provisioning Rule which changes disables and enables to a modify.</Description>\r\n  <Source><![CDATA[\r\nimport sailpoint.object.*;\r\nimport sailpoint.object.ProvisioningPlan.AccountRequest;\r\nimport sailpoint.object.ProvisioningPlan.AccountRequest.Operation;\r\nimport sailpoint.object.ProvisioningPlan.AttributeRequest;\r\nimport sailpoint.object.ProvisioningPlan;\r\nimport sailpoint.object.ProvisioningPlan.Operation;\r\n\r\nfor ( AccountRequest accountRequest : plan.getAccountRequests() ) {\r\n  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Disable ) ) {\r\n    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );\r\n  }\r\n  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Enable ) ) {\r\n    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );\r\n  }\r\n}\r\n\r\n  ]]></Source>

```

- Convert the resource to JSON
```powershell
$ProvisioningConfig1PlanInitializerScript | ConvertTo-JSON
```


[[Back to top]](#) 


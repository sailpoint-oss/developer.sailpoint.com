---
id: v2024-provisioning-config-plan-initializer-script
title: ProvisioningConfigPlanInitializerScript
pagination_label: ProvisioningConfigPlanInitializerScript
sidebar_label: ProvisioningConfigPlanInitializerScript
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ProvisioningConfigPlanInitializerScript', 'V2024ProvisioningConfigPlanInitializerScript'] 
slug: /tools/sdk/powershell/v2024/models/provisioning-config-plan-initializer-script
tags: ['SDK', 'Software Development Kit', 'ProvisioningConfigPlanInitializerScript', 'V2024ProvisioningConfigPlanInitializerScript']
---


# ProvisioningConfigPlanInitializerScript

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Source** | **String** | This is a Rule that allows provisioning instruction changes. | [optional] 

## Examples

- Prepare the resource
```powershell
$ProvisioningConfigPlanInitializerScript = Initialize-PSSailpoint.V2024ProvisioningConfigPlanInitializerScript  -Source <?xml version='1.0' encoding='UTF-8'?>\r\n<!DOCTYPE Rule PUBLIC \"sailpoint.dtd\" \"sailpoint.dtd\">\r\n<Rule name=\"Example Rule\" type=\"BeforeProvisioning\">\r\n  <Description>Before Provisioning Rule which changes disables and enables to a modify.</Description>\r\n  <Source><![CDATA[\r\nimport sailpoint.object.*;\r\nimport sailpoint.object.ProvisioningPlan.AccountRequest;\r\nimport sailpoint.object.ProvisioningPlan.AccountRequest.Operation;\r\nimport sailpoint.object.ProvisioningPlan.AttributeRequest;\r\nimport sailpoint.object.ProvisioningPlan;\r\nimport sailpoint.object.ProvisioningPlan.Operation;\r\n\r\nfor ( AccountRequest accountRequest : plan.getAccountRequests() ) {\r\n  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Disable ) ) {\r\n    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );\r\n  }\r\n  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Enable ) ) {\r\n    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );\r\n  }\r\n}\r\n\r\n  ]]></Source>

```

- Convert the resource to JSON
```powershell
$ProvisioningConfigPlanInitializerScript | ConvertTo-JSON
```


[[Back to top]](#) 


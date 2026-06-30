---
id: provisioningconfig-plan-initializer-script
title: ProvisioningconfigPlanInitializerScript
pagination_label: ProvisioningconfigPlanInitializerScript
sidebar_label: ProvisioningconfigPlanInitializerScript
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ProvisioningconfigPlanInitializerScript', 'ProvisioningconfigPlanInitializerScript'] 
slug: /tools/sdk/powershell/simintegrations/models/provisioningconfig-plan-initializer-script
tags: ['SDK', 'Software Development Kit', 'ProvisioningconfigPlanInitializerScript', 'ProvisioningconfigPlanInitializerScript']
---


# ProvisioningconfigPlanInitializerScript

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Source** | **String** | This is a Rule that allows provisioning instruction changes. | [optional] 

## Examples

- Prepare the resource
```powershell
$ProvisioningconfigPlanInitializerScript = Initialize-ProvisioningconfigPlanInitializerScript  -Source <?xml version='1.0' encoding='UTF-8'?>\r\n<!DOCTYPE Rule PUBLIC \"sailpoint.dtd\" \"sailpoint.dtd\">\r\n<Rule name=\"Example Rule\" type=\"BeforeProvisioning\">\r\n  <Description>Before Provisioning Rule which changes disables and enables to a modify.</Description>\r\n  <Source><![CDATA[\r\nimport sailpoint.object.*;\r\nimport sailpoint.object.ProvisioningPlan.AccountRequest;\r\nimport sailpoint.object.ProvisioningPlan.AccountRequest.Operation;\r\nimport sailpoint.object.ProvisioningPlan.AttributeRequest;\r\nimport sailpoint.object.ProvisioningPlan;\r\nimport sailpoint.object.ProvisioningPlan.Operation;\r\n\r\nfor ( AccountRequest accountRequest : plan.getAccountRequests() ) {\r\n  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Disable ) ) {\r\n    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );\r\n  }\r\n  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Enable ) ) {\r\n    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );\r\n  }\r\n}\r\n\r\n  ]]></Source>

```

- Convert the resource to JSON
```powershell
$ProvisioningconfigPlanInitializerScript | ConvertTo-JSON
```


[[Back to top]](#) 


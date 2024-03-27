---
id: provisioning-config-plan-initializer-script
title: ProvisioningConfigPlanInitializerScript
pagination_label: ProvisioningConfigPlanInitializerScript
sidebar_label: ProvisioningConfigPlanInitializerScript
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ProvisioningConfigPlanInitializerScript'] 
slug: /tools/sdk/powershell/v3/models/provisioning-config-plan-initializer-script
tags: ['SDK', 'Software Development Kit', 'ProvisioningConfigPlanInitializerScript']
---


# ProvisioningConfigPlanInitializerScript

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Source** |  Pointer to **String** | This is a Rule that allows provisioning instruction changes. | [optional] 

## Examples

- Prepare the resource
```powershell
$ProvisioningConfigPlanInitializerScript = Initialize-PSSailpointProvisioningConfigPlanInitializerScript  -Source &lt;?xml version&#x3D;&#39;1.0&#39; encoding&#x3D;&#39;UTF-8&#39;?&gt;\r\n&lt;!DOCTYPE Rule PUBLIC \&quot;sailpoint.dtd\&quot; \&quot;sailpoint.dtd\&quot;&gt;\r\n&lt;Rule name&#x3D;\&quot;Example Rule\&quot; type&#x3D;\&quot;BeforeProvisioning\&quot;&gt;\r\n  &lt;Description&gt;Before Provisioning Rule which changes disables and enables to a modify.&lt;/Description&gt;\r\n  &lt;Source&gt;&lt;![CDATA[\r\nimport sailpoint.object.*;\r\nimport sailpoint.object.ProvisioningPlan.AccountRequest;\r\nimport sailpoint.object.ProvisioningPlan.AccountRequest.Operation;\r\nimport sailpoint.object.ProvisioningPlan.AttributeRequest;\r\nimport sailpoint.object.ProvisioningPlan;\r\nimport sailpoint.object.ProvisioningPlan.Operation;\r\n\r\nfor ( AccountRequest accountRequest : plan.getAccountRequests() ) {\r\n  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Disable ) ) {\r\n    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );\r\n  }\r\n  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Enable ) ) {\r\n    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );\r\n  }\r\n}\r\n\r\n  ]]&gt;&lt;/Source&gt;

```

- Convert the resource to JSON
```powershell
$ProvisioningConfigPlanInitializerScript | ConvertTo-JSON
```


[[Back to top]](#) 


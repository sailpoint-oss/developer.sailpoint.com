---
id: beta-provisioning-completed-account-requests-inner-attribute-requests-inner
title: ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner
pagination_label: ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner
sidebar_label: ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner', 'BetaProvisioningCompletedAccountRequestsInnerAttributeRequestsInner'] 
slug: /tools/sdk/powershell/beta/models/provisioning-completed-account-requests-inner-attribute-requests-inner
tags: ['SDK', 'Software Development Kit', 'ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner', 'BetaProvisioningCompletedAccountRequestsInnerAttributeRequestsInner']
---


# ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttributeName** | **String** | Name of the attribute being provisioned. | [required]
**AttributeValue** | **String** | Value of the attribute being provisioned. | [optional] 
**Operation** |  **Enum** [  "Add",    "Set",    "Remove" ] | The operation to handle the attribute. | [required]

## Examples

- Prepare the resource
```powershell
$ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner = Initialize-PSSailpoint.BetaProvisioningCompletedAccountRequestsInnerAttributeRequestsInner  -AttributeName memberOf `
 -AttributeValue CN=sales,DC=helpco,DC=com `
 -Operation Add
```

- Convert the resource to JSON
```powershell
$ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner | ConvertTo-JSON
```


[[Back to top]](#) 


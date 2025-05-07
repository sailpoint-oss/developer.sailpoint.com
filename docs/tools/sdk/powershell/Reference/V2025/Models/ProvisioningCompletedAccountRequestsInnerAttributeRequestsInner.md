---
id: v2025-provisioning-completed-account-requests-inner-attribute-requests-inner
title: ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner
pagination_label: ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner
sidebar_label: ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner', 'V2025ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner'] 
slug: /tools/sdk/powershell/v2025/models/provisioning-completed-account-requests-inner-attribute-requests-inner
tags: ['SDK', 'Software Development Kit', 'ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner', 'V2025ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner']
---


# ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttributeName** | **String** | The name of the attribute being provisioned. | [required]
**AttributeValue** | **String** | The value of the attribute being provisioned. | [optional] 
**Operation** |  **Enum** [  "Add",    "Set",    "Remove" ] | The operation to handle the attribute. | [required]

## Examples

- Prepare the resource
```powershell
$ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner = Initialize-V2025ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner  -AttributeName memberOf `
 -AttributeValue CN=jedi,DC=starwars,DC=com `
 -Operation Add
```

- Convert the resource to JSON
```powershell
$ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner | ConvertTo-JSON
```


[[Back to top]](#) 


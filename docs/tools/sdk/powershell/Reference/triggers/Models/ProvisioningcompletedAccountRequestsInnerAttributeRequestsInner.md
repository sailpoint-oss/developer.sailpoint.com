---
id: provisioningcompleted-account-requests-inner-attribute-requests-inner
title: ProvisioningcompletedAccountRequestsInnerAttributeRequestsInner
pagination_label: ProvisioningcompletedAccountRequestsInnerAttributeRequestsInner
sidebar_label: ProvisioningcompletedAccountRequestsInnerAttributeRequestsInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ProvisioningcompletedAccountRequestsInnerAttributeRequestsInner', 'ProvisioningcompletedAccountRequestsInnerAttributeRequestsInner'] 
slug: /tools/sdk/powershell/triggers/models/provisioningcompleted-account-requests-inner-attribute-requests-inner
tags: ['SDK', 'Software Development Kit', 'ProvisioningcompletedAccountRequestsInnerAttributeRequestsInner', 'ProvisioningcompletedAccountRequestsInnerAttributeRequestsInner']
---


# ProvisioningcompletedAccountRequestsInnerAttributeRequestsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttributeName** | **String** | The name of the attribute being provisioned. | [required]
**AttributeValue** | **String** | The value of the attribute being provisioned. | [optional] 
**Operation** |  **Enum** [  "Add",    "Set",    "Remove" ] | The operation to handle the attribute. | [required]

## Examples

- Prepare the resource
```powershell
$ProvisioningcompletedAccountRequestsInnerAttributeRequestsInner = Initialize-ProvisioningcompletedAccountRequestsInnerAttributeRequestsInner  -AttributeName memberOf `
 -AttributeValue CN=jedi,DC=starwars,DC=com `
 -Operation Add
```

- Convert the resource to JSON
```powershell
$ProvisioningcompletedAccountRequestsInnerAttributeRequestsInner | ConvertTo-JSON
```


[[Back to top]](#) 


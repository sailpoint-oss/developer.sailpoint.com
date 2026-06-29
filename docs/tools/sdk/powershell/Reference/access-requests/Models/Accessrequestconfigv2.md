---
id: accessrequestconfigv2
title: Accessrequestconfigv2
pagination_label: Accessrequestconfigv2
sidebar_label: Accessrequestconfigv2
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessrequestconfigv2', 'Accessrequestconfigv2'] 
slug: /tools/sdk/powershell/accessrequests/models/accessrequestconfigv2
tags: ['SDK', 'Software Development Kit', 'Accessrequestconfigv2', 'Accessrequestconfigv2']
---


# Accessrequestconfigv2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalsMustBeExternal** | **Boolean** | If this is true, approvals must be processed by an external system. Also, if this is true, it blocks Request Center access requests and returns an error for any user who isn't an org admin. | [optional] [default to $false]
**ReauthorizationEnabled** | **Boolean** | If this is true, reauthorization will be enforced for appropriately configured access items. Enablement of this feature is currently in a limited state. | [optional] [default to $false]
**RequestOnBehalfOfConfig** | [**Requestonbehalfofconfigv2**](requestonbehalfofconfigv2) |  | [optional] 
**EntitlementRequestConfig** | [**Entitlementrequestconfigv2**](entitlementrequestconfigv2) |  | [optional] 
**GovGroupVisibilityEnabled** | **Boolean** | If this is true, requesters and requested-for users will be able to see the names of governance group members when a request is awaiting the group's approval. Up to the first 10 members of the group will be listed. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$Accessrequestconfigv2 = Initialize-Accessrequestconfigv2  -ApprovalsMustBeExternal true `
 -ReauthorizationEnabled true `
 -RequestOnBehalfOfConfig null `
 -EntitlementRequestConfig null `
 -GovGroupVisibilityEnabled true
```

- Convert the resource to JSON
```powershell
$Accessrequestconfigv2 | ConvertTo-JSON
```


[[Back to top]](#) 


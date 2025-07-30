---
id: v2025-approval-attributes-request
title: ApprovalAttributesRequest
pagination_label: ApprovalAttributesRequest
sidebar_label: ApprovalAttributesRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalAttributesRequest', 'V2025ApprovalAttributesRequest'] 
slug: /tools/sdk/powershell/v2025/models/approval-attributes-request
tags: ['SDK', 'Software Development Kit', 'ApprovalAttributesRequest', 'V2025ApprovalAttributesRequest']
---


# ApprovalAttributesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdditionalAttributes** | **map[string]String** | Additional attributes as key-value pairs that are not part of the standard schema but can be included for custom data. | [optional] 
**Comment** | **String** | Comment associated with the request. | [optional] 
**RemoveAttributeKeys** | **[]String** | List of attribute keys to be removed. | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalAttributesRequest = Initialize-V2025ApprovalAttributesRequest  -AdditionalAttributes {additionalProp1=string, additionalProp2=string, additionalProp3=string} `
 -Comment comment `
 -RemoveAttributeKeys [string]
```

- Convert the resource to JSON
```powershell
$ApprovalAttributesRequest | ConvertTo-JSON
```


[[Back to top]](#) 


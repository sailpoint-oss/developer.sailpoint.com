---
id: remediation-items
title: RemediationItems
pagination_label: RemediationItems
sidebar_label: RemediationItems
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RemediationItems'] 
slug: /tools/sdk/powershell/v2024/models/remediation-items
tags: ['SDK', 'Software Development Kit', 'RemediationItems']
---


# RemediationItems

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | The ID of the certification | [optional] 
**TargetId** |  Pointer to **String** | The ID of the certification target | [optional] 
**TargetName** |  Pointer to **String** | The name of the certification target | [optional] 
**TargetDisplayName** |  Pointer to **String** | The display name of the certification target | [optional] 
**ApplicationName** |  Pointer to **String** | The name of the application/source | [optional] 
**AttributeName** |  Pointer to **String** | The name of the attribute being certified | [optional] 
**AttributeOperation** |  Pointer to **String** | The operation of the certification on the attribute | [optional] 
**AttributeValue** |  Pointer to **String** | The value of the attribute being certified | [optional] 
**NativeIdentity** |  Pointer to **String** | The native identity of the target | [optional] 

## Examples

- Prepare the resource
```powershell
$RemediationItems = Initialize-PSSailpoint.V2024RemediationItems  -Id 2c9180835d2e5168015d32f890ca1581 `
 -TargetId 2c9180835d2e5168015d32f890ca1581 `
 -TargetName john.smith `
 -TargetDisplayName emailAddress `
 -ApplicationName Active Directory `
 -AttributeName phoneNumber `
 -AttributeOperation update `
 -AttributeValue 512-555-1212 `
 -NativeIdentity jason.smith2
```

- Convert the resource to JSON
```powershell
$RemediationItems | ConvertTo-JSON
```


[[Back to top]](#) 


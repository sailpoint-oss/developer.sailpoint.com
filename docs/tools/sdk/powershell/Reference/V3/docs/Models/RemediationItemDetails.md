---
id: remediation-item-details
title: RemediationItemDetails
pagination_label: RemediationItemDetails
sidebar_label: RemediationItemDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RemediationItemDetails', 'RemediationItemDetails'] 
slug: /tools/sdk/powershell/v3/models/remediation-item-details
tags: ['SDK', 'Software Development Kit', 'RemediationItemDetails', 'RemediationItemDetails']
---


# RemediationItemDetails

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
$RemediationItemDetails = Initialize-PSSailpoint.V3RemediationItemDetails  -Id 2c9180835d2e5168015d32f890ca1581 `
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
$RemediationItemDetails | ConvertTo-JSON
```


[[Back to top]](#) 


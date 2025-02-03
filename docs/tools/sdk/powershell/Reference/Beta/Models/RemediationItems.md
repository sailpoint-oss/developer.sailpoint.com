---
id: beta-remediation-items
title: RemediationItems
pagination_label: RemediationItems
sidebar_label: RemediationItems
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RemediationItems', 'BetaRemediationItems'] 
slug: /tools/sdk/powershell/beta/models/remediation-items
tags: ['SDK', 'Software Development Kit', 'RemediationItems', 'BetaRemediationItems']
---


# RemediationItems

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The ID of the certification | [optional] 
**TargetId** | **String** | The ID of the certification target | [optional] 
**TargetName** | **String** | The name of the certification target | [optional] 
**TargetDisplayName** | **String** | The display name of the certification target | [optional] 
**ApplicationName** | **String** | The name of the application/source | [optional] 
**AttributeName** | **String** | The name of the attribute being certified | [optional] 
**AttributeOperation** | **String** | The operation of the certification on the attribute | [optional] 
**AttributeValue** | **String** | The value of the attribute being certified | [optional] 
**NativeIdentity** | **String** | The native identity of the target | [optional] 

## Examples

- Prepare the resource
```powershell
$RemediationItems = Initialize-PSSailpoint.BetaRemediationItems  -Id 2c9180835d2e5168015d32f890ca1581 `
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


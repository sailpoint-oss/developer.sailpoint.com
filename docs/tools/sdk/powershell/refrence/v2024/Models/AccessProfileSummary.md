---
id: access-profile-summary
title: AccessProfileSummary
pagination_label: AccessProfileSummary
sidebar_label: AccessProfileSummary
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessProfileSummary'] 
slug: /tools/sdk/powershell/v2024/models/access-profile-summary
tags: ['SDK', 'Software Development Kit', 'AccessProfileSummary']
---


# AccessProfileSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | The unique ID of the referenced object. | [optional] 
**Name** |  Pointer to **String** | The human readable name of the referenced object. | [optional] 
**DisplayName** |  Pointer to **String** |  | [optional] 
**Type** |  Pointer to [**DtoType**](dto-type) |  | [optional] 
**Description** |  Pointer to **String** |  | [optional] 
**Source** |  Pointer to [**Reference1**](reference1) |  | [optional] 
**Owner** |  Pointer to [**DisplayReference**](display-reference) |  | [optional] 
**Revocable** |  Pointer to **Boolean** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessProfileSummary = Initialize-PSSailpoint.V2024AccessProfileSummary  -Id 2c91808568c529c60168cca6f90c1313 `
 -Name John Doe `
 -DisplayName John Q. Doe `
 -Type null `
 -Description null `
 -Source null `
 -Owner null `
 -Revocable true
```

- Convert the resource to JSON
```powershell
$AccessProfileSummary | ConvertTo-JSON
```


[[Back to top]](#) 


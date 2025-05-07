---
id: access-profile-summary
title: AccessProfileSummary
pagination_label: AccessProfileSummary
sidebar_label: AccessProfileSummary
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessProfileSummary', 'AccessProfileSummary'] 
slug: /tools/sdk/powershell/v3/models/access-profile-summary
tags: ['SDK', 'Software Development Kit', 'AccessProfileSummary', 'AccessProfileSummary']
---


# AccessProfileSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique ID of the referenced object. | [optional] 
**Name** | **String** | The human readable name of the referenced object. | [optional] 
**DisplayName** | **String** |  | [optional] 
**Description** | **String** | Description of access item. | [optional] 
**Type** | **String** | Type of the access item. | [optional] 
**Source** | [**Reference1**](reference1) |  | [optional] 
**Owner** | [**DisplayReference**](display-reference) |  | [optional] 
**Revocable** | **Boolean** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessProfileSummary = Initialize-AccessProfileSummary  -Id 2c91808568c529c60168cca6f90c1313 `
 -Name John Doe `
 -DisplayName John Q. Doe `
 -Description null `
 -Type ACCESS_PROFILE `
 -Source null `
 -Owner null `
 -Revocable true
```

- Convert the resource to JSON
```powershell
$AccessProfileSummary | ConvertTo-JSON
```


[[Back to top]](#) 


---
id: v2025-non-employee-source
title: NonEmployeeSource
pagination_label: NonEmployeeSource
sidebar_label: NonEmployeeSource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'NonEmployeeSource', 'V2025NonEmployeeSource'] 
slug: /tools/sdk/powershell/v2025/models/non-employee-source
tags: ['SDK', 'Software Development Kit', 'NonEmployeeSource', 'V2025NonEmployeeSource']
---


# NonEmployeeSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Non-Employee source id. | [optional] 
**SourceId** | **String** | Source Id associated with this non-employee source. | [optional] 
**Name** | **String** | Source name associated with this non-employee source. | [optional] 
**Description** | **String** | Source description associated with this non-employee source. | [optional] 
**Approvers** | [**[]NonEmployeeIdentityReferenceWithId**](non-employee-identity-reference-with-id) | List of approvers | [optional] 
**AccountManagers** | [**[]NonEmployeeIdentityReferenceWithId**](non-employee-identity-reference-with-id) | List of account managers | [optional] 
**Modified** | **System.DateTime** | When the request was last modified. | [optional] 
**Created** | **System.DateTime** | When the request was created. | [optional] 

## Examples

- Prepare the resource
```powershell
$NonEmployeeSource = Initialize-V2025NonEmployeeSource  -Id a0303682-5e4a-44f7-bdc2-6ce6112549c1 `
 -SourceId 2c91808568c529c60168cca6f90c1313 `
 -Name Retail `
 -Description Source description `
 -Approvers null `
 -AccountManagers null `
 -Modified 2019-08-23T18:52:59.162Z `
 -Created 2019-08-23T18:40:35.772Z
```

- Convert the resource to JSON
```powershell
$NonEmployeeSource | ConvertTo-JSON
```


[[Back to top]](#) 


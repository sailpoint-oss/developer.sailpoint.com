---
id: non-employee-source
title: NonEmployeeSource
pagination_label: NonEmployeeSource
sidebar_label: NonEmployeeSource
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'NonEmployeeSource'] 
slug: /tools/sdk/powershell/v3/models/non-employee-source
tags: ['SDK', 'Software Development Kit', 'NonEmployeeSource']
---


# NonEmployeeSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Non-Employee source id. | [optional] 
**SourceId** |  Pointer to **String** | Source Id associated with this non-employee source. | [optional] 
**Name** |  Pointer to **String** | Source name associated with this non-employee source. | [optional] 
**Description** |  Pointer to **String** | Source description associated with this non-employee source. | [optional] 
**Approvers** |  Pointer to [**[]NonEmployeeIdentityReferenceWithId**](non-employee-identity-reference-with-id) | List of approvers | [optional] 
**AccountManagers** |  Pointer to [**[]NonEmployeeIdentityReferenceWithId**](non-employee-identity-reference-with-id) | List of account managers | [optional] 
**Modified** |  Pointer to **System.DateTime** | When the request was last modified. | [optional] 
**Created** |  Pointer to **System.DateTime** | When the request was created. | [optional] 

## Examples

- Prepare the resource
```powershell
$NonEmployeeSource = Initialize-NonEmployeeSource  -Id a0303682-5e4a-44f7-bdc2-6ce6112549c1 `
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


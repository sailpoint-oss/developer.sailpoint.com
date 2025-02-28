---
id: v2024-non-employee-source-with-ne-count
title: NonEmployeeSourceWithNECount
pagination_label: NonEmployeeSourceWithNECount
sidebar_label: NonEmployeeSourceWithNECount
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'NonEmployeeSourceWithNECount', 'V2024NonEmployeeSourceWithNECount'] 
slug: /tools/sdk/powershell/v2024/models/non-employee-source-with-ne-count
tags: ['SDK', 'Software Development Kit', 'NonEmployeeSourceWithNECount', 'V2024NonEmployeeSourceWithNECount']
---


# NonEmployeeSourceWithNECount

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
**NonEmployeeCount** | **Int32** | Number of non-employee records associated with this source. This value is 'NULL' by default. To get the non-employee count, you must set the `non-employee-count` flag in your request to 'true'. | [optional] 

## Examples

- Prepare the resource
```powershell
$NonEmployeeSourceWithNECount = Initialize-PSSailpoint.V2024NonEmployeeSourceWithNECount  -Id a0303682-5e4a-44f7-bdc2-6ce6112549c1 `
 -SourceId 2c91808568c529c60168cca6f90c1313 `
 -Name Retail `
 -Description Source description `
 -Approvers null `
 -AccountManagers null `
 -Modified 2019-08-23T18:52:59.162Z `
 -Created 2019-08-23T18:40:35.772Z `
 -NonEmployeeCount 120
```

- Convert the resource to JSON
```powershell
$NonEmployeeSourceWithNECount | ConvertTo-JSON
```


[[Back to top]](#) 


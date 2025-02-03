---
id: beta-non-employee-source-with-cloud-external-id
title: NonEmployeeSourceWithCloudExternalId
pagination_label: NonEmployeeSourceWithCloudExternalId
sidebar_label: NonEmployeeSourceWithCloudExternalId
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'NonEmployeeSourceWithCloudExternalId', 'BetaNonEmployeeSourceWithCloudExternalId'] 
slug: /tools/sdk/powershell/beta/models/non-employee-source-with-cloud-external-id
tags: ['SDK', 'Software Development Kit', 'NonEmployeeSourceWithCloudExternalId', 'BetaNonEmployeeSourceWithCloudExternalId']
---


# NonEmployeeSourceWithCloudExternalId

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Non-Employee source id. | [optional] 
**SourceId** | **String** | Source Id associated with this non-employee source. | [optional] 
**Name** | **String** | Source name associated with this non-employee source. | [optional] 
**Description** | **String** | Source description associated with this non-employee source. | [optional] 
**Approvers** | [**[]IdentityReferenceWithId**](identity-reference-with-id) | List of approvers | [optional] 
**AccountManagers** | [**[]IdentityReferenceWithId**](identity-reference-with-id) | List of account managers | [optional] 
**Modified** | **System.DateTime** | When the request was last modified. | [optional] 
**Created** | **System.DateTime** | When the request was created. | [optional] 
**NonEmployeeCount** | **Int32** | The number of non-employee records on all sources that *requested-for* user manages. | [optional] 
**CloudExternalId** | **String** | Legacy ID used for sources from the V1 API. This attribute will be removed from a future version of the API and will not be considered a breaking change. No clients should rely on this ID always being present. | [optional] 

## Examples

- Prepare the resource
```powershell
$NonEmployeeSourceWithCloudExternalId = Initialize-PSSailpoint.BetaNonEmployeeSourceWithCloudExternalId  -Id a0303682-5e4a-44f7-bdc2-6ce6112549c1 `
 -SourceId 2c91808568c529c60168cca6f90c1313 `
 -Name Retail `
 -Description Source description `
 -Approvers null `
 -AccountManagers null `
 -Modified 2019-08-23T18:52:59.162Z `
 -Created 2019-08-23T18:40:35.772Z `
 -NonEmployeeCount 2 `
 -CloudExternalId 99999
```

- Convert the resource to JSON
```powershell
$NonEmployeeSourceWithCloudExternalId | ConvertTo-JSON
```


[[Back to top]](#) 


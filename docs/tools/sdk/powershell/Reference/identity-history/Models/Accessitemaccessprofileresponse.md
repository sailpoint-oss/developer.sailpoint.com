---
id: accessitemaccessprofileresponse
title: Accessitemaccessprofileresponse
pagination_label: Accessitemaccessprofileresponse
sidebar_label: Accessitemaccessprofileresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessitemaccessprofileresponse', 'Accessitemaccessprofileresponse'] 
slug: /tools/sdk/powershell/identityhistory/models/accessitemaccessprofileresponse
tags: ['SDK', 'Software Development Kit', 'Accessitemaccessprofileresponse', 'Accessitemaccessprofileresponse']
---


# Accessitemaccessprofileresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | the access item id | [optional] 
**AccessType** | **String** | the access item type. accessProfile in this case | [optional] 
**DisplayName** | **String** | the display name of the identity | [optional] 
**SourceName** | **String** | the name of the source | [optional] 
**EntitlementCount** | **Int32** | the number of entitlements the access profile will create | [required]
**Description** | **String** | the description for the access profile | [optional] 
**SourceId** | **String** | the id of the source | [optional] 
**AppRefs** | [**[]AccessitemaccessprofileresponseAppRefsInner**](accessitemaccessprofileresponse-app-refs-inner) | the list of app ids associated with the access profile | [required]
**StartDate** | **String** | the date the access profile will be assigned to the specified identity, in case requested with a future start date | [optional] 
**RemoveDate** | **String** | the date the access profile is no longer assigned to the specified identity | [optional] 
**Standalone** | **Boolean** | indicates whether the access profile is standalone | [required]
**Revocable** | **Boolean** | indicates whether the access profile is revocable | [required]

## Examples

- Prepare the resource
```powershell
$Accessitemaccessprofileresponse = Initialize-Accessitemaccessprofileresponse  -Id 2c918087763e69d901763e72e97f006f `
 -AccessType accessProfile `
 -DisplayName Dr. Arden Rogahn MD `
 -SourceName DataScienceDataset `
 -EntitlementCount 12 `
 -Description AccessProfile - Workday/Citizenship access `
 -SourceId 2793o32dwd `
 -AppRefs [{"cloudAppId":"8c190e6787aa4ed9a90bd9d5344523fb","cloudAppName":"Sample App"},{"cloudAppId":"2c91808a77ff216301782327a50f09bf","cloudAppName":"Another App"}] `
 -StartDate 2024-07-01T05:00:00.00Z `
 -RemoveDate 2024-07-01T06:00:00.00Z `
 -Standalone false `
 -Revocable true
```

- Convert the resource to JSON
```powershell
$Accessitemaccessprofileresponse | ConvertTo-JSON
```


[[Back to top]](#) 


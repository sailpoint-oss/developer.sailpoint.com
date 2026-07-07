---
id: accessitemroleresponse
title: Accessitemroleresponse
pagination_label: Accessitemroleresponse
sidebar_label: Accessitemroleresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessitemroleresponse', 'Accessitemroleresponse'] 
slug: /tools/sdk/powershell/identityhistory/models/accessitemroleresponse
tags: ['SDK', 'Software Development Kit', 'Accessitemroleresponse', 'Accessitemroleresponse']
---


# Accessitemroleresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | the access item id | [optional] 
**AccessType** | **String** | the access item type. role in this case | [optional] 
**DisplayName** | **String** | the role display name | [optional] 
**SourceName** | **String** | the associated source name if it exists | [optional] 
**Description** | **String** | the description for the role | [optional] 
**StartDate** | **String** | the date the access profile will be assigned to the specified identity, in case requested with a future start date | [optional] 
**RemoveDate** | **String** | the date the role is no longer assigned to the specified identity | [optional] 
**Revocable** | **Boolean** | indicates whether the role is revocable | [required]

## Examples

- Prepare the resource
```powershell
$Accessitemroleresponse = Initialize-Accessitemroleresponse  -Id 2c918087763e69d901763e72e97f006f `
 -AccessType role `
 -DisplayName sample `
 -SourceName Source Name `
 -Description Role - Workday/Citizenship access `
 -StartDate 2024-07-01T05:00:00.00Z `
 -RemoveDate 2024-07-01T06:00:00.00Z `
 -Revocable true
```

- Convert the resource to JSON
```powershell
$Accessitemroleresponse | ConvertTo-JSON
```


[[Back to top]](#) 


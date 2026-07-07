---
id: accessitemaccountresponse
title: Accessitemaccountresponse
pagination_label: Accessitemaccountresponse
sidebar_label: Accessitemaccountresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessitemaccountresponse', 'Accessitemaccountresponse'] 
slug: /tools/sdk/powershell/identityhistory/models/accessitemaccountresponse
tags: ['SDK', 'Software Development Kit', 'Accessitemaccountresponse', 'Accessitemaccountresponse']
---


# Accessitemaccountresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | the access item id | [optional] 
**AccessType** | **String** | the access item type. account in this case | [optional] 
**DisplayName** | **String** | the display name of the identity | [optional] 
**SourceName** | **String** | the name of the source | [optional] 
**NativeIdentity** | **String** | the native identifier used to uniquely identify an acccount | [required]
**SourceId** | **String** | the id of the source | [optional] 
**EntitlementCount** | **Int32** | the number of entitlements the account will create | [optional] 

## Examples

- Prepare the resource
```powershell
$Accessitemaccountresponse = Initialize-Accessitemaccountresponse  -Id 2c918087763e69d901763e72e97f006f `
 -AccessType account `
 -DisplayName Dr. Arden Rogahn MD `
 -SourceName DataScienceDataset `
 -NativeIdentity dr.arden.ogahn.d `
 -SourceId 2793o32dwd `
 -EntitlementCount 12
```

- Convert the resource to JSON
```powershell
$Accessitemaccountresponse | ConvertTo-JSON
```


[[Back to top]](#) 


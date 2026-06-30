---
id: accessitementitlementresponse
title: Accessitementitlementresponse
pagination_label: Accessitementitlementresponse
sidebar_label: Accessitementitlementresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessitementitlementresponse', 'Accessitementitlementresponse'] 
slug: /tools/sdk/powershell/identityhistory/models/accessitementitlementresponse
tags: ['SDK', 'Software Development Kit', 'Accessitementitlementresponse', 'Accessitementitlementresponse']
---


# Accessitementitlementresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | the access item id | [optional] 
**AccessType** | **String** | the access item type. entitlement in this case | [optional] 
**DisplayName** | **String** | the display name of the identity | [optional] 
**SourceName** | **String** | the name of the source | [optional] 
**Attribute** | **String** | the entitlement attribute | [required]
**Value** | **String** | the associated value | [required]
**Type** | **String** | the type of entitlement | [required]
**Description** | **String** | the description for the entitlment | [optional] 
**SourceId** | **String** | the id of the source | [optional] 
**Standalone** | **Boolean** | indicates whether the entitlement is standalone | [required]
**Privileged** | **Boolean** | indicates whether the entitlement is privileged | [required]
**CloudGoverned** | **Boolean** | indicates whether the entitlement is cloud governed | [required]

## Examples

- Prepare the resource
```powershell
$Accessitementitlementresponse = Initialize-Accessitementitlementresponse  -Id 2c918087763e69d901763e72e97f006f `
 -AccessType entitlement `
 -DisplayName Dr. Arden Rogahn MD `
 -SourceName DataScienceDataset `
 -Attribute groups `
 -Value Upward mobility access `
 -Type ENTITLEMENT `
 -Description Entitlement - Workday/Citizenship access `
 -SourceId 2793o32dwd `
 -Standalone true `
 -Privileged false `
 -CloudGoverned true
```

- Convert the resource to JSON
```powershell
$Accessitementitlementresponse | ConvertTo-JSON
```


[[Back to top]](#) 


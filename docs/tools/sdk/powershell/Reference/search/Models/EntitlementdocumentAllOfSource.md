---
id: entitlementdocument-all-of-source
title: EntitlementdocumentAllOfSource
pagination_label: EntitlementdocumentAllOfSource
sidebar_label: EntitlementdocumentAllOfSource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EntitlementdocumentAllOfSource', 'EntitlementdocumentAllOfSource'] 
slug: /tools/sdk/powershell/search/models/entitlementdocument-all-of-source
tags: ['SDK', 'Software Development Kit', 'EntitlementdocumentAllOfSource', 'EntitlementdocumentAllOfSource']
---


# EntitlementdocumentAllOfSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of entitlement's source. | [optional] 
**Name** | **String** | Display name of entitlement's source. | [optional] 
**Type** | **String** | Type of object. | [optional] 

## Examples

- Prepare the resource
```powershell
$EntitlementdocumentAllOfSource = Initialize-EntitlementdocumentAllOfSource  -Id 2c91808b6e9e6fb8016eec1a2b6f7b5f `
 -Name ODS-HR-Employees `
 -Type SOURCE
```

- Convert the resource to JSON
```powershell
$EntitlementdocumentAllOfSource | ConvertTo-JSON
```


[[Back to top]](#) 


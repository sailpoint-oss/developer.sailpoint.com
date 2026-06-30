---
id: rolecriteriakey
title: Rolecriteriakey
pagination_label: Rolecriteriakey
sidebar_label: Rolecriteriakey
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Rolecriteriakey', 'Rolecriteriakey'] 
slug: /tools/sdk/powershell/roles/models/rolecriteriakey
tags: ['SDK', 'Software Development Kit', 'Rolecriteriakey', 'Rolecriteriakey']
---


# Rolecriteriakey

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**Rolecriteriakeytype**](rolecriteriakeytype) |  | [required]
**Property** | **String** | The name of the attribute or entitlement to which the associated criteria applies. | [required]
**SourceId** | **String** | ID of the Source from which an account attribute or entitlement is drawn. Required if type is ACCOUNT or ENTITLEMENT | [optional] 

## Examples

- Prepare the resource
```powershell
$Rolecriteriakey = Initialize-Rolecriteriakey  -Type null `
 -Property attribute.email `
 -SourceId 2c9180867427f3a301745aec18211519
```

- Convert the resource to JSON
```powershell
$Rolecriteriakey | ConvertTo-JSON
```


[[Back to top]](#) 


---
id: configtype
title: Configtype
pagination_label: Configtype
sidebar_label: Configtype
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Configtype', 'Configtype'] 
slug: /tools/sdk/powershell/workreassignment/models/configtype
tags: ['SDK', 'Software Development Kit', 'Configtype', 'Configtype']
---


# Configtype

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Priority** | **Int32** |  | [optional] 
**InternalName** | [**Configtypeenumcamel**](configtypeenumcamel) |  | [optional] 
**InternalNameCamel** | [**Configtypeenum**](configtypeenum) |  | [optional] 
**DisplayName** | **String** | Human readable display name of the type to be shown on UI | [optional] 
**Description** | **String** | Description of the type of work to be reassigned, displayed by the UI. | [optional] 

## Examples

- Prepare the resource
```powershell
$Configtype = Initialize-Configtype  -Priority 1 `
 -InternalName null `
 -InternalNameCamel null `
 -DisplayName Access Requests `
 -Description Reassign Access Request Work Items for an identity
```

- Convert the resource to JSON
```powershell
$Configtype | ConvertTo-JSON
```


[[Back to top]](#) 


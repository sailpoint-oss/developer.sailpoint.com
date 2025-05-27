---
id: beta-requestable-object-reference
title: RequestableObjectReference
pagination_label: RequestableObjectReference
sidebar_label: RequestableObjectReference
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RequestableObjectReference', 'BetaRequestableObjectReference'] 
slug: /tools/sdk/powershell/beta/models/requestable-object-reference
tags: ['SDK', 'Software Development Kit', 'RequestableObjectReference', 'BetaRequestableObjectReference']
---


# RequestableObjectReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Id of the object. | [optional] 
**Name** | **String** | Name of the object. | [optional] 
**Description** | **String** | Description of the object. | [optional] 
**Type** |  **Enum** [  "ACCESS_PROFILE",    "ROLE",    "ENTITLEMENT" ] | Type of the object. | [optional] 

## Examples

- Prepare the resource
```powershell
$RequestableObjectReference = Initialize-BetaRequestableObjectReference  -Id 2c938083633d259901633d25c68c00fa `
 -Name Object Name `
 -Description Object Description `
 -Type ROLE
```

- Convert the resource to JSON
```powershell
$RequestableObjectReference | ConvertTo-JSON
```


[[Back to top]](#) 


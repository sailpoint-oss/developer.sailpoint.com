---
id: requestable-object-reference
title: RequestableObjectReference
pagination_label: RequestableObjectReference
sidebar_label: RequestableObjectReference
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RequestableObjectReference'] 
slug: /tools/sdk/powershell/v2024/models/requestable-object-reference
tags: ['SDK', 'Software Development Kit', 'RequestableObjectReference']
---


# RequestableObjectReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Id of the object. | [optional] 
**Name** |  Pointer to **String** | Name of the object. | [optional] 
**Description** |  Pointer to **String** | Description of the object. | [optional] 
**Type** |  Pointer to  **Enum** [  "ACCESS_PROFILE",    "ROLE",    "ENTITLEMENT" ] | Type of the object. | [optional] 

## Examples

- Prepare the resource
```powershell
$RequestableObjectReference = Initialize-PSSailpoint.V2024RequestableObjectReference  -Id 2c9180835d2e5168015d32f890ca1581 `
 -Name Applied Research Access `
 -Description Access to research information, lab results, and schematics `
 -Type ROLE
```

- Convert the resource to JSON
```powershell
$RequestableObjectReference | ConvertTo-JSON
```


[[Back to top]](#) 


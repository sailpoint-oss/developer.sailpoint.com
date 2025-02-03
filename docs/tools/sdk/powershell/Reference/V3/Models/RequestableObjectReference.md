---
id: requestable-object-reference
title: RequestableObjectReference
pagination_label: RequestableObjectReference
sidebar_label: RequestableObjectReference
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RequestableObjectReference', 'RequestableObjectReference'] 
slug: /tools/sdk/powershell/v3/models/requestable-object-reference
tags: ['SDK', 'Software Development Kit', 'RequestableObjectReference', 'RequestableObjectReference']
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
$RequestableObjectReference = Initialize-PSSailpoint.V3RequestableObjectReference  -Id 2c9180835d2e5168015d32f890ca1581 `
 -Name Applied Research Access `
 -Description Access to research information, lab results, and schematics `
 -Type ROLE
```

- Convert the resource to JSON
```powershell
$RequestableObjectReference | ConvertTo-JSON
```


[[Back to top]](#) 


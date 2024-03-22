---
id: requestable-object-reference
title: RequestableObjectReference
pagination_label: RequestableObjectReference
sidebar_label: RequestableObjectReference
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'RequestableObjectReference'] 
slug: /tools/sdk/powershell/beta/models/requestable-object-reference
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
$RequestableObjectReference = Initialize-PSSailpointBetaRequestableObjectReference  -Id 2c938083633d259901633d25c68c00fa `
 -Name Object Name `
 -Description Object Description `
 -Type ROLE
```

- Convert the resource to JSON
```powershell
$RequestableObjectReference | ConvertTo-JSON
```


[[Back to top]](#) 


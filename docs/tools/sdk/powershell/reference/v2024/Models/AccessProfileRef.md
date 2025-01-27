---
id: v2024-access-profile-ref
title: AccessProfileRef
pagination_label: AccessProfileRef
sidebar_label: AccessProfileRef
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessProfileRef'] 
slug: /tools/sdk/powershell/v2024/models/access-profile-ref
tags: ['SDK', 'Software Development Kit', 'AccessProfileRef']
---


# AccessProfileRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | ID of the Access Profile | [optional] 
**Type** |  Pointer to  **Enum** [  "ACCESS_PROFILE" ] | Type of requested object. This field must be either left null or set to 'ACCESS_PROFILE' when creating an Access Profile, otherwise a 400 Bad Request error will result. | [optional] 
**Name** |  Pointer to **String** | Human-readable display name of the Access Profile. This field is ignored on input. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessProfileRef = Initialize-PSSailpoint.V2024AccessProfileRef  -Id ff808081751e6e129f1518161919ecca `
 -Type ACCESS_PROFILE `
 -Name Access Profile 2567
```

- Convert the resource to JSON
```powershell
$AccessProfileRef | ConvertTo-JSON
```


[[Back to top]](#) 


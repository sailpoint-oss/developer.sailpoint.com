---
id: access-profile-source-ref
title: AccessProfileSourceRef
pagination_label: AccessProfileSourceRef
sidebar_label: AccessProfileSourceRef
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessProfileSourceRef'] 
slug: /tools/sdk/powershell/v3/models/access-profile-source-ref
tags: ['SDK', 'Software Development Kit', 'AccessProfileSourceRef']
---


# AccessProfileSourceRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | The ID of the Source with with which the Access Profile is associated | [optional] 
**Type** |  Pointer to  **Enum** [  "SOURCE" ] | The type of the Source, will always be SOURCE | [optional] 
**Name** |  Pointer to **String** | The display name of the associated Source | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessProfileSourceRef = Initialize-PSSailpoint.V3AccessProfileSourceRef  -Id 2c91809773dee3610173fdb0b6061ef4 `
 -Type SOURCE `
 -Name ODS-AD-SOURCE
```

- Convert the resource to JSON
```powershell
$AccessProfileSourceRef | ConvertTo-JSON
```


[[Back to top]](#) 


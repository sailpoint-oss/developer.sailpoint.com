---
id: v2025-access-profile-source-ref
title: AccessProfileSourceRef
pagination_label: AccessProfileSourceRef
sidebar_label: AccessProfileSourceRef
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessProfileSourceRef', 'V2025AccessProfileSourceRef'] 
slug: /tools/sdk/powershell/v2025/models/access-profile-source-ref
tags: ['SDK', 'Software Development Kit', 'AccessProfileSourceRef', 'V2025AccessProfileSourceRef']
---


# AccessProfileSourceRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the source the access profile is associated with. | [optional] 
**Type** |  **Enum** [  "SOURCE" ] | Source's DTO type. | [optional] 
**Name** | **String** | Source name. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessProfileSourceRef = Initialize-V2025AccessProfileSourceRef  -Id 2c91809773dee3610173fdb0b6061ef4 `
 -Type SOURCE `
 -Name ODS-AD-SOURCE
```

- Convert the resource to JSON
```powershell
$AccessProfileSourceRef | ConvertTo-JSON
```


[[Back to top]](#) 


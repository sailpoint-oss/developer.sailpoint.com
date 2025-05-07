---
id: v2024-base-access-profile
title: BaseAccessProfile
pagination_label: BaseAccessProfile
sidebar_label: BaseAccessProfile
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'BaseAccessProfile', 'V2024BaseAccessProfile'] 
slug: /tools/sdk/powershell/v2024/models/base-access-profile
tags: ['SDK', 'Software Development Kit', 'BaseAccessProfile', 'V2024BaseAccessProfile']
---


# BaseAccessProfile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Access profile's unique ID. | [optional] 
**Name** | **String** | Access profile's display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$BaseAccessProfile = Initialize-V2024BaseAccessProfile  -Id 2c91809c6faade77016fb4f0b63407ae `
 -Name Admin Access
```

- Convert the resource to JSON
```powershell
$BaseAccessProfile | ConvertTo-JSON
```


[[Back to top]](#) 


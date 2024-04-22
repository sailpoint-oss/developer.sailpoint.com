---
id: base-access-profile
title: BaseAccessProfile
pagination_label: BaseAccessProfile
sidebar_label: BaseAccessProfile
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'BaseAccessProfile'] 
slug: /tools/sdk/powershell/v3/models/base-access-profile
tags: ['SDK', 'Software Development Kit', 'BaseAccessProfile']
---


# BaseAccessProfile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Access profile&#39;s unique ID. | [optional] 
**Name** |  Pointer to **String** | Access profile&#39;s display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$BaseAccessProfile = Initialize-BaseAccessProfile  -Id 2c91809c6faade77016fb4f0b63407ae `
 -Name Admin Access
```

- Convert the resource to JSON
```powershell
$BaseAccessProfile | ConvertTo-JSON
```


[[Back to top]](#) 


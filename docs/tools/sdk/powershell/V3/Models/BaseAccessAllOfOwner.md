---
id: base-access-all-of-owner
title: BaseAccessAllOfOwner
pagination_label: BaseAccessAllOfOwner
sidebar_label: BaseAccessAllOfOwner
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'BaseAccessAllOfOwner'] 
slug: /tools/sdk/powershell/v3/models/base-access-all-of-owner
tags: ['SDK', 'Software Development Kit', 'BaseAccessAllOfOwner']
---


# BaseAccessAllOfOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "IDENTITY" ] | Owner&#39;s DTO type. | [optional] 
**Id** |  Pointer to **String** | Owner&#39;s identity ID. | [optional] 
**Name** |  Pointer to **String** | Owner&#39;s display name. | [optional] 
**Email** |  Pointer to **String** | Owner&#39;s email. | [optional] 

## Examples

- Prepare the resource
```powershell
$BaseAccessAllOfOwner = Initialize-BaseAccessAllOfOwner  -Type IDENTITY `
 -Id 2c9180a46faadee4016fb4e018c20639 `
 -Name Support `
 -Email cloud-support@sailpoint.com
```

- Convert the resource to JSON
```powershell
$BaseAccessAllOfOwner | ConvertTo-JSON
```


[[Back to top]](#) 


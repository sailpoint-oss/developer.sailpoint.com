---
id: tag
title: Tag
pagination_label: Tag
sidebar_label: Tag
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Tag', 'Tag'] 
slug: /tools/sdk/powershell/dataaccesssecurity/models/tag
tags: ['SDK', 'Software Development Kit', 'Tag', 'Tag']
---


# Tag

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **Int64** | The unique identifier for the tag. | [optional] 
**Name** | **String** | The display name or label for the tag. | [optional] 

## Examples

- Prepare the resource
```powershell
$Tag = Initialize-Tag  -Id 101 `
 -Name Confidential
```

- Convert the resource to JSON
```powershell
$Tag | ConvertTo-JSON
```


[[Back to top]](#) 


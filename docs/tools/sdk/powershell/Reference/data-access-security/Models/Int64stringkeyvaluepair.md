---
id: int64stringkeyvaluepair
title: Int64stringkeyvaluepair
pagination_label: Int64stringkeyvaluepair
sidebar_label: Int64stringkeyvaluepair
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Int64stringkeyvaluepair', 'Int64stringkeyvaluepair'] 
slug: /tools/sdk/powershell/dataaccesssecurity/models/int64stringkeyvaluepair
tags: ['SDK', 'Software Development Kit', 'Int64stringkeyvaluepair', 'Int64stringkeyvaluepair']
---


# Int64stringkeyvaluepair

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | **Int64** | The key for the tag or pair. | [optional] 
**Value** | **String** | The value for the tag or pair. | [optional] 

## Examples

- Prepare the resource
```powershell
$Int64stringkeyvaluepair = Initialize-Int64stringkeyvaluepair  -Key 1 `
 -Value Confidential
```

- Convert the resource to JSON
```powershell
$Int64stringkeyvaluepair | ConvertTo-JSON
```


[[Back to top]](#) 


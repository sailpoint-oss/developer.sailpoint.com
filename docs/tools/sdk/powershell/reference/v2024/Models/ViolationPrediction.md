---
id: v2024-violation-prediction
title: ViolationPrediction
pagination_label: ViolationPrediction
sidebar_label: ViolationPrediction
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ViolationPrediction'] 
slug: /tools/sdk/powershell/v2024/models/violation-prediction
tags: ['SDK', 'Software Development Kit', 'ViolationPrediction']
---


# ViolationPrediction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ViolationContexts** |  Pointer to [**[]ViolationContext**](violation-context) | List of Violation Contexts | [optional] 

## Examples

- Prepare the resource
```powershell
$ViolationPrediction = Initialize-PSSailpoint.V2024ViolationPrediction  -ViolationContexts null
```

- Convert the resource to JSON
```powershell
$ViolationPrediction | ConvertTo-JSON
```


[[Back to top]](#) 


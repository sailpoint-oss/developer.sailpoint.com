---
id: beta-violation-prediction
title: ViolationPrediction
pagination_label: ViolationPrediction
sidebar_label: ViolationPrediction
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ViolationPrediction'] 
slug: /tools/sdk/powershell/beta/models/violation-prediction
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
$ViolationPrediction = Initialize-PSSailpoint.BetaViolationPrediction  -ViolationContexts null
```

- Convert the resource to JSON
```powershell
$ViolationPrediction | ConvertTo-JSON
```


[[Back to top]](#) 


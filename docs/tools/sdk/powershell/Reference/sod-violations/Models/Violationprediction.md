---
id: violationprediction
title: Violationprediction
pagination_label: Violationprediction
sidebar_label: Violationprediction
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Violationprediction', 'Violationprediction'] 
slug: /tools/sdk/powershell/sodviolations/models/violationprediction
tags: ['SDK', 'Software Development Kit', 'Violationprediction', 'Violationprediction']
---


# Violationprediction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ViolationContexts** | [**[]Violationcontext**](violationcontext) | List of Violation Contexts | [optional] 

## Examples

- Prepare the resource
```powershell
$Violationprediction = Initialize-Violationprediction  -ViolationContexts null
```

- Convert the resource to JSON
```powershell
$Violationprediction | ConvertTo-JSON
```


[[Back to top]](#) 


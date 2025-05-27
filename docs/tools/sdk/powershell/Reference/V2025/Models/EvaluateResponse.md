---
id: v2025-evaluate-response
title: EvaluateResponse
pagination_label: EvaluateResponse
sidebar_label: EvaluateResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EvaluateResponse', 'V2025EvaluateResponse'] 
slug: /tools/sdk/powershell/v2025/models/evaluate-response
tags: ['SDK', 'Software Development Kit', 'EvaluateResponse', 'V2025EvaluateResponse']
---


# EvaluateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReassignToId** | **String** | The Identity ID which should be the recipient of any work items sent to a specific identity & work type | [optional] 
**LookupTrail** | [**[]LookupStep**](lookup-step) | List of Reassignments found by looking up the next `TargetIdentity` in a ReassignmentConfiguration | [optional] 

## Examples

- Prepare the resource
```powershell
$EvaluateResponse = Initialize-V2025EvaluateResponse  -ReassignToId 869320b6b6f34a169b6178b1a865e66f `
 -LookupTrail null
```

- Convert the resource to JSON
```powershell
$EvaluateResponse | ConvertTo-JSON
```


[[Back to top]](#) 


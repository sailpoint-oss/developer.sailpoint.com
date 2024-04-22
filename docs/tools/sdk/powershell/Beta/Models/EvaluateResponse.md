---
id: evaluate-response
title: EvaluateResponse
pagination_label: EvaluateResponse
sidebar_label: EvaluateResponse
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'EvaluateResponse'] 
slug: /tools/sdk/powershell/beta/models/evaluate-response
tags: ['SDK', 'Software Development Kit', 'EvaluateResponse']
---


# EvaluateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReassignToId** |  Pointer to **String** | The Identity ID which should be the recipient of any work items sent to a specific identity &amp; work type | [optional] 
**LookupTrail** |  Pointer to [**[]LookupStep**](lookup-step) | List of Reassignments found by looking up the next &#x60;TargetIdentity&#x60; in a ReassignmentConfiguration | [optional] 

## Examples

- Prepare the resource
```powershell
$EvaluateResponse = Initialize-BetaEvaluateResponse  -ReassignToId 869320b6b6f34a169b6178b1a865e66f `
 -LookupTrail null
```

- Convert the resource to JSON
```powershell
$EvaluateResponse | ConvertTo-JSON
```


[[Back to top]](#) 


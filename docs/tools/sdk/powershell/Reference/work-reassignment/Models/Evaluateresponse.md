---
id: evaluateresponse
title: Evaluateresponse
pagination_label: Evaluateresponse
sidebar_label: Evaluateresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Evaluateresponse', 'Evaluateresponse'] 
slug: /tools/sdk/powershell/workreassignment/models/evaluateresponse
tags: ['SDK', 'Software Development Kit', 'Evaluateresponse', 'Evaluateresponse']
---


# Evaluateresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReassignToId** | **String** | The Identity ID which should be the recipient of any work items sent to a specific identity & work type | [optional] 
**LookupTrail** | [**[]Lookupstep**](lookupstep) | List of Reassignments found by looking up the next `TargetIdentity` in a ReassignmentConfiguration | [optional] 

## Examples

- Prepare the resource
```powershell
$Evaluateresponse = Initialize-Evaluateresponse  -ReassignToId 869320b6b6f34a169b6178b1a865e66f `
 -LookupTrail null
```

- Convert the resource to JSON
```powershell
$Evaluateresponse | ConvertTo-JSON
```


[[Back to top]](#) 


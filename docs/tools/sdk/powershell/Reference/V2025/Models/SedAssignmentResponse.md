---
id: v2025-sed-assignment-response
title: SedAssignmentResponse
pagination_label: SedAssignmentResponse
sidebar_label: SedAssignmentResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SedAssignmentResponse', 'V2025SedAssignmentResponse'] 
slug: /tools/sdk/powershell/v2025/models/sed-assignment-response
tags: ['SDK', 'Software Development Kit', 'SedAssignmentResponse', 'V2025SedAssignmentResponse']
---


# SedAssignmentResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BatchId** | **String** | BatchId that groups all the ids together | [optional] 

## Examples

- Prepare the resource
```powershell
$SedAssignmentResponse = Initialize-V2025SedAssignmentResponse  -BatchId 016629d1-1d25-463f-97f3-0c6686846650
```

- Convert the resource to JSON
```powershell
$SedAssignmentResponse | ConvertTo-JSON
```


[[Back to top]](#) 


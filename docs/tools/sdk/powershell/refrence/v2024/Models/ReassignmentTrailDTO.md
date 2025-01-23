---
id: reassignment-trail-dto
title: ReassignmentTrailDTO
pagination_label: ReassignmentTrailDTO
sidebar_label: ReassignmentTrailDTO
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ReassignmentTrailDTO'] 
slug: /tools/sdk/powershell/v2024/models/reassignment-trail-dto
tags: ['SDK', 'Software Development Kit', 'ReassignmentTrailDTO']
---


# ReassignmentTrailDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PreviousOwner** |  Pointer to **String** | The ID of previous owner identity. | [optional] 
**NewOwner** |  Pointer to **String** | The ID of new owner identity. | [optional] 
**ReassignmentType** |  Pointer to **String** | The type of reassignment. | [optional] 

## Examples

- Prepare the resource
```powershell
$ReassignmentTrailDTO = Initialize-PSSailpoint.V2024ReassignmentTrailDTO  -PreviousOwner ef38f94347e94562b5bb8424a56397d8 `
 -NewOwner ef38f94347e94562b5bb8424a56397a3 `
 -ReassignmentType AUTOMATIC_REASSIGNMENT
```

- Convert the resource to JSON
```powershell
$ReassignmentTrailDTO | ConvertTo-JSON
```


[[Back to top]](#) 


---
id: reassignmenttraildto
title: Reassignmenttraildto
pagination_label: Reassignmenttraildto
sidebar_label: Reassignmenttraildto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Reassignmenttraildto', 'Reassignmenttraildto'] 
slug: /tools/sdk/powershell/certifications/models/reassignmenttraildto
tags: ['SDK', 'Software Development Kit', 'Reassignmenttraildto', 'Reassignmenttraildto']
---


# Reassignmenttraildto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PreviousOwner** | **String** | The ID of previous owner identity. | [optional] 
**NewOwner** | **String** | The ID of new owner identity. | [optional] 
**ReassignmentType** | **String** | The type of reassignment. | [optional] 

## Examples

- Prepare the resource
```powershell
$Reassignmenttraildto = Initialize-Reassignmenttraildto  -PreviousOwner ef38f94347e94562b5bb8424a56397d8 `
 -NewOwner ef38f94347e94562b5bb8424a56397a3 `
 -ReassignmentType AUTOMATIC_REASSIGNMENT
```

- Convert the resource to JSON
```powershell
$Reassignmenttraildto | ConvertTo-JSON
```


[[Back to top]](#) 


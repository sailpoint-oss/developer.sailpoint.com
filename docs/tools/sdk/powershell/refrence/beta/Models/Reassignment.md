---
id: reassignment
title: Reassignment
pagination_label: Reassignment
sidebar_label: Reassignment
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Reassignment'] 
slug: /tools/sdk/powershell/beta/models/reassignment
tags: ['SDK', 'Software Development Kit', 'Reassignment']
---


# Reassignment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarFrom** |  Pointer to [**CertificationReference**](certification-reference) |  | [optional] 
**Comment** |  Pointer to **String** | Comments from the previous reviewer. | [optional] 

## Examples

- Prepare the resource
```powershell
$Reassignment = Initialize-PSSailpoint.BetaReassignment  -VarFrom null `
 -Comment Please review
```

- Convert the resource to JSON
```powershell
$Reassignment | ConvertTo-JSON
```


[[Back to top]](#) 


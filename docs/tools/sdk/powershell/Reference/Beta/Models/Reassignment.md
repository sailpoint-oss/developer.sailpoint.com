---
id: beta-reassignment
title: Reassignment
pagination_label: Reassignment
sidebar_label: Reassignment
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Reassignment', 'BetaReassignment'] 
slug: /tools/sdk/powershell/beta/models/reassignment
tags: ['SDK', 'Software Development Kit', 'Reassignment', 'BetaReassignment']
---


# Reassignment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarFrom** | [**CertificationReference**](certification-reference) |  | [optional] 
**Comment** | **String** | Comments from the previous reviewer. | [optional] 

## Examples

- Prepare the resource
```powershell
$Reassignment = Initialize-BetaReassignment  -VarFrom null `
 -Comment Please review
```

- Convert the resource to JSON
```powershell
$Reassignment | ConvertTo-JSON
```


[[Back to top]](#) 


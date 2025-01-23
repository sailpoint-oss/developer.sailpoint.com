---
id: reassignment1
title: Reassignment1
pagination_label: Reassignment1
sidebar_label: Reassignment1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Reassignment1'] 
slug: /tools/sdk/powershell/v2024/models/reassignment1
tags: ['SDK', 'Software Development Kit', 'Reassignment1']
---


# Reassignment1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarFrom** |  Pointer to [**CertificationReference1**](certification-reference1) |  | [optional] 
**Comment** |  Pointer to **String** | Comments from the previous reviewer. | [optional] 

## Examples

- Prepare the resource
```powershell
$Reassignment1 = Initialize-PSSailpoint.V2024Reassignment1  -VarFrom null `
 -Comment Please review
```

- Convert the resource to JSON
```powershell
$Reassignment1 | ConvertTo-JSON
```


[[Back to top]](#) 


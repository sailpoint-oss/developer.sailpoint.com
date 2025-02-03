---
id: v2024-reassignment
title: Reassignment
pagination_label: Reassignment
sidebar_label: Reassignment
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Reassignment', 'V2024Reassignment'] 
slug: /tools/sdk/powershell/v2024/models/reassignment
tags: ['SDK', 'Software Development Kit', 'Reassignment', 'V2024Reassignment']
---


# Reassignment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarFrom** | [**CertificationReference**](certification-reference) |  | [optional] 
**Comment** | **String** | The comment entered when the Certification was reassigned | [optional] 

## Examples

- Prepare the resource
```powershell
$Reassignment = Initialize-PSSailpoint.V2024Reassignment  -VarFrom null `
 -Comment Reassigned for a reason
```

- Convert the resource to JSON
```powershell
$Reassignment | ConvertTo-JSON
```


[[Back to top]](#) 


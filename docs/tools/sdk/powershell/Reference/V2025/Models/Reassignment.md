---
id: v2025-reassignment
title: Reassignment
pagination_label: Reassignment
sidebar_label: Reassignment
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Reassignment', 'V2025Reassignment'] 
slug: /tools/sdk/powershell/v2025/models/reassignment
tags: ['SDK', 'Software Development Kit', 'Reassignment', 'V2025Reassignment']
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
$Reassignment = Initialize-V2025Reassignment  -VarFrom null `
 -Comment Reassigned for a reason
```

- Convert the resource to JSON
```powershell
$Reassignment | ConvertTo-JSON
```


[[Back to top]](#) 


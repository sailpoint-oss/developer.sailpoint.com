---
id: v2025-revocability
title: Revocability
pagination_label: Revocability
sidebar_label: Revocability
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Revocability', 'V2025Revocability'] 
slug: /tools/sdk/powershell/v2025/models/revocability
tags: ['SDK', 'Software Development Kit', 'Revocability', 'V2025Revocability']
---


# Revocability

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalSchemes** | [**[]AccessProfileApprovalScheme**](access-profile-approval-scheme) | List describing the steps involved in approving the revocation request. | [optional] 

## Examples

- Prepare the resource
```powershell
$Revocability = Initialize-V2025Revocability  -ApprovalSchemes null
```

- Convert the resource to JSON
```powershell
$Revocability | ConvertTo-JSON
```


[[Back to top]](#) 


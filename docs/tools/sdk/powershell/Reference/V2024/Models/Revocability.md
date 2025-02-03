---
id: v2024-revocability
title: Revocability
pagination_label: Revocability
sidebar_label: Revocability
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Revocability', 'V2024Revocability'] 
slug: /tools/sdk/powershell/v2024/models/revocability
tags: ['SDK', 'Software Development Kit', 'Revocability', 'V2024Revocability']
---


# Revocability

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalSchemes** | [**[]AccessProfileApprovalScheme**](access-profile-approval-scheme) | List describing the steps in approving the revocation request | [optional] 

## Examples

- Prepare the resource
```powershell
$Revocability = Initialize-PSSailpoint.V2024Revocability  -ApprovalSchemes null
```

- Convert the resource to JSON
```powershell
$Revocability | ConvertTo-JSON
```


[[Back to top]](#) 


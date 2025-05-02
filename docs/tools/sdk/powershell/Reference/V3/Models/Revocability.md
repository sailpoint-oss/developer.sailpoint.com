---
id: revocability
title: Revocability
pagination_label: Revocability
sidebar_label: Revocability
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Revocability', 'Revocability'] 
slug: /tools/sdk/powershell/v3/models/revocability
tags: ['SDK', 'Software Development Kit', 'Revocability', 'Revocability']
---


# Revocability

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalSchemes** | [**[]AccessProfileApprovalScheme**](access-profile-approval-scheme) | List describing the steps involved in approving the revocation request. | [optional] 

## Examples

- Prepare the resource
```powershell
$Revocability = Initialize-PSSailpoint.V3Revocability  -ApprovalSchemes null
```

- Convert the resource to JSON
```powershell
$Revocability | ConvertTo-JSON
```


[[Back to top]](#) 


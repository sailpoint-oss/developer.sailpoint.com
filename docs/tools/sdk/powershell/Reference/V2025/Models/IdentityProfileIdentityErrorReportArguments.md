---
id: v2025-identity-profile-identity-error-report-arguments
title: IdentityProfileIdentityErrorReportArguments
pagination_label: IdentityProfileIdentityErrorReportArguments
sidebar_label: IdentityProfileIdentityErrorReportArguments
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityProfileIdentityErrorReportArguments', 'V2025IdentityProfileIdentityErrorReportArguments'] 
slug: /tools/sdk/powershell/v2025/models/identity-profile-identity-error-report-arguments
tags: ['SDK', 'Software Development Kit', 'IdentityProfileIdentityErrorReportArguments', 'V2025IdentityProfileIdentityErrorReportArguments']
---


# IdentityProfileIdentityErrorReportArguments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuthoritativeSource** | **String** | Source ID. | [required]

## Examples

- Prepare the resource
```powershell
$IdentityProfileIdentityErrorReportArguments = Initialize-PSSailpoint.V2025IdentityProfileIdentityErrorReportArguments  -AuthoritativeSource 1234sourceId5678902
```

- Convert the resource to JSON
```powershell
$IdentityProfileIdentityErrorReportArguments | ConvertTo-JSON
```


[[Back to top]](#) 


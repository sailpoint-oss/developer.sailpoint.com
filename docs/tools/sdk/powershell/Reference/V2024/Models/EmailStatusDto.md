---
id: v2024-email-status-dto
title: EmailStatusDto
pagination_label: EmailStatusDto
sidebar_label: EmailStatusDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EmailStatusDto', 'V2024EmailStatusDto'] 
slug: /tools/sdk/powershell/v2024/models/email-status-dto
tags: ['SDK', 'Software Development Kit', 'EmailStatusDto', 'V2024EmailStatusDto']
---


# EmailStatusDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** |  | [optional] 
**Email** | **String** |  | [optional] 
**IsVerifiedByDomain** | **Boolean** |  | [optional] 
**VerificationStatus** |  **Enum** [  "PENDING",    "SUCCESS",    "FAILED" ] |  | [optional] 

## Examples

- Prepare the resource
```powershell
$EmailStatusDto = Initialize-V2024EmailStatusDto  -Id null `
 -Email sender@example.com `
 -IsVerifiedByDomain false `
 -VerificationStatus null
```

- Convert the resource to JSON
```powershell
$EmailStatusDto | ConvertTo-JSON
```


[[Back to top]](#) 


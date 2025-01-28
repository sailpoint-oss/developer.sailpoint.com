---
id: beta-email-status-dto
title: EmailStatusDto
pagination_label: EmailStatusDto
sidebar_label: EmailStatusDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EmailStatusDto', 'BetaEmailStatusDto'] 
slug: /tools/sdk/powershell/beta/models/email-status-dto
tags: ['SDK', 'Software Development Kit', 'EmailStatusDto', 'BetaEmailStatusDto']
---


# EmailStatusDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** |  | [optional] 
**Email** |  Pointer to **String** |  | [optional] 
**IsVerifiedByDomain** |  Pointer to **Boolean** |  | [optional] 
**VerificationStatus** |  Pointer to  **Enum** [  "PENDING",    "SUCCESS",    "FAILED" ] |  | [optional] 

## Examples

- Prepare the resource
```powershell
$EmailStatusDto = Initialize-PSSailpoint.BetaEmailStatusDto  -Id null `
 -Email sender@example.com `
 -IsVerifiedByDomain false `
 -VerificationStatus null
```

- Convert the resource to JSON
```powershell
$EmailStatusDto | ConvertTo-JSON
```


[[Back to top]](#) 


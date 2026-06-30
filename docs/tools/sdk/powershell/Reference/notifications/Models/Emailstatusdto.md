---
id: emailstatusdto
title: Emailstatusdto
pagination_label: Emailstatusdto
sidebar_label: Emailstatusdto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Emailstatusdto', 'Emailstatusdto'] 
slug: /tools/sdk/powershell/notifications/models/emailstatusdto
tags: ['SDK', 'Software Development Kit', 'Emailstatusdto', 'Emailstatusdto']
---


# Emailstatusdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Unique identifier for the verified sender address | [optional] 
**Email** | **String** | The verified sender email address | [optional] 
**IsVerifiedByDomain** | **Boolean** | Whether the sender address is verified by domain | [optional] [default to $false]
**VerificationStatus** |  **Enum** [  "PENDING",    "SUCCESS",    "FAILED",    "NA" ] | The verification status of the sender address | [optional] 
**Region** | **String** | The AWS SES region the sender address is associated with | [optional] 

## Examples

- Prepare the resource
```powershell
$Emailstatusdto = Initialize-Emailstatusdto  -Id null `
 -Email sender@example.com `
 -IsVerifiedByDomain false `
 -VerificationStatus SUCCESS `
 -Region us-east-1
```

- Convert the resource to JSON
```powershell
$Emailstatusdto | ConvertTo-JSON
```


[[Back to top]](#) 


---
id: v2025-send-account-verification-request
title: SendAccountVerificationRequest
pagination_label: SendAccountVerificationRequest
sidebar_label: SendAccountVerificationRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SendAccountVerificationRequest', 'V2025SendAccountVerificationRequest'] 
slug: /tools/sdk/powershell/v2025/models/send-account-verification-request
tags: ['SDK', 'Software Development Kit', 'SendAccountVerificationRequest', 'V2025SendAccountVerificationRequest']
---


# SendAccountVerificationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceName** | **String** | The source name where identity account password should be reset | [optional] 
**Via** |  **Enum** [  "EMAIL_WORK",    "EMAIL_PERSONAL",    "LINK_WORK",    "LINK_PERSONAL" ] | The method to send notification | [required]

## Examples

- Prepare the resource
```powershell
$SendAccountVerificationRequest = Initialize-V2025SendAccountVerificationRequest  -SourceName Active Directory Source `
 -Via EMAIL_WORK
```

- Convert the resource to JSON
```powershell
$SendAccountVerificationRequest | ConvertTo-JSON
```


[[Back to top]](#) 


---
id: beta-okta-verification-request
title: OktaVerificationRequest
pagination_label: OktaVerificationRequest
sidebar_label: OktaVerificationRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'OktaVerificationRequest', 'BetaOktaVerificationRequest'] 
slug: /tools/sdk/powershell/beta/models/okta-verification-request
tags: ['SDK', 'Software Development Kit', 'OktaVerificationRequest', 'BetaOktaVerificationRequest']
---


# OktaVerificationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UserId** |  **String** | User identifier for Verification request. The value of the user's attribute. | [required]

## Examples

- Prepare the resource
```powershell
$OktaVerificationRequest = Initialize-PSSailpoint.BetaOktaVerificationRequest  -UserId example@mail.com
```

- Convert the resource to JSON
```powershell
$OktaVerificationRequest | ConvertTo-JSON
```


[[Back to top]](#) 


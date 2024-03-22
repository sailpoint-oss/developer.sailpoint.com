---
id: okta-verification-request
title: OktaVerificationRequest
pagination_label: OktaVerificationRequest
sidebar_label: OktaVerificationRequest
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'OktaVerificationRequest'] 
slug: /tools/sdk/powershell/beta/models/okta-verification-request
tags: ['SDK', 'Software Development Kit', 'OktaVerificationRequest']
---


# OktaVerificationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UserId** |  **String** | User identifier for Verification request. The value of the user&#39;s attribute. | 

## Examples

- Prepare the resource
```powershell
$OktaVerificationRequest = Initialize-PSSailpointBetaOktaVerificationRequest  -UserId example@mail.com
```

- Convert the resource to JSON
```powershell
$OktaVerificationRequest | ConvertTo-JSON
```


[[Back to top]](#) 


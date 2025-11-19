---
id: v2025-mail-from-attributes
title: MailFromAttributes
pagination_label: MailFromAttributes
sidebar_label: MailFromAttributes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MailFromAttributes', 'V2025MailFromAttributes'] 
slug: /tools/sdk/powershell/v2025/models/mail-from-attributes
tags: ['SDK', 'Software Development Kit', 'MailFromAttributes', 'V2025MailFromAttributes']
---


# MailFromAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** | **String** | The email identity | [optional] 
**MailFromDomain** | **String** | The name of a domain that an email identity uses as a custom MAIL FROM domain | [optional] 
**MxRecord** | **String** | MX record that is required in customer's DNS to allow the domain to receive bounce and complaint notifications that email providers send you | [optional] 
**TxtRecord** | **String** | TXT record that is required in customer's DNS in order to prove that Amazon SES is authorized to send email from your domain | [optional] 
**MailFromDomainStatus** |  **Enum** [  "PENDING",    "SUCCESS",    "FAILED" ] | The current status of the MAIL FROM verification | [optional] 

## Examples

- Prepare the resource
```powershell
$MailFromAttributes = Initialize-V2025MailFromAttributes  -Identity bob.smith@sailpoint.com `
 -MailFromDomain foo.sailpoint.com `
 -MxRecord 10 feedback-smtp.us-east-1.amazonses.com `
 -TxtRecord v=spf1 include:amazonses.com ~all `
 -MailFromDomainStatus PENDING
```

- Convert the resource to JSON
```powershell
$MailFromAttributes | ConvertTo-JSON
```


[[Back to top]](#) 


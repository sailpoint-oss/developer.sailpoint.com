---
id: mail-from-attributes
title: MailFromAttributes
pagination_label: MailFromAttributes
sidebar_label: MailFromAttributes
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'MailFromAttributes'] 
slug: /tools/sdk/powershell/beta/models/mail-from-attributes
tags: ['SDK', 'Software Development Kit', 'MailFromAttributes']
---


# MailFromAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** |  Pointer to **String** | The email identity | [optional] 
**MailFromDomain** |  Pointer to **String** | The name of a domain that an email identity uses as a custom MAIL FROM domain | [optional] 
**MxRecord** |  Pointer to **String** | MX record that is required in customer&#39;s DNS to allow the domain to receive bounce and complaint notifications that email providers send you | [optional] 
**TxtRecord** |  Pointer to **String** | TXT record that is required in customer&#39;s DNS in order to prove that Amazon SES is authorized to send email from your domain | [optional] 
**MailFromDomainStatus** |  Pointer to  **Enum** [  "PENDING",    "SUCCESS",    "FAILED" ] | The current status of the MAIL FROM verification | [optional] 

## Examples

- Prepare the resource
```powershell
$MailFromAttributes = Initialize-PSSailpointBetaMailFromAttributes  -Identity bob.smith@sailpoint.com `
 -MailFromDomain foo.sailpoint.com `
 -MxRecord 10 feedback-smtp.us-east-1.amazonses.com `
 -TxtRecord v&#x3D;spf1 include:amazonses.com ~all `
 -MailFromDomainStatus PENDING
```

- Convert the resource to JSON
```powershell
$MailFromAttributes | ConvertTo-JSON
```


[[Back to top]](#) 


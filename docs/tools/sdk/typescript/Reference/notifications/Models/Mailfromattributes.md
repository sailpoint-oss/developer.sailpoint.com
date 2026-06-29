---
id: v1-mailfromattributes-v1
title: MailfromattributesV1
pagination_label: MailfromattributesV1
sidebar_label: MailfromattributesV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'MailfromattributesV1', 'v1MailfromattributesV1']
slug: /tools/sdk/typescript/notifications/models/mailfromattributes-v1
tags: ['SDK', 'Software Development Kit', 'MailfromattributesV1', 'v1MailfromattributesV1']
---

# MailfromattributesV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | **(optional)** `string` | The email identity | [default to undefined]
**mailFromDomain** | **(optional)** `string` | The name of a domain that an email identity uses as a custom MAIL FROM domain | [default to undefined]
**mxRecord** | **(optional)** `string` | MX record that is required in customer\'s DNS to allow the domain to receive bounce and complaint notifications that email providers send you | [default to undefined]
**txtRecord** | **(optional)** `string` | TXT record that is required in customer\'s DNS in order to prove that Amazon SES is authorized to send email from your domain | [default to undefined]
**mailFromDomainStatus** | **(optional)** `string` | The current status of the MAIL FROM verification | [default to undefined]


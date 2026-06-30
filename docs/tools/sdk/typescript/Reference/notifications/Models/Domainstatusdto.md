---
id: v1-domainstatusdto-v1
title: DomainstatusdtoV1
pagination_label: DomainstatusdtoV1
sidebar_label: DomainstatusdtoV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'DomainstatusdtoV1', 'v1DomainstatusdtoV1']
slug: /tools/sdk/typescript/notifications/models/domainstatusdto-v1
tags: ['SDK', 'Software Development Kit', 'DomainstatusdtoV1', 'v1DomainstatusdtoV1']
---

# DomainstatusdtoV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | New UUID associated with domain to be verified | [default to undefined]
**domain** | **(optional)** `string` | A domain address | [default to undefined]
**dkimEnabled** | **(optional)** `boolean` | DKIM is enabled for this domain | [default to false]
**dkimTokens** | **(optional)** `Array<string>` | DKIM tokens required for authentication | [default to undefined]
**dkimVerificationStatus** | **(optional)** `string` | Status of DKIM authentication | [default to undefined]
**region** | **(optional)** `string` | The AWS SES region the domain is associated with | [default to undefined]


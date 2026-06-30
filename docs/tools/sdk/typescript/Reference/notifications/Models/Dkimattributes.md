---
id: v1-dkimattributes-v1
title: DkimattributesV1
pagination_label: DkimattributesV1
sidebar_label: DkimattributesV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'DkimattributesV1', 'v1DkimattributesV1']
slug: /tools/sdk/typescript/notifications/models/dkimattributes-v1
tags: ['SDK', 'Software Development Kit', 'DkimattributesV1', 'v1DkimattributesV1']
---

# DkimattributesV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | UUID associated with domain to be verified | [default to undefined]
**address** | **(optional)** `string` | The identity or domain address | [default to undefined]
**dkimEnabled** | **(optional)** `boolean` | Whether or not DKIM has been enabled for this domain / identity | [default to false]
**dkimTokens** | **(optional)** `Array<string>` | The tokens to be added to a DNS for verification | [default to undefined]
**dkimVerificationStatus** | **(optional)** `string` | The current status if the domain /identity has been verified. Ie SUCCESS, FAILED, PENDING | [default to undefined]
**region** | **(optional)** `string` | The AWS SES region the domain is associated with | [default to undefined]


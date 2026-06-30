---
id: v1-additionalownerref-v1
title: AdditionalownerrefV1
pagination_label: AdditionalownerrefV1
sidebar_label: AdditionalownerrefV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AdditionalownerrefV1', 'v1AdditionalownerrefV1']
slug: /tools/sdk/typescript/dimensions/models/additionalownerref-v1
tags: ['SDK', 'Software Development Kit', 'AdditionalownerrefV1', 'v1AdditionalownerrefV1']
---

# AdditionalownerrefV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **(optional)** `string` | Type of the additional owner; IDENTITY for an identity, GOVERNANCE_GROUP for a governance group. | [default to undefined]
**id** | **(optional)** `string` | ID of the identity or governance group. | [default to undefined]
**name** | **(optional)** `string` | Display name. It may be left null or omitted on input. If set, it must match the current display name of the identity or governance group, otherwise a 400 Bad Request error may result. | [default to undefined]


---
id: v1-correlatedgovernanceevent-v1
title: CorrelatedgovernanceeventV1
pagination_label: CorrelatedgovernanceeventV1
sidebar_label: CorrelatedgovernanceeventV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'CorrelatedgovernanceeventV1', 'v1CorrelatedgovernanceeventV1']
slug: /tools/sdk/typescript/identity_history/models/correlatedgovernanceevent-v1
tags: ['SDK', 'Software Development Kit', 'CorrelatedgovernanceeventV1', 'v1CorrelatedgovernanceeventV1']
---

# CorrelatedgovernanceeventV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **(optional)** `string` | The name of the governance event, such as the certification name or access request ID. | [default to undefined]
**dateTime** | **(optional)** `string` | The date that the certification or access request was completed. | [default to undefined]
**type** | **(optional)** `string` | The type of governance event. | [default to undefined]
**governanceId** | **(optional)** `string` | The ID of the instance that caused the event - either the certification ID or access request ID. | [default to undefined]
**owners** | **(optional)** `Array<CertifierresponseV1>` | The owners of the governance event (the certifiers or approvers) | [default to undefined]
**reviewers** | **(optional)** `Array<CertifierresponseV1>` | The owners of the governance event (the certifiers or approvers), this field should be preferred over owners | [default to undefined]
**decisionMaker** | **(optional)** `CertifierresponseV1` |  | [default to undefined]


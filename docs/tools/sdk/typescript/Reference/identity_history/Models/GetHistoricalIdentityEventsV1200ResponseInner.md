---
id: v1-get-historical-identity-events-v1200-response-inner-v1
title: GetHistoricalIdentityEventsV1200ResponseInnerV1
pagination_label: GetHistoricalIdentityEventsV1200ResponseInnerV1
sidebar_label: GetHistoricalIdentityEventsV1200ResponseInnerV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'GetHistoricalIdentityEventsV1200ResponseInnerV1', 'v1GetHistoricalIdentityEventsV1200ResponseInnerV1']
slug: /tools/sdk/typescript/identity_history/models/get-historical-identity-events-v1200-response-inner-v1
tags: ['SDK', 'Software Development Kit', 'GetHistoricalIdentityEventsV1200ResponseInnerV1', 'v1GetHistoricalIdentityEventsV1200ResponseInnerV1']
---

# GetHistoricalIdentityEventsV1200ResponseInnerV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificationId** | `string` | the id of the certification item | [default to undefined]
**certificationName** | `string` | the certification item name | [default to undefined]
**signedDate** | **(optional)** `string` | the date ceritification was signed | [default to undefined]
**certifiers** | **(optional)** `Array<CertifierresponseV1>` | this field is deprecated and may go away | [default to undefined]
**reviewers** | **(optional)** `Array<CertifierresponseV1>` | The list of identities who review this certification | [default to undefined]
**signer** | **(optional)** `CertifierresponseV1` |  | [default to undefined]
**eventType** | **(optional)** `string` | the event type | [default to undefined]
**dateTime** | **(optional)** `string` | the date of event | [default to undefined]
**identityId** | **(optional)** `string` | the identity id | [default to undefined]
**accessItem** | `AccessitemassociatedAccessItemV1` |  | [default to undefined]
**governanceEvent** | `CorrelatedgovernanceeventV1` |  | [default to undefined]
**accessItemType** | **(optional)** `string` | the access item type | [default to undefined]
**attributeChanges** | `Array<AttributechangeV1>` |  | [default to undefined]
**accessRequest** | `Accessrequestresponse2V1` |  | [default to undefined]
**account** | `AccountstatuschangedAccountV1` |  | [default to undefined]
**statusChange** | `AccountstatuschangedStatusChangeV1` |  | [default to undefined]


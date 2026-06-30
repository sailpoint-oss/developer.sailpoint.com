---
id: v1-accountrequestdetailsdto-v1
title: AccountrequestdetailsdtoV1
pagination_label: AccountrequestdetailsdtoV1
sidebar_label: AccountrequestdetailsdtoV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AccountrequestdetailsdtoV1', 'v1AccountrequestdetailsdtoV1']
slug: /tools/sdk/typescript/machine_account_creation_request/models/accountrequestdetailsdto-v1
tags: ['SDK', 'Software Development Kit', 'AccountrequestdetailsdtoV1', 'v1AccountrequestdetailsdtoV1']
---

# AccountrequestdetailsdtoV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountRequestId** | **(optional)** `string` | Account request ID. | [default to undefined]
**requestType** | **(optional)** `string` | Type of the account request. | [default to undefined]
**createdAt** | **(optional)** `string` | Machine account creation request creation date and time. | [readonly] [default to undefined]
**completedAt** | **(optional)** `string` | Machine account creation request completion date and time. | [readonly] [default to undefined]
**overallStatus** | **(optional)** `string` | Overall status of the creation request. | [default to undefined]
**requester** | **(optional)** `AccountrequestdetailsdtoRequesterV1` |  | [default to undefined]
**accountRequestPhases** | **(optional)** `Array<AccountrequestphaseV1>` | List of account request phases. | [default to undefined]
**errorDetails** | **(optional)** `string` | Detailed error information. | [default to undefined]


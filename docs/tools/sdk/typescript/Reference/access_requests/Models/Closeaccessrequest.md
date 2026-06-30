---
id: v1-closeaccessrequest-v1
title: CloseaccessrequestV1
pagination_label: CloseaccessrequestV1
sidebar_label: CloseaccessrequestV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'CloseaccessrequestV1', 'v1CloseaccessrequestV1']
slug: /tools/sdk/typescript/access_requests/models/closeaccessrequest-v1
tags: ['SDK', 'Software Development Kit', 'CloseaccessrequestV1', 'v1CloseaccessrequestV1']
---

# CloseaccessrequestV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessRequestIds** | `Array<string>` | Access Request IDs for the requests to be closed. Accepts 1-500 Identity Request IDs per request. | [default to undefined]
**message** | **(optional)** `string` | Reason for closing the access request. Displayed under Warnings in IdentityNow. | [default to 'The IdentityNow Administrator manually closed this request.']
**executionStatus** | **(optional)** `string` | The request\'s provisioning status. Displayed as Stage in IdentityNow. | [default to ExecutionStatusV1_Terminated]
**completionStatus** | **(optional)** `string` | The request\'s overall status. Displayed as Status in IdentityNow. | [default to CompletionStatusV1_Failure]


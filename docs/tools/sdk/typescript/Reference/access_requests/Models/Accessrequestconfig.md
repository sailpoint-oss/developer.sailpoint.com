---
id: v1-accessrequestconfig-v1
title: AccessrequestconfigV1
pagination_label: AccessrequestconfigV1
sidebar_label: AccessrequestconfigV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AccessrequestconfigV1', 'v1AccessrequestconfigV1']
slug: /tools/sdk/typescript/access_requests/models/accessrequestconfig-v1
tags: ['SDK', 'Software Development Kit', 'AccessrequestconfigV1', 'v1AccessrequestconfigV1']
---

# AccessrequestconfigV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approvalsMustBeExternal** | **(optional)** `boolean` | If this is true, approvals must be processed by an external system. Also, if this is true, it blocks Request Center access requests and returns an error for any user who isn\'t an org admin. | [default to false]
**autoApprovalEnabled** | **(optional)** `boolean` | If this is true and the requester and reviewer are the same, the request is automatically approved. | [default to false]
**reauthorizationEnabled** | **(optional)** `boolean` | If this is true, reauthorization will be enforced for appropriately configured access items. Enablement of this feature is currently in a limited state. | [default to false]
**requestOnBehalfOfConfig** | **(optional)** `RequestonbehalfofconfigV1` |  | [default to undefined]
**approvalReminderAndEscalationConfig** | **(optional)** `ApprovalreminderandescalationconfigV1` |  | [default to undefined]
**entitlementRequestConfig** | **(optional)** `EntitlementrequestconfigV1` |  | [default to undefined]


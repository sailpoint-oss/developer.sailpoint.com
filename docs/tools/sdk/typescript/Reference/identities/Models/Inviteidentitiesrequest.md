---
id: v1-inviteidentitiesrequest-v1
title: InviteidentitiesrequestV1
pagination_label: InviteidentitiesrequestV1
sidebar_label: InviteidentitiesrequestV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'InviteidentitiesrequestV1', 'v1InviteidentitiesrequestV1']
slug: /tools/sdk/typescript/identities/models/inviteidentitiesrequest-v1
tags: ['SDK', 'Software Development Kit', 'InviteidentitiesrequestV1', 'v1InviteidentitiesrequestV1']
---

# InviteidentitiesrequestV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | **(optional)** `Array<string>` | The list of Identities IDs to invite - required when \'uninvited\' is false | [default to undefined]
**uninvited** | **(optional)** `boolean` | indicator (optional) to invite all unregistered identities in the system within a limit 1000. This parameter makes sense only when \'ids\' is empty. | [default to false]


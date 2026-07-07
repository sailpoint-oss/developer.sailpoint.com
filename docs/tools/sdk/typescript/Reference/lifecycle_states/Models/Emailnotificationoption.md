---
id: v1-emailnotificationoption-v1
title: EmailnotificationoptionV1
pagination_label: EmailnotificationoptionV1
sidebar_label: EmailnotificationoptionV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'EmailnotificationoptionV1', 'v1EmailnotificationoptionV1']
slug: /tools/sdk/typescript/lifecycle_states/models/emailnotificationoption-v1
tags: ['SDK', 'Software Development Kit', 'EmailnotificationoptionV1', 'v1EmailnotificationoptionV1']
---

# EmailnotificationoptionV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notifyManagers** | **(optional)** `boolean` | If true, then the manager is notified of the lifecycle state change. | [default to false]
**notifyAllAdmins** | **(optional)** `boolean` | If true, then all the admins are notified of the lifecycle state change. | [default to false]
**notifySpecificUsers** | **(optional)** `boolean` | If true, then the users specified in \"emailAddressList\" below are notified of lifecycle state change. | [default to false]
**emailAddressList** | **(optional)** `Array<string>` | List of user email addresses. If \"notifySpecificUsers\" option is true, then these users are notified of lifecycle state change. | [default to undefined]


---
id: v1-createforminstancerequest-v1
title: CreateforminstancerequestV1
pagination_label: CreateforminstancerequestV1
sidebar_label: CreateforminstancerequestV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'CreateforminstancerequestV1', 'v1CreateforminstancerequestV1']
slug: /tools/sdk/typescript/custom_forms/models/createforminstancerequest-v1
tags: ['SDK', 'Software Development Kit', 'CreateforminstancerequestV1', 'v1CreateforminstancerequestV1']
---

# CreateforminstancerequestV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdBy** | `ForminstancecreatedbyV1` |  | [default to undefined]
**expire** | `string` | Expire is required | [default to undefined]
**formDefinitionId** | `string` | FormDefinitionID is the id of the form definition that created this form | [default to undefined]
**formInput** | **(optional)**  | FormInput is an object of form input labels to value | [default to undefined]
**recipients** | `Array<ForminstancerecipientV1>` | Recipients is required | [default to undefined]
**standAloneForm** | **(optional)** `boolean` | StandAloneForm is a boolean flag to indicate if this form should be available for users to complete via the standalone form UI or should this only be available to be completed by as an embedded form | [default to false]
**state** | **(optional)** `string` | State is required, if not present initial state is FormInstanceStateAssigned ASSIGNED FormInstanceStateAssigned IN_PROGRESS FormInstanceStateInProgress SUBMITTED FormInstanceStateSubmitted COMPLETED FormInstanceStateCompleted CANCELLED FormInstanceStateCancelled | [default to undefined]
**ttl** | **(optional)** `number` | TTL an epoch timestamp in seconds, it most be in seconds or dynamodb will ignore it SEE: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/time-to-live-ttl-before-you-start.html | [default to undefined]


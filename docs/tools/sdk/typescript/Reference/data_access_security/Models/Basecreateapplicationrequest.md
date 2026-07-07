---
id: v1-basecreateapplicationrequest-v1
title: BasecreateapplicationrequestV1
pagination_label: BasecreateapplicationrequestV1
sidebar_label: BasecreateapplicationrequestV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'BasecreateapplicationrequestV1', 'v1BasecreateapplicationrequestV1']
slug: /tools/sdk/typescript/data_access_security/models/basecreateapplicationrequest-v1
tags: ['SDK', 'Software Development Kit', 'BasecreateapplicationrequestV1', 'v1BasecreateapplicationrequestV1']
---

# BasecreateapplicationrequestV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicationType** | `ApplicationtypeV1` |  | [default to undefined]
**name** | `string` | The display name of the application. | [default to undefined]
**description** | **(optional)** `string` | A brief description of the application and its purpose. | [default to undefined]
**tags** | **(optional)** `Array<Int64stringkeyvaluepairV1>` | A list of tags to categorize or identify the application. | [default to undefined]
**identityCollectorId** | **(optional)** `number` | The unique identifier for the identity collector associated with this application. | [default to undefined]
**adIdentityCollectorId** | **(optional)** `number` | The unique identifier for the AD identity collector. | [default to undefined]
**nisIdentityCollectorId** | **(optional)** `number` | The unique identifier for the NIS identity collector. | [default to undefined]
**applicationCrawlerSettings** | **(optional)** `ApplicationcrawlersettingsV1` |  | [default to undefined]
**permissionCollectorSettings** | **(optional)** `PermissioncollectorsettingsV1` |  | [default to undefined]
**dataClassificationSettings** | **(optional)** `DataclassificationsettingsV1` |  | [default to undefined]
**activityConfigurationSettings** | **(optional)** `ActivityconfigurationsettingsV1` |  | [default to undefined]
**executeNow** | **(optional)** `boolean` | If true, the application setup will be executed immediately after creation. | [default to false]


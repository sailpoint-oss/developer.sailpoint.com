---
id: v1-applicationitem-v1
title: ApplicationitemV1
pagination_label: ApplicationitemV1
sidebar_label: ApplicationitemV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ApplicationitemV1', 'v1ApplicationitemV1']
slug: /tools/sdk/typescript/data_access_security/models/applicationitem-v1
tags: ['SDK', 'Software Development Kit', 'ApplicationitemV1', 'v1ApplicationitemV1']
---

# ApplicationitemV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `number` | The unique identifier of the application. | [default to undefined]
**name** | **(optional)** `string` | The display name of the application. | [default to undefined]
**description** | **(optional)** `string` | A brief description of the application and its purpose. | [default to undefined]
**type** | **(optional)** `string` | The type of the application. | [default to undefined]
**tags** | **(optional)** `Array<TagV1>` | A list of tags associated with the application. | [default to undefined]
**testConnectionStatus** | **(optional)** `string` | The status of the last connection test performed on the application. | [default to undefined]
**testConnectionDate** | **(optional)** `number` | The timestamp of the last connection test performed on the application, in milliseconds since epoch. | [default to undefined]
**rcClusterId** | **(optional)** `string` | The identifier of the cluster used for crawling resources. | [default to undefined]
**dcClusterId** | **(optional)** `string` | The identifier of the cluster used for data classification. | [default to undefined]
**pcClusterId** | **(optional)** `string` | The identifier of the cluster used for permission collection. | [default to undefined]


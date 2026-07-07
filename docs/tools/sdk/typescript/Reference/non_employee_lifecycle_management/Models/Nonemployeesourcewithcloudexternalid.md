---
id: v1-nonemployeesourcewithcloudexternalid-v1
title: NonemployeesourcewithcloudexternalidV1
pagination_label: NonemployeesourcewithcloudexternalidV1
sidebar_label: NonemployeesourcewithcloudexternalidV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'NonemployeesourcewithcloudexternalidV1', 'v1NonemployeesourcewithcloudexternalidV1']
slug: /tools/sdk/typescript/non_employee_lifecycle_management/models/nonemployeesourcewithcloudexternalid-v1
tags: ['SDK', 'Software Development Kit', 'NonemployeesourcewithcloudexternalidV1', 'v1NonemployeesourcewithcloudexternalidV1']
---

# NonemployeesourcewithcloudexternalidV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Non-Employee source id. | [default to undefined]
**sourceId** | **(optional)** `string` | Source Id associated with this non-employee source. | [default to undefined]
**name** | **(optional)** `string` | Source name associated with this non-employee source. | [default to undefined]
**description** | **(optional)** `string` | Source description associated with this non-employee source. | [default to undefined]
**approvers** | **(optional)** `Array<NonemployeeidentityreferencewithidV1>` | List of approvers | [default to undefined]
**accountManagers** | **(optional)** `Array<NonemployeeidentityreferencewithidV1>` | List of account managers | [default to undefined]
**modified** | **(optional)** `string` | When the request was last modified. | [default to undefined]
**created** | **(optional)** `string` | When the request was created. | [default to undefined]
**cloudExternalId** | **(optional)** `string` | Legacy ID used for sources from the V1 API. This attribute will be removed from a future version of the API and will not be considered a breaking change. No clients should rely on this ID always being present. | [default to undefined]


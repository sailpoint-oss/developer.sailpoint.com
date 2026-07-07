---
id: v1-nonemployeesourcewithnecount-v1
title: NonemployeesourcewithnecountV1
pagination_label: NonemployeesourcewithnecountV1
sidebar_label: NonemployeesourcewithnecountV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'NonemployeesourcewithnecountV1', 'v1NonemployeesourcewithnecountV1']
slug: /tools/sdk/typescript/non_employee_lifecycle_management/models/nonemployeesourcewithnecount-v1
tags: ['SDK', 'Software Development Kit', 'NonemployeesourcewithnecountV1', 'v1NonemployeesourcewithnecountV1']
---

# NonemployeesourcewithnecountV1

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
**nonEmployeeCount** | **(optional)** `number` | Number of non-employee records associated with this source. This value is \'NULL\' by default. To get the non-employee count, you must set the `non-employee-count` flag in your request to \'true\'. | [default to undefined]


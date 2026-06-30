---
id: v1-reportconfigdto-v1
title: ReportconfigdtoV1
pagination_label: ReportconfigdtoV1
sidebar_label: ReportconfigdtoV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ReportconfigdtoV1', 'v1ReportconfigdtoV1']
slug: /tools/sdk/typescript/org_config/models/reportconfigdto-v1
tags: ['SDK', 'Software Development Kit', 'ReportconfigdtoV1', 'v1ReportconfigdtoV1']
---

# ReportconfigdtoV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columnName** | **(optional)** `string` | Name of column in report | [default to undefined]
**required** | **(optional)** `boolean` | If true, column is required in all reports, and this entry is immutable. A 400 error will result from any attempt to modify the column\'s definition. | [default to false]
**included** | **(optional)** `boolean` | If true, column is included in the report. A 400 error will be thrown if an attempt is made to set included=false if required==true. | [default to false]
**order** | **(optional)** `number` | Relative sort order for the column. Columns will be displayed left-to-right in nondecreasing order. | [default to undefined]


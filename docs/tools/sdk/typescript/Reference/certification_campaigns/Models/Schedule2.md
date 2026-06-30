---
id: v1-schedule2-v1
title: Schedule2V1
pagination_label: Schedule2V1
sidebar_label: Schedule2V1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Schedule2V1', 'v1Schedule2V1']
slug: /tools/sdk/typescript/certification_campaigns/models/schedule2-v1
tags: ['SDK', 'Software Development Kit', 'Schedule2V1', 'v1Schedule2V1']
---

# Schedule2V1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | `string` | Determines the overall schedule cadence. In general, all time period fields smaller than the chosen type can be configured. For example, a DAILY schedule can have \'hours\' set, but not \'days\'; a WEEKLY schedule can have both \'hours\' and \'days\' set. | [default to undefined]
**months** | **(optional)** `Schedule2MonthsV1` |  | [default to undefined]
**days** | **(optional)** `Schedule2DaysV1` |  | [default to undefined]
**hours** | `Schedule2HoursV1` |  | [default to undefined]
**expiration** | **(optional)** `string` | Specifies the time after which this schedule will no longer occur. | [default to undefined]
**timeZoneId** | **(optional)** `string` | The time zone to use when running the schedule. For instance, if the schedule is scheduled to run at 1AM, and this field is set to \"CST\", the schedule will run at 1AM CST. | [default to undefined]


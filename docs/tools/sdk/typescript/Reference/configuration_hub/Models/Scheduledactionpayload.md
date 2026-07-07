---
id: v1-scheduledactionpayload-v1
title: ScheduledactionpayloadV1
pagination_label: ScheduledactionpayloadV1
sidebar_label: ScheduledactionpayloadV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ScheduledactionpayloadV1', 'v1ScheduledactionpayloadV1']
slug: /tools/sdk/typescript/configuration_hub/models/scheduledactionpayload-v1
tags: ['SDK', 'Software Development Kit', 'ScheduledactionpayloadV1', 'v1ScheduledactionpayloadV1']
---

# ScheduledactionpayloadV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobType** | `string` | Type of the scheduled job. | [default to undefined]
**startTime** | **(optional)** `string` | The time when this scheduled action should start. Optional. | [default to undefined]
**cronString** | **(optional)** `string` | Cron expression defining the schedule for this action. Optional for repeated events. | [default to undefined]
**timeZoneId** | **(optional)** `string` | Time zone ID for interpreting the cron expression. Optional, will default to current time zone. | [default to undefined]
**content** | `ScheduledactionpayloadContentV1` |  | [default to undefined]


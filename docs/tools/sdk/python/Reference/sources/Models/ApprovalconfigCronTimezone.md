---
id: approvalconfig-cron-timezone
title: ApprovalconfigCronTimezone
pagination_label: ApprovalconfigCronTimezone
sidebar_label: ApprovalconfigCronTimezone
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ApprovalconfigCronTimezone', 'ApprovalconfigCronTimezone'] 
slug: /tools/sdk/python/sources/models/approvalconfig-cron-timezone
tags: ['SDK', 'Software Development Kit', 'ApprovalconfigCronTimezone', 'ApprovalconfigCronTimezone']
---

# ApprovalconfigCronTimezone

Timezone configuration for cron schedules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Timezone location for cron schedules. | [optional] 
**offset** | **str** | Timezone offset for cron schedules. | [optional] 
}

## Example

```python
from sailpoint.sources.models.approvalconfig_cron_timezone import ApprovalconfigCronTimezone

approvalconfig_cron_timezone = ApprovalconfigCronTimezone(
location='America/New_York',
offset=''
)

```
[[Back to top]](#) 


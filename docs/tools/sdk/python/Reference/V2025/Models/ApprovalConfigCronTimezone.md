---
id: v2025-approval-config-cron-timezone
title: ApprovalConfigCronTimezone
pagination_label: ApprovalConfigCronTimezone
sidebar_label: ApprovalConfigCronTimezone
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ApprovalConfigCronTimezone', 'V2025ApprovalConfigCronTimezone'] 
slug: /tools/sdk/python/v2025/models/approval-config-cron-timezone
tags: ['SDK', 'Software Development Kit', 'ApprovalConfigCronTimezone', 'V2025ApprovalConfigCronTimezone']
---

# ApprovalConfigCronTimezone

Timezone configuration for cron schedules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Timezone location for cron schedules. | [optional] 
**offset** | **str** | Timezone offset for cron schedules. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.approval_config_cron_timezone import ApprovalConfigCronTimezone

approval_config_cron_timezone = ApprovalConfigCronTimezone(
location='America/New_York',
offset=''
)

```
[[Back to top]](#) 


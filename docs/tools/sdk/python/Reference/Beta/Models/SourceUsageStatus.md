---
id: beta-source-usage-status
title: SourceUsageStatus
pagination_label: SourceUsageStatus
sidebar_label: SourceUsageStatus
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SourceUsageStatus', 'BetaSourceUsageStatus'] 
slug: /tools/sdk/python/beta/models/source-usage-status
tags: ['SDK', 'Software Development Kit', 'SourceUsageStatus', 'BetaSourceUsageStatus']
---

# SourceUsageStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** |  **Enum** [  'COMPLETE',    'INCOMPLETE' ] | Source Usage Status. Acceptable values are:   - COMPLETE       - This status means that an activity data source has been setup and usage insights are available for the source.   - INCOMPLETE       - This status means that an activity data source has not been setup and usage insights are not available for the source. | [optional] 
}

## Example

```python
from sailpoint.beta.models.source_usage_status import SourceUsageStatus

source_usage_status = SourceUsageStatus(
status='COMPLETE'
)

```
[[Back to top]](#) 


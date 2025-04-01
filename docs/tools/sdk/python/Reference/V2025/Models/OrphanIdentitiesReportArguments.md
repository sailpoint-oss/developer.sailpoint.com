---
id: v2025-orphan-identities-report-arguments
title: OrphanIdentitiesReportArguments
pagination_label: OrphanIdentitiesReportArguments
sidebar_label: OrphanIdentitiesReportArguments
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'OrphanIdentitiesReportArguments', 'V2025OrphanIdentitiesReportArguments'] 
slug: /tools/sdk/python/v2025/models/orphan-identities-report-arguments
tags: ['SDK', 'Software Development Kit', 'OrphanIdentitiesReportArguments', 'V2025OrphanIdentitiesReportArguments']
---

# OrphanIdentitiesReportArguments

Arguments for Orphan Identities report (ORPHAN_IDENTITIES)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**selected_formats** | **[]str** | Output report file formats. These are formats for calling GET endpoint as query parameter 'fileFormat'.  In case report won't have this argument there will be ['CSV', 'PDF'] as default. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.orphan_identities_report_arguments import OrphanIdentitiesReportArguments

orphan_identities_report_arguments = OrphanIdentitiesReportArguments(
selected_formats=[CSV]
)

```
[[Back to top]](#) 


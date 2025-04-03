---
id: v2024-manual-discover-applications
title: ManualDiscoverApplications
pagination_label: ManualDiscoverApplications
sidebar_label: ManualDiscoverApplications
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ManualDiscoverApplications', 'V2024ManualDiscoverApplications'] 
slug: /tools/sdk/python/v2024/models/manual-discover-applications
tags: ['SDK', 'Software Development Kit', 'ManualDiscoverApplications', 'V2024ManualDiscoverApplications']
---

# ManualDiscoverApplications


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file** | **bytearray** | The CSV file to upload containing `application_name` and `description` columns. Each row represents an application to be discovered. | [required]
}

## Example

```python
from sailpoint.v2024.models.manual_discover_applications import ManualDiscoverApplications

manual_discover_applications = ManualDiscoverApplications(
file='application_name,description
"Sample App","This is a sample description for Sample App."
"Another App","Description for Another App."'
)

```
[[Back to top]](#) 


---
id: sourceusagestatus
title: Sourceusagestatus
pagination_label: Sourceusagestatus
sidebar_label: Sourceusagestatus
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Sourceusagestatus', 'Sourceusagestatus'] 
slug: /tools/sdk/python/source-usages/models/sourceusagestatus
tags: ['SDK', 'Software Development Kit', 'Sourceusagestatus', 'Sourceusagestatus']
---

# Sourceusagestatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** |  **Enum** [  'COMPLETE',    'INCOMPLETE' ] | Source Usage Status. Acceptable values are:   - COMPLETE       - This status means that an activity data source has been setup and usage insights are available for the source.   - INCOMPLETE       - This status means that an activity data source has not been setup and usage insights are not available for the source. | [optional] 
}

## Example

```python
from sailpoint.source_usages.models.sourceusagestatus import Sourceusagestatus

sourceusagestatus = Sourceusagestatus(
status='COMPLETE'
)

```
[[Back to top]](#) 


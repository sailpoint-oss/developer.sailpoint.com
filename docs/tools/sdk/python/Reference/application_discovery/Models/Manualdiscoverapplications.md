---
id: manualdiscoverapplications
title: Manualdiscoverapplications
pagination_label: Manualdiscoverapplications
sidebar_label: Manualdiscoverapplications
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Manualdiscoverapplications', 'Manualdiscoverapplications'] 
slug: /tools/sdk/python/application-discovery/models/manualdiscoverapplications
tags: ['SDK', 'Software Development Kit', 'Manualdiscoverapplications', 'Manualdiscoverapplications']
---

# Manualdiscoverapplications


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file** | **bytearray** | The CSV file to upload containing `application_name` and `description` columns. Each row represents an application to be discovered. | [required]
}

## Example

```python
from sailpoint.application_discovery.models.manualdiscoverapplications import Manualdiscoverapplications

manualdiscoverapplications = Manualdiscoverapplications(
file='[B@ef1695a'
)

```
[[Back to top]](#) 


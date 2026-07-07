---
id: backupoptions
title: Backupoptions
pagination_label: Backupoptions
sidebar_label: Backupoptions
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Backupoptions', 'Backupoptions'] 
slug: /tools/sdk/python/configuration-hub/models/backupoptions
tags: ['SDK', 'Software Development Kit', 'Backupoptions', 'Backupoptions']
---

# Backupoptions

Backup options control what will be included in the backup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include_types** | **[]str** | Object type names to be included in a Configuration Hub backup command. | [optional] 
**object_options** | [**map[string]Objectexportimportnames**](objectexportimportnames) | Additional options targeting specific objects related to each item in the includeTypes field. | [optional] 
}

## Example

```python
from sailpoint.configuration_hub.models.backupoptions import Backupoptions

backupoptions = Backupoptions(
include_types=[
                    'TRIGGER_SUBSCRIPTION'
                    ],
object_options={"TRIGGER_SUBSCRIPTION":{"includedNames":["Trigger Subscription name"]}}
)

```
[[Back to top]](#) 


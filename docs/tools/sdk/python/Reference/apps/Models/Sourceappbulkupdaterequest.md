---
id: sourceappbulkupdaterequest
title: Sourceappbulkupdaterequest
pagination_label: Sourceappbulkupdaterequest
sidebar_label: Sourceappbulkupdaterequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Sourceappbulkupdaterequest', 'Sourceappbulkupdaterequest'] 
slug: /tools/sdk/python/apps/models/sourceappbulkupdaterequest
tags: ['SDK', 'Software Development Kit', 'Sourceappbulkupdaterequest', 'Sourceappbulkupdaterequest']
---

# Sourceappbulkupdaterequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_ids** | **[]str** | List of source app ids to update | [required]
**json_patch** | [**[]Jsonpatchoperation**](jsonpatchoperation) | The JSONPatch payload used to update the source app. | [required]
}

## Example

```python
from sailpoint.apps.models.sourceappbulkupdaterequest import Sourceappbulkupdaterequest

sourceappbulkupdaterequest = Sourceappbulkupdaterequest(
app_ids=["2c91808a7624751a01762f19d665220d","2c91808a7624751a01762f19d67c220e","2c91808a7624751a01762f19d692220f"],
json_patch=[{"op":"replace","path":"/enabled","value":false},{"op":"replace","path":"/matchAllAccounts","value":false}]
)

```
[[Back to top]](#) 


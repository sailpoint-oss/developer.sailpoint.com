---
id: v2024-update-detail
title: UpdateDetail
pagination_label: UpdateDetail
sidebar_label: UpdateDetail
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'UpdateDetail', 'V2024UpdateDetail'] 
slug: /tools/sdk/python/v2024/models/update-detail
tags: ['SDK', 'Software Development Kit', 'UpdateDetail', 'V2024UpdateDetail']
---

# UpdateDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | The detailed message for an update. Typically the relevent error message when status is error. | [optional] 
**script_name** | **str** | The connector script name | [optional] 
**updated_files** | **[]str** | The list of updated files supported by the connector | [optional] 
**status** |  **Enum** [  'ERROR',    'UPDATED',    'UNCHANGED',    'SKIPPED' ] | The connector update status | [optional] 
}

## Example

```python
from sailpoint.v2024.models.update_detail import UpdateDetail

update_detail = UpdateDetail(
message='unsupported xsd version, please ensure latest xsd version http://www.sailpoint.com/xsd/sailpoint_form_2_0.xsd is used for source config',
script_name='servicenow',
updated_files=[pod/org/connectorFiles/testconnector/test1.jar],
status='ERROR'
)

```
[[Back to top]](#) 


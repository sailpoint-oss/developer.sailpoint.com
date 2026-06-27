---
id: updatedetail
title: Updatedetail
pagination_label: Updatedetail
sidebar_label: Updatedetail
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Updatedetail', 'Updatedetail'] 
slug: /tools/sdk/python/connectors/models/updatedetail
tags: ['SDK', 'Software Development Kit', 'Updatedetail', 'Updatedetail']
---

# Updatedetail


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
from sailpoint.connectors.models.updatedetail import Updatedetail

updatedetail = Updatedetail(
message='unsupported xsd version, please ensure latest xsd version http://www.sailpoint.com/xsd/sailpoint_form_2_0.xsd is used for source config',
script_name='servicenow',
updated_files=["pod/org/connectorFiles/testconnector/test1.jar"],
status='ERROR'
)

```
[[Back to top]](#) 


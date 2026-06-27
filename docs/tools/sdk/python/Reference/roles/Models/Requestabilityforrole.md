---
id: requestabilityforrole
title: Requestabilityforrole
pagination_label: Requestabilityforrole
sidebar_label: Requestabilityforrole
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Requestabilityforrole', 'Requestabilityforrole'] 
slug: /tools/sdk/python/roles/models/requestabilityforrole
tags: ['SDK', 'Software Development Kit', 'Requestabilityforrole', 'Requestabilityforrole']
---

# Requestabilityforrole


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments_required** | **bool** | Whether the requester of the containing object must provide comments justifying the request | [optional] [default to False]
**denial_comments_required** | **bool** | Whether an approver must provide comments when denying the request | [optional] [default to False]
**reauthorization_required** | **bool** | Indicates whether reauthorization is required for the request. | [optional] [default to False]
**require_end_date** | **bool** | Indicates whether the requester of the containing object must provide access end date. | [optional] [default to False]
**max_permitted_access_duration** | [**Accessduration**](accessduration) |  | [optional] 
**approval_schemes** | [**[]Approvalschemeforrole**](approvalschemeforrole) | List describing the steps in approving the request | [optional] 
**dimension_schema** | [**Dimensionschema**](dimensionschema) |  | [optional] 
**form_definition_id** | **str** | The ID of the form definition used for the access request. If specified, the form is presented to the requester during the access request process. | [optional] 
}

## Example

```python
from sailpoint.roles.models.requestabilityforrole import Requestabilityforrole

requestabilityforrole = Requestabilityforrole(
comments_required=True,
denial_comments_required=True,
reauthorization_required=True,
require_end_date=True,
max_permitted_access_duration=sailpoint.roles.models.accessduration.accessduration(
                    value = 6, 
                    time_unit = 'MONTHS', ),
approval_schemes=[
                    sailpoint.roles.models.approvalschemeforrole.approvalschemeforrole(
                        approver_type = 'GOVERNANCE_GROUP', 
                        approver_id = '46c79819-a69f-49a2-becb-12c971ae66c6', )
                    ],
dimension_schema=sailpoint.roles.models.dimensionschema.dimensionschema(
                    dimension_attributes = [
                        sailpoint.roles.models.dimensionattribute.dimensionattribute(
                            name = 'city', 
                            display_name = 'City', 
                            derived = True, )
                        ], ),
form_definition_id='78258e80-e9e2-4e1a-a11f-ce0b7c62f25d'
)

```
[[Back to top]](#) 


---
id: v2024-create-form-instance-request
title: CreateFormInstanceRequest
pagination_label: CreateFormInstanceRequest
sidebar_label: CreateFormInstanceRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CreateFormInstanceRequest', 'V2024CreateFormInstanceRequest'] 
slug: /tools/sdk/python/v2024/models/create-form-instance-request
tags: ['SDK', 'Software Development Kit', 'CreateFormInstanceRequest', 'V2024CreateFormInstanceRequest']
---

# CreateFormInstanceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_by** | [**FormInstanceCreatedBy**](form-instance-created-by) |  | [required]
**expire** | **str** | Expire is required | [required]
**form_definition_id** | **str** | FormDefinitionID is the id of the form definition that created this form | [required]
**form_input** | **map[string]object** | FormInput is an object of form input labels to value | [optional] 
**recipients** | [**[]FormInstanceRecipient**](form-instance-recipient) | Recipients is required | [required]
**stand_alone_form** | **bool** | StandAloneForm is a boolean flag to indicate if this form should be available for users to complete via the standalone form UI or should this only be available to be completed by as an embedded form | [optional] [default to False]
**state** |  **Enum** [  'ASSIGNED',    'IN_PROGRESS',    'SUBMITTED',    'COMPLETED',    'CANCELLED' ] | State is required, if not present initial state is FormInstanceStateAssigned ASSIGNED FormInstanceStateAssigned IN_PROGRESS FormInstanceStateInProgress SUBMITTED FormInstanceStateSubmitted COMPLETED FormInstanceStateCompleted CANCELLED FormInstanceStateCancelled | [optional] 
**ttl** | **int** | TTL an epoch timestamp in seconds, it most be in seconds or dynamodb will ignore it SEE: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/time-to-live-ttl-before-you-start.html | [optional] 
}

## Example

```python
from sailpoint.v2024.models.create_form_instance_request import CreateFormInstanceRequest

create_form_instance_request = CreateFormInstanceRequest(
created_by=sailpoint.v2024.models.form_instance_created_by.FormInstanceCreatedBy(
                    id = '00000000-0000-0000-0000-000000000000', 
                    type = 'WORKFLOW_EXECUTION', ),
expire='2023-08-12T20:14:57.74486Z',
form_definition_id='00000000-0000-0000-0000-000000000000',
form_input={input1=Sales},
recipients=[
                    sailpoint.v2024.models.form_instance_recipient.FormInstanceRecipient(
                        id = '00000000-0000-0000-0000-000000000000', 
                        type = 'IDENTITY', )
                    ],
stand_alone_form=False,
state='ASSIGNED',
ttl=1571827560
)

```
[[Back to top]](#) 


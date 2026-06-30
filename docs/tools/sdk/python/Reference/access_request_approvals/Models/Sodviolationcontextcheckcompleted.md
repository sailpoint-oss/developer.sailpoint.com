---
id: sodviolationcontextcheckcompleted
title: Sodviolationcontextcheckcompleted
pagination_label: Sodviolationcontextcheckcompleted
sidebar_label: Sodviolationcontextcheckcompleted
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Sodviolationcontextcheckcompleted', 'Sodviolationcontextcheckcompleted'] 
slug: /tools/sdk/python/access-request-approvals/models/sodviolationcontextcheckcompleted
tags: ['SDK', 'Software Development Kit', 'Sodviolationcontextcheckcompleted', 'Sodviolationcontextcheckcompleted']
---

# Sodviolationcontextcheckcompleted

An object referencing a completed SOD violation check

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** |  **Enum** [  'SUCCESS',    'ERROR' ] | The status of SOD violation check | [optional] 
**uuid** | **str** | The id of the Violation check event | [optional] 
**violation_check_result** | [**Sodviolationcheckresult**](sodviolationcheckresult) |  | [optional] 
}

## Example

```python
from sailpoint.access_request_approvals.models.sodviolationcontextcheckcompleted import Sodviolationcontextcheckcompleted

sodviolationcontextcheckcompleted = Sodviolationcontextcheckcompleted(
state='SUCCESS',
uuid='f73d16e9-a038-46c5-b217-1246e15fdbdd',
violation_check_result=sailpoint.access_request_approvals.models.sod_violation_check_result.Sod Violation Check Result(
                    message = sailpoint.access_request_approvals.models.error_message_dto.Error Message Dto(
                        locale = 'en-US', 
                        locale_origin = 'DEFAULT', 
                        text = 'The request was syntactically correct but its content is semantically invalid.', ), 
                    client_metadata = {"requestedAppName":"test-app","requestedAppId":"2c91808f7892918f0178b78da4a305a1"}, 
                    violation_contexts = [
                        sailpoint.access_request_approvals.models.sod_violation_context.Sod Violation Context(
                            policy = sailpoint.access_request_approvals.models.sod_policy_dto.Sod Policy Dto(
                                type = 'SOD_POLICY', 
                                id = '0f11f2a4-7c94-4bf3-a2bd-742580fe3bde', 
                                name = 'Business SOD Policy', ), 
                            conflicting_access_criteria = sailpoint.access_request_approvals.models.sodviolationcontext_conflicting_access_criteria.sodviolationcontext_conflictingAccessCriteria(
                                left_criteria = sailpoint.access_request_approvals.models.sodviolationcontext_conflicting_access_criteria_left_criteria.sodviolationcontext_conflictingAccessCriteria_leftCriteria(
                                    criteria_list = [
                                        sailpoint.access_request_approvals.models.sod_exempt_criteria.Sod Exempt Criteria(
                                            existing = True, 
                                            type = 'IDENTITY', 
                                            id = '2c918085771e9d3301773b3cb66f6398', 
                                            name = 'My HR Entitlement', )
                                        ], ), 
                                right_criteria = sailpoint.access_request_approvals.models.sodviolationcontext_conflicting_access_criteria_left_criteria.sodviolationcontext_conflictingAccessCriteria_leftCriteria(), ), )
                        ], 
                    violated_policies = [
                        sailpoint.access_request_approvals.models.sod_policy_dto.Sod Policy Dto(
                            id = '0f11f2a4-7c94-4bf3-a2bd-742580fe3bde', 
                            name = 'Business SOD Policy', )
                        ], )
)

```
[[Back to top]](#) 


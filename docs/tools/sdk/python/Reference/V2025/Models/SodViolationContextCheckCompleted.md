---
id: v2025-sod-violation-context-check-completed
title: SodViolationContextCheckCompleted
pagination_label: SodViolationContextCheckCompleted
sidebar_label: SodViolationContextCheckCompleted
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SodViolationContextCheckCompleted', 'V2025SodViolationContextCheckCompleted'] 
slug: /tools/sdk/python/v2025/models/sod-violation-context-check-completed
tags: ['SDK', 'Software Development Kit', 'SodViolationContextCheckCompleted', 'V2025SodViolationContextCheckCompleted']
---

# SodViolationContextCheckCompleted

An object referencing a completed SOD violation check

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** |  **Enum** [  'SUCCESS',    'ERROR' ] | The status of SOD violation check | [optional] 
**uuid** | **str** | The id of the Violation check event | [optional] 
**violation_check_result** | [**SodViolationCheckResult**](sod-violation-check-result) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.sod_violation_context_check_completed import SodViolationContextCheckCompleted

sod_violation_context_check_completed = SodViolationContextCheckCompleted(
state='SUCCESS',
uuid='f73d16e9-a038-46c5-b217-1246e15fdbdd',
violation_check_result=sailpoint.v2025.models.sod_violation_check_result.Sod Violation Check Result(
                    message = sailpoint.v2025.models.error_message_dto.Error Message Dto(
                        locale = 'en-US', 
                        locale_origin = 'DEFAULT', 
                        text = 'The request was syntactically correct but its content is semantically invalid.', ), 
                    client_metadata = {requestedAppName=test-app, requestedAppId=2c91808f7892918f0178b78da4a305a1}, 
                    violation_contexts = [
                        sailpoint.v2025.models.sod_violation_context.Sod Violation Context(
                            policy = sailpoint.v2025.models.sod_policy_dto.Sod Policy Dto(
                                type = 'SOD_POLICY', 
                                id = '0f11f2a4-7c94-4bf3-a2bd-742580fe3bde', 
                                name = 'Business SOD Policy', ), 
                            conflicting_access_criteria = sailpoint.v2025.models.sod_violation_context_conflicting_access_criteria.SodViolationContext_conflictingAccessCriteria(
                                left_criteria = sailpoint.v2025.models.sod_violation_context_conflicting_access_criteria_left_criteria.SodViolationContext_conflictingAccessCriteria_leftCriteria(
                                    criteria_list = [
                                        sailpoint.v2025.models.sod_exempt_criteria.Sod Exempt Criteria(
                                            existing = True, 
                                            type = 'IDENTITY', 
                                            id = '2c918085771e9d3301773b3cb66f6398', 
                                            name = 'My HR Entitlement', )
                                        ], ), 
                                right_criteria = sailpoint.v2025.models.sod_violation_context_conflicting_access_criteria_left_criteria.SodViolationContext_conflictingAccessCriteria_leftCriteria(), ), )
                        ], 
                    violated_policies = [
                        sailpoint.v2025.models.sod_policy_dto.Sod Policy Dto(
                            id = '0f11f2a4-7c94-4bf3-a2bd-742580fe3bde', 
                            name = 'Business SOD Policy', )
                        ], )
)

```
[[Back to top]](#) 


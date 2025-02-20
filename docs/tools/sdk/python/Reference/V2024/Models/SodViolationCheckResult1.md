---
id: v2024-sod-violation-check-result1
title: SodViolationCheckResult1
pagination_label: SodViolationCheckResult1
sidebar_label: SodViolationCheckResult1
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SodViolationCheckResult1', 'V2024SodViolationCheckResult1'] 
slug: /tools/sdk/python/v2024/models/sod-violation-check-result1
tags: ['SDK', 'Software Development Kit', 'SodViolationCheckResult1', 'V2024SodViolationCheckResult1']
---

# SodViolationCheckResult1

The inner object representing the completed SOD Violation check

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | [**ErrorMessageDto1**](error-message-dto1) |  | [optional] 
**client_metadata** | **map[string]str** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on completion of the violation check. | [optional] 
**violation_contexts** | [**[]SodViolationContext1**](sod-violation-context1) |  | [optional] 
**violated_policies** | [**[]SodPolicyDto**](sod-policy-dto) | A list of the SOD policies that were violated. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.sod_violation_check_result1 import SodViolationCheckResult1

sod_violation_check_result1 = SodViolationCheckResult1(
message=sailpoint.v2024.models.error_message_dto_1.ErrorMessageDto_1(
                    locale = 'en-US', 
                    locale_origin = 'DEFAULT', 
                    text = 'The request was syntactically correct but its content is semantically invalid.', ),
client_metadata={requestedAppName=test-app, requestedAppId=2c91808f7892918f0178b78da4a305a1},
violation_contexts=[
                    sailpoint.v2024.models.sod_violation_context_1.SodViolationContext_1(
                        policy = sailpoint.v2024.models.sod_policy_dto.SodPolicyDto(
                            type = 'SOD_POLICY', 
                            id = '0f11f2a4-7c94-4bf3-a2bd-742580fe3bde', 
                            name = 'Business SOD Policy', ), 
                        conflicting_access_criteria = sailpoint.v2024.models.sod_violation_context_1_conflicting_access_criteria.SodViolationContext_1_conflictingAccessCriteria(
                            left_criteria = sailpoint.v2024.models.sod_violation_context_1_conflicting_access_criteria_left_criteria.SodViolationContext_1_conflictingAccessCriteria_leftCriteria(
                                criteria_list = [
                                    sailpoint.v2024.models.sod_exempt_criteria_1.SodExemptCriteria_1(
                                        existing = True, 
                                        type = 'IDENTITY', 
                                        id = '2c918085771e9d3301773b3cb66f6398', 
                                        name = 'My HR Entitlement', )
                                    ], ), 
                            right_criteria = sailpoint.v2024.models.sod_violation_context_1_conflicting_access_criteria_left_criteria.SodViolationContext_1_conflictingAccessCriteria_leftCriteria(), ), )
                    ],
violated_policies=[
                    sailpoint.v2024.models.sod_policy_dto.SodPolicyDto(
                        type = 'SOD_POLICY', 
                        id = '0f11f2a4-7c94-4bf3-a2bd-742580fe3bde', 
                        name = 'Business SOD Policy', )
                    ]
)

```
[[Back to top]](#) 


---
id: beta-requested-item-status-sod-violation-context
title: RequestedItemStatusSodViolationContext
pagination_label: RequestedItemStatusSodViolationContext
sidebar_label: RequestedItemStatusSodViolationContext
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RequestedItemStatusSodViolationContext', 'BetaRequestedItemStatusSodViolationContext'] 
slug: /tools/sdk/python/beta/models/requested-item-status-sod-violation-context
tags: ['SDK', 'Software Development Kit', 'RequestedItemStatusSodViolationContext', 'BetaRequestedItemStatusSodViolationContext']
---

# RequestedItemStatusSodViolationContext


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** |  **Enum** [  'SUCCESS',    'ERROR' ] | The status of SOD violation check | [optional] 
**uuid** | **str** | The id of the Violation check event | [optional] 
**violation_check_result** | [**SodViolationCheckResult**](sod-violation-check-result) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.requested_item_status_sod_violation_context import RequestedItemStatusSodViolationContext

requested_item_status_sod_violation_context = RequestedItemStatusSodViolationContext(
state='SUCCESS',
uuid='f73d16e9-a038-46c5-b217-1246e15fdbdd',
violation_check_result=sailpoint.beta.models.sod_violation_check_result.SodViolationCheckResult(
                    message = sailpoint.beta.models.error_message_dto.ErrorMessageDto(
                        locale = 'en-US', 
                        locale_origin = 'DEFAULT', 
                        text = 'The request was syntactically correct but its content is semantically invalid.', ), 
                    client_metadata = {requestedAppName=test-app, requestedAppId=2c91808f7892918f0178b78da4a305a1}, 
                    violation_contexts = [
                        sailpoint.beta.models.sod_violation_context.SodViolationContext(
                            policy = sailpoint.beta.models.sod_policy_dto.SodPolicyDto(
                                type = 'SOD_POLICY', 
                                id = '0f11f2a4-7c94-4bf3-a2bd-742580fe3bde', 
                                name = 'Business SOD Policy', ), 
                            conflicting_access_criteria = sailpoint.beta.models.sod_violation_context_conflicting_access_criteria.SodViolationContext_conflictingAccessCriteria(
                                left_criteria = sailpoint.beta.models.sod_violation_context_conflicting_access_criteria_left_criteria.SodViolationContext_conflictingAccessCriteria_leftCriteria(
                                    criteria_list = [
                                        sailpoint.beta.models.sod_exempt_criteria.SodExemptCriteria(
                                            existing = True, 
                                            type = 'IDENTITY', 
                                            id = '2c918085771e9d3301773b3cb66f6398', 
                                            name = 'My HR Entitlement', )
                                        ], ), 
                                right_criteria = sailpoint.beta.models.sod_violation_context_conflicting_access_criteria_left_criteria.SodViolationContext_conflictingAccessCriteria_leftCriteria(), ), )
                        ], 
                    violated_policies = [
                        sailpoint.beta.models.sod_policy_dto.SodPolicyDto(
                            id = '0f11f2a4-7c94-4bf3-a2bd-742580fe3bde', 
                            name = 'Business SOD Policy', )
                        ], )
)

```
[[Back to top]](#) 


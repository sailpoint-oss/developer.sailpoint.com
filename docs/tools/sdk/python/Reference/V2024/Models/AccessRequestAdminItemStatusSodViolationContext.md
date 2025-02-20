---
id: v2024-access-request-admin-item-status-sod-violation-context
title: AccessRequestAdminItemStatusSodViolationContext
pagination_label: AccessRequestAdminItemStatusSodViolationContext
sidebar_label: AccessRequestAdminItemStatusSodViolationContext
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessRequestAdminItemStatusSodViolationContext', 'V2024AccessRequestAdminItemStatusSodViolationContext'] 
slug: /tools/sdk/python/v2024/models/access-request-admin-item-status-sod-violation-context
tags: ['SDK', 'Software Development Kit', 'AccessRequestAdminItemStatusSodViolationContext', 'V2024AccessRequestAdminItemStatusSodViolationContext']
---

# AccessRequestAdminItemStatusSodViolationContext


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** |  **Enum** [  'SUCCESS',    'ERROR' ] | The status of SOD violation check | [optional] 
**uuid** | **str** | The id of the Violation check event | [optional] 
**violation_check_result** | [**SodViolationCheckResult1**](sod-violation-check-result1) |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.access_request_admin_item_status_sod_violation_context import AccessRequestAdminItemStatusSodViolationContext

access_request_admin_item_status_sod_violation_context = AccessRequestAdminItemStatusSodViolationContext(
state='SUCCESS',
uuid='f73d16e9-a038-46c5-b217-1246e15fdbdd',
violation_check_result=sailpoint.v2024.models.sod_violation_check_result_1.SodViolationCheckResult_1(
                    message = sailpoint.v2024.models.error_message_dto_1.ErrorMessageDto_1(
                        locale = 'en-US', 
                        locale_origin = 'DEFAULT', 
                        text = 'The request was syntactically correct but its content is semantically invalid.', ), 
                    client_metadata = {requestedAppName=test-app, requestedAppId=2c91808f7892918f0178b78da4a305a1}, 
                    violation_contexts = [
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
                    violated_policies = [
                        sailpoint.v2024.models.sod_policy_dto.SodPolicyDto(
                            id = '0f11f2a4-7c94-4bf3-a2bd-742580fe3bde', 
                            name = 'Business SOD Policy', )
                        ], )
)

```
[[Back to top]](#) 


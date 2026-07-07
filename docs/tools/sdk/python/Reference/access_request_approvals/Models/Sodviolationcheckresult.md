---
id: sodviolationcheckresult
title: Sodviolationcheckresult
pagination_label: Sodviolationcheckresult
sidebar_label: Sodviolationcheckresult
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Sodviolationcheckresult', 'Sodviolationcheckresult'] 
slug: /tools/sdk/python/access-request-approvals/models/sodviolationcheckresult
tags: ['SDK', 'Software Development Kit', 'Sodviolationcheckresult', 'Sodviolationcheckresult']
---

# Sodviolationcheckresult

The inner object representing the completed SOD Violation check

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | [**Errormessagedto**](errormessagedto) |  | [optional] 
**client_metadata** | **map[string]str** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on completion of the violation check. | [optional] 
**violation_contexts** | [**[]Sodviolationcontext**](sodviolationcontext) |  | [optional] 
**violated_policies** | [**[]Sodpolicydto**](sodpolicydto) | A list of the SOD policies that were violated. | [optional] 
}

## Example

```python
from sailpoint.access_request_approvals.models.sodviolationcheckresult import Sodviolationcheckresult

sodviolationcheckresult = Sodviolationcheckresult(
message=sailpoint.access_request_approvals.models.error_message_dto.Error Message Dto(
                    locale = 'en-US', 
                    locale_origin = 'DEFAULT', 
                    text = 'The request was syntactically correct but its content is semantically invalid.', ),
client_metadata={"requestedAppName":"test-app","requestedAppId":"2c91808f7892918f0178b78da4a305a1"},
violation_contexts=[
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
violated_policies=[
                    sailpoint.access_request_approvals.models.sod_policy_dto.Sod Policy Dto(
                        type = 'SOD_POLICY', 
                        id = '0f11f2a4-7c94-4bf3-a2bd-742580fe3bde', 
                        name = 'Business SOD Policy', )
                    ]
)

```
[[Back to top]](#) 


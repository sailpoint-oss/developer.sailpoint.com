---
id: v2024-sod-violations
title: SOD_Violations
pagination_label: SOD_Violations
sidebar_label: SOD_Violations
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SOD_Violations', 'V2024SOD_Violations'] 
slug: /tools/sdk/python/v2024/methods/sod-violations
tags: ['SDK', 'Software Development Kit', 'SOD_Violations', 'V2024SOD_Violations']
---

# sailpoint.v2024.SODViolationsApi
  Use this API to check for current &quot;separation of duties&quot; (SOD) policy violations as well as potential future SOD policy violations. 
With SOD violation functionality in place, administrators can get information about current SOD policy violations and predict whether an access change will trigger new violations, which helps to prevent them from occurring at all. 

&quot;Separation of duties&quot; refers to the concept that people shouldn&#39;t have conflicting sets of access - all their access should be configured in a way that protects your organization&#39;s assets and data.  
For example, people who record monetary transactions shouldn&#39;t be able to issue payment for those transactions.
Any changes to major system configurations should be approved by someone other than the person requesting the change. 

Organizations can use &quot;separation of duties&quot; (SOD) policies to enforce and track their internal security rules throughout their tenants.
These SOD policies limit each user&#39;s involvement in important processes and protects the organization from individuals gaining excessive access. 

Once a SOD policy is in place, if an identity has conflicting access items, a SOD violation will trigger. 
These violations are included in SOD violation reports that other users will see in emails at regular intervals if they&#39;re subscribed to the SOD policy.
The other users can then better help to enforce these SOD policies.

Administrators can use the SOD violations APIs to check a set of identities for any current SOD violations, and they can use them to check whether adding an access item would potentially trigger a SOD violation. 
This second option is a good way to prevent SOD violations from triggering at all. 

Refer to [Handling Policy Violations](https://documentation.sailpoint.com/saas/help/sod/policy-violations.html) for more information about SOD policy violations. 
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**start-predict-sod-violations**](#start-predict-sod-violations) | **POST** `/sod-violations/predict` | Predict SOD violations for identity.
[**start-violation-check**](#start-violation-check) | **POST** `/sod-violations/check` | Check SOD violations


## start-predict-sod-violations
Predict SOD violations for identity.
This API is used to check if granting some additional accesses would cause the subject to be in violation of any SOD policies. Returns the violations that would be caused.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/start-predict-sod-violations)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | identity_with_new_access | [**IdentityWithNewAccess**](../models/identity-with-new-access) | True  | 

### Return type
[**ViolationPrediction**](../models/violation-prediction)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Violation Contexts | ViolationPrediction |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sod_violations_api import SODViolationsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.identity_with_new_access import IdentityWithNewAccess
from sailpoint.v2024.models.violation_prediction import ViolationPrediction
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    identity_with_new_access = {
          "identityId" : "2c91808568c529c60168cca6f90c1313",
          "accessRefs" : [ {
            "type" : "ENTITLEMENT",
            "id" : "2c918087682f9a86016839c050861ab1",
            "name" : "CN=Information Access,OU=test,OU=test-service,DC=TestAD,DC=local"
          }, {
            "type" : "ENTITLEMENT",
            "id" : "2c918087682f9a86016839c0509c1ab2",
            "name" : "CN=Information Technology,OU=test,OU=test-service,DC=TestAD,DC=local"
          } ]
        } # IdentityWithNewAccess | 

    try:
        # Predict SOD violations for identity.
        new_identity_with_new_access = IdentityWithNewAccess()
        new_identity_with_new_access.from_json(identity_with_new_access)
        results =SODViolationsApi(api_client).start_predict_sod_violations(new_identity_with_new_access)
        # Below is a request that includes all optional parameters
        # results = SODViolationsApi(api_client).start_predict_sod_violations(new_identity_with_new_access)
        print("The response of SODViolationsApi->start_predict_sod_violations:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SODViolationsApi->start_predict_sod_violations: %s\n" % e)
```



[[Back to top]](#) 

## start-violation-check
Check SOD violations
This API initiates a SOD policy verification asynchronously.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/start-violation-check)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | identity_with_new_access1 | [**IdentityWithNewAccess1**](../models/identity-with-new-access1) | True  | 

### Return type
[**SodViolationCheck**](../models/sod-violation-check)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Request ID with a timestamp. | SodViolationCheck |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sod_violations_api import SODViolationsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.identity_with_new_access1 import IdentityWithNewAccess1
from sailpoint.v2024.models.sod_violation_check import SodViolationCheck
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    identity_with_new_access1 = {identityId=2c91808568c529c60168cca6f90c1313, accessRefs=[{type=ENTITLEMENT, id=2c918087682f9a86016839c050861ab1, name=CN=Information Access,OU=test,OU=test-service,DC=TestAD,DC=local}, {type=ENTITLEMENT, id=2c918087682f9a86016839c0509c1ab2, name=CN=Information Technology,OU=test,OU=test-service,DC=TestAD,DC=local}], clientMetadata={additionalProp1=string, additionalProp2=string, additionalProp3=string}} # IdentityWithNewAccess1 | 

    try:
        # Check SOD violations
        new_identity_with_new_access1 = IdentityWithNewAccess1()
        new_identity_with_new_access1.from_json(identity_with_new_access1)
        results =SODViolationsApi(api_client).start_violation_check(new_identity_with_new_access1)
        # Below is a request that includes all optional parameters
        # results = SODViolationsApi(api_client).start_violation_check(new_identity_with_new_access1)
        print("The response of SODViolationsApi->start_violation_check:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SODViolationsApi->start_violation_check: %s\n" % e)
```



[[Back to top]](#) 




---
id: v2024-sod-policies
title: SOD_Policies
pagination_label: SOD_Policies
sidebar_label: SOD_Policies
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SOD_Policies', 'V2024SOD_Policies'] 
slug: /tools/sdk/python/v2024/methods/sod-policies
tags: ['SDK', 'Software Development Kit', 'SOD_Policies', 'V2024SOD_Policies']
---

# sailpoint.v2024.SODPoliciesApi
  Use this API to implement and manage &quot;separation of duties&quot; (SOD) policies. 
With SOD policy functionality in place, administrators can organize the access in their tenants to prevent individuals from gaining conflicting or excessive access. 

&quot;Separation of duties&quot; refers to the concept that people shouldn&#39;t have conflicting sets of access - all their access should be configured in a way that protects your organization&#39;s assets and data.  
For example, people who record monetary transactions shouldn&#39;t be able to issue payment for those transactions.
Any changes to major system configurations should be approved by someone other than the person requesting the change. 

Organizations can use &quot;separation of duties&quot; (SOD) policies to enforce and track their internal security rules throughout their tenants.
These SOD policies limit each user&#39;s involvement in important processes and protects the organization from individuals gaining excessive access. 

To create SOD policies in Identity Security Cloud, administrators use &#39;Search&#39; and then access &#39;Policies&#39;.
To create a policy, they must configure two lists of access items. Each access item can only be added to one of the two lists.
They can search for the entitlements they want to add to these access lists.

&gt;Note: You can have a maximum of 500 policies of any type (including general policies) in your organization. In each access-based SOD policy, you can have a maximum of 50 entitlements in each access list.  

Once a SOD policy is in place, if an identity has access items on both lists, a SOD violation will trigger. 
These violations are included in SOD violation reports that other users will see in emails at regular intervals if they&#39;re subscribed to the SOD policy.
The other users can then better help to enforce these SOD policies. 

To create a subscription to a SOD policy in Identity Security Cloud, administrators use &#39;Search&#39; and then access &#39;Layers&#39;.
They can create a subscription to the policy and schedule it to run at a regular interval. 

Refer to [Managing Policies](https://documentation.sailpoint.com/saas/help/sod/manage-policies.html) for more information about SOD policies. 

Refer to [Subscribe to a SOD Policy](https://documentation.sailpoint.com/saas/help/sod/policy-violations.html#subscribe-to-an-sod-policy) for more information about SOD policy subscriptions.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-sod-policy**](#create-sod-policy) | **POST** `/sod-policies` | Create SOD policy
[**delete-sod-policy**](#delete-sod-policy) | **DELETE** `/sod-policies/{id}` | Delete SOD policy by ID
[**delete-sod-policy-schedule**](#delete-sod-policy-schedule) | **DELETE** `/sod-policies/{id}/schedule` | Delete SOD policy schedule
[**get-custom-violation-report**](#get-custom-violation-report) | **GET** `/sod-violation-report/{reportResultId}/download/{fileName}` | Download custom violation report
[**get-default-violation-report**](#get-default-violation-report) | **GET** `/sod-violation-report/{reportResultId}/download` | Download violation report
[**get-sod-all-report-run-status**](#get-sod-all-report-run-status) | **GET** `/sod-violation-report` | Get multi-report run task status
[**get-sod-policy**](#get-sod-policy) | **GET** `/sod-policies/{id}` | Get SOD policy by ID
[**get-sod-policy-schedule**](#get-sod-policy-schedule) | **GET** `/sod-policies/{id}/schedule` | Get SOD policy schedule
[**get-sod-violation-report-run-status**](#get-sod-violation-report-run-status) | **GET** `/sod-policies/sod-violation-report-status/{reportResultId}` | Get violation report run status
[**get-sod-violation-report-status**](#get-sod-violation-report-status) | **GET** `/sod-policies/{id}/violation-report` | Get SOD violation report status
[**list-sod-policies**](#list-sod-policies) | **GET** `/sod-policies` | List SOD policies
[**patch-sod-policy**](#patch-sod-policy) | **PATCH** `/sod-policies/{id}` | Patch SOD policy by ID
[**put-policy-schedule**](#put-policy-schedule) | **PUT** `/sod-policies/{id}/schedule` | Update SOD Policy schedule
[**put-sod-policy**](#put-sod-policy) | **PUT** `/sod-policies/{id}` | Update SOD policy by ID
[**start-evaluate-sod-policy**](#start-evaluate-sod-policy) | **POST** `/sod-policies/{id}/evaluate` | Evaluate one policy by ID
[**start-sod-all-policies-for-org**](#start-sod-all-policies-for-org) | **POST** `/sod-violation-report/run` | Runs all policies for org
[**start-sod-policy**](#start-sod-policy) | **POST** `/sod-policies/{id}/violation-report/run` | Runs SOD policy violation report


## create-sod-policy
Create SOD policy
This creates both General and Conflicting Access Based policy, with a limit of 50 entitlements for each (left & right) criteria for Conflicting Access Based SOD policy.
Requires role of ORG_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-sod-policy)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | sod_policy | [**SodPolicy**](../models/sod-policy) | True  | 

### Return type
[**SodPolicy**](../models/sod-policy)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | SOD policy created | SodPolicy |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sod_policies_api import SODPoliciesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.sod_policy import SodPolicy
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    sod_policy = {
          "conflictingAccessCriteria" : {
            "leftCriteria" : {
              "name" : "money-in",
              "criteriaList" : [ {
                "type" : "ENTITLEMENT",
                "id" : "2c9180866166b5b0016167c32ef31a66",
                "name" : "Administrator"
              }, {
                "type" : "ENTITLEMENT",
                "id" : "2c9180866166b5b0016167c32ef31a67",
                "name" : "Administrator"
              } ]
            },
            "rightCriteria" : {
              "name" : "money-in",
              "criteriaList" : [ {
                "type" : "ENTITLEMENT",
                "id" : "2c9180866166b5b0016167c32ef31a66",
                "name" : "Administrator"
              }, {
                "type" : "ENTITLEMENT",
                "id" : "2c9180866166b5b0016167c32ef31a67",
                "name" : "Administrator"
              } ]
            }
          },
          "ownerRef" : {
            "name" : "Support",
            "id" : "2c9180a46faadee4016fb4e018c20639",
            "type" : "IDENTITY"
          },
          "created" : "2020-01-01T00:00:00Z",
          "scheduled" : true,
          "creatorId" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
          "modifierId" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
          "description" : "This policy ensures compliance of xyz",
          "violationOwnerAssignmentConfig" : {
            "assignmentRule" : "MANAGER",
            "ownerRef" : {
              "name" : "Support",
              "id" : "2c9180a46faadee4016fb4e018c20639",
              "type" : "IDENTITY"
            }
          },
          "correctionAdvice" : "Based on the role of the employee, managers should remove access that is not required for their job function.",
          "type" : "GENERAL",
          "tags" : [ "TAG1", "TAG2" ],
          "name" : "policy-xyz",
          "modified" : "2020-01-01T00:00:00Z",
          "policyQuery" : "@access(id:0f11f2a4-7c94-4bf3-a2bd-742580fe3bdg) AND @access(id:0f11f2a4-7c94-4bf3-a2bd-742580fe3bdf)",
          "compensatingControls" : "Have a manager review the transaction decisions for their \"out of compliance\" employee",
          "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
          "state" : "ENFORCED",
          "externalPolicyReference" : "XYZ policy"
        } # SodPolicy | 

    try:
        # Create SOD policy
        new_sod_policy = SodPolicy()
        new_sod_policy.from_json(sod_policy)
        results =SODPoliciesApi(api_client).create_sod_policy(new_sod_policy)
        # Below is a request that includes all optional parameters
        # results = SODPoliciesApi(api_client).create_sod_policy(new_sod_policy)
        print("The response of SODPoliciesApi->create_sod_policy:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SODPoliciesApi->create_sod_policy: %s\n" % e)
```



[[Back to top]](#) 

## delete-sod-policy
Delete SOD policy by ID
This deletes a specified SOD policy.
Requires role of ORG_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-sod-policy)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the SOD Policy to delete.
  Query | logical | **bool** |   (optional) (default to True) | Indicates whether this is a soft delete (logical true) or a hard delete.  Soft delete marks the policy as deleted and just save it with this status. It could be fully deleted or recovered further.  Hard delete vise versa permanently delete SOD request during this call.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sod_policies_api import SODPoliciesApi
from sailpoint.v2024.api_client import ApiClient
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The ID of the SOD Policy to delete. # str | The ID of the SOD Policy to delete.
    logical = True # bool | Indicates whether this is a soft delete (logical true) or a hard delete.  Soft delete marks the policy as deleted and just save it with this status. It could be fully deleted or recovered further.  Hard delete vise versa permanently delete SOD request during this call. (optional) (default to True) # bool | Indicates whether this is a soft delete (logical true) or a hard delete.  Soft delete marks the policy as deleted and just save it with this status. It could be fully deleted or recovered further.  Hard delete vise versa permanently delete SOD request during this call. (optional) (default to True)

    try:
        # Delete SOD policy by ID
        
        SODPoliciesApi(api_client).delete_sod_policy(id, )
        # Below is a request that includes all optional parameters
        # SODPoliciesApi(api_client).delete_sod_policy(id, logical)
        except Exception as e:
        print("Exception when calling SODPoliciesApi->delete_sod_policy: %s\n" % e)
```



[[Back to top]](#) 

## delete-sod-policy-schedule
Delete SOD policy schedule
This deletes schedule for a specified SOD policy by ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-sod-policy-schedule)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the SOD policy the schedule must be deleted for.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sod_policies_api import SODPoliciesApi
from sailpoint.v2024.api_client import ApiClient
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The ID of the SOD policy the schedule must be deleted for. # str | The ID of the SOD policy the schedule must be deleted for.

    try:
        # Delete SOD policy schedule
        
        SODPoliciesApi(api_client).delete_sod_policy_schedule(id)
        # Below is a request that includes all optional parameters
        # SODPoliciesApi(api_client).delete_sod_policy_schedule(id)
        except Exception as e:
        print("Exception when calling SODPoliciesApi->delete_sod_policy_schedule: %s\n" % e)
```



[[Back to top]](#) 

## get-custom-violation-report
Download custom violation report
This allows to download a specified named violation report for a given report reference.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-custom-violation-report)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | report_result_id | **str** | True  | The ID of the report reference to download.
Path   | file_name | **str** | True  | Custom Name for the  file.

### Return type
**bytearray**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Returns the zip file with given custom name that contains the violation report file. | bytearray |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/zip, application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sod_policies_api import SODPoliciesApi
from sailpoint.v2024.api_client import ApiClient
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    report_result_id = 'ef38f94347e94562b5bb8424a56397d8' # str | The ID of the report reference to download. # str | The ID of the report reference to download.
    file_name = 'custom-name' # str | Custom Name for the  file. # str | Custom Name for the  file.

    try:
        # Download custom violation report
        
        results =SODPoliciesApi(api_client).get_custom_violation_report(report_result_id, file_name)
        # Below is a request that includes all optional parameters
        # results = SODPoliciesApi(api_client).get_custom_violation_report(report_result_id, file_name)
        print("The response of SODPoliciesApi->get_custom_violation_report:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SODPoliciesApi->get_custom_violation_report: %s\n" % e)
```



[[Back to top]](#) 

## get-default-violation-report
Download violation report
This allows to download a violation report for a given report reference.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-default-violation-report)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | report_result_id | **str** | True  | The ID of the report reference to download.

### Return type
**bytearray**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Returns the PolicyReport.zip that contains the violation report file. | bytearray |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/zip, application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sod_policies_api import SODPoliciesApi
from sailpoint.v2024.api_client import ApiClient
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    report_result_id = 'ef38f94347e94562b5bb8424a56397d8' # str | The ID of the report reference to download. # str | The ID of the report reference to download.

    try:
        # Download violation report
        
        results =SODPoliciesApi(api_client).get_default_violation_report(report_result_id)
        # Below is a request that includes all optional parameters
        # results = SODPoliciesApi(api_client).get_default_violation_report(report_result_id)
        print("The response of SODPoliciesApi->get_default_violation_report:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SODPoliciesApi->get_default_violation_report: %s\n" % e)
```



[[Back to top]](#) 

## get-sod-all-report-run-status
Get multi-report run task status
This endpoint gets the status for a violation report for all policy run.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-sod-all-report-run-status)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**ReportResultReference**](../models/report-result-reference)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Status of the violation report run task for all policy run. | ReportResultReference |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sod_policies_api import SODPoliciesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.report_result_reference import ReportResultReference
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:

    try:
        # Get multi-report run task status
        
        results =SODPoliciesApi(api_client).get_sod_all_report_run_status()
        # Below is a request that includes all optional parameters
        # results = SODPoliciesApi(api_client).get_sod_all_report_run_status()
        print("The response of SODPoliciesApi->get_sod_all_report_run_status:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SODPoliciesApi->get_sod_all_report_run_status: %s\n" % e)
```



[[Back to top]](#) 

## get-sod-policy
Get SOD policy by ID
This gets specified SOD policy.
Requires role of ORG_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-sod-policy)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the SOD Policy to retrieve.

### Return type
[**SodPolicy**](../models/sod-policy)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | SOD policy ID. | SodPolicy |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sod_policies_api import SODPoliciesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.sod_policy import SodPolicy
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The ID of the SOD Policy to retrieve. # str | The ID of the SOD Policy to retrieve.

    try:
        # Get SOD policy by ID
        
        results =SODPoliciesApi(api_client).get_sod_policy(id)
        # Below is a request that includes all optional parameters
        # results = SODPoliciesApi(api_client).get_sod_policy(id)
        print("The response of SODPoliciesApi->get_sod_policy:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SODPoliciesApi->get_sod_policy: %s\n" % e)
```



[[Back to top]](#) 

## get-sod-policy-schedule
Get SOD policy schedule
This endpoint gets a specified SOD policy's schedule.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-sod-policy-schedule)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the SOD policy schedule to retrieve.

### Return type
[**SodPolicySchedule**](../models/sod-policy-schedule)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | SOD policy schedule. | SodPolicySchedule |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sod_policies_api import SODPoliciesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.sod_policy_schedule import SodPolicySchedule
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The ID of the SOD policy schedule to retrieve. # str | The ID of the SOD policy schedule to retrieve.

    try:
        # Get SOD policy schedule
        
        results =SODPoliciesApi(api_client).get_sod_policy_schedule(id)
        # Below is a request that includes all optional parameters
        # results = SODPoliciesApi(api_client).get_sod_policy_schedule(id)
        print("The response of SODPoliciesApi->get_sod_policy_schedule:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SODPoliciesApi->get_sod_policy_schedule: %s\n" % e)
```



[[Back to top]](#) 

## get-sod-violation-report-run-status
Get violation report run status
This gets the status for a violation report run task that has already been invoked.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-sod-violation-report-run-status)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | report_result_id | **str** | True  | The ID of the report reference to retrieve.

### Return type
[**ReportResultReference**](../models/report-result-reference)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Status of the violation report run task. | ReportResultReference |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sod_policies_api import SODPoliciesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.report_result_reference import ReportResultReference
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    report_result_id = '2e8d8180-24bc-4d21-91c6-7affdb473b0d' # str | The ID of the report reference to retrieve. # str | The ID of the report reference to retrieve.

    try:
        # Get violation report run status
        
        results =SODPoliciesApi(api_client).get_sod_violation_report_run_status(report_result_id)
        # Below is a request that includes all optional parameters
        # results = SODPoliciesApi(api_client).get_sod_violation_report_run_status(report_result_id)
        print("The response of SODPoliciesApi->get_sod_violation_report_run_status:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SODPoliciesApi->get_sod_violation_report_run_status: %s\n" % e)
```



[[Back to top]](#) 

## get-sod-violation-report-status
Get SOD violation report status
This gets the status for a violation report run task that has already been invoked.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-sod-violation-report-status)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the violation report to retrieve status for.

### Return type
[**ReportResultReference**](../models/report-result-reference)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Status of the violation report run task. | ReportResultReference |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sod_policies_api import SODPoliciesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.report_result_reference import ReportResultReference
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The ID of the violation report to retrieve status for. # str | The ID of the violation report to retrieve status for.

    try:
        # Get SOD violation report status
        
        results =SODPoliciesApi(api_client).get_sod_violation_report_status(id)
        # Below is a request that includes all optional parameters
        # results = SODPoliciesApi(api_client).get_sod_violation_report_status(id)
        print("The response of SODPoliciesApi->get_sod_violation_report_status:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SODPoliciesApi->get_sod_violation_report_status: %s\n" % e)
```



[[Back to top]](#) 

## list-sod-policies
List SOD policies
This gets list of all SOD policies.
Requires role of ORG_ADMIN

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-sod-policies)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in*  **state**: *eq, in*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, description**

### Return type
[**List[SodPolicy]**](../models/sod-policy)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of all SOD policies. | List[SodPolicy] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sod_policies_api import SODPoliciesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.sod_policy import SodPolicy
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'id eq \"bc693f07e7b645539626c25954c58554\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in*  **state**: *eq, in* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in*  **state**: *eq, in* (optional)
    sorters = 'id,name' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, description** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, description** (optional)

    try:
        # List SOD policies
        
        results =SODPoliciesApi(api_client).list_sod_policies()
        # Below is a request that includes all optional parameters
        # results = SODPoliciesApi(api_client).list_sod_policies(limit, offset, count, filters, sorters)
        print("The response of SODPoliciesApi->list_sod_policies:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SODPoliciesApi->list_sod_policies: %s\n" % e)
```



[[Back to top]](#) 

## patch-sod-policy
Patch SOD policy by ID
Allows updating SOD Policy fields other than ["id","created","creatorId","policyQuery","type"] using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
Requires role of ORG_ADMIN.
This endpoint can only patch CONFLICTING_ACCESS_BASED type policies. Do not use this endpoint to patch general policies - doing so will build an API exception. 

[API Spec](https://developer.sailpoint.com/docs/api/v2024/patch-sod-policy)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the SOD policy being modified.
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of SOD Policy update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * ownerRef * externalPolicyReference * compensatingControls * correctionAdvice * state * tags * violationOwnerAssignmentConfig * scheduled * conflictingAccessCriteria 

### Return type
[**SodPolicy**](../models/sod-policy)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Indicates the PATCH operation succeeded, and returns the SOD policy&#39;s new representation. | SodPolicy |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sod_policies_api import SODPoliciesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.json_patch_operation import JsonPatchOperation
from sailpoint.v2024.models.sod_policy import SodPolicy
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = '2c918083-5d19-1a86-015d-28455b4a2329' # str | The ID of the SOD policy being modified. # str | The ID of the SOD policy being modified.
    [{op=replace, path=/description, value=Modified description}, {op=replace, path=/conflictingAccessCriteria/leftCriteria/name, value=money-in-modified}, {op=replace, path=/conflictingAccessCriteria/rightCriteria, value={name=money-out-modified, criteriaList=[{type=ENTITLEMENT, id=2c918087682f9a86016839c0509c1ab2}]}}] # List[JsonPatchOperation] | A list of SOD Policy update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * ownerRef * externalPolicyReference * compensatingControls * correctionAdvice * state * tags * violationOwnerAssignmentConfig * scheduled * conflictingAccessCriteria 
     json_patch_operation = {
          "op" : "replace",
          "path" : "/description",
          "value" : "New description"
        } # List[JsonPatchOperation] | A list of SOD Policy update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * ownerRef * externalPolicyReference * compensatingControls * correctionAdvice * state * tags * violationOwnerAssignmentConfig * scheduled * conflictingAccessCriteria 
    

    try:
        # Patch SOD policy by ID
        new_json_patch_operation = JsonPatchOperation()
        new_json_patch_operation.from_json(json_patch_operation)
        results =SODPoliciesApi(api_client).patch_sod_policy(id, new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = SODPoliciesApi(api_client).patch_sod_policy(id, new_json_patch_operation)
        print("The response of SODPoliciesApi->patch_sod_policy:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SODPoliciesApi->patch_sod_policy: %s\n" % e)
```



[[Back to top]](#) 

## put-policy-schedule
Update SOD Policy schedule
This updates schedule for a specified SOD policy.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/put-policy-schedule)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the SOD policy to update its schedule.
 Body  | sod_policy_schedule | [**SodPolicySchedule**](../models/sod-policy-schedule) | True  | 

### Return type
[**SodPolicySchedule**](../models/sod-policy-schedule)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Created or updated SOD policy schedule. | SodPolicySchedule |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sod_policies_api import SODPoliciesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.sod_policy_schedule import SodPolicySchedule
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The ID of the SOD policy to update its schedule. # str | The ID of the SOD policy to update its schedule.
    sod_policy_schedule = {
          "schedule" : {
            "hours" : {
              "accountMatchConfig" : {
                "matchExpression" : {
                  "and" : true,
                  "matchTerms" : [ {
                    "name" : "",
                    "value" : "",
                    "container" : true,
                    "and" : false,
                    "children" : [ {
                      "name" : "businessCategory",
                      "value" : "Service",
                      "op" : "eq",
                      "container" : false,
                      "and" : false
                    } ]
                  } ]
                }
              },
              "applicationId" : "2c91808874ff91550175097daaec161c\""
            },
            "months" : {
              "accountMatchConfig" : {
                "matchExpression" : {
                  "and" : true,
                  "matchTerms" : [ {
                    "name" : "",
                    "value" : "",
                    "container" : true,
                    "and" : false,
                    "children" : [ {
                      "name" : "businessCategory",
                      "value" : "Service",
                      "op" : "eq",
                      "container" : false,
                      "and" : false
                    } ]
                  } ]
                }
              },
              "applicationId" : "2c91808874ff91550175097daaec161c\""
            },
            "timeZoneId" : "America/Chicago",
            "days" : {
              "accountMatchConfig" : {
                "matchExpression" : {
                  "and" : true,
                  "matchTerms" : [ {
                    "name" : "",
                    "value" : "",
                    "container" : true,
                    "and" : false,
                    "children" : [ {
                      "name" : "businessCategory",
                      "value" : "Service",
                      "op" : "eq",
                      "container" : false,
                      "and" : false
                    } ]
                  } ]
                }
              },
              "applicationId" : "2c91808874ff91550175097daaec161c\""
            },
            "expiration" : "2018-06-25T20:22:28.104Z",
            "type" : "WEEKLY"
          },
          "created" : "2020-01-01T00:00:00Z",
          "recipients" : [ {
            "name" : "Michael Michaels",
            "id" : "2c7180a46faadee4016fb4e018c20642",
            "type" : "IDENTITY"
          }, {
            "name" : "Michael Michaels",
            "id" : "2c7180a46faadee4016fb4e018c20642",
            "type" : "IDENTITY"
          } ],
          "name" : "SCH-1584312283015",
          "creatorId" : "0f11f2a47c944bf3a2bd742580fe3bde",
          "modifierId" : "0f11f2a47c944bf3a2bd742580fe3bde",
          "modified" : "2020-01-01T00:00:00Z",
          "description" : "Schedule for policy xyz",
          "emailEmptyResults" : false
        } # SodPolicySchedule | 

    try:
        # Update SOD Policy schedule
        new_sod_policy_schedule = SodPolicySchedule()
        new_sod_policy_schedule.from_json(sod_policy_schedule)
        results =SODPoliciesApi(api_client).put_policy_schedule(id, new_sod_policy_schedule)
        # Below is a request that includes all optional parameters
        # results = SODPoliciesApi(api_client).put_policy_schedule(id, new_sod_policy_schedule)
        print("The response of SODPoliciesApi->put_policy_schedule:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SODPoliciesApi->put_policy_schedule: %s\n" % e)
```



[[Back to top]](#) 

## put-sod-policy
Update SOD policy by ID
This updates a specified SOD policy.
Requires role of ORG_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/put-sod-policy)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the SOD policy to update.
 Body  | sod_policy | [**SodPolicy**](../models/sod-policy) | True  | 

### Return type
[**SodPolicy**](../models/sod-policy)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | SOD Policy by ID | SodPolicy |  -  |
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
from sailpoint.v2024.api.sod_policies_api import SODPoliciesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.sod_policy import SodPolicy
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The ID of the SOD policy to update. # str | The ID of the SOD policy to update.
    sod_policy = {
          "conflictingAccessCriteria" : {
            "leftCriteria" : {
              "name" : "money-in",
              "criteriaList" : [ {
                "type" : "ENTITLEMENT",
                "id" : "2c9180866166b5b0016167c32ef31a66",
                "name" : "Administrator"
              }, {
                "type" : "ENTITLEMENT",
                "id" : "2c9180866166b5b0016167c32ef31a67",
                "name" : "Administrator"
              } ]
            },
            "rightCriteria" : {
              "name" : "money-in",
              "criteriaList" : [ {
                "type" : "ENTITLEMENT",
                "id" : "2c9180866166b5b0016167c32ef31a66",
                "name" : "Administrator"
              }, {
                "type" : "ENTITLEMENT",
                "id" : "2c9180866166b5b0016167c32ef31a67",
                "name" : "Administrator"
              } ]
            }
          },
          "ownerRef" : {
            "name" : "Support",
            "id" : "2c9180a46faadee4016fb4e018c20639",
            "type" : "IDENTITY"
          },
          "created" : "2020-01-01T00:00:00Z",
          "scheduled" : true,
          "creatorId" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
          "modifierId" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
          "description" : "This policy ensures compliance of xyz",
          "violationOwnerAssignmentConfig" : {
            "assignmentRule" : "MANAGER",
            "ownerRef" : {
              "name" : "Support",
              "id" : "2c9180a46faadee4016fb4e018c20639",
              "type" : "IDENTITY"
            }
          },
          "correctionAdvice" : "Based on the role of the employee, managers should remove access that is not required for their job function.",
          "type" : "GENERAL",
          "tags" : [ "TAG1", "TAG2" ],
          "name" : "policy-xyz",
          "modified" : "2020-01-01T00:00:00Z",
          "policyQuery" : "@access(id:0f11f2a4-7c94-4bf3-a2bd-742580fe3bdg) AND @access(id:0f11f2a4-7c94-4bf3-a2bd-742580fe3bdf)",
          "compensatingControls" : "Have a manager review the transaction decisions for their \"out of compliance\" employee",
          "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
          "state" : "ENFORCED",
          "externalPolicyReference" : "XYZ policy"
        } # SodPolicy | 

    try:
        # Update SOD policy by ID
        new_sod_policy = SodPolicy()
        new_sod_policy.from_json(sod_policy)
        results =SODPoliciesApi(api_client).put_sod_policy(id, new_sod_policy)
        # Below is a request that includes all optional parameters
        # results = SODPoliciesApi(api_client).put_sod_policy(id, new_sod_policy)
        print("The response of SODPoliciesApi->put_sod_policy:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SODPoliciesApi->put_sod_policy: %s\n" % e)
```



[[Back to top]](#) 

## start-evaluate-sod-policy
Evaluate one policy by ID
Runs the scheduled report for the policy retrieved by passed policy ID.  The report schedule is fetched from the policy retrieved by ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/start-evaluate-sod-policy)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The SOD policy ID to run.

### Return type
[**ReportResultReference**](../models/report-result-reference)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Reference to the violation report run task. | ReportResultReference |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sod_policies_api import SODPoliciesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.report_result_reference import ReportResultReference
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The SOD policy ID to run. # str | The SOD policy ID to run.

    try:
        # Evaluate one policy by ID
        
        results =SODPoliciesApi(api_client).start_evaluate_sod_policy(id)
        # Below is a request that includes all optional parameters
        # results = SODPoliciesApi(api_client).start_evaluate_sod_policy(id)
        print("The response of SODPoliciesApi->start_evaluate_sod_policy:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SODPoliciesApi->start_evaluate_sod_policy: %s\n" % e)
```



[[Back to top]](#) 

## start-sod-all-policies-for-org
Runs all policies for org
Runs multi-policy report for the org. If a policy reports more than 5000 violations, the report mentions that the violation limit was exceeded for that policy. If the request is empty, the report runs for all policies. Otherwise, the report runs for only the filtered policy list provided.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/start-sod-all-policies-for-org)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | multi_policy_request | [**MultiPolicyRequest**](../models/multi-policy-request) |   (optional) | 

### Return type
[**ReportResultReference**](../models/report-result-reference)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Reference to the violation report run task. | ReportResultReference |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sod_policies_api import SODPoliciesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.multi_policy_request import MultiPolicyRequest
from sailpoint.v2024.models.report_result_reference import ReportResultReference
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    multi_policy_request = {
          "filteredPolicyList" : [ "[b868cd40-ffa4-4337-9c07-1a51846cfa94, 63a07a7b-39a4-48aa-956d-50c827deba2a]", "[b868cd40-ffa4-4337-9c07-1a51846cfa94, 63a07a7b-39a4-48aa-956d-50c827deba2a]" ]
        } # MultiPolicyRequest |  (optional)

    try:
        # Runs all policies for org
        
        results =SODPoliciesApi(api_client).start_sod_all_policies_for_org()
        # Below is a request that includes all optional parameters
        # results = SODPoliciesApi(api_client).start_sod_all_policies_for_org(new_multi_policy_request)
        print("The response of SODPoliciesApi->start_sod_all_policies_for_org:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SODPoliciesApi->start_sod_all_policies_for_org: %s\n" % e)
```



[[Back to top]](#) 

## start-sod-policy
Runs SOD policy violation report
This invokes processing of violation report for given SOD policy. If the policy reports more than 5000 violations, the report returns with violation limit exceeded message.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/start-sod-policy)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The SOD policy ID to run.

### Return type
[**ReportResultReference**](../models/report-result-reference)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Reference to the violation report run task. | ReportResultReference |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sod_policies_api import SODPoliciesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.report_result_reference import ReportResultReference
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The SOD policy ID to run. # str | The SOD policy ID to run.

    try:
        # Runs SOD policy violation report
        
        results =SODPoliciesApi(api_client).start_sod_policy(id)
        # Below is a request that includes all optional parameters
        # results = SODPoliciesApi(api_client).start_sod_policy(id)
        print("The response of SODPoliciesApi->start_sod_policy:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SODPoliciesApi->start_sod_policy: %s\n" % e)
```



[[Back to top]](#) 




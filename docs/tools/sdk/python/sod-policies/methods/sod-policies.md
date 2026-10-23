# SOD_Policies

# sailpoint.sod_policies.SODPoliciesApi
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
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-sod-policy-v1**](#create-sod-policy-v1) | **POST** `/sod-policies/v1` | Create sod policy
[**delete-sod-policy-schedule-v1**](#delete-sod-policy-schedule-v1) | **DELETE** `/sod-policies/v1/{id}/schedule` | Delete sod policy schedule
[**delete-sod-policy-v1**](#delete-sod-policy-v1) | **DELETE** `/sod-policies/v1/{id}` | Delete sod policy by id
[**get-custom-violation-report-v1**](#get-custom-violation-report-v1) | **GET** `/sod-violation-report/v1/{reportResultId}/download/{fileName}` | Download custom violation report
[**get-default-violation-report-v1**](#get-default-violation-report-v1) | **GET** `/sod-violation-report/v1/{reportResultId}/download` | Download violation report
[**get-sod-all-report-run-status-v1**](#get-sod-all-report-run-status-v1) | **GET** `/sod-violation-report/v1` | Get multi-report run task status
[**get-sod-policy-schedule-v1**](#get-sod-policy-schedule-v1) | **GET** `/sod-policies/v1/{id}/schedule` | Get sod policy schedule
[**get-sod-policy-v1**](#get-sod-policy-v1) | **GET** `/sod-policies/v1/{id}` | Get sod policy by id
[**get-sod-violation-report-run-status-v1**](#get-sod-violation-report-run-status-v1) | **GET** `/sod-policies/v1/sod-violation-report-status/{reportResultId}` | Get violation report run status
[**get-sod-violation-report-status-v1**](#get-sod-violation-report-status-v1) | **GET** `/sod-policies/v1/{id}/violation-report` | Get sod violation report status
[**list-sod-policies-v1**](#list-sod-policies-v1) | **GET** `/sod-policies/v1` | List sod policies
[**patch-sod-policy-v1**](#patch-sod-policy-v1) | **PATCH** `/sod-policies/v1/{id}` | Patch sod policy by id
[**put-policy-schedule-v1**](#put-policy-schedule-v1) | **PUT** `/sod-policies/v1/{id}/schedule` | Update sod policy schedule
[**put-sod-policy-v1**](#put-sod-policy-v1) | **PUT** `/sod-policies/v1/{id}` | Update sod policy by id
[**start-evaluate-sod-policy-v1**](#start-evaluate-sod-policy-v1) | **POST** `/sod-policies/v1/{id}/evaluate` | Evaluate one policy by id
[**start-sod-all-policies-for-org-v1**](#start-sod-all-policies-for-org-v1) | **POST** `/sod-violation-report/v1/run` | Runs all policies for org
[**start-sod-policy-v1**](#start-sod-policy-v1) | **POST** `/sod-policies/v1/{id}/violation-report/run` | Runs sod policy violation report


## create-sod-policy-v1
Create sod policy
This creates both General and Conflicting Access Based policy, with a limit of 50 entitlements for each (left & right) criteria for Conflicting Access Based SOD policy.
Requires role of ORG_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/create-sod-policy-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSodPoliciesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSodPoliciesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.sod_policies.api.sod_policies_api import SODPoliciesApi
from sailpoint.sod_policies.api_client import ApiClient
from sailpoint.sod_policies.models.sod_policy import SodPolicy
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    sod_policy = '''{
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
          "level" : "HIGH",
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
          "allowedControls" : [ {
            "type" : "COMPENSATING_CONTROL",
            "id" : "2c9180a46faadee4016fb4e018c20639",
            "name" : "Mitigating Control 1"
          } ],
          "type" : "GENERAL",
          "secondaryOwnerRefs" : [ {
            "type" : "IDENTITY",
            "id" : "2c9180a46faadee4016fb4e018c20639",
            "name" : "Support"
          } ],
          "tags" : [ "TAG1", "TAG2" ],
          "name" : "policy-xyz",
          "modified" : "2020-01-01T00:00:00Z",
          "policyQuery" : "@access(id:0f11f2a4-7c94-4bf3-a2bd-742580fe3bdg) AND @access(id:0f11f2a4-7c94-4bf3-a2bd-742580fe3bdf)",
          "compensatingControls" : "Have a manager review the transaction decisions for their \"out of compliance\" employee",
          "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
          "state" : "ENFORCED",
          "externalPolicyReference" : "XYZ policy"
        }''' # SodPolicy | 

    try:
        # Create sod policy
        new_sod_policy = SodPolicy.from_json(sod_policy)
        results = SODPoliciesApi(api_client).create_sod_policy_v1(sod_policy=new_sod_policy)
        # Below is a request that includes all optional parameters
        # results = SODPoliciesApi(api_client).create_sod_policy_v1(new_sod_policy)
        print("The response of SODPoliciesApi->create_sod_policy_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SODPoliciesApi->create_sod_policy_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-sod-policy-schedule-v1
Delete sod policy schedule
This deletes schedule for a specified SOD policy by ID.

[API Spec](https://developer.sailpoint.com/docs/api/delete-sod-policy-schedule-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSodPoliciesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSodPoliciesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sod_policies.api.sod_policies_api import SODPoliciesApi
from sailpoint.sod_policies.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The ID of the SOD policy the schedule must be deleted for. # str | The ID of the SOD policy the schedule must be deleted for.

    try:
        # Delete sod policy schedule
        
        SODPoliciesApi(api_client).delete_sod_policy_schedule_v1(id=id)
        # Below is a request that includes all optional parameters
        # SODPoliciesApi(api_client).delete_sod_policy_schedule_v1(id)
    except Exception as e:
        print("Exception when calling SODPoliciesApi->delete_sod_policy_schedule_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-sod-policy-v1
Delete sod policy by id
This deletes a specified SOD policy.
Requires role of ORG_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/delete-sod-policy-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSodPoliciesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSodPoliciesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sod_policies.api.sod_policies_api import SODPoliciesApi
from sailpoint.sod_policies.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The ID of the SOD Policy to delete. # str | The ID of the SOD Policy to delete.
    logical = True # bool | Indicates whether this is a soft delete (logical true) or a hard delete.  Soft delete marks the policy as deleted and just save it with this status. It could be fully deleted or recovered further.  Hard delete vise versa permanently delete SOD request during this call. (optional) (default to True) # bool | Indicates whether this is a soft delete (logical true) or a hard delete.  Soft delete marks the policy as deleted and just save it with this status. It could be fully deleted or recovered further.  Hard delete vise versa permanently delete SOD request during this call. (optional) (default to True)

    try:
        # Delete sod policy by id
        
        SODPoliciesApi(api_client).delete_sod_policy_v1(id=id)
        # Below is a request that includes all optional parameters
        # SODPoliciesApi(api_client).delete_sod_policy_v1(id, logical)
    except Exception as e:
        print("Exception when calling SODPoliciesApi->delete_sod_policy_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-custom-violation-report-v1
Download custom violation report
This allows to download a specified named violation report for a given report reference.

[API Spec](https://developer.sailpoint.com/docs/api/get-custom-violation-report-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSodPoliciesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSodPoliciesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/zip, application/json

### Example

```python
from sailpoint.sod_policies.api.sod_policies_api import SODPoliciesApi
from sailpoint.sod_policies.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    report_result_id = 'ef38f94347e94562b5bb8424a56397d8' # str | The ID of the report reference to download. # str | The ID of the report reference to download.
    file_name = 'custom-name' # str | Custom Name for the  file. # str | Custom Name for the  file.

    try:
        # Download custom violation report
        
        results = SODPoliciesApi(api_client).get_custom_violation_report_v1(report_result_id=report_result_id, file_name=file_name)
        # Below is a request that includes all optional parameters
        # results = SODPoliciesApi(api_client).get_custom_violation_report_v1(report_result_id, file_name)
        print("The response of SODPoliciesApi->get_custom_violation_report_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SODPoliciesApi->get_custom_violation_report_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-default-violation-report-v1
Download violation report
This allows to download a violation report for a given report reference.

[API Spec](https://developer.sailpoint.com/docs/api/get-default-violation-report-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSodPoliciesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSodPoliciesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/zip, application/json

### Example

```python
from sailpoint.sod_policies.api.sod_policies_api import SODPoliciesApi
from sailpoint.sod_policies.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    report_result_id = 'ef38f94347e94562b5bb8424a56397d8' # str | The ID of the report reference to download. # str | The ID of the report reference to download.

    try:
        # Download violation report
        
        results = SODPoliciesApi(api_client).get_default_violation_report_v1(report_result_id=report_result_id)
        # Below is a request that includes all optional parameters
        # results = SODPoliciesApi(api_client).get_default_violation_report_v1(report_result_id)
        print("The response of SODPoliciesApi->get_default_violation_report_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SODPoliciesApi->get_default_violation_report_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-sod-all-report-run-status-v1
Get multi-report run task status
This endpoint gets the status for a violation report for all policy run.

[API Spec](https://developer.sailpoint.com/docs/api/get-sod-all-report-run-status-v-1)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**ReportResultReference**](../models/report-result-reference)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Status of the violation report run task for all policy run. | ReportResultReference |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSodPoliciesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSodPoliciesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sod_policies.api.sod_policies_api import SODPoliciesApi
from sailpoint.sod_policies.api_client import ApiClient
from sailpoint.sod_policies.models.report_result_reference import ReportResultReference
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # Get multi-report run task status
        
        results = SODPoliciesApi(api_client).get_sod_all_report_run_status_v1()
        # Below is a request that includes all optional parameters
        # results = SODPoliciesApi(api_client).get_sod_all_report_run_status_v1()
        print("The response of SODPoliciesApi->get_sod_all_report_run_status_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SODPoliciesApi->get_sod_all_report_run_status_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-sod-policy-schedule-v1
Get sod policy schedule
This endpoint gets a specified SOD policy's schedule.

[API Spec](https://developer.sailpoint.com/docs/api/get-sod-policy-schedule-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSodPoliciesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSodPoliciesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sod_policies.api.sod_policies_api import SODPoliciesApi
from sailpoint.sod_policies.api_client import ApiClient
from sailpoint.sod_policies.models.sod_policy_schedule import SodPolicySchedule
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The ID of the SOD policy schedule to retrieve. # str | The ID of the SOD policy schedule to retrieve.

    try:
        # Get sod policy schedule
        
        results = SODPoliciesApi(api_client).get_sod_policy_schedule_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = SODPoliciesApi(api_client).get_sod_policy_schedule_v1(id)
        print("The response of SODPoliciesApi->get_sod_policy_schedule_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SODPoliciesApi->get_sod_policy_schedule_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-sod-policy-v1
Get sod policy by id
This gets specified SOD policy.
Requires role of ORG_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/get-sod-policy-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSodPoliciesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSodPoliciesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sod_policies.api.sod_policies_api import SODPoliciesApi
from sailpoint.sod_policies.api_client import ApiClient
from sailpoint.sod_policies.models.sod_policy import SodPolicy
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The ID of the SOD Policy to retrieve. # str | The ID of the SOD Policy to retrieve.

    try:
        # Get sod policy by id
        
        results = SODPoliciesApi(api_client).get_sod_policy_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = SODPoliciesApi(api_client).get_sod_policy_v1(id)
        print("The response of SODPoliciesApi->get_sod_policy_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SODPoliciesApi->get_sod_policy_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-sod-violation-report-run-status-v1
Get violation report run status
This gets the status for a violation report run task that has already been invoked.

[API Spec](https://developer.sailpoint.com/docs/api/get-sod-violation-report-run-status-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSodPoliciesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSodPoliciesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sod_policies.api.sod_policies_api import SODPoliciesApi
from sailpoint.sod_policies.api_client import ApiClient
from sailpoint.sod_policies.models.report_result_reference import ReportResultReference
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    report_result_id = '2e8d8180-24bc-4d21-91c6-7affdb473b0d' # str | The ID of the report reference to retrieve. # str | The ID of the report reference to retrieve.

    try:
        # Get violation report run status
        
        results = SODPoliciesApi(api_client).get_sod_violation_report_run_status_v1(report_result_id=report_result_id)
        # Below is a request that includes all optional parameters
        # results = SODPoliciesApi(api_client).get_sod_violation_report_run_status_v1(report_result_id)
        print("The response of SODPoliciesApi->get_sod_violation_report_run_status_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SODPoliciesApi->get_sod_violation_report_run_status_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-sod-violation-report-status-v1
Get sod violation report status
This gets the status for a violation report run task that has already been invoked.

[API Spec](https://developer.sailpoint.com/docs/api/get-sod-violation-report-status-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSodPoliciesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSodPoliciesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sod_policies.api.sod_policies_api import SODPoliciesApi
from sailpoint.sod_policies.api_client import ApiClient
from sailpoint.sod_policies.models.report_result_reference import ReportResultReference
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The ID of the violation report to retrieve status for. # str | The ID of the violation report to retrieve status for.

    try:
        # Get sod violation report status
        
        results = SODPoliciesApi(api_client).get_sod_violation_report_status_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = SODPoliciesApi(api_client).get_sod_violation_report_status_v1(id)
        print("The response of SODPoliciesApi->get_sod_violation_report_status_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SODPoliciesApi->get_sod_violation_report_status_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-sod-policies-v1
List sod policies
This gets list of all SOD policies.
Requires role of ORG_ADMIN

[API Spec](https://developer.sailpoint.com/docs/api/list-sod-policies-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw, co*  **state**: *eq, in*  **level**: *eq, in*  **type**: *eq*  **description**: *eq, co, sw*  **ownerRef.name**: *eq, sw*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, description, ownerRef.name**

### Return type
[**List[SodPolicy]**](../models/sod-policy)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of all SOD policies. | List[SodPolicy] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSodPoliciesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSodPoliciesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sod_policies.api.sod_policies_api import SODPoliciesApi
from sailpoint.sod_policies.api_client import ApiClient
from sailpoint.sod_policies.models.sod_policy import SodPolicy
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'id eq \"bc693f07e7b645539626c25954c58554\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw, co*  **state**: *eq, in*  **level**: *eq, in*  **type**: *eq*  **description**: *eq, co, sw*  **ownerRef.name**: *eq, sw* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw, co*  **state**: *eq, in*  **level**: *eq, in*  **type**: *eq*  **description**: *eq, co, sw*  **ownerRef.name**: *eq, sw* (optional)
    sorters = 'id,name' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, description, ownerRef.name** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, description, ownerRef.name** (optional)

    try:
        # List sod policies
        
        results = SODPoliciesApi(api_client).list_sod_policies_v1()
        # Below is a request that includes all optional parameters
        # results = SODPoliciesApi(api_client).list_sod_policies_v1(limit, offset, count, filters, sorters)
        print("The response of SODPoliciesApi->list_sod_policies_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SODPoliciesApi->list_sod_policies_v1: %s\n" % e)
```



[[Back to top]](#) 

## patch-sod-policy-v1
Patch sod policy by id
Allows updating SOD Policy fields other than ["id","created","creatorId","policyQuery","type"] using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
Requires role of ORG_ADMIN.
This endpoint can only patch CONFLICTING_ACCESS_BASED type policies. Do not use this endpoint to patch general policies - doing so will build an API exception. 

[API Spec](https://developer.sailpoint.com/docs/api/patch-sod-policy-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the SOD policy being modified.
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of SOD Policy update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * ownerRef * externalPolicyReference * compensatingControls * correctionAdvice * state * tags * violationOwnerAssignmentConfig * scheduled * conflictingAccessCriteria * level * secondaryOwnerRefs * allowedControls 

### Return type
[**SodPolicy**](../models/sod-policy)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Indicates the PATCH operation succeeded, and returns the SOD policy&#39;s new representation. | SodPolicy |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSodPoliciesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSodPoliciesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.sod_policies.api.sod_policies_api import SODPoliciesApi
from sailpoint.sod_policies.api_client import ApiClient
from sailpoint.sod_policies.models.json_patch_operation import JsonPatchOperation
from sailpoint.sod_policies.models.sod_policy import SodPolicy
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c918083-5d19-1a86-015d-28455b4a2329' # str | The ID of the SOD policy being modified. # str | The ID of the SOD policy being modified.
    json_patch_operation = '''[{"op":"replace","path":"/description","value":"Modified description"},{"op":"replace","path":"/conflictingAccessCriteria/leftCriteria/name","value":"money-in-modified"},{"op":"replace","path":"/conflictingAccessCriteria/rightCriteria","value":{"name":"money-out-modified","criteriaList":[{"type":"ENTITLEMENT","id":"2c918087682f9a86016839c0509c1ab2"}]}}]''' # List[JsonPatchOperation] | A list of SOD Policy update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * ownerRef * externalPolicyReference * compensatingControls * correctionAdvice * state * tags * violationOwnerAssignmentConfig * scheduled * conflictingAccessCriteria * level * secondaryOwnerRefs * allowedControls 

    try:
        # Patch sod policy by id
        new_json_patch_operation = JsonPatchOperation.from_json(json_patch_operation)
        results = SODPoliciesApi(api_client).patch_sod_policy_v1(id=id, json_patch_operation=new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = SODPoliciesApi(api_client).patch_sod_policy_v1(id, new_json_patch_operation)
        print("The response of SODPoliciesApi->patch_sod_policy_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SODPoliciesApi->patch_sod_policy_v1: %s\n" % e)
```



[[Back to top]](#) 

## put-policy-schedule-v1
Update sod policy schedule
This updates schedule for a specified SOD policy.

[API Spec](https://developer.sailpoint.com/docs/api/put-policy-schedule-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSodPoliciesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSodPoliciesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.sod_policies.api.sod_policies_api import SODPoliciesApi
from sailpoint.sod_policies.api_client import ApiClient
from sailpoint.sod_policies.models.sod_policy_schedule import SodPolicySchedule
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The ID of the SOD policy to update its schedule. # str | The ID of the SOD policy to update its schedule.
    sod_policy_schedule = '''{
          "schedule" : {
            "hours" : {
              "values" : [ "MON", "WED" ],
              "interval" : 3,
              "type" : "LIST"
            },
            "months" : {
              "values" : [ "MON", "WED" ],
              "interval" : 3,
              "type" : "LIST"
            },
            "timeZoneId" : "America/Chicago",
            "days" : {
              "values" : [ "MON", "WED" ],
              "interval" : 3,
              "type" : "LIST"
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
        }''' # SodPolicySchedule | 

    try:
        # Update sod policy schedule
        new_sod_policy_schedule = SodPolicySchedule.from_json(sod_policy_schedule)
        results = SODPoliciesApi(api_client).put_policy_schedule_v1(id=id, sod_policy_schedule=new_sod_policy_schedule)
        # Below is a request that includes all optional parameters
        # results = SODPoliciesApi(api_client).put_policy_schedule_v1(id, new_sod_policy_schedule)
        print("The response of SODPoliciesApi->put_policy_schedule_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SODPoliciesApi->put_policy_schedule_v1: %s\n" % e)
```



[[Back to top]](#) 

## put-sod-policy-v1
Update sod policy by id
This updates a specified SOD policy.
Requires role of ORG_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/put-sod-policy-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSodPoliciesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSodPoliciesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.sod_policies.api.sod_policies_api import SODPoliciesApi
from sailpoint.sod_policies.api_client import ApiClient
from sailpoint.sod_policies.models.sod_policy import SodPolicy
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The ID of the SOD policy to update. # str | The ID of the SOD policy to update.
    sod_policy = '''{
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
          "level" : "HIGH",
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
          "allowedControls" : [ {
            "type" : "COMPENSATING_CONTROL",
            "id" : "2c9180a46faadee4016fb4e018c20639",
            "name" : "Mitigating Control 1"
          } ],
          "type" : "GENERAL",
          "secondaryOwnerRefs" : [ {
            "type" : "IDENTITY",
            "id" : "2c9180a46faadee4016fb4e018c20639",
            "name" : "Support"
          } ],
          "tags" : [ "TAG1", "TAG2" ],
          "name" : "policy-xyz",
          "modified" : "2020-01-01T00:00:00Z",
          "policyQuery" : "@access(id:0f11f2a4-7c94-4bf3-a2bd-742580fe3bdg) AND @access(id:0f11f2a4-7c94-4bf3-a2bd-742580fe3bdf)",
          "compensatingControls" : "Have a manager review the transaction decisions for their \"out of compliance\" employee",
          "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
          "state" : "ENFORCED",
          "externalPolicyReference" : "XYZ policy"
        }''' # SodPolicy | 

    try:
        # Update sod policy by id
        new_sod_policy = SodPolicy.from_json(sod_policy)
        results = SODPoliciesApi(api_client).put_sod_policy_v1(id=id, sod_policy=new_sod_policy)
        # Below is a request that includes all optional parameters
        # results = SODPoliciesApi(api_client).put_sod_policy_v1(id, new_sod_policy)
        print("The response of SODPoliciesApi->put_sod_policy_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SODPoliciesApi->put_sod_policy_v1: %s\n" % e)
```



[[Back to top]](#) 

## start-evaluate-sod-policy-v1
Evaluate one policy by id
Runs the scheduled report for the policy retrieved by passed policy ID.  The report schedule is fetched from the policy retrieved by ID.

[API Spec](https://developer.sailpoint.com/docs/api/start-evaluate-sod-policy-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSodPoliciesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSodPoliciesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sod_policies.api.sod_policies_api import SODPoliciesApi
from sailpoint.sod_policies.api_client import ApiClient
from sailpoint.sod_policies.models.report_result_reference import ReportResultReference
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The SOD policy ID to run. # str | The SOD policy ID to run.

    try:
        # Evaluate one policy by id
        
        results = SODPoliciesApi(api_client).start_evaluate_sod_policy_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = SODPoliciesApi(api_client).start_evaluate_sod_policy_v1(id)
        print("The response of SODPoliciesApi->start_evaluate_sod_policy_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SODPoliciesApi->start_evaluate_sod_policy_v1: %s\n" % e)
```



[[Back to top]](#) 

## start-sod-all-policies-for-org-v1
Runs all policies for org
Runs multi-policy report for the org. If a policy reports more than 5000 violations, the report mentions that the violation limit was exceeded for that policy. If the request is empty, the report runs for all policies. Otherwise, the report runs for only the filtered policy list provided.

[API Spec](https://developer.sailpoint.com/docs/api/start-sod-all-policies-for-org-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSodPoliciesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSodPoliciesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.sod_policies.api.sod_policies_api import SODPoliciesApi
from sailpoint.sod_policies.api_client import ApiClient
from sailpoint.sod_policies.models.multi_policy_request import MultiPolicyRequest
from sailpoint.sod_policies.models.report_result_reference import ReportResultReference
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    multi_policy_request = '''{
          "filteredPolicyList" : [ "[\"b868cd40-ffa4-4337-9c07-1a51846cfa94\",\"63a07a7b-39a4-48aa-956d-50c827deba2a\"]", "[\"b868cd40-ffa4-4337-9c07-1a51846cfa94\",\"63a07a7b-39a4-48aa-956d-50c827deba2a\"]" ]
        }''' # MultiPolicyRequest |  (optional)

    try:
        # Runs all policies for org
        
        results = SODPoliciesApi(api_client).start_sod_all_policies_for_org_v1()
        # Below is a request that includes all optional parameters
        # results = SODPoliciesApi(api_client).start_sod_all_policies_for_org_v1(new_multi_policy_request)
        print("The response of SODPoliciesApi->start_sod_all_policies_for_org_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SODPoliciesApi->start_sod_all_policies_for_org_v1: %s\n" % e)
```



[[Back to top]](#) 

## start-sod-policy-v1
Runs sod policy violation report
This invokes processing of violation report for given SOD policy. If the policy reports more than 5000 violations, the report returns with violation limit exceeded message.

[API Spec](https://developer.sailpoint.com/docs/api/start-sod-policy-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSodPoliciesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSodPoliciesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sod_policies.api.sod_policies_api import SODPoliciesApi
from sailpoint.sod_policies.api_client import ApiClient
from sailpoint.sod_policies.models.report_result_reference import ReportResultReference
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The SOD policy ID to run. # str | The SOD policy ID to run.

    try:
        # Runs sod policy violation report
        
        results = SODPoliciesApi(api_client).start_sod_policy_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = SODPoliciesApi(api_client).start_sod_policy_v1(id)
        print("The response of SODPoliciesApi->start_sod_policy_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SODPoliciesApi->start_sod_policy_v1: %s\n" % e)
```



[[Back to top]](#) 




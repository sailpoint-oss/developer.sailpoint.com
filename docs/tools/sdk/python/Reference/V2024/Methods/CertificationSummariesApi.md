---
id: v2024-certification-summaries
title: Certification_Summaries
pagination_label: Certification_Summaries
sidebar_label: Certification_Summaries
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Certification_Summaries', 'V2024Certification_Summaries'] 
slug: /tools/sdk/python/v2024/methods/certification-summaries
tags: ['SDK', 'Software Development Kit', 'Certification_Summaries', 'V2024Certification_Summaries']
---

# sailpoint.v2024.CertificationSummariesApi
  Use this API to implement certification summary functionality. 
With this functionality in place, administrators and designated certification reviewers can review summaries of identity certification campaigns and draw conclusions about the campaigns&#39; scope, security, and effectiveness. 
Implementing certification summary functionality improves organizations&#39; ability to review their [certifications](https://documentation.sailpoint.com/saas/user-help/certifications.html) and helps them satisfy audit and regulatory requirements by enabling them to trace access changes and the decisions made in their review processes. 

A certification refers to Identity Security Cloud&#39;s mechanism for reviewing a user&#39;s access to entitlements (sets of permissions) and approving or removing that access. 
These certifications serve as a way of showing that a user&#39;s access has been reviewed and approved. 
Multiple certifications by different reviewers are often required to approve a user&#39;s access. 
A set of multiple certifications is called a certification campaign. 

For example, an organization may use a Manager Certification as a way of showing that a user&#39;s access has been reviewed and approved by their manager, or if the certification is part of a campaign, that the user&#39;s access has been reviewed and approved by multiple managers. 
Once this certification has been completed, Identity Security Cloud  would provision all the access the user needs, nothing more. 

Certification summaries provide information about identity certification campaigns such as the identities involved, the number of decisions made, and the access changed. 
For example, an administrator or designated certification reviewer can examine the Manager Certification campaign to get an overview of how many entitlement decisions are made in that campaign as opposed to role decisions, which identities would be affected by changes to the campaign, and how those identities&#39; access would be affected.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-identity-access-summaries**](#get-identity-access-summaries) | **GET** `/certifications/{id}/access-summaries/{type}` | Access Summaries
[**get-identity-decision-summary**](#get-identity-decision-summary) | **GET** `/certifications/{id}/decision-summary` | Summary of Certification Decisions
[**get-identity-summaries**](#get-identity-summaries) | **GET** `/certifications/{id}/identity-summaries` | Identity Summaries for Campaign Certification
[**get-identity-summary**](#get-identity-summary) | **GET** `/certifications/{id}/identity-summaries/{identitySummaryId}` | Summary for Identity


## get-identity-access-summaries
Access Summaries
This API returns a list of access summaries for the specified identity campaign certification and type. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-identity-access-summaries)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The identity campaign certification ID
Path   | type | **str** | True  | The type of access review item to retrieve summaries for
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **completed**: *eq, ne*  **access.id**: *eq, in*  **access.name**: *eq, sw*  **entitlement.sourceName**: *eq, sw*  **accessProfile.sourceName**: *eq, sw*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.name**

### Return type
[**List[AccessSummary]**](../models/access-summary)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of access summaries | List[AccessSummary] |  -  |
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
from sailpoint.v2024.api.certification_summaries_api import CertificationSummariesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.access_summary import AccessSummary
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The identity campaign certification ID # str | The identity campaign certification ID
    type = 'ACCESS_PROFILE' # str | The type of access review item to retrieve summaries for # str | The type of access review item to retrieve summaries for
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'access.id eq \"ef38f94347e94562b5bb8424a56397d8\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **completed**: *eq, ne*  **access.id**: *eq, in*  **access.name**: *eq, sw*  **entitlement.sourceName**: *eq, sw*  **accessProfile.sourceName**: *eq, sw* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **completed**: *eq, ne*  **access.id**: *eq, in*  **access.name**: *eq, sw*  **entitlement.sourceName**: *eq, sw*  **accessProfile.sourceName**: *eq, sw* (optional)
    sorters = 'access.name' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.name** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.name** (optional)

    try:
        # Access Summaries
        
        results = CertificationSummariesApi(api_client).get_identity_access_summaries(id=id, type=type)
        # Below is a request that includes all optional parameters
        # results = CertificationSummariesApi(api_client).get_identity_access_summaries(id, type, limit, offset, count, filters, sorters)
        print("The response of CertificationSummariesApi->get_identity_access_summaries:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CertificationSummariesApi->get_identity_access_summaries: %s\n" % e)
```



[[Back to top]](#) 

## get-identity-decision-summary
Summary of Certification Decisions
This API returns a summary of the decisions made on an identity campaign certification. The decisions are summarized by type. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-identity-decision-summary)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The certification ID
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **identitySummary.id**: *eq, in*

### Return type
[**IdentityCertDecisionSummary**](../models/identity-cert-decision-summary)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Summary of the decisions made | IdentityCertDecisionSummary |  -  |
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
from sailpoint.v2024.api.certification_summaries_api import CertificationSummariesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.identity_cert_decision_summary import IdentityCertDecisionSummary
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The certification ID # str | The certification ID
    filters = 'identitySummary.id eq \"ef38f94347e94562b5bb8424a56397d8\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **identitySummary.id**: *eq, in* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **identitySummary.id**: *eq, in* (optional)

    try:
        # Summary of Certification Decisions
        
        results = CertificationSummariesApi(api_client).get_identity_decision_summary(id=id)
        # Below is a request that includes all optional parameters
        # results = CertificationSummariesApi(api_client).get_identity_decision_summary(id, filters)
        print("The response of CertificationSummariesApi->get_identity_decision_summary:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CertificationSummariesApi->get_identity_decision_summary: %s\n" % e)
```



[[Back to top]](#) 

## get-identity-summaries
Identity Summaries for Campaign Certification
This API returns a list of the identity summaries for a specific identity campaign certification. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-identity-summaries)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The identity campaign certification ID
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **completed**: *eq, ne*  **name**: *eq, sw*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name**

### Return type
[**List[CertificationIdentitySummary]**](../models/certification-identity-summary)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of identity summaries | List[CertificationIdentitySummary] |  -  |
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
from sailpoint.v2024.api.certification_summaries_api import CertificationSummariesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.certification_identity_summary import CertificationIdentitySummary
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The identity campaign certification ID # str | The identity campaign certification ID
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'id eq \"ef38f94347e94562b5bb8424a56397d8\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **completed**: *eq, ne*  **name**: *eq, sw* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **completed**: *eq, ne*  **name**: *eq, sw* (optional)
    sorters = 'name' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional)

    try:
        # Identity Summaries for Campaign Certification
        
        results = CertificationSummariesApi(api_client).get_identity_summaries(id=id)
        # Below is a request that includes all optional parameters
        # results = CertificationSummariesApi(api_client).get_identity_summaries(id, limit, offset, count, filters, sorters)
        print("The response of CertificationSummariesApi->get_identity_summaries:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CertificationSummariesApi->get_identity_summaries: %s\n" % e)
```



[[Back to top]](#) 

## get-identity-summary
Summary for Identity
This API returns the summary for an identity on a specified identity campaign certification. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-identity-summary)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The identity campaign certification ID
Path   | identity_summary_id | **str** | True  | The identity summary ID

### Return type
[**CertificationIdentitySummary**](../models/certification-identity-summary)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | An identity summary | CertificationIdentitySummary |  -  |
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
from sailpoint.v2024.api.certification_summaries_api import CertificationSummariesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.certification_identity_summary import CertificationIdentitySummary
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The identity campaign certification ID # str | The identity campaign certification ID
    identity_summary_id = '2c91808772a504f50172a9540e501ba8' # str | The identity summary ID # str | The identity summary ID

    try:
        # Summary for Identity
        
        results = CertificationSummariesApi(api_client).get_identity_summary(id=id, identity_summary_id=identity_summary_id)
        # Below is a request that includes all optional parameters
        # results = CertificationSummariesApi(api_client).get_identity_summary(id, identity_summary_id)
        print("The response of CertificationSummariesApi->get_identity_summary:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CertificationSummariesApi->get_identity_summary: %s\n" % e)
```



[[Back to top]](#) 




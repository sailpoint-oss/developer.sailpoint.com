# Intelligence

# sailpoint.intelligence.IntelligenceApi
  HTTP API that returns the Intelligence (identity context) for SecOps enrichment
use cases (SIEM/SOAR connectors, MCP, browser extension), and accepts asynchronous
response actions for remediation. Identity reads are backed by Atlas internal-REST
calls to MICE, Shelby List Accounts, SDS Search, IDA-outliers, and identity-history.

## License-based segmentation

- **&#x60;idn:response-and-remediation&#x60;** (required): enforced on all &#x60;/intelligence/*&#x60; routes.
- **&#x60;IDA-outliers&#x60;** (optional): governs the Human &#x60;outliers.rareAccess&#x60; slice only. When the
  tenant lacks this license, the &#x60;outliers&#x60; key is omitted.
- **&#x60;idg:base&#x60;** (optional): governs the root-level &#x60;identityGraph&#x60; deep link on aggregate
  responses. When the tenant lacks this license, &#x60;identityGraph&#x60; is omitted.
- **&#x60;idn:machine-identity-security&#x60;** (optional): governs the Human &#x60;nonHumanIdentityOwnership&#x60;
  slice. When the tenant lacks this license, &#x60;nonHumanIdentityOwnership&#x60; is omitted on the
  aggregate GET and the &#x60;/non-human-identity-ownership/\{category\}&#x60; child route returns
  **403 Forbidden**.

## Pagination

The aggregated Human GET embeds the first page of each paged slice. Each upstream paged call
sends &#x60;count&#x3D;true&#x60; and reads &#x60;X-Total-Count&#x60;. Parent slices expose &#x60;totalCount&#x60; when &#x60;items&#x60; is
non-empty and set &#x60;next&#x60; when &#x60;totalCount &gt; offset + len(items)&#x60; (aggregate offset is always 0).
Empty slices render as &#x60;items: []&#x60; with no &#x60;totalCount&#x60;. &#x60;privilegedAccess&#x60; is never paged and
carries no &#x60;totalCount&#x60;. When licensed, &#x60;nonHumanIdentityOwnership&#x60; pages each
&#x60;primaryOwned&#x60; / &#x60;secondaryOwned&#x60; bucket independently under &#x60;agents&#x60; and &#x60;applications&#x60;.
Non-human identity aggregate &#x60;accounts&#x60; includes &#x60;totalCount&#x60; and &#x60;next&#x60;; continue with
&#x60;GET .../accounts?isNHI&#x3D;true&#x60; (bare array response).

Human child routes (&#x60;/accounts&#x60;, &#x60;/outliers/rare-access&#x60;, &#x60;/access-history/*&#x60;,
&#x60;/non-human-identity-ownership/\{category\}&#x60;) follow the SailPoint V3 pattern: pass &#x60;count&#x3D;true&#x60;
to receive &#x60;X-Total-Count&#x60; (including &#x60;0&#x60; on empty pages). When &#x60;count&#x60; is omitted, upstream
count work is skipped and the header is omitted.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-response-action-v1**](#create-response-action-v1) | **POST** `/intelligence/v1/response-actions` | Create a response action
[**get-identity-intelligence-v1**](#get-identity-intelligence-v1) | **GET** `/intelligence/v1/identities` | Get identity by filter
[**get-intel-identity-access-item-history-v1**](#get-intel-identity-access-item-history-v1) | **GET** `/intelligence/v1/identities/{id}/access-history/access-items` | List identity access item history
[**get-intel-identity-accounts-v1**](#get-intel-identity-accounts-v1) | **GET** `/intelligence/v1/identities/{id}/accounts` | List identity accounts
[**get-intel-identity-certification-history-v1**](#get-intel-identity-certification-history-v1) | **GET** `/intelligence/v1/identities/{id}/access-history/certifications` | List identity certification history
[**get-intel-identity-non-human-identity-ownership-v1**](#get-intel-identity-non-human-identity-ownership-v1) | **GET** `/intelligence/v1/identities/{id}/non-human-identity-ownership/{category}` | List owned NHI identities
[**get-intel-identity-rare-access-v1**](#get-intel-identity-rare-access-v1) | **GET** `/intelligence/v1/identities/{id}/outliers/rare-access` | List identity rare access
[**get-response-action-status-v1**](#get-response-action-status-v1) | **GET** `/intelligence/v1/response-actions/{id}/status` | Get response action status


## create-response-action-v1
Create a response action
Requires tenant license idn:response-and-remediation.

Creates a response action: the request is validated, a requestId (the correlation id) is
minted, the action is recorded as SUBMITTED, and an event is published that triggers the
correlated workflow(s).

Returns HTTP 202 with the requestId, an initial SUBMITTED status, and a statusUrl. Poll
GET /intelligence/v1/response-actions/\{requestId\}/status for progress.


[API Spec](https://developer.sailpoint.com/docs/api/create-response-action-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | responseactioncreaterequest | [**Responseactioncreaterequest**](../models/responseactioncreaterequest) | True  | 

### Return type
[**Responseactionaccepted**](../models/responseactionaccepted)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | The response action was accepted and is being processed asynchronously. | Responseactionaccepted |  -  |
400 | Missing or invalid request body. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetIdentityIntelligenceV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetIdentityIntelligenceV1429Response |  -  |
500 | Internal or upstream server failure. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.intelligence.api.intelligence_api import IntelligenceApi
from sailpoint.intelligence.api_client import ApiClient
from sailpoint.intelligence.models.responseactionaccepted import Responseactionaccepted
from sailpoint.intelligence.models.responseactioncreaterequest import Responseactioncreaterequest
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    responseactioncreaterequest = '''{
          "actionType" : "DISABLE_ACCOUNT",
          "identityType" : "HUMAN",
          "identityId" : "2c918085842e69ae018428c919680149",
          "accountIds" : [ "2c918085abc000000000000000000001" ],
          "context" : {
            "reason" : "Contain compromised account",
            "externalAlertId" : "CS-FALCON-12345",
            "source" : "CROWDSTRIKE",
            "operator" : "soc-analyst@customer.com"
          }
        }''' # Responseactioncreaterequest | 

    try:
        # Create a response action
        new_responseactioncreaterequest = Responseactioncreaterequest.from_json(responseactioncreaterequest)
        results = IntelligenceApi(api_client).create_response_action_v1(responseactioncreaterequest=new_responseactioncreaterequest)
        # Below is a request that includes all optional parameters
        # results = IntelligenceApi(api_client).create_response_action_v1(new_responseactioncreaterequest)
        print("The response of IntelligenceApi->create_response_action_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IntelligenceApi->create_response_action_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-identity-intelligence-v1
Get identity by filter
Requires tenant license idn:response-and-remediation.

**Caution:** When Data Segmentation is enabled, generic API Management API keys are not tied to
a user identity and may fail or return incomplete data. Use a [personal access token](https://developer.sailpoint.com/docs/api/authentication/#generate-a-personal-access-token)
or other user-scoped OAuth token. See [API keys](https://documentation.sailpoint.com/saas/help/common/api_keys.html)
and [Data Segmentation](https://documentation.sailpoint.com/saas/help/segmentation/index.html).

Resolves exactly one identity using a single SCIM-style filters expression. Returns an enriched
Human or non-human identity (NHI) envelope. Single-clause filters only; unsupported fields or
operators return HTTP 400.


[API Spec](https://developer.sailpoint.com/docs/api/get-identity-intelligence-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | filters | **str** | True  | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **email**: *eq*  **opaqueIdentifier**: *eq*

### Return type
[**Intelidentityenvelope**](../models/intelidentityenvelope)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Exactly one identity matched. | Intelidentityenvelope |  -  |
400 | Invalid filters or unsupported filter field or operator. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetIdentityIntelligenceV1401Response |  -  |
403 | Unauthorized access | ErrorResponseDto |  -  |
404 | No identity matched the filter (detailCode IDC_IDENTITY_NOT_FOUND). | IntelIdentityNotFoundBody |  -  |
409 | Multiple identities matched the filter (detailCode IDC_IDENTITY_AMBIGUOUS). | Intelidentityambiguousbody |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetIdentityIntelligenceV1429Response |  -  |
500 | Internal or upstream server failure. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.intelligence.api.intelligence_api import IntelligenceApi
from sailpoint.intelligence.api_client import ApiClient
from sailpoint.intelligence.models.intelidentityenvelope import Intelidentityenvelope
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    filters = 'id eq \"ef38f94347e94562b5bb8424a56397d8\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **email**: *eq*  **opaqueIdentifier**: *eq* # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **email**: *eq*  **opaqueIdentifier**: *eq*

    try:
        # Get identity by filter
        
        results = IntelligenceApi(api_client).get_identity_intelligence_v1(filters=filters)
        # Below is a request that includes all optional parameters
        # results = IntelligenceApi(api_client).get_identity_intelligence_v1(filters)
        print("The response of IntelligenceApi->get_identity_intelligence_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IntelligenceApi->get_identity_intelligence_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-intel-identity-access-item-history-v1
List identity access item history
Continuation endpoint for the parent response's `accessHistory.accessItems.next` link.
Returns one page of access-item history events for the supplied limit and offset values.
Pass `count=true` to receive `X-Total-Count` (including `0` on empty pages).
Unsupported event types and per-record decode failures are dropped server-side.
Requires tenant license idn:response-and-remediation.

Not applicable to non-human identities.


[API Spec](https://developer.sailpoint.com/docs/api/get-intel-identity-access-item-history-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Non-empty identity id path segment for Intelligence sub-resources.
  Query | limit | **int** |   (optional) (default to 250) | Page size. Defaults to 250; values above 250 are rejected with 400.
  Query | offset | **int** |   (optional) (default to 0) | Zero-based page offset. Defaults to 0.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[IntelAccessItemHistoryEvent]**](../models/intel-access-item-history-event)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | One page of access-item history events. | List[IntelAccessItemHistoryEvent] |  * X-Total-Count - Total number of owned non-human identities for the requested ownership role; present only when `count=true` was sent (including `0` on empty pages).  |
400 | Invalid path or query parameters. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetIdentityIntelligenceV1401Response |  -  |
403 | Unauthorized access | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetIdentityIntelligenceV1429Response |  -  |
500 | Internal or upstream server failure. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.intelligence.api.intelligence_api import IntelligenceApi
from sailpoint.intelligence.api_client import ApiClient
from sailpoint.intelligence.models.intel_access_item_history_event import IntelAccessItemHistoryEvent
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Non-empty identity id path segment for Intelligence sub-resources. # str | Non-empty identity id path segment for Intelligence sub-resources.
    limit = 250 # int | Page size. Defaults to 250; values above 250 are rejected with 400. (optional) (default to 250) # int | Page size. Defaults to 250; values above 250 are rejected with 400. (optional) (default to 250)
    offset = 0 # int | Zero-based page offset. Defaults to 0. (optional) (default to 0) # int | Zero-based page offset. Defaults to 0. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)

    try:
        # List identity access item history
        
        results = IntelligenceApi(api_client).get_intel_identity_access_item_history_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = IntelligenceApi(api_client).get_intel_identity_access_item_history_v1(id, limit, offset, count)
        print("The response of IntelligenceApi->get_intel_identity_access_item_history_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IntelligenceApi->get_intel_identity_access_item_history_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-intel-identity-accounts-v1
List identity accounts
Continuation endpoint for `accounts.next`. Pass `count=true` for `X-Total-Count`.

- Human (default): omit `isNHI` or set it to `false`. Slice object (`items`).
- Non-human identity (NHI): set `isNHI=true` (required for NHI aggregate `accounts.next` links). Bare JSON array.


[API Spec](https://developer.sailpoint.com/docs/api/get-intel-identity-accounts-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Non-empty identity id path segment for Intelligence sub-resources.
  Query | limit | **int** |   (optional) (default to 250) | Page size. Defaults to 250; values above 250 are rejected with 400.
  Query | offset | **int** |   (optional) (default to 0) | Zero-based page offset. Defaults to 0.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | is_nhi | **bool** |   (optional) (default to False) | NHI accounts when `true` (bare array). Human accounts when omitted or `false` (slice object). 

### Return type
[**GetIntelIdentityAccountsV1200Response**](../models/get-intel-identity-accounts-v1200-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Human path returns an accounts slice object. NHI path (&#x60;isNHI&#x3D;true&#x60;) returns a bare array. | GetIntelIdentityAccountsV1200Response |  * X-Total-Count - Total number of owned non-human identities for the requested ownership role; present only when `count=true` was sent (including `0` on empty pages).  |
400 | Invalid path or query parameters. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetIdentityIntelligenceV1401Response |  -  |
403 | Unauthorized access | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetIdentityIntelligenceV1429Response |  -  |
500 | Internal or upstream server failure. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.intelligence.api.intelligence_api import IntelligenceApi
from sailpoint.intelligence.api_client import ApiClient
from sailpoint.intelligence.models.get_intel_identity_accounts_v1200_response import GetIntelIdentityAccountsV1200Response
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Non-empty identity id path segment for Intelligence sub-resources. # str | Non-empty identity id path segment for Intelligence sub-resources.
    limit = 250 # int | Page size. Defaults to 250; values above 250 are rejected with 400. (optional) (default to 250) # int | Page size. Defaults to 250; values above 250 are rejected with 400. (optional) (default to 250)
    offset = 0 # int | Zero-based page offset. Defaults to 0. (optional) (default to 0) # int | Zero-based page offset. Defaults to 0. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    is_nhi = False # bool | NHI accounts when `true` (bare array). Human accounts when omitted or `false` (slice object).  (optional) (default to False) # bool | NHI accounts when `true` (bare array). Human accounts when omitted or `false` (slice object).  (optional) (default to False)

    try:
        # List identity accounts
        
        results = IntelligenceApi(api_client).get_intel_identity_accounts_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = IntelligenceApi(api_client).get_intel_identity_accounts_v1(id, limit, offset, count, is_nhi)
        print("The response of IntelligenceApi->get_intel_identity_accounts_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IntelligenceApi->get_intel_identity_accounts_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-intel-identity-certification-history-v1
List identity certification history
Continuation endpoint for the parent response's `accessHistory.certifications.next` link.
Returns one page of certification history events for the supplied limit and offset values.
Pass `count=true` to receive `X-Total-Count` (including `0` on empty pages).
Per-record decode failures are dropped server-side.
Requires tenant license idn:response-and-remediation.

Not applicable to non-human identities.


[API Spec](https://developer.sailpoint.com/docs/api/get-intel-identity-certification-history-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Non-empty identity id path segment for Intelligence sub-resources.
  Query | limit | **int** |   (optional) (default to 250) | Page size. Defaults to 250; values above 250 are rejected with 400.
  Query | offset | **int** |   (optional) (default to 0) | Zero-based page offset. Defaults to 0.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[IntelCertificationHistoryEvent]**](../models/intel-certification-history-event)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | One page of certification history events. | List[IntelCertificationHistoryEvent] |  * X-Total-Count - Total number of owned non-human identities for the requested ownership role; present only when `count=true` was sent (including `0` on empty pages).  |
400 | Invalid path or query parameters. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetIdentityIntelligenceV1401Response |  -  |
403 | Unauthorized access | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetIdentityIntelligenceV1429Response |  -  |
500 | Internal or upstream server failure. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.intelligence.api.intelligence_api import IntelligenceApi
from sailpoint.intelligence.api_client import ApiClient
from sailpoint.intelligence.models.intel_certification_history_event import IntelCertificationHistoryEvent
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Non-empty identity id path segment for Intelligence sub-resources. # str | Non-empty identity id path segment for Intelligence sub-resources.
    limit = 250 # int | Page size. Defaults to 250; values above 250 are rejected with 400. (optional) (default to 250) # int | Page size. Defaults to 250; values above 250 are rejected with 400. (optional) (default to 250)
    offset = 0 # int | Zero-based page offset. Defaults to 0. (optional) (default to 0) # int | Zero-based page offset. Defaults to 0. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)

    try:
        # List identity certification history
        
        results = IntelligenceApi(api_client).get_intel_identity_certification_history_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = IntelligenceApi(api_client).get_intel_identity_certification_history_v1(id, limit, offset, count)
        print("The response of IntelligenceApi->get_intel_identity_certification_history_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IntelligenceApi->get_intel_identity_certification_history_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-intel-identity-non-human-identity-ownership-v1
List owned NHI identities
Continuation endpoint for a human parent's
`nonHumanIdentityOwnership.{category}.primaryOwned.next` or
`nonHumanIdentityOwnership.{category}.secondaryOwned.next` link. Returns a bare JSON array of
owned non-human identity summary rows for the given `category`, optional `ownershipRole`,
`limit`, and `offset`. Wire items match the aggregate ownership item shape
(`{ id, displayName, source? }`).

When `ownershipRole` is omitted, the request defaults to `primary`. Pass `count=true` to
receive `X-Total-Count` (including `0` on empty pages). The `filters` query parameter is not
supported on this route (HTTP 400).

Requires tenant licenses `idn:response-and-remediation` and `idn:machine-identity-security`.
Tenants without `idn:machine-identity-security` receive HTTP 403.

Not applicable to non-human identities (no ownership slice on the NHI envelope).


[API Spec](https://developer.sailpoint.com/docs/api/get-intel-identity-non-human-identity-ownership-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Non-empty identity id path segment for Intelligence sub-resources.
Path   | category | **str** | True  | Non-human identity ownership category. Use `agents` for AI Agent subtypes and `applications` for Application subtypes. 
  Query | ownership_role | **str** |   (optional) (default to primary) | Optional ownership role discriminator. When set to `primary` or `secondary`, returns one paged role bucket. When omitted, defaults to `primary`. 
  Query | limit | **int** |   (optional) (default to 250) | Page size. Defaults to 250; values above 250 are rejected with 400.
  Query | offset | **int** |   (optional) (default to 0) | Zero-based page offset. Defaults to 0.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[Intelnonhumanidentityownershipitem]**](../models/intelnonhumanidentityownershipitem)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | One page of owned non-human identities for the requested category and role. | List[Intelnonhumanidentityownershipitem] |  * X-Total-Count - Total number of owned non-human identities for the requested ownership role; present only when `count=true` was sent (including `0` on empty pages).  |
400 | Invalid path or query parameters, including invalid &#x60;category&#x60;, invalid &#x60;ownershipRole&#x60;, unsupported &#x60;filters&#x60;, or invalid &#x60;limit&#x60;/&#x60;offset&#x60;/&#x60;count&#x60;.  | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetIdentityIntelligenceV1401Response |  -  |
403 | Unauthorized access, or tenant lacks the &#x60;idn:machine-identity-security&#x60; license required for this route.  | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetIdentityIntelligenceV1429Response |  -  |
500 | Internal or upstream server failure. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.intelligence.api.intelligence_api import IntelligenceApi
from sailpoint.intelligence.api_client import ApiClient
from sailpoint.intelligence.models.intelnonhumanidentityownershipitem import Intelnonhumanidentityownershipitem
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Non-empty identity id path segment for Intelligence sub-resources. # str | Non-empty identity id path segment for Intelligence sub-resources.
    category = 'agents' # str | Non-human identity ownership category. Use `agents` for AI Agent subtypes and `applications` for Application subtypes.  # str | Non-human identity ownership category. Use `agents` for AI Agent subtypes and `applications` for Application subtypes. 
    ownership_role = primary # str | Optional ownership role discriminator. When set to `primary` or `secondary`, returns one paged role bucket. When omitted, defaults to `primary`.  (optional) (default to primary) # str | Optional ownership role discriminator. When set to `primary` or `secondary`, returns one paged role bucket. When omitted, defaults to `primary`.  (optional) (default to primary)
    limit = 250 # int | Page size. Defaults to 250; values above 250 are rejected with 400. (optional) (default to 250) # int | Page size. Defaults to 250; values above 250 are rejected with 400. (optional) (default to 250)
    offset = 0 # int | Zero-based page offset. Defaults to 0. (optional) (default to 0) # int | Zero-based page offset. Defaults to 0. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)

    try:
        # List owned NHI identities
        
        results = IntelligenceApi(api_client).get_intel_identity_non_human_identity_ownership_v1(id=id, category=category)
        # Below is a request that includes all optional parameters
        # results = IntelligenceApi(api_client).get_intel_identity_non_human_identity_ownership_v1(id, category, ownership_role, limit, offset, count)
        print("The response of IntelligenceApi->get_intel_identity_non_human_identity_ownership_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IntelligenceApi->get_intel_identity_non_human_identity_ownership_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-intel-identity-rare-access-v1
List identity rare access
Continuation endpoint for the parent response's `outliers.rareAccess.next` link.
Resolves the identity's first outlier, then returns one page of rare access
items for the supplied limit and offset values. Pass `count=true` to receive
`X-Total-Count` (including `0` on empty pages). An identity with no outlier
returns an empty array with `X-Total-Count: 0` when `count=true`. Requires
tenant license idn:response-and-remediation and the IDA-outliers license.

Not applicable to non-human identities (no outliers slice on the NHI envelope).


[API Spec](https://developer.sailpoint.com/docs/api/get-intel-identity-rare-access-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Non-empty identity id path segment for Intelligence sub-resources.
  Query | limit | **int** |   (optional) (default to 250) | Page size. Defaults to 250; values above 250 are rejected with 400.
  Query | offset | **int** |   (optional) (default to 0) | Zero-based page offset. Defaults to 0.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[IntelOutlierAccessItem]**](../models/intel-outlier-access-item)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | One page of rare access items. | List[IntelOutlierAccessItem] |  * X-Total-Count - Total number of owned non-human identities for the requested ownership role; present only when `count=true` was sent (including `0` on empty pages).  |
400 | Invalid path or query parameters. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetIdentityIntelligenceV1401Response |  -  |
403 | Unauthorized access | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetIdentityIntelligenceV1429Response |  -  |
500 | Internal or upstream server failure. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.intelligence.api.intelligence_api import IntelligenceApi
from sailpoint.intelligence.api_client import ApiClient
from sailpoint.intelligence.models.intel_outlier_access_item import IntelOutlierAccessItem
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Non-empty identity id path segment for Intelligence sub-resources. # str | Non-empty identity id path segment for Intelligence sub-resources.
    limit = 250 # int | Page size. Defaults to 250; values above 250 are rejected with 400. (optional) (default to 250) # int | Page size. Defaults to 250; values above 250 are rejected with 400. (optional) (default to 250)
    offset = 0 # int | Zero-based page offset. Defaults to 0. (optional) (default to 0) # int | Zero-based page offset. Defaults to 0. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)

    try:
        # List identity rare access
        
        results = IntelligenceApi(api_client).get_intel_identity_rare_access_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = IntelligenceApi(api_client).get_intel_identity_rare_access_v1(id, limit, offset, count)
        print("The response of IntelligenceApi->get_intel_identity_rare_access_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IntelligenceApi->get_intel_identity_rare_access_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-response-action-status-v1
Get response action status
Requires tenant license idn:response-and-remediation.

Returns the current aggregate status of a previously submitted response action, identified by
the requestId returned from POST /intelligence/v1/response-actions.

Supported actionType values: DISABLE_IDENTITY, DISABLE_ACCOUNT.


[API Spec](https://developer.sailpoint.com/docs/api/get-response-action-status-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The requestId of the response action to look up.

### Return type
[**Responseactionstatus**](../models/responseactionstatus)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The current status of the response action. | Responseactionstatus |  -  |
400 | Invalid path parameter. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetIdentityIntelligenceV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | No response action exists for the supplied requestId. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetIdentityIntelligenceV1429Response |  -  |
500 | Internal or upstream server failure. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.intelligence.api.intelligence_api import IntelligenceApi
from sailpoint.intelligence.api_client import ApiClient
from sailpoint.intelligence.models.responseactionstatus import Responseactionstatus
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '3f1e6c9a-8b2d-4e5f-9a1b-2c3d4e5f6a7b' # str | The requestId of the response action to look up. # str | The requestId of the response action to look up.

    try:
        # Get response action status
        
        results = IntelligenceApi(api_client).get_response_action_status_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = IntelligenceApi(api_client).get_response_action_status_v1(id)
        print("The response of IntelligenceApi->get_response_action_status_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IntelligenceApi->get_response_action_status_v1: %s\n" % e)
```



[[Back to top]](#) 




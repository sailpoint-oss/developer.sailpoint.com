---
id: v2024-public-identities-config
title: Public_Identities_Config
pagination_label: Public_Identities_Config
sidebar_label: Public_Identities_Config
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Public_Identities_Config', 'V2024Public_Identities_Config'] 
slug: /tools/sdk/python/v2024/methods/public-identities-config
tags: ['SDK', 'Software Development Kit', 'Public_Identities_Config', 'V2024Public_Identities_Config']
---

# sailpoint.v2024.PublicIdentitiesConfigApi
  Use this API to implement public identity configuration functionality. 
With this functionality in place, administrators can make up to 5 identity attributes publicly visible so other non-administrator users can see the relevant information they need to make decisions. 
This can be helpful for approvers making approvals, certification reviewers, managers viewing their direct reports&#39; access, and source owners viewing their tasks.

By default, non-administrators can select an identity and view the following attributes: email, lifecycle state, and manager. 
However, it may be helpful for a non-administrator reviewer to see other identity attributes like department, region, title, etc.
Administrators can use this API to make those necessary identity attributes public to non-administrators. 

For example, a non-administrator deciding whether to approve another identity&#39;s request for access to the Workday application, whose access may be restricted to members of the HR department, would want to know whether the identity is a member of the HR department. 
If an administrator has used [Update Public Identity Config](https://developer.sailpoint.com/docs/api/v2024/update-public-identity-config/) to make the &quot;department&quot; attribute public, the approver can see the department and make a decision without requesting any more information.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-public-identity-config**](#get-public-identity-config) | **GET** `/public-identities-config` | Get the public identities configuration
[**update-public-identity-config**](#update-public-identity-config) | **PUT** `/public-identities-config` | Update the public identities configuration


## get-public-identity-config
Get the public identities configuration
Returns the publicly visible attributes of an identity available to request approvers for Access Requests and Certification Campaigns.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-public-identity-config)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**PublicIdentityConfig**](../models/public-identity-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Request succeeded. | PublicIdentityConfig |  -  |
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
from sailpoint.v2024.api.public_identities_config_api import PublicIdentitiesConfigApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.public_identity_config import PublicIdentityConfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # Get the public identities configuration
        
        results = PublicIdentitiesConfigApi(api_client).get_public_identity_config()
        # Below is a request that includes all optional parameters
        # results = PublicIdentitiesConfigApi(api_client).get_public_identity_config()
        print("The response of PublicIdentitiesConfigApi->get_public_identity_config:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling PublicIdentitiesConfigApi->get_public_identity_config: %s\n" % e)
```



[[Back to top]](#) 

## update-public-identity-config
Update the public identities configuration
Updates the publicly visible attributes of an identity available to request approvers for Access Requests and Certification Campaigns.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/update-public-identity-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | public_identity_config | [**PublicIdentityConfig**](../models/public-identity-config) | True  | 

### Return type
[**PublicIdentityConfig**](../models/public-identity-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Request succeeded. | PublicIdentityConfig |  -  |
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
from sailpoint.v2024.api.public_identities_config_api import PublicIdentitiesConfigApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.public_identity_config import PublicIdentityConfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    public_identity_config = '''{
          "modified" : "2018-06-25T20:22:28.104Z",
          "attributes" : [ {
            "name" : "Country",
            "key" : "country"
          }, {
            "name" : "Country",
            "key" : "country"
          } ],
          "modifiedBy" : {
            "name" : "Thomas Edison",
            "id" : "2c9180a46faadee4016fb4e018c20639",
            "type" : "IDENTITY"
          }
        }''' # PublicIdentityConfig | 

    try:
        # Update the public identities configuration
        new_public_identity_config = PublicIdentityConfig.from_json(public_identity_config)
        results = PublicIdentitiesConfigApi(api_client).update_public_identity_config(public_identity_config=new_public_identity_config)
        # Below is a request that includes all optional parameters
        # results = PublicIdentitiesConfigApi(api_client).update_public_identity_config(new_public_identity_config)
        print("The response of PublicIdentitiesConfigApi->update_public_identity_config:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling PublicIdentitiesConfigApi->update_public_identity_config: %s\n" % e)
```



[[Back to top]](#) 




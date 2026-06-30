---
id: public-identities-config
title: Public_Identities_Config
pagination_label: Public_Identities_Config
sidebar_label: Public_Identities_Config
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Public_Identities_Config', 'Public_Identities_Config'] 
slug: /tools/sdk/python/public-identities-config/methods/public-identities-config
tags: ['SDK', 'Software Development Kit', 'Public_Identities_Config', 'Public_Identities_Config']
---

# sailpoint.public_identities_config.PublicIdentitiesConfigApi
  Use this API to implement public identity configuration functionality. 
With this functionality in place, administrators can make up to 5 identity attributes publicly visible so other non-administrator users can see the relevant information they need to make decisions. 
This can be helpful for approvers making approvals, certification reviewers, managers viewing their direct reports&#39; access, and source owners viewing their tasks.

By default, non-administrators can select an identity and view the following attributes: email, lifecycle state, and manager. 
However, it may be helpful for a non-administrator reviewer to see other identity attributes like department, region, title, etc.
Administrators can use this API to make those necessary identity attributes public to non-administrators. 

For example, a non-administrator deciding whether to approve another identity&#39;s request for access to the Workday application, whose access may be restricted to members of the HR department, would want to know whether the identity is a member of the HR department. 
If an administrator has used [Update Public Identity Config](https://developer.sailpoint.com/docs/api/v2025/update-public-identity-config/) to make the &quot;department&quot; attribute public, the approver can see the department and make a decision without requesting any more information.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-public-identity-config-v1**](#get-public-identity-config-v1) | **GET** `/public-identities-config/v1` | Get the public identities configuration
[**update-public-identity-config-v1**](#update-public-identity-config-v1) | **PUT** `/public-identities-config/v1` | Update the public identities configuration


## get-public-identity-config-v1
Get the public identities configuration
Returns the publicly visible attributes of an identity available to request approvers for Access Requests and Certification Campaigns.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-public-identity-config-v1)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**Publicidentityconfig**](../models/publicidentityconfig)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Request succeeded. | Publicidentityconfig |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetPublicIdentityConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetPublicIdentityConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.public_identities_config.api.public_identities_config_api import PublicIdentitiesConfigApi
from sailpoint.public_identities_config.api_client import ApiClient
from sailpoint.public_identities_config.models.publicidentityconfig import Publicidentityconfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # Get the public identities configuration
        
        results = PublicIdentitiesConfigApi(api_client).get_public_identity_config_v1()
        # Below is a request that includes all optional parameters
        # results = PublicIdentitiesConfigApi(api_client).get_public_identity_config_v1()
        print("The response of PublicIdentitiesConfigApi->get_public_identity_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling PublicIdentitiesConfigApi->get_public_identity_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-public-identity-config-v1
Update the public identities configuration
Updates the publicly visible attributes of an identity available to request approvers for Access Requests and Certification Campaigns.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-public-identity-config-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | publicidentityconfig | [**Publicidentityconfig**](../models/publicidentityconfig) | True  | 

### Return type
[**Publicidentityconfig**](../models/publicidentityconfig)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Request succeeded. | Publicidentityconfig |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetPublicIdentityConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetPublicIdentityConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.public_identities_config.api.public_identities_config_api import PublicIdentitiesConfigApi
from sailpoint.public_identities_config.api_client import ApiClient
from sailpoint.public_identities_config.models.publicidentityconfig import Publicidentityconfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    publicidentityconfig = '''sailpoint.public_identities_config.Publicidentityconfig()''' # Publicidentityconfig | 

    try:
        # Update the public identities configuration
        new_publicidentityconfig = Publicidentityconfig.from_json(publicidentityconfig)
        results = PublicIdentitiesConfigApi(api_client).update_public_identity_config_v1(publicidentityconfig=new_publicidentityconfig)
        # Below is a request that includes all optional parameters
        # results = PublicIdentitiesConfigApi(api_client).update_public_identity_config_v1(new_publicidentityconfig)
        print("The response of PublicIdentitiesConfigApi->update_public_identity_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling PublicIdentitiesConfigApi->update_public_identity_config_v1: %s\n" % e)
```



[[Back to top]](#) 




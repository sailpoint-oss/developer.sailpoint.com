---
id: certification-campaigns
title: Certification_Campaigns
pagination_label: Certification_Campaigns
sidebar_label: Certification_Campaigns
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Certification_Campaigns', 'Certification_Campaigns'] 
slug: /tools/sdk/python/certification-campaigns/methods/certification-campaigns
tags: ['SDK', 'Software Development Kit', 'Certification_Campaigns', 'Certification_Campaigns']
---

# sailpoint.certification_campaigns.CertificationCampaignsApi
  Use this API to implement certification campaign functionality.
With this functionality in place, administrators can create, customize, and manage certification campaigns for their organizations&#39; use. 
Certification campaigns provide Identity Security Cloud users with an interactive review process they can use to identify and verify access to systems. 
Campaigns help organizations reduce risk of inappropriate access and satisfy audit requirements. 

A certification refers to Identity Security Cloud&#39;s mechanism for reviewing a user&#39;s access to entitlements (sets of permissions) and approving or removing that access. 
These certifications serve as a way of showing that a user&#39;s access has been reviewed and approved. 
Multiple certifications by different reviewers are often required to approve a user&#39;s access. 
A set of multiple certifications is called a certification campaign. 

For example, an organization may use a Manager Certification campaign as a way of showing that a user&#39;s access has been reviewed and approved by multiple managers. 
Once this campaign has been completed, Identity Security Cloud would provision all the access the user needs, nothing more. 

Identity Security Cloud provides two simple campaign types users can create without using search queries, Manager and Source Owner campaigns:

You can create these types of campaigns without using any search queries in Identity Security Cloud: 

- ManagerCampaign: Identity Security Cloud provides this campaign type as a way to ensure that an identity&#39;s access is certified by their managers. 
You only need to provide a name and description to create one. 

- Source Owner Campaign: Identity Security Cloud provides this campaign type as a way to ensure that an identity&#39;s access to a source is certified by its source owners. 
You only need to provide a name and description to create one. 
You can specify the sources whose owners you want involved or just run it across all sources. 

For more information about these campaign types, refer to [Starting a Manager or Source Owner Campaign](https://documentation.sailpoint.com/saas/help/certs/starting_campaign.html).

One useful way to create certification campaigns in Identity Security Cloud is to use a specific search and then run a campaign on the results returned by that search. 
This allows you to be much more specific about whom you are certifying in your campaigns and what access you are certifying in your campaigns. 
For example, you can search for all identities who are managed by &quot;Amanda.Ross&quot; and also have the access to the &quot;Accounting&quot; role and then run a certification campaign based on that search to ensure that the returned identities are appropriately certified. 

You can use Identity Security Cloud search queries to create these types of campaigns: 

- Identities: Use this campaign type to review and revoke access items for specific identities. 
You can either build a search query and create a campaign certifying all identities returned by that query, or you can search for individual identities and add those identities to the certification campaign. 

- Access Items: Use this campaign type to review and revoke a set of roles, access profiles, or entitlements from the identities that have them. 
You can either build a search query and create a campaign certifying all access items returned by that query, or you can search for individual access items and add those items to the certification campaign. 

- Role Composition: Use this campaign type to review a role&#39;s composition, including its title, description, and membership criteria. 
You can either build a search query and create a campaign certifying all roles returned by that query, or you can search for individual roles and add those roles to the certification campaign. 

- Uncorrelated Accounts: Use this campaign type to certify source accounts that aren&#39;t linked to an authoritative identity in Identity Security Cloud. 
You can use this campaign type to view all the uncorrelated accounts for a source and certify them. 

For more information about search-based campaigns, refer to [Starting a Campaign from Search](https://documentation.sailpoint.com/saas/help/certs/starting_search_campaign.html).

Once you have generated your campaign, it becomes available for preview. 
An administrator can review the campaign and make changes, or if it&#39;s ready and accurate, activate it. 

Once the campaign is active, organization administrators or certification administrators can designate other Identity Security Cloud users as certification reviewers. 
Those reviewers can view any of the certifications they either need to review (active) or have already reviewed (completed).

When a certification campaign is in progress, certification reviewers see the listed active certifications whose involved identities they can review. 
Reviewers can then make decisions to grant or revoke access, as well as reassign the certification to another reviewer. If the reviewer chooses this option, they must provide a reason for reassignment in the form of a comment.

Once a reviewer has made decisions on all the certification&#39;s involved access items, he or she must &quot;Sign Off&quot; to complete the review process.
Doing so converts the certification into read-only status, preventing any further changes to the review decisions and deleting the work item (task) from the reviewer&#39;s list of work items. 

Once all the reviewers have signed off, the certification campaign either completes or, if any reviewers decided to revoke access for any of the involved identities, it moves into a remediation phase. 
In the remediation phase, identities&#39; entitlements are altered to remove any entitlements marked for revocation.
In this situation, the certification campaign completes once all the remediation requests are completed. 

The end of a certification campaign is determined by its deadline, its completion status, or by an administrator&#39;s decision. 

For more information about certifications and certification campaigns, refer to [Certifications](https://documentation.sailpoint.com/saas/user-help/certs/reviewing/index.html).
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**complete-campaign-v1**](#complete-campaign-v1) | **POST** `/campaigns/v1/{id}/complete` | Complete a campaign
[**create-campaign-template-v1**](#create-campaign-template-v1) | **POST** `/campaign-templates/v1` | Create a campaign template
[**create-campaign-v1**](#create-campaign-v1) | **POST** `/campaigns/v1` | Create a campaign
[**delete-campaign-template-schedule-v1**](#delete-campaign-template-schedule-v1) | **DELETE** `/campaign-templates/v1/{id}/schedule` | Delete campaign template schedule
[**delete-campaign-template-v1**](#delete-campaign-template-v1) | **DELETE** `/campaign-templates/v1/{id}` | Delete a campaign template
[**delete-campaigns-v1**](#delete-campaigns-v1) | **POST** `/campaigns/v1/delete` | Delete campaigns
[**get-active-campaigns-v1**](#get-active-campaigns-v1) | **GET** `/campaigns/v1` | List campaigns
[**get-campaign-reports-config-v1**](#get-campaign-reports-config-v1) | **GET** `/campaigns/v1/reports-configuration` | Get campaign reports configuration
[**get-campaign-reports-v1**](#get-campaign-reports-v1) | **GET** `/campaigns/v1/{id}/reports` | Get campaign reports
[**get-campaign-template-schedule-v1**](#get-campaign-template-schedule-v1) | **GET** `/campaign-templates/v1/{id}/schedule` | Get campaign template schedule
[**get-campaign-template-v1**](#get-campaign-template-v1) | **GET** `/campaign-templates/v1/{id}` | Get a campaign template
[**get-campaign-templates-v1**](#get-campaign-templates-v1) | **GET** `/campaign-templates/v1` | List campaign templates
[**get-campaign-v1**](#get-campaign-v1) | **GET** `/campaigns/v1/{id}` | Get campaign
[**move-v1**](#move-v1) | **POST** `/campaigns/v1/{id}/reassign` | Reassign certifications
[**patch-campaign-template-v1**](#patch-campaign-template-v1) | **PATCH** `/campaign-templates/v1/{id}` | Update a campaign template
[**set-campaign-reports-config-v1**](#set-campaign-reports-config-v1) | **PUT** `/campaigns/v1/reports-configuration` | Set campaign reports configuration
[**set-campaign-template-schedule-v1**](#set-campaign-template-schedule-v1) | **PUT** `/campaign-templates/v1/{id}/schedule` | Set campaign template schedule
[**start-campaign-remediation-scan-v1**](#start-campaign-remediation-scan-v1) | **POST** `/campaigns/v1/{id}/run-remediation-scan` | Run campaign remediation scan
[**start-campaign-report-v1**](#start-campaign-report-v1) | **POST** `/campaigns/v1/{id}/run-report/{type}` | Run campaign report
[**start-campaign-v1**](#start-campaign-v1) | **POST** `/campaigns/v1/{id}/activate` | Activate a campaign
[**start-generate-campaign-template-v1**](#start-generate-campaign-template-v1) | **POST** `/campaign-templates/v1/{id}/generate` | Generate a campaign from template
[**update-campaign-v1**](#update-campaign-v1) | **PATCH** `/campaigns/v1/{id}` | Update a campaign


## complete-campaign-v1
Complete a campaign
:::caution

This endpoint will run successfully for any campaigns that are **past due**.

This endpoint will return a content error if the campaign is **not past due**.

:::

Use this API to complete a certification campaign. This functionality is provided to admins so that they
can complete a certification even if all items have not been completed.


[API Spec](https://developer.sailpoint.com/docs/api/v1/complete-campaign-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Campaign ID.
 Body  | campaigncompleteoptions | [**Campaigncompleteoptions**](../models/campaigncompleteoptions) |   (optional) | Optional. Default behavior is for the campaign to auto-approve upon completion, unless autoCompleteAction=REVOKE

### Return type
**object**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted - Returned if the request was successfully accepted into the system. | object |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetActiveCampaignsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetActiveCampaignsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.certification_campaigns.api.certification_campaigns_api import CertificationCampaignsApi
from sailpoint.certification_campaigns.api_client import ApiClient
from sailpoint.certification_campaigns.models.campaigncompleteoptions import Campaigncompleteoptions
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Campaign ID. # str | Campaign ID.
    campaigncompleteoptions = '''sailpoint.certification_campaigns.Campaigncompleteoptions()''' # Campaigncompleteoptions | Optional. Default behavior is for the campaign to auto-approve upon completion, unless autoCompleteAction=REVOKE (optional)

    try:
        # Complete a campaign
        
        results = CertificationCampaignsApi(api_client).complete_campaign_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = CertificationCampaignsApi(api_client).complete_campaign_v1(id, new_campaigncompleteoptions)
        print("The response of CertificationCampaignsApi->complete_campaign_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CertificationCampaignsApi->complete_campaign_v1: %s\n" % e)
```



[[Back to top]](#) 

## create-campaign-template-v1
Create a campaign template
Use this API to create a certification campaign template based on campaign.


[API Spec](https://developer.sailpoint.com/docs/api/v1/create-campaign-template-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | campaigntemplate | [**Campaigntemplate**](../models/campaigntemplate) | True  | 

### Return type
[**Campaigntemplate**](../models/campaigntemplate)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Created successfully. | Campaigntemplate |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetActiveCampaignsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetActiveCampaignsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.certification_campaigns.api.certification_campaigns_api import CertificationCampaignsApi
from sailpoint.certification_campaigns.api_client import ApiClient
from sailpoint.certification_campaigns.models.campaigntemplate import Campaigntemplate
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    campaigntemplate = '''sailpoint.certification_campaigns.Campaigntemplate()''' # Campaigntemplate | 

    try:
        # Create a campaign template
        new_campaigntemplate = Campaigntemplate.from_json(campaigntemplate)
        results = CertificationCampaignsApi(api_client).create_campaign_template_v1(campaigntemplate=new_campaigntemplate)
        # Below is a request that includes all optional parameters
        # results = CertificationCampaignsApi(api_client).create_campaign_template_v1(new_campaigntemplate)
        print("The response of CertificationCampaignsApi->create_campaign_template_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CertificationCampaignsApi->create_campaign_template_v1: %s\n" % e)
```



[[Back to top]](#) 

## create-campaign-v1
Create a campaign
Use this API to create a certification campaign with the information provided in the request body.    


[API Spec](https://developer.sailpoint.com/docs/api/v1/create-campaign-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | campaign2 | [**Campaign2**](../models/campaign2) | True  | 

### Return type
[**Campaign2**](../models/campaign2)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | This response indicates that the requested campaign has been successfully accepted into the system, and its representation is returned by the API. | Campaign2 |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetActiveCampaignsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetActiveCampaignsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.certification_campaigns.api.certification_campaigns_api import CertificationCampaignsApi
from sailpoint.certification_campaigns.api_client import ApiClient
from sailpoint.certification_campaigns.models.campaign2 import Campaign2
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    campaign2 = '''sailpoint.certification_campaigns.Campaign2()''' # Campaign2 | 

    try:
        # Create a campaign
        new_campaign2 = Campaign2.from_json(campaign2)
        results = CertificationCampaignsApi(api_client).create_campaign_v1(campaign2=new_campaign2)
        # Below is a request that includes all optional parameters
        # results = CertificationCampaignsApi(api_client).create_campaign_v1(new_campaign2)
        print("The response of CertificationCampaignsApi->create_campaign_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CertificationCampaignsApi->create_campaign_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-campaign-template-schedule-v1
Delete campaign template schedule
Use this API to delete the schedule for a certification campaign template. The API returns a 404 if there is no schedule set.


[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-campaign-template-schedule-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the campaign template whose schedule is being deleted.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetActiveCampaignsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetActiveCampaignsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.certification_campaigns.api.certification_campaigns_api import CertificationCampaignsApi
from sailpoint.certification_campaigns.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '04bedce387bd47b2ae1f86eb0bb36dee' # str | ID of the campaign template whose schedule is being deleted. # str | ID of the campaign template whose schedule is being deleted.

    try:
        # Delete campaign template schedule
        
        CertificationCampaignsApi(api_client).delete_campaign_template_schedule_v1(id=id)
        # Below is a request that includes all optional parameters
        # CertificationCampaignsApi(api_client).delete_campaign_template_schedule_v1(id)
    except Exception as e:
        print("Exception when calling CertificationCampaignsApi->delete_campaign_template_schedule_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-campaign-template-v1
Delete a campaign template
Use this API to delete a certification campaign template by ID.


[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-campaign-template-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the campaign template being deleted.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetActiveCampaignsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetActiveCampaignsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.certification_campaigns.api.certification_campaigns_api import CertificationCampaignsApi
from sailpoint.certification_campaigns.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c9180835d191a86015d28455b4a2329' # str | ID of the campaign template being deleted. # str | ID of the campaign template being deleted.

    try:
        # Delete a campaign template
        
        CertificationCampaignsApi(api_client).delete_campaign_template_v1(id=id)
        # Below is a request that includes all optional parameters
        # CertificationCampaignsApi(api_client).delete_campaign_template_v1(id)
    except Exception as e:
        print("Exception when calling CertificationCampaignsApi->delete_campaign_template_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-campaigns-v1
Delete campaigns
Use this API to delete certification campaigns whose IDs are specified in the provided list of campaign IDs.


[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-campaigns-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | campaignsdeleterequest | [**Campaignsdeleterequest**](../models/campaignsdeleterequest) | True  | IDs of the campaigns to delete.

### Return type
**object**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted - Returned if the request was successfully accepted into the system. | object |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetActiveCampaignsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetActiveCampaignsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.certification_campaigns.api.certification_campaigns_api import CertificationCampaignsApi
from sailpoint.certification_campaigns.api_client import ApiClient
from sailpoint.certification_campaigns.models.campaignsdeleterequest import Campaignsdeleterequest
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    campaignsdeleterequest = '''sailpoint.certification_campaigns.Campaignsdeleterequest()''' # Campaignsdeleterequest | IDs of the campaigns to delete.

    try:
        # Delete campaigns
        new_campaignsdeleterequest = Campaignsdeleterequest.from_json(campaignsdeleterequest)
        results = CertificationCampaignsApi(api_client).delete_campaigns_v1(campaignsdeleterequest=new_campaignsdeleterequest)
        # Below is a request that includes all optional parameters
        # results = CertificationCampaignsApi(api_client).delete_campaigns_v1(new_campaignsdeleterequest)
        print("The response of CertificationCampaignsApi->delete_campaigns_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CertificationCampaignsApi->delete_campaigns_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-active-campaigns-v1
List campaigns
Use this API to get a list of campaigns. This API can provide increased level of detail for each campaign for the correct provided query.


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-active-campaigns-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | detail | **str** |   (optional) | Determines whether slim, or increased level of detail is provided for each campaign in the returned list. Slim is the default behavior.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **status**: *eq, in*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created**

### Return type
[**List[GetActiveCampaignsV1200ResponseInner]**](../models/get-active-campaigns-v1200-response-inner)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A list of campaign objects. By default list of SLIM campaigns is returned. | List[GetActiveCampaignsV1200ResponseInner] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetActiveCampaignsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetActiveCampaignsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.certification_campaigns.api.certification_campaigns_api import CertificationCampaignsApi
from sailpoint.certification_campaigns.api_client import ApiClient
from sailpoint.certification_campaigns.models.get_active_campaigns_v1200_response_inner import GetActiveCampaignsV1200ResponseInner
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    detail = 'FULL' # str | Determines whether slim, or increased level of detail is provided for each campaign in the returned list. Slim is the default behavior. (optional) # str | Determines whether slim, or increased level of detail is provided for each campaign in the returned list. Slim is the default behavior. (optional)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'name eq \"Manager Campaign\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **status**: *eq, in* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **status**: *eq, in* (optional)
    sorters = 'name' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created** (optional)

    try:
        # List campaigns
        
        results = CertificationCampaignsApi(api_client).get_active_campaigns_v1()
        # Below is a request that includes all optional parameters
        # results = CertificationCampaignsApi(api_client).get_active_campaigns_v1(detail, limit, offset, count, filters, sorters)
        print("The response of CertificationCampaignsApi->get_active_campaigns_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CertificationCampaignsApi->get_active_campaigns_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-campaign-reports-config-v1
Get campaign reports configuration
Use this API to fetch the configuration for certification campaign reports. The configuration includes only one element - identity attributes defined as custom report columns. 


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-campaign-reports-config-v1)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**Campaignreportsconfig**](../models/campaignreportsconfig)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Campaign report configuration. | Campaignreportsconfig |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetActiveCampaignsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetActiveCampaignsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.certification_campaigns.api.certification_campaigns_api import CertificationCampaignsApi
from sailpoint.certification_campaigns.api_client import ApiClient
from sailpoint.certification_campaigns.models.campaignreportsconfig import Campaignreportsconfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # Get campaign reports configuration
        
        results = CertificationCampaignsApi(api_client).get_campaign_reports_config_v1()
        # Below is a request that includes all optional parameters
        # results = CertificationCampaignsApi(api_client).get_campaign_reports_config_v1()
        print("The response of CertificationCampaignsApi->get_campaign_reports_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CertificationCampaignsApi->get_campaign_reports_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-campaign-reports-v1
Get campaign reports
Use this API to fetch all reports for a certification campaign by campaign ID.


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-campaign-reports-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the campaign whose reports are being fetched.

### Return type
[**List[Campaignreport]**](../models/campaignreport)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Array of campaign report objects. | List[Campaignreport] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetActiveCampaignsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetActiveCampaignsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.certification_campaigns.api.certification_campaigns_api import CertificationCampaignsApi
from sailpoint.certification_campaigns.api_client import ApiClient
from sailpoint.certification_campaigns.models.campaignreport import Campaignreport
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c91808571bcfcf80171c23e4b4221fc' # str | ID of the campaign whose reports are being fetched. # str | ID of the campaign whose reports are being fetched.

    try:
        # Get campaign reports
        
        results = CertificationCampaignsApi(api_client).get_campaign_reports_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = CertificationCampaignsApi(api_client).get_campaign_reports_v1(id)
        print("The response of CertificationCampaignsApi->get_campaign_reports_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CertificationCampaignsApi->get_campaign_reports_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-campaign-template-schedule-v1
Get campaign template schedule
Use this API to get the schedule for a certification campaign template. The API returns a 404 if there is no schedule set.


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-campaign-template-schedule-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the campaign template whose schedule is being fetched.

### Return type
[**Schedule2**](../models/schedule2)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Current schedule for the campaign template. See the [Set Campaign Template Schedule endpoint documentation](https://developer.sailpoint.com/docs/api/v3/set-campaign-template-schedule) for more examples. | Schedule2 |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetActiveCampaignsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetActiveCampaignsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.certification_campaigns.api.certification_campaigns_api import CertificationCampaignsApi
from sailpoint.certification_campaigns.api_client import ApiClient
from sailpoint.certification_campaigns.models.schedule2 import Schedule2
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '04bedce387bd47b2ae1f86eb0bb36dee' # str | ID of the campaign template whose schedule is being fetched. # str | ID of the campaign template whose schedule is being fetched.

    try:
        # Get campaign template schedule
        
        results = CertificationCampaignsApi(api_client).get_campaign_template_schedule_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = CertificationCampaignsApi(api_client).get_campaign_template_schedule_v1(id)
        print("The response of CertificationCampaignsApi->get_campaign_template_schedule_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CertificationCampaignsApi->get_campaign_template_schedule_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-campaign-template-v1
Get a campaign template
Use this API to fetch a certification campaign template by ID.


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-campaign-template-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Requested campaign template's ID.

### Return type
[**Campaigntemplate**](../models/campaigntemplate)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Data for the campaign matching the given ID. | Campaigntemplate |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetActiveCampaignsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetActiveCampaignsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.certification_campaigns.api.certification_campaigns_api import CertificationCampaignsApi
from sailpoint.certification_campaigns.api_client import ApiClient
from sailpoint.certification_campaigns.models.campaigntemplate import Campaigntemplate
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c9180835d191a86015d28455b4a2329' # str | Requested campaign template's ID. # str | Requested campaign template's ID.

    try:
        # Get a campaign template
        
        results = CertificationCampaignsApi(api_client).get_campaign_template_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = CertificationCampaignsApi(api_client).get_campaign_template_v1(id)
        print("The response of CertificationCampaignsApi->get_campaign_template_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CertificationCampaignsApi->get_campaign_template_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-campaign-templates-v1
List campaign templates
Use this API to get a list of all campaign templates. Scope can be reduced through standard V3 query params.

The API returns all campaign templates matching the query parameters. 


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-campaign-templates-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified**
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, ge, gt, in, le, lt, ne, sw*  **id**: *eq, ge, gt, in, le, lt, ne, sw*

### Return type
[**List[Campaigntemplate]**](../models/campaigntemplate)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of campaign template objects. | List[Campaigntemplate] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetActiveCampaignsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetActiveCampaignsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.certification_campaigns.api.certification_campaigns_api import CertificationCampaignsApi
from sailpoint.certification_campaigns.api_client import ApiClient
from sailpoint.certification_campaigns.models.campaigntemplate import Campaigntemplate
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    sorters = 'name' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional)
    filters = 'name eq \"manager template\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, ge, gt, in, le, lt, ne, sw*  **id**: *eq, ge, gt, in, le, lt, ne, sw* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, ge, gt, in, le, lt, ne, sw*  **id**: *eq, ge, gt, in, le, lt, ne, sw* (optional)

    try:
        # List campaign templates
        
        results = CertificationCampaignsApi(api_client).get_campaign_templates_v1()
        # Below is a request that includes all optional parameters
        # results = CertificationCampaignsApi(api_client).get_campaign_templates_v1(limit, offset, count, sorters, filters)
        print("The response of CertificationCampaignsApi->get_campaign_templates_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CertificationCampaignsApi->get_campaign_templates_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-campaign-v1
Get campaign
Use this API to get information for an existing certification campaign by the campaign's ID.


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-campaign-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the campaign to be retrieved.
  Query | detail | **str** |   (optional) | Determines whether slim, or increased level of detail is provided for each campaign in the returned list. Slim is the default behavior.

### Return type
[**GetCampaignV1200Response**](../models/get-campaign-v1200-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Requested campaign object. | GetCampaignV1200Response |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetActiveCampaignsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetActiveCampaignsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.certification_campaigns.api.certification_campaigns_api import CertificationCampaignsApi
from sailpoint.certification_campaigns.api_client import ApiClient
from sailpoint.certification_campaigns.models.get_campaign_v1200_response import GetCampaignV1200Response
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c91808571bcfcf80171c23e4b4221fc' # str | ID of the campaign to be retrieved. # str | ID of the campaign to be retrieved.
    detail = 'FULL' # str | Determines whether slim, or increased level of detail is provided for each campaign in the returned list. Slim is the default behavior. (optional) # str | Determines whether slim, or increased level of detail is provided for each campaign in the returned list. Slim is the default behavior. (optional)

    try:
        # Get campaign
        
        results = CertificationCampaignsApi(api_client).get_campaign_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = CertificationCampaignsApi(api_client).get_campaign_v1(id, detail)
        print("The response of CertificationCampaignsApi->get_campaign_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CertificationCampaignsApi->get_campaign_v1: %s\n" % e)
```



[[Back to top]](#) 

## move-v1
Reassign certifications
This API reassigns the specified certifications from one identity to another.    


[API Spec](https://developer.sailpoint.com/docs/api/v1/move-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The certification campaign ID
 Body  | adminreviewreassign | [**Adminreviewreassign**](../models/adminreviewreassign) | True  | 

### Return type
[**Certificationtask**](../models/certificationtask)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | The reassign task that has been submitted. | Certificationtask |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetActiveCampaignsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetActiveCampaignsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.certification_campaigns.api.certification_campaigns_api import CertificationCampaignsApi
from sailpoint.certification_campaigns.api_client import ApiClient
from sailpoint.certification_campaigns.models.adminreviewreassign import Adminreviewreassign
from sailpoint.certification_campaigns.models.certificationtask import Certificationtask
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The certification campaign ID # str | The certification campaign ID
    adminreviewreassign = '''sailpoint.certification_campaigns.Adminreviewreassign()''' # Adminreviewreassign | 

    try:
        # Reassign certifications
        new_adminreviewreassign = Adminreviewreassign.from_json(adminreviewreassign)
        results = CertificationCampaignsApi(api_client).move_v1(id=id, adminreviewreassign=new_adminreviewreassign)
        # Below is a request that includes all optional parameters
        # results = CertificationCampaignsApi(api_client).move_v1(id, new_adminreviewreassign)
        print("The response of CertificationCampaignsApi->move_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CertificationCampaignsApi->move_v1: %s\n" % e)
```



[[Back to top]](#) 

## patch-campaign-template-v1
Update a campaign template
Use this API to update individual fields on a certification campaign template, using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.


[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-campaign-template-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the campaign template being modified.
 Body  | jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | A list of campaign update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * deadlineDuration * campaign (all fields that are allowed during create) 

### Return type
[**Campaigntemplate**](../models/campaigntemplate)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | This response indicates that the PATCH operation succeeded, and the API returns the template&#39;s new representation. | Campaigntemplate |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetActiveCampaignsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetActiveCampaignsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.certification_campaigns.api.certification_campaigns_api import CertificationCampaignsApi
from sailpoint.certification_campaigns.api_client import ApiClient
from sailpoint.certification_campaigns.models.campaigntemplate import Campaigntemplate
from sailpoint.certification_campaigns.models.jsonpatchoperation import Jsonpatchoperation
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c9180835d191a86015d28455b4a2329' # str | ID of the campaign template being modified. # str | ID of the campaign template being modified.
    jsonpatchoperation = '''[{"op":"replace","path":"/description","value":"Updated description!"},{"op":"replace","path":"/campaign/filter/id","value":"ff80818155fe8c080155fe8d925b0316"}]''' # List[Jsonpatchoperation] | A list of campaign update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * deadlineDuration * campaign (all fields that are allowed during create) 

    try:
        # Update a campaign template
        new_jsonpatchoperation = Jsonpatchoperation.from_json(jsonpatchoperation)
        results = CertificationCampaignsApi(api_client).patch_campaign_template_v1(id=id, jsonpatchoperation=new_jsonpatchoperation)
        # Below is a request that includes all optional parameters
        # results = CertificationCampaignsApi(api_client).patch_campaign_template_v1(id, new_jsonpatchoperation)
        print("The response of CertificationCampaignsApi->patch_campaign_template_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CertificationCampaignsApi->patch_campaign_template_v1: %s\n" % e)
```



[[Back to top]](#) 

## set-campaign-reports-config-v1
Set campaign reports configuration
Use this API to overwrite the configuration for campaign reports. 


[API Spec](https://developer.sailpoint.com/docs/api/v1/set-campaign-reports-config-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | campaignreportsconfig | [**Campaignreportsconfig**](../models/campaignreportsconfig) | True  | Campaign report configuration.

### Return type
[**Campaignreportsconfig**](../models/campaignreportsconfig)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The persisted campaign report configuration. | Campaignreportsconfig |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetActiveCampaignsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetActiveCampaignsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.certification_campaigns.api.certification_campaigns_api import CertificationCampaignsApi
from sailpoint.certification_campaigns.api_client import ApiClient
from sailpoint.certification_campaigns.models.campaignreportsconfig import Campaignreportsconfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    campaignreportsconfig = '''sailpoint.certification_campaigns.Campaignreportsconfig()''' # Campaignreportsconfig | Campaign report configuration.

    try:
        # Set campaign reports configuration
        new_campaignreportsconfig = Campaignreportsconfig.from_json(campaignreportsconfig)
        results = CertificationCampaignsApi(api_client).set_campaign_reports_config_v1(campaignreportsconfig=new_campaignreportsconfig)
        # Below is a request that includes all optional parameters
        # results = CertificationCampaignsApi(api_client).set_campaign_reports_config_v1(new_campaignreportsconfig)
        print("The response of CertificationCampaignsApi->set_campaign_reports_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CertificationCampaignsApi->set_campaign_reports_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## set-campaign-template-schedule-v1
Set campaign template schedule
Use this API to set the schedule for a certification campaign template. If a schedule already exists, the API overwrites it with the new one.


[API Spec](https://developer.sailpoint.com/docs/api/v1/set-campaign-template-schedule-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the campaign template being scheduled.
 Body  | schedule2 | [**Schedule2**](../models/schedule2) |   (optional) | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetActiveCampaignsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetActiveCampaignsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.certification_campaigns.api.certification_campaigns_api import CertificationCampaignsApi
from sailpoint.certification_campaigns.api_client import ApiClient
from sailpoint.certification_campaigns.models.schedule2 import Schedule2
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '04bedce387bd47b2ae1f86eb0bb36dee' # str | ID of the campaign template being scheduled. # str | ID of the campaign template being scheduled.
    schedule2 = '''{"type":"MONTHLY","hours":{"type":"LIST","values":["17"]},"days":{"type":"LIST","values":["15"]}}''' # Schedule2 |  (optional)

    try:
        # Set campaign template schedule
        
        CertificationCampaignsApi(api_client).set_campaign_template_schedule_v1(id=id)
        # Below is a request that includes all optional parameters
        # CertificationCampaignsApi(api_client).set_campaign_template_schedule_v1(id, new_schedule2)
    except Exception as e:
        print("Exception when calling CertificationCampaignsApi->set_campaign_template_schedule_v1: %s\n" % e)
```



[[Back to top]](#) 

## start-campaign-remediation-scan-v1
Run campaign remediation scan
Use this API to run a remediation scan task for a certification campaign.


[API Spec](https://developer.sailpoint.com/docs/api/v1/start-campaign-remediation-scan-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the campaign the remediation scan is being run for.

### Return type
**object**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted - Returned if the request was successfully accepted into the system. | object |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetActiveCampaignsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetActiveCampaignsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.certification_campaigns.api.certification_campaigns_api import CertificationCampaignsApi
from sailpoint.certification_campaigns.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c91808571bcfcf80171c23e4b4221fc' # str | ID of the campaign the remediation scan is being run for. # str | ID of the campaign the remediation scan is being run for.

    try:
        # Run campaign remediation scan
        
        results = CertificationCampaignsApi(api_client).start_campaign_remediation_scan_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = CertificationCampaignsApi(api_client).start_campaign_remediation_scan_v1(id)
        print("The response of CertificationCampaignsApi->start_campaign_remediation_scan_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CertificationCampaignsApi->start_campaign_remediation_scan_v1: %s\n" % e)
```



[[Back to top]](#) 

## start-campaign-report-v1
Run campaign report
Use this API to run a report for a certification campaign.


[API Spec](https://developer.sailpoint.com/docs/api/v1/start-campaign-report-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the campaign the report is being run for.
Path   | type | [**Reporttype**](../models/reporttype) | True  | Type of the report to run.

### Return type
**object**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted - Returned if the request was successfully accepted into the system. | object |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetActiveCampaignsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetActiveCampaignsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.certification_campaigns.api.certification_campaigns_api import CertificationCampaignsApi
from sailpoint.certification_campaigns.api_client import ApiClient
from sailpoint.certification_campaigns.models.reporttype import Reporttype
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c91808571bcfcf80171c23e4b4221fc' # str | ID of the campaign the report is being run for. # str | ID of the campaign the report is being run for.
    type = sailpoint.certification_campaigns.Reporttype() # Reporttype | Type of the report to run. # Reporttype | Type of the report to run.

    try:
        # Run campaign report
        
        results = CertificationCampaignsApi(api_client).start_campaign_report_v1(id=id, type=type)
        # Below is a request that includes all optional parameters
        # results = CertificationCampaignsApi(api_client).start_campaign_report_v1(id, type)
        print("The response of CertificationCampaignsApi->start_campaign_report_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CertificationCampaignsApi->start_campaign_report_v1: %s\n" % e)
```



[[Back to top]](#) 

## start-campaign-v1
Activate a campaign
Use this API to submit a job to activate the certified campaign with the specified ID. The campaign must be staged.


[API Spec](https://developer.sailpoint.com/docs/api/v1/start-campaign-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Campaign ID.
 Body  | activatecampaignoptions | [**Activatecampaignoptions**](../models/activatecampaignoptions) |   (optional) | Optional. If no timezone is specified, the standard UTC timezone is used (i.e. UTC+00:00). Although this can take any timezone, the intended value is the caller's timezone. The activation time calculated from the given timezone may cause the campaign deadline time to be modified, but it will remain within the original date. The timezone must be in a valid ISO 8601 format.

### Return type
**object**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted - Returned if the request was successfully accepted into the system. | object |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetActiveCampaignsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetActiveCampaignsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.certification_campaigns.api.certification_campaigns_api import CertificationCampaignsApi
from sailpoint.certification_campaigns.api_client import ApiClient
from sailpoint.certification_campaigns.models.activatecampaignoptions import Activatecampaignoptions
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Campaign ID. # str | Campaign ID.
    activatecampaignoptions = '''sailpoint.certification_campaigns.Activatecampaignoptions()''' # Activatecampaignoptions | Optional. If no timezone is specified, the standard UTC timezone is used (i.e. UTC+00:00). Although this can take any timezone, the intended value is the caller's timezone. The activation time calculated from the given timezone may cause the campaign deadline time to be modified, but it will remain within the original date. The timezone must be in a valid ISO 8601 format. (optional)

    try:
        # Activate a campaign
        
        results = CertificationCampaignsApi(api_client).start_campaign_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = CertificationCampaignsApi(api_client).start_campaign_v1(id, new_activatecampaignoptions)
        print("The response of CertificationCampaignsApi->start_campaign_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CertificationCampaignsApi->start_campaign_v1: %s\n" % e)
```



[[Back to top]](#) 

## start-generate-campaign-template-v1
Generate a campaign from template
Use this API to generate a new certification campaign from a campaign template.

The campaign object contained in the template has special formatting applied to its name and description
fields that determine the generated campaign's name/description. Placeholders in those fields are
formatted with the current date and time upon generation.

Placeholders consist of a percent sign followed by a letter indicating what should be inserted. For
example, "%Y" inserts the current year, and a campaign template named "Campaign for %y" generates a
campaign called "Campaign for 2020" (assuming the year at generation time is 2020).

Valid placeholders are the date/time conversion suffix characters supported by [java.util.Formatter](https://docs.oracle.com/javase/8/docs/api/java/util/Formatter.html).


[API Spec](https://developer.sailpoint.com/docs/api/v1/start-generate-campaign-template-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the campaign template to use for generation.

### Return type
[**Campaignreference**](../models/campaignreference)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | This response indicates that a campaign was successfully generated from this template, and the API returns a reference to the new campaign. | Campaignreference |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetActiveCampaignsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetActiveCampaignsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.certification_campaigns.api.certification_campaigns_api import CertificationCampaignsApi
from sailpoint.certification_campaigns.api_client import ApiClient
from sailpoint.certification_campaigns.models.campaignreference import Campaignreference
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c9180835d191a86015d28455b4a2329' # str | ID of the campaign template to use for generation. # str | ID of the campaign template to use for generation.

    try:
        # Generate a campaign from template
        
        results = CertificationCampaignsApi(api_client).start_generate_campaign_template_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = CertificationCampaignsApi(api_client).start_generate_campaign_template_v1(id)
        print("The response of CertificationCampaignsApi->start_generate_campaign_template_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CertificationCampaignsApi->start_generate_campaign_template_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-campaign-v1
Update a campaign
Use this API to update individual fields on a certification campaign, using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.


[API Spec](https://developer.sailpoint.com/docs/api/v1/update-campaign-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the campaign template being modified.
 Body  | jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | A list of campaign update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The fields that can be patched differ based on the status of the campaign.  When the campaign is in the *STAGED* status, you can patch these fields: * name * description * recommendationsEnabled * deadline * emailNotificationEnabled * autoRevokeAllowed  When the campaign is in the *ACTIVE* status, you can patch these fields: * deadline 

### Return type
[**Slimcampaign**](../models/slimcampaign)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | This response indicates that the PATCH operation succeeded, and the API returns the campaign&#39;s new representation. | Slimcampaign |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetActiveCampaignsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetActiveCampaignsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.certification_campaigns.api.certification_campaigns_api import CertificationCampaignsApi
from sailpoint.certification_campaigns.api_client import ApiClient
from sailpoint.certification_campaigns.models.jsonpatchoperation import Jsonpatchoperation
from sailpoint.certification_campaigns.models.slimcampaign import Slimcampaign
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c91808571bcfcf80171c23e4b4221fc' # str | ID of the campaign template being modified. # str | ID of the campaign template being modified.
    jsonpatchoperation = '''[{"op":"replace","path":"/name","value":"This field has been updated!"},{"op":"copy","from":"/name","path":"/description"}]''' # List[Jsonpatchoperation] | A list of campaign update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The fields that can be patched differ based on the status of the campaign.  When the campaign is in the *STAGED* status, you can patch these fields: * name * description * recommendationsEnabled * deadline * emailNotificationEnabled * autoRevokeAllowed  When the campaign is in the *ACTIVE* status, you can patch these fields: * deadline 

    try:
        # Update a campaign
        new_jsonpatchoperation = Jsonpatchoperation.from_json(jsonpatchoperation)
        results = CertificationCampaignsApi(api_client).update_campaign_v1(id=id, jsonpatchoperation=new_jsonpatchoperation)
        # Below is a request that includes all optional parameters
        # results = CertificationCampaignsApi(api_client).update_campaign_v1(id, new_jsonpatchoperation)
        print("The response of CertificationCampaignsApi->update_campaign_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CertificationCampaignsApi->update_campaign_v1: %s\n" % e)
```



[[Back to top]](#) 




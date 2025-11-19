---
id: certification-campaigns
title: Certification_Campaigns
pagination_label: Certification_Campaigns
sidebar_label: Certification_Campaigns
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Certification_Campaigns', 'Certification_Campaigns'] 
slug: /tools/sdk/python/v3/methods/certification-campaigns
tags: ['SDK', 'Software Development Kit', 'Certification_Campaigns', 'Certification_Campaigns']
---

# sailpoint.v3.CertificationCampaignsApi
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
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**complete-campaign**](#complete-campaign) | **POST** `/campaigns/{id}/complete` | Complete a campaign
[**create-campaign**](#create-campaign) | **POST** `/campaigns` | Create a campaign
[**create-campaign-template**](#create-campaign-template) | **POST** `/campaign-templates` | Create a campaign template
[**delete-campaign-template**](#delete-campaign-template) | **DELETE** `/campaign-templates/{id}` | Delete a campaign template
[**delete-campaign-template-schedule**](#delete-campaign-template-schedule) | **DELETE** `/campaign-templates/{id}/schedule` | Delete campaign template schedule
[**delete-campaigns**](#delete-campaigns) | **POST** `/campaigns/delete` | Delete campaigns
[**get-active-campaigns**](#get-active-campaigns) | **GET** `/campaigns` | List campaigns
[**get-campaign**](#get-campaign) | **GET** `/campaigns/{id}` | Get campaign
[**get-campaign-reports**](#get-campaign-reports) | **GET** `/campaigns/{id}/reports` | Get campaign reports
[**get-campaign-reports-config**](#get-campaign-reports-config) | **GET** `/campaigns/reports-configuration` | Get campaign reports configuration
[**get-campaign-template**](#get-campaign-template) | **GET** `/campaign-templates/{id}` | Get a campaign template
[**get-campaign-template-schedule**](#get-campaign-template-schedule) | **GET** `/campaign-templates/{id}/schedule` | Get campaign template schedule
[**get-campaign-templates**](#get-campaign-templates) | **GET** `/campaign-templates` | List campaign templates
[**move**](#move) | **POST** `/campaigns/{id}/reassign` | Reassign certifications
[**patch-campaign-template**](#patch-campaign-template) | **PATCH** `/campaign-templates/{id}` | Update a campaign template
[**set-campaign-reports-config**](#set-campaign-reports-config) | **PUT** `/campaigns/reports-configuration` | Set campaign reports configuration
[**set-campaign-template-schedule**](#set-campaign-template-schedule) | **PUT** `/campaign-templates/{id}/schedule` | Set campaign template schedule
[**start-campaign**](#start-campaign) | **POST** `/campaigns/{id}/activate` | Activate a campaign
[**start-campaign-remediation-scan**](#start-campaign-remediation-scan) | **POST** `/campaigns/{id}/run-remediation-scan` | Run campaign remediation scan
[**start-campaign-report**](#start-campaign-report) | **POST** `/campaigns/{id}/run-report/{type}` | Run campaign report
[**start-generate-campaign-template**](#start-generate-campaign-template) | **POST** `/campaign-templates/{id}/generate` | Generate a campaign from template
[**update-campaign**](#update-campaign) | **PATCH** `/campaigns/{id}` | Update a campaign


## complete-campaign
Complete a campaign
:::caution

This endpoint will run successfully for any campaigns that are **past due**.

This endpoint will return a content error if the campaign is **not past due**.

:::

Use this API to complete a certification campaign. This functionality is provided to admins so that they
can complete a certification even if all items have not been completed.


[API Spec](https://developer.sailpoint.com/docs/api/v3/complete-campaign)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Campaign ID.
 Body  | campaign_complete_options | [**CampaignCompleteOptions**](../models/campaign-complete-options) |   (optional) | Optional. Default behavior is for the campaign to auto-approve upon completion, unless autoCompleteAction=REVOKE

### Return type
**object**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted - Returned if the request was successfully accepted into the system. | object |  -  |
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
from sailpoint.v3.api.certification_campaigns_api import CertificationCampaignsApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.campaign_complete_options import CampaignCompleteOptions
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Campaign ID. # str | Campaign ID.
    campaign_complete_options = '''{
          "autoCompleteAction" : "REVOKE"
        }''' # CampaignCompleteOptions | Optional. Default behavior is for the campaign to auto-approve upon completion, unless autoCompleteAction=REVOKE (optional)

    try:
        # Complete a campaign
        
        results = CertificationCampaignsApi(api_client).complete_campaign(id=id)
        # Below is a request that includes all optional parameters
        # results = CertificationCampaignsApi(api_client).complete_campaign(id, new_campaign_complete_options)
        print("The response of CertificationCampaignsApi->complete_campaign:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CertificationCampaignsApi->complete_campaign: %s\n" % e)
```



[[Back to top]](#) 

## create-campaign
Create a campaign
Use this API to create a certification campaign with the information provided in the request body.    


[API Spec](https://developer.sailpoint.com/docs/api/v3/create-campaign)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | campaign | [**Campaign**](../models/campaign) | True  | 

### Return type
[**Campaign**](../models/campaign)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | This response indicates that the requested campaign has been successfully accepted into the system, and its representation is returned by the API. | Campaign |  -  |
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
from sailpoint.v3.api.certification_campaigns_api import CertificationCampaignsApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.campaign import Campaign
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    campaign = '''{
          "totalCertifications" : 100,
          "sourcesWithOrphanEntitlements" : [ {
            "name" : "Source with orphan entitlements",
            "id" : "2c90ad2a70ace7d50170acf22ca90010",
            "type" : "SOURCE"
          }, {
            "name" : "Source with orphan entitlements",
            "id" : "2c90ad2a70ace7d50170acf22ca90010",
            "type" : "SOURCE"
          } ],
          "recommendationsEnabled" : true,
          "sunsetCommentsRequired" : true,
          "created" : "2020-03-03T22:15:13.611Z",
          "machineAccountCampaignInfo" : {
            "reviewerType" : "ACCOUNT_OWNER",
            "sourceIds" : [ "0fbe863c063c4c88a35fd7f17e8a3df5" ]
          },
          "description" : "Everyone needs to be reviewed by their manager",
          "type" : "MANAGER",
          "sourceOwnerCampaignInfo" : {
            "sourceIds" : [ "0fbe863c063c4c88a35fd7f17e8a3df5" ]
          },
          "emailNotificationEnabled" : false,
          "alerts" : [ {
            "level" : "ERROR",
            "localizations" : [ {
              "localeOrigin" : "DEFAULT",
              "text" : "The request was syntactically correct but its content is semantically invalid.",
              "locale" : "en-US"
            }, {
              "localeOrigin" : "DEFAULT",
              "text" : "The request was syntactically correct but its content is semantically invalid.",
              "locale" : "en-US"
            } ]
          }, {
            "level" : "ERROR",
            "localizations" : [ {
              "localeOrigin" : "DEFAULT",
              "text" : "The request was syntactically correct but its content is semantically invalid.",
              "locale" : "en-US"
            }, {
              "localeOrigin" : "DEFAULT",
              "text" : "The request was syntactically correct but its content is semantically invalid.",
              "locale" : "en-US"
            } ]
          } ],
          "filter" : {
            "name" : "Test Filter",
            "id" : "0fbe863c063c4c88a35fd7f17e8a3df5",
            "type" : "CAMPAIGN_FILTER"
          },
          "searchCampaignInfo" : {
            "identityIds" : [ "0fbe863c063c4c88a35fd7f17e8a3df5" ],
            "query" : "Search Campaign query description",
            "description" : "Search Campaign description",
            "reviewer" : {
              "name" : "William Wilson",
              "id" : "2c91808568c529c60168cca6f90c1313",
              "type" : "IDENTITY"
            },
            "type" : "ACCESS",
            "accessConstraints" : [ {
              "ids" : [ "2c90ad2a70ace7d50170acf22ca90010" ],
              "type" : "ENTITLEMENT",
              "operator" : "SELECTED"
            }, {
              "ids" : [ "2c90ad2a70ace7d50170acf22ca90010" ],
              "type" : "ENTITLEMENT",
              "operator" : "SELECTED"
            }, {
              "ids" : [ "2c90ad2a70ace7d50170acf22ca90010" ],
              "type" : "ENTITLEMENT",
              "operator" : "SELECTED"
            }, {
              "ids" : [ "2c90ad2a70ace7d50170acf22ca90010" ],
              "type" : "ENTITLEMENT",
              "operator" : "SELECTED"
            }, {
              "ids" : [ "2c90ad2a70ace7d50170acf22ca90010" ],
              "type" : "ENTITLEMENT",
              "operator" : "SELECTED"
            } ]
          },
          "autoRevokeAllowed" : false,
          "name" : "Manager Campaign",
          "mandatoryCommentRequirement" : "NO_DECISIONS",
          "modified" : "2020-03-03T22:20:12.674Z",
          "roleCompositionCampaignInfo" : {
            "remediatorRef" : {
              "name" : "Role Admin",
              "id" : "2c90ad2a70ace7d50170acf22ca90010",
              "type" : "IDENTITY"
            },
            "roleIds" : [ "2c90ad2a70ace7d50170acf22ca90010" ],
            "query" : "Search Query",
            "description" : "Role Composition Description",
            "reviewer" : {
              "name" : "William Wilson",
              "id" : "2c91808568c529c60168cca6f90c1313",
              "type" : "IDENTITY"
            }
          },
          "completedCertifications" : 10,
          "id" : "2c9079b270a266a60170a2779fcb0007",
          "deadline" : "2020-03-15T10:00:01.456Z",
          "status" : "ACTIVE",
          "correlatedStatus" : "CORRELATED"
        }''' # Campaign | 

    try:
        # Create a campaign
        new_campaign = Campaign.from_json(campaign)
        results = CertificationCampaignsApi(api_client).create_campaign(campaign=new_campaign)
        # Below is a request that includes all optional parameters
        # results = CertificationCampaignsApi(api_client).create_campaign(new_campaign)
        print("The response of CertificationCampaignsApi->create_campaign:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CertificationCampaignsApi->create_campaign: %s\n" % e)
```



[[Back to top]](#) 

## create-campaign-template
Create a campaign template
Use this API to create a certification campaign template based on campaign.


[API Spec](https://developer.sailpoint.com/docs/api/v3/create-campaign-template)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | campaign_template | [**CampaignTemplate**](../models/campaign-template) | True  | 

### Return type
[**CampaignTemplate**](../models/campaign-template)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Created successfully. | CampaignTemplate |  -  |
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
from sailpoint.v3.api.certification_campaigns_api import CertificationCampaignsApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.campaign_template import CampaignTemplate
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    campaign_template = '''{
          "ownerRef" : {
            "name" : "Mister Manager",
            "id" : "2c918086676d3e0601677611dbde220f",
            "type" : "IDENTITY",
            "email" : "mr.manager@example.com"
          },
          "deadlineDuration" : "P2W",
          "created" : "2020-03-05T22:44:00.364Z",
          "scheduled" : false,
          "name" : "Manager Campaign Template",
          "description" : "Template for the annual manager campaign.",
          "modified" : "2020-03-05T22:52:09.969Z",
          "campaign" : {
            "totalCertifications" : 100,
            "sourcesWithOrphanEntitlements" : [ {
              "name" : "Source with orphan entitlements",
              "id" : "2c90ad2a70ace7d50170acf22ca90010",
              "type" : "SOURCE"
            }, {
              "name" : "Source with orphan entitlements",
              "id" : "2c90ad2a70ace7d50170acf22ca90010",
              "type" : "SOURCE"
            } ],
            "recommendationsEnabled" : true,
            "sunsetCommentsRequired" : true,
            "created" : "2020-03-03T22:15:13.611Z",
            "machineAccountCampaignInfo" : {
              "reviewerType" : "ACCOUNT_OWNER",
              "sourceIds" : [ "0fbe863c063c4c88a35fd7f17e8a3df5" ]
            },
            "description" : "Everyone needs to be reviewed by their manager",
            "type" : "MANAGER",
            "sourceOwnerCampaignInfo" : {
              "sourceIds" : [ "0fbe863c063c4c88a35fd7f17e8a3df5" ]
            },
            "emailNotificationEnabled" : false,
            "alerts" : [ {
              "level" : "ERROR",
              "localizations" : [ {
                "localeOrigin" : "DEFAULT",
                "text" : "The request was syntactically correct but its content is semantically invalid.",
                "locale" : "en-US"
              }, {
                "localeOrigin" : "DEFAULT",
                "text" : "The request was syntactically correct but its content is semantically invalid.",
                "locale" : "en-US"
              } ]
            }, {
              "level" : "ERROR",
              "localizations" : [ {
                "localeOrigin" : "DEFAULT",
                "text" : "The request was syntactically correct but its content is semantically invalid.",
                "locale" : "en-US"
              }, {
                "localeOrigin" : "DEFAULT",
                "text" : "The request was syntactically correct but its content is semantically invalid.",
                "locale" : "en-US"
              } ]
            } ],
            "filter" : {
              "name" : "Test Filter",
              "id" : "0fbe863c063c4c88a35fd7f17e8a3df5",
              "type" : "CAMPAIGN_FILTER"
            },
            "searchCampaignInfo" : {
              "identityIds" : [ "0fbe863c063c4c88a35fd7f17e8a3df5" ],
              "query" : "Search Campaign query description",
              "description" : "Search Campaign description",
              "reviewer" : {
                "name" : "William Wilson",
                "id" : "2c91808568c529c60168cca6f90c1313",
                "type" : "IDENTITY"
              },
              "type" : "ACCESS",
              "accessConstraints" : [ {
                "ids" : [ "2c90ad2a70ace7d50170acf22ca90010" ],
                "type" : "ENTITLEMENT",
                "operator" : "SELECTED"
              }, {
                "ids" : [ "2c90ad2a70ace7d50170acf22ca90010" ],
                "type" : "ENTITLEMENT",
                "operator" : "SELECTED"
              }, {
                "ids" : [ "2c90ad2a70ace7d50170acf22ca90010" ],
                "type" : "ENTITLEMENT",
                "operator" : "SELECTED"
              }, {
                "ids" : [ "2c90ad2a70ace7d50170acf22ca90010" ],
                "type" : "ENTITLEMENT",
                "operator" : "SELECTED"
              }, {
                "ids" : [ "2c90ad2a70ace7d50170acf22ca90010" ],
                "type" : "ENTITLEMENT",
                "operator" : "SELECTED"
              } ]
            },
            "autoRevokeAllowed" : false,
            "name" : "Manager Campaign",
            "mandatoryCommentRequirement" : "NO_DECISIONS",
            "modified" : "2020-03-03T22:20:12.674Z",
            "roleCompositionCampaignInfo" : {
              "remediatorRef" : {
                "name" : "Role Admin",
                "id" : "2c90ad2a70ace7d50170acf22ca90010",
                "type" : "IDENTITY"
              },
              "roleIds" : [ "2c90ad2a70ace7d50170acf22ca90010" ],
              "query" : "Search Query",
              "description" : "Role Composition Description",
              "reviewer" : {
                "name" : "William Wilson",
                "id" : "2c91808568c529c60168cca6f90c1313",
                "type" : "IDENTITY"
              }
            },
            "completedCertifications" : 10,
            "id" : "2c9079b270a266a60170a2779fcb0007",
            "deadline" : "2020-03-15T10:00:01.456Z",
            "status" : "ACTIVE",
            "correlatedStatus" : "CORRELATED"
          },
          "id" : "2c9079b270a266a60170a277bb960008"
        }''' # CampaignTemplate | 

    try:
        # Create a campaign template
        new_campaign_template = CampaignTemplate.from_json(campaign_template)
        results = CertificationCampaignsApi(api_client).create_campaign_template(campaign_template=new_campaign_template)
        # Below is a request that includes all optional parameters
        # results = CertificationCampaignsApi(api_client).create_campaign_template(new_campaign_template)
        print("The response of CertificationCampaignsApi->create_campaign_template:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CertificationCampaignsApi->create_campaign_template: %s\n" % e)
```



[[Back to top]](#) 

## delete-campaign-template
Delete a campaign template
Use this API to delete a certification campaign template by ID.


[API Spec](https://developer.sailpoint.com/docs/api/v3/delete-campaign-template)

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
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v3.api.certification_campaigns_api import CertificationCampaignsApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c9180835d191a86015d28455b4a2329' # str | ID of the campaign template being deleted. # str | ID of the campaign template being deleted.

    try:
        # Delete a campaign template
        
        CertificationCampaignsApi(api_client).delete_campaign_template(id=id)
        # Below is a request that includes all optional parameters
        # CertificationCampaignsApi(api_client).delete_campaign_template(id)
    except Exception as e:
        print("Exception when calling CertificationCampaignsApi->delete_campaign_template: %s\n" % e)
```



[[Back to top]](#) 

## delete-campaign-template-schedule
Delete campaign template schedule
Use this API to delete the schedule for a certification campaign template. The API returns a 404 if there is no schedule set.


[API Spec](https://developer.sailpoint.com/docs/api/v3/delete-campaign-template-schedule)

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
from sailpoint.v3.api.certification_campaigns_api import CertificationCampaignsApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '04bedce387bd47b2ae1f86eb0bb36dee' # str | ID of the campaign template whose schedule is being deleted. # str | ID of the campaign template whose schedule is being deleted.

    try:
        # Delete campaign template schedule
        
        CertificationCampaignsApi(api_client).delete_campaign_template_schedule(id=id)
        # Below is a request that includes all optional parameters
        # CertificationCampaignsApi(api_client).delete_campaign_template_schedule(id)
    except Exception as e:
        print("Exception when calling CertificationCampaignsApi->delete_campaign_template_schedule: %s\n" % e)
```



[[Back to top]](#) 

## delete-campaigns
Delete campaigns
Use this API to delete certification campaigns whose IDs are specified in the provided list of campaign IDs.


[API Spec](https://developer.sailpoint.com/docs/api/v3/delete-campaigns)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | campaigns_delete_request | [**CampaignsDeleteRequest**](../models/campaigns-delete-request) | True  | IDs of the campaigns to delete.

### Return type
**object**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted - Returned if the request was successfully accepted into the system. | object |  -  |
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
from sailpoint.v3.api.certification_campaigns_api import CertificationCampaignsApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.campaigns_delete_request import CampaignsDeleteRequest
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    campaigns_delete_request = '''{
          "ids" : [ "2c9180887335cee10173490db1776c26", "2c9180836a712436016a7125a90c0021" ]
        }''' # CampaignsDeleteRequest | IDs of the campaigns to delete.

    try:
        # Delete campaigns
        new_campaigns_delete_request = CampaignsDeleteRequest.from_json(campaigns_delete_request)
        results = CertificationCampaignsApi(api_client).delete_campaigns(campaigns_delete_request=new_campaigns_delete_request)
        # Below is a request that includes all optional parameters
        # results = CertificationCampaignsApi(api_client).delete_campaigns(new_campaigns_delete_request)
        print("The response of CertificationCampaignsApi->delete_campaigns:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CertificationCampaignsApi->delete_campaigns: %s\n" % e)
```



[[Back to top]](#) 

## get-active-campaigns
List campaigns
Use this API to get a list of campaigns. This API can provide increased level of detail for each campaign for the correct provided query.


[API Spec](https://developer.sailpoint.com/docs/api/v3/get-active-campaigns)

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
[**List[GetActiveCampaigns200ResponseInner]**](../models/get-active-campaigns200-response-inner)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A list of campaign objects. By default list of SLIM campaigns is returned. | List[GetActiveCampaigns200ResponseInner] |  -  |
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
from sailpoint.v3.api.certification_campaigns_api import CertificationCampaignsApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.get_active_campaigns200_response_inner import GetActiveCampaigns200ResponseInner
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
        
        results = CertificationCampaignsApi(api_client).get_active_campaigns()
        # Below is a request that includes all optional parameters
        # results = CertificationCampaignsApi(api_client).get_active_campaigns(detail, limit, offset, count, filters, sorters)
        print("The response of CertificationCampaignsApi->get_active_campaigns:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CertificationCampaignsApi->get_active_campaigns: %s\n" % e)
```



[[Back to top]](#) 

## get-campaign
Get campaign
Use this API to get information for an existing certification campaign by the campaign's ID.


[API Spec](https://developer.sailpoint.com/docs/api/v3/get-campaign)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the campaign to be retrieved.
  Query | detail | **str** |   (optional) | Determines whether slim, or increased level of detail is provided for each campaign in the returned list. Slim is the default behavior.

### Return type
[**GetCampaign200Response**](../models/get-campaign200-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Requested campaign object. | GetCampaign200Response |  -  |
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
from sailpoint.v3.api.certification_campaigns_api import CertificationCampaignsApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.get_campaign200_response import GetCampaign200Response
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c91808571bcfcf80171c23e4b4221fc' # str | ID of the campaign to be retrieved. # str | ID of the campaign to be retrieved.
    detail = 'FULL' # str | Determines whether slim, or increased level of detail is provided for each campaign in the returned list. Slim is the default behavior. (optional) # str | Determines whether slim, or increased level of detail is provided for each campaign in the returned list. Slim is the default behavior. (optional)

    try:
        # Get campaign
        
        results = CertificationCampaignsApi(api_client).get_campaign(id=id)
        # Below is a request that includes all optional parameters
        # results = CertificationCampaignsApi(api_client).get_campaign(id, detail)
        print("The response of CertificationCampaignsApi->get_campaign:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CertificationCampaignsApi->get_campaign: %s\n" % e)
```



[[Back to top]](#) 

## get-campaign-reports
Get campaign reports
Use this API to fetch all reports for a certification campaign by campaign ID.


[API Spec](https://developer.sailpoint.com/docs/api/v3/get-campaign-reports)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the campaign whose reports are being fetched.

### Return type
[**List[CampaignReport]**](../models/campaign-report)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Array of campaign report objects. | List[CampaignReport] |  -  |
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
from sailpoint.v3.api.certification_campaigns_api import CertificationCampaignsApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.campaign_report import CampaignReport
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c91808571bcfcf80171c23e4b4221fc' # str | ID of the campaign whose reports are being fetched. # str | ID of the campaign whose reports are being fetched.

    try:
        # Get campaign reports
        
        results = CertificationCampaignsApi(api_client).get_campaign_reports(id=id)
        # Below is a request that includes all optional parameters
        # results = CertificationCampaignsApi(api_client).get_campaign_reports(id)
        print("The response of CertificationCampaignsApi->get_campaign_reports:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CertificationCampaignsApi->get_campaign_reports: %s\n" % e)
```



[[Back to top]](#) 

## get-campaign-reports-config
Get campaign reports configuration
Use this API to fetch the configuration for certification campaign reports. The configuration includes only one element - identity attributes defined as custom report columns. 


[API Spec](https://developer.sailpoint.com/docs/api/v3/get-campaign-reports-config)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**CampaignReportsConfig**](../models/campaign-reports-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Campaign report configuration. | CampaignReportsConfig |  -  |
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
from sailpoint.v3.api.certification_campaigns_api import CertificationCampaignsApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.campaign_reports_config import CampaignReportsConfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # Get campaign reports configuration
        
        results = CertificationCampaignsApi(api_client).get_campaign_reports_config()
        # Below is a request that includes all optional parameters
        # results = CertificationCampaignsApi(api_client).get_campaign_reports_config()
        print("The response of CertificationCampaignsApi->get_campaign_reports_config:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CertificationCampaignsApi->get_campaign_reports_config: %s\n" % e)
```



[[Back to top]](#) 

## get-campaign-template
Get a campaign template
Use this API to fetch a certification campaign template by ID.


[API Spec](https://developer.sailpoint.com/docs/api/v3/get-campaign-template)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Requested campaign template's ID.

### Return type
[**CampaignTemplate**](../models/campaign-template)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Data for the campaign matching the given ID. | CampaignTemplate |  -  |
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
from sailpoint.v3.api.certification_campaigns_api import CertificationCampaignsApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.campaign_template import CampaignTemplate
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c9180835d191a86015d28455b4a2329' # str | Requested campaign template's ID. # str | Requested campaign template's ID.

    try:
        # Get a campaign template
        
        results = CertificationCampaignsApi(api_client).get_campaign_template(id=id)
        # Below is a request that includes all optional parameters
        # results = CertificationCampaignsApi(api_client).get_campaign_template(id)
        print("The response of CertificationCampaignsApi->get_campaign_template:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CertificationCampaignsApi->get_campaign_template: %s\n" % e)
```



[[Back to top]](#) 

## get-campaign-template-schedule
Get campaign template schedule
Use this API to get the schedule for a certification campaign template. The API returns a 404 if there is no schedule set.


[API Spec](https://developer.sailpoint.com/docs/api/v3/get-campaign-template-schedule)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the campaign template whose schedule is being fetched.

### Return type
[**Schedule**](../models/schedule)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Current schedule for the campaign template. See the [Set Campaign Template Schedule endpoint documentation](https://developer.sailpoint.com/docs/api/v3/set-campaign-template-schedule) for more examples. | Schedule |  -  |
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
from sailpoint.v3.api.certification_campaigns_api import CertificationCampaignsApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.schedule import Schedule
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '04bedce387bd47b2ae1f86eb0bb36dee' # str | ID of the campaign template whose schedule is being fetched. # str | ID of the campaign template whose schedule is being fetched.

    try:
        # Get campaign template schedule
        
        results = CertificationCampaignsApi(api_client).get_campaign_template_schedule(id=id)
        # Below is a request that includes all optional parameters
        # results = CertificationCampaignsApi(api_client).get_campaign_template_schedule(id)
        print("The response of CertificationCampaignsApi->get_campaign_template_schedule:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CertificationCampaignsApi->get_campaign_template_schedule: %s\n" % e)
```



[[Back to top]](#) 

## get-campaign-templates
List campaign templates
Use this API to get a list of all campaign templates. Scope can be reduced through standard V3 query params.

The API returns all campaign templates matching the query parameters. 


[API Spec](https://developer.sailpoint.com/docs/api/v3/get-campaign-templates)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified**
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, ge, gt, in, le, lt, ne, sw*  **id**: *eq, ge, gt, in, le, lt, ne, sw*

### Return type
[**List[CampaignTemplate]**](../models/campaign-template)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of campaign template objects. | List[CampaignTemplate] |  -  |
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
from sailpoint.v3.api.certification_campaigns_api import CertificationCampaignsApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.campaign_template import CampaignTemplate
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
        
        results = CertificationCampaignsApi(api_client).get_campaign_templates()
        # Below is a request that includes all optional parameters
        # results = CertificationCampaignsApi(api_client).get_campaign_templates(limit, offset, count, sorters, filters)
        print("The response of CertificationCampaignsApi->get_campaign_templates:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CertificationCampaignsApi->get_campaign_templates: %s\n" % e)
```



[[Back to top]](#) 

## move
Reassign certifications
This API reassigns the specified certifications from one identity to another.    


[API Spec](https://developer.sailpoint.com/docs/api/v3/move)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The certification campaign ID
 Body  | admin_review_reassign | [**AdminReviewReassign**](../models/admin-review-reassign) | True  | 

### Return type
[**CertificationTask**](../models/certification-task)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | The reassign task that has been submitted. | CertificationTask |  -  |
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
from sailpoint.v3.api.certification_campaigns_api import CertificationCampaignsApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.admin_review_reassign import AdminReviewReassign
from sailpoint.v3.models.certification_task import CertificationTask
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The certification campaign ID # str | The certification campaign ID
    admin_review_reassign = '''{
          "certificationIds" : [ "af3859464779471211bb8424a563abc1", "af3859464779471211bb8424a563abc2", "af3859464779471211bb8424a563abc3" ],
          "reason" : "reassigned for some reason",
          "reassignTo" : {
            "id" : "ef38f94347e94562b5bb8424a56397d8",
            "type" : "IDENTITY"
          }
        }''' # AdminReviewReassign | 

    try:
        # Reassign certifications
        new_admin_review_reassign = AdminReviewReassign.from_json(admin_review_reassign)
        results = CertificationCampaignsApi(api_client).move(id=id, admin_review_reassign=new_admin_review_reassign)
        # Below is a request that includes all optional parameters
        # results = CertificationCampaignsApi(api_client).move(id, new_admin_review_reassign)
        print("The response of CertificationCampaignsApi->move:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CertificationCampaignsApi->move: %s\n" % e)
```



[[Back to top]](#) 

## patch-campaign-template
Update a campaign template
Use this API to update individual fields on a certification campaign template, using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.


[API Spec](https://developer.sailpoint.com/docs/api/v3/patch-campaign-template)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the campaign template being modified.
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of campaign update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * deadlineDuration * campaign (all fields that are allowed during create) 

### Return type
[**CampaignTemplate**](../models/campaign-template)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | This response indicates that the PATCH operation succeeded, and the API returns the template&#39;s new representation. | CampaignTemplate |  -  |
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
from sailpoint.v3.api.certification_campaigns_api import CertificationCampaignsApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.campaign_template import CampaignTemplate
from sailpoint.v3.models.json_patch_operation import JsonPatchOperation
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c9180835d191a86015d28455b4a2329' # str | ID of the campaign template being modified. # str | ID of the campaign template being modified.
    json_patch_operation = '''[{op=replace, path=/description, value=Updated description!}, {op=replace, path=/campaign/filter/id, value=ff80818155fe8c080155fe8d925b0316}]''' # List[JsonPatchOperation] | A list of campaign update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * deadlineDuration * campaign (all fields that are allowed during create) 

    try:
        # Update a campaign template
        new_json_patch_operation = JsonPatchOperation.from_json(json_patch_operation)
        results = CertificationCampaignsApi(api_client).patch_campaign_template(id=id, json_patch_operation=new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = CertificationCampaignsApi(api_client).patch_campaign_template(id, new_json_patch_operation)
        print("The response of CertificationCampaignsApi->patch_campaign_template:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CertificationCampaignsApi->patch_campaign_template: %s\n" % e)
```



[[Back to top]](#) 

## set-campaign-reports-config
Set campaign reports configuration
Use this API to overwrite the configuration for campaign reports. 


[API Spec](https://developer.sailpoint.com/docs/api/v3/set-campaign-reports-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | campaign_reports_config | [**CampaignReportsConfig**](../models/campaign-reports-config) | True  | Campaign report configuration.

### Return type
[**CampaignReportsConfig**](../models/campaign-reports-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The persisted campaign report configuration. | CampaignReportsConfig |  -  |
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
from sailpoint.v3.api.certification_campaigns_api import CertificationCampaignsApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.campaign_reports_config import CampaignReportsConfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    campaign_reports_config = '''{
          "identityAttributeColumns" : [ "firstname", "lastname" ]
        }''' # CampaignReportsConfig | Campaign report configuration.

    try:
        # Set campaign reports configuration
        new_campaign_reports_config = CampaignReportsConfig.from_json(campaign_reports_config)
        results = CertificationCampaignsApi(api_client).set_campaign_reports_config(campaign_reports_config=new_campaign_reports_config)
        # Below is a request that includes all optional parameters
        # results = CertificationCampaignsApi(api_client).set_campaign_reports_config(new_campaign_reports_config)
        print("The response of CertificationCampaignsApi->set_campaign_reports_config:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CertificationCampaignsApi->set_campaign_reports_config: %s\n" % e)
```



[[Back to top]](#) 

## set-campaign-template-schedule
Set campaign template schedule
Use this API to set the schedule for a certification campaign template. If a schedule already exists, the API overwrites it with the new one.


[API Spec](https://developer.sailpoint.com/docs/api/v3/set-campaign-template-schedule)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the campaign template being scheduled.
 Body  | schedule | [**Schedule**](../models/schedule) |   (optional) | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.v3.api.certification_campaigns_api import CertificationCampaignsApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.schedule import Schedule
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '04bedce387bd47b2ae1f86eb0bb36dee' # str | ID of the campaign template being scheduled. # str | ID of the campaign template being scheduled.
    schedule = '''{
          "hours" : {
            "values" : [ "1" ],
            "interval" : 2,
            "type" : "LIST"
          },
          "months" : {
            "values" : [ "1" ],
            "interval" : 2,
            "type" : "LIST"
          },
          "timeZoneId" : "CST",
          "days" : {
            "values" : [ "1" ],
            "interval" : 2,
            "type" : "LIST"
          },
          "expiration" : "2000-01-23T04:56:07.000+00:00",
          "type" : "WEEKLY"
        }''' # Schedule |  (optional)

    try:
        # Set campaign template schedule
        
        CertificationCampaignsApi(api_client).set_campaign_template_schedule(id=id)
        # Below is a request that includes all optional parameters
        # CertificationCampaignsApi(api_client).set_campaign_template_schedule(id, new_schedule)
    except Exception as e:
        print("Exception when calling CertificationCampaignsApi->set_campaign_template_schedule: %s\n" % e)
```



[[Back to top]](#) 

## start-campaign
Activate a campaign
Use this API to submit a job to activate the certified campaign with the specified ID. The campaign must be staged.


[API Spec](https://developer.sailpoint.com/docs/api/v3/start-campaign)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Campaign ID.
 Body  | activate_campaign_options | [**ActivateCampaignOptions**](../models/activate-campaign-options) |   (optional) | Optional. If no timezone is specified, the standard UTC timezone is used (i.e. UTC+00:00). Although this can take any timezone, the intended value is the caller's timezone. The activation time calculated from the given timezone may cause the campaign deadline time to be modified, but it will remain within the original date. The timezone must be in a valid ISO 8601 format.

### Return type
**object**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted - Returned if the request was successfully accepted into the system. | object |  -  |
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
from sailpoint.v3.api.certification_campaigns_api import CertificationCampaignsApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.activate_campaign_options import ActivateCampaignOptions
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Campaign ID. # str | Campaign ID.
    activate_campaign_options = '''{
          "timeZone" : "-05:00"
        }''' # ActivateCampaignOptions | Optional. If no timezone is specified, the standard UTC timezone is used (i.e. UTC+00:00). Although this can take any timezone, the intended value is the caller's timezone. The activation time calculated from the given timezone may cause the campaign deadline time to be modified, but it will remain within the original date. The timezone must be in a valid ISO 8601 format. (optional)

    try:
        # Activate a campaign
        
        results = CertificationCampaignsApi(api_client).start_campaign(id=id)
        # Below is a request that includes all optional parameters
        # results = CertificationCampaignsApi(api_client).start_campaign(id, new_activate_campaign_options)
        print("The response of CertificationCampaignsApi->start_campaign:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CertificationCampaignsApi->start_campaign: %s\n" % e)
```



[[Back to top]](#) 

## start-campaign-remediation-scan
Run campaign remediation scan
Use this API to run a remediation scan task for a certification campaign.


[API Spec](https://developer.sailpoint.com/docs/api/v3/start-campaign-remediation-scan)

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
from sailpoint.v3.api.certification_campaigns_api import CertificationCampaignsApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c91808571bcfcf80171c23e4b4221fc' # str | ID of the campaign the remediation scan is being run for. # str | ID of the campaign the remediation scan is being run for.

    try:
        # Run campaign remediation scan
        
        results = CertificationCampaignsApi(api_client).start_campaign_remediation_scan(id=id)
        # Below is a request that includes all optional parameters
        # results = CertificationCampaignsApi(api_client).start_campaign_remediation_scan(id)
        print("The response of CertificationCampaignsApi->start_campaign_remediation_scan:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CertificationCampaignsApi->start_campaign_remediation_scan: %s\n" % e)
```



[[Back to top]](#) 

## start-campaign-report
Run campaign report
Use this API to run a report for a certification campaign.


[API Spec](https://developer.sailpoint.com/docs/api/v3/start-campaign-report)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the campaign the report is being run for.
Path   | type | [**ReportType**](../models/report-type) | True  | Type of the report to run.

### Return type
**object**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted - Returned if the request was successfully accepted into the system. | object |  -  |
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
from sailpoint.v3.api.certification_campaigns_api import CertificationCampaignsApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.report_type import ReportType
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c91808571bcfcf80171c23e4b4221fc' # str | ID of the campaign the report is being run for. # str | ID of the campaign the report is being run for.
    type = sailpoint.v3.ReportType() # ReportType | Type of the report to run. # ReportType | Type of the report to run.

    try:
        # Run campaign report
        
        results = CertificationCampaignsApi(api_client).start_campaign_report(id=id, type=type)
        # Below is a request that includes all optional parameters
        # results = CertificationCampaignsApi(api_client).start_campaign_report(id, type)
        print("The response of CertificationCampaignsApi->start_campaign_report:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CertificationCampaignsApi->start_campaign_report: %s\n" % e)
```



[[Back to top]](#) 

## start-generate-campaign-template
Generate a campaign from template
Use this API to generate a new certification campaign from a campaign template.

The campaign object contained in the template has special formatting applied to its name and description
fields that determine the generated campaign's name/description. Placeholders in those fields are
formatted with the current date and time upon generation.

Placeholders consist of a percent sign followed by a letter indicating what should be inserted. For
example, "%Y" inserts the current year, and a campaign template named "Campaign for %y" generates a
campaign called "Campaign for 2020" (assuming the year at generation time is 2020).

Valid placeholders are the date/time conversion suffix characters supported by [java.util.Formatter](https://docs.oracle.com/javase/8/docs/api/java/util/Formatter.html).


[API Spec](https://developer.sailpoint.com/docs/api/v3/start-generate-campaign-template)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the campaign template to use for generation.

### Return type
[**CampaignReference**](../models/campaign-reference)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | This response indicates that a campaign was successfully generated from this template, and the API returns a reference to the new campaign. | CampaignReference |  -  |
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
from sailpoint.v3.api.certification_campaigns_api import CertificationCampaignsApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.campaign_reference import CampaignReference
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c9180835d191a86015d28455b4a2329' # str | ID of the campaign template to use for generation. # str | ID of the campaign template to use for generation.

    try:
        # Generate a campaign from template
        
        results = CertificationCampaignsApi(api_client).start_generate_campaign_template(id=id)
        # Below is a request that includes all optional parameters
        # results = CertificationCampaignsApi(api_client).start_generate_campaign_template(id)
        print("The response of CertificationCampaignsApi->start_generate_campaign_template:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CertificationCampaignsApi->start_generate_campaign_template: %s\n" % e)
```



[[Back to top]](#) 

## update-campaign
Update a campaign
Use this API to update individual fields on a certification campaign, using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.


[API Spec](https://developer.sailpoint.com/docs/api/v3/update-campaign)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the campaign template being modified.
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of campaign update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The fields that can be patched differ based on the status of the campaign.  When the campaign is in the *STAGED* status, you can patch these fields: * name * description * recommendationsEnabled * deadline * emailNotificationEnabled * autoRevokeAllowed  When the campaign is in the *ACTIVE* status, you can patch these fields: * deadline 

### Return type
[**SlimCampaign**](../models/slim-campaign)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | This response indicates that the PATCH operation succeeded, and the API returns the campaign&#39;s new representation. | SlimCampaign |  -  |
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
from sailpoint.v3.api.certification_campaigns_api import CertificationCampaignsApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.json_patch_operation import JsonPatchOperation
from sailpoint.v3.models.slim_campaign import SlimCampaign
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c91808571bcfcf80171c23e4b4221fc' # str | ID of the campaign template being modified. # str | ID of the campaign template being modified.
    json_patch_operation = '''[{op=replace, path=/name, value=This field has been updated!}, {op=copy, from=/name, path=/description}]''' # List[JsonPatchOperation] | A list of campaign update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The fields that can be patched differ based on the status of the campaign.  When the campaign is in the *STAGED* status, you can patch these fields: * name * description * recommendationsEnabled * deadline * emailNotificationEnabled * autoRevokeAllowed  When the campaign is in the *ACTIVE* status, you can patch these fields: * deadline 

    try:
        # Update a campaign
        new_json_patch_operation = JsonPatchOperation.from_json(json_patch_operation)
        results = CertificationCampaignsApi(api_client).update_campaign(id=id, json_patch_operation=new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = CertificationCampaignsApi(api_client).update_campaign(id, new_json_patch_operation)
        print("The response of CertificationCampaignsApi->update_campaign:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CertificationCampaignsApi->update_campaign: %s\n" % e)
```



[[Back to top]](#) 




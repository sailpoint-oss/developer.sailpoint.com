---
id: beta-certification-campaigns
title: CertificationCampaigns
pagination_label: CertificationCampaigns
sidebar_label: CertificationCampaigns
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CertificationCampaigns', 'BetaCertificationCampaigns'] 
slug: /tools/sdk/powershell/beta/methods/certification-campaigns
tags: ['SDK', 'Software Development Kit', 'CertificationCampaigns', 'BetaCertificationCampaigns']
---

# CertificationCampaigns
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
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Complete-BetaCampaign**](#complete-campaign) | **POST** `/campaigns/{id}/complete` | Complete a campaign
[**New-BetaCampaign**](#create-campaign) | **POST** `/campaigns` | Create campaign
[**New-BetaCampaignTemplate**](#create-campaign-template) | **POST** `/campaign-templates` | Create a campaign template
[**Remove-BetaCampaignTemplate**](#delete-campaign-template) | **DELETE** `/campaign-templates/{id}` | Delete a campaign template
[**Remove-BetaCampaignTemplateSchedule**](#delete-campaign-template-schedule) | **DELETE** `/campaign-templates/{id}/schedule` | Delete campaign template schedule
[**Remove-BetaCampaigns**](#delete-campaigns) | **POST** `/campaigns/delete` | Delete campaigns
[**Get-BetaActiveCampaigns**](#get-active-campaigns) | **GET** `/campaigns` | List campaigns
[**Get-BetaCampaign**](#get-campaign) | **GET** `/campaigns/{id}` | Get campaign
[**Get-BetaCampaignReports**](#get-campaign-reports) | **GET** `/campaigns/{id}/reports` | Get campaign reports
[**Get-BetaCampaignReportsConfig**](#get-campaign-reports-config) | **GET** `/campaigns/reports-configuration` | Get campaign reports configuration
[**Get-BetaCampaignTemplate**](#get-campaign-template) | **GET** `/campaign-templates/{id}` | Get a campaign template
[**Get-BetaCampaignTemplateSchedule**](#get-campaign-template-schedule) | **GET** `/campaign-templates/{id}/schedule` | Get campaign template schedule
[**Get-BetaCampaignTemplates**](#get-campaign-templates) | **GET** `/campaign-templates` | List campaign templates
[**Move-Beta**](#move) | **POST** `/campaigns/{id}/reassign` | Reassign certifications
[**Update-BetaCampaignTemplate**](#patch-campaign-template) | **PATCH** `/campaign-templates/{id}` | Update a campaign template
[**Set-BetaCampaignReportsConfig**](#set-campaign-reports-config) | **PUT** `/campaigns/reports-configuration` | Set campaign reports configuration
[**Set-BetaCampaignTemplateSchedule**](#set-campaign-template-schedule) | **PUT** `/campaign-templates/{id}/schedule` | Set campaign template schedule
[**Start-BetaCampaign**](#start-campaign) | **POST** `/campaigns/{id}/activate` | Activate a campaign
[**Start-BetaCampaignRemediationScan**](#start-campaign-remediation-scan) | **POST** `/campaigns/{id}/run-remediation-scan` | Run campaign remediation scan
[**Start-BetaCampaignReport**](#start-campaign-report) | **POST** `/campaigns/{id}/run-report/{type}` | Run campaign report
[**Start-BetaGenerateCampaignTemplate**](#start-generate-campaign-template) | **POST** `/campaign-templates/{id}/generate` | Generate a campaign from template
[**Update-BetaCampaign**](#update-campaign) | **PATCH** `/campaigns/{id}` | Update a campaign


## complete-campaign
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
:::caution

This endpoint will run successfully for any campaigns that are **past due**.

This endpoint will return a content error if the campaign is **not past due**.

:::

Use this API to complete a certification campaign. This functionality is provided to admins so that they
can complete a certification even if all items have not been completed. Though this Beta endpoint has been deprecated, you can find its V3 equivalent [here](https://developer.sailpoint.com/docs/api/v3/complete-campaign).

A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API.


[API Spec](https://developer.sailpoint.com/docs/api/beta/complete-campaign)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Campaign ID.
 Body  | CompleteCampaignOptions | [**CompleteCampaignOptions**](../models/complete-campaign-options) |   (optional) | Optional. Default behavior is for the campaign to auto-approve upon completion, unless autoCompleteAction=REVOKE

### Return type
[**SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted - Returned if the request was successfully accepted into the system. | SystemCollectionsHashtable
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Campaign ID.
$CompleteCampaignOptions = @"{
  "autoCompleteAction" : "REVOKE"
}"@

# Complete a campaign

try {
    Complete-BetaCampaign -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Complete-BetaCampaign -Id $Id -CompleteCampaignOptions $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Complete-BetaCampaign"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-campaign
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Use this API to create a certification campaign with the information provided in the request body. Though this Beta endpoint has been deprecated, you can find its V3 equivalent [here](https://developer.sailpoint.com/docs/api/v3/create-campaign).

A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API.


[API Spec](https://developer.sailpoint.com/docs/api/beta/create-campaign)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Campaign | [**Campaign**](../models/campaign) | True  | 

### Return type
[**Campaign**](../models/campaign)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | This response indicates that the requested campaign has been successfully accepted into the system, and its representation is returned by the API. | Campaign
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Campaign = @"{
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
}"@

# Create campaign

try {
    $Result = ConvertFrom-JsonToCampaign -Json $Campaign
    New-BetaCampaign -Campaign $Result 
    
    # Below is a request that includes all optional parameters
    # New-BetaCampaign -Campaign $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-BetaCampaign"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-campaign-template
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Use this API to create a campaign template based on campaign. Though this Beta endpoint has been deprecated, you can find its V3 equivalent [here](https://developer.sailpoint.com/docs/api/v3/create-campaign-template).

A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API.


[API Spec](https://developer.sailpoint.com/docs/api/beta/create-campaign-template)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | CampaignTemplate | [**CampaignTemplate**](../models/campaign-template) | True  | 

### Return type
[**CampaignTemplate**](../models/campaign-template)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Created successfully. | CampaignTemplate
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$CampaignTemplate = @"{
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
}"@

# Create a campaign template

try {
    $Result = ConvertFrom-JsonToCampaignTemplate -Json $CampaignTemplate
    New-BetaCampaignTemplate -CampaignTemplate $Result 
    
    # Below is a request that includes all optional parameters
    # New-BetaCampaignTemplate -CampaignTemplate $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-BetaCampaignTemplate"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-campaign-template
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Use this API to delete a certification campaign template by ID. Though this Beta endpoint has been deprecated, you can find its V3 equivalent [here](https://developer.sailpoint.com/docs/api/v3/delete-campaign-template).

A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API.


[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-campaign-template)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the campaign template being deleted.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c9180835d191a86015d28455b4a2329" # String | ID of the campaign template being deleted.

# Delete a campaign template

try {
    Remove-BetaCampaignTemplate -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-BetaCampaignTemplate -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-BetaCampaignTemplate"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-campaign-template-schedule
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Use this API to delete the schedule for a certification campaign template. The API returns a 404 if there is no schedule set. Though this Beta endpoint has been deprecated, you can find its V3 equivalent [here](https://developer.sailpoint.com/docs/api/v3/delete-campaign-template-schedule).

A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API.


[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-campaign-template-schedule)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the campaign template whose schedule is being deleted.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "04bedce387bd47b2ae1f86eb0bb36dee" # String | ID of the campaign template whose schedule is being deleted.

# Delete campaign template schedule

try {
    Remove-BetaCampaignTemplateSchedule -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-BetaCampaignTemplateSchedule -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-BetaCampaignTemplateSchedule"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-campaigns
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Use this API to delete certification campaigns whose IDs are specified in the provided list of campaign IDs. Though this Beta endpoint has been deprecated, you can find its V3 equivalent [here](https://developer.sailpoint.com/docs/api/v3/delete-campaigns).

A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API.


[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-campaigns)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | DeleteCampaignsRequest | [**DeleteCampaignsRequest**](../models/delete-campaigns-request) | True  | IDs of the campaigns to delete.

### Return type
[**SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted - Returned if the request was successfully accepted into the system. | SystemCollectionsHashtable
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$DeleteCampaignsRequest = @"{
  "ids" : [ "2c9180887335cee10173490db1776c26", "2c9180836a712436016a7125a90c0021" ]
}"@

# Delete campaigns

try {
    $Result = ConvertFrom-JsonToDeleteCampaignsRequest -Json $DeleteCampaignsRequest
    Remove-BetaCampaigns -DeleteCampaignsRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Remove-BetaCampaigns -DeleteCampaignsRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-BetaCampaigns"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-active-campaigns
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Use this API to get a list of campaigns. The API can provide increased level of detail for each campaign for the correct provided query. Though this Beta endpoint has been deprecated, you can find its V3 equivalent [here](https://developer.sailpoint.com/docs/api/v3/get-active-campaigns).

A token with ORG_ADMIN, CERT_ADMIN or REPORT_ADMIN authority is required to call this API.


[API Spec](https://developer.sailpoint.com/docs/api/beta/get-active-campaigns)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Detail | **String** |   (optional) | Determines whether slim, or increased level of detail is provided for each campaign in the returned list. Slim is the default behavior.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **status**: *eq, in*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created**

### Return type
[**GetActiveCampaigns200ResponseInner[]**](../models/get-active-campaigns200-response-inner)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of campaign objects. By default, the API returns a list of SLIM campaigns. | GetActiveCampaigns200ResponseInner[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Detail = "SLIM" # String | Determines whether slim, or increased level of detail is provided for each campaign in the returned list. Slim is the default behavior. (optional)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'name eq "Manager Campaign"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **status**: *eq, in* (optional)
$Sorters = "name" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created** (optional)

# List campaigns

try {
    Get-BetaActiveCampaigns 
    
    # Below is a request that includes all optional parameters
    # Get-BetaActiveCampaigns -Detail $Detail -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaActiveCampaigns"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-campaign
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Use this API to get information for an existing certification campaign by the campaign's ID. Though this endpoint has been deprecated, you can find its V3 equivalent [here](https://developer.sailpoint.com/docs/api/v3/get-campaign).

A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API.


[API Spec](https://developer.sailpoint.com/docs/api/beta/get-campaign)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the campaign to be retrieved.

### Return type
[**Slimcampaign**](../models/slimcampaign)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Campaign object. | Slimcampaign
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808571bcfcf80171c23e4b4221fc" # String | ID of the campaign to be retrieved.

# Get campaign

try {
    Get-BetaCampaign -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-BetaCampaign -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaCampaign"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-campaign-reports
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Use this API to fetch all reports for a certification campaign by campaign ID. Though this Beta endpoint has been deprecated, you can find its V3 equivalent [here](https://developer.sailpoint.com/docs/api/v3/get-campaign-reports).

A token with ORG_ADMIN, CERT_ADMIN or REPORT_ADMIN authority is required to call this API.


[API Spec](https://developer.sailpoint.com/docs/api/beta/get-campaign-reports)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the campaign whose reports are being fetched.

### Return type
[**CampaignReport[]**](../models/campaign-report)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Array of campaign report objects. | CampaignReport[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808571bcfcf80171c23e4b4221fc" # String | ID of the campaign whose reports are being fetched.

# Get campaign reports

try {
    Get-BetaCampaignReports -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-BetaCampaignReports -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaCampaignReports"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-campaign-reports-config
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Use this API to fetch the configuration for certification campaign reports. The configuration includes only one element - identity attributes defined as custom report columns. Though this Beta endpoint has been deprecated, you can find its V3 equivalent [here](https://developer.sailpoint.com/docs/api/v3/get-campaign-reports-config).

A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API.


[API Spec](https://developer.sailpoint.com/docs/api/beta/get-campaign-reports-config)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type
[**CampaignReportsConfig**](../models/campaign-reports-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Campaign report configuration. | CampaignReportsConfig
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell

# Get campaign reports configuration

try {
    Get-BetaCampaignReportsConfig 
    
    # Below is a request that includes all optional parameters
    # Get-BetaCampaignReportsConfig  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaCampaignReportsConfig"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-campaign-template
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Use this API to fetch a certification campaign template by ID. Though this Beta endpoint has been deprecated, you can find its V3 equivalent [here](https://developer.sailpoint.com/docs/api/v3/get-campaign-template).

A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API.


[API Spec](https://developer.sailpoint.com/docs/api/beta/get-campaign-template)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Requested campaign template's ID.

### Return type
[**CampaignTemplate**](../models/campaign-template)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Data for the campaign matching the given ID. | CampaignTemplate
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c9180835d191a86015d28455b4a2329" # String | Requested campaign template's ID.

# Get a campaign template

try {
    Get-BetaCampaignTemplate -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-BetaCampaignTemplate -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaCampaignTemplate"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-campaign-template-schedule
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Use this API to get the schedule for a certification campaign template. The API returns a 404 if there is no schedule set. Though this Beta endpoint has been deprecated, you can find its V3 equivalent [here](https://developer.sailpoint.com/docs/api/v3/get-campaign-template-schedule).

A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API.


[API Spec](https://developer.sailpoint.com/docs/api/beta/get-campaign-template-schedule)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the campaign template whose schedule is being fetched.

### Return type
[**Schedule**](../models/schedule)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Current schedule for the campaign template. See the [Set Campaign Template Schedule endpoint documentation](https://developer.sailpoint.com/docs/api/beta/set-campaign-template-schedule) for more examples. | Schedule
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "04bedce387bd47b2ae1f86eb0bb36dee" # String | ID of the campaign template whose schedule is being fetched.

# Get campaign template schedule

try {
    Get-BetaCampaignTemplateSchedule -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-BetaCampaignTemplateSchedule -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaCampaignTemplateSchedule"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-campaign-templates
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Use this API to get a list of all campaign templates. Scope can be reduced through standard V3 query params. Though this Beta endpoint has been deprecated, you can find its V3 equivalent [here](https://developer.sailpoint.com/docs/api/v3/get-campaign-templates).

The endpoint returns all campaign templates matching the query parameters.

A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API.


[API Spec](https://developer.sailpoint.com/docs/api/beta/get-campaign-templates)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified**
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, ge, gt, in, le, lt, ne, sw*  **id**: *eq, ge, gt, in, le, lt, ne, sw*

### Return type
[**CampaignTemplate[]**](../models/campaign-template)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of campaign template objects. | CampaignTemplate[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Sorters = "name" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional)
$Filters = 'name eq "manager template"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, ge, gt, in, le, lt, ne, sw*  **id**: *eq, ge, gt, in, le, lt, ne, sw* (optional)

# List campaign templates

try {
    Get-BetaCampaignTemplates 
    
    # Below is a request that includes all optional parameters
    # Get-BetaCampaignTemplates -Limit $Limit -Offset $Offset -Count $Count -Sorters $Sorters -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaCampaignTemplates"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## move
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
This API reassigns the specified certifications from one identity to another.  Though this Beta endpoint has been deprecated, you can find its V3 equivalent [here](https://developer.sailpoint.com/docs/api/v3/move).

A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API.


[API Spec](https://developer.sailpoint.com/docs/api/beta/move)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The certification campaign ID
 Body  | AdminReviewReassign | [**AdminReviewReassign**](../models/admin-review-reassign) | True  | 

### Return type
[**CertificationTask**](../models/certification-task)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | The reassign task that has been submitted. | CertificationTask
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The certification campaign ID
$AdminReviewReassign = @"{
  "certificationIds" : [ "af3859464779471211bb8424a563abc1", "af3859464779471211bb8424a563abc2", "af3859464779471211bb8424a563abc3" ],
  "reason" : "reassigned for some reason",
  "reassignTo" : {
    "id" : "ef38f94347e94562b5bb8424a56397d8",
    "type" : "IDENTITY"
  }
}"@

# Reassign certifications

try {
    $Result = ConvertFrom-JsonToAdminReviewReassign -Json $AdminReviewReassign
    Move-Beta -Id $Id -AdminReviewReassign $Result 
    
    # Below is a request that includes all optional parameters
    # Move-Beta -Id $Id -AdminReviewReassign $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Move-Beta"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-campaign-template
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Use this API to update individual fields on a certification campaign template, using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Though this Beta endpoint has been deprecated, you can find its V3 equivalent [here](https://developer.sailpoint.com/docs/api/v3/patch-campaign-template).

A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API.


[API Spec](https://developer.sailpoint.com/docs/api/beta/patch-campaign-template)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the campaign template being modified.
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of campaign update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * deadlineDuration * campaign (all fields that are allowed during create) 

### Return type
[**CampaignTemplate**](../models/campaign-template)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | This response indicates that the PATCH operation succeeded, and the API returns the template&#39;s new representation. | CampaignTemplate
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Id = "2c9180835d191a86015d28455b4a2329" # String | ID of the campaign template being modified.
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ # JsonPatchOperation[] | A list of campaign update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * deadlineDuration * campaign (all fields that are allowed during create) 
 

# Update a campaign template

try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-BetaCampaignTemplate -Id $Id -JsonPatchOperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-BetaCampaignTemplate -Id $Id -JsonPatchOperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-BetaCampaignTemplate"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## set-campaign-reports-config
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Use this API to overwrite the configuration for campaign reports. Though this Beta endpoint has been deprecated, you can find its V3 equivalent [here](https://developer.sailpoint.com/docs/api/v3/set-campaign-reports-config).

A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API.


[API Spec](https://developer.sailpoint.com/docs/api/beta/set-campaign-reports-config)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | CampaignReportsConfig | [**CampaignReportsConfig**](../models/campaign-reports-config) | True  | Campaign report configuration.

### Return type
[**CampaignReportsConfig**](../models/campaign-reports-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The persisted campaign report configuration. | CampaignReportsConfig
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$CampaignReportsConfig = @"{
  "identityAttributeColumns" : [ "firstname", "lastname" ]
}"@

# Set campaign reports configuration

try {
    $Result = ConvertFrom-JsonToCampaignReportsConfig -Json $CampaignReportsConfig
    Set-BetaCampaignReportsConfig -CampaignReportsConfig $Result 
    
    # Below is a request that includes all optional parameters
    # Set-BetaCampaignReportsConfig -CampaignReportsConfig $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Set-BetaCampaignReportsConfig"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## set-campaign-template-schedule
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Use this API to set the schedule for a certification campaign template. If a schedule already exists, the API overwrites it with the new one. 
Though this Beta endpoint has been deprecated, you can find its V3 equivalent [here](https://developer.sailpoint.com/docs/api/v3/set-campaign-template-schedule).

A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API.


[API Spec](https://developer.sailpoint.com/docs/api/beta/set-campaign-template-schedule)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the campaign template being scheduled.
 Body  | Schedule | [**Schedule**](../models/schedule) |   (optional) | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "04bedce387bd47b2ae1f86eb0bb36dee" # String | ID of the campaign template being scheduled.
$Schedule = @"{
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
}"@

# Set campaign template schedule

try {
    Set-BetaCampaignTemplateSchedule -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Set-BetaCampaignTemplateSchedule -Id $Id -Schedule $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Set-BetaCampaignTemplateSchedule"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## start-campaign
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Use this API to submit a job to activate the certified campaign with the specified ID. The campaign must be staged. Though this Beta endpoint has been deprecated, you can find its V3 equivalent [here](https://developer.sailpoint.com/docs/api/v3/start-campaign).

A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API.


[API Spec](https://developer.sailpoint.com/docs/api/beta/start-campaign)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Campaign ID.
 Body  | ActivateCampaignOptions | [**ActivateCampaignOptions**](../models/activate-campaign-options) |   (optional) | Optional. If no timezone is specified, the standard UTC timezone is used (i.e. UTC+00:00). Although this can take any timezone, the intended value is the caller's timezone. The activation time calculated from the given timezone may cause the campaign deadline time to be modified, but it will remain within the original date. The timezone must be in a valid ISO 8601 format.

### Return type
[**SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted - Returned if the request was successfully accepted into the system. | SystemCollectionsHashtable
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Campaign ID.
$ActivateCampaignOptions = @"{
  "timeZone" : "-05:00"
}"@

# Activate a campaign

try {
    Start-BetaCampaign -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Start-BetaCampaign -Id $Id -ActivateCampaignOptions $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Start-BetaCampaign"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## start-campaign-remediation-scan
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Use this API to run a remediation scan task for a certification campaign. Though this Beta endpoint has been deprecated, you can find its V3 equivalent [here](https://developer.sailpoint.com/docs/api/v3/start-campaign-remediation-scan).

A token with ORG_ADMIN, CERT_ADMIN or REPORT_ADMIN authority is required to call this API.


[API Spec](https://developer.sailpoint.com/docs/api/beta/start-campaign-remediation-scan)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the campaign the remediation scan is being run for.

### Return type
[**SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted - Returned if the request was successfully accepted into the system. | SystemCollectionsHashtable
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808571bcfcf80171c23e4b4221fc" # String | ID of the campaign the remediation scan is being run for.

# Run campaign remediation scan

try {
    Start-BetaCampaignRemediationScan -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Start-BetaCampaignRemediationScan -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Start-BetaCampaignRemediationScan"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## start-campaign-report
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Use this API to run a report for a certification campaign. Though this Beta endpoint has been deprecated, you can find its V3 equivalent [here](https://developer.sailpoint.com/docs/api/v3/start-campaign-report).

A token with ORG_ADMIN, CERT_ADMIN or REPORT_ADMIN authority is required to call this API.


[API Spec](https://developer.sailpoint.com/docs/api/beta/start-campaign-report)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the campaign the report is being run for.
Path   | Type | [**ReportType**](../models/report-type) | True  | Type of report to run.

### Return type
[**SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted - Returned if the request was successfully accepted into the system. | SystemCollectionsHashtable
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808571bcfcf80171c23e4b4221fc" # String | ID of the campaign the report is being run for.
$Type = "CAMPAIGN_COMPOSITION_REPORT" # ReportType | Type of report to run.

# Run campaign report

try {
    Start-BetaCampaignReport -Id $Id -Type $Type 
    
    # Below is a request that includes all optional parameters
    # Start-BetaCampaignReport -Id $Id -Type $Type  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Start-BetaCampaignReport"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## start-generate-campaign-template
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Use this API to generate a new certification campaign from a campaign template.

The campaign object contained in the template has special formatting applied to its name and description
fields that determine the generated campaign's name/description. Placeholders in those fields are
formatted with the current date and time upon generation.

Placeholders consist of a percent sign followed by a letter indicating what should be inserted. For
example, "%Y" inserts the current year, and a campaign template named "Campaign for %y" generates a
campaign called "Campaign for 2020" (assuming the year at generation time is 2020).

Valid placeholders are the date/time conversion suffix characters supported by [java.util.Formatter](https://docs.oracle.com/javase/8/docs/api/java/util/Formatter.html).

Though this Beta endpoint has been deprecated, you can find its V3 equivalent [here](https://developer.sailpoint.com/docs/api/v3/start-generate-campaign-template).

A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API.


[API Spec](https://developer.sailpoint.com/docs/api/beta/start-generate-campaign-template)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the campaign template to use for generation.

### Return type
[**CampaignReference**](../models/campaign-reference)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | This response indicates that a campaign was successfully generated from this template, and the API returns a reference to the new campaign. | CampaignReference
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c9180835d191a86015d28455b4a2329" # String | ID of the campaign template to use for generation.

# Generate a campaign from template

try {
    Start-BetaGenerateCampaignTemplate -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Start-BetaGenerateCampaignTemplate -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Start-BetaGenerateCampaignTemplate"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-campaign
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Use this API to update individual fields on a certification campaign, using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Though this endpoint has been deprecated, you can find its V3 equivalent [here](https://developer.sailpoint.com/docs/api/v3/update-campaign).

A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API.


[API Spec](https://developer.sailpoint.com/docs/api/beta/update-campaign)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the campaign being modified.
 Body  | RequestBody | [**[]SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0) | True  | A list of campaign update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The fields that can be patched differ based on the status of the campaign.  When the campaign is in the *STAGED* status, you can patch these fields: * name * description * recommendationsEnabled * deadline * emailNotificationEnabled * autoRevokeAllowed  When the campaign is in the *ACTIVE* status, you can patch these fields: * deadline 

### Return type
[**Slimcampaign**](../models/slimcampaign)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | This response indicates that the PATCH operation succeeded, and the API returns the campaign&#39;s new representation. | Slimcampaign
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808571bcfcf80171c23e4b4221fc" # String | ID of the campaign being modified.
$RequestBody =  # SystemCollectionsHashtable[] | A list of campaign update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The fields that can be patched differ based on the status of the campaign.  When the campaign is in the *STAGED* status, you can patch these fields: * name * description * recommendationsEnabled * deadline * emailNotificationEnabled * autoRevokeAllowed  When the campaign is in the *ACTIVE* status, you can patch these fields: * deadline 
 $RequestBody = @"[{op=replace, path=/name, value=This field has been updated!}, {op=copy, from=/name, path=/description}]"@ # SystemCollectionsHashtable[] | A list of campaign update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The fields that can be patched differ based on the status of the campaign.  When the campaign is in the *STAGED* status, you can patch these fields: * name * description * recommendationsEnabled * deadline * emailNotificationEnabled * autoRevokeAllowed  When the campaign is in the *ACTIVE* status, you can patch these fields: * deadline 
 

# Update a campaign

try {
    $Result = ConvertFrom-JsonToRequestBody -Json $RequestBody
    Update-BetaCampaign -Id $Id -RequestBody $Result 
    
    # Below is a request that includes all optional parameters
    # Update-BetaCampaign -Id $Id -RequestBody $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-BetaCampaign"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

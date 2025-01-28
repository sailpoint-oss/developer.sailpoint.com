---
id: v2024-certification-campaigns
title: CertificationCampaigns
pagination_label: CertificationCampaigns
sidebar_label: CertificationCampaigns
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CertificationCampaigns'] 
slug: /tools/sdk/powershell/v2024/methods/certification-campaigns
tags: ['SDK', 'Software Development Kit', 'CertificationCampaigns']
---


# CertificationCampaigns

All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Complete-V2024Campaign**](#complete-campaign) | **POST** `/campaigns/{id}/complete` | Complete a Campaign
[**New-V2024Campaign**](#create-campaign) | **POST** `/campaigns` | Create a campaign
[**New-V2024CampaignTemplate**](#create-campaign-template) | **POST** `/campaign-templates` | Create a Campaign Template
[**Remove-V2024CampaignTemplate**](#delete-campaign-template) | **DELETE** `/campaign-templates/{id}` | Delete a Campaign Template
[**Remove-V2024CampaignTemplateSchedule**](#delete-campaign-template-schedule) | **DELETE** `/campaign-templates/{id}/schedule` | Delete Campaign Template Schedule
[**Remove-V2024Campaigns**](#delete-campaigns) | **POST** `/campaigns/delete` | Delete Campaigns
[**Get-V2024ActiveCampaigns**](#get-active-campaigns) | **GET** `/campaigns` | List Campaigns
[**Get-V2024Campaign**](#get-campaign) | **GET** `/campaigns/{id}` | Get Campaign
[**Get-V2024CampaignReports**](#get-campaign-reports) | **GET** `/campaigns/{id}/reports` | Get Campaign Reports
[**Get-V2024CampaignReportsConfig**](#get-campaign-reports-config) | **GET** `/campaigns/reports-configuration` | Get Campaign Reports Configuration
[**Get-V2024CampaignTemplate**](#get-campaign-template) | **GET** `/campaign-templates/{id}` | Get a Campaign Template
[**Get-V2024CampaignTemplateSchedule**](#get-campaign-template-schedule) | **GET** `/campaign-templates/{id}/schedule` | Get Campaign Template Schedule
[**Get-V2024CampaignTemplates**](#get-campaign-templates) | **GET** `/campaign-templates` | List Campaign Templates
[**Move-V2024**](#move) | **POST** `/campaigns/{id}/reassign` | Reassign Certifications
[**Update-V2024CampaignTemplate**](#patch-campaign-template) | **PATCH** `/campaign-templates/{id}` | Update a Campaign Template
[**Set-V2024CampaignReportsConfig**](#set-campaign-reports-config) | **PUT** `/campaigns/reports-configuration` | Set Campaign Reports Configuration
[**Set-V2024CampaignTemplateSchedule**](#set-campaign-template-schedule) | **PUT** `/campaign-templates/{id}/schedule` | Set Campaign Template Schedule
[**Start-V2024Campaign**](#start-campaign) | **POST** `/campaigns/{id}/activate` | Activate a Campaign
[**Start-V2024CampaignRemediationScan**](#start-campaign-remediation-scan) | **POST** `/campaigns/{id}/run-remediation-scan` | Run Campaign Remediation Scan
[**Start-V2024CampaignReport**](#start-campaign-report) | **POST** `/campaigns/{id}/run-report/{type}` | Run Campaign Report
[**Start-V2024GenerateCampaignTemplate**](#start-generate-campaign-template) | **POST** `/campaign-templates/{id}/generate` | Generate a Campaign from Template
[**Update-V2024Campaign**](#update-campaign) | **PATCH** `/campaigns/{id}` | Update a Campaign


## complete-campaign

:::caution

This endpoint will run successfully for any campaigns that are **past due**.

This endpoint will return a content error if the campaign is **not past due**.

:::

Use this API to complete a certification campaign. This functionality is provided to admins so that they
can complete a certification even if all items have not been completed.


### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Campaign ID.
 Body  | CampaignCompleteOptions | [**CampaignCompleteOptions**](../models/campaign-complete-options) |   (optional) | Optional. Default behavior is for the campaign to auto-approve upon completion, unless autoCompleteAction=REVOKE

### Return type

[**SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted - Returned if the request was successfully accepted into the system. | SystemCollectionsHashtable
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Campaign ID.
$CampaignCompleteOptions = @"{
  "autoCompleteAction" : "REVOKE"
}"@
# Complete a Campaign
try {
    Complete-V2024Campaign-V2024Id $Id 
    
    # Below is a request that includes all optional parameters
    # Complete-V2024Campaign -V2024Id $Id -V2024CampaignCompleteOptions $CampaignCompleteOptions  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Complete-V2024Campaign"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## create-campaign

Use this API to create a certification campaign with the information provided in the request body.    


### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Campaign | [**Campaign**](../models/campaign) | True  | 

### Return type

[**Campaign**](../models/campaign)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | This response indicates that the requested campaign was successfully created, and the API returns its representation. | Campaign
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
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
# Create a campaign
try {
    $Result = ConvertFrom-JsonToCampaign -Json $Campaign
    New-V2024Campaign-V2024Campaign $Result
    
    # Below is a request that includes all optional parameters
    # New-V2024Campaign -V2024Campaign $Campaign  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2024Campaign"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## create-campaign-template

Use this API to create a certification campaign template based on campaign.


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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
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
# Create a Campaign Template
try {
    $Result = ConvertFrom-JsonToCampaignTemplate -Json $CampaignTemplate
    New-V2024CampaignTemplate-V2024CampaignTemplate $Result
    
    # Below is a request that includes all optional parameters
    # New-V2024CampaignTemplate -V2024CampaignTemplate $CampaignTemplate  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2024CampaignTemplate"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## delete-campaign-template

Use this API to delete a certification campaign template by ID.


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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c9180835d191a86015d28455b4a2329" # String | ID of the campaign template being deleted.
# Delete a Campaign Template
try {
    Remove-V2024CampaignTemplate-V2024Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-V2024CampaignTemplate -V2024Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2024CampaignTemplate"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## delete-campaign-template-schedule

Use this API to delete the schedule for a certification campaign template. The API returns a 404 if there is no schedule set.


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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "04bedce387bd47b2ae1f86eb0bb36dee" # String | ID of the campaign template whose schedule is being deleted.
# Delete Campaign Template Schedule
try {
    Remove-V2024CampaignTemplateSchedule-V2024Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-V2024CampaignTemplateSchedule -V2024Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2024CampaignTemplateSchedule"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## delete-campaigns

Use this API to delete certification campaigns whose IDs are specified in the provided list of campaign IDs.


### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | CampaignsDeleteRequest | [**CampaignsDeleteRequest**](../models/campaigns-delete-request) | True  | IDs of the campaigns to delete.

### Return type

[**SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted - Returned if the request was successfully accepted into the system. | SystemCollectionsHashtable
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$CampaignsDeleteRequest = @"{
  "ids" : [ "2c9180887335cee10173490db1776c26", "2c9180836a712436016a7125a90c0021" ]
}"@
# Delete Campaigns
try {
    $Result = ConvertFrom-JsonToCampaignsDeleteRequest -Json $CampaignsDeleteRequest
    Remove-V2024Campaigns-V2024CampaignsDeleteRequest $Result
    
    # Below is a request that includes all optional parameters
    # Remove-V2024Campaigns -V2024CampaignsDeleteRequest $CampaignsDeleteRequest  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2024Campaigns"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-active-campaigns

Use this API to get a list of campaigns. This API can provide increased level of detail for each campaign for the correct provided query.


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
200 | A list of campaign objects. By default list of SLIM campaigns is returned. | GetActiveCampaigns200ResponseInner[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
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
# List Campaigns
try {
    Get-V2024ActiveCampaigns
    
    # Below is a request that includes all optional parameters
    # Get-V2024ActiveCampaigns -V2024Detail $Detail -V2024Limit $Limit -V2024Offset $Offset -V2024Count $Count -V2024Filters $Filters -V2024Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024ActiveCampaigns"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-campaign

Use this API to get information for an existing certification campaign by the campaign's ID.


### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the campaign to be retrieved.
  Query | Detail | **String** |   (optional) | Determines whether slim, or increased level of detail is provided for each campaign in the returned list. Slim is the default behavior.

### Return type

[**GetActiveCampaigns200ResponseInner**](../models/get-active-campaigns200-response-inner)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Requested campaign object. | GetActiveCampaigns200ResponseInner
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808571bcfcf80171c23e4b4221fc" # String | ID of the campaign to be retrieved.
$Detail = "SLIM" # String | Determines whether slim, or increased level of detail is provided for each campaign in the returned list. Slim is the default behavior. (optional)
# Get Campaign
try {
    Get-V2024Campaign-V2024Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-V2024Campaign -V2024Id $Id -V2024Detail $Detail  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024Campaign"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-campaign-reports

Use this API to fetch all reports for a certification campaign by campaign ID.


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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808571bcfcf80171c23e4b4221fc" # String | ID of the campaign whose reports are being fetched.
# Get Campaign Reports
try {
    Get-V2024CampaignReports-V2024Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-V2024CampaignReports -V2024Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024CampaignReports"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-campaign-reports-config

Use this API to fetch the configuration for certification campaign reports. The configuration includes only one element - identity attributes defined as custom report columns. 


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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
# Get Campaign Reports Configuration
try {
    Get-V2024CampaignReportsConfig
    
    # Below is a request that includes all optional parameters
    # Get-V2024CampaignReportsConfig  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024CampaignReportsConfig"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-campaign-template

Use this API to fetch a certification campaign template by ID.


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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c9180835d191a86015d28455b4a2329" # String | Requested campaign template's ID.
# Get a Campaign Template
try {
    Get-V2024CampaignTemplate-V2024Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-V2024CampaignTemplate -V2024Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024CampaignTemplate"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-campaign-template-schedule

Use this API to get the schedule for a certification campaign template. The API returns a 404 if there is no schedule set.


### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the campaign template whose schedule is being fetched.

### Return type

[**Schedule**](../models/schedule)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Current schedule for the campaign template. See the [Set Campaign Template Schedule endpoint documentation](https://developer.sailpoint.com/docs/api/v3/set-campaign-template-schedule) for more examples. | Schedule
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "04bedce387bd47b2ae1f86eb0bb36dee" # String | ID of the campaign template whose schedule is being fetched.
# Get Campaign Template Schedule
try {
    Get-V2024CampaignTemplateSchedule-V2024Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-V2024CampaignTemplateSchedule -V2024Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024CampaignTemplateSchedule"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-campaign-templates

Use this API to get a list of all campaign templates. Scope can be reduced through standard V3 query params.

The API returns all campaign templates matching the query parameters. 


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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
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
# List Campaign Templates
try {
    Get-V2024CampaignTemplates
    
    # Below is a request that includes all optional parameters
    # Get-V2024CampaignTemplates -V2024Limit $Limit -V2024Offset $Offset -V2024Count $Count -V2024Sorters $Sorters -V2024Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024CampaignTemplates"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## move

This API reassigns the specified certifications from one identity to another.    


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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
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
# Reassign Certifications
try {
    $Result = ConvertFrom-JsonToAdminReviewReassign -Json $AdminReviewReassign
    Move-V2024-V2024Id $Id -V2024AdminReviewReassign $Result
    
    # Below is a request that includes all optional parameters
    # Move-V2024 -V2024Id $Id -V2024AdminReviewReassign $AdminReviewReassign  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Move-V2024"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## patch-campaign-template

Use this API to update individual fields on a certification campaign template, using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.


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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Id = "2c9180835d191a86015d28455b4a2329" # String | ID of the campaign template being modified.
 # JsonPatchOperation[] | A list of campaign update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * deadlineDuration * campaign (all fields that are allowed during create) 
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ 

# Update a Campaign Template
try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-V2024CampaignTemplate-V2024Id $Id -V2024JsonPatchOperation $Result
    
    # Below is a request that includes all optional parameters
    # Update-V2024CampaignTemplate -V2024Id $Id -V2024JsonPatchOperation $JsonPatchOperation  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-V2024CampaignTemplate"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## set-campaign-reports-config

Use this API to overwrite the configuration for campaign reports. 


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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$CampaignReportsConfig = @"{
  "identityAttributeColumns" : [ "firstname", "lastname" ]
}"@
# Set Campaign Reports Configuration
try {
    $Result = ConvertFrom-JsonToCampaignReportsConfig -Json $CampaignReportsConfig
    Set-V2024CampaignReportsConfig-V2024CampaignReportsConfig $Result
    
    # Below is a request that includes all optional parameters
    # Set-V2024CampaignReportsConfig -V2024CampaignReportsConfig $CampaignReportsConfig  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Set-V2024CampaignReportsConfig"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## set-campaign-template-schedule

Use this API to set the schedule for a certification campaign template. If a schedule already exists, the API overwrites it with the new one.


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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
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
# Set Campaign Template Schedule
try {
    Set-V2024CampaignTemplateSchedule-V2024Id $Id 
    
    # Below is a request that includes all optional parameters
    # Set-V2024CampaignTemplateSchedule -V2024Id $Id -V2024Schedule $Schedule  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Set-V2024CampaignTemplateSchedule"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## start-campaign

Use this API to submit a job to activate the certified campaign with the specified ID. The campaign must be staged.


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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
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
# Activate a Campaign
try {
    Start-V2024Campaign-V2024Id $Id 
    
    # Below is a request that includes all optional parameters
    # Start-V2024Campaign -V2024Id $Id -V2024ActivateCampaignOptions $ActivateCampaignOptions  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Start-V2024Campaign"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## start-campaign-remediation-scan

Use this API to run a remediation scan task for a certification campaign.


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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808571bcfcf80171c23e4b4221fc" # String | ID of the campaign the remediation scan is being run for.
# Run Campaign Remediation Scan
try {
    Start-V2024CampaignRemediationScan-V2024Id $Id 
    
    # Below is a request that includes all optional parameters
    # Start-V2024CampaignRemediationScan -V2024Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Start-V2024CampaignRemediationScan"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## start-campaign-report

Use this API to run a report for a certification campaign.


### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the campaign the report is being run for.
Path   | Type | [**ReportType**](../models/report-type) | True  | Type of the report to run.

### Return type

[**SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted - Returned if the request was successfully accepted into the system. | SystemCollectionsHashtable
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808571bcfcf80171c23e4b4221fc" # String | ID of the campaign the report is being run for.
$Type = "CAMPAIGN_COMPOSITION_REPORT" # ReportType | Type of the report to run.
# Run Campaign Report
try {
    Start-V2024CampaignReport-V2024Id $Id -V2024Type $Type 
    
    # Below is a request that includes all optional parameters
    # Start-V2024CampaignReport -V2024Id $Id -V2024Type $Type  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Start-V2024CampaignReport"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## start-generate-campaign-template

Use this API to generate a new certification campaign from a campaign template.

The campaign object contained in the template has special formatting applied to its name and description
fields that determine the generated campaign's name/description. Placeholders in those fields are
formatted with the current date and time upon generation.

Placeholders consist of a percent sign followed by a letter indicating what should be inserted. For
example, "%Y" inserts the current year, and a campaign template named "Campaign for %y" generates a
campaign called "Campaign for 2020" (assuming the year at generation time is 2020).

Valid placeholders are the date/time conversion suffix characters supported by [java.util.Formatter](https://docs.oracle.com/javase/8/docs/api/java/util/Formatter.html).


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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c9180835d191a86015d28455b4a2329" # String | ID of the campaign template to use for generation.
# Generate a Campaign from Template
try {
    Start-V2024GenerateCampaignTemplate-V2024Id $Id 
    
    # Below is a request that includes all optional parameters
    # Start-V2024GenerateCampaignTemplate -V2024Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Start-V2024GenerateCampaignTemplate"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## update-campaign

Use this API to update individual fields on a certification campaign, using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.


### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the campaign template being modified.
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of campaign update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The fields that can be patched differ based on the status of the campaign.  When the campaign is in the *STAGED* status, you can patch these fields: * name * description * recommendationsEnabled * deadline * emailNotificationEnabled * autoRevokeAllowed  When the campaign is in the *ACTIVE* status, you can patch these fields: * deadline 

### Return type

[**SlimCampaign**](../models/slim-campaign)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | This response indicates that the PATCH operation succeeded, and the API returns the campaign&#39;s new representation. | SlimCampaign
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808571bcfcf80171c23e4b4221fc" # String | ID of the campaign template being modified.
 # JsonPatchOperation[] | A list of campaign update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The fields that can be patched differ based on the status of the campaign.  When the campaign is in the *STAGED* status, you can patch these fields: * name * description * recommendationsEnabled * deadline * emailNotificationEnabled * autoRevokeAllowed  When the campaign is in the *ACTIVE* status, you can patch these fields: * deadline 
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ 

# Update a Campaign
try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-V2024Campaign-V2024Id $Id -V2024JsonPatchOperation $Result
    
    # Below is a request that includes all optional parameters
    # Update-V2024Campaign -V2024Id $Id -V2024JsonPatchOperation $JsonPatchOperation  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-V2024Campaign"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 



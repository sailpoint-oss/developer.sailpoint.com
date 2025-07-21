---
id: certification-campaigns
title: CertificationCampaigns
pagination_label: CertificationCampaigns
sidebar_label: CertificationCampaigns
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CertificationCampaigns', 'CertificationCampaigns'] 
slug: /tools/sdk/go/v3/methods/certification-campaigns
tags: ['SDK', 'Software Development Kit', 'CertificationCampaigns', 'CertificationCampaigns']
---

# CertificationCampaignsAPI
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

For more information about certifications and certification campaigns, refer to [Certifications](https://documentation.sailpoint.com/saas/user-help/certifications.html).
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**complete-campaign**](#complete-campaign) | **Post** `/campaigns/{id}/complete` | Complete a campaign
[**create-campaign**](#create-campaign) | **Post** `/campaigns` | Create a campaign
[**create-campaign-template**](#create-campaign-template) | **Post** `/campaign-templates` | Create a campaign template
[**delete-campaign-template**](#delete-campaign-template) | **Delete** `/campaign-templates/{id}` | Delete a campaign template
[**delete-campaign-template-schedule**](#delete-campaign-template-schedule) | **Delete** `/campaign-templates/{id}/schedule` | Delete campaign template schedule
[**delete-campaigns**](#delete-campaigns) | **Post** `/campaigns/delete` | Delete campaigns
[**get-active-campaigns**](#get-active-campaigns) | **Get** `/campaigns` | List campaigns
[**get-campaign**](#get-campaign) | **Get** `/campaigns/{id}` | Get campaign
[**get-campaign-reports**](#get-campaign-reports) | **Get** `/campaigns/{id}/reports` | Get campaign reports
[**get-campaign-reports-config**](#get-campaign-reports-config) | **Get** `/campaigns/reports-configuration` | Get campaign reports configuration
[**get-campaign-template**](#get-campaign-template) | **Get** `/campaign-templates/{id}` | Get a campaign template
[**get-campaign-template-schedule**](#get-campaign-template-schedule) | **Get** `/campaign-templates/{id}/schedule` | Get campaign template schedule
[**get-campaign-templates**](#get-campaign-templates) | **Get** `/campaign-templates` | List campaign templates
[**move**](#move) | **Post** `/campaigns/{id}/reassign` | Reassign certifications
[**patch-campaign-template**](#patch-campaign-template) | **Patch** `/campaign-templates/{id}` | Update a campaign template
[**set-campaign-reports-config**](#set-campaign-reports-config) | **Put** `/campaigns/reports-configuration` | Set campaign reports configuration
[**set-campaign-template-schedule**](#set-campaign-template-schedule) | **Put** `/campaign-templates/{id}/schedule` | Set campaign template schedule
[**start-campaign**](#start-campaign) | **Post** `/campaigns/{id}/activate` | Activate a campaign
[**start-campaign-remediation-scan**](#start-campaign-remediation-scan) | **Post** `/campaigns/{id}/run-remediation-scan` | Run campaign remediation scan
[**start-campaign-report**](#start-campaign-report) | **Post** `/campaigns/{id}/run-report/{type}` | Run campaign report
[**start-generate-campaign-template**](#start-generate-campaign-template) | **Post** `/campaign-templates/{id}/generate` | Generate a campaign from template
[**update-campaign**](#update-campaign) | **Patch** `/campaigns/{id}` | Update a campaign


## complete-campaign
Complete a campaign
:::caution

This endpoint will run successfully for any campaigns that are **past due**.

This endpoint will return a content error if the campaign is **not past due**.

:::

Use this API to complete a certification campaign. This functionality is provided to admins so that they
can complete a certification even if all items have not been completed.


[API Spec](https://developer.sailpoint.com/docs/api/v3/complete-campaign)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Campaign ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCompleteCampaignRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **campaignCompleteOptions** | [**CampaignCompleteOptions**](../models/campaign-complete-options) | Optional. Default behavior is for the campaign to auto-approve upon completion, unless autoCompleteAction&#x3D;REVOKE | 

### Return type

**map[string]interface{}**

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Campaign ID. # string | Campaign ID.
    campaigncompleteoptions := []byte(`{
          "autoCompleteAction" : "REVOKE"
        }`) // CampaignCompleteOptions | Optional. Default behavior is for the campaign to auto-approve upon completion, unless autoCompleteAction=REVOKE (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.CertificationCampaignsAPI.CompleteCampaign(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V3.CertificationCampaignsAPI.CompleteCampaign(context.Background(), id).CampaignCompleteOptions(campaignCompleteOptions).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignsAPI.CompleteCampaign``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CompleteCampaign`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `CertificationCampaignsAPI.CompleteCampaign`: %v\n", resp)
}
```

[[Back to top]](#)

## create-campaign
Create a campaign
Use this API to create a certification campaign with the information provided in the request body.    


[API Spec](https://developer.sailpoint.com/docs/api/v3/create-campaign)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateCampaignRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaign** | [**Campaign**](../models/campaign) |  | 

### Return type

[**Campaign**](../models/campaign)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    campaign := []byte(`{
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
        }`) // Campaign | 

    var campaign v3.Campaign
    if err := json.Unmarshal(campaign, &campaign); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.CertificationCampaignsAPI.CreateCampaign(context.Background()).Campaign(campaign).Execute()
	  //resp, r, err := apiClient.V3.CertificationCampaignsAPI.CreateCampaign(context.Background()).Campaign(campaign).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignsAPI.CreateCampaign``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateCampaign`: Campaign
    fmt.Fprintf(os.Stdout, "Response from `CertificationCampaignsAPI.CreateCampaign`: %v\n", resp)
}
```

[[Back to top]](#)

## create-campaign-template
Create a campaign template
Use this API to create a certification campaign template based on campaign.


[API Spec](https://developer.sailpoint.com/docs/api/v3/create-campaign-template)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateCampaignTemplateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignTemplate** | [**CampaignTemplate**](../models/campaign-template) |  | 

### Return type

[**CampaignTemplate**](../models/campaign-template)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    
    v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    campaigntemplate := []byte(`{
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
        }`) // CampaignTemplate | 

    var campaignTemplate v3.CampaignTemplate
    if err := json.Unmarshal(campaigntemplate, &campaignTemplate); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.CertificationCampaignsAPI.CreateCampaignTemplate(context.Background()).CampaignTemplate(campaignTemplate).Execute()
	  //resp, r, err := apiClient.V3.CertificationCampaignsAPI.CreateCampaignTemplate(context.Background()).CampaignTemplate(campaignTemplate).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignsAPI.CreateCampaignTemplate``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateCampaignTemplate`: CampaignTemplate
    fmt.Fprintf(os.Stdout, "Response from `CertificationCampaignsAPI.CreateCampaignTemplate`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-campaign-template
Delete a campaign template
Use this API to delete a certification campaign template by ID.


[API Spec](https://developer.sailpoint.com/docs/api/v3/delete-campaign-template)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the campaign template being deleted. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCampaignTemplateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

 (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `2c9180835d191a86015d28455b4a2329` // string | ID of the campaign template being deleted. # string | ID of the campaign template being deleted.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V3.CertificationCampaignsAPI.DeleteCampaignTemplate(context.Background(), id).Execute()
	  //r, err := apiClient.V3.CertificationCampaignsAPI.DeleteCampaignTemplate(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignsAPI.DeleteCampaignTemplate``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-campaign-template-schedule
Delete campaign template schedule
Use this API to delete the schedule for a certification campaign template. The API returns a 404 if there is no schedule set.


[API Spec](https://developer.sailpoint.com/docs/api/v3/delete-campaign-template-schedule)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the campaign template whose schedule is being deleted. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCampaignTemplateScheduleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

 (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `04bedce387bd47b2ae1f86eb0bb36dee` // string | ID of the campaign template whose schedule is being deleted. # string | ID of the campaign template whose schedule is being deleted.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V3.CertificationCampaignsAPI.DeleteCampaignTemplateSchedule(context.Background(), id).Execute()
	  //r, err := apiClient.V3.CertificationCampaignsAPI.DeleteCampaignTemplateSchedule(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignsAPI.DeleteCampaignTemplateSchedule``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-campaigns
Delete campaigns
Use this API to delete certification campaigns whose IDs are specified in the provided list of campaign IDs.


[API Spec](https://developer.sailpoint.com/docs/api/v3/delete-campaigns)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCampaignsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignsDeleteRequest** | [**CampaignsDeleteRequest**](../models/campaigns-delete-request) | IDs of the campaigns to delete. | 

### Return type

**map[string]interface{}**

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    campaignsdeleterequest := []byte(`{
          "ids" : [ "2c9180887335cee10173490db1776c26", "2c9180836a712436016a7125a90c0021" ]
        }`) // CampaignsDeleteRequest | IDs of the campaigns to delete.

    var campaignsDeleteRequest v3.CampaignsDeleteRequest
    if err := json.Unmarshal(campaignsdeleterequest, &campaignsDeleteRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.CertificationCampaignsAPI.DeleteCampaigns(context.Background()).CampaignsDeleteRequest(campaignsDeleteRequest).Execute()
	  //resp, r, err := apiClient.V3.CertificationCampaignsAPI.DeleteCampaigns(context.Background()).CampaignsDeleteRequest(campaignsDeleteRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignsAPI.DeleteCampaigns``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCampaigns`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `CertificationCampaignsAPI.DeleteCampaigns`: %v\n", resp)
}
```

[[Back to top]](#)

## get-active-campaigns
List campaigns
Use this API to get a list of campaigns. This API can provide increased level of detail for each campaign for the correct provided query.


[API Spec](https://developer.sailpoint.com/docs/api/v3/get-active-campaigns)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetActiveCampaignsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **detail** | **string** | Determines whether slim, or increased level of detail is provided for each campaign in the returned list. Slim is the default behavior. | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **status**: *eq, in* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created** | 

### Return type

[**[]GetActiveCampaigns200ResponseInner**](../models/get-active-campaigns200-response-inner)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    detail := `FULL` // string | Determines whether slim, or increased level of detail is provided for each campaign in the returned list. Slim is the default behavior. (optional) # string | Determines whether slim, or increased level of detail is provided for each campaign in the returned list. Slim is the default behavior. (optional)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `name eq "Manager Campaign"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **status**: *eq, in* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **status**: *eq, in* (optional)
    sorters := `name` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created** (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.CertificationCampaignsAPI.GetActiveCampaigns(context.Background()).Execute()
	  //resp, r, err := apiClient.V3.CertificationCampaignsAPI.GetActiveCampaigns(context.Background()).Detail(detail).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignsAPI.GetActiveCampaigns``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetActiveCampaigns`: []GetActiveCampaigns200ResponseInner
    fmt.Fprintf(os.Stdout, "Response from `CertificationCampaignsAPI.GetActiveCampaigns`: %v\n", resp)
}
```

[[Back to top]](#)

## get-campaign
Get campaign
Use this API to get information for an existing certification campaign by the campaign's ID.


[API Spec](https://developer.sailpoint.com/docs/api/v3/get-campaign)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the campaign to be retrieved. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCampaignRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **detail** | **string** | Determines whether slim, or increased level of detail is provided for each campaign in the returned list. Slim is the default behavior. | 

### Return type

[**GetCampaign200Response**](../models/get-campaign200-response)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `2c91808571bcfcf80171c23e4b4221fc` // string | ID of the campaign to be retrieved. # string | ID of the campaign to be retrieved.
    detail := `FULL` // string | Determines whether slim, or increased level of detail is provided for each campaign in the returned list. Slim is the default behavior. (optional) # string | Determines whether slim, or increased level of detail is provided for each campaign in the returned list. Slim is the default behavior. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.CertificationCampaignsAPI.GetCampaign(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V3.CertificationCampaignsAPI.GetCampaign(context.Background(), id).Detail(detail).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignsAPI.GetCampaign``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCampaign`: GetCampaign200Response
    fmt.Fprintf(os.Stdout, "Response from `CertificationCampaignsAPI.GetCampaign`: %v\n", resp)
}
```

[[Back to top]](#)

## get-campaign-reports
Get campaign reports
Use this API to fetch all reports for a certification campaign by campaign ID.


[API Spec](https://developer.sailpoint.com/docs/api/v3/get-campaign-reports)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the campaign whose reports are being fetched. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCampaignReportsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**[]CampaignReport**](../models/campaign-report)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `2c91808571bcfcf80171c23e4b4221fc` // string | ID of the campaign whose reports are being fetched. # string | ID of the campaign whose reports are being fetched.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.CertificationCampaignsAPI.GetCampaignReports(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V3.CertificationCampaignsAPI.GetCampaignReports(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignsAPI.GetCampaignReports``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCampaignReports`: []CampaignReport
    fmt.Fprintf(os.Stdout, "Response from `CertificationCampaignsAPI.GetCampaignReports`: %v\n", resp)
}
```

[[Back to top]](#)

## get-campaign-reports-config
Get campaign reports configuration
Use this API to fetch the configuration for certification campaign reports. The configuration includes only one element - identity attributes defined as custom report columns. 


[API Spec](https://developer.sailpoint.com/docs/api/v3/get-campaign-reports-config)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetCampaignReportsConfigRequest struct via the builder pattern


### Return type

[**CampaignReportsConfig**](../models/campaign-reports-config)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.CertificationCampaignsAPI.GetCampaignReportsConfig(context.Background()).Execute()
	  //resp, r, err := apiClient.V3.CertificationCampaignsAPI.GetCampaignReportsConfig(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignsAPI.GetCampaignReportsConfig``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCampaignReportsConfig`: CampaignReportsConfig
    fmt.Fprintf(os.Stdout, "Response from `CertificationCampaignsAPI.GetCampaignReportsConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## get-campaign-template
Get a campaign template
Use this API to fetch a certification campaign template by ID.


[API Spec](https://developer.sailpoint.com/docs/api/v3/get-campaign-template)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Requested campaign template&#39;s ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCampaignTemplateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**CampaignTemplate**](../models/campaign-template)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `2c9180835d191a86015d28455b4a2329` // string | Requested campaign template's ID. # string | Requested campaign template's ID.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.CertificationCampaignsAPI.GetCampaignTemplate(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V3.CertificationCampaignsAPI.GetCampaignTemplate(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignsAPI.GetCampaignTemplate``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCampaignTemplate`: CampaignTemplate
    fmt.Fprintf(os.Stdout, "Response from `CertificationCampaignsAPI.GetCampaignTemplate`: %v\n", resp)
}
```

[[Back to top]](#)

## get-campaign-template-schedule
Get campaign template schedule
Use this API to get the schedule for a certification campaign template. The API returns a 404 if there is no schedule set.


[API Spec](https://developer.sailpoint.com/docs/api/v3/get-campaign-template-schedule)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the campaign template whose schedule is being fetched. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCampaignTemplateScheduleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Schedule**](../models/schedule)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `04bedce387bd47b2ae1f86eb0bb36dee` // string | ID of the campaign template whose schedule is being fetched. # string | ID of the campaign template whose schedule is being fetched.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.CertificationCampaignsAPI.GetCampaignTemplateSchedule(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V3.CertificationCampaignsAPI.GetCampaignTemplateSchedule(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignsAPI.GetCampaignTemplateSchedule``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCampaignTemplateSchedule`: Schedule
    fmt.Fprintf(os.Stdout, "Response from `CertificationCampaignsAPI.GetCampaignTemplateSchedule`: %v\n", resp)
}
```

[[Back to top]](#)

## get-campaign-templates
List campaign templates
Use this API to get a list of all campaign templates. Scope can be reduced through standard V3 query params.

The API returns all campaign templates matching the query parameters. 


[API Spec](https://developer.sailpoint.com/docs/api/v3/get-campaign-templates)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetCampaignTemplatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, ge, gt, in, le, lt, ne, sw*  **id**: *eq, ge, gt, in, le, lt, ne, sw* | 

### Return type

[**[]CampaignTemplate**](../models/campaign-template)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    sorters := `name` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional)
    filters := `name eq "manager template"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, ge, gt, in, le, lt, ne, sw*  **id**: *eq, ge, gt, in, le, lt, ne, sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, ge, gt, in, le, lt, ne, sw*  **id**: *eq, ge, gt, in, le, lt, ne, sw* (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.CertificationCampaignsAPI.GetCampaignTemplates(context.Background()).Execute()
	  //resp, r, err := apiClient.V3.CertificationCampaignsAPI.GetCampaignTemplates(context.Background()).Limit(limit).Offset(offset).Count(count).Sorters(sorters).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignsAPI.GetCampaignTemplates``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCampaignTemplates`: []CampaignTemplate
    fmt.Fprintf(os.Stdout, "Response from `CertificationCampaignsAPI.GetCampaignTemplates`: %v\n", resp)
}
```

[[Back to top]](#)

## move
Reassign certifications
This API reassigns the specified certifications from one identity to another.    


[API Spec](https://developer.sailpoint.com/docs/api/v3/move)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The certification campaign ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiMoveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **adminReviewReassign** | [**AdminReviewReassign**](../models/admin-review-reassign) |  | 

### Return type

[**CertificationTask**](../models/certification-task)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The certification campaign ID # string | The certification campaign ID
    adminreviewreassign := []byte(`{
          "certificationIds" : [ "af3859464779471211bb8424a563abc1", "af3859464779471211bb8424a563abc2", "af3859464779471211bb8424a563abc3" ],
          "reason" : "reassigned for some reason",
          "reassignTo" : {
            "id" : "ef38f94347e94562b5bb8424a56397d8",
            "type" : "IDENTITY"
          }
        }`) // AdminReviewReassign | 

    var adminReviewReassign v3.AdminReviewReassign
    if err := json.Unmarshal(adminreviewreassign, &adminReviewReassign); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.CertificationCampaignsAPI.Move(context.Background(), id).AdminReviewReassign(adminReviewReassign).Execute()
	  //resp, r, err := apiClient.V3.CertificationCampaignsAPI.Move(context.Background(), id).AdminReviewReassign(adminReviewReassign).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignsAPI.Move``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `Move`: CertificationTask
    fmt.Fprintf(os.Stdout, "Response from `CertificationCampaignsAPI.Move`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-campaign-template
Update a campaign template
Use this API to update individual fields on a certification campaign template, using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.


[API Spec](https://developer.sailpoint.com/docs/api/v3/patch-campaign-template)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the campaign template being modified. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchCampaignTemplateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | A list of campaign update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * deadlineDuration * campaign (all fields that are allowed during create)  | 

### Return type

[**CampaignTemplate**](../models/campaign-template)

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `2c9180835d191a86015d28455b4a2329` // string | ID of the campaign template being modified. # string | ID of the campaign template being modified.
    jsonpatchoperation := []byte(`[{op=replace, path=/description, value=Updated description!}, {op=replace, path=/campaign/filter/id, value=ff80818155fe8c080155fe8d925b0316}]`) // []JsonPatchOperation | A list of campaign update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * deadlineDuration * campaign (all fields that are allowed during create) 

    var jsonPatchOperation []v3.JsonPatchOperation
    if err := json.Unmarshal(jsonpatchoperation, &jsonPatchOperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.CertificationCampaignsAPI.PatchCampaignTemplate(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
	  //resp, r, err := apiClient.V3.CertificationCampaignsAPI.PatchCampaignTemplate(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignsAPI.PatchCampaignTemplate``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchCampaignTemplate`: CampaignTemplate
    fmt.Fprintf(os.Stdout, "Response from `CertificationCampaignsAPI.PatchCampaignTemplate`: %v\n", resp)
}
```

[[Back to top]](#)

## set-campaign-reports-config
Set campaign reports configuration
Use this API to overwrite the configuration for campaign reports. 


[API Spec](https://developer.sailpoint.com/docs/api/v3/set-campaign-reports-config)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSetCampaignReportsConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignReportsConfig** | [**CampaignReportsConfig**](../models/campaign-reports-config) | Campaign report configuration. | 

### Return type

[**CampaignReportsConfig**](../models/campaign-reports-config)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    campaignreportsconfig := []byte(`{
          "identityAttributeColumns" : [ "firstname", "lastname" ]
        }`) // CampaignReportsConfig | Campaign report configuration.

    var campaignReportsConfig v3.CampaignReportsConfig
    if err := json.Unmarshal(campaignreportsconfig, &campaignReportsConfig); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.CertificationCampaignsAPI.SetCampaignReportsConfig(context.Background()).CampaignReportsConfig(campaignReportsConfig).Execute()
	  //resp, r, err := apiClient.V3.CertificationCampaignsAPI.SetCampaignReportsConfig(context.Background()).CampaignReportsConfig(campaignReportsConfig).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignsAPI.SetCampaignReportsConfig``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetCampaignReportsConfig`: CampaignReportsConfig
    fmt.Fprintf(os.Stdout, "Response from `CertificationCampaignsAPI.SetCampaignReportsConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## set-campaign-template-schedule
Set campaign template schedule
Use this API to set the schedule for a certification campaign template. If a schedule already exists, the API overwrites it with the new one.


[API Spec](https://developer.sailpoint.com/docs/api/v3/set-campaign-template-schedule)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the campaign template being scheduled. | 

### Other Parameters

Other parameters are passed through a pointer to a apiSetCampaignTemplateScheduleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **schedule** | [**Schedule**](../models/schedule) |  | 

### Return type

 (empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `04bedce387bd47b2ae1f86eb0bb36dee` // string | ID of the campaign template being scheduled. # string | ID of the campaign template being scheduled.
    schedule := []byte(`{
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
        }`) // Schedule |  (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V3.CertificationCampaignsAPI.SetCampaignTemplateSchedule(context.Background(), id).Execute()
	  //r, err := apiClient.V3.CertificationCampaignsAPI.SetCampaignTemplateSchedule(context.Background(), id).Schedule(schedule).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignsAPI.SetCampaignTemplateSchedule``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## start-campaign
Activate a campaign
Use this API to submit a job to activate the certified campaign with the specified ID. The campaign must be staged.


[API Spec](https://developer.sailpoint.com/docs/api/v3/start-campaign)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Campaign ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiStartCampaignRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **activateCampaignOptions** | [**ActivateCampaignOptions**](../models/activate-campaign-options) | Optional. If no timezone is specified, the standard UTC timezone is used (i.e. UTC+00:00). Although this can take any timezone, the intended value is the caller&#39;s timezone. The activation time calculated from the given timezone may cause the campaign deadline time to be modified, but it will remain within the original date. The timezone must be in a valid ISO 8601 format. | 

### Return type

**map[string]interface{}**

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Campaign ID. # string | Campaign ID.
    activatecampaignoptions := []byte(`{
          "timeZone" : "-05:00"
        }`) // ActivateCampaignOptions | Optional. If no timezone is specified, the standard UTC timezone is used (i.e. UTC+00:00). Although this can take any timezone, the intended value is the caller's timezone. The activation time calculated from the given timezone may cause the campaign deadline time to be modified, but it will remain within the original date. The timezone must be in a valid ISO 8601 format. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.CertificationCampaignsAPI.StartCampaign(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V3.CertificationCampaignsAPI.StartCampaign(context.Background(), id).ActivateCampaignOptions(activateCampaignOptions).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignsAPI.StartCampaign``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartCampaign`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `CertificationCampaignsAPI.StartCampaign`: %v\n", resp)
}
```

[[Back to top]](#)

## start-campaign-remediation-scan
Run campaign remediation scan
Use this API to run a remediation scan task for a certification campaign.


[API Spec](https://developer.sailpoint.com/docs/api/v3/start-campaign-remediation-scan)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the campaign the remediation scan is being run for. | 

### Other Parameters

Other parameters are passed through a pointer to a apiStartCampaignRemediationScanRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

**map[string]interface{}**

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `2c91808571bcfcf80171c23e4b4221fc` // string | ID of the campaign the remediation scan is being run for. # string | ID of the campaign the remediation scan is being run for.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.CertificationCampaignsAPI.StartCampaignRemediationScan(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V3.CertificationCampaignsAPI.StartCampaignRemediationScan(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignsAPI.StartCampaignRemediationScan``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartCampaignRemediationScan`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `CertificationCampaignsAPI.StartCampaignRemediationScan`: %v\n", resp)
}
```

[[Back to top]](#)

## start-campaign-report
Run campaign report
Use this API to run a report for a certification campaign.


[API Spec](https://developer.sailpoint.com/docs/api/v3/start-campaign-report)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the campaign the report is being run for. | 
**type_** | [**ReportType**](../models/) | Type of the report to run. | 

### Other Parameters

Other parameters are passed through a pointer to a apiStartCampaignReportRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

**map[string]interface{}**

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `2c91808571bcfcf80171c23e4b4221fc` // string | ID of the campaign the report is being run for. # string | ID of the campaign the report is being run for.
    type_ :=  // ReportType | Type of the report to run. # ReportType | Type of the report to run.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.CertificationCampaignsAPI.StartCampaignReport(context.Background(), id, type_).Execute()
	  //resp, r, err := apiClient.V3.CertificationCampaignsAPI.StartCampaignReport(context.Background(), id, type_).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignsAPI.StartCampaignReport``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartCampaignReport`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `CertificationCampaignsAPI.StartCampaignReport`: %v\n", resp)
}
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

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the campaign template to use for generation. | 

### Other Parameters

Other parameters are passed through a pointer to a apiStartGenerateCampaignTemplateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**CampaignReference**](../models/campaign-reference)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `2c9180835d191a86015d28455b4a2329` // string | ID of the campaign template to use for generation. # string | ID of the campaign template to use for generation.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.CertificationCampaignsAPI.StartGenerateCampaignTemplate(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V3.CertificationCampaignsAPI.StartGenerateCampaignTemplate(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignsAPI.StartGenerateCampaignTemplate``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartGenerateCampaignTemplate`: CampaignReference
    fmt.Fprintf(os.Stdout, "Response from `CertificationCampaignsAPI.StartGenerateCampaignTemplate`: %v\n", resp)
}
```

[[Back to top]](#)

## update-campaign
Update a campaign
Use this API to update individual fields on a certification campaign, using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.


[API Spec](https://developer.sailpoint.com/docs/api/v3/update-campaign)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the campaign template being modified. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateCampaignRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | A list of campaign update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The fields that can be patched differ based on the status of the campaign.  When the campaign is in the *STAGED* status, you can patch these fields: * name * description * recommendationsEnabled * deadline * emailNotificationEnabled * autoRevokeAllowed  When the campaign is in the *ACTIVE* status, you can patch these fields: * deadline  | 

### Return type

[**SlimCampaign**](../models/slim-campaign)

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `2c91808571bcfcf80171c23e4b4221fc` // string | ID of the campaign template being modified. # string | ID of the campaign template being modified.
    jsonpatchoperation := []byte(`[{op=replace, path=/name, value=This field has been updated!}, {op=copy, from=/name, path=/description}]`) // []JsonPatchOperation | A list of campaign update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The fields that can be patched differ based on the status of the campaign.  When the campaign is in the *STAGED* status, you can patch these fields: * name * description * recommendationsEnabled * deadline * emailNotificationEnabled * autoRevokeAllowed  When the campaign is in the *ACTIVE* status, you can patch these fields: * deadline 

    var jsonPatchOperation []v3.JsonPatchOperation
    if err := json.Unmarshal(jsonpatchoperation, &jsonPatchOperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.CertificationCampaignsAPI.UpdateCampaign(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
	  //resp, r, err := apiClient.V3.CertificationCampaignsAPI.UpdateCampaign(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignsAPI.UpdateCampaign``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateCampaign`: SlimCampaign
    fmt.Fprintf(os.Stdout, "Response from `CertificationCampaignsAPI.UpdateCampaign`: %v\n", resp)
}
```

[[Back to top]](#)


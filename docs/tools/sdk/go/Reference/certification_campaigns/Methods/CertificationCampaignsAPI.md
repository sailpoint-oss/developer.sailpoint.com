---
id: v1-certification-campaigns
title: CertificationCampaigns
pagination_label: CertificationCampaigns
sidebar_label: CertificationCampaigns
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CertificationCampaigns', 'V1CertificationCampaigns'] 
slug: /tools/sdk/go/certificationcampaigns/methods/certification-campaigns
tags: ['SDK', 'Software Development Kit', 'CertificationCampaigns', 'V1CertificationCampaigns']
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

For more information about certifications and certification campaigns, refer to [Certifications](https://documentation.sailpoint.com/saas/user-help/certs/reviewing/index.html).
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**complete-campaign-v1**](#complete-campaign-v1) | **Post** `/campaigns/v1/{id}/complete` | Complete a campaign
[**create-campaign-template-v1**](#create-campaign-template-v1) | **Post** `/campaign-templates/v1` | Create a campaign template
[**create-campaign-v1**](#create-campaign-v1) | **Post** `/campaigns/v1` | Create a campaign
[**delete-campaign-template-schedule-v1**](#delete-campaign-template-schedule-v1) | **Delete** `/campaign-templates/v1/{id}/schedule` | Delete campaign template schedule
[**delete-campaign-template-v1**](#delete-campaign-template-v1) | **Delete** `/campaign-templates/v1/{id}` | Delete a campaign template
[**delete-campaigns-v1**](#delete-campaigns-v1) | **Post** `/campaigns/v1/delete` | Delete campaigns
[**get-active-campaigns-v1**](#get-active-campaigns-v1) | **Get** `/campaigns/v1` | List campaigns
[**get-campaign-reports-config-v1**](#get-campaign-reports-config-v1) | **Get** `/campaigns/v1/reports-configuration` | Get campaign reports configuration
[**get-campaign-reports-v1**](#get-campaign-reports-v1) | **Get** `/campaigns/v1/{id}/reports` | Get campaign reports
[**get-campaign-template-schedule-v1**](#get-campaign-template-schedule-v1) | **Get** `/campaign-templates/v1/{id}/schedule` | Get campaign template schedule
[**get-campaign-template-v1**](#get-campaign-template-v1) | **Get** `/campaign-templates/v1/{id}` | Get a campaign template
[**get-campaign-templates-v1**](#get-campaign-templates-v1) | **Get** `/campaign-templates/v1` | List campaign templates
[**get-campaign-v1**](#get-campaign-v1) | **Get** `/campaigns/v1/{id}` | Get campaign
[**move-v1**](#move-v1) | **Post** `/campaigns/v1/{id}/reassign` | Reassign certifications
[**patch-campaign-template-v1**](#patch-campaign-template-v1) | **Patch** `/campaign-templates/v1/{id}` | Update a campaign template
[**set-campaign-reports-config-v1**](#set-campaign-reports-config-v1) | **Put** `/campaigns/v1/reports-configuration` | Set campaign reports configuration
[**set-campaign-template-schedule-v1**](#set-campaign-template-schedule-v1) | **Put** `/campaign-templates/v1/{id}/schedule` | Set campaign template schedule
[**start-campaign-remediation-scan-v1**](#start-campaign-remediation-scan-v1) | **Post** `/campaigns/v1/{id}/run-remediation-scan` | Run campaign remediation scan
[**start-campaign-report-v1**](#start-campaign-report-v1) | **Post** `/campaigns/v1/{id}/run-report/{type}` | Run campaign report
[**start-campaign-v1**](#start-campaign-v1) | **Post** `/campaigns/v1/{id}/activate` | Activate a campaign
[**start-generate-campaign-template-v1**](#start-generate-campaign-template-v1) | **Post** `/campaign-templates/v1/{id}/generate` | Generate a campaign from template
[**update-campaign-v1**](#update-campaign-v1) | **Patch** `/campaigns/v1/{id}` | Update a campaign


## complete-campaign-v1
Complete a campaign
:::caution

This endpoint will run successfully for any campaigns that are **past due**.

This endpoint will return a content error if the campaign is **not past due**.

:::

Use this API to complete a certification campaign. This functionality is provided to admins so that they
can complete a certification even if all items have not been completed.


[API Spec](https://developer.sailpoint.com/docs/api/v1/complete-campaign-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Campaign ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCompleteCampaignV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **campaigncompleteoptions** | [**Campaigncompleteoptions**](../models/campaigncompleteoptions) | Optional. Default behavior is for the campaign to auto-approve upon completion, unless autoCompleteAction&#x3D;REVOKE | 

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/certification_campaigns"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Campaign ID. # string | Campaign ID.
    campaigncompleteoptions := []byte(``) // Campaigncompleteoptions | Optional. Default behavior is for the campaign to auto-approve upon completion, unless autoCompleteAction=REVOKE (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CertificationCampaignsAPI.CompleteCampaignV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.CertificationCampaignsAPI.CompleteCampaignV1(context.Background(), id).Campaigncompleteoptions(campaigncompleteoptions).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignsAPI.CompleteCampaignV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CompleteCampaignV1`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `CertificationCampaignsAPI.CompleteCampaignV1`: %v\n", resp)
}
```

[[Back to top]](#)

## create-campaign-template-v1
Create a campaign template
Use this API to create a certification campaign template based on campaign.


[API Spec](https://developer.sailpoint.com/docs/api/v1/create-campaign-template-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateCampaignTemplateV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaigntemplate** | [**Campaigntemplate**](../models/campaigntemplate) |  | 

### Return type

[**Campaigntemplate**](../models/campaigntemplate)

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
    
    v1 "github.com/sailpoint-oss/golang-sdk/v3/certification_campaigns"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/certification_campaigns"
)

func main() {
    campaigntemplate := []byte(``) // Campaigntemplate | 

    var campaigntemplate v1.Campaigntemplate
    if err := json.Unmarshal(campaigntemplate, &campaigntemplate); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CertificationCampaignsAPI.CreateCampaignTemplateV1(context.Background()).Campaigntemplate(campaigntemplate).Execute()
	  //resp, r, err := apiClient.CertificationCampaignsAPI.CreateCampaignTemplateV1(context.Background()).Campaigntemplate(campaigntemplate).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignsAPI.CreateCampaignTemplateV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateCampaignTemplateV1`: Campaigntemplate
    fmt.Fprintf(os.Stdout, "Response from `CertificationCampaignsAPI.CreateCampaignTemplateV1`: %v\n", resp)
}
```

[[Back to top]](#)

## create-campaign-v1
Create a campaign
Use this API to create a certification campaign with the information provided in the request body.    


[API Spec](https://developer.sailpoint.com/docs/api/v1/create-campaign-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateCampaignV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaign2** | [**Campaign2**](../models/campaign2) |  | 

### Return type

[**Campaign2**](../models/campaign2)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/certification_campaigns"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/certification_campaigns"
)

func main() {
    campaign2 := []byte(``) // Campaign2 | 

    var campaign2 v1.Campaign2
    if err := json.Unmarshal(campaign2, &campaign2); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CertificationCampaignsAPI.CreateCampaignV1(context.Background()).Campaign2(campaign2).Execute()
	  //resp, r, err := apiClient.CertificationCampaignsAPI.CreateCampaignV1(context.Background()).Campaign2(campaign2).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignsAPI.CreateCampaignV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateCampaignV1`: Campaign2
    fmt.Fprintf(os.Stdout, "Response from `CertificationCampaignsAPI.CreateCampaignV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-campaign-template-schedule-v1
Delete campaign template schedule
Use this API to delete the schedule for a certification campaign template. The API returns a 404 if there is no schedule set.


[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-campaign-template-schedule-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the campaign template whose schedule is being deleted. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCampaignTemplateScheduleV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/certification_campaigns"
)

func main() {
    id := `04bedce387bd47b2ae1f86eb0bb36dee` // string | ID of the campaign template whose schedule is being deleted. # string | ID of the campaign template whose schedule is being deleted.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.CertificationCampaignsAPI.DeleteCampaignTemplateScheduleV1(context.Background(), id).Execute()
	  //r, err := apiClient.CertificationCampaignsAPI.DeleteCampaignTemplateScheduleV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignsAPI.DeleteCampaignTemplateScheduleV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-campaign-template-v1
Delete a campaign template
Use this API to delete a certification campaign template by ID.


[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-campaign-template-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the campaign template being deleted. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCampaignTemplateV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/certification_campaigns"
)

func main() {
    id := `2c9180835d191a86015d28455b4a2329` // string | ID of the campaign template being deleted. # string | ID of the campaign template being deleted.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.CertificationCampaignsAPI.DeleteCampaignTemplateV1(context.Background(), id).Execute()
	  //r, err := apiClient.CertificationCampaignsAPI.DeleteCampaignTemplateV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignsAPI.DeleteCampaignTemplateV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-campaigns-v1
Delete campaigns
Use this API to delete certification campaigns whose IDs are specified in the provided list of campaign IDs.


[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-campaigns-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCampaignsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignsdeleterequest** | [**Campaignsdeleterequest**](../models/campaignsdeleterequest) | IDs of the campaigns to delete. | 

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/certification_campaigns"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/certification_campaigns"
)

func main() {
    campaignsdeleterequest := []byte(``) // Campaignsdeleterequest | IDs of the campaigns to delete.

    var campaignsdeleterequest v1.Campaignsdeleterequest
    if err := json.Unmarshal(campaignsdeleterequest, &campaignsdeleterequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CertificationCampaignsAPI.DeleteCampaignsV1(context.Background()).Campaignsdeleterequest(campaignsdeleterequest).Execute()
	  //resp, r, err := apiClient.CertificationCampaignsAPI.DeleteCampaignsV1(context.Background()).Campaignsdeleterequest(campaignsdeleterequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignsAPI.DeleteCampaignsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCampaignsV1`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `CertificationCampaignsAPI.DeleteCampaignsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-active-campaigns-v1
List campaigns
Use this API to get a list of campaigns. This API can provide increased level of detail for each campaign for the correct provided query.


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-active-campaigns-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetActiveCampaignsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **detail** | **string** | Determines whether slim, or increased level of detail is provided for each campaign in the returned list. Slim is the default behavior. | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **status**: *eq, in* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created** | 

### Return type

[**[]GetActiveCampaignsV1200ResponseInner**](../models/get-active-campaigns-v1200-response-inner)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/certification_campaigns"
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
    resp, r, err := apiClient.CertificationCampaignsAPI.GetActiveCampaignsV1(context.Background()).Execute()
	  //resp, r, err := apiClient.CertificationCampaignsAPI.GetActiveCampaignsV1(context.Background()).Detail(detail).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignsAPI.GetActiveCampaignsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetActiveCampaignsV1`: []GetActiveCampaignsV1200ResponseInner
    fmt.Fprintf(os.Stdout, "Response from `CertificationCampaignsAPI.GetActiveCampaignsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-campaign-reports-config-v1
Get campaign reports configuration
Use this API to fetch the configuration for certification campaign reports. The configuration includes only one element - identity attributes defined as custom report columns. 


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-campaign-reports-config-v1)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetCampaignReportsConfigV1Request struct via the builder pattern


### Return type

[**Campaignreportsconfig**](../models/campaignreportsconfig)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/certification_campaigns"
)

func main() {

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CertificationCampaignsAPI.GetCampaignReportsConfigV1(context.Background()).Execute()
	  //resp, r, err := apiClient.CertificationCampaignsAPI.GetCampaignReportsConfigV1(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignsAPI.GetCampaignReportsConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCampaignReportsConfigV1`: Campaignreportsconfig
    fmt.Fprintf(os.Stdout, "Response from `CertificationCampaignsAPI.GetCampaignReportsConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-campaign-reports-v1
Get campaign reports
Use this API to fetch all reports for a certification campaign by campaign ID.


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-campaign-reports-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the campaign whose reports are being fetched. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCampaignReportsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**[]Campaignreport**](../models/campaignreport)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/certification_campaigns"
)

func main() {
    id := `2c91808571bcfcf80171c23e4b4221fc` // string | ID of the campaign whose reports are being fetched. # string | ID of the campaign whose reports are being fetched.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CertificationCampaignsAPI.GetCampaignReportsV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.CertificationCampaignsAPI.GetCampaignReportsV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignsAPI.GetCampaignReportsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCampaignReportsV1`: []Campaignreport
    fmt.Fprintf(os.Stdout, "Response from `CertificationCampaignsAPI.GetCampaignReportsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-campaign-template-schedule-v1
Get campaign template schedule
Use this API to get the schedule for a certification campaign template. The API returns a 404 if there is no schedule set.


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-campaign-template-schedule-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the campaign template whose schedule is being fetched. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCampaignTemplateScheduleV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Schedule2**](../models/schedule2)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/certification_campaigns"
)

func main() {
    id := `04bedce387bd47b2ae1f86eb0bb36dee` // string | ID of the campaign template whose schedule is being fetched. # string | ID of the campaign template whose schedule is being fetched.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CertificationCampaignsAPI.GetCampaignTemplateScheduleV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.CertificationCampaignsAPI.GetCampaignTemplateScheduleV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignsAPI.GetCampaignTemplateScheduleV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCampaignTemplateScheduleV1`: Schedule2
    fmt.Fprintf(os.Stdout, "Response from `CertificationCampaignsAPI.GetCampaignTemplateScheduleV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-campaign-template-v1
Get a campaign template
Use this API to fetch a certification campaign template by ID.


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-campaign-template-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Requested campaign template&#39;s ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCampaignTemplateV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Campaigntemplate**](../models/campaigntemplate)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/certification_campaigns"
)

func main() {
    id := `2c9180835d191a86015d28455b4a2329` // string | Requested campaign template's ID. # string | Requested campaign template's ID.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CertificationCampaignsAPI.GetCampaignTemplateV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.CertificationCampaignsAPI.GetCampaignTemplateV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignsAPI.GetCampaignTemplateV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCampaignTemplateV1`: Campaigntemplate
    fmt.Fprintf(os.Stdout, "Response from `CertificationCampaignsAPI.GetCampaignTemplateV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-campaign-templates-v1
List campaign templates
Use this API to get a list of all campaign templates. Scope can be reduced through standard V3 query params.

The API returns all campaign templates matching the query parameters. 


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-campaign-templates-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetCampaignTemplatesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, ge, gt, in, le, lt, ne, sw*  **id**: *eq, ge, gt, in, le, lt, ne, sw* | 

### Return type

[**[]Campaigntemplate**](../models/campaigntemplate)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/certification_campaigns"
)

func main() {
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    sorters := `name` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional)
    filters := `name eq "manager template"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, ge, gt, in, le, lt, ne, sw*  **id**: *eq, ge, gt, in, le, lt, ne, sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, ge, gt, in, le, lt, ne, sw*  **id**: *eq, ge, gt, in, le, lt, ne, sw* (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CertificationCampaignsAPI.GetCampaignTemplatesV1(context.Background()).Execute()
	  //resp, r, err := apiClient.CertificationCampaignsAPI.GetCampaignTemplatesV1(context.Background()).Limit(limit).Offset(offset).Count(count).Sorters(sorters).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignsAPI.GetCampaignTemplatesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCampaignTemplatesV1`: []Campaigntemplate
    fmt.Fprintf(os.Stdout, "Response from `CertificationCampaignsAPI.GetCampaignTemplatesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-campaign-v1
Get campaign
Use this API to get information for an existing certification campaign by the campaign's ID.


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-campaign-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the campaign to be retrieved. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCampaignV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **detail** | **string** | Determines whether slim, or increased level of detail is provided for each campaign in the returned list. Slim is the default behavior. | 

### Return type

[**GetCampaignV1200Response**](../models/get-campaign-v1200-response)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/certification_campaigns"
)

func main() {
    id := `2c91808571bcfcf80171c23e4b4221fc` // string | ID of the campaign to be retrieved. # string | ID of the campaign to be retrieved.
    detail := `FULL` // string | Determines whether slim, or increased level of detail is provided for each campaign in the returned list. Slim is the default behavior. (optional) # string | Determines whether slim, or increased level of detail is provided for each campaign in the returned list. Slim is the default behavior. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CertificationCampaignsAPI.GetCampaignV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.CertificationCampaignsAPI.GetCampaignV1(context.Background(), id).Detail(detail).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignsAPI.GetCampaignV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCampaignV1`: GetCampaignV1200Response
    fmt.Fprintf(os.Stdout, "Response from `CertificationCampaignsAPI.GetCampaignV1`: %v\n", resp)
}
```

[[Back to top]](#)

## move-v1
Reassign certifications
This API reassigns the specified certifications from one identity to another.    


[API Spec](https://developer.sailpoint.com/docs/api/v1/move-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The certification campaign ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiMoveV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **adminreviewreassign** | [**Adminreviewreassign**](../models/adminreviewreassign) |  | 

### Return type

[**Certificationtask**](../models/certificationtask)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/certification_campaigns"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/certification_campaigns"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The certification campaign ID # string | The certification campaign ID
    adminreviewreassign := []byte(``) // Adminreviewreassign | 

    var adminreviewreassign v1.Adminreviewreassign
    if err := json.Unmarshal(adminreviewreassign, &adminreviewreassign); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CertificationCampaignsAPI.MoveV1(context.Background(), id).Adminreviewreassign(adminreviewreassign).Execute()
	  //resp, r, err := apiClient.CertificationCampaignsAPI.MoveV1(context.Background(), id).Adminreviewreassign(adminreviewreassign).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignsAPI.MoveV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `MoveV1`: Certificationtask
    fmt.Fprintf(os.Stdout, "Response from `CertificationCampaignsAPI.MoveV1`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-campaign-template-v1
Update a campaign template
Use this API to update individual fields on a certification campaign template, using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.


[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-campaign-template-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the campaign template being modified. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchCampaignTemplateV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jsonpatchoperation** | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | A list of campaign update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * deadlineDuration * campaign (all fields that are allowed during create)  | 

### Return type

[**Campaigntemplate**](../models/campaigntemplate)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/certification_campaigns"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/certification_campaigns"
)

func main() {
    id := `2c9180835d191a86015d28455b4a2329` // string | ID of the campaign template being modified. # string | ID of the campaign template being modified.
    jsonpatchoperation := []byte(`[{"op":"replace","path":"/description","value":"Updated description!"},{"op":"replace","path":"/campaign/filter/id","value":"ff80818155fe8c080155fe8d925b0316"}]`) // []Jsonpatchoperation | A list of campaign update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * deadlineDuration * campaign (all fields that are allowed during create) 

    var jsonpatchoperation []v1.Jsonpatchoperation
    if err := json.Unmarshal(jsonpatchoperation, &jsonpatchoperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CertificationCampaignsAPI.PatchCampaignTemplateV1(context.Background(), id).Jsonpatchoperation(jsonpatchoperation).Execute()
	  //resp, r, err := apiClient.CertificationCampaignsAPI.PatchCampaignTemplateV1(context.Background(), id).Jsonpatchoperation(jsonpatchoperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignsAPI.PatchCampaignTemplateV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchCampaignTemplateV1`: Campaigntemplate
    fmt.Fprintf(os.Stdout, "Response from `CertificationCampaignsAPI.PatchCampaignTemplateV1`: %v\n", resp)
}
```

[[Back to top]](#)

## set-campaign-reports-config-v1
Set campaign reports configuration
Use this API to overwrite the configuration for campaign reports. 


[API Spec](https://developer.sailpoint.com/docs/api/v1/set-campaign-reports-config-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSetCampaignReportsConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignreportsconfig** | [**Campaignreportsconfig**](../models/campaignreportsconfig) | Campaign report configuration. | 

### Return type

[**Campaignreportsconfig**](../models/campaignreportsconfig)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/certification_campaigns"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/certification_campaigns"
)

func main() {
    campaignreportsconfig := []byte(``) // Campaignreportsconfig | Campaign report configuration.

    var campaignreportsconfig v1.Campaignreportsconfig
    if err := json.Unmarshal(campaignreportsconfig, &campaignreportsconfig); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CertificationCampaignsAPI.SetCampaignReportsConfigV1(context.Background()).Campaignreportsconfig(campaignreportsconfig).Execute()
	  //resp, r, err := apiClient.CertificationCampaignsAPI.SetCampaignReportsConfigV1(context.Background()).Campaignreportsconfig(campaignreportsconfig).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignsAPI.SetCampaignReportsConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetCampaignReportsConfigV1`: Campaignreportsconfig
    fmt.Fprintf(os.Stdout, "Response from `CertificationCampaignsAPI.SetCampaignReportsConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## set-campaign-template-schedule-v1
Set campaign template schedule
Use this API to set the schedule for a certification campaign template. If a schedule already exists, the API overwrites it with the new one.


[API Spec](https://developer.sailpoint.com/docs/api/v1/set-campaign-template-schedule-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the campaign template being scheduled. | 

### Other Parameters

Other parameters are passed through a pointer to a apiSetCampaignTemplateScheduleV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **schedule2** | [**Schedule2**](../models/schedule2) |  | 

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/certification_campaigns"
)

func main() {
    id := `04bedce387bd47b2ae1f86eb0bb36dee` // string | ID of the campaign template being scheduled. # string | ID of the campaign template being scheduled.
    schedule2 := []byte(`{"type":"MONTHLY","hours":{"type":"LIST","values":["17"]},"days":{"type":"LIST","values":["15"]}}`) // Schedule2 |  (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.CertificationCampaignsAPI.SetCampaignTemplateScheduleV1(context.Background(), id).Execute()
	  //r, err := apiClient.CertificationCampaignsAPI.SetCampaignTemplateScheduleV1(context.Background(), id).Schedule2(schedule2).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignsAPI.SetCampaignTemplateScheduleV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## start-campaign-remediation-scan-v1
Run campaign remediation scan
Use this API to run a remediation scan task for a certification campaign.


[API Spec](https://developer.sailpoint.com/docs/api/v1/start-campaign-remediation-scan-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the campaign the remediation scan is being run for. | 

### Other Parameters

Other parameters are passed through a pointer to a apiStartCampaignRemediationScanV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/certification_campaigns"
)

func main() {
    id := `2c91808571bcfcf80171c23e4b4221fc` // string | ID of the campaign the remediation scan is being run for. # string | ID of the campaign the remediation scan is being run for.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CertificationCampaignsAPI.StartCampaignRemediationScanV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.CertificationCampaignsAPI.StartCampaignRemediationScanV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignsAPI.StartCampaignRemediationScanV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartCampaignRemediationScanV1`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `CertificationCampaignsAPI.StartCampaignRemediationScanV1`: %v\n", resp)
}
```

[[Back to top]](#)

## start-campaign-report-v1
Run campaign report
Use this API to run a report for a certification campaign.


[API Spec](https://developer.sailpoint.com/docs/api/v1/start-campaign-report-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the campaign the report is being run for. | 
**type_** | [**Reporttype**](../models/) | Type of the report to run. | 

### Other Parameters

Other parameters are passed through a pointer to a apiStartCampaignReportV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/certification_campaigns"
)

func main() {
    id := `2c91808571bcfcf80171c23e4b4221fc` // string | ID of the campaign the report is being run for. # string | ID of the campaign the report is being run for.
    type_ :=  // Reporttype | Type of the report to run. # Reporttype | Type of the report to run.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CertificationCampaignsAPI.StartCampaignReportV1(context.Background(), id, type_).Execute()
	  //resp, r, err := apiClient.CertificationCampaignsAPI.StartCampaignReportV1(context.Background(), id, type_).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignsAPI.StartCampaignReportV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartCampaignReportV1`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `CertificationCampaignsAPI.StartCampaignReportV1`: %v\n", resp)
}
```

[[Back to top]](#)

## start-campaign-v1
Activate a campaign
Use this API to submit a job to activate the certified campaign with the specified ID. The campaign must be staged.


[API Spec](https://developer.sailpoint.com/docs/api/v1/start-campaign-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Campaign ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiStartCampaignV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **activatecampaignoptions** | [**Activatecampaignoptions**](../models/activatecampaignoptions) | Optional. If no timezone is specified, the standard UTC timezone is used (i.e. UTC+00:00). Although this can take any timezone, the intended value is the caller&#39;s timezone. The activation time calculated from the given timezone may cause the campaign deadline time to be modified, but it will remain within the original date. The timezone must be in a valid ISO 8601 format. | 

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/certification_campaigns"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Campaign ID. # string | Campaign ID.
    activatecampaignoptions := []byte(``) // Activatecampaignoptions | Optional. If no timezone is specified, the standard UTC timezone is used (i.e. UTC+00:00). Although this can take any timezone, the intended value is the caller's timezone. The activation time calculated from the given timezone may cause the campaign deadline time to be modified, but it will remain within the original date. The timezone must be in a valid ISO 8601 format. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CertificationCampaignsAPI.StartCampaignV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.CertificationCampaignsAPI.StartCampaignV1(context.Background(), id).Activatecampaignoptions(activatecampaignoptions).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignsAPI.StartCampaignV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartCampaignV1`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `CertificationCampaignsAPI.StartCampaignV1`: %v\n", resp)
}
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

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the campaign template to use for generation. | 

### Other Parameters

Other parameters are passed through a pointer to a apiStartGenerateCampaignTemplateV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Campaignreference**](../models/campaignreference)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/certification_campaigns"
)

func main() {
    id := `2c9180835d191a86015d28455b4a2329` // string | ID of the campaign template to use for generation. # string | ID of the campaign template to use for generation.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CertificationCampaignsAPI.StartGenerateCampaignTemplateV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.CertificationCampaignsAPI.StartGenerateCampaignTemplateV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignsAPI.StartGenerateCampaignTemplateV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartGenerateCampaignTemplateV1`: Campaignreference
    fmt.Fprintf(os.Stdout, "Response from `CertificationCampaignsAPI.StartGenerateCampaignTemplateV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-campaign-v1
Update a campaign
Use this API to update individual fields on a certification campaign, using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.


[API Spec](https://developer.sailpoint.com/docs/api/v1/update-campaign-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the campaign template being modified. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateCampaignV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jsonpatchoperation** | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | A list of campaign update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The fields that can be patched differ based on the status of the campaign.  When the campaign is in the *STAGED* status, you can patch these fields: * name * description * recommendationsEnabled * deadline * emailNotificationEnabled * autoRevokeAllowed  When the campaign is in the *ACTIVE* status, you can patch these fields: * deadline  | 

### Return type

[**Slimcampaign**](../models/slimcampaign)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/certification_campaigns"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/certification_campaigns"
)

func main() {
    id := `2c91808571bcfcf80171c23e4b4221fc` // string | ID of the campaign template being modified. # string | ID of the campaign template being modified.
    jsonpatchoperation := []byte(`[{"op":"replace","path":"/name","value":"This field has been updated!"},{"op":"copy","from":"/name","path":"/description"}]`) // []Jsonpatchoperation | A list of campaign update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The fields that can be patched differ based on the status of the campaign.  When the campaign is in the *STAGED* status, you can patch these fields: * name * description * recommendationsEnabled * deadline * emailNotificationEnabled * autoRevokeAllowed  When the campaign is in the *ACTIVE* status, you can patch these fields: * deadline 

    var jsonpatchoperation []v1.Jsonpatchoperation
    if err := json.Unmarshal(jsonpatchoperation, &jsonpatchoperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CertificationCampaignsAPI.UpdateCampaignV1(context.Background(), id).Jsonpatchoperation(jsonpatchoperation).Execute()
	  //resp, r, err := apiClient.CertificationCampaignsAPI.UpdateCampaignV1(context.Background(), id).Jsonpatchoperation(jsonpatchoperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignsAPI.UpdateCampaignV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateCampaignV1`: Slimcampaign
    fmt.Fprintf(os.Stdout, "Response from `CertificationCampaignsAPI.UpdateCampaignV1`: %v\n", resp)
}
```

[[Back to top]](#)


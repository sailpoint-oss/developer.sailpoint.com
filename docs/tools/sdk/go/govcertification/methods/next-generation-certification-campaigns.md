# NextGenerationCertificationCampaigns

# NextGenerationCertificationCampaignsAPI
  This API is flagged as Experimental while we are in the process of migrating from the Legacy Certifications Engine to the Next Generation Certifications Engine. This endpoint resolves only campaigns generated on the Next Generation Certifications Engine. While we do not anticipate major changes, this API will remain in this state until we have completed the full migration of the Legacy Platform to the Next Generation Certifications Engine.

### Certification Campaign Filters

Use this API to implement the certification campaign filter functionality. These filters can be used to create a certification campaign that includes a subset of your entitlements or users to certify.

For example, if for a certification campaign an organization wants to certify only specific users or entitlements, then those can be included/excluded on the basis of campaign filters.

For more information about creating a campaign filter, refer to [Creating a Campaign Filter](https://documentation.sailpoint.com/saas/help/certs/campaign_filters.html#creating-a-campaign-filter)

You can create campaign filters using any of the following criteria types:

- Access Profile : This criteria type includes or excludes access profiles from a campaign.

- Account Attribute : This criteria type includes or excludes certification items that match a specified value in an account attribute.

- Entitlement : This criteria type includes or excludes entitlements from a campaign.

- Identity : This criteria type includes or excludes specific identities from your campaign.

- Identity Attribute : This criteria type includes or excludes identities based on whether they have an identity attribute that matches criteria you&#39;ve chosen.

- Role : This criteria type includes or excludes roles, as opposed to identities.

- Source : This criteria type includes or excludes entitlements from a source you select.

For more information about these criteria types, refer to [Types of Campaign Filters](https://documentation.sailpoint.com/saas/help/certs/campaign_filters.html#types-of-campaign-filters)

Once the campaign filter is created, it can be linked while creating the campaign. The generated campaign will have the items to review as per the campaign filter.

For example, an inclusion campaign filter is created with a source of Source 1, an operation of Equals, and an entitlement of Entitlement 1. When this filter is selected, only users who have Entitlement 1 are included in the campaign, and only Entitlement 1 is shown in the certification.

### Certification Campaigns

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

### Certification Summaries

Use this API to implement certification summary functionality. 
With this functionality in place, administrators and designated certification reviewers can review summaries of identity certification campaigns and draw conclusions about the campaigns&#39; scope, security, and effectiveness. 
Implementing certification summary functionality improves organizations&#39; ability to review their [certifications](https://documentation.sailpoint.com/saas/user-help/certs/reviewing/index.html) and helps them satisfy audit and regulatory requirements by enabling them to trace access changes and the decisions made in their review processes. 

A certification refers to Identity Security Cloud&#39;s mechanism for reviewing a user&#39;s access to entitlements (sets of permissions) and approving or removing that access. 
These certifications serve as a way of showing that a user&#39;s access has been reviewed and approved. 
Multiple certifications by different reviewers are often required to approve a user&#39;s access. 
A set of multiple certifications is called a certification campaign. 

For example, an organization may use a Manager Certification as a way of showing that a user&#39;s access has been reviewed and approved by their manager, or if the certification is part of a campaign, that the user&#39;s access has been reviewed and approved by multiple managers. 
Once this certification has been completed, Identity Security Cloud  would provision all the access the user needs, nothing more. 

Certification summaries provide information about identity certification campaigns such as the identities involved, the number of decisions made, and the access changed. 
For example, an administrator or designated certification reviewer can examine the Manager Certification campaign to get an overview of how many entitlement decisions are made in that campaign as opposed to role decisions, which identities would be affected by changes to the campaign, and how those identities&#39; access would be affected.

### Certifications

Use this API to implement certification functionality. 
With this functionality in place, administrators and designated certification reviewers can review users&#39; access certifications and decide whether to approve access, revoke it, or reassign the review to another reviewer. 
Implementing certifications improves organizations&#39; data security by reducing inappropriate access through a distributed review process and helping them satisfy audit and regulatory requirements. 

A certification refers to Identity Security Cloud&#39;s mechanism for reviewing a user&#39;s access to entitlements (sets of permissions) and approving or removing that access. 
These serve as a way of showing that a user&#39;s access has been reviewed and approved. 
Multiple certifications by different reviewers are often required to approve a user&#39;s access. 
A set of multiple certifications is called a certification campaign.

For example, an organization may use a Manager Certification as a way of showing that a user&#39;s access has been reviewed and approved by their manager, or if the certification is part of a campaign, that the user&#39;s access has been reviewed and approved by multiple managers. 
Once this certification has been completed, Identity Security Cloud  would provision all the access the user needs, nothing more. 

Organization administrators or certification administrators can designate other Identity Security Cloud users as certification reviewers. 
Those reviewers can select the &#39;Certifications&#39; tab to view any of the certifications they either need to review or have already reviewed under the &#39;Active&#39; and &#39;Completed&#39; tabs, respectively. 

When a certification campaign is in progress, certification reviewers will see certifications listed under &#39;Active,&#39; where they can review the involved identities. 
Under the &#39;Decision&#39; column on the right, next to each access item, reviewers can select the checkmark to approve access, select the &#39;X&#39; to revoke access, or they can toggle the &#39;More Options&#39; menu to reassign the certification to another reviewer and provide a reason for reassignment in the form of a comment. 

Once a reviewer has made decisions on all the certification&#39;s involved access items, he or she must select &#39;Sign Off&#39; to complete the review process.
Doing so converts the certification into read-only status, preventing any further changes to the review decisions and deleting the work item (task) from the reviewer&#39;s list of work items. 

Once all the reviewers have signed off, the certification campaign either completes or, if any reviewers decided to revoke access for any of the involved identities, it moves into a remediation phase. In the remediation phase, identities&#39; entitlements are altered to remove any entitlements marked for revocation.
In this situation, the certification campaign completes once all the remediation requests are completed.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**complete-gov-certification-campaign-v1**](#complete-gov-certification-campaign-v1) | **Post** `/certification-campaigns/v1/campaigns/{id}/complete` | Complete a Campaign
[**create-campaign-from-template-v1**](#create-campaign-from-template-v1) | **Post** `/certification-campaigns/v1/campaign-templates/{id}/generate` | Generate campaign from template
[**create-gov-certification-campaign-filter-v1**](#create-gov-certification-campaign-filter-v1) | **Post** `/certification-campaigns/v1/campaign-filters` | Create a Campaign Filter
[**create-gov-certification-campaign-template-v1**](#create-gov-certification-campaign-template-v1) | **Post** `/certification-campaigns/v1/campaign-templates` | Create a Campaign Template.
[**create-gov-certification-campaign-v1**](#create-gov-certification-campaign-v1) | **Post** `/certification-campaigns/v1/campaigns` | Create a campaign
[**create-report-v1**](#create-report-v1) | **Post** `/certification-campaigns/v1/campaigns/{campaignId}/reports` | Create campaign report
[**delete-gov-certification-campaign-filters-v1**](#delete-gov-certification-campaign-filters-v1) | **Post** `/certification-campaigns/v1/campaign-filters/delete` | Deletes Campaign Filters
[**delete-gov-certification-campaign-template-schedule-v1**](#delete-gov-certification-campaign-template-schedule-v1) | **Delete** `/certification-campaigns/v1/campaign-templates/{id}/schedule` | Delete a Campaign Template Schedule
[**delete-gov-certification-campaign-template-v1**](#delete-gov-certification-campaign-template-v1) | **Delete** `/certification-campaigns/v1/campaign-templates/{id}` | Delete a Campaign Template
[**delete-gov-certification-campaigns-v1**](#delete-gov-certification-campaigns-v1) | **Post** `/certification-campaigns/v1/campaigns/delete` | Delete Campaigns
[**get-access-summaries-v1**](#get-access-summaries-v1) | **Get** `/certification-campaigns/v1/certifications/{certificationId}/access-summaries/{type}` | Access Summaries
[**get-certification-entitlement-children-details-v1**](#get-certification-entitlement-children-details-v1) | **Get** `/certification-campaigns/v1/certifications/{certificationId}/review-items/{reviewItemId}/entitlements/{entitlementId}/children` | Entitlement Children in a Certification
[**get-certification-entitlement-details-v1**](#get-certification-entitlement-details-v1) | **Get** `/certification-campaigns/v1/certifications/{certificationId}/review-items/{reviewItemId}/entitlements/{entitlementId}` | Get Entitlement in a Certification
[**get-certification-entitlement-parents-details-v1**](#get-certification-entitlement-parents-details-v1) | **Get** `/certification-campaigns/v1/certifications/{certificationId}/review-items/{reviewItemId}/entitlements/{entitlementId}/parents` | Entitlement Parents in a Certification
[**get-certification-entitlement-permissions-v1**](#get-certification-entitlement-permissions-v1) | **Get** `/certification-campaigns/v1/certifications/{certificationId}/review-items/{reviewItemId}/entitlements/{entitlementId}/permissions` | Permissions in a Certification
[**get-certification-item-account-details-v1**](#get-certification-item-account-details-v1) | **Get** `/certification-campaigns/v1/certifications/{certificationId}/review-items/{reviewItemId}/item-id/{entitlementId}/cert-account-details` | Certification Item Account Details
[**get-certification-v1**](#get-certification-v1) | **Get** `/certification-campaigns/v1/certifications/{certificationId}` | Certification by ID
[**get-decision-summary-v1**](#get-decision-summary-v1) | **Get** `/certification-campaigns/v1/certifications/{certificationId}/decision-summary` | Summary of Certification Decisions
[**get-download-url-v1**](#get-download-url-v1) | **Get** `/certification-campaigns/v1/campaigns/{campaignId}/reports/{reportId}/download-url` | Download URL for campaign report
[**get-gov-certification-access-profile-v1**](#get-gov-certification-access-profile-v1) | **Get** `/certification-campaigns/v1/certifications/{certificationId}/review-items/{reviewItemId}/access-profiles/{accessProfileId}` | Get an Access Profile
[**get-gov-certification-campaign-filter-by-id-v1**](#get-gov-certification-campaign-filter-by-id-v1) | **Get** `/certification-campaigns/v1/campaign-filters/{id}` | Get Campaign Filter by ID
[**get-gov-certification-campaign-report-v1**](#get-gov-certification-campaign-report-v1) | **Get** `/certification-campaigns/v1/campaigns/{campaignId}/reports/{reportId}` | Get a campaign report
[**get-gov-certification-campaign-template-schedule-v1**](#get-gov-certification-campaign-template-schedule-v1) | **Get** `/certification-campaigns/v1/campaign-templates/{id}/schedule` | Get a Campaign Template Schedule
[**get-gov-certification-campaign-template-v1**](#get-gov-certification-campaign-template-v1) | **Get** `/certification-campaigns/v1/campaign-templates/{id}` | Get a Campaign Template
[**get-gov-certification-campaign-v1**](#get-gov-certification-campaign-v1) | **Get** `/certification-campaigns/v1/campaigns/{id}` | Get a campaign
[**get-gov-certification-task-v1**](#get-gov-certification-task-v1) | **Get** `/certification-campaigns/v1/certification-tasks/{id}` | Task details by ID
[**get-pending-tasks-v1**](#get-pending-tasks-v1) | **Get** `/certification-campaigns/v1/certification-tasks` | List of Pending Tasks
[**get-status-summary-v1**](#get-status-summary-v1) | **Get** `/certification-campaigns/v1/certifications/status-summary` | Status Summary For Certifications
[**get-subject-summary-v1**](#get-subject-summary-v1) | **Get** `/certification-campaigns/v1/certifications/{certificationId}/subject-summary/{subjectId}` | Summary for a Certification Subject
[**list-campaign-templates-v1**](#list-campaign-templates-v1) | **Get** `/certification-campaigns/v1/campaign-templates` | List Campaign Templates
[**list-campaigns-v1**](#list-campaigns-v1) | **Get** `/certification-campaigns/v1/campaigns` | List the campaigns
[**list-certifications-v1**](#list-certifications-v1) | **Get** `/certification-campaigns/v1/certifications` | List Certifications
[**list-gov-certification-campaign-filters-v1**](#list-gov-certification-campaign-filters-v1) | **Get** `/certification-campaigns/v1/campaign-filters` | List Campaign Filters
[**list-gov-certification-reviewers-v1**](#list-gov-certification-reviewers-v1) | **Get** `/certification-campaigns/v1/certifications/{certificationId}/reviewers` | List of Reviewers for certification
[**list-reports-v1**](#list-reports-v1) | **Get** `/certification-campaigns/v1/campaigns/{campaignId}/reports` | List reports for a campaign
[**list-review-items-v1**](#list-review-items-v1) | **Get** `/certification-campaigns/v1/certifications/{certificationId}/review-items` | List of Review Items
[**list-subject-summaries-v1**](#list-subject-summaries-v1) | **Get** `/certification-campaigns/v1/certifications/{certificationId}/subject-summaries` | Subject Summaries for a Certification
[**move-certifications-v1**](#move-certifications-v1) | **Post** `/certification-campaigns/v1/campaigns/{campaignId}/reassign` | Reassign certifications to an identity
[**move-subject-and-items-async-v1**](#move-subject-and-items-async-v1) | **Post** `/certification-campaigns/v1/certifications/{certificationId}/reassign-async` | Reassign certification items asynchronously
[**move-subject-and-items-v1**](#move-subject-and-items-v1) | **Post** `/certification-campaigns/v1/certifications/{certificationId}/reassign` | Reassign certification subjects or items
[**patch-campaign-v1**](#patch-campaign-v1) | **Patch** `/certification-campaigns/v1/campaigns/{id}` | Update a campaign
[**patch-gov-certification-campaign-template-v1**](#patch-gov-certification-campaign-template-v1) | **Patch** `/certification-campaigns/v1/campaign-templates/{id}` | Update a Campaign Template
[**process-sign-off-certification-v1**](#process-sign-off-certification-v1) | **Post** `/certification-campaigns/v1/certifications/{certificationId}/sign-off` | Finalize Certification Decisions
[**put-campaign-filter-v1**](#put-campaign-filter-v1) | **Put** `/certification-campaigns/v1/campaign-filters/{id}` | Updates a Campaign Filter
[**search-campaign-templates-v1**](#search-campaign-templates-v1) | **Post** `/certification-campaigns/v1/campaign-templates/search` | Search campaign templates
[**search-certifications-v1**](#search-certifications-v1) | **Post** `/certification-campaigns/v1/certifications/search` | Search Certifications
[**search-insights-access-summary-v1**](#search-insights-access-summary-v1) | **Post** `/certification-campaigns/v1/insights/access-summary` | Get Insights Access Summary
[**search-review-items-v1**](#search-review-items-v1) | **Post** `/certification-campaigns/v1/certifications/{certificationId}/review-items/search` | Search certification review items
[**search-subject-summaries-v1**](#search-subject-summaries-v1) | **Post** `/certification-campaigns/v1/certifications/{certificationId}/subject-summaries/search` | Search certification subject summaries
[**set-or-update-campaign-template-schedule-v1**](#set-or-update-campaign-template-schedule-v1) | **Put** `/certification-campaigns/v1/campaign-templates/{id}/schedule` | Set a campaign template schedule
[**start-gov-certification-campaign-v1**](#start-gov-certification-campaign-v1) | **Post** `/certification-campaigns/v1/campaigns/{id}/activate` | Activate a Campaign
[**submit-decisions-v1**](#submit-decisions-v1) | **Post** `/certification-campaigns/v1/certifications/{certificationId}/decide` | Decide on a Certification Item


## complete-gov-certification-campaign-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Complete a Campaign
:::caution
This endpoint will run successfully for any campaigns that are **past due**.
This endpoint will return a bad request error if the campaign is **not past due**.
:::
Completes a certification campaign. This is provided to admins so that they can complete a certification even if all items have not been completed. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/complete-gov-certification-campaign-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The campaign id | 

### Other Parameters

Other parameters are passed through a pointer to a apiCompleteGovCertificationCampaignV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

 **completeCampaignOptions** | [**CompleteCampaignOptions**](../models/complete-campaign-options) | Optional. Default behavior is for the campaign to auto-approve upon completion, unless we specify explicitly REVOKE in autoCompleteAction | 

### Return type

**map[string]interface\{\}**

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    id := `ef38f943-47e9-4562-b5bb-8424a56397d8` // string | The campaign id # string | The campaign id
    completecampaignoptionsJson := []byte(`{
          "autoCompleteAction" : "REVOKE"
        }`) // CompleteCampaignOptions | Optional. Default behavior is for the campaign to auto-approve upon completion, unless we specify explicitly REVOKE in autoCompleteAction (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.CompleteGovCertificationCampaignV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.CompleteGovCertificationCampaignV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).CompleteCampaignOptions(completeCampaignOptions).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.CompleteGovCertificationCampaignV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CompleteGovCertificationCampaignV1`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `NextGenerationCertificationCampaignsAPI.CompleteGovCertificationCampaignV1`: %v\n", resp)
}
```

[[Back to top]](#)

## create-campaign-from-template-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Generate campaign from template
Generates a new campaign from a campaign template.
The campaign object contained in the template has special formatting applied to its name and description fields in order to determine the generated campaign's name/description. Placeholders in those fields are formatted with the current date and time upon generation.
Placeholders consist of a percent sign followed by a letter indicating what should be inserted; for example, "%Y" will insert the current year; a campaign template named "Campaign for %y" would generate a campaign called "Campaign for 2020" (assuming the year at generation time is 2020).
Valid placeholders are the date/time conversion suffix characters supported by [java.util.Formatter](https://docs.oracle.com/javase/8/docs/api/java/util/Formatter.html).
Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/create-campaign-from-template-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The desired campaign template&#39;s ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateCampaignFromTemplateV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]


### Return type

[**CampaignGet**](../models/campaign-get)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    id := `2c918083-5d19-1a86-a15d-28455b4a2329` // string | The desired campaign template's ID. # string | The desired campaign template's ID.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.CreateCampaignFromTemplateV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.CreateCampaignFromTemplateV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.CreateCampaignFromTemplateV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateCampaignFromTemplateV1`: CampaignGet
    fmt.Fprintf(os.Stdout, "Response from `NextGenerationCertificationCampaignsAPI.CreateCampaignFromTemplateV1`: %v\n", resp)
}
```

[[Back to top]](#)

## create-gov-certification-campaign-filter-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Create a Campaign Filter
Create a campaign filter based on filter details and criteria. Required roles are ORG_ADMIN or CERT_ADMIN. The request body must not exceed 1 MiB (1,048,576 bytes); larger requests are rejected with a 400 response.

[API Spec](https://developer.sailpoint.com/docs/api/create-gov-certification-campaign-filter-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateGovCertificationCampaignFilterV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **campaignFilterCreate** | [**CampaignFilterCreate**](../models/campaign-filter-create) |  | 

### Return type

[**CampaignFilterGet**](../models/campaign-filter-get)

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
    gov_certification "github.com/sailpoint-oss/golang-sdk/v3/gov_certification"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    campaignfiltercreateJson := []byte(`{
          "mode" : "INCLUSION",
          "name" : "Identity Attribute Campaign Filter",
          "description" : "Campaign filter to certify data based on specified property of Identity Attribute.",
          "criteriaList" : [ {
            "criteriaType" : "IDENTITY",
            "criteriaProperty" : "DISPLAY_NAME",
            "criteriaValue" : "support",
            "operation" : "EQUALS"
          } ]
        }`) // CampaignFilterCreate | 

    var campaignFilterCreate gov_certification.CampaignFilterCreate
    if err := json.Unmarshal(campaignfiltercreateJson, &campaignFilterCreate); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.CreateGovCertificationCampaignFilterV1(context.Background()).XSailPointExperimental(xSailPointExperimental).CampaignFilterCreate(campaignFilterCreate).Execute()
	  //resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.CreateGovCertificationCampaignFilterV1(context.Background()).XSailPointExperimental(xSailPointExperimental).CampaignFilterCreate(campaignFilterCreate).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.CreateGovCertificationCampaignFilterV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateGovCertificationCampaignFilterV1`: CampaignFilterGet
    fmt.Fprintf(os.Stdout, "Response from `NextGenerationCertificationCampaignsAPI.CreateGovCertificationCampaignFilterV1`: %v\n", resp)
}
```

[[Back to top]](#)

## create-gov-certification-campaign-template-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Create a Campaign Template.
Creates campaign template based on campaign. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/create-gov-certification-campaign-template-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateGovCertificationCampaignTemplateV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **campaignTemplateCreate** | [**CampaignTemplateCreate**](../models/campaign-template-create) |  | 

### Return type

[**CampaignTemplateGet**](../models/campaign-template-get)

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
    gov_certification "github.com/sailpoint-oss/golang-sdk/v3/gov_certification"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    campaigntemplatecreateJson := []byte(`{
          "recommendationsEnabled" : true,
          "sunsetCommentsRequired" : true,
          "deadlineDuration" : "P2W",
          "searchBasedParams" : {
            "identityIds" : [ "0fbe863c063c4c88a35fd7f17e8a3df5" ],
            "searchType" : "ACCESS",
            "query" : "admin",
            "accessConstraints" : [ {
              "ids" : [ "2c90ad2a70ace7d50170acf22ca90010" ],
              "type" : "ENTITLEMENT",
              "operator" : "SELECTED"
            }, {
              "ids" : [ "2c90ad2a70ace7d50170acf22ca90010" ],
              "type" : "ENTITLEMENT",
              "operator" : "SELECTED"
            } ]
          },
          "description" : "Template for the annual manager campaign.",
          "reviewer" : {
            "name" : "William Wilson",
            "id" : "0fbe863c063c4c88a35fd7f17e8a3df5",
            "type" : "IDENTITY"
          },
          "type" : "IDENTITY",
          "filterRef" : {
            "id" : "e9f9a139-7b84-2fd5-a658-42087040d3ac"
          },
          "emailNotificationEnabled" : false,
          "remediatorRef" : {
            "name" : "Role Admin",
            "id" : "2c90ad2a70ace7d50170acf22ca90010"
          },
          "autoRevokeAllowed" : false,
          "name" : "Manager Campaign Template",
          "mandatoryCommentRequirement" : "NO_DECISIONS",
          "campaignDescription" : "Everyone needs to be reviewed by their manager",
          "campaignName" : "Manager Campaign",
          "sourceIds" : [ "0fbe863c063c4c88a35fd7f17e8a3df5" ]
        }`) // CampaignTemplateCreate | 

    var campaignTemplateCreate gov_certification.CampaignTemplateCreate
    if err := json.Unmarshal(campaigntemplatecreateJson, &campaignTemplateCreate); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.CreateGovCertificationCampaignTemplateV1(context.Background()).XSailPointExperimental(xSailPointExperimental).CampaignTemplateCreate(campaignTemplateCreate).Execute()
	  //resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.CreateGovCertificationCampaignTemplateV1(context.Background()).XSailPointExperimental(xSailPointExperimental).CampaignTemplateCreate(campaignTemplateCreate).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.CreateGovCertificationCampaignTemplateV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateGovCertificationCampaignTemplateV1`: CampaignTemplateGet
    fmt.Fprintf(os.Stdout, "Response from `NextGenerationCertificationCampaignsAPI.CreateGovCertificationCampaignTemplateV1`: %v\n", resp)
}
```

[[Back to top]](#)

## create-gov-certification-campaign-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Create a campaign
Creates a new Certification Campaign with the information provided in the request body. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/create-gov-certification-campaign-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateGovCertificationCampaignV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **campaignCreate** | [**CampaignCreate**](../models/campaign-create) |  | 

### Return type

[**CampaignGet**](../models/campaign-get)

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
    gov_certification "github.com/sailpoint-oss/golang-sdk/v3/gov_certification"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    campaigncreateJson := []byte(`{
          "inlineFilter" : {
            "mode" : "INCLUSION",
            "criteriaList" : [ {
              "criteriaType" : "IDENTITY",
              "criteriaProperty" : "DISPLAY_NAME",
              "criteriaValue" : "support",
              "operation" : "EQUALS"
            } ]
          },
          "recommendationsEnabled" : true,
          "sunsetCommentsRequired" : true,
          "searchBasedParams" : {
            "identityIds" : [ "0fbe863c063c4c88a35fd7f17e8a3df5" ],
            "searchType" : "ACCESS",
            "query" : "admin",
            "accessConstraints" : [ {
              "ids" : [ "2c90ad2a70ace7d50170acf22ca90010" ],
              "type" : "ENTITLEMENT",
              "operator" : "SELECTED"
            }, {
              "ids" : [ "2c90ad2a70ace7d50170acf22ca90010" ],
              "type" : "ENTITLEMENT",
              "operator" : "SELECTED"
            } ]
          },
          "description" : "Everyone needs to be reviewed by their manager",
          "reviewer" : {
            "name" : "William Wilson",
            "id" : "0fbe863c063c4c88a35fd7f17e8a3df5",
            "type" : "IDENTITY"
          },
          "autoActivate" : true,
          "type" : "IDENTITY",
          "filterRef" : {
            "id" : "e9f9a139-7b84-2fd5-a658-42087040d3ac"
          },
          "emailNotificationEnabled" : false,
          "remediatorRef" : {
            "name" : "Role Admin",
            "id" : "2c90ad2a70ace7d50170acf22ca90010"
          },
          "autoRevokeAllowed" : false,
          "name" : "Manager Campaign",
          "mandatoryCommentRequirement" : "NO_DECISIONS",
          "deadlineTimezone" : "-05:00",
          "deadline" : "2020-03-15",
          "sourceIds" : [ "0fbe863c063c4c88a35fd7f17e8a3df5" ]
        }`) // CampaignCreate | 

    var campaignCreate gov_certification.CampaignCreate
    if err := json.Unmarshal(campaigncreateJson, &campaignCreate); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.CreateGovCertificationCampaignV1(context.Background()).XSailPointExperimental(xSailPointExperimental).CampaignCreate(campaignCreate).Execute()
	  //resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.CreateGovCertificationCampaignV1(context.Background()).XSailPointExperimental(xSailPointExperimental).CampaignCreate(campaignCreate).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.CreateGovCertificationCampaignV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateGovCertificationCampaignV1`: CampaignGet
    fmt.Fprintf(os.Stdout, "Response from `NextGenerationCertificationCampaignsAPI.CreateGovCertificationCampaignV1`: %v\n", resp)
}
```

[[Back to top]](#)

## create-report-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Create campaign report
Creates a new campaign report asynchronously for the provided campaignId. Required roles are ORG_ADMIN or CERT_ADMIN or REPORT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/create-report-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**campaignId** | **string** | The ID of the campaign to generate a report for | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateReportV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

 **triggerCampaignReportRequest** | [**TriggerCampaignReportRequest**](../models/trigger-campaign-report-request) |  | 

### Return type

[**CampaignReport**](../models/campaign-report)

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
    gov_certification "github.com/sailpoint-oss/golang-sdk/v3/gov_certification"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    campaignId := `e1aeb0b6-0021-4f40-8bc7-5c56533214b3` // string | The ID of the campaign to generate a report for # string | The ID of the campaign to generate a report for
    triggercampaignreportrequestJson := []byte(`{
          "format" : "PDF",
          "name" : "My Campaign Report",
          "type" : "REMEDIATION"
        }`) // TriggerCampaignReportRequest | 

    var triggerCampaignReportRequest gov_certification.TriggerCampaignReportRequest
    if err := json.Unmarshal(triggercampaignreportrequestJson, &triggerCampaignReportRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.CreateReportV1(context.Background(), campaignId).XSailPointExperimental(xSailPointExperimental).TriggerCampaignReportRequest(triggerCampaignReportRequest).Execute()
	  //resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.CreateReportV1(context.Background(), campaignId).XSailPointExperimental(xSailPointExperimental).TriggerCampaignReportRequest(triggerCampaignReportRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.CreateReportV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateReportV1`: CampaignReport
    fmt.Fprintf(os.Stdout, "Response from `NextGenerationCertificationCampaignsAPI.CreateReportV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-gov-certification-campaign-filters-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Deletes Campaign Filters
Deletes campaign filters whose IDs are specified in the provided list of campaign filter IDs. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/delete-gov-certification-campaign-filters-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteGovCertificationCampaignFiltersV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **requestBody** | **[]string** | A JSON list of IDs of campaign filters to delete. | 

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
  "encoding/json"
    gov_certification "github.com/sailpoint-oss/golang-sdk/v3/gov_certification"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    requestbody := []byte(``) // []string | A JSON list of IDs of campaign filters to delete.

    var requestBody []gov_certification.RequestBody
    if err := json.Unmarshal(requestbodyJson, &requestBody); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.NextGenerationCertificationCampaignsAPI.DeleteGovCertificationCampaignFiltersV1(context.Background()).XSailPointExperimental(xSailPointExperimental).RequestBody(requestBody).Execute()
	  //r, err := apiClient.NextGenerationCertificationCampaignsAPI.DeleteGovCertificationCampaignFiltersV1(context.Background()).XSailPointExperimental(xSailPointExperimental).RequestBody(requestBody).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.DeleteGovCertificationCampaignFiltersV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-gov-certification-campaign-template-schedule-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Delete a Campaign Template Schedule
Deletes a schedule by campaign template ID. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/delete-gov-certification-campaign-template-schedule-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the campaign template whose schedule is being deleted. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteGovCertificationCampaignTemplateScheduleV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    id := `2c918083-5d19-1a86-a15d-28455b4a2329` // string | The ID of the campaign template whose schedule is being deleted. # string | The ID of the campaign template whose schedule is being deleted.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.NextGenerationCertificationCampaignsAPI.DeleteGovCertificationCampaignTemplateScheduleV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //r, err := apiClient.NextGenerationCertificationCampaignsAPI.DeleteGovCertificationCampaignTemplateScheduleV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.DeleteGovCertificationCampaignTemplateScheduleV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-gov-certification-campaign-template-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Delete a Campaign Template
Deletes a campaign template by ID. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/delete-gov-certification-campaign-template-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the campaign template being deleted. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteGovCertificationCampaignTemplateV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    id := `2c918083-5d19-1a86-a15d-28455b4a2329` // string | The ID of the campaign template being deleted. # string | The ID of the campaign template being deleted.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.NextGenerationCertificationCampaignsAPI.DeleteGovCertificationCampaignTemplateV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //r, err := apiClient.NextGenerationCertificationCampaignsAPI.DeleteGovCertificationCampaignTemplateV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.DeleteGovCertificationCampaignTemplateV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-gov-certification-campaigns-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Delete Campaigns
Use this API to delete certification campaigns whose IDs are specified in the provided list of campaign IDs. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/delete-gov-certification-campaigns-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteGovCertificationCampaignsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **campaignsDeleteRequest** | [**CampaignsDeleteRequest**](../models/campaigns-delete-request) | IDs of the campaigns to delete. | 

### Return type

**map[string]interface\{\}**

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
    gov_certification "github.com/sailpoint-oss/golang-sdk/v3/gov_certification"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    campaignsdeleterequestJson := []byte(`{
          "ids" : [ "ef38f943-47e9-4562-b5bb-8424a56397d8", "ef38f943-47e9-4562-b5bb-8424a56397d9" ]
        }`) // CampaignsDeleteRequest | IDs of the campaigns to delete.

    var campaignsDeleteRequest gov_certification.CampaignsDeleteRequest
    if err := json.Unmarshal(campaignsdeleterequestJson, &campaignsDeleteRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.DeleteGovCertificationCampaignsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).CampaignsDeleteRequest(campaignsDeleteRequest).Execute()
	  //resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.DeleteGovCertificationCampaignsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).CampaignsDeleteRequest(campaignsDeleteRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.DeleteGovCertificationCampaignsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteGovCertificationCampaignsV1`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `NextGenerationCertificationCampaignsAPI.DeleteGovCertificationCampaignsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-access-summaries-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Access Summaries
This API returns a list of access summaries for the specified certification and type. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-access-summaries-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**certificationId** | **string** | The certification ID | 
**type_** | [**CertificationItemType**](../models/) | The type of review item to retrieve summaries for | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAccessSummariesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]


 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **completed**: *eq, ne*  **targetReference.id**: *eq, ne, in*  **targetReference.name**: *eq, sw, co*  **sourceName**: *eq, sw, co* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **targetReference.name** | 

### Return type

[**[]ReviewData**](../models/review-data)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    certificationId := `ef38f943-47e9-4562-b5bb-8424a56397d8` // string | The certification ID # string | The certification ID
    type_ := ACCESS_PROFILE // CertificationItemType | The type of review item to retrieve summaries for # CertificationItemType | The type of review item to retrieve summaries for
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `completed eq false and sourceName sw 'AD'` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **completed**: *eq, ne*  **targetReference.id**: *eq, ne, in*  **targetReference.name**: *eq, sw, co*  **sourceName**: *eq, sw, co* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **completed**: *eq, ne*  **targetReference.id**: *eq, ne, in*  **targetReference.name**: *eq, sw, co*  **sourceName**: *eq, sw, co* (optional)
    sorters := `targetReference.name` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **targetReference.name** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **targetReference.name** (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.GetAccessSummariesV1(context.Background(), certificationId, type_).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.GetAccessSummariesV1(context.Background(), certificationId, type_).XSailPointExperimental(xSailPointExperimental).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.GetAccessSummariesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAccessSummariesV1`: []ReviewData
    fmt.Fprintf(os.Stdout, "Response from `NextGenerationCertificationCampaignsAPI.GetAccessSummariesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-certification-entitlement-children-details-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Entitlement Children in a Certification
Returns a list of child entitlements for the provided entitlement, as long as the logged-in user is a reviewer of the specified certification, and the certification contains either the specified entitlement, or an access profile that contains the specified entitlement. ORG_ADMIN or CERT_ADMIN can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-certification-entitlement-children-details-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**certificationId** | **string** | The certification ID | 
**reviewItemId** | **string** | The certification item ID | 
**entitlementId** | **string** | The entitlement ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCertificationEntitlementChildrenDetailsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]



 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id** | 

### Return type

[**[]PassThroughEntitlement**](../models/pass-through-entitlement)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    certificationId := `ef38f943-47e9-4562-b5bb-8424a56397d8` // string | The certification ID # string | The certification ID
    reviewItemId := `2478b87b-f0d2-4585-b42d-45e4d580c5cf` // string | The certification item ID # string | The certification item ID
    entitlementId := `ef38f94347e94562b5bb8424a56397d8` // string | The entitlement ID # string | The entitlement ID
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `name eq 'Read Only'` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le* (optional)
    sorters := `name` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id** (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.GetCertificationEntitlementChildrenDetailsV1(context.Background(), certificationId, reviewItemId, entitlementId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.GetCertificationEntitlementChildrenDetailsV1(context.Background(), certificationId, reviewItemId, entitlementId).XSailPointExperimental(xSailPointExperimental).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.GetCertificationEntitlementChildrenDetailsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCertificationEntitlementChildrenDetailsV1`: []PassThroughEntitlement
    fmt.Fprintf(os.Stdout, "Response from `NextGenerationCertificationCampaignsAPI.GetCertificationEntitlementChildrenDetailsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-certification-entitlement-details-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Get Entitlement in a Certification
This API get the details for the entitlement, as long as the logged-in user is a reviewer of the specified certification, and the certification contains either the specified entitlement, or an access profile that contains the specified entitlement. ORG_ADMIN or CERT_ADMIN can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-certification-entitlement-details-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**certificationId** | **string** | The certification ID | 
**reviewItemId** | **string** | The certification item ID | 
**entitlementId** | **string** | The entitlement ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCertificationEntitlementDetailsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]




### Return type

[**PassThroughEntitlement**](../models/pass-through-entitlement)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    certificationId := `ef38f943-47e9-4562-b5bb-8424a56397d8` // string | The certification ID # string | The certification ID
    reviewItemId := `2478b87b-f0d2-4585-b42d-45e4d580c5cf` // string | The certification item ID # string | The certification item ID
    entitlementId := `ef38f94347e94562b5bb8424a56397d8` // string | The entitlement ID # string | The entitlement ID

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.GetCertificationEntitlementDetailsV1(context.Background(), certificationId, reviewItemId, entitlementId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.GetCertificationEntitlementDetailsV1(context.Background(), certificationId, reviewItemId, entitlementId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.GetCertificationEntitlementDetailsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCertificationEntitlementDetailsV1`: PassThroughEntitlement
    fmt.Fprintf(os.Stdout, "Response from `NextGenerationCertificationCampaignsAPI.GetCertificationEntitlementDetailsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-certification-entitlement-parents-details-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Entitlement Parents in a Certification
Returns a list of parent entitlements for the provided entitlement, as long as the logged-in user is a reviewer of the specified certification, and the certification contains either the specified entitlement, or an access profile that contains the specified entitlement. ORG_ADMIN or CERT_ADMIN can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-certification-entitlement-parents-details-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**certificationId** | **string** | The certification ID | 
**reviewItemId** | **string** | The certification item ID | 
**entitlementId** | **string** | The entitlement ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCertificationEntitlementParentsDetailsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]



 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id** | 

### Return type

[**[]PassThroughEntitlement**](../models/pass-through-entitlement)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    certificationId := `ef38f943-47e9-4562-b5bb-8424a56397d8` // string | The certification ID # string | The certification ID
    reviewItemId := `2478b87b-f0d2-4585-b42d-45e4d580c5cf` // string | The certification item ID # string | The certification item ID
    entitlementId := `ef38f94347e94562b5bb8424a56397d8` // string | The entitlement ID # string | The entitlement ID
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `attribute eq 'role'` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le* (optional)
    sorters := `name` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id** (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.GetCertificationEntitlementParentsDetailsV1(context.Background(), certificationId, reviewItemId, entitlementId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.GetCertificationEntitlementParentsDetailsV1(context.Background(), certificationId, reviewItemId, entitlementId).XSailPointExperimental(xSailPointExperimental).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.GetCertificationEntitlementParentsDetailsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCertificationEntitlementParentsDetailsV1`: []PassThroughEntitlement
    fmt.Fprintf(os.Stdout, "Response from `NextGenerationCertificationCampaignsAPI.GetCertificationEntitlementParentsDetailsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-certification-entitlement-permissions-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Permissions in a Certification
Retrieves a list of permissions associated with the given certification itemId value, as long as the logged-in user is a reviewer of the specified certification, and the certification contains either the specified entitlement, or an access profile or the role that contains the specified entitlement. ORG_ADMIN or CERT_ADMIN can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-certification-entitlement-permissions-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**certificationId** | **string** | The certification ID | 
**reviewItemId** | **string** | The certification item ID | 
**entitlementId** | **string** | The entitlement ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCertificationEntitlementPermissionsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]



 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]

### Return type

[**[]PermissionDTO**](../models/permission-dto)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    certificationId := `ef38f943-47e9-4562-b5bb-8424a56397d8` // string | The certification ID # string | The certification ID
    reviewItemId := `2478b87b-f0d2-4585-b42d-45e4d580c5cf` // string | The certification item ID # string | The certification item ID
    entitlementId := `ef38f94347e94562b5bb8424a56397d8` // string | The entitlement ID # string | The entitlement ID
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.GetCertificationEntitlementPermissionsV1(context.Background(), certificationId, reviewItemId, entitlementId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.GetCertificationEntitlementPermissionsV1(context.Background(), certificationId, reviewItemId, entitlementId).XSailPointExperimental(xSailPointExperimental).Limit(limit).Offset(offset).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.GetCertificationEntitlementPermissionsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCertificationEntitlementPermissionsV1`: []PermissionDTO
    fmt.Fprintf(os.Stdout, "Response from `NextGenerationCertificationCampaignsAPI.GetCertificationEntitlementPermissionsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-certification-item-account-details-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Certification Item Account Details
Returns account details for a certification review item. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API. It uses the Shelby Account API to fetch details.

[API Spec](https://developer.sailpoint.com/docs/api/get-certification-item-account-details-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**certificationId** | **string** | The certification ID | 
**reviewItemId** | **string** | The certification item ID | 
**entitlementId** | **string** | The entitlement ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCertificationItemAccountDetailsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]




### Return type

[**AccountDetailsDto**](../models/account-details-dto)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    certificationId := `ef38f943-47e9-4562-b5bb-8424a56397d8` // string | The certification ID # string | The certification ID
    reviewItemId := `2478b87b-f0d2-4585-b42d-45e4d580c5cf` // string | The certification item ID # string | The certification item ID
    entitlementId := `ef38f94347e94562b5bb8424a56397d8` // string | The entitlement ID # string | The entitlement ID

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.GetCertificationItemAccountDetailsV1(context.Background(), certificationId, reviewItemId, entitlementId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.GetCertificationItemAccountDetailsV1(context.Background(), certificationId, reviewItemId, entitlementId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.GetCertificationItemAccountDetailsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCertificationItemAccountDetailsV1`: AccountDetailsDto
    fmt.Fprintf(os.Stdout, "Response from `NextGenerationCertificationCampaignsAPI.GetCertificationItemAccountDetailsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-certification-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Certification by ID
This API returns a single certification by its ID. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-certification-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**certificationId** | **string** | The certification ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCertificationV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]


### Return type

[**Certification**](../models/certification)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    certificationId := `ef38f943-47e9-4562-b5bb-8424a56397d8` // string | The certification ID # string | The certification ID

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.GetCertificationV1(context.Background(), certificationId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.GetCertificationV1(context.Background(), certificationId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.GetCertificationV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCertificationV1`: Certification
    fmt.Fprintf(os.Stdout, "Response from `NextGenerationCertificationCampaignsAPI.GetCertificationV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-decision-summary-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Summary of Certification Decisions
This API returns a summary of the decisions made on a certification. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-decision-summary-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**certificationId** | **string** | The certification ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetDecisionSummaryV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **certificationSubjectSummary.id**: *eq, in* | 

### Return type

[**DetailedDecisionSummary**](../models/detailed-decision-summary)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    certificationId := `ef38f943-47e9-4562-b5bb-8424a56397d8` // string | The certification ID # string | The certification ID
    filters := `certificationSubjectSummary.id in ('2c918085-71bc-fcf8-0171-c23e4b4221fc','2c918085-71bc-fcf8-0171-c23e4b4221fd')` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **certificationSubjectSummary.id**: *eq, in* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **certificationSubjectSummary.id**: *eq, in* (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.GetDecisionSummaryV1(context.Background(), certificationId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.GetDecisionSummaryV1(context.Background(), certificationId).XSailPointExperimental(xSailPointExperimental).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.GetDecisionSummaryV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetDecisionSummaryV1`: DetailedDecisionSummary
    fmt.Fprintf(os.Stdout, "Response from `NextGenerationCertificationCampaignsAPI.GetDecisionSummaryV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-download-url-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Download URL for campaign report
Retrieves a presigned URL to use for downloading the campaign report. Required roles are ORG_ADMIN or CERT_ADMIN or REPORT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/get-download-url-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**campaignId** | **string** | The ID of the campaign to be retrieved | 
**reportId** | **string** | The ID of the report to be retrieved | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetDownloadUrlV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]



### Return type

[**CampaignReportDownloadResponse**](../models/campaign-report-download-response)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    campaignId := `e1aeb0b6-0021-4f40-8bc7-5c56533214b3` // string | The ID of the campaign to be retrieved # string | The ID of the campaign to be retrieved
    reportId := `e1aeb0b6-0021-4f40-8bc7-5c56533214b3` // string | The ID of the report to be retrieved # string | The ID of the report to be retrieved

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.GetDownloadUrlV1(context.Background(), campaignId, reportId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.GetDownloadUrlV1(context.Background(), campaignId, reportId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.GetDownloadUrlV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetDownloadUrlV1`: CampaignReportDownloadResponse
    fmt.Fprintf(os.Stdout, "Response from `NextGenerationCertificationCampaignsAPI.GetDownloadUrlV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-gov-certification-access-profile-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Get an Access Profile
This API returns an access profile details based on access profile id provided, as long as the logged-in user is a reviewer of the specified certification, and the certification contains either the specified access profile, or a role that contains the specified access profile. ORG_ADMIN or CERT_ADMIN can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-gov-certification-access-profile-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**certificationId** | **string** | The certification ID | 
**reviewItemId** | **string** | The certification item ID. This must of review item type either ROLE or ACCESS_PROFILE. | 
**accessProfileId** | **string** | The Access Profile ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetGovCertificationAccessProfileV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]




### Return type

[**AccessProfile2**](../models/access-profile2)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    certificationId := `ef38f943-47e9-4562-b5bb-8424a56397d8` // string | The certification ID # string | The certification ID
    reviewItemId := `2478b87b-f0d2-4585-b42d-45e4d580c5cf` // string | The certification item ID. This must of review item type either ROLE or ACCESS_PROFILE. # string | The certification item ID. This must of review item type either ROLE or ACCESS_PROFILE.
    accessProfileId := `2c9180837ca6693d017ca8d097500149` // string | The Access Profile ID # string | The Access Profile ID

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.GetGovCertificationAccessProfileV1(context.Background(), certificationId, reviewItemId, accessProfileId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.GetGovCertificationAccessProfileV1(context.Background(), certificationId, reviewItemId, accessProfileId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.GetGovCertificationAccessProfileV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetGovCertificationAccessProfileV1`: AccessProfile2
    fmt.Fprintf(os.Stdout, "Response from `NextGenerationCertificationCampaignsAPI.GetGovCertificationAccessProfileV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-gov-certification-campaign-filter-by-id-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Get Campaign Filter by ID
Retrieves information for an existing campaign filter using the filter's ID. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/get-gov-certification-campaign-filter-by-id-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the campaign filter to be retrieved. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetGovCertificationCampaignFilterByIdV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]


### Return type

[**CampaignFilterGet**](../models/campaign-filter-get)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    id := `e9f9a139-7b84-2fd5-a658-42087040d3ac` // string | The ID of the campaign filter to be retrieved. # string | The ID of the campaign filter to be retrieved.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.GetGovCertificationCampaignFilterByIdV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.GetGovCertificationCampaignFilterByIdV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.GetGovCertificationCampaignFilterByIdV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetGovCertificationCampaignFilterByIdV1`: CampaignFilterGet
    fmt.Fprintf(os.Stdout, "Response from `NextGenerationCertificationCampaignsAPI.GetGovCertificationCampaignFilterByIdV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-gov-certification-campaign-report-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Get a campaign report
Retrieves the reports for an existing campaign using the campaign's ID and report ID. Required roles are ORG_ADMIN or CERT_ADMIN or REPORT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/get-gov-certification-campaign-report-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**campaignId** | **string** | The ID of the campaign to be retrieved | 
**reportId** | **string** | The ID of the report to be retrieved | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetGovCertificationCampaignReportV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]



### Return type

[**CampaignReport**](../models/campaign-report)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    campaignId := `e1aeb0b6-0021-4f40-8bc7-5c56533214b3` // string | The ID of the campaign to be retrieved # string | The ID of the campaign to be retrieved
    reportId := `e1aeb0b6-0021-4f40-8bc7-5c56533214b3` // string | The ID of the report to be retrieved # string | The ID of the report to be retrieved

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.GetGovCertificationCampaignReportV1(context.Background(), campaignId, reportId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.GetGovCertificationCampaignReportV1(context.Background(), campaignId, reportId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.GetGovCertificationCampaignReportV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetGovCertificationCampaignReportV1`: CampaignReport
    fmt.Fprintf(os.Stdout, "Response from `NextGenerationCertificationCampaignsAPI.GetGovCertificationCampaignReportV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-gov-certification-campaign-template-schedule-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Get a Campaign Template Schedule
Fetches a schedule by a campaign template ID. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/get-gov-certification-campaign-template-schedule-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The campaign template&#39;s ID for the desired campaign template schedule. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetGovCertificationCampaignTemplateScheduleV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    id := `2c918083-5d19-1a86-a15d-28455b4a2329` // string | The campaign template's ID for the desired campaign template schedule. # string | The campaign template's ID for the desired campaign template schedule.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.GetGovCertificationCampaignTemplateScheduleV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.GetGovCertificationCampaignTemplateScheduleV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.GetGovCertificationCampaignTemplateScheduleV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetGovCertificationCampaignTemplateScheduleV1`: Schedule
    fmt.Fprintf(os.Stdout, "Response from `NextGenerationCertificationCampaignsAPI.GetGovCertificationCampaignTemplateScheduleV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-gov-certification-campaign-template-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Get a Campaign Template
Fetches a campaign template by ID. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/get-gov-certification-campaign-template-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The desired campaign template&#39;s ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetGovCertificationCampaignTemplateV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]


### Return type

[**CampaignTemplateGet**](../models/campaign-template-get)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    id := `2c918083-5d19-1a86-a15d-28455b4a2329` // string | The desired campaign template's ID. # string | The desired campaign template's ID.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.GetGovCertificationCampaignTemplateV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.GetGovCertificationCampaignTemplateV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.GetGovCertificationCampaignTemplateV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetGovCertificationCampaignTemplateV1`: CampaignTemplateGet
    fmt.Fprintf(os.Stdout, "Response from `NextGenerationCertificationCampaignsAPI.GetGovCertificationCampaignTemplateV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-gov-certification-campaign-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Get a campaign
Retrieves information for an existing campaign using the campaign's ID. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for the certifications under this campaign can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-gov-certification-campaign-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the campaign to be retrieved | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetGovCertificationCampaignV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]


### Return type

[**CampaignGet**](../models/campaign-get)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    id := `2c918085-71bc-4cf8-a171-c23e4b4221fc` // string | The ID of the campaign to be retrieved # string | The ID of the campaign to be retrieved

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.GetGovCertificationCampaignV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.GetGovCertificationCampaignV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.GetGovCertificationCampaignV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetGovCertificationCampaignV1`: CampaignGet
    fmt.Fprintf(os.Stdout, "Response from `NextGenerationCertificationCampaignsAPI.GetGovCertificationCampaignV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-gov-certification-task-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Task details by ID
This API returns the task for the specified ID. Required roles are ORG_ADMIN or CERT_ADMIN. If the targetType is `CERTIFICATION`, then the reviewers for the specified certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-gov-certification-task-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The task ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetGovCertificationTaskV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]


### Return type

[**CertificationTask**](../models/certification-task)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    id := `63b32151-26c0-42f4-9299-8898dc1c9daa` // string | The task ID # string | The task ID

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.GetGovCertificationTaskV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.GetGovCertificationTaskV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.GetGovCertificationTaskV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetGovCertificationTaskV1`: CertificationTask
    fmt.Fprintf(os.Stdout, "Response from `NextGenerationCertificationCampaignsAPI.GetGovCertificationTaskV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-pending-tasks-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
List of Pending Tasks
This API returns a list of pending (`QUEUED` or `IN_PROGRESS`) certification related tasks. Any authenticated token can call this API, but only tasks you are authorized to review will be returned. Non-admin users must include query parameter as `reviewer-identity=me` in the API call.

[API Spec](https://developer.sailpoint.com/docs/api/get-pending-tasks-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetPendingTasksV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **reviewerIdentity** | **string** | The ID of reviewer identity. *me* indicates the current user. | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **targetId**: *eq, in*  **type**: *eq, in* | 

### Return type

[**[]CertificationTask**](../models/certification-task)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    reviewerIdentity := `Ada.1de82e55078344` // string | The ID of reviewer identity. *me* indicates the current user. (optional) # string | The ID of reviewer identity. *me* indicates the current user. (optional)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `type eq "REASSIGN_SUBJECTS_AND_ITEMS"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **targetId**: *eq, in*  **type**: *eq, in* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **targetId**: *eq, in*  **type**: *eq, in* (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.GetPendingTasksV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.GetPendingTasksV1(context.Background()).XSailPointExperimental(xSailPointExperimental).ReviewerIdentity(reviewerIdentity).Limit(limit).Offset(offset).Count(count).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.GetPendingTasksV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPendingTasksV1`: []CertificationTask
    fmt.Fprintf(os.Stdout, "Response from `NextGenerationCertificationCampaignsAPI.GetPendingTasksV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-status-summary-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Status Summary For Certifications
Return the status summary for certifications owned by the logged in user. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-status-summary-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetStatusSummaryV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**CertificationStatusSummary**](../models/certification-status-summary)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.GetStatusSummaryV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.GetStatusSummaryV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.GetStatusSummaryV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetStatusSummaryV1`: CertificationStatusSummary
    fmt.Fprintf(os.Stdout, "Response from `NextGenerationCertificationCampaignsAPI.GetStatusSummaryV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-subject-summary-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Summary for a Certification Subject
This API returns the summary for a subject on a specified certification. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-subject-summary-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**certificationId** | **string** | The certification ID | 
**subjectId** | **string** | The subject summary ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSubjectSummaryV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]



### Return type

[**CertificationSubjectSummary**](../models/certification-subject-summary)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    certificationId := `ef38f943-47e9-4562-b5bb-8424a56397d8` // string | The certification ID # string | The certification ID
    subjectId := `2c918087-72a5-44f5-a172-a9540e501ba8` // string | The subject summary ID # string | The subject summary ID

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.GetSubjectSummaryV1(context.Background(), certificationId, subjectId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.GetSubjectSummaryV1(context.Background(), certificationId, subjectId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.GetSubjectSummaryV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSubjectSummaryV1`: CertificationSubjectSummary
    fmt.Fprintf(os.Stdout, "Response from `NextGenerationCertificationCampaignsAPI.GetSubjectSummaryV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-campaign-templates-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
List Campaign Templates
Lists all campaign templates matching the supplied standard V3 query parameters. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/list-campaign-templates-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListCampaignTemplatesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in, gt, ge, lt, le, sw, co*  **name**: *eq, ne, in, gt, ge, lt, le, sw, co* | 

### Return type

[**[]CampaignTemplateGet**](../models/campaign-template-get)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    sorters := `name` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional)
    filters := `name eq "Campaign Template"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in, gt, ge, lt, le, sw, co*  **name**: *eq, ne, in, gt, ge, lt, le, sw, co* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in, gt, ge, lt, le, sw, co*  **name**: *eq, ne, in, gt, ge, lt, le, sw, co* (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.ListCampaignTemplatesV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.ListCampaignTemplatesV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Limit(limit).Offset(offset).Count(count).Sorters(sorters).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.ListCampaignTemplatesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListCampaignTemplatesV1`: []CampaignTemplateGet
    fmt.Fprintf(os.Stdout, "Response from `NextGenerationCertificationCampaignsAPI.ListCampaignTemplatesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-campaigns-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
List the campaigns
List all the campaign details. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/list-campaigns-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListCampaignsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw, co*  **status**: *eq, in, ne*  Possible values are [PENDING, STAGED, CANCELING, ACTIVATING, ACTIVE, COMPLETING, COMPLETED, ERROR] | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified, deadline, status, totalCertifications, completedCertifications** | 

### Return type

[**[]CampaignSummary**](../models/campaign-summary)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `name eq "Manager Campaign"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw, co*  **status**: *eq, in, ne*  Possible values are [PENDING, STAGED, CANCELING, ACTIVATING, ACTIVE, COMPLETING, COMPLETED, ERROR] (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw, co*  **status**: *eq, in, ne*  Possible values are [PENDING, STAGED, CANCELING, ACTIVATING, ACTIVE, COMPLETING, COMPLETED, ERROR] (optional)
    sorters := `name,-created` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified, deadline, status, totalCertifications, completedCertifications** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified, deadline, status, totalCertifications, completedCertifications** (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.ListCampaignsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.ListCampaignsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.ListCampaignsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListCampaignsV1`: []CampaignSummary
    fmt.Fprintf(os.Stdout, "Response from `NextGenerationCertificationCampaignsAPI.ListCampaignsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-certifications-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
List Certifications
This API returns a list of certifications that satisfy the given query parameters. Any authenticated token can call this API, but only certifications you are authorized to review will be returned. Non-admin users must include query parameter as `?reviewer-identity=me` in the API call.

[API Spec](https://developer.sailpoint.com/docs/api/list-certifications-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListCertificationsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **reviewerIdentity** | **string** | The ID of reviewer identity. *me* indicates the current user. | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **phase**: *eq*  **completed**: *eq*  **campaignRef.campaignType**: *eq, in*  **campaignRef.id**: *eq, in*  **reviewProgress**: *eq, in*  **reviewerDeleted**: *eq*  **reviewerName**: *sw, co* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, dueDate, dateSigned** | 

### Return type

[**[]Certification**](../models/certification)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    reviewerIdentity := `me` // string | The ID of reviewer identity. *me* indicates the current user. (optional) # string | The ID of reviewer identity. *me* indicates the current user. (optional)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `name eq "Bob"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **phase**: *eq*  **completed**: *eq*  **campaignRef.campaignType**: *eq, in*  **campaignRef.id**: *eq, in*  **reviewProgress**: *eq, in*  **reviewerDeleted**: *eq*  **reviewerName**: *sw, co* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **phase**: *eq*  **completed**: *eq*  **campaignRef.campaignType**: *eq, in*  **campaignRef.id**: *eq, in*  **reviewProgress**: *eq, in*  **reviewerDeleted**: *eq*  **reviewerName**: *sw, co* (optional)
    sorters := `name` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, dueDate, dateSigned** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, dueDate, dateSigned** (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.ListCertificationsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.ListCertificationsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).ReviewerIdentity(reviewerIdentity).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.ListCertificationsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListCertificationsV1`: []Certification
    fmt.Fprintf(os.Stdout, "Response from `NextGenerationCertificationCampaignsAPI.ListCertificationsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-gov-certification-campaign-filters-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
List Campaign Filters
Lists all Campaign Filters. Scope can be reduced via standard V3 query params.
All Campaign Filters matching the query params. Required roles are ORG_ADMIN or CERT_ADMIN

[API Spec](https://developer.sailpoint.com/docs/api/list-gov-certification-campaign-filters-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListGovCertificationCampaignFiltersV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]CampaignFilterGet**](../models/campaign-filter-get)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.ListGovCertificationCampaignFiltersV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.ListGovCertificationCampaignFiltersV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Limit(limit).Offset(offset).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.ListGovCertificationCampaignFiltersV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListGovCertificationCampaignFiltersV1`: []CampaignFilterGet
    fmt.Fprintf(os.Stdout, "Response from `NextGenerationCertificationCampaignsAPI.ListGovCertificationCampaignFiltersV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-gov-certification-reviewers-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
List of Reviewers for certification
This API returns a list of reviewers for the certification. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/list-gov-certification-reviewers-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**certificationId** | **string** | The certification ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiListGovCertificationReviewersV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw, co*  **email**: *eq, sw, co* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, email** | 

### Return type

[**[]IdentityReference**](../models/identity-reference)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    certificationId := `ef38f943-47e9-4562-b5bb-8424a56397d8` // string | The certification ID # string | The certification ID
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `name eq "Bob"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw, co*  **email**: *eq, sw, co* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw, co*  **email**: *eq, sw, co* (optional)
    sorters := `name` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, email** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, email** (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.ListGovCertificationReviewersV1(context.Background(), certificationId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.ListGovCertificationReviewersV1(context.Background(), certificationId).XSailPointExperimental(xSailPointExperimental).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.ListGovCertificationReviewersV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListGovCertificationReviewersV1`: []IdentityReference
    fmt.Fprintf(os.Stdout, "Response from `NextGenerationCertificationCampaignsAPI.ListGovCertificationReviewersV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-reports-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
List reports for a campaign
Retrieves all reports for an existing campaign using the campaign's ID. Required roles are ORG_ADMIN or CERT_ADMIN or REPORT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/list-reports-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**campaignId** | **string** | The ID of the campaign to be retrieved | 

### Other Parameters

Other parameters are passed through a pointer to a apiListReportsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in*  **name**: *eq, sw, co*  **type**: *eq, in, ne*  Possible values are [STATUS, SIGN_OFF, COMPOSITION, REMEDIATION]  **format**: *eq, in, ne*  Possible values are [PDF, CSV]  **status**: *eq, in, ne*  Possible values are [IN_PROGRESS, FAILED, SUCCESS] | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, type, format, created, modified** | 

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    campaignId := `e1aeb0b6-0021-4f40-8bc7-5c56533214b3` // string | The ID of the campaign to be retrieved # string | The ID of the campaign to be retrieved
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `type eq "SIGN_OFF"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in*  **name**: *eq, sw, co*  **type**: *eq, in, ne*  Possible values are [STATUS, SIGN_OFF, COMPOSITION, REMEDIATION]  **format**: *eq, in, ne*  Possible values are [PDF, CSV]  **status**: *eq, in, ne*  Possible values are [IN_PROGRESS, FAILED, SUCCESS] (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in*  **name**: *eq, sw, co*  **type**: *eq, in, ne*  Possible values are [STATUS, SIGN_OFF, COMPOSITION, REMEDIATION]  **format**: *eq, in, ne*  Possible values are [PDF, CSV]  **status**: *eq, in, ne*  Possible values are [IN_PROGRESS, FAILED, SUCCESS] (optional)
    sorters := `name,-created` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, type, format, created, modified** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, type, format, created, modified** (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.ListReportsV1(context.Background(), campaignId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.ListReportsV1(context.Background(), campaignId).XSailPointExperimental(xSailPointExperimental).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.ListReportsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListReportsV1`: []CampaignReport
    fmt.Fprintf(os.Stdout, "Response from `NextGenerationCertificationCampaignsAPI.ListReportsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-review-items-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
List of Review Items
This API returns a list of review items for an identity campaign certification. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/list-review-items-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**certificationId** | **string** | The certification ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiListReviewItemsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in*  **completed**: *eq, ne*  **certificationSubjectSummary.id**: *eq, ne, in*  **certificationSubjectSummary.subjectName**: *eq, sw, co*  **certificationSubjectSummary.subjectManagerName**: *eq, sw, co*  **certificationSubjectSummary.subjectEmail**: *eq, sw, co*  **certificationSubjectSummary.identityState**: *eq, in, ne*  **reviewData.targetReference.id**: *eq, ne, in*  **reviewData.targetReference.name**: *eq, sw, co*  **reviewData.targetReference.type**: *eq*  **reviewData.entitlement.provisioningType**: *eq, ne, in*  **sourceName**: *eq, sw, co*  **accountName**: *eq, sw, co*  **reauthRequired**: *eq, ne* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **certificationSubjectSummary.subjectName, certificationSubjectSummary.subjectManagerName, reviewData.targetReference.id, reviewData.targetReference.name, sourceName, accountName** | 
 **activityData** | **bool** | If set to true, the response will include HTTP header \&quot;SLPT-Activity-Data-ID\&quot; which will allow the caller to query for certification items activity data in a separate call. | [default to false]

### Return type

[**[]ReviewItem**](../models/review-item)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    certificationId := `ef38f943-47e9-4562-b5bb-8424a56397d8` // string | The certification ID # string | The certification ID
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `id eq "ef38f943-47e9-4562-b5bb-8424a56397d8"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in*  **completed**: *eq, ne*  **certificationSubjectSummary.id**: *eq, ne, in*  **certificationSubjectSummary.subjectName**: *eq, sw, co*  **certificationSubjectSummary.subjectManagerName**: *eq, sw, co*  **certificationSubjectSummary.subjectEmail**: *eq, sw, co*  **certificationSubjectSummary.identityState**: *eq, in, ne*  **reviewData.targetReference.id**: *eq, ne, in*  **reviewData.targetReference.name**: *eq, sw, co*  **reviewData.targetReference.type**: *eq*  **reviewData.entitlement.provisioningType**: *eq, ne, in*  **sourceName**: *eq, sw, co*  **accountName**: *eq, sw, co*  **reauthRequired**: *eq, ne* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in*  **completed**: *eq, ne*  **certificationSubjectSummary.id**: *eq, ne, in*  **certificationSubjectSummary.subjectName**: *eq, sw, co*  **certificationSubjectSummary.subjectManagerName**: *eq, sw, co*  **certificationSubjectSummary.subjectEmail**: *eq, sw, co*  **certificationSubjectSummary.identityState**: *eq, in, ne*  **reviewData.targetReference.id**: *eq, ne, in*  **reviewData.targetReference.name**: *eq, sw, co*  **reviewData.targetReference.type**: *eq*  **reviewData.entitlement.provisioningType**: *eq, ne, in*  **sourceName**: *eq, sw, co*  **accountName**: *eq, sw, co*  **reauthRequired**: *eq, ne* (optional)
    sorters := `certificationSubjectSummary.subjectName` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **certificationSubjectSummary.subjectName, certificationSubjectSummary.subjectManagerName, reviewData.targetReference.id, reviewData.targetReference.name, sourceName, accountName** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **certificationSubjectSummary.subjectName, certificationSubjectSummary.subjectManagerName, reviewData.targetReference.id, reviewData.targetReference.name, sourceName, accountName** (optional)
    activityData := false // bool | If set to true, the response will include HTTP header \"SLPT-Activity-Data-ID\" which will allow the caller to query for certification items activity data in a separate call. (optional) (default to false) # bool | If set to true, the response will include HTTP header \"SLPT-Activity-Data-ID\" which will allow the caller to query for certification items activity data in a separate call. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.ListReviewItemsV1(context.Background(), certificationId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.ListReviewItemsV1(context.Background(), certificationId).XSailPointExperimental(xSailPointExperimental).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).ActivityData(activityData).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.ListReviewItemsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListReviewItemsV1`: []ReviewItem
    fmt.Fprintf(os.Stdout, "Response from `NextGenerationCertificationCampaignsAPI.ListReviewItemsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-subject-summaries-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Subject Summaries for a Certification
This API returns a list of the subject summaries for a specific certification. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/list-subject-summaries-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**certificationId** | **string** | The certification ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiListSubjectSummariesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **targetId**: *eq, ne, in*  **completed**: *eq, ne*  **subjectName**: *eq, sw, co* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **subjectName, targetDisplayName** | 

### Return type

[**[]CertificationSubjectSummary**](../models/certification-subject-summary)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    certificationId := `ef38f943-47e9-4562-b5bb-8424a56397d8` // string | The certification ID # string | The certification ID
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `completed eq false and subjectName sw 'Derek'` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **targetId**: *eq, ne, in*  **completed**: *eq, ne*  **subjectName**: *eq, sw, co* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **targetId**: *eq, ne, in*  **completed**: *eq, ne*  **subjectName**: *eq, sw, co* (optional)
    sorters := `subjectName` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **subjectName, targetDisplayName** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **subjectName, targetDisplayName** (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.ListSubjectSummariesV1(context.Background(), certificationId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.ListSubjectSummariesV1(context.Background(), certificationId).XSailPointExperimental(xSailPointExperimental).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.ListSubjectSummariesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListSubjectSummariesV1`: []CertificationSubjectSummary
    fmt.Fprintf(os.Stdout, "Response from `NextGenerationCertificationCampaignsAPI.ListSubjectSummariesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## move-certifications-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Reassign certifications to an identity
This API reassigns the specified certifications from one identity to another. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/move-certifications-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**campaignId** | **string** | The certification campaign ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiMoveCertificationsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

 **reassignCertifications** | [**ReassignCertifications**](../models/reassign-certifications) | A non-empty array of items and identities which reviewer is going to reassign. | 

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
    gov_certification "github.com/sailpoint-oss/golang-sdk/v3/gov_certification"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    campaignId := `ef38f943-47e9-4562-b5bb-8424a56397d8` // string | The certification campaign ID. # string | The certification campaign ID.
    reassigncertificationsJson := []byte(`{
          "certificationIds" : [ "af385946-4779-4712-91bb-8424a563abc1", "af385946-4779-4712-91bb-8424a563abc2", "af385946-4779-4712-91bb-8424a563abc3" ],
          "reason" : "Reassigning the certifications",
          "reassignTo" : {
            "id" : "0fbe863c-063c-4c88-a35f-d7f17e8a3df5",
            "type" : "IDENTITY"
          }
        }`) // ReassignCertifications | A non-empty array of items and identities which reviewer is going to reassign.

    var reassignCertifications gov_certification.ReassignCertifications
    if err := json.Unmarshal(reassigncertificationsJson, &reassignCertifications); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.MoveCertificationsV1(context.Background(), campaignId).XSailPointExperimental(xSailPointExperimental).ReassignCertifications(reassignCertifications).Execute()
	  //resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.MoveCertificationsV1(context.Background(), campaignId).XSailPointExperimental(xSailPointExperimental).ReassignCertifications(reassignCertifications).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.MoveCertificationsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `MoveCertificationsV1`: CertificationTask
    fmt.Fprintf(os.Stdout, "Response from `NextGenerationCertificationCampaignsAPI.MoveCertificationsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## move-subject-and-items-async-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Reassign certification items asynchronously
This API reassigns subjects or items in an identity campaign certification to another reviewer. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/move-subject-and-items-async-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**certificationId** | **string** | The ID of the certification which we are going to reassign. | 

### Other Parameters

Other parameters are passed through a pointer to a apiMoveSubjectAndItemsAsyncV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

 **reassignReference** | [**ReassignReference**](../models/reassign-reference) | A non-empty array of items and identities which reviewer is going to reassign. | 

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
    gov_certification "github.com/sailpoint-oss/golang-sdk/v3/gov_certification"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    certificationId := `ef38f943-47e9-4562-b5bb-8424a56397d8` // string | The ID of the certification which we are going to reassign. # string | The ID of the certification which we are going to reassign.
    reassignreferenceJson := []byte(`{
          "reason" : "Reassigning this item to the appropriate reviewer.",
          "reassignTo" : "ef38f943-47e9-4562-b5bb-8424a56397d8",
          "reassign" : [ {
            "id" : "ef38f943-47e9-4562-b5bb-8424a56397d8",
            "type" : "ITEM"
          } ]
        }`) // ReassignReference | A non-empty array of items and identities which reviewer is going to reassign.

    var reassignReference gov_certification.ReassignReference
    if err := json.Unmarshal(reassignreferenceJson, &reassignReference); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.MoveSubjectAndItemsAsyncV1(context.Background(), certificationId).XSailPointExperimental(xSailPointExperimental).ReassignReference(reassignReference).Execute()
	  //resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.MoveSubjectAndItemsAsyncV1(context.Background(), certificationId).XSailPointExperimental(xSailPointExperimental).ReassignReference(reassignReference).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.MoveSubjectAndItemsAsyncV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `MoveSubjectAndItemsAsyncV1`: CertificationTask
    fmt.Fprintf(os.Stdout, "Response from `NextGenerationCertificationCampaignsAPI.MoveSubjectAndItemsAsyncV1`: %v\n", resp)
}
```

[[Back to top]](#)

## move-subject-and-items-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Reassign certification subjects or items
This API reassigns subjects or items in an identity campaign certification to another reviewer. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/move-subject-and-items-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**certificationId** | **string** | The ID of the certification which we are going to reassign. | 

### Other Parameters

Other parameters are passed through a pointer to a apiMoveSubjectAndItemsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

 **reassignReference** | [**ReassignReference**](../models/reassign-reference) | A non-empty array of items and identities which reviewer is going to reassign. | 

### Return type

[**Certification**](../models/certification)

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
    gov_certification "github.com/sailpoint-oss/golang-sdk/v3/gov_certification"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    certificationId := `ef38f943-47e9-4562-b5bb-8424a56397d8` // string | The ID of the certification which we are going to reassign. # string | The ID of the certification which we are going to reassign.
    reassignreferenceJson := []byte(`{
          "reason" : "Reassigning this item to the appropriate reviewer.",
          "reassignTo" : "ef38f943-47e9-4562-b5bb-8424a56397d8",
          "reassign" : [ {
            "id" : "ef38f943-47e9-4562-b5bb-8424a56397d8",
            "type" : "ITEM"
          } ]
        }`) // ReassignReference | A non-empty array of items and identities which reviewer is going to reassign.

    var reassignReference gov_certification.ReassignReference
    if err := json.Unmarshal(reassignreferenceJson, &reassignReference); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.MoveSubjectAndItemsV1(context.Background(), certificationId).XSailPointExperimental(xSailPointExperimental).ReassignReference(reassignReference).Execute()
	  //resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.MoveSubjectAndItemsV1(context.Background(), certificationId).XSailPointExperimental(xSailPointExperimental).ReassignReference(reassignReference).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.MoveSubjectAndItemsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `MoveSubjectAndItemsV1`: Certification
    fmt.Fprintf(os.Stdout, "Response from `NextGenerationCertificationCampaignsAPI.MoveSubjectAndItemsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-campaign-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Update a campaign
Use this API to update individual fields on a certification campaign, using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/patch-campaign-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the campaign being modified. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchCampaignV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | A list of campaign update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The fields that can be patched differ based on the status of the campaign.  When the campaign is in the *STAGED* status, you can patch these fields: * name * description * recommendationsEnabled * deadline * emailNotificationEnabled * autoRevokeAllowed  When the campaign is in the *ACTIVE* status, you can patch these fields: * deadline  | 

### Return type

[**CampaignGet**](../models/campaign-get)

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
    gov_certification "github.com/sailpoint-oss/golang-sdk/v3/gov_certification"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    id := `ef38f943-47e9-4562-b5bb-8424a56397d8` // string | ID of the campaign being modified. # string | ID of the campaign being modified.
    jsonpatchoperationJson := []byte(`[{"op":"replace","path":"/name","value":"This field has been updated!"},{"op":"copy","from":"/name","path":"/description"}]`) // []JsonPatchOperation | A list of campaign update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The fields that can be patched differ based on the status of the campaign.  When the campaign is in the *STAGED* status, you can patch these fields: * name * description * recommendationsEnabled * deadline * emailNotificationEnabled * autoRevokeAllowed  When the campaign is in the *ACTIVE* status, you can patch these fields: * deadline 

    var jsonPatchOperation []gov_certification.JsonPatchOperation
    if err := json.Unmarshal(jsonpatchoperationJson, &jsonPatchOperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.PatchCampaignV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).JsonPatchOperation(jsonPatchOperation).Execute()
	  //resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.PatchCampaignV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.PatchCampaignV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchCampaignV1`: CampaignGet
    fmt.Fprintf(os.Stdout, "Response from `NextGenerationCertificationCampaignsAPI.PatchCampaignV1`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-gov-certification-campaign-template-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Update a Campaign Template
Allows updating individual fields on a campaign template using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/patch-gov-certification-campaign-template-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the campaign template being modified. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchGovCertificationCampaignTemplateV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | A list of campaign template update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: - name - description - campaignName - campaignDescription - remediatorRef - reviewer (id and type only; name is resolved server-side) - mandatoryCommentRequirement - emailNotificationEnabled - autoRevokeAllowed - recommendationsEnabled - sunsetCommentsRequired - deadlineDuration - filterRef - searchBasedParams - sourceIds  | 

### Return type

[**CampaignTemplateGet**](../models/campaign-template-get)

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
    gov_certification "github.com/sailpoint-oss/golang-sdk/v3/gov_certification"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    id := `2c918083-5d19-1a86-a15d-28455b4a2329` // string | The ID of the campaign template being modified. # string | The ID of the campaign template being modified.
    jsonpatchoperationJson := []byte(``) // []JsonPatchOperation | A list of campaign template update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: - name - description - campaignName - campaignDescription - remediatorRef - reviewer (id and type only; name is resolved server-side) - mandatoryCommentRequirement - emailNotificationEnabled - autoRevokeAllowed - recommendationsEnabled - sunsetCommentsRequired - deadlineDuration - filterRef - searchBasedParams - sourceIds 

    var jsonPatchOperation []gov_certification.JsonPatchOperation
    if err := json.Unmarshal(jsonpatchoperationJson, &jsonPatchOperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.PatchGovCertificationCampaignTemplateV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).JsonPatchOperation(jsonPatchOperation).Execute()
	  //resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.PatchGovCertificationCampaignTemplateV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.PatchGovCertificationCampaignTemplateV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchGovCertificationCampaignTemplateV1`: CampaignTemplateGet
    fmt.Fprintf(os.Stdout, "Response from `NextGenerationCertificationCampaignsAPI.PatchGovCertificationCampaignTemplateV1`: %v\n", resp)
}
```

[[Back to top]](#)

## process-sign-off-certification-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Finalize Certification Decisions
This API finalizes all decisions made on a certification and initiates any remediations required. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/process-sign-off-certification-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**certificationId** | **string** | The certification ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiProcessSignOffCertificationV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]


### Return type

[**Certification**](../models/certification)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    certificationId := `ef38f943-47e9-4562-b5bb-8424a56397d8` // string | The certification ID # string | The certification ID

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.ProcessSignOffCertificationV1(context.Background(), certificationId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.ProcessSignOffCertificationV1(context.Background(), certificationId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.ProcessSignOffCertificationV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ProcessSignOffCertificationV1`: Certification
    fmt.Fprintf(os.Stdout, "Response from `NextGenerationCertificationCampaignsAPI.ProcessSignOffCertificationV1`: %v\n", resp)
}
```

[[Back to top]](#)

## put-campaign-filter-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Updates a Campaign Filter
Updates an existing campaign filter using the filter's ID. Required roles are ORG_ADMIN or CERT_ADMIN. The request body must not exceed 1 MiB (1,048,576 bytes); larger requests are rejected with a 400 response.

[API Spec](https://developer.sailpoint.com/docs/api/put-campaign-filter-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the campaign filter being modified. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutCampaignFilterV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

 **campaignFilterUpdate** | [**CampaignFilterUpdate**](../models/campaign-filter-update) | A campaign filter details with updated field values. | 

### Return type

[**CampaignFilterGet**](../models/campaign-filter-get)

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
    gov_certification "github.com/sailpoint-oss/golang-sdk/v3/gov_certification"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    id := `e9f9a139-7b84-2fd5-a658-42087040d3ac` // string | The ID of the campaign filter being modified. # string | The ID of the campaign filter being modified.
    campaignfilterupdateJson := []byte(`{
          "mode" : "INCLUSION",
          "name" : "Identity Attribute Campaign Filter",
          "description" : "Campaign filter to certify data based on specified property of Identity Attribute.",
          "criteriaList" : [ {
            "criteriaType" : "IDENTITY",
            "criteriaProperty" : "DISPLAY_NAME",
            "criteriaValue" : "support",
            "operation" : "EQUALS"
          } ]
        }`) // CampaignFilterUpdate | A campaign filter details with updated field values.

    var campaignFilterUpdate gov_certification.CampaignFilterUpdate
    if err := json.Unmarshal(campaignfilterupdateJson, &campaignFilterUpdate); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.PutCampaignFilterV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).CampaignFilterUpdate(campaignFilterUpdate).Execute()
	  //resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.PutCampaignFilterV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).CampaignFilterUpdate(campaignFilterUpdate).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.PutCampaignFilterV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutCampaignFilterV1`: CampaignFilterGet
    fmt.Fprintf(os.Stdout, "Response from `NextGenerationCertificationCampaignsAPI.PutCampaignFilterV1`: %v\n", resp)
}
```

[[Back to top]](#)

## search-campaign-templates-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Search campaign templates
This executes a full-text search for campaign templates using the provided search string. It matches any campaign templates that match the search terms in the name or description field of the Campaign Template itself, or the name and description of the campaign defined by the template. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/search-campaign-templates-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSearchCampaignTemplatesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **searchRequest** | [**SearchRequest**](../models/search-request) |  | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in, gt, ge, lt, le, sw, co*  **name**: *eq, ne, in, gt, ge, lt, le, sw, co* | 

### Return type

[**[]CampaignTemplateGet**](../models/campaign-template-get)

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
    gov_certification "github.com/sailpoint-oss/golang-sdk/v3/gov_certification"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    searchrequestJson := []byte(`{
          "queryString" : "identity 2023"
        }`) // SearchRequest | 
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    sorters := `name` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional)
    filters := `name eq "Campaign Template"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in, gt, ge, lt, le, sw, co*  **name**: *eq, ne, in, gt, ge, lt, le, sw, co* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in, gt, ge, lt, le, sw, co*  **name**: *eq, ne, in, gt, ge, lt, le, sw, co* (optional)

    var searchRequest gov_certification.SearchRequest
    if err := json.Unmarshal(searchrequestJson, &searchRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.SearchCampaignTemplatesV1(context.Background()).XSailPointExperimental(xSailPointExperimental).SearchRequest(searchRequest).Execute()
	  //resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.SearchCampaignTemplatesV1(context.Background()).XSailPointExperimental(xSailPointExperimental).SearchRequest(searchRequest).Limit(limit).Offset(offset).Count(count).Sorters(sorters).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.SearchCampaignTemplatesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SearchCampaignTemplatesV1`: []CampaignTemplateGet
    fmt.Fprintf(os.Stdout, "Response from `NextGenerationCertificationCampaignsAPI.SearchCampaignTemplatesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## search-certifications-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Search Certifications
This API returns a list of certifications. It contains a request body with search parameters. Any authenticated token can call this API, but only certifications you are authorized to review will be returned. Non-admin users must include query parameter as `?reviewer-identity=me` in the API call.

[API Spec](https://developer.sailpoint.com/docs/api/search-certifications-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSearchCertificationsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **reviewerIdentity** | **string** | The ID of reviewer identity. *me* indicates the current user. | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **phase**: *eq*  **completed**: *eq*  **campaignRef.campaignType**: *eq, in*  **campaignRef.id**: *eq, in*  **reviewProgress**: *eq, in*  **reviewerDeleted**: *eq*  **reviewerName**: *sw, co* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, dueDate, dateSigned** | 
 **searchRequest** | [**SearchRequest**](../models/search-request) |  | 

### Return type

[**[]Certification**](../models/certification)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    reviewerIdentity := `me` // string | The ID of reviewer identity. *me* indicates the current user. (optional) # string | The ID of reviewer identity. *me* indicates the current user. (optional)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `reviewerName sw "Bob"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **phase**: *eq*  **completed**: *eq*  **campaignRef.campaignType**: *eq, in*  **campaignRef.id**: *eq, in*  **reviewProgress**: *eq, in*  **reviewerDeleted**: *eq*  **reviewerName**: *sw, co* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **phase**: *eq*  **completed**: *eq*  **campaignRef.campaignType**: *eq, in*  **campaignRef.id**: *eq, in*  **reviewProgress**: *eq, in*  **reviewerDeleted**: *eq*  **reviewerName**: *sw, co* (optional)
    sorters := `name` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, dueDate, dateSigned** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, dueDate, dateSigned** (optional)
    searchrequestJson := []byte(`{
          "queryString" : "identity 2023"
        }`) // SearchRequest |  (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.SearchCertificationsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.SearchCertificationsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).ReviewerIdentity(reviewerIdentity).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).SearchRequest(searchRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.SearchCertificationsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SearchCertificationsV1`: []Certification
    fmt.Fprintf(os.Stdout, "Response from `NextGenerationCertificationCampaignsAPI.SearchCertificationsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## search-insights-access-summary-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Get Insights Access Summary
Retrieves the scoped access based on the provided InsightDetails. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/search-insights-access-summary-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSearchInsightsAccessSummaryV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **insightDetails** | [**InsightDetails**](../models/insight-details) |  | 

### Return type

[**[]ScopedAccess**](../models/scoped-access)

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
    gov_certification "github.com/sailpoint-oss/golang-sdk/v3/gov_certification"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    insightdetailsJson := []byte(`{
          "campaignType" : "IDENTITY",
          "identityIdFilter" : [ "2c918085718230600171993742c63558" ],
          "query" : "admin",
          "type" : "ENTITLEMENT"
        }`) // InsightDetails | 

    var insightDetails gov_certification.InsightDetails
    if err := json.Unmarshal(insightdetailsJson, &insightDetails); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.SearchInsightsAccessSummaryV1(context.Background()).XSailPointExperimental(xSailPointExperimental).InsightDetails(insightDetails).Execute()
	  //resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.SearchInsightsAccessSummaryV1(context.Background()).XSailPointExperimental(xSailPointExperimental).InsightDetails(insightDetails).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.SearchInsightsAccessSummaryV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SearchInsightsAccessSummaryV1`: []ScopedAccess
    fmt.Fprintf(os.Stdout, "Response from `NextGenerationCertificationCampaignsAPI.SearchInsightsAccessSummaryV1`: %v\n", resp)
}
```

[[Back to top]](#)

## search-review-items-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Search certification review items
This API returns a list of review items for an identity campaign certification. It contains a request body with search parameters. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/search-review-items-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**certificationId** | **string** | The certification ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiSearchReviewItemsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in*  **completed**: *eq, ne*  **certificationSubjectSummary.id**: *eq, ne, in*  **certificationSubjectSummary.subjectName**: *eq, sw, co*  **certificationSubjectSummary.subjectManagerName**: *eq, sw, co*  **certificationSubjectSummary.subjectEmail**: *eq, sw, co*  **certificationSubjectSummary.identityState**: *eq, in, ne*  **reviewData.targetReference.id**: *eq, ne, in*  **reviewData.targetReference.name**: *eq, sw, co*  **reviewData.targetReference.type**: *eq*  **reviewData.entitlement.provisioningType**: *eq, ne, in*  **sourceName**: *eq, sw, co*  **accountName**: *eq, sw, co*  **reauthRequired**: *eq, ne* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **certificationSubjectSummary.subjectName, certificationSubjectSummary.subjectManagerName, reviewData.targetReference.id, reviewData.targetReference.name, sourceName, accountName** | 
 **activityData** | **bool** | If set to true, the response will include HTTP header \&quot;SLPT-Activity-Data-ID\&quot; which will allow the caller to query for certification items activity data in a separate call. | [default to false]
 **searchRequest** | [**SearchRequest**](../models/search-request) |  | 

### Return type

[**[]ReviewItem**](../models/review-item)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    certificationId := `ef38f943-47e9-4562-b5bb-8424a56397d8` // string | The certification ID # string | The certification ID
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `id eq "ef38f943-47e9-4562-b5bb-8424a56397d8"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in*  **completed**: *eq, ne*  **certificationSubjectSummary.id**: *eq, ne, in*  **certificationSubjectSummary.subjectName**: *eq, sw, co*  **certificationSubjectSummary.subjectManagerName**: *eq, sw, co*  **certificationSubjectSummary.subjectEmail**: *eq, sw, co*  **certificationSubjectSummary.identityState**: *eq, in, ne*  **reviewData.targetReference.id**: *eq, ne, in*  **reviewData.targetReference.name**: *eq, sw, co*  **reviewData.targetReference.type**: *eq*  **reviewData.entitlement.provisioningType**: *eq, ne, in*  **sourceName**: *eq, sw, co*  **accountName**: *eq, sw, co*  **reauthRequired**: *eq, ne* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in*  **completed**: *eq, ne*  **certificationSubjectSummary.id**: *eq, ne, in*  **certificationSubjectSummary.subjectName**: *eq, sw, co*  **certificationSubjectSummary.subjectManagerName**: *eq, sw, co*  **certificationSubjectSummary.subjectEmail**: *eq, sw, co*  **certificationSubjectSummary.identityState**: *eq, in, ne*  **reviewData.targetReference.id**: *eq, ne, in*  **reviewData.targetReference.name**: *eq, sw, co*  **reviewData.targetReference.type**: *eq*  **reviewData.entitlement.provisioningType**: *eq, ne, in*  **sourceName**: *eq, sw, co*  **accountName**: *eq, sw, co*  **reauthRequired**: *eq, ne* (optional)
    sorters := `certificationSubjectSummary.subjectName` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **certificationSubjectSummary.subjectName, certificationSubjectSummary.subjectManagerName, reviewData.targetReference.id, reviewData.targetReference.name, sourceName, accountName** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **certificationSubjectSummary.subjectName, certificationSubjectSummary.subjectManagerName, reviewData.targetReference.id, reviewData.targetReference.name, sourceName, accountName** (optional)
    activityData := false // bool | If set to true, the response will include HTTP header \"SLPT-Activity-Data-ID\" which will allow the caller to query for certification items activity data in a separate call. (optional) (default to false) # bool | If set to true, the response will include HTTP header \"SLPT-Activity-Data-ID\" which will allow the caller to query for certification items activity data in a separate call. (optional) (default to false)
    searchrequestJson := []byte(`{
          "queryString" : "identity 2023"
        }`) // SearchRequest |  (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.SearchReviewItemsV1(context.Background(), certificationId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.SearchReviewItemsV1(context.Background(), certificationId).XSailPointExperimental(xSailPointExperimental).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).ActivityData(activityData).SearchRequest(searchRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.SearchReviewItemsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SearchReviewItemsV1`: []ReviewItem
    fmt.Fprintf(os.Stdout, "Response from `NextGenerationCertificationCampaignsAPI.SearchReviewItemsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## search-subject-summaries-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Search certification subject summaries
This API returns a list of the subject summaries for a specific certification. It contains a request body with search parameters. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/search-subject-summaries-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**certificationId** | **string** | The certification ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiSearchSubjectSummariesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **targetId**: *eq, ne, in*  **completed**: *eq, ne*  **subjectName**: *eq, sw, co* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **subjectName, targetDisplayName** | 
 **searchRequest** | [**SearchRequest**](../models/search-request) |  | 

### Return type

[**[]CertificationSubjectSummary**](../models/certification-subject-summary)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    certificationId := `ef38f943-47e9-4562-b5bb-8424a56397d8` // string | The certification ID # string | The certification ID
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `completed eq false and subjectName sw 'Derek'` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **targetId**: *eq, ne, in*  **completed**: *eq, ne*  **subjectName**: *eq, sw, co* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **targetId**: *eq, ne, in*  **completed**: *eq, ne*  **subjectName**: *eq, sw, co* (optional)
    sorters := `subjectName` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **subjectName, targetDisplayName** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **subjectName, targetDisplayName** (optional)
    searchrequestJson := []byte(`{
          "queryString" : "identity 2023"
        }`) // SearchRequest |  (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.SearchSubjectSummariesV1(context.Background(), certificationId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.SearchSubjectSummariesV1(context.Background(), certificationId).XSailPointExperimental(xSailPointExperimental).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).SearchRequest(searchRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.SearchSubjectSummariesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SearchSubjectSummariesV1`: []CertificationSubjectSummary
    fmt.Fprintf(os.Stdout, "Response from `NextGenerationCertificationCampaignsAPI.SearchSubjectSummariesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## set-or-update-campaign-template-schedule-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Set a campaign template schedule
Creates or replaces the schedule for a campaign template. Send the full schedule in the request body. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/set-or-update-campaign-template-schedule-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the campaign template whose schedule is being modified or created. | 

### Other Parameters

Other parameters are passed through a pointer to a apiSetOrUpdateCampaignTemplateScheduleV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

 **schedule** | [**Schedule**](../models/schedule) | The data for the schedule for the given campaign template ID. | 

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
  "encoding/json"
    gov_certification "github.com/sailpoint-oss/golang-sdk/v3/gov_certification"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    id := `2c918083-5d19-1a86-a15d-28455b4a2329` // string | The ID of the campaign template whose schedule is being modified or created. # string | The ID of the campaign template whose schedule is being modified or created.
    scheduleJson := []byte(`{
          "hours" : {
            "values" : [ "1", "2", "3" ],
            "interval" : 2,
            "type" : "LIST"
          },
          "months" : {
            "values" : [ "1", "2", "3" ],
            "interval" : 2,
            "type" : "LIST"
          },
          "timeZoneId" : "America/Chicago",
          "days" : {
            "values" : [ "1", "2", "3" ],
            "interval" : 2,
            "type" : "LIST"
          },
          "expiration" : "2025-09-15T16:00:00Z",
          "type" : "DAILY"
        }`) // Schedule | The data for the schedule for the given campaign template ID.

    var schedule gov_certification.Schedule
    if err := json.Unmarshal(scheduleJson, &schedule); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.NextGenerationCertificationCampaignsAPI.SetOrUpdateCampaignTemplateScheduleV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Schedule(schedule).Execute()
	  //r, err := apiClient.NextGenerationCertificationCampaignsAPI.SetOrUpdateCampaignTemplateScheduleV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Schedule(schedule).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.SetOrUpdateCampaignTemplateScheduleV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## start-gov-certification-campaign-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Activate a Campaign
Submits a job to activate the campaign with the given ID. The campaign must be staged. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/start-gov-certification-campaign-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The campaign id | 

### Other Parameters

Other parameters are passed through a pointer to a apiStartGovCertificationCampaignV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

 **activateCampaignOptions** | [**ActivateCampaignOptions**](../models/activate-campaign-options) | Optional. If the timezone is not specified, we will continue using the campaign&#39;s timezone, which was set during campaign creation. The activation time calculated from the given timezone may cause the campaign deadline time to be modified, but it will remain within the original date. The timezone must be in a valid ISO 8601 format. | 

### Return type

**map[string]interface\{\}**

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    id := `ef38f943-47e9-4562-b5bb-8424a56397d8` // string | The campaign id # string | The campaign id
    activatecampaignoptionsJson := []byte(`{
          "timeZone" : "-05:00"
        }`) // ActivateCampaignOptions | Optional. If the timezone is not specified, we will continue using the campaign's timezone, which was set during campaign creation. The activation time calculated from the given timezone may cause the campaign deadline time to be modified, but it will remain within the original date. The timezone must be in a valid ISO 8601 format. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.StartGovCertificationCampaignV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.StartGovCertificationCampaignV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).ActivateCampaignOptions(activateCampaignOptions).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.StartGovCertificationCampaignV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartGovCertificationCampaignV1`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `NextGenerationCertificationCampaignsAPI.StartGovCertificationCampaignV1`: %v\n", resp)
}
```

[[Back to top]](#)

## submit-decisions-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Decide on a Certification Item
The API makes a decision to approve or revoke one or more certification items. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/submit-decisions-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**certificationId** | **string** | The ID of the certification on which to make decisions | 

### Other Parameters

Other parameters are passed through a pointer to a apiSubmitDecisionsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

 **reviewDecision** | [**[]ReviewDecision**](../models/review-decision) | A non-empty array of decisions to be made. | 

### Return type

[**Certification**](../models/certification)

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
    gov_certification "github.com/sailpoint-oss/golang-sdk/v3/gov_certification"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    certificationId := `ef38f943-47e9-4562-b5bb-8424a56397d8` // string | The ID of the certification on which to make decisions # string | The ID of the certification on which to make decisions
    reviewdecisionJson := []byte(`[{"id":"ef38f94347e94562b5bb8424a56396b5","decision":"APPROVED","comments":"This user still needs access to this source."},{"id":"ef38f94347e94562b5bb8424a56397d8","decision":"APPROVED","comments":"This user still needs access to this source too."}]`) // []ReviewDecision | A non-empty array of decisions to be made.

    var reviewDecision []gov_certification.ReviewDecision
    if err := json.Unmarshal(reviewdecisionJson, &reviewDecision); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.SubmitDecisionsV1(context.Background(), certificationId).XSailPointExperimental(xSailPointExperimental).ReviewDecision(reviewDecision).Execute()
	  //resp, r, err := apiClient.NextGenerationCertificationCampaignsAPI.SubmitDecisionsV1(context.Background(), certificationId).XSailPointExperimental(xSailPointExperimental).ReviewDecision(reviewDecision).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NextGenerationCertificationCampaignsAPI.SubmitDecisionsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SubmitDecisionsV1`: Certification
    fmt.Fprintf(os.Stdout, "Response from `NextGenerationCertificationCampaignsAPI.SubmitDecisionsV1`: %v\n", resp)
}
```

[[Back to top]](#)


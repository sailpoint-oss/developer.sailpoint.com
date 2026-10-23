# NextGenerationCertificationCampaigns

# NextGenerationCertificationCampaigns
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
[**Complete-GovCertificationCampaignV1**](#complete-gov-certification-campaign-v1) | **POST** `/certification-campaigns/v1/campaigns/{id}/complete` | Complete a Campaign
[**New-CampaignFromTemplateV1**](#create-campaign-from-template-v1) | **POST** `/certification-campaigns/v1/campaign-templates/{id}/generate` | Generate campaign from template
[**New-GovCertificationCampaignFilterV1**](#create-gov-certification-campaign-filter-v1) | **POST** `/certification-campaigns/v1/campaign-filters` | Create a Campaign Filter
[**New-GovCertificationCampaignTemplateV1**](#create-gov-certification-campaign-template-v1) | **POST** `/certification-campaigns/v1/campaign-templates` | Create a Campaign Template.
[**New-GovCertificationCampaignV1**](#create-gov-certification-campaign-v1) | **POST** `/certification-campaigns/v1/campaigns` | Create a campaign
[**New-ReportV1**](#create-report-v1) | **POST** `/certification-campaigns/v1/campaigns/{campaignId}/reports` | Create campaign report
[**Remove-GovCertificationCampaignFiltersV1**](#delete-gov-certification-campaign-filters-v1) | **POST** `/certification-campaigns/v1/campaign-filters/delete` | Deletes Campaign Filters
[**Remove-GovCertificationCampaignTemplateScheduleV1**](#delete-gov-certification-campaign-template-schedule-v1) | **DELETE** `/certification-campaigns/v1/campaign-templates/{id}/schedule` | Delete a Campaign Template Schedule
[**Remove-GovCertificationCampaignTemplateV1**](#delete-gov-certification-campaign-template-v1) | **DELETE** `/certification-campaigns/v1/campaign-templates/{id}` | Delete a Campaign Template
[**Remove-GovCertificationCampaignsV1**](#delete-gov-certification-campaigns-v1) | **POST** `/certification-campaigns/v1/campaigns/delete` | Delete Campaigns
[**Get-AccessSummariesV1**](#get-access-summaries-v1) | **GET** `/certification-campaigns/v1/certifications/{certificationId}/access-summaries/{type}` | Access Summaries
[**Get-CertificationEntitlementChildrenDetailsV1**](#get-certification-entitlement-children-details-v1) | **GET** `/certification-campaigns/v1/certifications/{certificationId}/review-items/{reviewItemId}/entitlements/{entitlementId}/children` | Entitlement Children in a Certification
[**Get-CertificationEntitlementDetailsV1**](#get-certification-entitlement-details-v1) | **GET** `/certification-campaigns/v1/certifications/{certificationId}/review-items/{reviewItemId}/entitlements/{entitlementId}` | Get Entitlement in a Certification
[**Get-CertificationEntitlementParentsDetailsV1**](#get-certification-entitlement-parents-details-v1) | **GET** `/certification-campaigns/v1/certifications/{certificationId}/review-items/{reviewItemId}/entitlements/{entitlementId}/parents` | Entitlement Parents in a Certification
[**Get-CertificationEntitlementPermissionsV1**](#get-certification-entitlement-permissions-v1) | **GET** `/certification-campaigns/v1/certifications/{certificationId}/review-items/{reviewItemId}/entitlements/{entitlementId}/permissions` | Permissions in a Certification
[**Get-CertificationItemAccountDetailsV1**](#get-certification-item-account-details-v1) | **GET** `/certification-campaigns/v1/certifications/{certificationId}/review-items/{reviewItemId}/item-id/{entitlementId}/cert-account-details` | Certification Item Account Details
[**Get-CertificationV1**](#get-certification-v1) | **GET** `/certification-campaigns/v1/certifications/{certificationId}` | Certification by ID
[**Get-DecisionSummaryV1**](#get-decision-summary-v1) | **GET** `/certification-campaigns/v1/certifications/{certificationId}/decision-summary` | Summary of Certification Decisions
[**Get-DownloadUrlV1**](#get-download-url-v1) | **GET** `/certification-campaigns/v1/campaigns/{campaignId}/reports/{reportId}/download-url` | Download URL for campaign report
[**Get-GovCertificationAccessProfileV1**](#get-gov-certification-access-profile-v1) | **GET** `/certification-campaigns/v1/certifications/{certificationId}/review-items/{reviewItemId}/access-profiles/{accessProfileId}` | Get an Access Profile
[**Get-GovCertificationCampaignFilterByIdV1**](#get-gov-certification-campaign-filter-by-id-v1) | **GET** `/certification-campaigns/v1/campaign-filters/{id}` | Get Campaign Filter by ID
[**Get-GovCertificationCampaignReportV1**](#get-gov-certification-campaign-report-v1) | **GET** `/certification-campaigns/v1/campaigns/{campaignId}/reports/{reportId}` | Get a campaign report
[**Get-GovCertificationCampaignTemplateScheduleV1**](#get-gov-certification-campaign-template-schedule-v1) | **GET** `/certification-campaigns/v1/campaign-templates/{id}/schedule` | Get a Campaign Template Schedule
[**Get-GovCertificationCampaignTemplateV1**](#get-gov-certification-campaign-template-v1) | **GET** `/certification-campaigns/v1/campaign-templates/{id}` | Get a Campaign Template
[**Get-GovCertificationCampaignV1**](#get-gov-certification-campaign-v1) | **GET** `/certification-campaigns/v1/campaigns/{id}` | Get a campaign
[**Get-GovCertificationTaskV1**](#get-gov-certification-task-v1) | **GET** `/certification-campaigns/v1/certification-tasks/{id}` | Task details by ID
[**Get-PendingTasksV1**](#get-pending-tasks-v1) | **GET** `/certification-campaigns/v1/certification-tasks` | List of Pending Tasks
[**Get-StatusSummaryV1**](#get-status-summary-v1) | **GET** `/certification-campaigns/v1/certifications/status-summary` | Status Summary For Certifications
[**Get-SubjectSummaryV1**](#get-subject-summary-v1) | **GET** `/certification-campaigns/v1/certifications/{certificationId}/subject-summary/{subjectId}` | Summary for a Certification Subject
[**Get-CampaignTemplatesV1**](#list-campaign-templates-v1) | **GET** `/certification-campaigns/v1/campaign-templates` | List Campaign Templates
[**Get-CampaignsV1**](#list-campaigns-v1) | **GET** `/certification-campaigns/v1/campaigns` | List the campaigns
[**Get-CertificationsV1**](#list-certifications-v1) | **GET** `/certification-campaigns/v1/certifications` | List Certifications
[**Get-GovCertificationCampaignFiltersV1**](#list-gov-certification-campaign-filters-v1) | **GET** `/certification-campaigns/v1/campaign-filters` | List Campaign Filters
[**Get-GovCertificationReviewersV1**](#list-gov-certification-reviewers-v1) | **GET** `/certification-campaigns/v1/certifications/{certificationId}/reviewers` | List of Reviewers for certification
[**Get-ReportsV1**](#list-reports-v1) | **GET** `/certification-campaigns/v1/campaigns/{campaignId}/reports` | List reports for a campaign
[**Get-ReviewItemsV1**](#list-review-items-v1) | **GET** `/certification-campaigns/v1/certifications/{certificationId}/review-items` | List of Review Items
[**Get-SubjectSummariesV1**](#list-subject-summaries-v1) | **GET** `/certification-campaigns/v1/certifications/{certificationId}/subject-summaries` | Subject Summaries for a Certification
[**Move-CertificationsV1**](#move-certifications-v1) | **POST** `/certification-campaigns/v1/campaigns/{campaignId}/reassign` | Reassign certifications to an identity
[**Move-SubjectAndItemsAsyncV1**](#move-subject-and-items-async-v1) | **POST** `/certification-campaigns/v1/certifications/{certificationId}/reassign-async` | Reassign certification items asynchronously
[**Move-SubjectAndItemsV1**](#move-subject-and-items-v1) | **POST** `/certification-campaigns/v1/certifications/{certificationId}/reassign` | Reassign certification subjects or items
[**Update-CampaignV1**](#patch-campaign-v1) | **PATCH** `/certification-campaigns/v1/campaigns/{id}` | Update a campaign
[**Update-GovCertificationCampaignTemplateV1**](#patch-gov-certification-campaign-template-v1) | **PATCH** `/certification-campaigns/v1/campaign-templates/{id}` | Update a Campaign Template
[**Invoke-ProcessSignOffCertificationV1**](#process-sign-off-certification-v1) | **POST** `/certification-campaigns/v1/certifications/{certificationId}/sign-off` | Finalize Certification Decisions
[**Send-CampaignFilterV1**](#put-campaign-filter-v1) | **PUT** `/certification-campaigns/v1/campaign-filters/{id}` | Updates a Campaign Filter
[**Search-CampaignTemplatesV1**](#search-campaign-templates-v1) | **POST** `/certification-campaigns/v1/campaign-templates/search` | Search campaign templates
[**Search-CertificationsV1**](#search-certifications-v1) | **POST** `/certification-campaigns/v1/certifications/search` | Search Certifications
[**Search-InsightsAccessSummaryV1**](#search-insights-access-summary-v1) | **POST** `/certification-campaigns/v1/insights/access-summary` | Get Insights Access Summary
[**Search-ReviewItemsV1**](#search-review-items-v1) | **POST** `/certification-campaigns/v1/certifications/{certificationId}/review-items/search` | Search certification review items
[**Search-SubjectSummariesV1**](#search-subject-summaries-v1) | **POST** `/certification-campaigns/v1/certifications/{certificationId}/subject-summaries/search` | Search certification subject summaries
[**Set-OrUpdateCampaignTemplateScheduleV1**](#set-or-update-campaign-template-schedule-v1) | **PUT** `/certification-campaigns/v1/campaign-templates/{id}/schedule` | Set a campaign template schedule
[**Start-GovCertificationCampaignV1**](#start-gov-certification-campaign-v1) | **POST** `/certification-campaigns/v1/campaigns/{id}/activate` | Activate a Campaign
[**Submit-DecisionsV1**](#submit-decisions-v1) | **POST** `/certification-campaigns/v1/certifications/{certificationId}/decide` | Decide on a Certification Item


## complete-gov-certification-campaign-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::caution
This endpoint will run successfully for any campaigns that are **past due**.
This endpoint will return a bad request error if the campaign is **not past due**.
:::
Completes a certification campaign. This is provided to admins so that they can complete a certification even if all items have not been completed. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/complete-gov-certification-campaign-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | Id | **String** | True  | The campaign id
 Body  | CompleteCampaignOptions | [**CompleteCampaignOptions**](../models/complete-campaign-options) |   (optional) | Optional. Default behavior is for the campaign to auto-approve upon completion, unless we specify explicitly REVOKE in autoCompleteAction

### Return type
[**SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted - Returned if the request was successfully accepted into the system. | SystemCollectionsHashtable
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Id = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The campaign id
$CompleteCampaignOptions = @"{
  "autoCompleteAction" : "REVOKE"
}"@

# Complete a Campaign

try {
    Complete-GovCertificationCampaignV1 -XSailPointExperimental $XSailPointExperimental -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Complete-GovCertificationCampaignV1 -XSailPointExperimental $XSailPointExperimental -Id $Id -CompleteCampaignOptions $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Complete-GovCertificationCampaignV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-campaign-from-template-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Generates a new campaign from a campaign template.
The campaign object contained in the template has special formatting applied to its name and description fields in order to determine the generated campaign's name/description. Placeholders in those fields are formatted with the current date and time upon generation.
Placeholders consist of a percent sign followed by a letter indicating what should be inserted; for example, "%Y" will insert the current year; a campaign template named "Campaign for %y" would generate a campaign called "Campaign for 2020" (assuming the year at generation time is 2020).
Valid placeholders are the date/time conversion suffix characters supported by [java.util.Formatter](https://docs.oracle.com/javase/8/docs/api/java/util/Formatter.html).
Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/create-campaign-from-template-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | Id | **String** | True  | The desired campaign template's ID.

### Return type
[**CampaignGet**](../models/campaign-get)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Indicates a campaign was successfully generated from this template, and returns a reference to the new campaign. | CampaignGet
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Id = "2c918083-5d19-1a86-a15d-28455b4a2329" # String | The desired campaign template's ID.

# Generate campaign from template

try {
    New-CampaignFromTemplateV1 -XSailPointExperimental $XSailPointExperimental -Id $Id 
    
    # Below is a request that includes all optional parameters
    # New-CampaignFromTemplateV1 -XSailPointExperimental $XSailPointExperimental -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-CampaignFromTemplateV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-gov-certification-campaign-filter-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create a campaign filter based on filter details and criteria. Required roles are ORG_ADMIN or CERT_ADMIN. The request body must not exceed 1 MiB (1,048,576 bytes); larger requests are rejected with a 400 response.

[API Spec](https://developer.sailpoint.com/docs/api/create-gov-certification-campaign-filter-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | CampaignFilterCreate | [**CampaignFilterCreate**](../models/campaign-filter-create) | True  | 

### Return type
[**CampaignFilterGet**](../models/campaign-filter-get)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Created successfully. | CampaignFilterGet
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$CampaignFilterCreate = @"{
  "mode" : "INCLUSION",
  "name" : "Identity Attribute Campaign Filter",
  "description" : "Campaign filter to certify data based on specified property of Identity Attribute.",
  "criteriaList" : [ {
    "criteriaType" : "IDENTITY",
    "criteriaProperty" : "DISPLAY_NAME",
    "criteriaValue" : "support",
    "operation" : "EQUALS"
  } ]
}"@

# Create a Campaign Filter

try {
    $Result = ConvertFrom-JsonToCampaignFilterCreate -Json $CampaignFilterCreate
    New-GovCertificationCampaignFilterV1 -XSailPointExperimental $XSailPointExperimental -CampaignFilterCreate $Result 
    
    # Below is a request that includes all optional parameters
    # New-GovCertificationCampaignFilterV1 -XSailPointExperimental $XSailPointExperimental -CampaignFilterCreate $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-GovCertificationCampaignFilterV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-gov-certification-campaign-template-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Creates campaign template based on campaign. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/create-gov-certification-campaign-template-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | CampaignTemplateCreate | [**CampaignTemplateCreate**](../models/campaign-template-create) | True  | 

### Return type
[**CampaignTemplateGet**](../models/campaign-template-get)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Created successfully. | CampaignTemplateGet
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$CampaignTemplateCreate = @"{
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
}"@

# Create a Campaign Template.

try {
    $Result = ConvertFrom-JsonToCampaignTemplateCreate -Json $CampaignTemplateCreate
    New-GovCertificationCampaignTemplateV1 -XSailPointExperimental $XSailPointExperimental -CampaignTemplateCreate $Result 
    
    # Below is a request that includes all optional parameters
    # New-GovCertificationCampaignTemplateV1 -XSailPointExperimental $XSailPointExperimental -CampaignTemplateCreate $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-GovCertificationCampaignTemplateV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-gov-certification-campaign-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Creates a new Certification Campaign with the information provided in the request body. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/create-gov-certification-campaign-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | CampaignCreate | [**CampaignCreate**](../models/campaign-create) | True  | 

### Return type
[**CampaignGet**](../models/campaign-get)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Indicates that the campaign requested was successfully created and returns its representation. | CampaignGet
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$CampaignCreate = @"{
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
}"@

# Create a campaign

try {
    $Result = ConvertFrom-JsonToCampaignCreate -Json $CampaignCreate
    New-GovCertificationCampaignV1 -XSailPointExperimental $XSailPointExperimental -CampaignCreate $Result 
    
    # Below is a request that includes all optional parameters
    # New-GovCertificationCampaignV1 -XSailPointExperimental $XSailPointExperimental -CampaignCreate $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-GovCertificationCampaignV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-report-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Creates a new campaign report asynchronously for the provided campaignId. Required roles are ORG_ADMIN or CERT_ADMIN or REPORT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/create-report-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | CampaignId | **String** | True  | The ID of the campaign to generate a report for
 Body  | TriggerCampaignReportRequest | [**TriggerCampaignReportRequest**](../models/trigger-campaign-report-request) | True  | 

### Return type
[**CampaignReport**](../models/campaign-report)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Indicates that the generation of the campaign report was started successfully. | CampaignReport
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$CampaignId = "e1aeb0b6-0021-4f40-8bc7-5c56533214b3" # String | The ID of the campaign to generate a report for
$TriggerCampaignReportRequest = @"{
  "format" : "PDF",
  "name" : "My Campaign Report",
  "type" : "REMEDIATION"
}"@

# Create campaign report

try {
    $Result = ConvertFrom-JsonToTriggerCampaignReportRequest -Json $TriggerCampaignReportRequest
    New-ReportV1 -XSailPointExperimental $XSailPointExperimental -CampaignId $CampaignId -TriggerCampaignReportRequest $Result 
    
    # Below is a request that includes all optional parameters
    # New-ReportV1 -XSailPointExperimental $XSailPointExperimental -CampaignId $CampaignId -TriggerCampaignReportRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-ReportV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-gov-certification-campaign-filters-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Deletes campaign filters whose IDs are specified in the provided list of campaign filter IDs. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/delete-gov-certification-campaign-filters-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | RequestBody | **[]String** | True  | A JSON list of IDs of campaign filters to delete.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$RequestBody = "MyRequestBody" # String[] | A JSON list of IDs of campaign filters to delete.
 $RequestBody = @""@ # String[] | A JSON list of IDs of campaign filters to delete.
 

# Deletes Campaign Filters

try {
    $Result = ConvertFrom-JsonToRequestBody -Json $RequestBody
    Remove-GovCertificationCampaignFiltersV1 -XSailPointExperimental $XSailPointExperimental -RequestBody $Result 
    
    # Below is a request that includes all optional parameters
    # Remove-GovCertificationCampaignFiltersV1 -XSailPointExperimental $XSailPointExperimental -RequestBody $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-GovCertificationCampaignFiltersV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-gov-certification-campaign-template-schedule-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Deletes a schedule by campaign template ID. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/delete-gov-certification-campaign-template-schedule-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | Id | **String** | True  | The ID of the campaign template whose schedule is being deleted.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Id = "2c918083-5d19-1a86-a15d-28455b4a2329" # String | The ID of the campaign template whose schedule is being deleted.

# Delete a Campaign Template Schedule

try {
    Remove-GovCertificationCampaignTemplateScheduleV1 -XSailPointExperimental $XSailPointExperimental -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-GovCertificationCampaignTemplateScheduleV1 -XSailPointExperimental $XSailPointExperimental -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-GovCertificationCampaignTemplateScheduleV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-gov-certification-campaign-template-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Deletes a campaign template by ID. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/delete-gov-certification-campaign-template-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | Id | **String** | True  | The ID of the campaign template being deleted.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Id = "2c918083-5d19-1a86-a15d-28455b4a2329" # String | The ID of the campaign template being deleted.

# Delete a Campaign Template

try {
    Remove-GovCertificationCampaignTemplateV1 -XSailPointExperimental $XSailPointExperimental -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-GovCertificationCampaignTemplateV1 -XSailPointExperimental $XSailPointExperimental -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-GovCertificationCampaignTemplateV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-gov-certification-campaigns-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Use this API to delete certification campaigns whose IDs are specified in the provided list of campaign IDs. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/delete-gov-certification-campaigns-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | CampaignsDeleteRequest | [**CampaignsDeleteRequest**](../models/campaigns-delete-request) | True  | IDs of the campaigns to delete.

### Return type
[**SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted - Returned if the request was successfully accepted into the system. | SystemCollectionsHashtable
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$CampaignsDeleteRequest = @"{
  "ids" : [ "ef38f943-47e9-4562-b5bb-8424a56397d8", "ef38f943-47e9-4562-b5bb-8424a56397d9" ]
}"@

# Delete Campaigns

try {
    $Result = ConvertFrom-JsonToCampaignsDeleteRequest -Json $CampaignsDeleteRequest
    Remove-GovCertificationCampaignsV1 -XSailPointExperimental $XSailPointExperimental -CampaignsDeleteRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Remove-GovCertificationCampaignsV1 -XSailPointExperimental $XSailPointExperimental -CampaignsDeleteRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-GovCertificationCampaignsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-access-summaries-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns a list of access summaries for the specified certification and type. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-access-summaries-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | CertificationId | **String** | True  | The certification ID
Path   | Type | [**CertificationItemType**](../models/certification-item-type) | True  | The type of review item to retrieve summaries for
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **completed**: *eq, ne*  **targetReference.id**: *eq, ne, in*  **targetReference.name**: *eq, sw, co*  **sourceName**: *eq, sw, co*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **targetReference.name**

### Return type
[**ReviewData[]**](../models/review-data)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of access summaries | ReviewData[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$CertificationId = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The certification ID
$Type = "ENTITLEMENT" # CertificationItemType | The type of review item to retrieve summaries for
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'completed eq false and sourceName sw 'AD'' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **completed**: *eq, ne*  **targetReference.id**: *eq, ne, in*  **targetReference.name**: *eq, sw, co*  **sourceName**: *eq, sw, co* (optional)
$Sorters = "targetReference.name" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **targetReference.name** (optional)

# Access Summaries

try {
    Get-AccessSummariesV1 -XSailPointExperimental $XSailPointExperimental -CertificationId $CertificationId -Type $Type 
    
    # Below is a request that includes all optional parameters
    # Get-AccessSummariesV1 -XSailPointExperimental $XSailPointExperimental -CertificationId $CertificationId -Type $Type -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-AccessSummariesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-certification-entitlement-children-details-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Returns a list of child entitlements for the provided entitlement, as long as the logged-in user is a reviewer of the specified certification, and the certification contains either the specified entitlement, or an access profile that contains the specified entitlement. ORG_ADMIN or CERT_ADMIN can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-certification-entitlement-children-details-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | CertificationId | **String** | True  | The certification ID
Path   | ReviewItemId | **String** | True  | The certification item ID
Path   | EntitlementId | **String** | True  | The entitlement ID
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id**

### Return type
[**PassThroughEntitlement[]**](../models/pass-through-entitlement)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | An entitlement children details corresponding to the given entitlement ID | PassThroughEntitlement[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$CertificationId = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The certification ID
$ReviewItemId = "2478b87b-f0d2-4585-b42d-45e4d580c5cf" # String | The certification item ID
$EntitlementId = "ef38f94347e94562b5bb8424a56397d8" # String | The entitlement ID
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'name eq 'Read Only'' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le* (optional)
$Sorters = "name" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id** (optional)

# Entitlement Children in a Certification

try {
    Get-CertificationEntitlementChildrenDetailsV1 -XSailPointExperimental $XSailPointExperimental -CertificationId $CertificationId -ReviewItemId $ReviewItemId -EntitlementId $EntitlementId 
    
    # Below is a request that includes all optional parameters
    # Get-CertificationEntitlementChildrenDetailsV1 -XSailPointExperimental $XSailPointExperimental -CertificationId $CertificationId -ReviewItemId $ReviewItemId -EntitlementId $EntitlementId -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-CertificationEntitlementChildrenDetailsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-certification-entitlement-details-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API get the details for the entitlement, as long as the logged-in user is a reviewer of the specified certification, and the certification contains either the specified entitlement, or an access profile that contains the specified entitlement. ORG_ADMIN or CERT_ADMIN can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-certification-entitlement-details-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | CertificationId | **String** | True  | The certification ID
Path   | ReviewItemId | **String** | True  | The certification item ID
Path   | EntitlementId | **String** | True  | The entitlement ID

### Return type
[**PassThroughEntitlement**](../models/pass-through-entitlement)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | An entitlement detail corresponding to the given entitlement ID | PassThroughEntitlement
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$CertificationId = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The certification ID
$ReviewItemId = "2478b87b-f0d2-4585-b42d-45e4d580c5cf" # String | The certification item ID
$EntitlementId = "ef38f94347e94562b5bb8424a56397d8" # String | The entitlement ID

# Get Entitlement in a Certification

try {
    Get-CertificationEntitlementDetailsV1 -XSailPointExperimental $XSailPointExperimental -CertificationId $CertificationId -ReviewItemId $ReviewItemId -EntitlementId $EntitlementId 
    
    # Below is a request that includes all optional parameters
    # Get-CertificationEntitlementDetailsV1 -XSailPointExperimental $XSailPointExperimental -CertificationId $CertificationId -ReviewItemId $ReviewItemId -EntitlementId $EntitlementId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-CertificationEntitlementDetailsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-certification-entitlement-parents-details-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Returns a list of parent entitlements for the provided entitlement, as long as the logged-in user is a reviewer of the specified certification, and the certification contains either the specified entitlement, or an access profile that contains the specified entitlement. ORG_ADMIN or CERT_ADMIN can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-certification-entitlement-parents-details-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | CertificationId | **String** | True  | The certification ID
Path   | ReviewItemId | **String** | True  | The certification item ID
Path   | EntitlementId | **String** | True  | The entitlement ID
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id**

### Return type
[**PassThroughEntitlement[]**](../models/pass-through-entitlement)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Entitlement parents detail corresponding to the given entitlement ID | PassThroughEntitlement[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$CertificationId = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The certification ID
$ReviewItemId = "2478b87b-f0d2-4585-b42d-45e4d580c5cf" # String | The certification item ID
$EntitlementId = "ef38f94347e94562b5bb8424a56397d8" # String | The entitlement ID
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'attribute eq 'role'' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le* (optional)
$Sorters = "name" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id** (optional)

# Entitlement Parents in a Certification

try {
    Get-CertificationEntitlementParentsDetailsV1 -XSailPointExperimental $XSailPointExperimental -CertificationId $CertificationId -ReviewItemId $ReviewItemId -EntitlementId $EntitlementId 
    
    # Below is a request that includes all optional parameters
    # Get-CertificationEntitlementParentsDetailsV1 -XSailPointExperimental $XSailPointExperimental -CertificationId $CertificationId -ReviewItemId $ReviewItemId -EntitlementId $EntitlementId -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-CertificationEntitlementParentsDetailsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-certification-entitlement-permissions-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Retrieves a list of permissions associated with the given certification itemId value, as long as the logged-in user is a reviewer of the specified certification, and the certification contains either the specified entitlement, or an access profile or the role that contains the specified entitlement. ORG_ADMIN or CERT_ADMIN can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-certification-entitlement-permissions-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | CertificationId | **String** | True  | The certification ID
Path   | ReviewItemId | **String** | True  | The certification item ID
Path   | EntitlementId | **String** | True  | The entitlement ID
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**PermissionDTO[]**](../models/permission-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Entitlement permissions corresponding to the given entitlement ID | PermissionDTO[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$CertificationId = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The certification ID
$ReviewItemId = "2478b87b-f0d2-4585-b42d-45e4d580c5cf" # String | The certification item ID
$EntitlementId = "ef38f94347e94562b5bb8424a56397d8" # String | The entitlement ID
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

# Permissions in a Certification

try {
    Get-CertificationEntitlementPermissionsV1 -XSailPointExperimental $XSailPointExperimental -CertificationId $CertificationId -ReviewItemId $ReviewItemId -EntitlementId $EntitlementId 
    
    # Below is a request that includes all optional parameters
    # Get-CertificationEntitlementPermissionsV1 -XSailPointExperimental $XSailPointExperimental -CertificationId $CertificationId -ReviewItemId $ReviewItemId -EntitlementId $EntitlementId -Limit $Limit -Offset $Offset  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-CertificationEntitlementPermissionsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-certification-item-account-details-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Returns account details for a certification review item. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API. It uses the Shelby Account API to fetch details.

[API Spec](https://developer.sailpoint.com/docs/api/get-certification-item-account-details-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | CertificationId | **String** | True  | The certification ID
Path   | ReviewItemId | **String** | True  | The certification item ID
Path   | EntitlementId | **String** | True  | The entitlement ID

### Return type
[**AccountDetailsDto**](../models/account-details-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Account details of particular certification review item | AccountDetailsDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$CertificationId = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The certification ID
$ReviewItemId = "2478b87b-f0d2-4585-b42d-45e4d580c5cf" # String | The certification item ID
$EntitlementId = "ef38f94347e94562b5bb8424a56397d8" # String | The entitlement ID

# Certification Item Account Details

try {
    Get-CertificationItemAccountDetailsV1 -XSailPointExperimental $XSailPointExperimental -CertificationId $CertificationId -ReviewItemId $ReviewItemId -EntitlementId $EntitlementId 
    
    # Below is a request that includes all optional parameters
    # Get-CertificationItemAccountDetailsV1 -XSailPointExperimental $XSailPointExperimental -CertificationId $CertificationId -ReviewItemId $ReviewItemId -EntitlementId $EntitlementId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-CertificationItemAccountDetailsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-certification-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns a single certification by its ID. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-certification-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | CertificationId | **String** | True  | The certification ID

### Return type
[**Certification**](../models/certification)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A certification object | Certification
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$CertificationId = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The certification ID

# Certification by ID

try {
    Get-CertificationV1 -XSailPointExperimental $XSailPointExperimental -CertificationId $CertificationId 
    
    # Below is a request that includes all optional parameters
    # Get-CertificationV1 -XSailPointExperimental $XSailPointExperimental -CertificationId $CertificationId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-CertificationV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-decision-summary-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns a summary of the decisions made on a certification. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-decision-summary-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | CertificationId | **String** | True  | The certification ID
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **certificationSubjectSummary.id**: *eq, in*

### Return type
[**DetailedDecisionSummary**](../models/detailed-decision-summary)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Summary of the decisions made | DetailedDecisionSummary
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$CertificationId = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The certification ID
$Filters = 'certificationSubjectSummary.id in ('2c918085-71bc-fcf8-0171-c23e4b4221fc','2c918085-71bc-fcf8-0171-c23e4b4221fd')' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **certificationSubjectSummary.id**: *eq, in* (optional)

# Summary of Certification Decisions

try {
    Get-DecisionSummaryV1 -XSailPointExperimental $XSailPointExperimental -CertificationId $CertificationId 
    
    # Below is a request that includes all optional parameters
    # Get-DecisionSummaryV1 -XSailPointExperimental $XSailPointExperimental -CertificationId $CertificationId -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-DecisionSummaryV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-download-url-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Retrieves a presigned URL to use for downloading the campaign report. Required roles are ORG_ADMIN or CERT_ADMIN or REPORT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/get-download-url-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | CampaignId | **String** | True  | The ID of the campaign to be retrieved
Path   | ReportId | **String** | True  | The ID of the report to be retrieved

### Return type
[**CampaignReportDownloadResponse**](../models/campaign-report-download-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The information to download the campaign report | CampaignReportDownloadResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$CampaignId = "e1aeb0b6-0021-4f40-8bc7-5c56533214b3" # String | The ID of the campaign to be retrieved
$ReportId = "e1aeb0b6-0021-4f40-8bc7-5c56533214b3" # String | The ID of the report to be retrieved

# Download URL for campaign report

try {
    Get-DownloadUrlV1 -XSailPointExperimental $XSailPointExperimental -CampaignId $CampaignId -ReportId $ReportId 
    
    # Below is a request that includes all optional parameters
    # Get-DownloadUrlV1 -XSailPointExperimental $XSailPointExperimental -CampaignId $CampaignId -ReportId $ReportId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-DownloadUrlV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-gov-certification-access-profile-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns an access profile details based on access profile id provided, as long as the logged-in user is a reviewer of the specified certification, and the certification contains either the specified access profile, or a role that contains the specified access profile. ORG_ADMIN or CERT_ADMIN can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-gov-certification-access-profile-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | CertificationId | **String** | True  | The certification ID
Path   | ReviewItemId | **String** | True  | The certification item ID. This must of review item type either ROLE or ACCESS_PROFILE.
Path   | AccessProfileId | **String** | True  | The Access Profile ID

### Return type
[**AccessProfile2**](../models/access-profile2)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | An AccessProfile | AccessProfile2
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$CertificationId = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The certification ID
$ReviewItemId = "2478b87b-f0d2-4585-b42d-45e4d580c5cf" # String | The certification item ID. This must of review item type either ROLE or ACCESS_PROFILE.
$AccessProfileId = "2c9180837ca6693d017ca8d097500149" # String | The Access Profile ID

# Get an Access Profile

try {
    Get-GovCertificationAccessProfileV1 -XSailPointExperimental $XSailPointExperimental -CertificationId $CertificationId -ReviewItemId $ReviewItemId -AccessProfileId $AccessProfileId 
    
    # Below is a request that includes all optional parameters
    # Get-GovCertificationAccessProfileV1 -XSailPointExperimental $XSailPointExperimental -CertificationId $CertificationId -ReviewItemId $ReviewItemId -AccessProfileId $AccessProfileId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-GovCertificationAccessProfileV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-gov-certification-campaign-filter-by-id-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Retrieves information for an existing campaign filter using the filter's ID. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/get-gov-certification-campaign-filter-by-id-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | Id | **String** | True  | The ID of the campaign filter to be retrieved.

### Return type
[**CampaignFilterGet**](../models/campaign-filter-get)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The data for the campaign filter matching the given ID. | CampaignFilterGet
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Id = "e9f9a139-7b84-2fd5-a658-42087040d3ac" # String | The ID of the campaign filter to be retrieved.

# Get Campaign Filter by ID

try {
    Get-GovCertificationCampaignFilterByIdV1 -XSailPointExperimental $XSailPointExperimental -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-GovCertificationCampaignFilterByIdV1 -XSailPointExperimental $XSailPointExperimental -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-GovCertificationCampaignFilterByIdV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-gov-certification-campaign-report-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Retrieves the reports for an existing campaign using the campaign's ID and report ID. Required roles are ORG_ADMIN or CERT_ADMIN or REPORT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/get-gov-certification-campaign-report-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | CampaignId | **String** | True  | The ID of the campaign to be retrieved
Path   | ReportId | **String** | True  | The ID of the report to be retrieved

### Return type
[**CampaignReport**](../models/campaign-report)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The report regardless of its status | CampaignReport
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$CampaignId = "e1aeb0b6-0021-4f40-8bc7-5c56533214b3" # String | The ID of the campaign to be retrieved
$ReportId = "e1aeb0b6-0021-4f40-8bc7-5c56533214b3" # String | The ID of the report to be retrieved

# Get a campaign report

try {
    Get-GovCertificationCampaignReportV1 -XSailPointExperimental $XSailPointExperimental -CampaignId $CampaignId -ReportId $ReportId 
    
    # Below is a request that includes all optional parameters
    # Get-GovCertificationCampaignReportV1 -XSailPointExperimental $XSailPointExperimental -CampaignId $CampaignId -ReportId $ReportId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-GovCertificationCampaignReportV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-gov-certification-campaign-template-schedule-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Fetches a schedule by a campaign template ID. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/get-gov-certification-campaign-template-schedule-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | Id | **String** | True  | The campaign template's ID for the desired campaign template schedule.

### Return type
[**Schedule**](../models/schedule)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The data for the schedule matching the given campaign template ID. | Schedule
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Id = "2c918083-5d19-1a86-a15d-28455b4a2329" # String | The campaign template's ID for the desired campaign template schedule.

# Get a Campaign Template Schedule

try {
    Get-GovCertificationCampaignTemplateScheduleV1 -XSailPointExperimental $XSailPointExperimental -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-GovCertificationCampaignTemplateScheduleV1 -XSailPointExperimental $XSailPointExperimental -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-GovCertificationCampaignTemplateScheduleV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-gov-certification-campaign-template-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Fetches a campaign template by ID. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/get-gov-certification-campaign-template-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | Id | **String** | True  | The desired campaign template's ID.

### Return type
[**CampaignTemplateGet**](../models/campaign-template-get)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The data for the campaign matching the given ID. | CampaignTemplateGet
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Id = "2c918083-5d19-1a86-a15d-28455b4a2329" # String | The desired campaign template's ID.

# Get a Campaign Template

try {
    Get-GovCertificationCampaignTemplateV1 -XSailPointExperimental $XSailPointExperimental -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-GovCertificationCampaignTemplateV1 -XSailPointExperimental $XSailPointExperimental -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-GovCertificationCampaignTemplateV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-gov-certification-campaign-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Retrieves information for an existing campaign using the campaign's ID. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for the certifications under this campaign can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-gov-certification-campaign-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | Id | **String** | True  | The ID of the campaign to be retrieved

### Return type
[**CampaignGet**](../models/campaign-get)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A campaign object | CampaignGet
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Id = "2c918085-71bc-4cf8-a171-c23e4b4221fc" # String | The ID of the campaign to be retrieved

# Get a campaign

try {
    Get-GovCertificationCampaignV1 -XSailPointExperimental $XSailPointExperimental -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-GovCertificationCampaignV1 -XSailPointExperimental $XSailPointExperimental -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-GovCertificationCampaignV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-gov-certification-task-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns the task for the specified ID. Required roles are ORG_ADMIN or CERT_ADMIN. If the targetType is `CERTIFICATION`, then the reviewers for the specified certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-gov-certification-task-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | Id | **String** | True  | The task ID

### Return type
[**CertificationTask**](../models/certification-task)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Gives task details | CertificationTask
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Id = "63b32151-26c0-42f4-9299-8898dc1c9daa" # String | The task ID

# Task details by ID

try {
    Get-GovCertificationTaskV1 -XSailPointExperimental $XSailPointExperimental -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-GovCertificationTaskV1 -XSailPointExperimental $XSailPointExperimental -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-GovCertificationTaskV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-pending-tasks-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns a list of pending (`QUEUED` or `IN_PROGRESS`) certification related tasks. Any authenticated token can call this API, but only tasks you are authorized to review will be returned. Non-admin users must include query parameter as `reviewer-identity=me` in the API call.

[API Spec](https://developer.sailpoint.com/docs/api/get-pending-tasks-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | ReviewerIdentity | **String** |   (optional) | The ID of reviewer identity. *me* indicates the current user.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **targetId**: *eq, in*  **type**: *eq, in*

### Return type
[**CertificationTask[]**](../models/certification-task)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A list of pending tasks | CertificationTask[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$ReviewerIdentity = "Ada.1de82e55078344" # String | The ID of reviewer identity. *me* indicates the current user. (optional)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'type eq "REASSIGN_SUBJECTS_AND_ITEMS"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **targetId**: *eq, in*  **type**: *eq, in* (optional)

# List of Pending Tasks

try {
    Get-PendingTasksV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-PendingTasksV1 -XSailPointExperimental $XSailPointExperimental -ReviewerIdentity $ReviewerIdentity -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-PendingTasksV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-status-summary-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Return the status summary for certifications owned by the logged in user. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-status-summary-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**CertificationStatusSummary**](../models/certification-status-summary)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Status Summary of the active certifications owned by the logged in user | CertificationStatusSummary
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Status Summary For Certifications

try {
    Get-StatusSummaryV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-StatusSummaryV1 -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-StatusSummaryV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-subject-summary-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns the summary for a subject on a specified certification. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-subject-summary-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | CertificationId | **String** | True  | The certification ID
Path   | SubjectId | **String** | True  | The subject summary ID

### Return type
[**CertificationSubjectSummary**](../models/certification-subject-summary)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The certification subject summary | CertificationSubjectSummary
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$CertificationId = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The certification ID
$SubjectId = "2c918087-72a5-44f5-a172-a9540e501ba8" # String | The subject summary ID

# Summary for a Certification Subject

try {
    Get-SubjectSummaryV1 -XSailPointExperimental $XSailPointExperimental -CertificationId $CertificationId -SubjectId $SubjectId 
    
    # Below is a request that includes all optional parameters
    # Get-SubjectSummaryV1 -XSailPointExperimental $XSailPointExperimental -CertificationId $CertificationId -SubjectId $SubjectId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-SubjectSummaryV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-campaign-templates-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Lists all campaign templates matching the supplied standard V3 query parameters. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/list-campaign-templates-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified**
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in, gt, ge, lt, le, sw, co*  **name**: *eq, ne, in, gt, ge, lt, le, sw, co*

### Return type
[**CampaignTemplateGet[]**](../models/campaign-template-get)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of campaign template objects | CampaignTemplateGet[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Sorters = "name" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional)
$Filters = 'name eq "Campaign Template"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in, gt, ge, lt, le, sw, co*  **name**: *eq, ne, in, gt, ge, lt, le, sw, co* (optional)

# List Campaign Templates

try {
    Get-CampaignTemplatesV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-CampaignTemplatesV1 -XSailPointExperimental $XSailPointExperimental -Limit $Limit -Offset $Offset -Count $Count -Sorters $Sorters -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-CampaignTemplatesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-campaigns-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List all the campaign details. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/list-campaigns-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw, co*  **status**: *eq, in, ne*  Possible values are [PENDING, STAGED, CANCELING, ACTIVATING, ACTIVE, COMPLETING, COMPLETED, ERROR]
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified, deadline, status, totalCertifications, completedCertifications**

### Return type
[**CampaignSummary[]**](../models/campaign-summary)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The list of all the campaign details. | CampaignSummary[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'name eq "Manager Campaign"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw, co*  **status**: *eq, in, ne*  Possible values are [PENDING, STAGED, CANCELING, ACTIVATING, ACTIVE, COMPLETING, COMPLETED, ERROR] (optional)
$Sorters = "name,-created" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified, deadline, status, totalCertifications, completedCertifications** (optional)

# List the campaigns

try {
    Get-CampaignsV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-CampaignsV1 -XSailPointExperimental $XSailPointExperimental -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-CampaignsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-certifications-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns a list of certifications that satisfy the given query parameters. Any authenticated token can call this API, but only certifications you are authorized to review will be returned. Non-admin users must include query parameter as `?reviewer-identity=me` in the API call.

[API Spec](https://developer.sailpoint.com/docs/api/list-certifications-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | ReviewerIdentity | **String** |   (optional) | The ID of reviewer identity. *me* indicates the current user.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **phase**: *eq*  **completed**: *eq*  **campaignRef.campaignType**: *eq, in*  **campaignRef.id**: *eq, in*  **reviewProgress**: *eq, in*  **reviewerDeleted**: *eq*  **reviewerName**: *sw, co*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, dueDate, dateSigned**

### Return type
[**Certification[]**](../models/certification)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of certifications | Certification[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$ReviewerIdentity = "me" # String | The ID of reviewer identity. *me* indicates the current user. (optional)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'name eq "Bob"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **phase**: *eq*  **completed**: *eq*  **campaignRef.campaignType**: *eq, in*  **campaignRef.id**: *eq, in*  **reviewProgress**: *eq, in*  **reviewerDeleted**: *eq*  **reviewerName**: *sw, co* (optional)
$Sorters = "name" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, dueDate, dateSigned** (optional)

# List Certifications

try {
    Get-CertificationsV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-CertificationsV1 -XSailPointExperimental $XSailPointExperimental -ReviewerIdentity $ReviewerIdentity -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-CertificationsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-gov-certification-campaign-filters-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Lists all Campaign Filters. Scope can be reduced via standard V3 query params.
All Campaign Filters matching the query params. Required roles are ORG_ADMIN or CERT_ADMIN

[API Spec](https://developer.sailpoint.com/docs/api/list-gov-certification-campaign-filters-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**CampaignFilterGet[]**](../models/campaign-filter-get)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of campaign filter objects | CampaignFilterGet[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)

# List Campaign Filters

try {
    Get-GovCertificationCampaignFiltersV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-GovCertificationCampaignFiltersV1 -XSailPointExperimental $XSailPointExperimental -Limit $Limit -Offset $Offset -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-GovCertificationCampaignFiltersV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-gov-certification-reviewers-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns a list of reviewers for the certification. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/list-gov-certification-reviewers-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | CertificationId | **String** | True  | The certification ID
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw, co*  **email**: *eq, sw, co*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, email**

### Return type
[**IdentityReference[]**](../models/identity-reference)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A list of reviewers | IdentityReference[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$CertificationId = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The certification ID
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'name eq "Bob"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw, co*  **email**: *eq, sw, co* (optional)
$Sorters = "name" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, email** (optional)

# List of Reviewers for certification

try {
    Get-GovCertificationReviewersV1 -XSailPointExperimental $XSailPointExperimental -CertificationId $CertificationId 
    
    # Below is a request that includes all optional parameters
    # Get-GovCertificationReviewersV1 -XSailPointExperimental $XSailPointExperimental -CertificationId $CertificationId -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-GovCertificationReviewersV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-reports-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Retrieves all reports for an existing campaign using the campaign's ID. Required roles are ORG_ADMIN or CERT_ADMIN or REPORT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/list-reports-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | CampaignId | **String** | True  | The ID of the campaign to be retrieved
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in*  **name**: *eq, sw, co*  **type**: *eq, in, ne*  Possible values are [STATUS, SIGN_OFF, COMPOSITION, REMEDIATION]  **format**: *eq, in, ne*  Possible values are [PDF, CSV]  **status**: *eq, in, ne*  Possible values are [IN_PROGRESS, FAILED, SUCCESS]
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, type, format, created, modified**

### Return type
[**CampaignReport[]**](../models/campaign-report)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A list of all reports, regardless of status, for the given campaign | CampaignReport[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$CampaignId = "e1aeb0b6-0021-4f40-8bc7-5c56533214b3" # String | The ID of the campaign to be retrieved
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'type eq "SIGN_OFF"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in*  **name**: *eq, sw, co*  **type**: *eq, in, ne*  Possible values are [STATUS, SIGN_OFF, COMPOSITION, REMEDIATION]  **format**: *eq, in, ne*  Possible values are [PDF, CSV]  **status**: *eq, in, ne*  Possible values are [IN_PROGRESS, FAILED, SUCCESS] (optional)
$Sorters = "name,-created" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, type, format, created, modified** (optional)

# List reports for a campaign

try {
    Get-ReportsV1 -XSailPointExperimental $XSailPointExperimental -CampaignId $CampaignId 
    
    # Below is a request that includes all optional parameters
    # Get-ReportsV1 -XSailPointExperimental $XSailPointExperimental -CampaignId $CampaignId -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ReportsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-review-items-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns a list of review items for an identity campaign certification. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/list-review-items-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | CertificationId | **String** | True  | The certification ID
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in*  **completed**: *eq, ne*  **certificationSubjectSummary.id**: *eq, ne, in*  **certificationSubjectSummary.subjectName**: *eq, sw, co*  **certificationSubjectSummary.subjectManagerName**: *eq, sw, co*  **certificationSubjectSummary.subjectEmail**: *eq, sw, co*  **certificationSubjectSummary.identityState**: *eq, in, ne*  **reviewData.targetReference.id**: *eq, ne, in*  **reviewData.targetReference.name**: *eq, sw, co*  **reviewData.targetReference.type**: *eq*  **reviewData.entitlement.provisioningType**: *eq, ne, in*  **sourceName**: *eq, sw, co*  **accountName**: *eq, sw, co*  **reauthRequired**: *eq, ne*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **certificationSubjectSummary.subjectName, certificationSubjectSummary.subjectManagerName, reviewData.targetReference.id, reviewData.targetReference.name, sourceName, accountName**
  Query | ActivityData | **Boolean** |   (optional) (default to $false) | If set to true, the response will include HTTP header ""SLPT-Activity-Data-ID"" which will allow the caller to query for certification items activity data in a separate call.

### Return type
[**ReviewItem[]**](../models/review-item)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A list of review items | ReviewItem[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$CertificationId = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The certification ID
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'id eq "ef38f943-47e9-4562-b5bb-8424a56397d8"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in*  **completed**: *eq, ne*  **certificationSubjectSummary.id**: *eq, ne, in*  **certificationSubjectSummary.subjectName**: *eq, sw, co*  **certificationSubjectSummary.subjectManagerName**: *eq, sw, co*  **certificationSubjectSummary.subjectEmail**: *eq, sw, co*  **certificationSubjectSummary.identityState**: *eq, in, ne*  **reviewData.targetReference.id**: *eq, ne, in*  **reviewData.targetReference.name**: *eq, sw, co*  **reviewData.targetReference.type**: *eq*  **reviewData.entitlement.provisioningType**: *eq, ne, in*  **sourceName**: *eq, sw, co*  **accountName**: *eq, sw, co*  **reauthRequired**: *eq, ne* (optional)
$Sorters = "certificationSubjectSummary.subjectName" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **certificationSubjectSummary.subjectName, certificationSubjectSummary.subjectManagerName, reviewData.targetReference.id, reviewData.targetReference.name, sourceName, accountName** (optional)
$ActivityData = $false # Boolean | If set to true, the response will include HTTP header ""SLPT-Activity-Data-ID"" which will allow the caller to query for certification items activity data in a separate call. (optional) (default to $false)

# List of Review Items

try {
    Get-ReviewItemsV1 -XSailPointExperimental $XSailPointExperimental -CertificationId $CertificationId 
    
    # Below is a request that includes all optional parameters
    # Get-ReviewItemsV1 -XSailPointExperimental $XSailPointExperimental -CertificationId $CertificationId -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters -ActivityData $ActivityData  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ReviewItemsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-subject-summaries-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns a list of the subject summaries for a specific certification. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/list-subject-summaries-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | CertificationId | **String** | True  | The certification ID
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **targetId**: *eq, ne, in*  **completed**: *eq, ne*  **subjectName**: *eq, sw, co*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **subjectName, targetDisplayName**

### Return type
[**CertificationSubjectSummary[]**](../models/certification-subject-summary)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of certification subject summaries | CertificationSubjectSummary[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$CertificationId = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The certification ID
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'completed eq false and subjectName sw 'Derek'' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **targetId**: *eq, ne, in*  **completed**: *eq, ne*  **subjectName**: *eq, sw, co* (optional)
$Sorters = "subjectName" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **subjectName, targetDisplayName** (optional)

# Subject Summaries for a Certification

try {
    Get-SubjectSummariesV1 -XSailPointExperimental $XSailPointExperimental -CertificationId $CertificationId 
    
    # Below is a request that includes all optional parameters
    # Get-SubjectSummariesV1 -XSailPointExperimental $XSailPointExperimental -CertificationId $CertificationId -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-SubjectSummariesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## move-certifications-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API reassigns the specified certifications from one identity to another. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/move-certifications-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | CampaignId | **String** | True  | The certification campaign ID.
 Body  | ReassignCertifications | [**ReassignCertifications**](../models/reassign-certifications) | True  | A non-empty array of items and identities which reviewer is going to reassign.

### Return type
[**CertificationTask**](../models/certification-task)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | A task tracking the asynchronous certification reassignment. | CertificationTask
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$CampaignId = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The certification campaign ID.
$ReassignCertifications = @"{
  "certificationIds" : [ "af385946-4779-4712-91bb-8424a563abc1", "af385946-4779-4712-91bb-8424a563abc2", "af385946-4779-4712-91bb-8424a563abc3" ],
  "reason" : "Reassigning the certifications",
  "reassignTo" : {
    "id" : "0fbe863c-063c-4c88-a35f-d7f17e8a3df5",
    "type" : "IDENTITY"
  }
}"@

# Reassign certifications to an identity

try {
    $Result = ConvertFrom-JsonToReassignCertifications -Json $ReassignCertifications
    Move-CertificationsV1 -XSailPointExperimental $XSailPointExperimental -CampaignId $CampaignId -ReassignCertifications $Result 
    
    # Below is a request that includes all optional parameters
    # Move-CertificationsV1 -XSailPointExperimental $XSailPointExperimental -CampaignId $CampaignId -ReassignCertifications $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Move-CertificationsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## move-subject-and-items-async-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API reassigns subjects or items in an identity campaign certification to another reviewer. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/move-subject-and-items-async-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | CertificationId | **String** | True  | The ID of the certification which we are going to reassign.
 Body  | ReassignReference | [**ReassignReference**](../models/reassign-reference) | True  | A non-empty array of items and identities which reviewer is going to reassign.

### Return type
[**CertificationTask**](../models/certification-task)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A task tracking the asynchronous certification reassignment. | CertificationTask
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$CertificationId = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The ID of the certification which we are going to reassign.
$ReassignReference = @"{
  "reason" : "Reassigning this item to the appropriate reviewer.",
  "reassignTo" : "ef38f943-47e9-4562-b5bb-8424a56397d8",
  "reassign" : [ {
    "id" : "ef38f943-47e9-4562-b5bb-8424a56397d8",
    "type" : "ITEM"
  } ]
}"@

# Reassign certification items asynchronously

try {
    $Result = ConvertFrom-JsonToReassignReference -Json $ReassignReference
    Move-SubjectAndItemsAsyncV1 -XSailPointExperimental $XSailPointExperimental -CertificationId $CertificationId -ReassignReference $Result 
    
    # Below is a request that includes all optional parameters
    # Move-SubjectAndItemsAsyncV1 -XSailPointExperimental $XSailPointExperimental -CertificationId $CertificationId -ReassignReference $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Move-SubjectAndItemsAsyncV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## move-subject-and-items-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API reassigns subjects or items in an identity campaign certification to another reviewer. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/move-subject-and-items-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | CertificationId | **String** | True  | The ID of the certification which we are going to reassign.
 Body  | ReassignReference | [**ReassignReference**](../models/reassign-reference) | True  | A non-empty array of items and identities which reviewer is going to reassign.

### Return type
[**Certification**](../models/certification)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | An identity campaign certification object | Certification
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$CertificationId = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The ID of the certification which we are going to reassign.
$ReassignReference = @"{
  "reason" : "Reassigning this item to the appropriate reviewer.",
  "reassignTo" : "ef38f943-47e9-4562-b5bb-8424a56397d8",
  "reassign" : [ {
    "id" : "ef38f943-47e9-4562-b5bb-8424a56397d8",
    "type" : "ITEM"
  } ]
}"@

# Reassign certification subjects or items

try {
    $Result = ConvertFrom-JsonToReassignReference -Json $ReassignReference
    Move-SubjectAndItemsV1 -XSailPointExperimental $XSailPointExperimental -CertificationId $CertificationId -ReassignReference $Result 
    
    # Below is a request that includes all optional parameters
    # Move-SubjectAndItemsV1 -XSailPointExperimental $XSailPointExperimental -CertificationId $CertificationId -ReassignReference $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Move-SubjectAndItemsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-campaign-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Use this API to update individual fields on a certification campaign, using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/patch-campaign-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | Id | **String** | True  | ID of the campaign being modified.
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of campaign update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The fields that can be patched differ based on the status of the campaign.  When the campaign is in the *STAGED* status, you can patch these fields: * name * description * recommendationsEnabled * deadline * emailNotificationEnabled * autoRevokeAllowed  When the campaign is in the *ACTIVE* status, you can patch these fields: * deadline 

### Return type
[**CampaignGet**](../models/campaign-get)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | This response indicates that the PATCH operation succeeded, and the API returns the campaign&#39;s new representation. | CampaignGet
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Id = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | ID of the campaign being modified.
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ # JsonPatchOperation[] | A list of campaign update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The fields that can be patched differ based on the status of the campaign.  When the campaign is in the *STAGED* status, you can patch these fields: * name * description * recommendationsEnabled * deadline * emailNotificationEnabled * autoRevokeAllowed  When the campaign is in the *ACTIVE* status, you can patch these fields: * deadline 
 

# Update a campaign

try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-CampaignV1 -XSailPointExperimental $XSailPointExperimental -Id $Id -JsonPatchOperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-CampaignV1 -XSailPointExperimental $XSailPointExperimental -Id $Id -JsonPatchOperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-CampaignV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-gov-certification-campaign-template-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Allows updating individual fields on a campaign template using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/patch-gov-certification-campaign-template-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | Id | **String** | True  | The ID of the campaign template being modified.
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of campaign template update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: - name - description - campaignName - campaignDescription - remediatorRef - reviewer (id and type only; name is resolved server-side) - mandatoryCommentRequirement - emailNotificationEnabled - autoRevokeAllowed - recommendationsEnabled - sunsetCommentsRequired - deadlineDuration - filterRef - searchBasedParams - sourceIds 

### Return type
[**CampaignTemplateGet**](../models/campaign-template-get)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Indicates the PATCH operation succeeded, and returns the template&#39;s new representation. | CampaignTemplateGet
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Id = "2c918083-5d19-1a86-a15d-28455b4a2329" # String | The ID of the campaign template being modified.
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ # JsonPatchOperation[] | A list of campaign template update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: - name - description - campaignName - campaignDescription - remediatorRef - reviewer (id and type only; name is resolved server-side) - mandatoryCommentRequirement - emailNotificationEnabled - autoRevokeAllowed - recommendationsEnabled - sunsetCommentsRequired - deadlineDuration - filterRef - searchBasedParams - sourceIds 
 

# Update a Campaign Template

try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-GovCertificationCampaignTemplateV1 -XSailPointExperimental $XSailPointExperimental -Id $Id -JsonPatchOperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-GovCertificationCampaignTemplateV1 -XSailPointExperimental $XSailPointExperimental -Id $Id -JsonPatchOperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-GovCertificationCampaignTemplateV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## process-sign-off-certification-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API finalizes all decisions made on a certification and initiates any remediations required. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/process-sign-off-certification-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | CertificationId | **String** | True  | The certification ID

### Return type
[**Certification**](../models/certification)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A Certification object | Certification
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$CertificationId = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The certification ID

# Finalize Certification Decisions

try {
    Invoke-ProcessSignOffCertificationV1 -XSailPointExperimental $XSailPointExperimental -CertificationId $CertificationId 
    
    # Below is a request that includes all optional parameters
    # Invoke-ProcessSignOffCertificationV1 -XSailPointExperimental $XSailPointExperimental -CertificationId $CertificationId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Invoke-ProcessSignOffCertificationV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-campaign-filter-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Updates an existing campaign filter using the filter's ID. Required roles are ORG_ADMIN or CERT_ADMIN. The request body must not exceed 1 MiB (1,048,576 bytes); larger requests are rejected with a 400 response.

[API Spec](https://developer.sailpoint.com/docs/api/put-campaign-filter-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | Id | **String** | True  | The ID of the campaign filter being modified.
 Body  | CampaignFilterUpdate | [**CampaignFilterUpdate**](../models/campaign-filter-update) | True  | A campaign filter details with updated field values.

### Return type
[**CampaignFilterGet**](../models/campaign-filter-get)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Resource updated successfully. | CampaignFilterGet
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Id = "e9f9a139-7b84-2fd5-a658-42087040d3ac" # String | The ID of the campaign filter being modified.
$CampaignFilterUpdate = @"{
  "mode" : "INCLUSION",
  "name" : "Identity Attribute Campaign Filter",
  "description" : "Campaign filter to certify data based on specified property of Identity Attribute.",
  "criteriaList" : [ {
    "criteriaType" : "IDENTITY",
    "criteriaProperty" : "DISPLAY_NAME",
    "criteriaValue" : "support",
    "operation" : "EQUALS"
  } ]
}"@

# Updates a Campaign Filter

try {
    $Result = ConvertFrom-JsonToCampaignFilterUpdate -Json $CampaignFilterUpdate
    Send-CampaignFilterV1 -XSailPointExperimental $XSailPointExperimental -Id $Id -CampaignFilterUpdate $Result 
    
    # Below is a request that includes all optional parameters
    # Send-CampaignFilterV1 -XSailPointExperimental $XSailPointExperimental -Id $Id -CampaignFilterUpdate $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-CampaignFilterV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## search-campaign-templates-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This executes a full-text search for campaign templates using the provided search string. It matches any campaign templates that match the search terms in the name or description field of the Campaign Template itself, or the name and description of the campaign defined by the template. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/search-campaign-templates-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | SearchRequest | [**SearchRequest**](../models/search-request) | True  | 
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified**
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in, gt, ge, lt, le, sw, co*  **name**: *eq, ne, in, gt, ge, lt, le, sw, co*

### Return type
[**CampaignTemplateGet[]**](../models/campaign-template-get)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Search was executed with the returned matching results | CampaignTemplateGet[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$SearchRequest = @"{
  "queryString" : "identity 2023"
}"@
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Sorters = "name" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional)
$Filters = 'name eq "Campaign Template"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in, gt, ge, lt, le, sw, co*  **name**: *eq, ne, in, gt, ge, lt, le, sw, co* (optional)

# Search campaign templates

try {
    $Result = ConvertFrom-JsonToSearchRequest -Json $SearchRequest
    Search-CampaignTemplatesV1 -XSailPointExperimental $XSailPointExperimental -SearchRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Search-CampaignTemplatesV1 -XSailPointExperimental $XSailPointExperimental -SearchRequest $Result -Limit $Limit -Offset $Offset -Count $Count -Sorters $Sorters -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Search-CampaignTemplatesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## search-certifications-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns a list of certifications. It contains a request body with search parameters. Any authenticated token can call this API, but only certifications you are authorized to review will be returned. Non-admin users must include query parameter as `?reviewer-identity=me` in the API call.

[API Spec](https://developer.sailpoint.com/docs/api/search-certifications-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | ReviewerIdentity | **String** |   (optional) | The ID of reviewer identity. *me* indicates the current user.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **phase**: *eq*  **completed**: *eq*  **campaignRef.campaignType**: *eq, in*  **campaignRef.id**: *eq, in*  **reviewProgress**: *eq, in*  **reviewerDeleted**: *eq*  **reviewerName**: *sw, co*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, dueDate, dateSigned**
 Body  | SearchRequest | [**SearchRequest**](../models/search-request) |   (optional) | 

### Return type
[**Certification[]**](../models/certification)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A List of certifications | Certification[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$ReviewerIdentity = "me" # String | The ID of reviewer identity. *me* indicates the current user. (optional)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'reviewerName sw "Bob"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **phase**: *eq*  **completed**: *eq*  **campaignRef.campaignType**: *eq, in*  **campaignRef.id**: *eq, in*  **reviewProgress**: *eq, in*  **reviewerDeleted**: *eq*  **reviewerName**: *sw, co* (optional)
$Sorters = "name" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, dueDate, dateSigned** (optional)
$SearchRequest = @"{
  "queryString" : "identity 2023"
}"@

# Search Certifications

try {
    Search-CertificationsV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Search-CertificationsV1 -XSailPointExperimental $XSailPointExperimental -ReviewerIdentity $ReviewerIdentity -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters -SearchRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Search-CertificationsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## search-insights-access-summary-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Retrieves the scoped access based on the provided InsightDetails. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/search-insights-access-summary-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | InsightDetails | [**InsightDetails**](../models/insight-details) | True  | 

### Return type
[**ScopedAccess[]**](../models/scoped-access)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Scoped access based on the provided InsightDetails. | ScopedAccess[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$InsightDetails = @"{
  "campaignType" : "IDENTITY",
  "identityIdFilter" : [ "2c918085718230600171993742c63558" ],
  "query" : "admin",
  "type" : "ENTITLEMENT"
}"@

# Get Insights Access Summary

try {
    $Result = ConvertFrom-JsonToInsightDetails -Json $InsightDetails
    Search-InsightsAccessSummaryV1 -XSailPointExperimental $XSailPointExperimental -InsightDetails $Result 
    
    # Below is a request that includes all optional parameters
    # Search-InsightsAccessSummaryV1 -XSailPointExperimental $XSailPointExperimental -InsightDetails $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Search-InsightsAccessSummaryV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## search-review-items-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns a list of review items for an identity campaign certification. It contains a request body with search parameters. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/search-review-items-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | CertificationId | **String** | True  | The certification ID
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in*  **completed**: *eq, ne*  **certificationSubjectSummary.id**: *eq, ne, in*  **certificationSubjectSummary.subjectName**: *eq, sw, co*  **certificationSubjectSummary.subjectManagerName**: *eq, sw, co*  **certificationSubjectSummary.subjectEmail**: *eq, sw, co*  **certificationSubjectSummary.identityState**: *eq, in, ne*  **reviewData.targetReference.id**: *eq, ne, in*  **reviewData.targetReference.name**: *eq, sw, co*  **reviewData.targetReference.type**: *eq*  **reviewData.entitlement.provisioningType**: *eq, ne, in*  **sourceName**: *eq, sw, co*  **accountName**: *eq, sw, co*  **reauthRequired**: *eq, ne*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **certificationSubjectSummary.subjectName, certificationSubjectSummary.subjectManagerName, reviewData.targetReference.id, reviewData.targetReference.name, sourceName, accountName**
  Query | ActivityData | **Boolean** |   (optional) (default to $false) | If set to true, the response will include HTTP header ""SLPT-Activity-Data-ID"" which will allow the caller to query for certification items activity data in a separate call.
 Body  | SearchRequest | [**SearchRequest**](../models/search-request) |   (optional) | 

### Return type
[**ReviewItem[]**](../models/review-item)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A list of review items | ReviewItem[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$CertificationId = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The certification ID
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'id eq "ef38f943-47e9-4562-b5bb-8424a56397d8"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in*  **completed**: *eq, ne*  **certificationSubjectSummary.id**: *eq, ne, in*  **certificationSubjectSummary.subjectName**: *eq, sw, co*  **certificationSubjectSummary.subjectManagerName**: *eq, sw, co*  **certificationSubjectSummary.subjectEmail**: *eq, sw, co*  **certificationSubjectSummary.identityState**: *eq, in, ne*  **reviewData.targetReference.id**: *eq, ne, in*  **reviewData.targetReference.name**: *eq, sw, co*  **reviewData.targetReference.type**: *eq*  **reviewData.entitlement.provisioningType**: *eq, ne, in*  **sourceName**: *eq, sw, co*  **accountName**: *eq, sw, co*  **reauthRequired**: *eq, ne* (optional)
$Sorters = "certificationSubjectSummary.subjectName" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **certificationSubjectSummary.subjectName, certificationSubjectSummary.subjectManagerName, reviewData.targetReference.id, reviewData.targetReference.name, sourceName, accountName** (optional)
$ActivityData = $false # Boolean | If set to true, the response will include HTTP header ""SLPT-Activity-Data-ID"" which will allow the caller to query for certification items activity data in a separate call. (optional) (default to $false)
$SearchRequest = @"{
  "queryString" : "identity 2023"
}"@

# Search certification review items

try {
    Search-ReviewItemsV1 -XSailPointExperimental $XSailPointExperimental -CertificationId $CertificationId 
    
    # Below is a request that includes all optional parameters
    # Search-ReviewItemsV1 -XSailPointExperimental $XSailPointExperimental -CertificationId $CertificationId -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters -ActivityData $ActivityData -SearchRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Search-ReviewItemsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## search-subject-summaries-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns a list of the subject summaries for a specific certification. It contains a request body with search parameters. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/search-subject-summaries-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | CertificationId | **String** | True  | The certification ID
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **targetId**: *eq, ne, in*  **completed**: *eq, ne*  **subjectName**: *eq, sw, co*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **subjectName, targetDisplayName**
 Body  | SearchRequest | [**SearchRequest**](../models/search-request) |   (optional) | 

### Return type
[**CertificationSubjectSummary[]**](../models/certification-subject-summary)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of certification subject summaries | CertificationSubjectSummary[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$CertificationId = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The certification ID
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'completed eq false and subjectName sw 'Derek'' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **targetId**: *eq, ne, in*  **completed**: *eq, ne*  **subjectName**: *eq, sw, co* (optional)
$Sorters = "subjectName" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **subjectName, targetDisplayName** (optional)
$SearchRequest = @"{
  "queryString" : "identity 2023"
}"@

# Search certification subject summaries

try {
    Search-SubjectSummariesV1 -XSailPointExperimental $XSailPointExperimental -CertificationId $CertificationId 
    
    # Below is a request that includes all optional parameters
    # Search-SubjectSummariesV1 -XSailPointExperimental $XSailPointExperimental -CertificationId $CertificationId -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters -SearchRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Search-SubjectSummariesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## set-or-update-campaign-template-schedule-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Creates or replaces the schedule for a campaign template. Send the full schedule in the request body. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/set-or-update-campaign-template-schedule-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | Id | **String** | True  | The ID of the campaign template whose schedule is being modified or created.
 Body  | Schedule | [**Schedule**](../models/schedule) | True  | The data for the schedule for the given campaign template ID.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Id = "2c918083-5d19-1a86-a15d-28455b4a2329" # String | The ID of the campaign template whose schedule is being modified or created.
$Schedule = @"{
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
}"@

# Set a campaign template schedule

try {
    $Result = ConvertFrom-JsonToSchedule -Json $Schedule
    Set-OrUpdateCampaignTemplateScheduleV1 -XSailPointExperimental $XSailPointExperimental -Id $Id -Schedule $Result 
    
    # Below is a request that includes all optional parameters
    # Set-OrUpdateCampaignTemplateScheduleV1 -XSailPointExperimental $XSailPointExperimental -Id $Id -Schedule $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Set-OrUpdateCampaignTemplateScheduleV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## start-gov-certification-campaign-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Submits a job to activate the campaign with the given ID. The campaign must be staged. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/start-gov-certification-campaign-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | Id | **String** | True  | The campaign id
 Body  | ActivateCampaignOptions | [**ActivateCampaignOptions**](../models/activate-campaign-options) |   (optional) | Optional. If the timezone is not specified, we will continue using the campaign's timezone, which was set during campaign creation. The activation time calculated from the given timezone may cause the campaign deadline time to be modified, but it will remain within the original date. The timezone must be in a valid ISO 8601 format.

### Return type
[**SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted - Returned if the request was successfully accepted into the system. | SystemCollectionsHashtable
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Id = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The campaign id
$ActivateCampaignOptions = @"{
  "timeZone" : "-05:00"
}"@

# Activate a Campaign

try {
    Start-GovCertificationCampaignV1 -XSailPointExperimental $XSailPointExperimental -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Start-GovCertificationCampaignV1 -XSailPointExperimental $XSailPointExperimental -Id $Id -ActivateCampaignOptions $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Start-GovCertificationCampaignV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## submit-decisions-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
The API makes a decision to approve or revoke one or more certification items. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/submit-decisions-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | CertificationId | **String** | True  | The ID of the certification on which to make decisions
 Body  | ReviewDecision | [**[]ReviewDecision**](../models/review-decision) | True  | A non-empty array of decisions to be made.

### Return type
[**Certification**](../models/certification)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | An identity campaign certification object | Certification
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$CertificationId = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The ID of the certification on which to make decisions
 $ReviewDecision = @"{
  "comments" : "This user no longer needs access to this source",
  "decision" : "APPROVED",
  "proposedEndDate" : "2017-07-11T18:45:37.098Z",
  "recommendation" : {
    "reasons" : [ "Reason 1", "Reason 2" ],
    "recommendation" : "APPROVE",
    "timestamp" : "2020-06-01T13:49:37.385Z"
  },
  "id" : "ef38f943-47e9-4562-b5bb-8424a56397d8"
}"@ # ReviewDecision[] | A non-empty array of decisions to be made.
 

# Decide on a Certification Item

try {
    $Result = ConvertFrom-JsonToReviewDecision -Json $ReviewDecision
    Submit-DecisionsV1 -XSailPointExperimental $XSailPointExperimental -CertificationId $CertificationId -ReviewDecision $Result 
    
    # Below is a request that includes all optional parameters
    # Submit-DecisionsV1 -XSailPointExperimental $XSailPointExperimental -CertificationId $CertificationId -ReviewDecision $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Submit-DecisionsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

# Next_Generation_Certification_Campaigns

# sailpoint.gov_certification.NextGenerationCertificationCampaignsApi
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
Certification campaigns provide SailPoint Identity Security users with an interactive review process they can use to identify and verify access to systems. 
Campaigns help organizations reduce risk of inappropriate access and satisfy audit requirements. 

A certification refers to SailPoint Identity Security&#39;s mechanism for reviewing a user&#39;s access to entitlements (sets of permissions) and approving or removing that access. 
These certifications serve as a way of showing that a user&#39;s access has been reviewed and approved. 
Multiple certifications by different reviewers are often required to approve a user&#39;s access. 
A set of multiple certifications is called a certification campaign. 

For example, an organization may use a Manager Certification campaign as a way of showing that a user&#39;s access has been reviewed and approved by multiple managers. 
Once this campaign has been completed, SailPoint Identity Security would provision all the access the user needs, nothing more. 

SailPoint Identity Security provides two simple campaign types users can create without using search queries, Manager and Source Owner campaigns:

You can create these types of campaigns without using any search queries in SailPoint Identity Security: 

- ManagerCampaign: SailPoint Identity Security provides this campaign type as a way to ensure that an identity&#39;s access is certified by their managers. 
You only need to provide a name and description to create one. 

- Source Owner Campaign: SailPoint Identity Security provides this campaign type as a way to ensure that an identity&#39;s access to a source is certified by its source owners. 
You only need to provide a name and description to create one. 
You can specify the sources whose owners you want involved or just run it across all sources. 

For more information about these campaign types, refer to [Starting a Manager or Source Owner Campaign](https://documentation.sailpoint.com/saas/help/certs/starting_campaign.html).

One useful way to create certification campaigns in SailPoint Identity Security is to use a specific search and then run a campaign on the results returned by that search. 
This allows you to be much more specific about whom you are certifying in your campaigns and what access you are certifying in your campaigns. 
For example, you can search for all identities who are managed by &quot;Amanda.Ross&quot; and also have the access to the &quot;Accounting&quot; role and then run a certification campaign based on that search to ensure that the returned identities are appropriately certified. 

You can use SailPoint Identity Security search queries to create these types of campaigns: 

- Identities: Use this campaign type to review and revoke access items for specific identities. 
You can either build a search query and create a campaign certifying all identities returned by that query, or you can search for individual identities and add those identities to the certification campaign. 

- Access Items: Use this campaign type to review and revoke a set of roles, access profiles, or entitlements from the identities that have them. 
You can either build a search query and create a campaign certifying all access items returned by that query, or you can search for individual access items and add those items to the certification campaign. 

- Uncorrelated Accounts: Use this campaign type to certify source accounts that aren&#39;t linked to an authoritative identity in SailPoint Identity Security. 
You can use this campaign type to view all the uncorrelated accounts for a source and certify them. 

For more information about search-based campaigns, refer to [Starting a Campaign from Search](https://documentation.sailpoint.com/saas/help/certs/starting_search_campaign.html).

Once you have generated your campaign, it becomes available for preview. 
An administrator can review the campaign and make changes, or if it&#39;s ready and accurate, activate it. 

Once the campaign is active, organization administrators or certification administrators can designate other SailPoint Identity Security users as certification reviewers. 
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

A certification refers to SailPoint Identity Security&#39;s mechanism for reviewing a user&#39;s access to entitlements (sets of permissions) and approving or removing that access. 
These certifications serve as a way of showing that a user&#39;s access has been reviewed and approved. 
Multiple certifications by different reviewers are often required to approve a user&#39;s access. 
A set of multiple certifications is called a certification campaign. 

For example, an organization may use a Manager Certification as a way of showing that a user&#39;s access has been reviewed and approved by their manager, or if the certification is part of a campaign, that the user&#39;s access has been reviewed and approved by multiple managers. 
Once this certification has been completed, SailPoint Identity Security  would provision all the access the user needs, nothing more. 

Certification summaries provide information about identity certification campaigns such as the identities involved, the number of decisions made, and the access changed. 
For example, an administrator or designated certification reviewer can examine the Manager Certification campaign to get an overview of how many entitlement decisions are made in that campaign as opposed to role decisions, which identities would be affected by changes to the campaign, and how those identities&#39; access would be affected.

### Certifications

Use this API to implement certification functionality. 
With this functionality in place, administrators and designated certification reviewers can review users&#39; access certifications and decide whether to approve access, revoke it, or reassign the review to another reviewer. 
Implementing certifications improves organizations&#39; data security by reducing inappropriate access through a distributed review process and helping them satisfy audit and regulatory requirements. 

A certification refers to SailPoint Identity Security&#39;s mechanism for reviewing a user&#39;s access to entitlements (sets of permissions) and approving or removing that access. 
These serve as a way of showing that a user&#39;s access has been reviewed and approved. 
Multiple certifications by different reviewers are often required to approve a user&#39;s access. 
A set of multiple certifications is called a certification campaign.

For example, an organization may use a Manager Certification as a way of showing that a user&#39;s access has been reviewed and approved by their manager, or if the certification is part of a campaign, that the user&#39;s access has been reviewed and approved by multiple managers. 
Once this certification has been completed, SailPoint Identity Security  would provision all the access the user needs, nothing more. 

Organization administrators or certification administrators can designate other SailPoint Identity Security users as certification reviewers. 
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
[**complete-gov-certification-campaign-v1**](#complete-gov-certification-campaign-v1) | **POST** `/certification-campaigns/v1/campaigns/{id}/complete` | Complete a Campaign
[**create-campaign-from-template-v1**](#create-campaign-from-template-v1) | **POST** `/certification-campaigns/v1/campaign-templates/{id}/generate` | Generate campaign from template
[**create-gov-certification-campaign-filter-v1**](#create-gov-certification-campaign-filter-v1) | **POST** `/certification-campaigns/v1/campaign-filters` | Create a Campaign Filter
[**create-gov-certification-campaign-template-v1**](#create-gov-certification-campaign-template-v1) | **POST** `/certification-campaigns/v1/campaign-templates` | Create a Campaign Template.
[**create-gov-certification-campaign-v1**](#create-gov-certification-campaign-v1) | **POST** `/certification-campaigns/v1/campaigns` | Create a campaign
[**create-report-v1**](#create-report-v1) | **POST** `/certification-campaigns/v1/campaigns/{campaignId}/reports` | Create campaign report
[**delete-gov-certification-campaign-filters-v1**](#delete-gov-certification-campaign-filters-v1) | **POST** `/certification-campaigns/v1/campaign-filters/delete` | Deletes Campaign Filters
[**delete-gov-certification-campaign-template-schedule-v1**](#delete-gov-certification-campaign-template-schedule-v1) | **DELETE** `/certification-campaigns/v1/campaign-templates/{id}/schedule` | Delete a Campaign Template Schedule
[**delete-gov-certification-campaign-template-v1**](#delete-gov-certification-campaign-template-v1) | **DELETE** `/certification-campaigns/v1/campaign-templates/{id}` | Delete a Campaign Template
[**delete-gov-certification-campaigns-v1**](#delete-gov-certification-campaigns-v1) | **POST** `/certification-campaigns/v1/campaigns/delete` | Delete Campaigns
[**get-access-summaries-v1**](#get-access-summaries-v1) | **GET** `/certification-campaigns/v1/certifications/{certificationId}/access-summaries/{type}` | Access Summaries
[**get-certification-entitlement-children-details-v1**](#get-certification-entitlement-children-details-v1) | **GET** `/certification-campaigns/v1/certifications/{certificationId}/review-items/{reviewItemId}/entitlements/{entitlementId}/children` | Entitlement Children in a Certification
[**get-certification-entitlement-details-v1**](#get-certification-entitlement-details-v1) | **GET** `/certification-campaigns/v1/certifications/{certificationId}/review-items/{reviewItemId}/entitlements/{entitlementId}` | Get Entitlement in a Certification
[**get-certification-entitlement-parents-details-v1**](#get-certification-entitlement-parents-details-v1) | **GET** `/certification-campaigns/v1/certifications/{certificationId}/review-items/{reviewItemId}/entitlements/{entitlementId}/parents` | Entitlement Parents in a Certification
[**get-certification-entitlement-permissions-v1**](#get-certification-entitlement-permissions-v1) | **GET** `/certification-campaigns/v1/certifications/{certificationId}/review-items/{reviewItemId}/entitlements/{entitlementId}/permissions` | Permissions in a Certification
[**get-certification-item-account-details-v1**](#get-certification-item-account-details-v1) | **GET** `/certification-campaigns/v1/certifications/{certificationId}/review-items/{reviewItemId}/item-id/{entitlementId}/cert-account-details` | Certification Item Account Details
[**get-certification-v1**](#get-certification-v1) | **GET** `/certification-campaigns/v1/certifications/{certificationId}` | Certification by ID
[**get-decision-summary-v1**](#get-decision-summary-v1) | **GET** `/certification-campaigns/v1/certifications/{certificationId}/decision-summary` | Summary of Certification Decisions
[**get-download-url-v1**](#get-download-url-v1) | **GET** `/certification-campaigns/v1/campaigns/{campaignId}/reports/{reportId}/download-url` | Download URL for campaign report
[**get-gov-certification-access-profile-v1**](#get-gov-certification-access-profile-v1) | **GET** `/certification-campaigns/v1/certifications/{certificationId}/review-items/{reviewItemId}/access-profiles/{accessProfileId}` | Get an Access Profile
[**get-gov-certification-campaign-filter-by-id-v1**](#get-gov-certification-campaign-filter-by-id-v1) | **GET** `/certification-campaigns/v1/campaign-filters/{id}` | Get Campaign Filter by ID
[**get-gov-certification-campaign-report-v1**](#get-gov-certification-campaign-report-v1) | **GET** `/certification-campaigns/v1/campaigns/{campaignId}/reports/{reportId}` | Get a campaign report
[**get-gov-certification-campaign-template-schedule-v1**](#get-gov-certification-campaign-template-schedule-v1) | **GET** `/certification-campaigns/v1/campaign-templates/{id}/schedule` | Get a Campaign Template Schedule
[**get-gov-certification-campaign-template-v1**](#get-gov-certification-campaign-template-v1) | **GET** `/certification-campaigns/v1/campaign-templates/{id}` | Get a Campaign Template
[**get-gov-certification-campaign-v1**](#get-gov-certification-campaign-v1) | **GET** `/certification-campaigns/v1/campaigns/{id}` | Get a campaign
[**get-gov-certification-task-v1**](#get-gov-certification-task-v1) | **GET** `/certification-campaigns/v1/certification-tasks/{id}` | Task details by ID
[**get-pending-tasks-v1**](#get-pending-tasks-v1) | **GET** `/certification-campaigns/v1/certification-tasks` | List of Pending Tasks
[**get-status-summary-v1**](#get-status-summary-v1) | **GET** `/certification-campaigns/v1/certifications/status-summary` | Status Summary For Certifications
[**get-subject-summary-v1**](#get-subject-summary-v1) | **GET** `/certification-campaigns/v1/certifications/{certificationId}/subject-summary/{subjectId}` | Summary for a Certification Subject
[**list-campaign-templates-v1**](#list-campaign-templates-v1) | **GET** `/certification-campaigns/v1/campaign-templates` | List Campaign Templates
[**list-campaigns-v1**](#list-campaigns-v1) | **GET** `/certification-campaigns/v1/campaigns` | List the campaigns
[**list-certifications-v1**](#list-certifications-v1) | **GET** `/certification-campaigns/v1/certifications` | List Certifications
[**list-gov-certification-campaign-filters-v1**](#list-gov-certification-campaign-filters-v1) | **GET** `/certification-campaigns/v1/campaign-filters` | List Campaign Filters
[**list-gov-certification-reviewers-v1**](#list-gov-certification-reviewers-v1) | **GET** `/certification-campaigns/v1/certifications/{certificationId}/reviewers` | List of Reviewers for certification
[**list-reports-v1**](#list-reports-v1) | **GET** `/certification-campaigns/v1/campaigns/{campaignId}/reports` | List reports for a campaign
[**list-review-items-v1**](#list-review-items-v1) | **GET** `/certification-campaigns/v1/certifications/{certificationId}/review-items` | List of Review Items
[**list-subject-summaries-v1**](#list-subject-summaries-v1) | **GET** `/certification-campaigns/v1/certifications/{certificationId}/subject-summaries` | Subject Summaries for a Certification
[**move-certifications-v1**](#move-certifications-v1) | **POST** `/certification-campaigns/v1/campaigns/{campaignId}/reassign` | Reassign certifications to an identity
[**move-subject-and-items-async-v1**](#move-subject-and-items-async-v1) | **POST** `/certification-campaigns/v1/certifications/{certificationId}/reassign-async` | Reassign certification items asynchronously
[**move-subject-and-items-v1**](#move-subject-and-items-v1) | **POST** `/certification-campaigns/v1/certifications/{certificationId}/reassign` | Reassign certification subjects or items
[**patch-campaign-v1**](#patch-campaign-v1) | **PATCH** `/certification-campaigns/v1/campaigns/{id}` | Update a campaign
[**patch-gov-certification-campaign-template-v1**](#patch-gov-certification-campaign-template-v1) | **PATCH** `/certification-campaigns/v1/campaign-templates/{id}` | Update a Campaign Template
[**process-sign-off-certification-v1**](#process-sign-off-certification-v1) | **POST** `/certification-campaigns/v1/certifications/{certificationId}/sign-off` | Finalize Certification Decisions
[**put-campaign-filter-v1**](#put-campaign-filter-v1) | **PUT** `/certification-campaigns/v1/campaign-filters/{id}` | Updates a Campaign Filter
[**search-campaign-templates-v1**](#search-campaign-templates-v1) | **POST** `/certification-campaigns/v1/campaign-templates/search` | Search campaign templates
[**search-certifications-v1**](#search-certifications-v1) | **POST** `/certification-campaigns/v1/certifications/search` | Search Certifications
[**search-insights-access-summary-v1**](#search-insights-access-summary-v1) | **POST** `/certification-campaigns/v1/insights/access-summary` | Get Insights Access Summary
[**search-review-items-v1**](#search-review-items-v1) | **POST** `/certification-campaigns/v1/certifications/{certificationId}/review-items/search` | Search certification review items
[**search-subject-summaries-v1**](#search-subject-summaries-v1) | **POST** `/certification-campaigns/v1/certifications/{certificationId}/subject-summaries/search` | Search certification subject summaries
[**set-or-update-campaign-template-schedule-v1**](#set-or-update-campaign-template-schedule-v1) | **PUT** `/certification-campaigns/v1/campaign-templates/{id}/schedule` | Set a campaign template schedule
[**start-gov-certification-campaign-v1**](#start-gov-certification-campaign-v1) | **POST** `/certification-campaigns/v1/campaigns/{id}/activate` | Activate a Campaign
[**submit-decisions-v1**](#submit-decisions-v1) | **POST** `/certification-campaigns/v1/certifications/{certificationId}/decide` | Decide on a Certification Item


## complete-gov-certification-campaign-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Complete a Campaign
:::caution
This endpoint will run successfully for any campaigns that are **past due**.
This endpoint will return a bad request error if the campaign is **not past due**.
:::
Completes a certification campaign. This is provided to admins so that they can complete a certification even if all items have not been completed. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/complete-gov-certification-campaign-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The campaign id
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.
 Body  | complete_campaign_options | [**CompleteCampaignOptions**](../models/complete-campaign-options) |   (optional) | Optional. Default behavior is for the campaign to auto-approve upon completion, unless we specify explicitly REVOKE in autoCompleteAction

### Return type
**object**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted - Returned if the request was successfully accepted into the system. | object |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.complete_campaign_options import CompleteCampaignOptions
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The campaign id # str | The campaign id
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')
    complete_campaign_options = '''{
          "autoCompleteAction" : "REVOKE"
        }''' # CompleteCampaignOptions | Optional. Default behavior is for the campaign to auto-approve upon completion, unless we specify explicitly REVOKE in autoCompleteAction (optional)

    try:
        # Complete a Campaign
        
        results = NextGenerationCertificationCampaignsApi(api_client).complete_gov_certification_campaign_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = NextGenerationCertificationCampaignsApi(api_client).complete_gov_certification_campaign_v1(id, x_sail_point_experimental, new_complete_campaign_options)
        print("The response of NextGenerationCertificationCampaignsApi->complete_gov_certification_campaign_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->complete_gov_certification_campaign_v1: %s\n" % e)
```



[[Back to top]](#) 

## create-campaign-from-template-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Generate campaign from template
Generates a new campaign from a campaign template.
The campaign object contained in the template has special formatting applied to its name and description fields in order to determine the generated campaign's name/description. Placeholders in those fields are formatted with the current date and time upon generation.
Placeholders consist of a percent sign followed by a letter indicating what should be inserted; for example, "%Y" will insert the current year; a campaign template named "Campaign for %y" would generate a campaign called "Campaign for 2020" (assuming the year at generation time is 2020).
Valid placeholders are the date/time conversion suffix characters supported by [java.util.Formatter](https://docs.oracle.com/javase/8/docs/api/java/util/Formatter.html).
Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/create-campaign-from-template-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The desired campaign template's ID.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**CampaignGet**](../models/campaign-get)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Indicates a campaign was successfully generated from this template, and returns a reference to the new campaign. | CampaignGet |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.campaign_get import CampaignGet
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '2c918083-5d19-1a86-a15d-28455b4a2329' # str | The desired campaign template's ID. # str | The desired campaign template's ID.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Generate campaign from template
        
        results = NextGenerationCertificationCampaignsApi(api_client).create_campaign_from_template_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = NextGenerationCertificationCampaignsApi(api_client).create_campaign_from_template_v1(id, x_sail_point_experimental)
        print("The response of NextGenerationCertificationCampaignsApi->create_campaign_from_template_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->create_campaign_from_template_v1: %s\n" % e)
```



[[Back to top]](#) 

## create-gov-certification-campaign-filter-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Create a Campaign Filter
Create a campaign filter based on filter details and criteria. Required roles are ORG_ADMIN or CERT_ADMIN. The request body must not exceed 1 MiB (1,048,576 bytes); larger requests are rejected with a 400 response.

[API Spec](https://developer.sailpoint.com/docs/api/create-gov-certification-campaign-filter-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | campaign_filter_create | [**CampaignFilterCreate**](../models/campaign-filter-create) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**CampaignFilterGet**](../models/campaign-filter-get)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Created successfully. | CampaignFilterGet |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.campaign_filter_create import CampaignFilterCreate
from sailpoint.gov_certification.models.campaign_filter_get import CampaignFilterGet
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    campaign_filter_create = '''{
          "mode" : "INCLUSION",
          "name" : "Identity Attribute Campaign Filter",
          "description" : "Campaign filter to certify data based on specified property of Identity Attribute.",
          "criteriaList" : [ {
            "criteriaType" : "IDENTITY",
            "criteriaProperty" : "DISPLAY_NAME",
            "criteriaValue" : "support",
            "operation" : "EQUALS"
          } ]
        }''' # CampaignFilterCreate | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Create a Campaign Filter
        new_campaign_filter_create = CampaignFilterCreate.from_json(campaign_filter_create)
        results = NextGenerationCertificationCampaignsApi(api_client).create_gov_certification_campaign_filter_v1(campaign_filter_create=new_campaign_filter_create)
        # Below is a request that includes all optional parameters
        # results = NextGenerationCertificationCampaignsApi(api_client).create_gov_certification_campaign_filter_v1(new_campaign_filter_create, x_sail_point_experimental)
        print("The response of NextGenerationCertificationCampaignsApi->create_gov_certification_campaign_filter_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->create_gov_certification_campaign_filter_v1: %s\n" % e)
```



[[Back to top]](#) 

## create-gov-certification-campaign-template-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Create a Campaign Template.
Creates campaign template based on campaign. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/create-gov-certification-campaign-template-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | campaign_template_create | [**CampaignTemplateCreate**](../models/campaign-template-create) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**CampaignTemplateGet**](../models/campaign-template-get)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Created successfully. | CampaignTemplateGet |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.campaign_template_create import CampaignTemplateCreate
from sailpoint.gov_certification.models.campaign_template_get import CampaignTemplateGet
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    campaign_template_create = '''{
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
        }''' # CampaignTemplateCreate | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Create a Campaign Template.
        new_campaign_template_create = CampaignTemplateCreate.from_json(campaign_template_create)
        results = NextGenerationCertificationCampaignsApi(api_client).create_gov_certification_campaign_template_v1(campaign_template_create=new_campaign_template_create)
        # Below is a request that includes all optional parameters
        # results = NextGenerationCertificationCampaignsApi(api_client).create_gov_certification_campaign_template_v1(new_campaign_template_create, x_sail_point_experimental)
        print("The response of NextGenerationCertificationCampaignsApi->create_gov_certification_campaign_template_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->create_gov_certification_campaign_template_v1: %s\n" % e)
```



[[Back to top]](#) 

## create-gov-certification-campaign-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Create a campaign
Creates a new Certification Campaign with the information provided in the request body. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/create-gov-certification-campaign-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | campaign_create | [**CampaignCreate**](../models/campaign-create) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**CampaignGet**](../models/campaign-get)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Indicates that the campaign requested was successfully created and returns its representation. | CampaignGet |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.campaign_create import CampaignCreate
from sailpoint.gov_certification.models.campaign_get import CampaignGet
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    campaign_create = '''{
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
        }''' # CampaignCreate | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Create a campaign
        new_campaign_create = CampaignCreate.from_json(campaign_create)
        results = NextGenerationCertificationCampaignsApi(api_client).create_gov_certification_campaign_v1(campaign_create=new_campaign_create)
        # Below is a request that includes all optional parameters
        # results = NextGenerationCertificationCampaignsApi(api_client).create_gov_certification_campaign_v1(new_campaign_create, x_sail_point_experimental)
        print("The response of NextGenerationCertificationCampaignsApi->create_gov_certification_campaign_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->create_gov_certification_campaign_v1: %s\n" % e)
```



[[Back to top]](#) 

## create-report-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Create campaign report
Creates a new campaign report asynchronously for the provided campaignId. Required roles are ORG_ADMIN or CERT_ADMIN or REPORT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/create-report-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | campaign_id | **str** | True  | The ID of the campaign to generate a report for
 Body  | trigger_campaign_report_request | [**TriggerCampaignReportRequest**](../models/trigger-campaign-report-request) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**CampaignReport**](../models/campaign-report)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Indicates that the generation of the campaign report was started successfully. | CampaignReport |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.campaign_report import CampaignReport
from sailpoint.gov_certification.models.trigger_campaign_report_request import TriggerCampaignReportRequest
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    campaign_id = 'e1aeb0b6-0021-4f40-8bc7-5c56533214b3' # str | The ID of the campaign to generate a report for # str | The ID of the campaign to generate a report for
    trigger_campaign_report_request = '''{
          "format" : "PDF",
          "name" : "My Campaign Report",
          "type" : "REMEDIATION"
        }''' # TriggerCampaignReportRequest | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Create campaign report
        new_trigger_campaign_report_request = TriggerCampaignReportRequest.from_json(trigger_campaign_report_request)
        results = NextGenerationCertificationCampaignsApi(api_client).create_report_v1(campaign_id=campaign_id, trigger_campaign_report_request=new_trigger_campaign_report_request)
        # Below is a request that includes all optional parameters
        # results = NextGenerationCertificationCampaignsApi(api_client).create_report_v1(campaign_id, new_trigger_campaign_report_request, x_sail_point_experimental)
        print("The response of NextGenerationCertificationCampaignsApi->create_report_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->create_report_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-gov-certification-campaign-filters-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Deletes Campaign Filters
Deletes campaign filters whose IDs are specified in the provided list of campaign filter IDs. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/delete-gov-certification-campaign-filters-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | request_body | **[]str** | True  | A JSON list of IDs of campaign filters to delete.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    request_body = '''['request_body_example']''' # List[str] | A JSON list of IDs of campaign filters to delete.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Deletes Campaign Filters
        new_request_body = RequestBody.from_json(request_body)
        NextGenerationCertificationCampaignsApi(api_client).delete_gov_certification_campaign_filters_v1(request_body=new_request_body)
        # Below is a request that includes all optional parameters
        # NextGenerationCertificationCampaignsApi(api_client).delete_gov_certification_campaign_filters_v1(new_request_body, x_sail_point_experimental)
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->delete_gov_certification_campaign_filters_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-gov-certification-campaign-template-schedule-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Delete a Campaign Template Schedule
Deletes a schedule by campaign template ID. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/delete-gov-certification-campaign-template-schedule-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the campaign template whose schedule is being deleted.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '2c918083-5d19-1a86-a15d-28455b4a2329' # str | The ID of the campaign template whose schedule is being deleted. # str | The ID of the campaign template whose schedule is being deleted.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Delete a Campaign Template Schedule
        
        NextGenerationCertificationCampaignsApi(api_client).delete_gov_certification_campaign_template_schedule_v1(id=id)
        # Below is a request that includes all optional parameters
        # NextGenerationCertificationCampaignsApi(api_client).delete_gov_certification_campaign_template_schedule_v1(id, x_sail_point_experimental)
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->delete_gov_certification_campaign_template_schedule_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-gov-certification-campaign-template-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Delete a Campaign Template
Deletes a campaign template by ID. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/delete-gov-certification-campaign-template-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the campaign template being deleted.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '2c918083-5d19-1a86-a15d-28455b4a2329' # str | The ID of the campaign template being deleted. # str | The ID of the campaign template being deleted.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Delete a Campaign Template
        
        NextGenerationCertificationCampaignsApi(api_client).delete_gov_certification_campaign_template_v1(id=id)
        # Below is a request that includes all optional parameters
        # NextGenerationCertificationCampaignsApi(api_client).delete_gov_certification_campaign_template_v1(id, x_sail_point_experimental)
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->delete_gov_certification_campaign_template_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-gov-certification-campaigns-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Delete Campaigns
Use this API to delete certification campaigns whose IDs are specified in the provided list of campaign IDs. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/delete-gov-certification-campaigns-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | campaigns_delete_request | [**CampaignsDeleteRequest**](../models/campaigns-delete-request) | True  | IDs of the campaigns to delete.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
**object**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted - Returned if the request was successfully accepted into the system. | object |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.campaigns_delete_request import CampaignsDeleteRequest
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    campaigns_delete_request = '''{
          "ids" : [ "ef38f943-47e9-4562-b5bb-8424a56397d8", "ef38f943-47e9-4562-b5bb-8424a56397d9" ]
        }''' # CampaignsDeleteRequest | IDs of the campaigns to delete.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Delete Campaigns
        new_campaigns_delete_request = CampaignsDeleteRequest.from_json(campaigns_delete_request)
        results = NextGenerationCertificationCampaignsApi(api_client).delete_gov_certification_campaigns_v1(campaigns_delete_request=new_campaigns_delete_request)
        # Below is a request that includes all optional parameters
        # results = NextGenerationCertificationCampaignsApi(api_client).delete_gov_certification_campaigns_v1(new_campaigns_delete_request, x_sail_point_experimental)
        print("The response of NextGenerationCertificationCampaignsApi->delete_gov_certification_campaigns_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->delete_gov_certification_campaigns_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-access-summaries-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Access Summaries
This API returns a list of access summaries for the specified certification and type. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-access-summaries-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | certification_id | **str** | True  | The certification ID
Path   | type | [**CertificationItemType**](../models/certification-item-type) | True  | The type of review item to retrieve summaries for
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **completed**: *eq, ne*  **targetReference.id**: *eq, ne, in*  **targetReference.name**: *eq, sw, co*  **sourceName**: *eq, sw, co*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **targetReference.name**

### Return type
[**List[ReviewData]**](../models/review-data)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of access summaries | List[ReviewData] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.certification_item_type import CertificationItemType
from sailpoint.gov_certification.models.review_data import ReviewData
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    certification_id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The certification ID # str | The certification ID
    type = sailpoint.gov_certification.CertificationItemType() # CertificationItemType | The type of review item to retrieve summaries for # CertificationItemType | The type of review item to retrieve summaries for
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')
    limit = 250 # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'completed eq false and sourceName sw \'AD\'' # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **completed**: *eq, ne*  **targetReference.id**: *eq, ne, in*  **targetReference.name**: *eq, sw, co*  **sourceName**: *eq, sw, co* (optional) # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **completed**: *eq, ne*  **targetReference.id**: *eq, ne, in*  **targetReference.name**: *eq, sw, co*  **sourceName**: *eq, sw, co* (optional)
    sorters = 'targetReference.name' # str | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **targetReference.name** (optional) # str | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **targetReference.name** (optional)

    try:
        # Access Summaries
        
        results = NextGenerationCertificationCampaignsApi(api_client).get_access_summaries_v1(certification_id=certification_id, type=type)
        # Below is a request that includes all optional parameters
        # results = NextGenerationCertificationCampaignsApi(api_client).get_access_summaries_v1(certification_id, type, x_sail_point_experimental, limit, offset, count, filters, sorters)
        print("The response of NextGenerationCertificationCampaignsApi->get_access_summaries_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->get_access_summaries_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-certification-entitlement-children-details-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Entitlement Children in a Certification
Returns a list of child entitlements for the provided entitlement, as long as the logged-in user is a reviewer of the specified certification, and the certification contains either the specified entitlement, or an access profile that contains the specified entitlement. ORG_ADMIN or CERT_ADMIN can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-certification-entitlement-children-details-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | certification_id | **str** | True  | The certification ID
Path   | review_item_id | **str** | True  | The certification item ID
Path   | entitlement_id | **str** | True  | The entitlement ID
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id**

### Return type
[**List[PassThroughEntitlement]**](../models/pass-through-entitlement)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | An entitlement children details corresponding to the given entitlement ID | List[PassThroughEntitlement] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.pass_through_entitlement import PassThroughEntitlement
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    certification_id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The certification ID # str | The certification ID
    review_item_id = '2478b87b-f0d2-4585-b42d-45e4d580c5cf' # str | The certification item ID # str | The certification item ID
    entitlement_id = 'ef38f94347e94562b5bb8424a56397d8' # str | The entitlement ID # str | The entitlement ID
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')
    limit = 250 # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'name eq \'Read Only\'' # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le* (optional) # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le* (optional)
    sorters = 'name' # str | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id** (optional) # str | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id** (optional)

    try:
        # Entitlement Children in a Certification
        
        results = NextGenerationCertificationCampaignsApi(api_client).get_certification_entitlement_children_details_v1(certification_id=certification_id, review_item_id=review_item_id, entitlement_id=entitlement_id)
        # Below is a request that includes all optional parameters
        # results = NextGenerationCertificationCampaignsApi(api_client).get_certification_entitlement_children_details_v1(certification_id, review_item_id, entitlement_id, x_sail_point_experimental, limit, offset, count, filters, sorters)
        print("The response of NextGenerationCertificationCampaignsApi->get_certification_entitlement_children_details_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->get_certification_entitlement_children_details_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-certification-entitlement-details-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Get Entitlement in a Certification
This API get the details for the entitlement, as long as the logged-in user is a reviewer of the specified certification, and the certification contains either the specified entitlement, or an access profile that contains the specified entitlement. ORG_ADMIN or CERT_ADMIN can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-certification-entitlement-details-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | certification_id | **str** | True  | The certification ID
Path   | review_item_id | **str** | True  | The certification item ID
Path   | entitlement_id | **str** | True  | The entitlement ID
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**PassThroughEntitlement**](../models/pass-through-entitlement)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | An entitlement detail corresponding to the given entitlement ID | PassThroughEntitlement |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.pass_through_entitlement import PassThroughEntitlement
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    certification_id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The certification ID # str | The certification ID
    review_item_id = '2478b87b-f0d2-4585-b42d-45e4d580c5cf' # str | The certification item ID # str | The certification item ID
    entitlement_id = 'ef38f94347e94562b5bb8424a56397d8' # str | The entitlement ID # str | The entitlement ID
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get Entitlement in a Certification
        
        results = NextGenerationCertificationCampaignsApi(api_client).get_certification_entitlement_details_v1(certification_id=certification_id, review_item_id=review_item_id, entitlement_id=entitlement_id)
        # Below is a request that includes all optional parameters
        # results = NextGenerationCertificationCampaignsApi(api_client).get_certification_entitlement_details_v1(certification_id, review_item_id, entitlement_id, x_sail_point_experimental)
        print("The response of NextGenerationCertificationCampaignsApi->get_certification_entitlement_details_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->get_certification_entitlement_details_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-certification-entitlement-parents-details-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Entitlement Parents in a Certification
Returns a list of parent entitlements for the provided entitlement, as long as the logged-in user is a reviewer of the specified certification, and the certification contains either the specified entitlement, or an access profile that contains the specified entitlement. ORG_ADMIN or CERT_ADMIN can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-certification-entitlement-parents-details-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | certification_id | **str** | True  | The certification ID
Path   | review_item_id | **str** | True  | The certification item ID
Path   | entitlement_id | **str** | True  | The entitlement ID
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id**

### Return type
[**List[PassThroughEntitlement]**](../models/pass-through-entitlement)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Entitlement parents detail corresponding to the given entitlement ID | List[PassThroughEntitlement] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.pass_through_entitlement import PassThroughEntitlement
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    certification_id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The certification ID # str | The certification ID
    review_item_id = '2478b87b-f0d2-4585-b42d-45e4d580c5cf' # str | The certification item ID # str | The certification item ID
    entitlement_id = 'ef38f94347e94562b5bb8424a56397d8' # str | The entitlement ID # str | The entitlement ID
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')
    limit = 250 # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'attribute eq \'role\'' # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le* (optional) # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le* (optional)
    sorters = 'name' # str | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id** (optional) # str | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id** (optional)

    try:
        # Entitlement Parents in a Certification
        
        results = NextGenerationCertificationCampaignsApi(api_client).get_certification_entitlement_parents_details_v1(certification_id=certification_id, review_item_id=review_item_id, entitlement_id=entitlement_id)
        # Below is a request that includes all optional parameters
        # results = NextGenerationCertificationCampaignsApi(api_client).get_certification_entitlement_parents_details_v1(certification_id, review_item_id, entitlement_id, x_sail_point_experimental, limit, offset, count, filters, sorters)
        print("The response of NextGenerationCertificationCampaignsApi->get_certification_entitlement_parents_details_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->get_certification_entitlement_parents_details_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-certification-entitlement-permissions-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Permissions in a Certification
Retrieves a list of permissions associated with the given certification itemId value, as long as the logged-in user is a reviewer of the specified certification, and the certification contains either the specified entitlement, or an access profile or the role that contains the specified entitlement. ORG_ADMIN or CERT_ADMIN can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-certification-entitlement-permissions-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | certification_id | **str** | True  | The certification ID
Path   | review_item_id | **str** | True  | The certification item ID
Path   | entitlement_id | **str** | True  | The entitlement ID
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.

### Return type
[**List[PermissionDTO]**](../models/permission-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Entitlement permissions corresponding to the given entitlement ID | List[PermissionDTO] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.permission_dto import PermissionDTO
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    certification_id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The certification ID # str | The certification ID
    review_item_id = '2478b87b-f0d2-4585-b42d-45e4d580c5cf' # str | The certification item ID # str | The certification item ID
    entitlement_id = 'ef38f94347e94562b5bb8424a56397d8' # str | The entitlement ID # str | The entitlement ID
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')
    limit = 250 # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)

    try:
        # Permissions in a Certification
        
        results = NextGenerationCertificationCampaignsApi(api_client).get_certification_entitlement_permissions_v1(certification_id=certification_id, review_item_id=review_item_id, entitlement_id=entitlement_id)
        # Below is a request that includes all optional parameters
        # results = NextGenerationCertificationCampaignsApi(api_client).get_certification_entitlement_permissions_v1(certification_id, review_item_id, entitlement_id, x_sail_point_experimental, limit, offset)
        print("The response of NextGenerationCertificationCampaignsApi->get_certification_entitlement_permissions_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->get_certification_entitlement_permissions_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-certification-item-account-details-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Certification Item Account Details
Returns account details for a certification review item. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API. It uses the Shelby Account API to fetch details.

[API Spec](https://developer.sailpoint.com/docs/api/get-certification-item-account-details-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | certification_id | **str** | True  | The certification ID
Path   | review_item_id | **str** | True  | The certification item ID
Path   | entitlement_id | **str** | True  | The entitlement ID
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**AccountDetailsDto**](../models/account-details-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Account details of particular certification review item | AccountDetailsDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.account_details_dto import AccountDetailsDto
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    certification_id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The certification ID # str | The certification ID
    review_item_id = '2478b87b-f0d2-4585-b42d-45e4d580c5cf' # str | The certification item ID # str | The certification item ID
    entitlement_id = 'ef38f94347e94562b5bb8424a56397d8' # str | The entitlement ID # str | The entitlement ID
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Certification Item Account Details
        
        results = NextGenerationCertificationCampaignsApi(api_client).get_certification_item_account_details_v1(certification_id=certification_id, review_item_id=review_item_id, entitlement_id=entitlement_id)
        # Below is a request that includes all optional parameters
        # results = NextGenerationCertificationCampaignsApi(api_client).get_certification_item_account_details_v1(certification_id, review_item_id, entitlement_id, x_sail_point_experimental)
        print("The response of NextGenerationCertificationCampaignsApi->get_certification_item_account_details_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->get_certification_item_account_details_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-certification-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Certification by ID
This API returns a single certification by its ID. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-certification-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | certification_id | **str** | True  | The certification ID
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Certification**](../models/certification)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A certification object | Certification |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.certification import Certification
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    certification_id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The certification ID # str | The certification ID
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Certification by ID
        
        results = NextGenerationCertificationCampaignsApi(api_client).get_certification_v1(certification_id=certification_id)
        # Below is a request that includes all optional parameters
        # results = NextGenerationCertificationCampaignsApi(api_client).get_certification_v1(certification_id, x_sail_point_experimental)
        print("The response of NextGenerationCertificationCampaignsApi->get_certification_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->get_certification_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-decision-summary-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Summary of Certification Decisions
This API returns a summary of the decisions made on a certification. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-decision-summary-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | certification_id | **str** | True  | The certification ID
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **certificationSubjectSummary.id**: *eq, in*

### Return type
[**DetailedDecisionSummary**](../models/detailed-decision-summary)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Summary of the decisions made | DetailedDecisionSummary |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.detailed_decision_summary import DetailedDecisionSummary
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    certification_id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The certification ID # str | The certification ID
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')
    filters = 'certificationSubjectSummary.id in (\'2c918085-71bc-fcf8-0171-c23e4b4221fc\',\'2c918085-71bc-fcf8-0171-c23e4b4221fd\')' # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **certificationSubjectSummary.id**: *eq, in* (optional) # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **certificationSubjectSummary.id**: *eq, in* (optional)

    try:
        # Summary of Certification Decisions
        
        results = NextGenerationCertificationCampaignsApi(api_client).get_decision_summary_v1(certification_id=certification_id)
        # Below is a request that includes all optional parameters
        # results = NextGenerationCertificationCampaignsApi(api_client).get_decision_summary_v1(certification_id, x_sail_point_experimental, filters)
        print("The response of NextGenerationCertificationCampaignsApi->get_decision_summary_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->get_decision_summary_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-download-url-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Download URL for campaign report
Retrieves a presigned URL to use for downloading the campaign report. Required roles are ORG_ADMIN or CERT_ADMIN or REPORT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/get-download-url-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | campaign_id | **str** | True  | The ID of the campaign to be retrieved
Path   | report_id | **str** | True  | The ID of the report to be retrieved
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**CampaignReportDownloadResponse**](../models/campaign-report-download-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The information to download the campaign report | CampaignReportDownloadResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.campaign_report_download_response import CampaignReportDownloadResponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    campaign_id = 'e1aeb0b6-0021-4f40-8bc7-5c56533214b3' # str | The ID of the campaign to be retrieved # str | The ID of the campaign to be retrieved
    report_id = 'e1aeb0b6-0021-4f40-8bc7-5c56533214b3' # str | The ID of the report to be retrieved # str | The ID of the report to be retrieved
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Download URL for campaign report
        
        results = NextGenerationCertificationCampaignsApi(api_client).get_download_url_v1(campaign_id=campaign_id, report_id=report_id)
        # Below is a request that includes all optional parameters
        # results = NextGenerationCertificationCampaignsApi(api_client).get_download_url_v1(campaign_id, report_id, x_sail_point_experimental)
        print("The response of NextGenerationCertificationCampaignsApi->get_download_url_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->get_download_url_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-gov-certification-access-profile-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Get an Access Profile
This API returns an access profile details based on access profile id provided, as long as the logged-in user is a reviewer of the specified certification, and the certification contains either the specified access profile, or a role that contains the specified access profile. ORG_ADMIN or CERT_ADMIN can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-gov-certification-access-profile-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | certification_id | **str** | True  | The certification ID
Path   | review_item_id | **str** | True  | The certification item ID. This must of review item type either ROLE or ACCESS_PROFILE.
Path   | access_profile_id | **str** | True  | The Access Profile ID
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**AccessProfile2**](../models/access-profile2)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | An AccessProfile | AccessProfile2 |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.access_profile2 import AccessProfile2
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    certification_id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The certification ID # str | The certification ID
    review_item_id = '2478b87b-f0d2-4585-b42d-45e4d580c5cf' # str | The certification item ID. This must of review item type either ROLE or ACCESS_PROFILE. # str | The certification item ID. This must of review item type either ROLE or ACCESS_PROFILE.
    access_profile_id = '2c9180837ca6693d017ca8d097500149' # str | The Access Profile ID # str | The Access Profile ID
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get an Access Profile
        
        results = NextGenerationCertificationCampaignsApi(api_client).get_gov_certification_access_profile_v1(certification_id=certification_id, review_item_id=review_item_id, access_profile_id=access_profile_id)
        # Below is a request that includes all optional parameters
        # results = NextGenerationCertificationCampaignsApi(api_client).get_gov_certification_access_profile_v1(certification_id, review_item_id, access_profile_id, x_sail_point_experimental)
        print("The response of NextGenerationCertificationCampaignsApi->get_gov_certification_access_profile_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->get_gov_certification_access_profile_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-gov-certification-campaign-filter-by-id-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Get Campaign Filter by ID
Retrieves information for an existing campaign filter using the filter's ID. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/get-gov-certification-campaign-filter-by-id-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the campaign filter to be retrieved.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**CampaignFilterGet**](../models/campaign-filter-get)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The data for the campaign filter matching the given ID. | CampaignFilterGet |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.campaign_filter_get import CampaignFilterGet
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = 'e9f9a139-7b84-2fd5-a658-42087040d3ac' # str | The ID of the campaign filter to be retrieved. # str | The ID of the campaign filter to be retrieved.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get Campaign Filter by ID
        
        results = NextGenerationCertificationCampaignsApi(api_client).get_gov_certification_campaign_filter_by_id_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = NextGenerationCertificationCampaignsApi(api_client).get_gov_certification_campaign_filter_by_id_v1(id, x_sail_point_experimental)
        print("The response of NextGenerationCertificationCampaignsApi->get_gov_certification_campaign_filter_by_id_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->get_gov_certification_campaign_filter_by_id_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-gov-certification-campaign-report-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Get a campaign report
Retrieves the reports for an existing campaign using the campaign's ID and report ID. Required roles are ORG_ADMIN or CERT_ADMIN or REPORT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/get-gov-certification-campaign-report-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | campaign_id | **str** | True  | The ID of the campaign to be retrieved
Path   | report_id | **str** | True  | The ID of the report to be retrieved
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**CampaignReport**](../models/campaign-report)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The report regardless of its status | CampaignReport |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.campaign_report import CampaignReport
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    campaign_id = 'e1aeb0b6-0021-4f40-8bc7-5c56533214b3' # str | The ID of the campaign to be retrieved # str | The ID of the campaign to be retrieved
    report_id = 'e1aeb0b6-0021-4f40-8bc7-5c56533214b3' # str | The ID of the report to be retrieved # str | The ID of the report to be retrieved
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get a campaign report
        
        results = NextGenerationCertificationCampaignsApi(api_client).get_gov_certification_campaign_report_v1(campaign_id=campaign_id, report_id=report_id)
        # Below is a request that includes all optional parameters
        # results = NextGenerationCertificationCampaignsApi(api_client).get_gov_certification_campaign_report_v1(campaign_id, report_id, x_sail_point_experimental)
        print("The response of NextGenerationCertificationCampaignsApi->get_gov_certification_campaign_report_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->get_gov_certification_campaign_report_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-gov-certification-campaign-template-schedule-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Get a Campaign Template Schedule
Fetches a schedule by a campaign template ID. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/get-gov-certification-campaign-template-schedule-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The campaign template's ID for the desired campaign template schedule.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Schedule**](../models/schedule)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The data for the schedule matching the given campaign template ID. | Schedule |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.schedule import Schedule
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '2c918083-5d19-1a86-a15d-28455b4a2329' # str | The campaign template's ID for the desired campaign template schedule. # str | The campaign template's ID for the desired campaign template schedule.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get a Campaign Template Schedule
        
        results = NextGenerationCertificationCampaignsApi(api_client).get_gov_certification_campaign_template_schedule_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = NextGenerationCertificationCampaignsApi(api_client).get_gov_certification_campaign_template_schedule_v1(id, x_sail_point_experimental)
        print("The response of NextGenerationCertificationCampaignsApi->get_gov_certification_campaign_template_schedule_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->get_gov_certification_campaign_template_schedule_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-gov-certification-campaign-template-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Get a Campaign Template
Fetches a campaign template by ID. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/get-gov-certification-campaign-template-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The desired campaign template's ID.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**CampaignTemplateGet**](../models/campaign-template-get)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The data for the campaign matching the given ID. | CampaignTemplateGet |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.campaign_template_get import CampaignTemplateGet
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '2c918083-5d19-1a86-a15d-28455b4a2329' # str | The desired campaign template's ID. # str | The desired campaign template's ID.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get a Campaign Template
        
        results = NextGenerationCertificationCampaignsApi(api_client).get_gov_certification_campaign_template_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = NextGenerationCertificationCampaignsApi(api_client).get_gov_certification_campaign_template_v1(id, x_sail_point_experimental)
        print("The response of NextGenerationCertificationCampaignsApi->get_gov_certification_campaign_template_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->get_gov_certification_campaign_template_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-gov-certification-campaign-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Get a campaign
Retrieves information for an existing campaign using the campaign's ID. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for the certifications under this campaign can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-gov-certification-campaign-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the campaign to be retrieved
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**CampaignGet**](../models/campaign-get)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A campaign object | CampaignGet |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.campaign_get import CampaignGet
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '2c918085-71bc-4cf8-a171-c23e4b4221fc' # str | The ID of the campaign to be retrieved # str | The ID of the campaign to be retrieved
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get a campaign
        
        results = NextGenerationCertificationCampaignsApi(api_client).get_gov_certification_campaign_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = NextGenerationCertificationCampaignsApi(api_client).get_gov_certification_campaign_v1(id, x_sail_point_experimental)
        print("The response of NextGenerationCertificationCampaignsApi->get_gov_certification_campaign_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->get_gov_certification_campaign_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-gov-certification-task-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Task details by ID
This API returns the task for the specified ID. Required roles are ORG_ADMIN or CERT_ADMIN. If the targetType is `CERTIFICATION`, then the reviewers for the specified certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-gov-certification-task-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The task ID
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**CertificationTask**](../models/certification-task)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Gives task details | CertificationTask |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.certification_task import CertificationTask
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '63b32151-26c0-42f4-9299-8898dc1c9daa' # str | The task ID # str | The task ID
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Task details by ID
        
        results = NextGenerationCertificationCampaignsApi(api_client).get_gov_certification_task_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = NextGenerationCertificationCampaignsApi(api_client).get_gov_certification_task_v1(id, x_sail_point_experimental)
        print("The response of NextGenerationCertificationCampaignsApi->get_gov_certification_task_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->get_gov_certification_task_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-pending-tasks-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
List of Pending Tasks
This API returns a list of pending (`QUEUED` or `IN_PROGRESS`) certification related tasks. Any authenticated token can call this API, but only tasks you are authorized to review will be returned. Non-admin users must include query parameter as `reviewer-identity=me` in the API call.

[API Spec](https://developer.sailpoint.com/docs/api/get-pending-tasks-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.
  Query | reviewer_identity | **str** |   (optional) | The ID of reviewer identity. *me* indicates the current user.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **targetId**: *eq, in*  **type**: *eq, in*

### Return type
[**List[CertificationTask]**](../models/certification-task)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A list of pending tasks | List[CertificationTask] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.certification_task import CertificationTask
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')
    reviewer_identity = 'Ada.1de82e55078344' # str | The ID of reviewer identity. *me* indicates the current user. (optional) # str | The ID of reviewer identity. *me* indicates the current user. (optional)
    limit = 250 # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'type eq \"REASSIGN_SUBJECTS_AND_ITEMS\"' # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **targetId**: *eq, in*  **type**: *eq, in* (optional) # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **targetId**: *eq, in*  **type**: *eq, in* (optional)

    try:
        # List of Pending Tasks
        
        results = NextGenerationCertificationCampaignsApi(api_client).get_pending_tasks_v1()
        # Below is a request that includes all optional parameters
        # results = NextGenerationCertificationCampaignsApi(api_client).get_pending_tasks_v1(x_sail_point_experimental, reviewer_identity, limit, offset, count, filters)
        print("The response of NextGenerationCertificationCampaignsApi->get_pending_tasks_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->get_pending_tasks_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-status-summary-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Status Summary For Certifications
Return the status summary for certifications owned by the logged in user. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-status-summary-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**CertificationStatusSummary**](../models/certification-status-summary)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Status Summary of the active certifications owned by the logged in user | CertificationStatusSummary |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.certification_status_summary import CertificationStatusSummary
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Status Summary For Certifications
        
        results = NextGenerationCertificationCampaignsApi(api_client).get_status_summary_v1()
        # Below is a request that includes all optional parameters
        # results = NextGenerationCertificationCampaignsApi(api_client).get_status_summary_v1(x_sail_point_experimental)
        print("The response of NextGenerationCertificationCampaignsApi->get_status_summary_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->get_status_summary_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-subject-summary-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Summary for a Certification Subject
This API returns the summary for a subject on a specified certification. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-subject-summary-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | certification_id | **str** | True  | The certification ID
Path   | subject_id | **str** | True  | The subject summary ID
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**CertificationSubjectSummary**](../models/certification-subject-summary)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The certification subject summary | CertificationSubjectSummary |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.certification_subject_summary import CertificationSubjectSummary
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    certification_id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The certification ID # str | The certification ID
    subject_id = '2c918087-72a5-44f5-a172-a9540e501ba8' # str | The subject summary ID # str | The subject summary ID
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Summary for a Certification Subject
        
        results = NextGenerationCertificationCampaignsApi(api_client).get_subject_summary_v1(certification_id=certification_id, subject_id=subject_id)
        # Below is a request that includes all optional parameters
        # results = NextGenerationCertificationCampaignsApi(api_client).get_subject_summary_v1(certification_id, subject_id, x_sail_point_experimental)
        print("The response of NextGenerationCertificationCampaignsApi->get_subject_summary_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->get_subject_summary_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-campaign-templates-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
List Campaign Templates
Lists all campaign templates matching the supplied standard V3 query parameters. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/list-campaign-templates-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified**
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in, gt, ge, lt, le, sw, co*  **name**: *eq, ne, in, gt, ge, lt, le, sw, co*

### Return type
[**List[CampaignTemplateGet]**](../models/campaign-template-get)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of campaign template objects | List[CampaignTemplateGet] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.campaign_template_get import CampaignTemplateGet
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')
    limit = 250 # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False)
    sorters = 'name' # str | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional) # str | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional)
    filters = 'name eq \"Campaign Template\"' # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in, gt, ge, lt, le, sw, co*  **name**: *eq, ne, in, gt, ge, lt, le, sw, co* (optional) # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in, gt, ge, lt, le, sw, co*  **name**: *eq, ne, in, gt, ge, lt, le, sw, co* (optional)

    try:
        # List Campaign Templates
        
        results = NextGenerationCertificationCampaignsApi(api_client).list_campaign_templates_v1()
        # Below is a request that includes all optional parameters
        # results = NextGenerationCertificationCampaignsApi(api_client).list_campaign_templates_v1(x_sail_point_experimental, limit, offset, count, sorters, filters)
        print("The response of NextGenerationCertificationCampaignsApi->list_campaign_templates_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->list_campaign_templates_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-campaigns-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
List the campaigns
List all the campaign details. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/list-campaigns-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw, co*  **status**: *eq, in, ne*  Possible values are [PENDING, STAGED, CANCELING, ACTIVATING, ACTIVE, COMPLETING, COMPLETED, ERROR]
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified, deadline, status, totalCertifications, completedCertifications**

### Return type
[**List[CampaignSummary]**](../models/campaign-summary)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The list of all the campaign details. | List[CampaignSummary] |  * X-Total-Count - Total number of items, regardless of paging limits.  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.campaign_summary import CampaignSummary
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')
    limit = 250 # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'name eq \"Manager Campaign\"' # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw, co*  **status**: *eq, in, ne*  Possible values are [PENDING, STAGED, CANCELING, ACTIVATING, ACTIVE, COMPLETING, COMPLETED, ERROR] (optional) # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw, co*  **status**: *eq, in, ne*  Possible values are [PENDING, STAGED, CANCELING, ACTIVATING, ACTIVE, COMPLETING, COMPLETED, ERROR] (optional)
    sorters = 'name,-created' # str | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified, deadline, status, totalCertifications, completedCertifications** (optional) # str | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified, deadline, status, totalCertifications, completedCertifications** (optional)

    try:
        # List the campaigns
        
        results = NextGenerationCertificationCampaignsApi(api_client).list_campaigns_v1()
        # Below is a request that includes all optional parameters
        # results = NextGenerationCertificationCampaignsApi(api_client).list_campaigns_v1(x_sail_point_experimental, limit, offset, count, filters, sorters)
        print("The response of NextGenerationCertificationCampaignsApi->list_campaigns_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->list_campaigns_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-certifications-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
List Certifications
This API returns a list of certifications that satisfy the given query parameters. Any authenticated token can call this API, but only certifications you are authorized to review will be returned. Non-admin users must include query parameter as `?reviewer-identity=me` in the API call.

[API Spec](https://developer.sailpoint.com/docs/api/list-certifications-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.
  Query | reviewer_identity | **str** |   (optional) | The ID of reviewer identity. *me* indicates the current user.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **phase**: *eq*  **completed**: *eq*  **campaignRef.campaignType**: *eq, in*  **campaignRef.id**: *eq, in*  **reviewProgress**: *eq, in*  **reviewerDeleted**: *eq*  **reviewerName**: *sw, co*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, dueDate, dateSigned**

### Return type
[**List[Certification]**](../models/certification)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of certifications | List[Certification] |  * X-Total-Count - Total number of items, regardless of paging limits.  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.certification import Certification
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')
    reviewer_identity = 'me' # str | The ID of reviewer identity. *me* indicates the current user. (optional) # str | The ID of reviewer identity. *me* indicates the current user. (optional)
    limit = 250 # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'name eq \"Bob\"' # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **phase**: *eq*  **completed**: *eq*  **campaignRef.campaignType**: *eq, in*  **campaignRef.id**: *eq, in*  **reviewProgress**: *eq, in*  **reviewerDeleted**: *eq*  **reviewerName**: *sw, co* (optional) # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **phase**: *eq*  **completed**: *eq*  **campaignRef.campaignType**: *eq, in*  **campaignRef.id**: *eq, in*  **reviewProgress**: *eq, in*  **reviewerDeleted**: *eq*  **reviewerName**: *sw, co* (optional)
    sorters = 'name' # str | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, dueDate, dateSigned** (optional) # str | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, dueDate, dateSigned** (optional)

    try:
        # List Certifications
        
        results = NextGenerationCertificationCampaignsApi(api_client).list_certifications_v1()
        # Below is a request that includes all optional parameters
        # results = NextGenerationCertificationCampaignsApi(api_client).list_certifications_v1(x_sail_point_experimental, reviewer_identity, limit, offset, count, filters, sorters)
        print("The response of NextGenerationCertificationCampaignsApi->list_certifications_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->list_certifications_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-gov-certification-campaign-filters-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
List Campaign Filters
Lists all Campaign Filters. Scope can be reduced via standard V3 query params.
All Campaign Filters matching the query params. Required roles are ORG_ADMIN or CERT_ADMIN

[API Spec](https://developer.sailpoint.com/docs/api/list-gov-certification-campaign-filters-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.

### Return type
[**List[CampaignFilterGet]**](../models/campaign-filter-get)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of campaign filter objects | List[CampaignFilterGet] |  * X-Total-Count - Total number of items, regardless of paging limits.  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.campaign_filter_get import CampaignFilterGet
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')
    limit = 250 # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False)

    try:
        # List Campaign Filters
        
        results = NextGenerationCertificationCampaignsApi(api_client).list_gov_certification_campaign_filters_v1()
        # Below is a request that includes all optional parameters
        # results = NextGenerationCertificationCampaignsApi(api_client).list_gov_certification_campaign_filters_v1(x_sail_point_experimental, limit, offset, count)
        print("The response of NextGenerationCertificationCampaignsApi->list_gov_certification_campaign_filters_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->list_gov_certification_campaign_filters_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-gov-certification-reviewers-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
List of Reviewers for certification
This API returns a list of reviewers for the certification. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/list-gov-certification-reviewers-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | certification_id | **str** | True  | The certification ID
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw, co*  **email**: *eq, sw, co*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, email**

### Return type
[**List[IdentityReference]**](../models/identity-reference)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A list of reviewers | List[IdentityReference] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.identity_reference import IdentityReference
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    certification_id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The certification ID # str | The certification ID
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')
    limit = 250 # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'name eq \"Bob\"' # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw, co*  **email**: *eq, sw, co* (optional) # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw, co*  **email**: *eq, sw, co* (optional)
    sorters = 'name' # str | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, email** (optional) # str | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, email** (optional)

    try:
        # List of Reviewers for certification
        
        results = NextGenerationCertificationCampaignsApi(api_client).list_gov_certification_reviewers_v1(certification_id=certification_id)
        # Below is a request that includes all optional parameters
        # results = NextGenerationCertificationCampaignsApi(api_client).list_gov_certification_reviewers_v1(certification_id, x_sail_point_experimental, limit, offset, count, filters, sorters)
        print("The response of NextGenerationCertificationCampaignsApi->list_gov_certification_reviewers_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->list_gov_certification_reviewers_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-reports-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
List reports for a campaign
Retrieves all reports for an existing campaign using the campaign's ID. Required roles are ORG_ADMIN or CERT_ADMIN or REPORT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/list-reports-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | campaign_id | **str** | True  | The ID of the campaign to be retrieved
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in*  **name**: *eq, sw, co*  **type**: *eq, in, ne*  Possible values are [STATUS, SIGN_OFF, COMPOSITION, REMEDIATION]  **format**: *eq, in, ne*  Possible values are [PDF, CSV]  **status**: *eq, in, ne*  Possible values are [IN_PROGRESS, FAILED, SUCCESS]
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, type, format, created, modified**

### Return type
[**List[CampaignReport]**](../models/campaign-report)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A list of all reports, regardless of status, for the given campaign | List[CampaignReport] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.campaign_report import CampaignReport
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    campaign_id = 'e1aeb0b6-0021-4f40-8bc7-5c56533214b3' # str | The ID of the campaign to be retrieved # str | The ID of the campaign to be retrieved
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')
    limit = 250 # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'type eq \"SIGN_OFF\"' # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in*  **name**: *eq, sw, co*  **type**: *eq, in, ne*  Possible values are [STATUS, SIGN_OFF, COMPOSITION, REMEDIATION]  **format**: *eq, in, ne*  Possible values are [PDF, CSV]  **status**: *eq, in, ne*  Possible values are [IN_PROGRESS, FAILED, SUCCESS] (optional) # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in*  **name**: *eq, sw, co*  **type**: *eq, in, ne*  Possible values are [STATUS, SIGN_OFF, COMPOSITION, REMEDIATION]  **format**: *eq, in, ne*  Possible values are [PDF, CSV]  **status**: *eq, in, ne*  Possible values are [IN_PROGRESS, FAILED, SUCCESS] (optional)
    sorters = 'name,-created' # str | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, type, format, created, modified** (optional) # str | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, type, format, created, modified** (optional)

    try:
        # List reports for a campaign
        
        results = NextGenerationCertificationCampaignsApi(api_client).list_reports_v1(campaign_id=campaign_id)
        # Below is a request that includes all optional parameters
        # results = NextGenerationCertificationCampaignsApi(api_client).list_reports_v1(campaign_id, x_sail_point_experimental, limit, offset, count, filters, sorters)
        print("The response of NextGenerationCertificationCampaignsApi->list_reports_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->list_reports_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-review-items-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
List of Review Items
This API returns a list of review items for an identity campaign certification. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/list-review-items-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | certification_id | **str** | True  | The certification ID
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in*  **completed**: *eq, ne*  **certificationSubjectSummary.id**: *eq, ne, in*  **certificationSubjectSummary.subjectName**: *eq, sw, co*  **certificationSubjectSummary.subjectManagerName**: *eq, sw, co*  **certificationSubjectSummary.subjectEmail**: *eq, sw, co*  **certificationSubjectSummary.identityState**: *eq, in, ne*  **reviewData.targetReference.id**: *eq, ne, in*  **reviewData.targetReference.name**: *eq, sw, co*  **reviewData.targetReference.type**: *eq*  **reviewData.entitlement.provisioningType**: *eq, ne, in*  **sourceName**: *eq, sw, co*  **accountName**: *eq, sw, co*  **reauthRequired**: *eq, ne*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **certificationSubjectSummary.subjectName, certificationSubjectSummary.subjectManagerName, reviewData.targetReference.id, reviewData.targetReference.name, sourceName, accountName**
  Query | activity_data | **bool** |   (optional) (default to False) | If set to true, the response will include HTTP header \"SLPT-Activity-Data-ID\" which will allow the caller to query for certification items activity data in a separate call.

### Return type
[**List[ReviewItem]**](../models/review-item)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A list of review items | List[ReviewItem] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.review_item import ReviewItem
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    certification_id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The certification ID # str | The certification ID
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')
    limit = 250 # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'id eq \"ef38f943-47e9-4562-b5bb-8424a56397d8\"' # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in*  **completed**: *eq, ne*  **certificationSubjectSummary.id**: *eq, ne, in*  **certificationSubjectSummary.subjectName**: *eq, sw, co*  **certificationSubjectSummary.subjectManagerName**: *eq, sw, co*  **certificationSubjectSummary.subjectEmail**: *eq, sw, co*  **certificationSubjectSummary.identityState**: *eq, in, ne*  **reviewData.targetReference.id**: *eq, ne, in*  **reviewData.targetReference.name**: *eq, sw, co*  **reviewData.targetReference.type**: *eq*  **reviewData.entitlement.provisioningType**: *eq, ne, in*  **sourceName**: *eq, sw, co*  **accountName**: *eq, sw, co*  **reauthRequired**: *eq, ne* (optional) # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in*  **completed**: *eq, ne*  **certificationSubjectSummary.id**: *eq, ne, in*  **certificationSubjectSummary.subjectName**: *eq, sw, co*  **certificationSubjectSummary.subjectManagerName**: *eq, sw, co*  **certificationSubjectSummary.subjectEmail**: *eq, sw, co*  **certificationSubjectSummary.identityState**: *eq, in, ne*  **reviewData.targetReference.id**: *eq, ne, in*  **reviewData.targetReference.name**: *eq, sw, co*  **reviewData.targetReference.type**: *eq*  **reviewData.entitlement.provisioningType**: *eq, ne, in*  **sourceName**: *eq, sw, co*  **accountName**: *eq, sw, co*  **reauthRequired**: *eq, ne* (optional)
    sorters = 'certificationSubjectSummary.subjectName' # str | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **certificationSubjectSummary.subjectName, certificationSubjectSummary.subjectManagerName, reviewData.targetReference.id, reviewData.targetReference.name, sourceName, accountName** (optional) # str | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **certificationSubjectSummary.subjectName, certificationSubjectSummary.subjectManagerName, reviewData.targetReference.id, reviewData.targetReference.name, sourceName, accountName** (optional)
    activity_data = False # bool | If set to true, the response will include HTTP header \"SLPT-Activity-Data-ID\" which will allow the caller to query for certification items activity data in a separate call. (optional) (default to False) # bool | If set to true, the response will include HTTP header \"SLPT-Activity-Data-ID\" which will allow the caller to query for certification items activity data in a separate call. (optional) (default to False)

    try:
        # List of Review Items
        
        results = NextGenerationCertificationCampaignsApi(api_client).list_review_items_v1(certification_id=certification_id)
        # Below is a request that includes all optional parameters
        # results = NextGenerationCertificationCampaignsApi(api_client).list_review_items_v1(certification_id, x_sail_point_experimental, limit, offset, count, filters, sorters, activity_data)
        print("The response of NextGenerationCertificationCampaignsApi->list_review_items_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->list_review_items_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-subject-summaries-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Subject Summaries for a Certification
This API returns a list of the subject summaries for a specific certification. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/list-subject-summaries-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | certification_id | **str** | True  | The certification ID
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **targetId**: *eq, ne, in*  **completed**: *eq, ne*  **subjectName**: *eq, sw, co*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **subjectName, targetDisplayName**

### Return type
[**List[CertificationSubjectSummary]**](../models/certification-subject-summary)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of certification subject summaries | List[CertificationSubjectSummary] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.certification_subject_summary import CertificationSubjectSummary
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    certification_id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The certification ID # str | The certification ID
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')
    limit = 250 # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'completed eq false and subjectName sw \'Derek\'' # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **targetId**: *eq, ne, in*  **completed**: *eq, ne*  **subjectName**: *eq, sw, co* (optional) # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **targetId**: *eq, ne, in*  **completed**: *eq, ne*  **subjectName**: *eq, sw, co* (optional)
    sorters = 'subjectName' # str | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **subjectName, targetDisplayName** (optional) # str | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **subjectName, targetDisplayName** (optional)

    try:
        # Subject Summaries for a Certification
        
        results = NextGenerationCertificationCampaignsApi(api_client).list_subject_summaries_v1(certification_id=certification_id)
        # Below is a request that includes all optional parameters
        # results = NextGenerationCertificationCampaignsApi(api_client).list_subject_summaries_v1(certification_id, x_sail_point_experimental, limit, offset, count, filters, sorters)
        print("The response of NextGenerationCertificationCampaignsApi->list_subject_summaries_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->list_subject_summaries_v1: %s\n" % e)
```



[[Back to top]](#) 

## move-certifications-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Reassign certifications to an identity
This API reassigns the specified certifications from one identity to another. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/move-certifications-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | campaign_id | **str** | True  | The certification campaign ID.
 Body  | reassign_certifications | [**ReassignCertifications**](../models/reassign-certifications) | True  | A non-empty array of items and identities which reviewer is going to reassign.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**CertificationTask**](../models/certification-task)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | A task tracking the asynchronous certification reassignment. | CertificationTask |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.certification_task import CertificationTask
from sailpoint.gov_certification.models.reassign_certifications import ReassignCertifications
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    campaign_id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The certification campaign ID. # str | The certification campaign ID.
    reassign_certifications = '''{
          "certificationIds" : [ "af385946-4779-4712-91bb-8424a563abc1", "af385946-4779-4712-91bb-8424a563abc2", "af385946-4779-4712-91bb-8424a563abc3" ],
          "reason" : "Reassigning the certifications",
          "reassignTo" : {
            "id" : "0fbe863c-063c-4c88-a35f-d7f17e8a3df5",
            "type" : "IDENTITY"
          }
        }''' # ReassignCertifications | A non-empty array of items and identities which reviewer is going to reassign.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Reassign certifications to an identity
        new_reassign_certifications = ReassignCertifications.from_json(reassign_certifications)
        results = NextGenerationCertificationCampaignsApi(api_client).move_certifications_v1(campaign_id=campaign_id, reassign_certifications=new_reassign_certifications)
        # Below is a request that includes all optional parameters
        # results = NextGenerationCertificationCampaignsApi(api_client).move_certifications_v1(campaign_id, new_reassign_certifications, x_sail_point_experimental)
        print("The response of NextGenerationCertificationCampaignsApi->move_certifications_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->move_certifications_v1: %s\n" % e)
```



[[Back to top]](#) 

## move-subject-and-items-async-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Reassign certification items asynchronously
This API reassigns subjects or items in an identity campaign certification to another reviewer. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/move-subject-and-items-async-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | certification_id | **str** | True  | The ID of the certification which we are going to reassign.
 Body  | reassign_reference | [**ReassignReference**](../models/reassign-reference) | True  | A non-empty array of items and identities which reviewer is going to reassign.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**CertificationTask**](../models/certification-task)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A task tracking the asynchronous certification reassignment. | CertificationTask |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.certification_task import CertificationTask
from sailpoint.gov_certification.models.reassign_reference import ReassignReference
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    certification_id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The ID of the certification which we are going to reassign. # str | The ID of the certification which we are going to reassign.
    reassign_reference = '''{
          "reason" : "Reassigning this item to the appropriate reviewer.",
          "reassignTo" : "ef38f943-47e9-4562-b5bb-8424a56397d8",
          "reassign" : [ {
            "id" : "ef38f943-47e9-4562-b5bb-8424a56397d8",
            "type" : "ITEM"
          } ]
        }''' # ReassignReference | A non-empty array of items and identities which reviewer is going to reassign.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Reassign certification items asynchronously
        new_reassign_reference = ReassignReference.from_json(reassign_reference)
        results = NextGenerationCertificationCampaignsApi(api_client).move_subject_and_items_async_v1(certification_id=certification_id, reassign_reference=new_reassign_reference)
        # Below is a request that includes all optional parameters
        # results = NextGenerationCertificationCampaignsApi(api_client).move_subject_and_items_async_v1(certification_id, new_reassign_reference, x_sail_point_experimental)
        print("The response of NextGenerationCertificationCampaignsApi->move_subject_and_items_async_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->move_subject_and_items_async_v1: %s\n" % e)
```



[[Back to top]](#) 

## move-subject-and-items-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Reassign certification subjects or items
This API reassigns subjects or items in an identity campaign certification to another reviewer. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/move-subject-and-items-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | certification_id | **str** | True  | The ID of the certification which we are going to reassign.
 Body  | reassign_reference | [**ReassignReference**](../models/reassign-reference) | True  | A non-empty array of items and identities which reviewer is going to reassign.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Certification**](../models/certification)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | An identity campaign certification object | Certification |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.certification import Certification
from sailpoint.gov_certification.models.reassign_reference import ReassignReference
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    certification_id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The ID of the certification which we are going to reassign. # str | The ID of the certification which we are going to reassign.
    reassign_reference = '''{
          "reason" : "Reassigning this item to the appropriate reviewer.",
          "reassignTo" : "ef38f943-47e9-4562-b5bb-8424a56397d8",
          "reassign" : [ {
            "id" : "ef38f943-47e9-4562-b5bb-8424a56397d8",
            "type" : "ITEM"
          } ]
        }''' # ReassignReference | A non-empty array of items and identities which reviewer is going to reassign.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Reassign certification subjects or items
        new_reassign_reference = ReassignReference.from_json(reassign_reference)
        results = NextGenerationCertificationCampaignsApi(api_client).move_subject_and_items_v1(certification_id=certification_id, reassign_reference=new_reassign_reference)
        # Below is a request that includes all optional parameters
        # results = NextGenerationCertificationCampaignsApi(api_client).move_subject_and_items_v1(certification_id, new_reassign_reference, x_sail_point_experimental)
        print("The response of NextGenerationCertificationCampaignsApi->move_subject_and_items_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->move_subject_and_items_v1: %s\n" % e)
```



[[Back to top]](#) 

## patch-campaign-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Update a campaign
Use this API to update individual fields on a certification campaign, using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/patch-campaign-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the campaign being modified.
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of campaign update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The fields that can be patched differ based on the status of the campaign.  When the campaign is in the *STAGED* status, you can patch these fields: * name * description * recommendationsEnabled * deadline * emailNotificationEnabled * autoRevokeAllowed  When the campaign is in the *ACTIVE* status, you can patch these fields: * deadline 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**CampaignGet**](../models/campaign-get)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | This response indicates that the PATCH operation succeeded, and the API returns the campaign&#39;s new representation. | CampaignGet |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.campaign_get import CampaignGet
from sailpoint.gov_certification.models.json_patch_operation import JsonPatchOperation
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | ID of the campaign being modified. # str | ID of the campaign being modified.
    json_patch_operation = '''[{"op":"replace","path":"/name","value":"This field has been updated!"},{"op":"copy","from":"/name","path":"/description"}]''' # List[JsonPatchOperation] | A list of campaign update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The fields that can be patched differ based on the status of the campaign.  When the campaign is in the *STAGED* status, you can patch these fields: * name * description * recommendationsEnabled * deadline * emailNotificationEnabled * autoRevokeAllowed  When the campaign is in the *ACTIVE* status, you can patch these fields: * deadline 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Update a campaign
        new_json_patch_operation = JsonPatchOperation.from_json(json_patch_operation)
        results = NextGenerationCertificationCampaignsApi(api_client).patch_campaign_v1(id=id, json_patch_operation=new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = NextGenerationCertificationCampaignsApi(api_client).patch_campaign_v1(id, new_json_patch_operation, x_sail_point_experimental)
        print("The response of NextGenerationCertificationCampaignsApi->patch_campaign_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->patch_campaign_v1: %s\n" % e)
```



[[Back to top]](#) 

## patch-gov-certification-campaign-template-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Update a Campaign Template
Allows updating individual fields on a campaign template using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/patch-gov-certification-campaign-template-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the campaign template being modified.
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of campaign template update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: - name - description - campaignName - campaignDescription - remediatorRef - reviewer (id and type only; name is resolved server-side) - mandatoryCommentRequirement - emailNotificationEnabled - autoRevokeAllowed - recommendationsEnabled - sunsetCommentsRequired - deadlineDuration - filterRef - searchBasedParams - sourceIds 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**CampaignTemplateGet**](../models/campaign-template-get)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Indicates the PATCH operation succeeded, and returns the template&#39;s new representation. | CampaignTemplateGet |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.campaign_template_get import CampaignTemplateGet
from sailpoint.gov_certification.models.json_patch_operation import JsonPatchOperation
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '2c918083-5d19-1a86-a15d-28455b4a2329' # str | The ID of the campaign template being modified. # str | The ID of the campaign template being modified.
    json_patch_operation = '''[sailpoint.gov_certification.JsonPatchOperation()]''' # List[JsonPatchOperation] | A list of campaign template update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: - name - description - campaignName - campaignDescription - remediatorRef - reviewer (id and type only; name is resolved server-side) - mandatoryCommentRequirement - emailNotificationEnabled - autoRevokeAllowed - recommendationsEnabled - sunsetCommentsRequired - deadlineDuration - filterRef - searchBasedParams - sourceIds 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Update a Campaign Template
        new_json_patch_operation = JsonPatchOperation.from_json(json_patch_operation)
        results = NextGenerationCertificationCampaignsApi(api_client).patch_gov_certification_campaign_template_v1(id=id, json_patch_operation=new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = NextGenerationCertificationCampaignsApi(api_client).patch_gov_certification_campaign_template_v1(id, new_json_patch_operation, x_sail_point_experimental)
        print("The response of NextGenerationCertificationCampaignsApi->patch_gov_certification_campaign_template_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->patch_gov_certification_campaign_template_v1: %s\n" % e)
```



[[Back to top]](#) 

## process-sign-off-certification-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Finalize Certification Decisions
This API finalizes all decisions made on a certification and initiates any remediations required. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/process-sign-off-certification-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | certification_id | **str** | True  | The certification ID
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Certification**](../models/certification)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A Certification object | Certification |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.certification import Certification
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    certification_id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The certification ID # str | The certification ID
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Finalize Certification Decisions
        
        results = NextGenerationCertificationCampaignsApi(api_client).process_sign_off_certification_v1(certification_id=certification_id)
        # Below is a request that includes all optional parameters
        # results = NextGenerationCertificationCampaignsApi(api_client).process_sign_off_certification_v1(certification_id, x_sail_point_experimental)
        print("The response of NextGenerationCertificationCampaignsApi->process_sign_off_certification_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->process_sign_off_certification_v1: %s\n" % e)
```



[[Back to top]](#) 

## put-campaign-filter-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Updates a Campaign Filter
Updates an existing campaign filter using the filter's ID. Required roles are ORG_ADMIN or CERT_ADMIN. The request body must not exceed 1 MiB (1,048,576 bytes); larger requests are rejected with a 400 response.

[API Spec](https://developer.sailpoint.com/docs/api/put-campaign-filter-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the campaign filter being modified.
 Body  | campaign_filter_update | [**CampaignFilterUpdate**](../models/campaign-filter-update) | True  | A campaign filter details with updated field values.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**CampaignFilterGet**](../models/campaign-filter-get)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Resource updated successfully. | CampaignFilterGet |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.campaign_filter_get import CampaignFilterGet
from sailpoint.gov_certification.models.campaign_filter_update import CampaignFilterUpdate
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = 'e9f9a139-7b84-2fd5-a658-42087040d3ac' # str | The ID of the campaign filter being modified. # str | The ID of the campaign filter being modified.
    campaign_filter_update = '''{
          "mode" : "INCLUSION",
          "name" : "Identity Attribute Campaign Filter",
          "description" : "Campaign filter to certify data based on specified property of Identity Attribute.",
          "criteriaList" : [ {
            "criteriaType" : "IDENTITY",
            "criteriaProperty" : "DISPLAY_NAME",
            "criteriaValue" : "support",
            "operation" : "EQUALS"
          } ]
        }''' # CampaignFilterUpdate | A campaign filter details with updated field values.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Updates a Campaign Filter
        new_campaign_filter_update = CampaignFilterUpdate.from_json(campaign_filter_update)
        results = NextGenerationCertificationCampaignsApi(api_client).put_campaign_filter_v1(id=id, campaign_filter_update=new_campaign_filter_update)
        # Below is a request that includes all optional parameters
        # results = NextGenerationCertificationCampaignsApi(api_client).put_campaign_filter_v1(id, new_campaign_filter_update, x_sail_point_experimental)
        print("The response of NextGenerationCertificationCampaignsApi->put_campaign_filter_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->put_campaign_filter_v1: %s\n" % e)
```



[[Back to top]](#) 

## search-campaign-templates-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Search campaign templates
This executes a full-text search for campaign templates using the provided search string. It matches any campaign templates that match the search terms in the name or description field of the Campaign Template itself, or the name and description of the campaign defined by the template. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/search-campaign-templates-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | search_request | [**SearchRequest**](../models/search-request) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified**
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in, gt, ge, lt, le, sw, co*  **name**: *eq, ne, in, gt, ge, lt, le, sw, co*

### Return type
[**List[CampaignTemplateGet]**](../models/campaign-template-get)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Search was executed with the returned matching results | List[CampaignTemplateGet] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.campaign_template_get import CampaignTemplateGet
from sailpoint.gov_certification.models.search_request import SearchRequest
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    search_request = '''{
          "queryString" : "identity 2023"
        }''' # SearchRequest | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')
    limit = 250 # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False)
    sorters = 'name' # str | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional) # str | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional)
    filters = 'name eq \"Campaign Template\"' # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in, gt, ge, lt, le, sw, co*  **name**: *eq, ne, in, gt, ge, lt, le, sw, co* (optional) # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in, gt, ge, lt, le, sw, co*  **name**: *eq, ne, in, gt, ge, lt, le, sw, co* (optional)

    try:
        # Search campaign templates
        new_search_request = SearchRequest.from_json(search_request)
        results = NextGenerationCertificationCampaignsApi(api_client).search_campaign_templates_v1(search_request=new_search_request)
        # Below is a request that includes all optional parameters
        # results = NextGenerationCertificationCampaignsApi(api_client).search_campaign_templates_v1(new_search_request, x_sail_point_experimental, limit, offset, count, sorters, filters)
        print("The response of NextGenerationCertificationCampaignsApi->search_campaign_templates_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->search_campaign_templates_v1: %s\n" % e)
```



[[Back to top]](#) 

## search-certifications-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Search Certifications
This API returns a list of certifications. It contains a request body with search parameters. Any authenticated token can call this API, but only certifications you are authorized to review will be returned. Non-admin users must include query parameter as `?reviewer-identity=me` in the API call.

[API Spec](https://developer.sailpoint.com/docs/api/search-certifications-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.
  Query | reviewer_identity | **str** |   (optional) | The ID of reviewer identity. *me* indicates the current user.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **phase**: *eq*  **completed**: *eq*  **campaignRef.campaignType**: *eq, in*  **campaignRef.id**: *eq, in*  **reviewProgress**: *eq, in*  **reviewerDeleted**: *eq*  **reviewerName**: *sw, co*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, dueDate, dateSigned**
 Body  | search_request | [**SearchRequest**](../models/search-request) |   (optional) | 

### Return type
[**List[Certification]**](../models/certification)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A List of certifications | List[Certification] |  * X-Total-Count - Total number of items, regardless of paging limits.  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.certification import Certification
from sailpoint.gov_certification.models.search_request import SearchRequest
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')
    reviewer_identity = 'me' # str | The ID of reviewer identity. *me* indicates the current user. (optional) # str | The ID of reviewer identity. *me* indicates the current user. (optional)
    limit = 250 # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'reviewerName sw \"Bob\"' # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **phase**: *eq*  **completed**: *eq*  **campaignRef.campaignType**: *eq, in*  **campaignRef.id**: *eq, in*  **reviewProgress**: *eq, in*  **reviewerDeleted**: *eq*  **reviewerName**: *sw, co* (optional) # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **phase**: *eq*  **completed**: *eq*  **campaignRef.campaignType**: *eq, in*  **campaignRef.id**: *eq, in*  **reviewProgress**: *eq, in*  **reviewerDeleted**: *eq*  **reviewerName**: *sw, co* (optional)
    sorters = 'name' # str | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, dueDate, dateSigned** (optional) # str | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, dueDate, dateSigned** (optional)
    search_request = '''{
          "queryString" : "identity 2023"
        }''' # SearchRequest |  (optional)

    try:
        # Search Certifications
        
        results = NextGenerationCertificationCampaignsApi(api_client).search_certifications_v1()
        # Below is a request that includes all optional parameters
        # results = NextGenerationCertificationCampaignsApi(api_client).search_certifications_v1(x_sail_point_experimental, reviewer_identity, limit, offset, count, filters, sorters, new_search_request)
        print("The response of NextGenerationCertificationCampaignsApi->search_certifications_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->search_certifications_v1: %s\n" % e)
```



[[Back to top]](#) 

## search-insights-access-summary-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Get Insights Access Summary
Retrieves the scoped access based on the provided InsightDetails. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/search-insights-access-summary-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | insight_details | [**InsightDetails**](../models/insight-details) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[ScopedAccess]**](../models/scoped-access)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Scoped access based on the provided InsightDetails. | List[ScopedAccess] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.insight_details import InsightDetails
from sailpoint.gov_certification.models.scoped_access import ScopedAccess
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    insight_details = '''{
          "campaignType" : "IDENTITY",
          "identityIdFilter" : [ "2c918085718230600171993742c63558" ],
          "query" : "admin",
          "type" : "ENTITLEMENT"
        }''' # InsightDetails | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get Insights Access Summary
        new_insight_details = InsightDetails.from_json(insight_details)
        results = NextGenerationCertificationCampaignsApi(api_client).search_insights_access_summary_v1(insight_details=new_insight_details)
        # Below is a request that includes all optional parameters
        # results = NextGenerationCertificationCampaignsApi(api_client).search_insights_access_summary_v1(new_insight_details, x_sail_point_experimental)
        print("The response of NextGenerationCertificationCampaignsApi->search_insights_access_summary_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->search_insights_access_summary_v1: %s\n" % e)
```



[[Back to top]](#) 

## search-review-items-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Search certification review items
This API returns a list of review items for an identity campaign certification. It contains a request body with search parameters. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/search-review-items-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | certification_id | **str** | True  | The certification ID
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in*  **completed**: *eq, ne*  **certificationSubjectSummary.id**: *eq, ne, in*  **certificationSubjectSummary.subjectName**: *eq, sw, co*  **certificationSubjectSummary.subjectManagerName**: *eq, sw, co*  **certificationSubjectSummary.subjectEmail**: *eq, sw, co*  **certificationSubjectSummary.identityState**: *eq, in, ne*  **reviewData.targetReference.id**: *eq, ne, in*  **reviewData.targetReference.name**: *eq, sw, co*  **reviewData.targetReference.type**: *eq*  **reviewData.entitlement.provisioningType**: *eq, ne, in*  **sourceName**: *eq, sw, co*  **accountName**: *eq, sw, co*  **reauthRequired**: *eq, ne*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **certificationSubjectSummary.subjectName, certificationSubjectSummary.subjectManagerName, reviewData.targetReference.id, reviewData.targetReference.name, sourceName, accountName**
  Query | activity_data | **bool** |   (optional) (default to False) | If set to true, the response will include HTTP header \"SLPT-Activity-Data-ID\" which will allow the caller to query for certification items activity data in a separate call.
 Body  | search_request | [**SearchRequest**](../models/search-request) |   (optional) | 

### Return type
[**List[ReviewItem]**](../models/review-item)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A list of review items | List[ReviewItem] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.review_item import ReviewItem
from sailpoint.gov_certification.models.search_request import SearchRequest
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    certification_id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The certification ID # str | The certification ID
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')
    limit = 250 # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'id eq \"ef38f943-47e9-4562-b5bb-8424a56397d8\"' # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in*  **completed**: *eq, ne*  **certificationSubjectSummary.id**: *eq, ne, in*  **certificationSubjectSummary.subjectName**: *eq, sw, co*  **certificationSubjectSummary.subjectManagerName**: *eq, sw, co*  **certificationSubjectSummary.subjectEmail**: *eq, sw, co*  **certificationSubjectSummary.identityState**: *eq, in, ne*  **reviewData.targetReference.id**: *eq, ne, in*  **reviewData.targetReference.name**: *eq, sw, co*  **reviewData.targetReference.type**: *eq*  **reviewData.entitlement.provisioningType**: *eq, ne, in*  **sourceName**: *eq, sw, co*  **accountName**: *eq, sw, co*  **reauthRequired**: *eq, ne* (optional) # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in*  **completed**: *eq, ne*  **certificationSubjectSummary.id**: *eq, ne, in*  **certificationSubjectSummary.subjectName**: *eq, sw, co*  **certificationSubjectSummary.subjectManagerName**: *eq, sw, co*  **certificationSubjectSummary.subjectEmail**: *eq, sw, co*  **certificationSubjectSummary.identityState**: *eq, in, ne*  **reviewData.targetReference.id**: *eq, ne, in*  **reviewData.targetReference.name**: *eq, sw, co*  **reviewData.targetReference.type**: *eq*  **reviewData.entitlement.provisioningType**: *eq, ne, in*  **sourceName**: *eq, sw, co*  **accountName**: *eq, sw, co*  **reauthRequired**: *eq, ne* (optional)
    sorters = 'certificationSubjectSummary.subjectName' # str | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **certificationSubjectSummary.subjectName, certificationSubjectSummary.subjectManagerName, reviewData.targetReference.id, reviewData.targetReference.name, sourceName, accountName** (optional) # str | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **certificationSubjectSummary.subjectName, certificationSubjectSummary.subjectManagerName, reviewData.targetReference.id, reviewData.targetReference.name, sourceName, accountName** (optional)
    activity_data = False # bool | If set to true, the response will include HTTP header \"SLPT-Activity-Data-ID\" which will allow the caller to query for certification items activity data in a separate call. (optional) (default to False) # bool | If set to true, the response will include HTTP header \"SLPT-Activity-Data-ID\" which will allow the caller to query for certification items activity data in a separate call. (optional) (default to False)
    search_request = '''{
          "queryString" : "identity 2023"
        }''' # SearchRequest |  (optional)

    try:
        # Search certification review items
        
        results = NextGenerationCertificationCampaignsApi(api_client).search_review_items_v1(certification_id=certification_id)
        # Below is a request that includes all optional parameters
        # results = NextGenerationCertificationCampaignsApi(api_client).search_review_items_v1(certification_id, x_sail_point_experimental, limit, offset, count, filters, sorters, activity_data, new_search_request)
        print("The response of NextGenerationCertificationCampaignsApi->search_review_items_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->search_review_items_v1: %s\n" % e)
```



[[Back to top]](#) 

## search-subject-summaries-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Search certification subject summaries
This API returns a list of the subject summaries for a specific certification. It contains a request body with search parameters. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/search-subject-summaries-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | certification_id | **str** | True  | The certification ID
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **targetId**: *eq, ne, in*  **completed**: *eq, ne*  **subjectName**: *eq, sw, co*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **subjectName, targetDisplayName**
 Body  | search_request | [**SearchRequest**](../models/search-request) |   (optional) | 

### Return type
[**List[CertificationSubjectSummary]**](../models/certification-subject-summary)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of certification subject summaries | List[CertificationSubjectSummary] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.certification_subject_summary import CertificationSubjectSummary
from sailpoint.gov_certification.models.search_request import SearchRequest
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    certification_id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The certification ID # str | The certification ID
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')
    limit = 250 # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'completed eq false and subjectName sw \'Derek\'' # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **targetId**: *eq, ne, in*  **completed**: *eq, ne*  **subjectName**: *eq, sw, co* (optional) # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **targetId**: *eq, ne, in*  **completed**: *eq, ne*  **subjectName**: *eq, sw, co* (optional)
    sorters = 'subjectName' # str | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **subjectName, targetDisplayName** (optional) # str | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **subjectName, targetDisplayName** (optional)
    search_request = '''{
          "queryString" : "identity 2023"
        }''' # SearchRequest |  (optional)

    try:
        # Search certification subject summaries
        
        results = NextGenerationCertificationCampaignsApi(api_client).search_subject_summaries_v1(certification_id=certification_id)
        # Below is a request that includes all optional parameters
        # results = NextGenerationCertificationCampaignsApi(api_client).search_subject_summaries_v1(certification_id, x_sail_point_experimental, limit, offset, count, filters, sorters, new_search_request)
        print("The response of NextGenerationCertificationCampaignsApi->search_subject_summaries_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->search_subject_summaries_v1: %s\n" % e)
```



[[Back to top]](#) 

## set-or-update-campaign-template-schedule-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Set a campaign template schedule
Creates or replaces the schedule for a campaign template. Send the full schedule in the request body. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/set-or-update-campaign-template-schedule-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the campaign template whose schedule is being modified or created.
 Body  | schedule | [**Schedule**](../models/schedule) | True  | The data for the schedule for the given campaign template ID.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.schedule import Schedule
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '2c918083-5d19-1a86-a15d-28455b4a2329' # str | The ID of the campaign template whose schedule is being modified or created. # str | The ID of the campaign template whose schedule is being modified or created.
    schedule = '''{
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
        }''' # Schedule | The data for the schedule for the given campaign template ID.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Set a campaign template schedule
        new_schedule = Schedule.from_json(schedule)
        NextGenerationCertificationCampaignsApi(api_client).set_or_update_campaign_template_schedule_v1(id=id, schedule=new_schedule)
        # Below is a request that includes all optional parameters
        # NextGenerationCertificationCampaignsApi(api_client).set_or_update_campaign_template_schedule_v1(id, new_schedule, x_sail_point_experimental)
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->set_or_update_campaign_template_schedule_v1: %s\n" % e)
```



[[Back to top]](#) 

## start-gov-certification-campaign-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Activate a Campaign
Submits a job to activate the campaign with the given ID. The campaign must be staged. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/start-gov-certification-campaign-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The campaign id
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.
 Body  | activate_campaign_options | [**ActivateCampaignOptions**](../models/activate-campaign-options) |   (optional) | Optional. If the timezone is not specified, we will continue using the campaign's timezone, which was set during campaign creation. The activation time calculated from the given timezone may cause the campaign deadline time to be modified, but it will remain within the original date. The timezone must be in a valid ISO 8601 format.

### Return type
**object**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted - Returned if the request was successfully accepted into the system. | object |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.activate_campaign_options import ActivateCampaignOptions
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The campaign id # str | The campaign id
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')
    activate_campaign_options = '''{
          "timeZone" : "-05:00"
        }''' # ActivateCampaignOptions | Optional. If the timezone is not specified, we will continue using the campaign's timezone, which was set during campaign creation. The activation time calculated from the given timezone may cause the campaign deadline time to be modified, but it will remain within the original date. The timezone must be in a valid ISO 8601 format. (optional)

    try:
        # Activate a Campaign
        
        results = NextGenerationCertificationCampaignsApi(api_client).start_gov_certification_campaign_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = NextGenerationCertificationCampaignsApi(api_client).start_gov_certification_campaign_v1(id, x_sail_point_experimental, new_activate_campaign_options)
        print("The response of NextGenerationCertificationCampaignsApi->start_gov_certification_campaign_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->start_gov_certification_campaign_v1: %s\n" % e)
```



[[Back to top]](#) 

## submit-decisions-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Decide on a Certification Item
The API makes a decision to approve or revoke one or more certification items. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/submit-decisions-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | certification_id | **str** | True  | The ID of the certification on which to make decisions
 Body  | review_decision | [**[]ReviewDecision**](../models/review-decision) | True  | A non-empty array of decisions to be made.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Certification**](../models/certification)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | An identity campaign certification object | Certification |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListGovCertificationCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListGovCertificationCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.gov_certification.api.next_generation_certification_campaigns_api import NextGenerationCertificationCampaignsApi
from sailpoint.gov_certification.api_client import ApiClient
from sailpoint.gov_certification.models.certification import Certification
from sailpoint.gov_certification.models.review_decision import ReviewDecision
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    certification_id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The ID of the certification on which to make decisions # str | The ID of the certification on which to make decisions
    review_decision = '''[{"id":"ef38f94347e94562b5bb8424a56396b5","decision":"APPROVED","comments":"This user still needs access to this source."},{"id":"ef38f94347e94562b5bb8424a56397d8","decision":"APPROVED","comments":"This user still needs access to this source too."}]''' # List[ReviewDecision] | A non-empty array of decisions to be made.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Decide on a Certification Item
        new_review_decision = ReviewDecision.from_json(review_decision)
        results = NextGenerationCertificationCampaignsApi(api_client).submit_decisions_v1(certification_id=certification_id, review_decision=new_review_decision)
        # Below is a request that includes all optional parameters
        # results = NextGenerationCertificationCampaignsApi(api_client).submit_decisions_v1(certification_id, new_review_decision, x_sail_point_experimental)
        print("The response of NextGenerationCertificationCampaignsApi->submit_decisions_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NextGenerationCertificationCampaignsApi->submit_decisions_v1: %s\n" % e)
```



[[Back to top]](#) 




# NextGenerationCertificationCampaigns

# NextGenerationCertificationCampaignsService
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
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

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
Complete a Campaign
:::caution
This endpoint will run successfully for any campaigns that are **past due**.
This endpoint will return a bad request error if the campaign is **not past due**.
:::
Completes a certification campaign. This is provided to admins so that they can complete a certification even if all items have not been completed. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/complete-gov-certification-campaign-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CompleteGovCertificationCampaignV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The campaign id |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**completeCampaignOptions** | `CompleteCampaignOptions` | Optional. Default behavior is for the campaign to auto-approve upon completion, unless we specify explicitly REVOKE in autoCompleteAction | [optional]

### Return type

`Observable<object>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';
import { CompleteCampaignOptions } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  completeGovCertificationCampaignV1(): void {
    const id: string = ; // The campaign id
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    const completeCampaignOptions: CompleteCampaignOptions = ; // Optional. Default behavior is for the campaign to auto-approve upon completion, unless we specify explicitly REVOKE in autoCompleteAction (optional)
    this.api.completeGovCertificationCampaignV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## create-campaign-from-template-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Generate campaign from template
Generates a new campaign from a campaign template.
The campaign object contained in the template has special formatting applied to its name and description fields in order to determine the generated campaign's name/description. Placeholders in those fields are formatted with the current date and time upon generation.
Placeholders consist of a percent sign followed by a letter indicating what should be inserted; for example, "%Y" will insert the current year; a campaign template named "Campaign for %y" would generate a campaign called "Campaign for 2020" (assuming the year at generation time is 2020).
Valid placeholders are the date/time conversion suffix characters supported by [java.util.Formatter](https://docs.oracle.com/javase/8/docs/api/java/util/Formatter.html).
Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/create-campaign-from-template-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateCampaignFromTemplateV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The desired campaign template\&#39;s ID. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<CampaignGet>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  createCampaignFromTemplateV1(): void {
    const id: string = ; // The desired campaign template\&#39;s ID.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.createCampaignFromTemplateV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## create-gov-certification-campaign-filter-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create a Campaign Filter
Create a campaign filter based on filter details and criteria. Required roles are ORG_ADMIN or CERT_ADMIN. The request body must not exceed 1 MiB (1,048,576 bytes); larger requests are rejected with a 400 response.

[API Spec](https://developer.sailpoint.com/docs/api/create-gov-certification-campaign-filter-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateGovCertificationCampaignFilterV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**campaignFilterCreate** | `CampaignFilterCreate` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<CampaignFilterGet>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';
import { CampaignFilterCreate } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  createGovCertificationCampaignFilterV1(): void {
    const campaignFilterCreate: CampaignFilterCreate = ; // 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.createGovCertificationCampaignFilterV1({ campaignFilterCreate: campaignFilterCreate }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## create-gov-certification-campaign-template-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create a Campaign Template.
Creates campaign template based on campaign. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/create-gov-certification-campaign-template-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateGovCertificationCampaignTemplateV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**campaignTemplateCreate** | `CampaignTemplateCreate` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<CampaignTemplateGet>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';
import { CampaignTemplateCreate } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  createGovCertificationCampaignTemplateV1(): void {
    const campaignTemplateCreate: CampaignTemplateCreate = ; // 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.createGovCertificationCampaignTemplateV1({ campaignTemplateCreate: campaignTemplateCreate }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## create-gov-certification-campaign-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create a campaign
Creates a new Certification Campaign with the information provided in the request body. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/create-gov-certification-campaign-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateGovCertificationCampaignV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**campaignCreate** | `CampaignCreate` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<CampaignGet>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';
import { CampaignCreate } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  createGovCertificationCampaignV1(): void {
    const campaignCreate: CampaignCreate = ; // 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.createGovCertificationCampaignV1({ campaignCreate: campaignCreate }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## create-report-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create campaign report
Creates a new campaign report asynchronously for the provided campaignId. Required roles are ORG_ADMIN or CERT_ADMIN or REPORT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/create-report-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateReportV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**campaignId** | `string` | The ID of the campaign to generate a report for |  [default to undefined]
**triggerCampaignReportRequest** | `TriggerCampaignReportRequest` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<CampaignReport>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';
import { TriggerCampaignReportRequest } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  createReportV1(): void {
    const campaignId: string = ; // The ID of the campaign to generate a report for
    const triggerCampaignReportRequest: TriggerCampaignReportRequest = ; // 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.createReportV1({ campaignId: campaignId, triggerCampaignReportRequest: triggerCampaignReportRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-gov-certification-campaign-filters-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Deletes Campaign Filters
Deletes campaign filters whose IDs are specified in the provided list of campaign filter IDs. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/delete-gov-certification-campaign-filters-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteGovCertificationCampaignFiltersV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**requestBody** | `Array<string>` | A JSON list of IDs of campaign filters to delete. | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  deleteGovCertificationCampaignFiltersV1(): void {
    const requestBody: Array<string> = ; // A JSON list of IDs of campaign filters to delete.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.deleteGovCertificationCampaignFiltersV1({ requestBody: requestBody }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-gov-certification-campaign-template-schedule-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete a Campaign Template Schedule
Deletes a schedule by campaign template ID. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/delete-gov-certification-campaign-template-schedule-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteGovCertificationCampaignTemplateScheduleV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the campaign template whose schedule is being deleted. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  deleteGovCertificationCampaignTemplateScheduleV1(): void {
    const id: string = ; // The ID of the campaign template whose schedule is being deleted.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.deleteGovCertificationCampaignTemplateScheduleV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-gov-certification-campaign-template-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete a Campaign Template
Deletes a campaign template by ID. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/delete-gov-certification-campaign-template-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteGovCertificationCampaignTemplateV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the campaign template being deleted. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  deleteGovCertificationCampaignTemplateV1(): void {
    const id: string = ; // The ID of the campaign template being deleted.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.deleteGovCertificationCampaignTemplateV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-gov-certification-campaigns-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete Campaigns
Use this API to delete certification campaigns whose IDs are specified in the provided list of campaign IDs. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/delete-gov-certification-campaigns-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteGovCertificationCampaignsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**campaignsDeleteRequest** | `CampaignsDeleteRequest` | IDs of the campaigns to delete. | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<object>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';
import { CampaignsDeleteRequest } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  deleteGovCertificationCampaignsV1(): void {
    const campaignsDeleteRequest: CampaignsDeleteRequest = ; // IDs of the campaigns to delete.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.deleteGovCertificationCampaignsV1({ campaignsDeleteRequest: campaignsDeleteRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-access-summaries-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Access Summaries
This API returns a list of access summaries for the specified certification and type. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-access-summaries-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetAccessSummariesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**certificationId** | `string` | The certification ID |  [default to undefined]
**type** | `CertificationItemType` | The type of review item to retrieve summaries for |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **completed**: *eq, ne*  **targetReference.id**: *eq, ne, in*  **targetReference.name**: *eq, sw, co*  **sourceName**: *eq, sw, co* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **targetReference.name** | [optional] [default to undefined]

### Return type

`Observable<Array<ReviewData>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  getAccessSummariesV1(): void {
    const certificationId: string = ; // The certification ID
    const type: CertificationItemType = ; // The type of review item to retrieve summaries for
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **completed**: *eq, ne*  **targetReference.id**: *eq, ne, in*  **targetReference.name**: *eq, sw, co*  **sourceName**: *eq, sw, co* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **targetReference.name** (optional)
    this.api.getAccessSummariesV1({ certificationId: certificationId, type: type }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-certification-entitlement-children-details-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Entitlement Children in a Certification
Returns a list of child entitlements for the provided entitlement, as long as the logged-in user is a reviewer of the specified certification, and the certification contains either the specified entitlement, or an access profile that contains the specified entitlement. ORG_ADMIN or CERT_ADMIN can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-certification-entitlement-children-details-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetCertificationEntitlementChildrenDetailsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**certificationId** | `string` | The certification ID |  [default to undefined]
**reviewItemId** | `string` | The certification item ID |  [default to undefined]
**entitlementId** | `string` | The entitlement ID |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id** | [optional] [default to undefined]

### Return type

`Observable<Array<PassThroughEntitlement>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  getCertificationEntitlementChildrenDetailsV1(): void {
    const certificationId: string = ; // The certification ID
    const reviewItemId: string = ; // The certification item ID
    const entitlementId: string = ; // The entitlement ID
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id** (optional)
    this.api.getCertificationEntitlementChildrenDetailsV1({ certificationId: certificationId, reviewItemId: reviewItemId, entitlementId: entitlementId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-certification-entitlement-details-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get Entitlement in a Certification
This API get the details for the entitlement, as long as the logged-in user is a reviewer of the specified certification, and the certification contains either the specified entitlement, or an access profile that contains the specified entitlement. ORG_ADMIN or CERT_ADMIN can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-certification-entitlement-details-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetCertificationEntitlementDetailsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**certificationId** | `string` | The certification ID |  [default to undefined]
**reviewItemId** | `string` | The certification item ID |  [default to undefined]
**entitlementId** | `string` | The entitlement ID |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<PassThroughEntitlement>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  getCertificationEntitlementDetailsV1(): void {
    const certificationId: string = ; // The certification ID
    const reviewItemId: string = ; // The certification item ID
    const entitlementId: string = ; // The entitlement ID
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getCertificationEntitlementDetailsV1({ certificationId: certificationId, reviewItemId: reviewItemId, entitlementId: entitlementId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-certification-entitlement-parents-details-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Entitlement Parents in a Certification
Returns a list of parent entitlements for the provided entitlement, as long as the logged-in user is a reviewer of the specified certification, and the certification contains either the specified entitlement, or an access profile that contains the specified entitlement. ORG_ADMIN or CERT_ADMIN can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-certification-entitlement-parents-details-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetCertificationEntitlementParentsDetailsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**certificationId** | `string` | The certification ID |  [default to undefined]
**reviewItemId** | `string` | The certification item ID |  [default to undefined]
**entitlementId** | `string` | The entitlement ID |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id** | [optional] [default to undefined]

### Return type

`Observable<Array<PassThroughEntitlement>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  getCertificationEntitlementParentsDetailsV1(): void {
    const certificationId: string = ; // The certification ID
    const reviewItemId: string = ; // The certification item ID
    const entitlementId: string = ; // The entitlement ID
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id** (optional)
    this.api.getCertificationEntitlementParentsDetailsV1({ certificationId: certificationId, reviewItemId: reviewItemId, entitlementId: entitlementId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-certification-entitlement-permissions-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Permissions in a Certification
Retrieves a list of permissions associated with the given certification itemId value, as long as the logged-in user is a reviewer of the specified certification, and the certification contains either the specified entitlement, or an access profile or the role that contains the specified entitlement. ORG_ADMIN or CERT_ADMIN can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-certification-entitlement-permissions-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetCertificationEntitlementPermissionsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**certificationId** | `string` | The certification ID |  [default to undefined]
**reviewItemId** | `string` | The certification item ID |  [default to undefined]
**entitlementId** | `string` | The entitlement ID |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]

### Return type

`Observable<Array<PermissionDTO>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  getCertificationEntitlementPermissionsV1(): void {
    const certificationId: string = ; // The certification ID
    const reviewItemId: string = ; // The certification item ID
    const entitlementId: string = ; // The entitlement ID
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    this.api.getCertificationEntitlementPermissionsV1({ certificationId: certificationId, reviewItemId: reviewItemId, entitlementId: entitlementId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-certification-item-account-details-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Certification Item Account Details
Returns account details for a certification review item. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API. It uses the Shelby Account API to fetch details.

[API Spec](https://developer.sailpoint.com/docs/api/get-certification-item-account-details-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetCertificationItemAccountDetailsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**certificationId** | `string` | The certification ID |  [default to undefined]
**reviewItemId** | `string` | The certification item ID |  [default to undefined]
**entitlementId** | `string` | The entitlement ID |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<AccountDetailsDto>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  getCertificationItemAccountDetailsV1(): void {
    const certificationId: string = ; // The certification ID
    const reviewItemId: string = ; // The certification item ID
    const entitlementId: string = ; // The entitlement ID
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getCertificationItemAccountDetailsV1({ certificationId: certificationId, reviewItemId: reviewItemId, entitlementId: entitlementId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-certification-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Certification by ID
This API returns a single certification by its ID. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-certification-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetCertificationV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**certificationId** | `string` | The certification ID |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Certification>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  getCertificationV1(): void {
    const certificationId: string = ; // The certification ID
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getCertificationV1({ certificationId: certificationId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-decision-summary-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Summary of Certification Decisions
This API returns a summary of the decisions made on a certification. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-decision-summary-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetDecisionSummaryV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**certificationId** | `string` | The certification ID |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **certificationSubjectSummary.id**: *eq, in* | [optional] [default to undefined]

### Return type

`Observable<DetailedDecisionSummary>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  getDecisionSummaryV1(): void {
    const certificationId: string = ; // The certification ID
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **certificationSubjectSummary.id**: *eq, in* (optional)
    this.api.getDecisionSummaryV1({ certificationId: certificationId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-download-url-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Download URL for campaign report
Retrieves a presigned URL to use for downloading the campaign report. Required roles are ORG_ADMIN or CERT_ADMIN or REPORT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/get-download-url-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetDownloadUrlV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**campaignId** | `string` | The ID of the campaign to be retrieved |  [default to undefined]
**reportId** | `string` | The ID of the report to be retrieved |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<CampaignReportDownloadResponse>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  getDownloadUrlV1(): void {
    const campaignId: string = ; // The ID of the campaign to be retrieved
    const reportId: string = ; // The ID of the report to be retrieved
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getDownloadUrlV1({ campaignId: campaignId, reportId: reportId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-gov-certification-access-profile-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get an Access Profile
This API returns an access profile details based on access profile id provided, as long as the logged-in user is a reviewer of the specified certification, and the certification contains either the specified access profile, or a role that contains the specified access profile. ORG_ADMIN or CERT_ADMIN can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-gov-certification-access-profile-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetGovCertificationAccessProfileV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**certificationId** | `string` | The certification ID |  [default to undefined]
**reviewItemId** | `string` | The certification item ID. This must of review item type either ROLE or ACCESS_PROFILE. |  [default to undefined]
**accessProfileId** | `string` | The Access Profile ID |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<AccessProfile2>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  getGovCertificationAccessProfileV1(): void {
    const certificationId: string = ; // The certification ID
    const reviewItemId: string = ; // The certification item ID. This must of review item type either ROLE or ACCESS_PROFILE.
    const accessProfileId: string = ; // The Access Profile ID
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getGovCertificationAccessProfileV1({ certificationId: certificationId, reviewItemId: reviewItemId, accessProfileId: accessProfileId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-gov-certification-campaign-filter-by-id-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get Campaign Filter by ID
Retrieves information for an existing campaign filter using the filter's ID. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/get-gov-certification-campaign-filter-by-id-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetGovCertificationCampaignFilterByIdV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the campaign filter to be retrieved. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<CampaignFilterGet>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  getGovCertificationCampaignFilterByIdV1(): void {
    const id: string = ; // The ID of the campaign filter to be retrieved.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getGovCertificationCampaignFilterByIdV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-gov-certification-campaign-report-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get a campaign report
Retrieves the reports for an existing campaign using the campaign's ID and report ID. Required roles are ORG_ADMIN or CERT_ADMIN or REPORT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/get-gov-certification-campaign-report-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetGovCertificationCampaignReportV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**campaignId** | `string` | The ID of the campaign to be retrieved |  [default to undefined]
**reportId** | `string` | The ID of the report to be retrieved |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<CampaignReport>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  getGovCertificationCampaignReportV1(): void {
    const campaignId: string = ; // The ID of the campaign to be retrieved
    const reportId: string = ; // The ID of the report to be retrieved
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getGovCertificationCampaignReportV1({ campaignId: campaignId, reportId: reportId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-gov-certification-campaign-template-schedule-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get a Campaign Template Schedule
Fetches a schedule by a campaign template ID. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/get-gov-certification-campaign-template-schedule-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetGovCertificationCampaignTemplateScheduleV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The campaign template\&#39;s ID for the desired campaign template schedule. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Schedule>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  getGovCertificationCampaignTemplateScheduleV1(): void {
    const id: string = ; // The campaign template\&#39;s ID for the desired campaign template schedule.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getGovCertificationCampaignTemplateScheduleV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-gov-certification-campaign-template-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get a Campaign Template
Fetches a campaign template by ID. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/get-gov-certification-campaign-template-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetGovCertificationCampaignTemplateV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The desired campaign template\&#39;s ID. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<CampaignTemplateGet>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  getGovCertificationCampaignTemplateV1(): void {
    const id: string = ; // The desired campaign template\&#39;s ID.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getGovCertificationCampaignTemplateV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-gov-certification-campaign-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get a campaign
Retrieves information for an existing campaign using the campaign's ID. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for the certifications under this campaign can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-gov-certification-campaign-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetGovCertificationCampaignV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the campaign to be retrieved |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<CampaignGet>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  getGovCertificationCampaignV1(): void {
    const id: string = ; // The ID of the campaign to be retrieved
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getGovCertificationCampaignV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-gov-certification-task-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Task details by ID
This API returns the task for the specified ID. Required roles are ORG_ADMIN or CERT_ADMIN. If the targetType is `CERTIFICATION`, then the reviewers for the specified certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-gov-certification-task-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetGovCertificationTaskV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The task ID |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<CertificationTask>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  getGovCertificationTaskV1(): void {
    const id: string = ; // The task ID
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getGovCertificationTaskV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-pending-tasks-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List of Pending Tasks
This API returns a list of pending (`QUEUED` or `IN_PROGRESS`) certification related tasks. Any authenticated token can call this API, but only tasks you are authorized to review will be returned. Non-admin users must include query parameter as `reviewer-identity=me` in the API call.

[API Spec](https://developer.sailpoint.com/docs/api/get-pending-tasks-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetPendingTasksV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**reviewerIdentity** | `string` | The ID of reviewer identity. *me* indicates the current user. | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **targetId**: *eq, in*  **type**: *eq, in* | [optional] [default to undefined]

### Return type

`Observable<Array<CertificationTask>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  getPendingTasksV1(): void {
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    const reviewerIdentity: string = ; // The ID of reviewer identity. *me* indicates the current user. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **targetId**: *eq, in*  **type**: *eq, in* (optional)
    this.api.getPendingTasksV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-status-summary-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Status Summary For Certifications
Return the status summary for certifications owned by the logged in user. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-status-summary-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetStatusSummaryV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<CertificationStatusSummary>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  getStatusSummaryV1(): void {
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getStatusSummaryV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-subject-summary-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Summary for a Certification Subject
This API returns the summary for a subject on a specified certification. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-subject-summary-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetSubjectSummaryV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**certificationId** | `string` | The certification ID |  [default to undefined]
**subjectId** | `string` | The subject summary ID |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<CertificationSubjectSummary>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  getSubjectSummaryV1(): void {
    const certificationId: string = ; // The certification ID
    const subjectId: string = ; // The subject summary ID
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getSubjectSummaryV1({ certificationId: certificationId, subjectId: subjectId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-campaign-templates-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List Campaign Templates
Lists all campaign templates matching the supplied standard V3 query parameters. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/list-campaign-templates-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListCampaignTemplatesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** | [optional] [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in, gt, ge, lt, le, sw, co*  **name**: *eq, ne, in, gt, ge, lt, le, sw, co* | [optional] [default to undefined]

### Return type

`Observable<Array<CampaignTemplateGet>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  listCampaignTemplatesV1(): void {
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in, gt, ge, lt, le, sw, co*  **name**: *eq, ne, in, gt, ge, lt, le, sw, co* (optional)
    this.api.listCampaignTemplatesV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-campaigns-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List the campaigns
List all the campaign details. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/list-campaigns-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListCampaignsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw, co*  **status**: *eq, in, ne*  Possible values are [PENDING, STAGED, CANCELING, ACTIVATING, ACTIVE, COMPLETING, COMPLETED, ERROR] | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified, deadline, status, totalCertifications, completedCertifications** | [optional] [default to undefined]

### Return type

`Observable<Array<CampaignSummary>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  listCampaignsV1(): void {
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw, co*  **status**: *eq, in, ne*  Possible values are [PENDING, STAGED, CANCELING, ACTIVATING, ACTIVE, COMPLETING, COMPLETED, ERROR] (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified, deadline, status, totalCertifications, completedCertifications** (optional)
    this.api.listCampaignsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-certifications-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List Certifications
This API returns a list of certifications that satisfy the given query parameters. Any authenticated token can call this API, but only certifications you are authorized to review will be returned. Non-admin users must include query parameter as `?reviewer-identity=me` in the API call.

[API Spec](https://developer.sailpoint.com/docs/api/list-certifications-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListCertificationsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**reviewerIdentity** | `string` | The ID of reviewer identity. *me* indicates the current user. | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **phase**: *eq*  **completed**: *eq*  **campaignRef.campaignType**: *eq, in*  **campaignRef.id**: *eq, in*  **reviewProgress**: *eq, in*  **reviewerDeleted**: *eq*  **reviewerName**: *sw, co* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, dueDate, dateSigned** | [optional] [default to undefined]

### Return type

`Observable<Array<Certification>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  listCertificationsV1(): void {
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    const reviewerIdentity: string = ; // The ID of reviewer identity. *me* indicates the current user. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **phase**: *eq*  **completed**: *eq*  **campaignRef.campaignType**: *eq, in*  **campaignRef.id**: *eq, in*  **reviewProgress**: *eq, in*  **reviewerDeleted**: *eq*  **reviewerName**: *sw, co* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, dueDate, dateSigned** (optional)
    this.api.listCertificationsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-gov-certification-campaign-filters-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List Campaign Filters
Lists all Campaign Filters. Scope can be reduced via standard V3 query params.
All Campaign Filters matching the query params. Required roles are ORG_ADMIN or CERT_ADMIN

[API Spec](https://developer.sailpoint.com/docs/api/list-gov-certification-campaign-filters-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListGovCertificationCampaignFiltersV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`Observable<Array<CampaignFilterGet>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  listGovCertificationCampaignFiltersV1(): void {
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    this.api.listGovCertificationCampaignFiltersV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-gov-certification-reviewers-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List of Reviewers for certification
This API returns a list of reviewers for the certification. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/list-gov-certification-reviewers-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListGovCertificationReviewersV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**certificationId** | `string` | The certification ID |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw, co*  **email**: *eq, sw, co* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, email** | [optional] [default to undefined]

### Return type

`Observable<Array<IdentityReference>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  listGovCertificationReviewersV1(): void {
    const certificationId: string = ; // The certification ID
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw, co*  **email**: *eq, sw, co* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, email** (optional)
    this.api.listGovCertificationReviewersV1({ certificationId: certificationId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-reports-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List reports for a campaign
Retrieves all reports for an existing campaign using the campaign's ID. Required roles are ORG_ADMIN or CERT_ADMIN or REPORT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/list-reports-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListReportsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**campaignId** | `string` | The ID of the campaign to be retrieved |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in*  **name**: *eq, sw, co*  **type**: *eq, in, ne*  Possible values are [STATUS, SIGN_OFF, COMPOSITION, REMEDIATION]  **format**: *eq, in, ne*  Possible values are [PDF, CSV]  **status**: *eq, in, ne*  Possible values are [IN_PROGRESS, FAILED, SUCCESS] | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, type, format, created, modified** | [optional] [default to undefined]

### Return type

`Observable<Array<CampaignReport>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  listReportsV1(): void {
    const campaignId: string = ; // The ID of the campaign to be retrieved
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in*  **name**: *eq, sw, co*  **type**: *eq, in, ne*  Possible values are [STATUS, SIGN_OFF, COMPOSITION, REMEDIATION]  **format**: *eq, in, ne*  Possible values are [PDF, CSV]  **status**: *eq, in, ne*  Possible values are [IN_PROGRESS, FAILED, SUCCESS] (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, type, format, created, modified** (optional)
    this.api.listReportsV1({ campaignId: campaignId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-review-items-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List of Review Items
This API returns a list of review items for an identity campaign certification. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/list-review-items-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListReviewItemsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**certificationId** | `string` | The certification ID |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in*  **completed**: *eq, ne*  **certificationSubjectSummary.id**: *eq, ne, in*  **certificationSubjectSummary.subjectName**: *eq, sw, co*  **certificationSubjectSummary.subjectManagerName**: *eq, sw, co*  **certificationSubjectSummary.subjectEmail**: *eq, sw, co*  **certificationSubjectSummary.identityState**: *eq, in, ne*  **reviewData.targetReference.id**: *eq, ne, in*  **reviewData.targetReference.name**: *eq, sw, co*  **reviewData.targetReference.type**: *eq*  **reviewData.entitlement.provisioningType**: *eq, ne, in*  **sourceName**: *eq, sw, co*  **accountName**: *eq, sw, co*  **reauthRequired**: *eq, ne* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **certificationSubjectSummary.subjectName, certificationSubjectSummary.subjectManagerName, reviewData.targetReference.id, reviewData.targetReference.name, sourceName, accountName** | [optional] [default to undefined]
**activityData** | `boolean` | If set to true, the response will include HTTP header \&quot;SLPT-Activity-Data-ID\&quot; which will allow the caller to query for certification items activity data in a separate call. | [optional] [default to false]

### Return type

`Observable<Array<ReviewItem>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  listReviewItemsV1(): void {
    const certificationId: string = ; // The certification ID
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in*  **completed**: *eq, ne*  **certificationSubjectSummary.id**: *eq, ne, in*  **certificationSubjectSummary.subjectName**: *eq, sw, co*  **certificationSubjectSummary.subjectManagerName**: *eq, sw, co*  **certificationSubjectSummary.subjectEmail**: *eq, sw, co*  **certificationSubjectSummary.identityState**: *eq, in, ne*  **reviewData.targetReference.id**: *eq, ne, in*  **reviewData.targetReference.name**: *eq, sw, co*  **reviewData.targetReference.type**: *eq*  **reviewData.entitlement.provisioningType**: *eq, ne, in*  **sourceName**: *eq, sw, co*  **accountName**: *eq, sw, co*  **reauthRequired**: *eq, ne* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **certificationSubjectSummary.subjectName, certificationSubjectSummary.subjectManagerName, reviewData.targetReference.id, reviewData.targetReference.name, sourceName, accountName** (optional)
    const activityData: boolean = ; // If set to true, the response will include HTTP header \&quot;SLPT-Activity-Data-ID\&quot; which will allow the caller to query for certification items activity data in a separate call. (optional)
    this.api.listReviewItemsV1({ certificationId: certificationId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-subject-summaries-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Subject Summaries for a Certification
This API returns a list of the subject summaries for a specific certification. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/list-subject-summaries-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListSubjectSummariesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**certificationId** | `string` | The certification ID |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **targetId**: *eq, ne, in*  **completed**: *eq, ne*  **subjectName**: *eq, sw, co* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **subjectName, targetDisplayName** | [optional] [default to undefined]

### Return type

`Observable<Array<CertificationSubjectSummary>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  listSubjectSummariesV1(): void {
    const certificationId: string = ; // The certification ID
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **targetId**: *eq, ne, in*  **completed**: *eq, ne*  **subjectName**: *eq, sw, co* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **subjectName, targetDisplayName** (optional)
    this.api.listSubjectSummariesV1({ certificationId: certificationId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## move-certifications-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Reassign certifications to an identity
This API reassigns the specified certifications from one identity to another. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/move-certifications-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `MoveCertificationsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**campaignId** | `string` | The certification campaign ID. |  [default to undefined]
**reassignCertifications** | `ReassignCertifications` | A non-empty array of items and identities which reviewer is going to reassign. | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<CertificationTask>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';
import { ReassignCertifications } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  moveCertificationsV1(): void {
    const campaignId: string = ; // The certification campaign ID.
    const reassignCertifications: ReassignCertifications = ; // A non-empty array of items and identities which reviewer is going to reassign.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.moveCertificationsV1({ campaignId: campaignId, reassignCertifications: reassignCertifications }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## move-subject-and-items-async-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Reassign certification items asynchronously
This API reassigns subjects or items in an identity campaign certification to another reviewer. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/move-subject-and-items-async-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `MoveSubjectAndItemsAsyncV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**certificationId** | `string` | The ID of the certification which we are going to reassign. |  [default to undefined]
**reassignReference** | `ReassignReference` | A non-empty array of items and identities which reviewer is going to reassign. | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<CertificationTask>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';
import { ReassignReference } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  moveSubjectAndItemsAsyncV1(): void {
    const certificationId: string = ; // The ID of the certification which we are going to reassign.
    const reassignReference: ReassignReference = ; // A non-empty array of items and identities which reviewer is going to reassign.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.moveSubjectAndItemsAsyncV1({ certificationId: certificationId, reassignReference: reassignReference }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## move-subject-and-items-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Reassign certification subjects or items
This API reassigns subjects or items in an identity campaign certification to another reviewer. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/move-subject-and-items-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `MoveSubjectAndItemsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**certificationId** | `string` | The ID of the certification which we are going to reassign. |  [default to undefined]
**reassignReference** | `ReassignReference` | A non-empty array of items and identities which reviewer is going to reassign. | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Certification>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';
import { ReassignReference } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  moveSubjectAndItemsV1(): void {
    const certificationId: string = ; // The ID of the certification which we are going to reassign.
    const reassignReference: ReassignReference = ; // A non-empty array of items and identities which reviewer is going to reassign.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.moveSubjectAndItemsV1({ certificationId: certificationId, reassignReference: reassignReference }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## patch-campaign-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update a campaign
Use this API to update individual fields on a certification campaign, using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/patch-campaign-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PatchCampaignV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the campaign being modified. |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` | A list of campaign update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The fields that can be patched differ based on the status of the campaign.  When the campaign is in the *STAGED* status, you can patch these fields: * name * description * recommendationsEnabled * deadline * emailNotificationEnabled * autoRevokeAllowed  When the campaign is in the *ACTIVE* status, you can patch these fields: * deadline  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<CampaignGet>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';
import { JsonPatchOperation } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  patchCampaignV1(): void {
    const id: string = ; // ID of the campaign being modified.
    const jsonPatchOperation: Array<JsonPatchOperation> = ; // A list of campaign update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The fields that can be patched differ based on the status of the campaign.  When the campaign is in the *STAGED* status, you can patch these fields: * name * description * recommendationsEnabled * deadline * emailNotificationEnabled * autoRevokeAllowed  When the campaign is in the *ACTIVE* status, you can patch these fields: * deadline 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.patchCampaignV1({ id: id, jsonPatchOperation: jsonPatchOperation }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## patch-gov-certification-campaign-template-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update a Campaign Template
Allows updating individual fields on a campaign template using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/patch-gov-certification-campaign-template-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PatchGovCertificationCampaignTemplateV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the campaign template being modified. |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` | A list of campaign template update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: - name - description - campaignName - campaignDescription - remediatorRef - reviewer (id and type only; name is resolved server-side) - mandatoryCommentRequirement - emailNotificationEnabled - autoRevokeAllowed - recommendationsEnabled - sunsetCommentsRequired - deadlineDuration - filterRef - searchBasedParams - sourceIds  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<CampaignTemplateGet>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';
import { JsonPatchOperation } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  patchGovCertificationCampaignTemplateV1(): void {
    const id: string = ; // The ID of the campaign template being modified.
    const jsonPatchOperation: Array<JsonPatchOperation> = ; // A list of campaign template update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: - name - description - campaignName - campaignDescription - remediatorRef - reviewer (id and type only; name is resolved server-side) - mandatoryCommentRequirement - emailNotificationEnabled - autoRevokeAllowed - recommendationsEnabled - sunsetCommentsRequired - deadlineDuration - filterRef - searchBasedParams - sourceIds 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.patchGovCertificationCampaignTemplateV1({ id: id, jsonPatchOperation: jsonPatchOperation }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## process-sign-off-certification-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Finalize Certification Decisions
This API finalizes all decisions made on a certification and initiates any remediations required. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/process-sign-off-certification-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ProcessSignOffCertificationV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**certificationId** | `string` | The certification ID |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Certification>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  processSignOffCertificationV1(): void {
    const certificationId: string = ; // The certification ID
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.processSignOffCertificationV1({ certificationId: certificationId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## put-campaign-filter-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Updates a Campaign Filter
Updates an existing campaign filter using the filter's ID. Required roles are ORG_ADMIN or CERT_ADMIN. The request body must not exceed 1 MiB (1,048,576 bytes); larger requests are rejected with a 400 response.

[API Spec](https://developer.sailpoint.com/docs/api/put-campaign-filter-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PutCampaignFilterV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the campaign filter being modified. |  [default to undefined]
**campaignFilterUpdate** | `CampaignFilterUpdate` | A campaign filter details with updated field values. | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<CampaignFilterGet>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';
import { CampaignFilterUpdate } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  putCampaignFilterV1(): void {
    const id: string = ; // The ID of the campaign filter being modified.
    const campaignFilterUpdate: CampaignFilterUpdate = ; // A campaign filter details with updated field values.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.putCampaignFilterV1({ id: id, campaignFilterUpdate: campaignFilterUpdate }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## search-campaign-templates-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Search campaign templates
This executes a full-text search for campaign templates using the provided search string. It matches any campaign templates that match the search terms in the name or description field of the Campaign Template itself, or the name and description of the campaign defined by the template. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/search-campaign-templates-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `SearchCampaignTemplatesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**searchRequest** | `SearchRequest` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** | [optional] [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in, gt, ge, lt, le, sw, co*  **name**: *eq, ne, in, gt, ge, lt, le, sw, co* | [optional] [default to undefined]

### Return type

`Observable<Array<CampaignTemplateGet>>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';
import { SearchRequest } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  searchCampaignTemplatesV1(): void {
    const searchRequest: SearchRequest = ; // 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in, gt, ge, lt, le, sw, co*  **name**: *eq, ne, in, gt, ge, lt, le, sw, co* (optional)
    this.api.searchCampaignTemplatesV1({ searchRequest: searchRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## search-certifications-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Search Certifications
This API returns a list of certifications. It contains a request body with search parameters. Any authenticated token can call this API, but only certifications you are authorized to review will be returned. Non-admin users must include query parameter as `?reviewer-identity=me` in the API call.

[API Spec](https://developer.sailpoint.com/docs/api/search-certifications-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `SearchCertificationsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**reviewerIdentity** | `string` | The ID of reviewer identity. *me* indicates the current user. | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **phase**: *eq*  **completed**: *eq*  **campaignRef.campaignType**: *eq, in*  **campaignRef.id**: *eq, in*  **reviewProgress**: *eq, in*  **reviewerDeleted**: *eq*  **reviewerName**: *sw, co* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, dueDate, dateSigned** | [optional] [default to undefined]
**searchRequest** | `SearchRequest` |  | [optional]

### Return type

`Observable<Array<Certification>>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';
import { SearchRequest } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  searchCertificationsV1(): void {
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    const reviewerIdentity: string = ; // The ID of reviewer identity. *me* indicates the current user. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **phase**: *eq*  **completed**: *eq*  **campaignRef.campaignType**: *eq, in*  **campaignRef.id**: *eq, in*  **reviewProgress**: *eq, in*  **reviewerDeleted**: *eq*  **reviewerName**: *sw, co* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, dueDate, dateSigned** (optional)
    const searchRequest: SearchRequest = ; //  (optional)
    this.api.searchCertificationsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## search-insights-access-summary-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get Insights Access Summary
Retrieves the scoped access based on the provided InsightDetails. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/search-insights-access-summary-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `SearchInsightsAccessSummaryV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**insightDetails** | `InsightDetails` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<ScopedAccess>>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';
import { InsightDetails } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  searchInsightsAccessSummaryV1(): void {
    const insightDetails: InsightDetails = ; // 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.searchInsightsAccessSummaryV1({ insightDetails: insightDetails }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## search-review-items-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Search certification review items
This API returns a list of review items for an identity campaign certification. It contains a request body with search parameters. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/search-review-items-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `SearchReviewItemsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**certificationId** | `string` | The certification ID |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in*  **completed**: *eq, ne*  **certificationSubjectSummary.id**: *eq, ne, in*  **certificationSubjectSummary.subjectName**: *eq, sw, co*  **certificationSubjectSummary.subjectManagerName**: *eq, sw, co*  **certificationSubjectSummary.subjectEmail**: *eq, sw, co*  **certificationSubjectSummary.identityState**: *eq, in, ne*  **reviewData.targetReference.id**: *eq, ne, in*  **reviewData.targetReference.name**: *eq, sw, co*  **reviewData.targetReference.type**: *eq*  **reviewData.entitlement.provisioningType**: *eq, ne, in*  **sourceName**: *eq, sw, co*  **accountName**: *eq, sw, co*  **reauthRequired**: *eq, ne* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **certificationSubjectSummary.subjectName, certificationSubjectSummary.subjectManagerName, reviewData.targetReference.id, reviewData.targetReference.name, sourceName, accountName** | [optional] [default to undefined]
**activityData** | `boolean` | If set to true, the response will include HTTP header \&quot;SLPT-Activity-Data-ID\&quot; which will allow the caller to query for certification items activity data in a separate call. | [optional] [default to false]
**searchRequest** | `SearchRequest` |  | [optional]

### Return type

`Observable<Array<ReviewItem>>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';
import { SearchRequest } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  searchReviewItemsV1(): void {
    const certificationId: string = ; // The certification ID
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in*  **completed**: *eq, ne*  **certificationSubjectSummary.id**: *eq, ne, in*  **certificationSubjectSummary.subjectName**: *eq, sw, co*  **certificationSubjectSummary.subjectManagerName**: *eq, sw, co*  **certificationSubjectSummary.subjectEmail**: *eq, sw, co*  **certificationSubjectSummary.identityState**: *eq, in, ne*  **reviewData.targetReference.id**: *eq, ne, in*  **reviewData.targetReference.name**: *eq, sw, co*  **reviewData.targetReference.type**: *eq*  **reviewData.entitlement.provisioningType**: *eq, ne, in*  **sourceName**: *eq, sw, co*  **accountName**: *eq, sw, co*  **reauthRequired**: *eq, ne* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **certificationSubjectSummary.subjectName, certificationSubjectSummary.subjectManagerName, reviewData.targetReference.id, reviewData.targetReference.name, sourceName, accountName** (optional)
    const activityData: boolean = ; // If set to true, the response will include HTTP header \&quot;SLPT-Activity-Data-ID\&quot; which will allow the caller to query for certification items activity data in a separate call. (optional)
    const searchRequest: SearchRequest = ; //  (optional)
    this.api.searchReviewItemsV1({ certificationId: certificationId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## search-subject-summaries-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Search certification subject summaries
This API returns a list of the subject summaries for a specific certification. It contains a request body with search parameters. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/search-subject-summaries-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `SearchSubjectSummariesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**certificationId** | `string` | The certification ID |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **targetId**: *eq, ne, in*  **completed**: *eq, ne*  **subjectName**: *eq, sw, co* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **subjectName, targetDisplayName** | [optional] [default to undefined]
**searchRequest** | `SearchRequest` |  | [optional]

### Return type

`Observable<Array<CertificationSubjectSummary>>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';
import { SearchRequest } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  searchSubjectSummariesV1(): void {
    const certificationId: string = ; // The certification ID
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **targetId**: *eq, ne, in*  **completed**: *eq, ne*  **subjectName**: *eq, sw, co* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **subjectName, targetDisplayName** (optional)
    const searchRequest: SearchRequest = ; //  (optional)
    this.api.searchSubjectSummariesV1({ certificationId: certificationId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## set-or-update-campaign-template-schedule-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Set a campaign template schedule
Creates or replaces the schedule for a campaign template. Send the full schedule in the request body. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/set-or-update-campaign-template-schedule-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `SetOrUpdateCampaignTemplateScheduleV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the campaign template whose schedule is being modified or created. |  [default to undefined]
**schedule** | `Schedule` | The data for the schedule for the given campaign template ID. | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';
import { Schedule } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  setOrUpdateCampaignTemplateScheduleV1(): void {
    const id: string = ; // The ID of the campaign template whose schedule is being modified or created.
    const schedule: Schedule = ; // The data for the schedule for the given campaign template ID.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.setOrUpdateCampaignTemplateScheduleV1({ id: id, schedule: schedule }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## start-gov-certification-campaign-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Activate a Campaign
Submits a job to activate the campaign with the given ID. The campaign must be staged. Required roles are ORG_ADMIN or CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/start-gov-certification-campaign-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `StartGovCertificationCampaignV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The campaign id |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**activateCampaignOptions** | `ActivateCampaignOptions` | Optional. If the timezone is not specified, we will continue using the campaign\&#39;s timezone, which was set during campaign creation. The activation time calculated from the given timezone may cause the campaign deadline time to be modified, but it will remain within the original date. The timezone must be in a valid ISO 8601 format. | [optional]

### Return type

`Observable<object>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';
import { ActivateCampaignOptions } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  startGovCertificationCampaignV1(): void {
    const id: string = ; // The campaign id
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    const activateCampaignOptions: ActivateCampaignOptions = ; // Optional. If the timezone is not specified, we will continue using the campaign\&#39;s timezone, which was set during campaign creation. The activation time calculated from the given timezone may cause the campaign deadline time to be modified, but it will remain within the original date. The timezone must be in a valid ISO 8601 format. (optional)
    this.api.startGovCertificationCampaignV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## submit-decisions-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Decide on a Certification Item
The API makes a decision to approve or revoke one or more certification items. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/submit-decisions-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `SubmitDecisionsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**certificationId** | `string` | The ID of the certification on which to make decisions |  [default to undefined]
**reviewDecision** | `Array<ReviewDecision>` | A non-empty array of decisions to be made. | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Certification>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NextGenerationCertificationCampaignsService } from '@sailpoint/angular-sdk/gov_certification';
import { ReviewDecision } from '@sailpoint/angular-sdk/gov_certification';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NextGenerationCertificationCampaignsService);

  submitDecisionsV1(): void {
    const certificationId: string = ; // The ID of the certification on which to make decisions
    const reviewDecision: Array<ReviewDecision> = ; // A non-empty array of decisions to be made.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.submitDecisionsV1({ certificationId: certificationId, reviewDecision: reviewDecision }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)


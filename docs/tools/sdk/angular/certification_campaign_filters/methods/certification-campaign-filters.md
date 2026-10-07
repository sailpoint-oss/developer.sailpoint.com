# CertificationCampaignFilters

# CertificationCampaignFiltersService
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

For example, An inclusion campaign filter is created with a source of Source 1, an operation of Equals, and an entitlement of Entitlement 1. When this filter is selected, only users who have Entitlement 1 are included in the campaign, and only Entitlement 1 is shown in the certification.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-campaign-filter-v1**](#create-campaign-filter-v1) | **POST** `/campaign-filters/v1` | Create campaign filter
[**delete-campaign-filters-v1**](#delete-campaign-filters-v1) | **POST** `/campaign-filters/v1/delete` | Deletes campaign filters
[**get-campaign-filter-by-id-v1**](#get-campaign-filter-by-id-v1) | **GET** `/campaign-filters/v1/{id}` | Get campaign filter by id
[**list-campaign-filters-v1**](#list-campaign-filters-v1) | **GET** `/campaign-filters/v1` | List campaign filters
[**update-campaign-filter-v1**](#update-campaign-filter-v1) | **POST** `/campaign-filters/v1/{id}` | Updates a campaign filter


## create-campaign-filter-v1
Create campaign filter
Use this API to create a campaign filter based on filter details and criteria.

[API Spec](https://developer.sailpoint.com/docs/api/create-campaign-filter-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateCampaignFilterV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**campaignFilterDetails** | `CampaignFilterDetails` |  | 

### Return type

`Observable<CampaignFilterDetails>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { CertificationCampaignFiltersService } from '@sailpoint/angular-sdk/certification_campaign_filters';
import { CampaignFilterDetails } from '@sailpoint/angular-sdk/certification_campaign_filters';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(CertificationCampaignFiltersService);

  createCampaignFilterV1(): void {
    const campaignFilterDetails: CampaignFilterDetails = ; // 
    this.api.createCampaignFilterV1({ campaignFilterDetails: campaignFilterDetails }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-campaign-filters-v1
Deletes campaign filters
Deletes campaign filters whose Ids are specified in the provided list of campaign filter Ids. Authorized callers must be an ORG_ADMIN or a CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/delete-campaign-filters-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteCampaignFiltersV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**requestBody** | `Array<string>` | A json list of IDs of campaign filters to delete. | 

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { CertificationCampaignFiltersService } from '@sailpoint/angular-sdk/certification_campaign_filters';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(CertificationCampaignFiltersService);

  deleteCampaignFiltersV1(): void {
    const requestBody: Array<string> = ; // A json list of IDs of campaign filters to delete.
    this.api.deleteCampaignFiltersV1({ requestBody: requestBody }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-campaign-filter-by-id-v1
Get campaign filter by id
Retrieves information for an existing campaign filter using the filter's ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-campaign-filter-by-id-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetCampaignFilterByIdV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the campaign filter to be retrieved. |  [default to undefined]

### Return type

`Observable<CampaignFilterDetails>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { CertificationCampaignFiltersService } from '@sailpoint/angular-sdk/certification_campaign_filters';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(CertificationCampaignFiltersService);

  getCampaignFilterByIdV1(): void {
    const id: string = ; // The ID of the campaign filter to be retrieved.
    this.api.getCampaignFilterByIdV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-campaign-filters-v1
List campaign filters
Use this API to list all campaign filters. You can reduce scope with standard V3 query parameters.

[API Spec](https://developer.sailpoint.com/docs/api/list-campaign-filters-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListCampaignFiltersV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**start** | `number` | Start/Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**includeSystemFilters** | `boolean` | If this is true, the API includes system filters in the count and results. Otherwise it excludes them. If no value is provided, the default is true.  | [optional] [default to true]

### Return type

`Observable<ListCampaignFiltersV1200Response>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { CertificationCampaignFiltersService } from '@sailpoint/angular-sdk/certification_campaign_filters';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(CertificationCampaignFiltersService);

  listCampaignFiltersV1(): void {
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const start: number = ; // Start/Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const includeSystemFilters: boolean = ; // If this is true, the API includes system filters in the count and results. Otherwise it excludes them. If no value is provided, the default is true.  (optional)
    this.api.listCampaignFiltersV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## update-campaign-filter-v1
Updates a campaign filter
Updates an existing campaign filter using the filter's ID.

[API Spec](https://developer.sailpoint.com/docs/api/update-campaign-filter-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `UpdateCampaignFilterV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the campaign filter being modified. |  [default to undefined]
**campaignFilterDetails** | `CampaignFilterDetails` | A campaign filter details with updated field values. | 

### Return type

`Observable<CampaignFilterDetails>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { CertificationCampaignFiltersService } from '@sailpoint/angular-sdk/certification_campaign_filters';
import { CampaignFilterDetails } from '@sailpoint/angular-sdk/certification_campaign_filters';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(CertificationCampaignFiltersService);

  updateCampaignFilterV1(): void {
    const id: string = ; // The ID of the campaign filter being modified.
    const campaignFilterDetails: CampaignFilterDetails = ; // A campaign filter details with updated field values.
    this.api.updateCampaignFilterV1({ id: id, campaignFilterDetails: campaignFilterDetails }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)


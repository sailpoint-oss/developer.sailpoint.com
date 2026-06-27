---
id: v1-certification-campaign-filters
title: CertificationCampaignFilters
pagination_label: CertificationCampaignFilters
sidebar_label: CertificationCampaignFilters
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'CertificationCampaignFilters', 'v1CertificationCampaignFilters']
slug: /tools/sdk/typescript/certification_campaign_filters/methods/certification-campaign-filters
tags: ['SDK', 'Software Development Kit', 'CertificationCampaignFilters', 'v1CertificationCampaignFilters']
---

# CertificationCampaignFiltersV1Api
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
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

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

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-campaign-filter-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**campaignfilterdetailsV1** | `CampaignfilterdetailsV1` |  | 

### Return type

`CampaignfilterdetailsV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { CertificationCampaignFiltersV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new CertificationCampaignFiltersV1Api(configuration);
const campaignfilterdetailsV1: CampaignfilterdetailsV1 = ; // 
const result = await apiInstance.createCampaignFilterV1({ campaignfilterdetailsV1: campaignfilterdetailsV1 });
console.log(result);
```

[[Back to top]](#)

## delete-campaign-filters-v1
Deletes campaign filters
Deletes campaign filters whose Ids are specified in the provided list of campaign filter Ids. Authorized callers must be an ORG_ADMIN or a CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-campaign-filters-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**requestBody** | `Array<string>` | A json list of IDs of campaign filters to delete. | 

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { CertificationCampaignFiltersV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new CertificationCampaignFiltersV1Api(configuration);
const requestBody: Array&lt;string&gt; = ; // A json list of IDs of campaign filters to delete.
const result = await apiInstance.deleteCampaignFiltersV1({ requestBody: requestBody });
console.log(result);
```

[[Back to top]](#)

## get-campaign-filter-by-id-v1
Get campaign filter by id
Retrieves information for an existing campaign filter using the filter's ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-campaign-filter-by-id-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the campaign filter to be retrieved. |  [default to undefined]

### Return type

`CampaignfilterdetailsV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { CertificationCampaignFiltersV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new CertificationCampaignFiltersV1Api(configuration);
const id: string = e9f9a1397b842fd5a65842087040d3ac; // The ID of the campaign filter to be retrieved.
const result = await apiInstance.getCampaignFilterByIdV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## list-campaign-filters-v1
List campaign filters
Use this API to list all campaign filters. You can reduce scope with standard V3 query parameters.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-campaign-filters-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**start** | `number` | Start/Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**includeSystemFilters** | `boolean` | If this is true, the API includes system filters in the count and results. Otherwise it excludes them. If no value is provided, the default is true.  | [optional] [default to true]

### Return type

`ListCampaignFiltersV1200ResponseV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { CertificationCampaignFiltersV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new CertificationCampaignFiltersV1Api(configuration);
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const start: number = 0; // Start/Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const includeSystemFilters: boolean = true; // If this is true, the API includes system filters in the count and results. Otherwise it excludes them. If no value is provided, the default is true.  (optional)
const result = await apiInstance.listCampaignFiltersV1({  });
console.log(result);
```

[[Back to top]](#)

## update-campaign-filter-v1
Updates a campaign filter
Updates an existing campaign filter using the filter's ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-campaign-filter-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the campaign filter being modified. |  [default to undefined]
**campaignfilterdetailsV1** | `CampaignfilterdetailsV1` | A campaign filter details with updated field values. | 

### Return type

`CampaignfilterdetailsV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { CertificationCampaignFiltersV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new CertificationCampaignFiltersV1Api(configuration);
const id: string = e9f9a1397b842fd5a65842087040d3ac; // The ID of the campaign filter being modified.
const campaignfilterdetailsV1: CampaignfilterdetailsV1 = ; // A campaign filter details with updated field values.
const result = await apiInstance.updateCampaignFilterV1({ id: id, campaignfilterdetailsV1: campaignfilterdetailsV1 });
console.log(result);
```

[[Back to top]](#)


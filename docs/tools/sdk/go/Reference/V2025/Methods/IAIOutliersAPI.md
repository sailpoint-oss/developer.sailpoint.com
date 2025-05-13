---
id: v2025-iai-outliers
title: IAIOutliers
pagination_label: IAIOutliers
sidebar_label: IAIOutliers
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IAIOutliers', 'V2025IAIOutliers'] 
slug: /tools/sdk/go/v2025/methods/iai-outliers
tags: ['SDK', 'Software Development Kit', 'IAIOutliers', 'V2025IAIOutliers']
---

# IAIOutliersAPI
   
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**export-outliers-zip**](#export-outliers-zip) | **Get** `/outliers/export` | IAI Identity Outliers Export
[**get-identity-outlier-snapshots**](#get-identity-outlier-snapshots) | **Get** `/outlier-summaries` | IAI Identity Outliers Summary
[**get-identity-outliers**](#get-identity-outliers) | **Get** `/outliers` | IAI Get Identity Outliers
[**get-latest-identity-outlier-snapshots**](#get-latest-identity-outlier-snapshots) | **Get** `/outlier-summaries/latest` | IAI Identity Outliers Latest Summary
[**get-outlier-contributing-feature-summary**](#get-outlier-contributing-feature-summary) | **Get** `/outlier-feature-summaries/{outlierFeatureId}` | Get identity outlier contibuting feature summary
[**get-peer-group-outliers-contributing-features**](#get-peer-group-outliers-contributing-features) | **Get** `/outliers/{outlierId}/contributing-features` | Get identity outlier&#39;s contibuting features
[**ignore-identity-outliers**](#ignore-identity-outliers) | **Post** `/outliers/ignore` | IAI Identity Outliers Ignore
[**list-outliers-contributing-feature-access-items**](#list-outliers-contributing-feature-access-items) | **Get** `/outliers/{outlierId}/feature-details/{contributingFeatureName}/access-items` | Gets a list of access items associated with each identity outlier contributing feature
[**un-ignore-identity-outliers**](#un-ignore-identity-outliers) | **Post** `/outliers/unignore` | IAI Identity Outliers Unignore


## export-outliers-zip
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
IAI Identity Outliers Export
This API exports a list of ignored outliers to a CSV as well as list of non-ignored outliers to a CSV. These two CSVs will be zipped and exported.

Columns will include: identityId, type, firstDetectionDate, latestDetectionDate, ignored, & attributes (defined set of identity attributes).


[API Spec](https://developer.sailpoint.com/docs/api/v2025/export-outliers-zip)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiExportOutliersZipRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **type_** | **string** | Type of the identity outliers snapshot to filter on | 

### Return type

[***os.File**](https://pkg.go.dev/os)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/zip, application/json

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
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    type_ := `LOW_SIMILARITY` // string | Type of the identity outliers snapshot to filter on (optional) # string | Type of the identity outliers snapshot to filter on (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.IAIOutliersAPI.ExportOutliersZip(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	//resp, r, err := apiClient.V2025.IAIOutliersAPI.ExportOutliersZip(context.Background()).XSailPointExperimental(xSailPointExperimental).Type_(type_).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IAIOutliersAPI.ExportOutliersZip``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ExportOutliersZip`: *os.File
	fmt.Fprintf(os.Stdout, "Response from `IAIOutliersAPI.ExportOutliersZip`: %v\n", resp)
}
```

[[Back to top]](#)

## get-identity-outlier-snapshots
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
IAI Identity Outliers Summary
This API returns a summary containing the number of identities that customer has, the number of outliers, and the type of outlier.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-identity-outlier-snapshots)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetIdentityOutlierSnapshotsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **type_** | **string** | Type of the identity outliers snapshot to filter on | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **snapshotDate**: *ge, le* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **snapshotDate** | 

### Return type

[**[]OutlierSummary**](../models/outlier-summary)

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
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    type_ := `LOW_SIMILARITY` // string | Type of the identity outliers snapshot to filter on (optional) # string | Type of the identity outliers snapshot to filter on (optional)
    filters := `snapshotDate ge "2022-02-07T20:13:29.356648026Z"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **snapshotDate**: *ge, le* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **snapshotDate**: *ge, le* (optional)
    sorters := `snapshotDate` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **snapshotDate** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **snapshotDate** (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.IAIOutliersAPI.GetIdentityOutlierSnapshots(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	//resp, r, err := apiClient.V2025.IAIOutliersAPI.GetIdentityOutlierSnapshots(context.Background()).XSailPointExperimental(xSailPointExperimental).Limit(limit).Offset(offset).Type_(type_).Filters(filters).Sorters(sorters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IAIOutliersAPI.GetIdentityOutlierSnapshots``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetIdentityOutlierSnapshots`: []OutlierSummary
	fmt.Fprintf(os.Stdout, "Response from `IAIOutliersAPI.GetIdentityOutlierSnapshots`: %v\n", resp)
}
```

[[Back to top]](#)

## get-identity-outliers
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
IAI Get Identity Outliers
This API returns a list of outliers, containing data such as identity ID, outlier type, detection dates, identity attributes, if identity is ignored, and certification information.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-identity-outliers)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetIdentityOutliersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **type_** | **string** | Type of the identity outliers snapshot to filter on | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **attributes**: *eq, sw, co, in*  **firstDetectionDate**: *ge, le*  **certStatus**: *eq*  **ignored**: *eq*  **score**: *ge, le* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **firstDetectionDate, attributes, score** | 

### Return type

[**[]Outlier**](../models/outlier)

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
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    type_ := `LOW_SIMILARITY` // string | Type of the identity outliers snapshot to filter on (optional) # string | Type of the identity outliers snapshot to filter on (optional)
    filters := `attributes.displayName sw "John" and certStatus eq "false"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **attributes**: *eq, sw, co, in*  **firstDetectionDate**: *ge, le*  **certStatus**: *eq*  **ignored**: *eq*  **score**: *ge, le* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **attributes**: *eq, sw, co, in*  **firstDetectionDate**: *ge, le*  **certStatus**: *eq*  **ignored**: *eq*  **score**: *ge, le* (optional)
    sorters := `attributes.displayName,firstDetectionDate,-score` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **firstDetectionDate, attributes, score** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **firstDetectionDate, attributes, score** (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.IAIOutliersAPI.GetIdentityOutliers(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	//resp, r, err := apiClient.V2025.IAIOutliersAPI.GetIdentityOutliers(context.Background()).XSailPointExperimental(xSailPointExperimental).Limit(limit).Offset(offset).Count(count).Type_(type_).Filters(filters).Sorters(sorters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IAIOutliersAPI.GetIdentityOutliers``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetIdentityOutliers`: []Outlier
	fmt.Fprintf(os.Stdout, "Response from `IAIOutliersAPI.GetIdentityOutliers`: %v\n", resp)
}
```

[[Back to top]](#)

## get-latest-identity-outlier-snapshots
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
IAI Identity Outliers Latest Summary
This API returns a most recent snapshot of each outlier type, each containing the number of identities that customer has, the number of outliers, and the type of outlier.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-latest-identity-outlier-snapshots)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetLatestIdentityOutlierSnapshotsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **type_** | **string** | Type of the identity outliers snapshot to filter on | 

### Return type

[**[]LatestOutlierSummary**](../models/latest-outlier-summary)

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
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    type_ := `LOW_SIMILARITY` // string | Type of the identity outliers snapshot to filter on (optional) # string | Type of the identity outliers snapshot to filter on (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.IAIOutliersAPI.GetLatestIdentityOutlierSnapshots(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	//resp, r, err := apiClient.V2025.IAIOutliersAPI.GetLatestIdentityOutlierSnapshots(context.Background()).XSailPointExperimental(xSailPointExperimental).Type_(type_).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IAIOutliersAPI.GetLatestIdentityOutlierSnapshots``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetLatestIdentityOutlierSnapshots`: []LatestOutlierSummary
	fmt.Fprintf(os.Stdout, "Response from `IAIOutliersAPI.GetLatestIdentityOutlierSnapshots`: %v\n", resp)
}
```

[[Back to top]](#)

## get-outlier-contributing-feature-summary
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Get identity outlier contibuting feature summary
This API returns a summary of a contributing feature for an identity outlier.

The object contains: contributing feature name (translated text or message key), identity outlier display name, feature values, feature definition and explanation (translated text or message key), peer display name and identityId, access item reference, translation messages object.


[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-outlier-contributing-feature-summary)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**outlierFeatureId** | **string** | Contributing feature id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetOutlierContributingFeatureSummaryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**OutlierFeatureSummary**](../models/outlier-feature-summary)

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
    outlierFeatureId := `04654b66-7561-4090-94f9-abee0722a1af` // string | Contributing feature id # string | Contributing feature id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.IAIOutliersAPI.GetOutlierContributingFeatureSummary(context.Background(), outlierFeatureId).XSailPointExperimental(xSailPointExperimental).Execute()
	//resp, r, err := apiClient.V2025.IAIOutliersAPI.GetOutlierContributingFeatureSummary(context.Background(), outlierFeatureId).XSailPointExperimental(xSailPointExperimental).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IAIOutliersAPI.GetOutlierContributingFeatureSummary``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetOutlierContributingFeatureSummary`: OutlierFeatureSummary
	fmt.Fprintf(os.Stdout, "Response from `IAIOutliersAPI.GetOutlierContributingFeatureSummary`: %v\n", resp)
}
```

[[Back to top]](#)

## get-peer-group-outliers-contributing-features
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Get identity outlier's contibuting features
This API returns a list of contributing feature objects for a single outlier.

The object contains: feature name, feature value type, value, importance, display name (translated text or message key), description (translated text or message key), translation messages object.


[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-peer-group-outliers-contributing-features)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**outlierId** | **string** | The outlier id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPeerGroupOutliersContributingFeaturesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **includeTranslationMessages** | **string** | Whether or not to include translation messages object in returned response | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **importance** | 

### Return type

[**[]OutlierContributingFeature**](../models/outlier-contributing-feature)

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
    outlierId := `2c918085842e69ae018432d22ccb212f` // string | The outlier id # string | The outlier id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    includeTranslationMessages := `include-translation-messages=` // string | Whether or not to include translation messages object in returned response (optional) # string | Whether or not to include translation messages object in returned response (optional)
    sorters := `importance` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **importance** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **importance** (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.IAIOutliersAPI.GetPeerGroupOutliersContributingFeatures(context.Background(), outlierId).XSailPointExperimental(xSailPointExperimental).Execute()
	//resp, r, err := apiClient.V2025.IAIOutliersAPI.GetPeerGroupOutliersContributingFeatures(context.Background(), outlierId).XSailPointExperimental(xSailPointExperimental).Limit(limit).Offset(offset).Count(count).IncludeTranslationMessages(includeTranslationMessages).Sorters(sorters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IAIOutliersAPI.GetPeerGroupOutliersContributingFeatures``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetPeerGroupOutliersContributingFeatures`: []OutlierContributingFeature
	fmt.Fprintf(os.Stdout, "Response from `IAIOutliersAPI.GetPeerGroupOutliersContributingFeatures`: %v\n", resp)
}
```

[[Back to top]](#)

## ignore-identity-outliers
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
IAI Identity Outliers Ignore
This API receives a list of identity IDs in the request, changes the outliers to be ignored.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/ignore-identity-outliers)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiIgnoreIdentityOutliersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **requestBody** | **[]string** |  | 

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
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    requestbody := []byte(``) // []string | 

  
   var requestBody v2025.[]RequestBody
   if err := json.Unmarshal(requestbody, &requestBody); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2025.IAIOutliersAPI.IgnoreIdentityOutliers(context.Background()).XSailPointExperimental(xSailPointExperimental).RequestBody(requestBody).Execute()
	//r, err := apiClient.V2025.IAIOutliersAPI.IgnoreIdentityOutliers(context.Background()).XSailPointExperimental(xSailPointExperimental).RequestBody(requestBody).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IAIOutliersAPI.IgnoreIdentityOutliers``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## list-outliers-contributing-feature-access-items
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Gets a list of access items associated with each identity outlier contributing feature
This API returns a list of the enriched access items associated with each feature filtered by the access item type.

The object contains: accessItemId, display name (translated text or message key), description (translated text or message key), accessType, sourceName, extremelyRare.


[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-outliers-contributing-feature-access-items)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**outlierId** | **string** | The outlier id | 
**contributingFeatureName** | **string** | The name of contributing feature | 

### Other Parameters

Other parameters are passed through a pointer to a apiListOutliersContributingFeatureAccessItemsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **accessType** | **string** | The type of access item for the identity outlier contributing feature. If not provided, it returns all. | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName** | 

### Return type

[**[]OutliersContributingFeatureAccessItems**](../models/outliers-contributing-feature-access-items)

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
    outlierId := `2c918085842e69ae018432d22ccb212f` // string | The outlier id # string | The outlier id
    contributingFeatureName := `entitlement_count` // string | The name of contributing feature # string | The name of contributing feature
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    accessType := `ENTITLEMENT` // string | The type of access item for the identity outlier contributing feature. If not provided, it returns all. (optional) # string | The type of access item for the identity outlier contributing feature. If not provided, it returns all. (optional)
    sorters := `displayName` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName** (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.IAIOutliersAPI.ListOutliersContributingFeatureAccessItems(context.Background(), outlierId, contributingFeatureName).XSailPointExperimental(xSailPointExperimental).Execute()
	//resp, r, err := apiClient.V2025.IAIOutliersAPI.ListOutliersContributingFeatureAccessItems(context.Background(), outlierId, contributingFeatureName).XSailPointExperimental(xSailPointExperimental).Limit(limit).Offset(offset).Count(count).AccessType(accessType).Sorters(sorters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IAIOutliersAPI.ListOutliersContributingFeatureAccessItems``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListOutliersContributingFeatureAccessItems`: []OutliersContributingFeatureAccessItems
	fmt.Fprintf(os.Stdout, "Response from `IAIOutliersAPI.ListOutliersContributingFeatureAccessItems`: %v\n", resp)
}
```

[[Back to top]](#)

## un-ignore-identity-outliers
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
IAI Identity Outliers Unignore
This API receives a list of identity IDs in the request, changes the outliers to be un-ignored.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/un-ignore-identity-outliers)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUnIgnoreIdentityOutliersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **requestBody** | **[]string** |  | 

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
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    requestbody := []byte(``) // []string | 

  
   var requestBody v2025.[]RequestBody
   if err := json.Unmarshal(requestbody, &requestBody); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2025.IAIOutliersAPI.UnIgnoreIdentityOutliers(context.Background()).XSailPointExperimental(xSailPointExperimental).RequestBody(requestBody).Execute()
	//r, err := apiClient.V2025.IAIOutliersAPI.UnIgnoreIdentityOutliers(context.Background()).XSailPointExperimental(xSailPointExperimental).RequestBody(requestBody).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IAIOutliersAPI.UnIgnoreIdentityOutliers``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)


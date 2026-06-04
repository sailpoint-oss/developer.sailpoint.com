---
id: v2026-intelligence-package
title: IntelligencePackage
pagination_label: IntelligencePackage
sidebar_label: IntelligencePackage
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IntelligencePackage', 'V2026IntelligencePackage'] 
slug: /tools/sdk/go/v2026/methods/intelligence-package
tags: ['SDK', 'Software Development Kit', 'IntelligencePackage', 'V2026IntelligencePackage']
---

# IntelligencePackageAPI
  Read-only HTTP API that returns the Intelligence Package (identity context)
for SecOps enrichment use cases (SIEM/SOAR connectors, MCP, browser
extension). Backed by Atlas internal-REST calls to MICE, Shelby List Accounts,
SDS Search, IDA-outliers, and identity-history.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2026*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-intel-identity-access**](#get-intel-identity-access) | **Get** `/intelligence/identities/{identityID}/access` | Accounts merged with privileged data
[**get-intel-identity-access-history**](#get-intel-identity-access-history) | **Get** `/intelligence/identities/{identityID}/access-history` | Return identity access-history events
[**get-intel-identity-risk**](#get-intel-identity-risk) | **Get** `/intelligence/identities/{identityID}/risk` | Identity risk snapshot
[**get-intel-identity-risk-outliers**](#get-intel-identity-risk-outliers) | **Get** `/intelligence/identities/{identityID}/risk/outliers` | Risk outliers continuation paging
[**search-intel-identities**](#search-intel-identities) | **Get** `/intelligence/identities` | Resolve one identity by filter


## get-intel-identity-access
Accounts merged with privileged data
Requires tenant license idn:response-and-remediation.

Client-facing pagination (limit, offset, count) is not supported on this route.
The service issues one Shelby List Accounts request at the upstream maximum page size
and one SDS Search request per identity.


[API Spec](https://developer.sailpoint.com/docs/api/v2026/get-intel-identity-access)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**identityID** | **string** | Non-empty identity id path segment for Intelligence Package sub-resources. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetIntelIdentityAccessRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**IntelIdentityAccessBody**](../models/intel-identity-access-body)

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
    identityID := `ef38f94347e94562b5bb8424a56397d8` // string | Non-empty identity id path segment for Intelligence Package sub-resources. # string | Non-empty identity id path segment for Intelligence Package sub-resources.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2026.IntelligencePackageAPI.GetIntelIdentityAccess(context.Background(), identityID).Execute()
	  //resp, r, err := apiClient.V2026.IntelligencePackageAPI.GetIntelIdentityAccess(context.Background(), identityID).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IntelligencePackageAPI.GetIntelIdentityAccess``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetIntelIdentityAccess`: IntelIdentityAccessBody
    fmt.Fprintf(os.Stdout, "Response from `IntelligencePackageAPI.GetIntelIdentityAccess`: %v\n", resp)
}
```

[[Back to top]](#)

## get-intel-identity-access-history
Return identity access-history events
Requires tenant license idn:response-and-remediation.

Events are relayed from identity-history; optional limit, offset, and count
are forwarded to the upstream when supplied.


[API Spec](https://developer.sailpoint.com/docs/api/v2026/get-intel-identity-access-history)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**identityID** | **string** | Non-empty identity id path segment for Intelligence Package sub-resources. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetIntelIdentityAccessHistoryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Maximum number of historical events to return in this page of results. | 
 **offset** | **int32** | Zero-based index of the first event row to return for pagination. | 
 **count** | **bool** | When true, the service may include total count metadata alongside the result list. | [default to false]

### Return type

[**IntelIdentityAccessHistoryBody**](../models/intel-identity-access-history-body)

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
    identityID := `ef38f94347e94562b5bb8424a56397d8` // string | Non-empty identity id path segment for Intelligence Package sub-resources. # string | Non-empty identity id path segment for Intelligence Package sub-resources.
    limit := 100 // int32 | Maximum number of historical events to return in this page of results. (optional) # int32 | Maximum number of historical events to return in this page of results. (optional)
    offset := 0 // int32 | Zero-based index of the first event row to return for pagination. (optional) # int32 | Zero-based index of the first event row to return for pagination. (optional)
    count := false // bool | When true, the service may include total count metadata alongside the result list. (optional) (default to false) # bool | When true, the service may include total count metadata alongside the result list. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2026.IntelligencePackageAPI.GetIntelIdentityAccessHistory(context.Background(), identityID).Execute()
	  //resp, r, err := apiClient.V2026.IntelligencePackageAPI.GetIntelIdentityAccessHistory(context.Background(), identityID).Limit(limit).Offset(offset).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IntelligencePackageAPI.GetIntelIdentityAccessHistory``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetIntelIdentityAccessHistory`: IntelIdentityAccessHistoryBody
    fmt.Fprintf(os.Stdout, "Response from `IntelligencePackageAPI.GetIntelIdentityAccessHistory`: %v\n", resp)
}
```

[[Back to top]](#)

## get-intel-identity-risk
Identity risk snapshot
Risk snapshot envelope for the identity. The service resolves the first matching
outlier for identityID and returns one page of access-items plus an optional
continuation link for additional pages.

Clients should continue paging using _links.outliers.href when provided.
Requires tenant license idn:response-and-remediation.


[API Spec](https://developer.sailpoint.com/docs/api/v2026/get-intel-identity-risk)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**identityID** | **string** | Non-empty identity id path segment for Intelligence Package sub-resources. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetIntelIdentityRiskRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**IntelIdentityRiskBody**](../models/intel-identity-risk-body)

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
    identityID := `ef38f94347e94562b5bb8424a56397d8` // string | Non-empty identity id path segment for Intelligence Package sub-resources. # string | Non-empty identity id path segment for Intelligence Package sub-resources.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2026.IntelligencePackageAPI.GetIntelIdentityRisk(context.Background(), identityID).Execute()
	  //resp, r, err := apiClient.V2026.IntelligencePackageAPI.GetIntelIdentityRisk(context.Background(), identityID).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IntelligencePackageAPI.GetIntelIdentityRisk``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetIntelIdentityRisk`: IntelIdentityRiskBody
    fmt.Fprintf(os.Stdout, "Response from `IntelligencePackageAPI.GetIntelIdentityRisk`: %v\n", resp)
}
```

[[Back to top]](#)

## get-intel-identity-risk-outliers
Risk outliers continuation paging
Continuation endpoint for risk outlier access-items. Returns one page based on
the supplied limit and offset values and includes an optional continuation link
when more rows remain. Requires tenant license idn:response-and-remediation.


[API Spec](https://developer.sailpoint.com/docs/api/v2026/get-intel-identity-risk-outliers)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**identityID** | **string** | Non-empty identity id path segment for Intelligence Package sub-resources. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetIntelIdentityRiskOutliersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Maximum number of outlier rows to return for this page. | [default to 250]
 **offset** | **int32** | Zero-based row index for the first returned outlier item. | [default to 0]

### Return type

[**IntelIdentityRiskBody**](../models/intel-identity-risk-body)

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
    identityID := `ef38f94347e94562b5bb8424a56397d8` // string | Non-empty identity id path segment for Intelligence Package sub-resources. # string | Non-empty identity id path segment for Intelligence Package sub-resources.
    limit := 250 // int32 | Maximum number of outlier rows to return for this page. (optional) (default to 250) # int32 | Maximum number of outlier rows to return for this page. (optional) (default to 250)
    offset := 0 // int32 | Zero-based row index for the first returned outlier item. (optional) (default to 0) # int32 | Zero-based row index for the first returned outlier item. (optional) (default to 0)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2026.IntelligencePackageAPI.GetIntelIdentityRiskOutliers(context.Background(), identityID).Execute()
	  //resp, r, err := apiClient.V2026.IntelligencePackageAPI.GetIntelIdentityRiskOutliers(context.Background(), identityID).Limit(limit).Offset(offset).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IntelligencePackageAPI.GetIntelIdentityRiskOutliers``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetIntelIdentityRiskOutliers`: IntelIdentityRiskBody
    fmt.Fprintf(os.Stdout, "Response from `IntelligencePackageAPI.GetIntelIdentityRiskOutliers`: %v\n", resp)
}
```

[[Back to top]](#)

## search-intel-identities
Resolve one identity by filter
Requires tenant license idn:response-and-remediation.

Returns the Intelligence Package envelope for the identity that matches the SCIM-style filters expression.
Supported queryable fields are id and email only.

A single match returns HTTP 200 with IntelIdentityResponse.

Zero matches returns HTTP 404 with detailCode IDC_IDENTITY_NOT_FOUND. 

Multiple matches returns HTTP 409 with detailCode IDC_IDENTITY_AMBIGUOUS and candidates listing each match.


[API Spec](https://developer.sailpoint.com/docs/api/v2026/search-intel-identities)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSearchIntelIdentitiesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **email**: *eq* | 

### Return type

[**IntelIdentityResponse**](../models/intel-identity-response)

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
    filters := `id eq "00000000-0000-0000-0000-000000000000"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **email**: *eq* # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **email**: *eq*

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2026.IntelligencePackageAPI.SearchIntelIdentities(context.Background()).Filters(filters).Execute()
	  //resp, r, err := apiClient.V2026.IntelligencePackageAPI.SearchIntelIdentities(context.Background()).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IntelligencePackageAPI.SearchIntelIdentities``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SearchIntelIdentities`: IntelIdentityResponse
    fmt.Fprintf(os.Stdout, "Response from `IntelligencePackageAPI.SearchIntelIdentities`: %v\n", resp)
}
```

[[Back to top]](#)


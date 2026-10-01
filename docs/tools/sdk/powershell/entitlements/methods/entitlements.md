# Entitlements

# Entitlements
   
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-AccessModelMetadataForEntitlementV1**](#create-access-model-metadata-for-entitlement-v1) | **POST** `/entitlements/v1/{id}/access-model-metadata/{attributeKey}/values/{attributeValue}` | Add metadata to an entitlement.
[**Remove-AccessModelMetadataFromEntitlementV1**](#delete-access-model-metadata-from-entitlement-v1) | **DELETE** `/entitlements/v1/{id}/access-model-metadata/{attributeKey}/values/{attributeValue}` | Remove metadata from an entitlement.
[**Get-EntitlementRequestConfigV1**](#get-entitlement-request-config-v1) | **GET** `/entitlements/v1/{id}/entitlement-request-config` | Get entitlement request config
[**Get-EntitlementV1**](#get-entitlement-v1) | **GET** `/entitlements/v1/{id}` | Get an entitlement
[**Import-EntitlementsBySourceV1**](#import-entitlements-by-source-v1) | **POST** `/entitlements/v1/aggregate/sources/{id}` | Aggregate entitlements
[**Get-EntitlementChildrenV1**](#list-entitlement-children-v1) | **GET** `/entitlements/v1/{id}/children` | List of entitlements children
[**Get-EntitlementParentsV1**](#list-entitlement-parents-v1) | **GET** `/entitlements/v1/{id}/parents` | List of entitlements parents
[**Get-EntitlementsByAccountV1**](#list-entitlements-by-account-v1) | **GET** `/entitlements/v1/account/{accountId}/entitlements` | Get entitlements for an account
[**Get-EntitlementsV1**](#list-entitlements-v1) | **GET** `/entitlements/v1` | Gets a list of entitlements.
[**Update-EntitlementV1**](#patch-entitlement-v1) | **PATCH** `/entitlements/v1/{id}` | Patch an entitlement
[**Send-EntitlementRequestConfigV1**](#put-entitlement-request-config-v1) | **PUT** `/entitlements/v1/{id}/entitlement-request-config` | Replace entitlement request config
[**Reset-SourceEntitlementsV1**](#reset-source-entitlements-v1) | **POST** `/entitlements/v1/reset/sources/{id}` | Reset source entitlements
[**Update-EntitlementsInBulkV1**](#update-entitlements-in-bulk-v1) | **POST** `/entitlements/v1/bulk-update` | Bulk update an entitlement list
[**Update-EntitlementsMetadataByFilterV1**](#update-entitlements-metadata-by-filter-v1) | **POST** `/entitlements/v1/access-model-metadata/bulk-update/filter` | Bulk-update metadata by filter
[**Update-EntitlementsMetadataByIdsV1**](#update-entitlements-metadata-by-ids-v1) | **POST** `/entitlements/v1/access-model-metadata/bulk-update/ids` | Bulk-update metadata by ids
[**Update-EntitlementsMetadataByQueryV1**](#update-entitlements-metadata-by-query-v1) | **POST** `/entitlements/v1/access-model-metadata/bulk-update/query` | Bulk-update metadata by query


## create-access-model-metadata-for-entitlement-v1
Add single Access Model Metadata to an entitlement.

[API Spec](https://developer.sailpoint.com/docs/api/create-access-model-metadata-for-entitlement-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The entitlement id.
Path   | AttributeKey | **String** | True  | Technical name of the Attribute.
Path   | AttributeValue | **String** | True  | Technical name of the Attribute Value.

### Return type
[**Entitlement**](../models/entitlement)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Created | Entitlement
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListEntitlementsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListEntitlementsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808c74ff913f0175097daa9d59cd" # String | The entitlement id.
$AttributeKey = "iscPrivacy" # String | Technical name of the Attribute.
$AttributeValue = "public" # String | Technical name of the Attribute Value.

# Add metadata to an entitlement.

try {
    New-AccessModelMetadataForEntitlementV1 -Id $Id -AttributeKey $AttributeKey -AttributeValue $AttributeValue 
    
    # Below is a request that includes all optional parameters
    # New-AccessModelMetadataForEntitlementV1 -Id $Id -AttributeKey $AttributeKey -AttributeValue $AttributeValue  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-AccessModelMetadataForEntitlementV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-access-model-metadata-from-entitlement-v1
Remove single Access Model Metadata from an entitlement.

[API Spec](https://developer.sailpoint.com/docs/api/delete-access-model-metadata-from-entitlement-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The entitlement id.
Path   | AttributeKey | **String** | True  | Technical name of the Attribute.
Path   | AttributeValue | **String** | True  | Technical name of the Attribute Value.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListEntitlementsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListEntitlementsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808c74ff913f0175097daa9d59cd" # String | The entitlement id.
$AttributeKey = "iscPrivacy" # String | Technical name of the Attribute.
$AttributeValue = "public" # String | Technical name of the Attribute Value.

# Remove metadata from an entitlement.

try {
    Remove-AccessModelMetadataFromEntitlementV1 -Id $Id -AttributeKey $AttributeKey -AttributeValue $AttributeValue 
    
    # Below is a request that includes all optional parameters
    # Remove-AccessModelMetadataFromEntitlementV1 -Id $Id -AttributeKey $AttributeKey -AttributeValue $AttributeValue  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-AccessModelMetadataFromEntitlementV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-entitlement-request-config-v1
This API returns the entitlement request config for a specified entitlement.
The `accessRequestConfig.formDefinitionId` field associates an optional custom form with entitlement access requests.

[API Spec](https://developer.sailpoint.com/docs/api/get-entitlement-request-config-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Entitlement Id

### Return type
[**EntitlementRequestConfig**](../models/entitlement-request-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | An Entitlement Request Config | EntitlementRequestConfig
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListEntitlementsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListEntitlementsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808874ff91550175097daaec161c" # String | Entitlement Id

# Get entitlement request config

try {
    Get-EntitlementRequestConfigV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-EntitlementRequestConfigV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-EntitlementRequestConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-entitlement-v1
This API returns an entitlement by its ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-entitlement-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The entitlement ID

### Return type
[**EntitlementV2**](../models/entitlement-v2)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | An entitlement | EntitlementV2
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListEntitlementsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListEntitlementsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808874ff91550175097daaec161c" # String | The entitlement ID

# Get an entitlement

try {
    Get-EntitlementV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-EntitlementV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-EntitlementV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## import-entitlements-by-source-v1
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Starts an entitlement aggregation on the specified source. Though this endpoint has been deprecated, you can find its Beta equivalent [here](https://developer.sailpoint.com/docs/api/import-entitlements-v-1).

If the target source is a direct connection, then the request body must be empty. You will also need to make sure the Content-Type header is not set. If you set the Content-Type header without specifying a body, then you will receive a 500 error.

If the target source is a delimited file source, then the CSV file needs to be included in the request body. You will also need to set the Content-Type header to `multipart/form-data`.

[API Spec](https://developer.sailpoint.com/docs/api/import-entitlements-by-source-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Source Id
   | CsvFile | **System.IO.FileInfo** |   (optional) | The CSV file containing the source entitlements to aggregate.

### Return type
[**LoadEntitlementTask**](../models/load-entitlement-task)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Aggregate Entitlements Task | LoadEntitlementTask
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListEntitlementsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListEntitlementsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Source Id
$CsvFile =  # System.IO.FileInfo | The CSV file containing the source entitlements to aggregate. (optional)

# Aggregate entitlements

try {
    Import-EntitlementsBySourceV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Import-EntitlementsBySourceV1 -Id $Id -CsvFile $CsvFile  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Import-EntitlementsBySourceV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-entitlement-children-v1
This API returns a list of all child entitlements of a given entitlement.

[API Spec](https://developer.sailpoint.com/docs/api/list-entitlement-children-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Entitlement Id
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | SearchAfter | **String** |   (optional) | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don't get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter=Account Payable,2c91808375d8e80a0175e1f88a575221&sorters=name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is ""Account Payable"", then using that name and ID will start a new search after this entitlement.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable**
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **tags**: *eq*  **privilegeLevel.direct**: *eq*

### Return type
[**EntitlementV2[]**](../models/entitlement-v2)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of entitlements children from an entitlement | EntitlementV2[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListEntitlementsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListEntitlementsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808874ff91550175097daaec161c" # String | Entitlement Id
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$SearchAfter = "Account Payable,2c91808375d8e80a0175e1f88a575221" # String | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don't get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter=Account Payable,2c91808375d8e80a0175e1f88a575221&sorters=name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is ""Account Payable"", then using that name and ID will start a new search after this entitlement. (optional)
$Sorters = "name,id" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable** (optional)
$Filters = 'attribute eq "memberOf"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **tags**: *eq*  **privilegeLevel.direct**: *eq* (optional)

# List of entitlements children

try {
    Get-EntitlementChildrenV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-EntitlementChildrenV1 -Id $Id -Limit $Limit -Offset $Offset -Count $Count -SearchAfter $SearchAfter -Sorters $Sorters -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-EntitlementChildrenV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-entitlement-parents-v1
This API returns a list of all parent entitlements of a given entitlement.

[API Spec](https://developer.sailpoint.com/docs/api/list-entitlement-parents-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Entitlement Id
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | SearchAfter | **String** |   (optional) | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don't get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter=Account Payable,2c91808375d8e80a0175e1f88a575221&sorters=name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is ""Account Payable"", then using that name and ID will start a new search after this entitlement.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable**
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **tags**: *eq*  **privilegeLevel.direct**: *eq*

### Return type
[**EntitlementV2[]**](../models/entitlement-v2)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of entitlements parents from an entitlement | EntitlementV2[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListEntitlementsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListEntitlementsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808c74ff913f0175097daa9d59cd" # String | Entitlement Id
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$SearchAfter = "Account Payable,2c91808375d8e80a0175e1f88a575221" # String | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don't get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter=Account Payable,2c91808375d8e80a0175e1f88a575221&sorters=name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is ""Account Payable"", then using that name and ID will start a new search after this entitlement. (optional)
$Sorters = "name,id" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable** (optional)
$Filters = 'attribute eq "memberOf"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **tags**: *eq*  **privilegeLevel.direct**: *eq* (optional)

# List of entitlements parents

try {
    Get-EntitlementParentsV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-EntitlementParentsV1 -Id $Id -Limit $Limit -Offset $Offset -Count $Count -SearchAfter $SearchAfter -Sorters $Sorters -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-EntitlementParentsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-entitlements-by-account-v1
This API returns a list of all entitlements associated with the given account ID. The account must exist; if not found, the API returns 404.

[API Spec](https://developer.sailpoint.com/docs/api/list-entitlements-by-account-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | AccountId | **String** | True  | The account ID to get entitlements for
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | SearchAfter | **String** |   (optional) | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don't get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter=Account Payable,2c91808375d8e80a0175e1f88a575221&sorters=name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is ""Account Payable"", then using that name and ID will start a new search after this entitlement.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable**

### Return type
[**EntitlementV2[]**](../models/entitlement-v2)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of entitlements for the account | EntitlementV2[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListEntitlementsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListEntitlementsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$AccountId = "ef38f94347e94562b5bb8424a56397d8" # String | The account ID to get entitlements for
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$SearchAfter = "Account Payable,2c91808375d8e80a0175e1f88a575221" # String | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don't get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter=Account Payable,2c91808375d8e80a0175e1f88a575221&sorters=name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is ""Account Payable"", then using that name and ID will start a new search after this entitlement. (optional)
$Sorters = "name,id" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable** (optional)

# Get entitlements for an account

try {
    Get-EntitlementsByAccountV1 -AccountId $AccountId 
    
    # Below is a request that includes all optional parameters
    # Get-EntitlementsByAccountV1 -AccountId $AccountId -Limit $Limit -Offset $Offset -Count $Count -SearchAfter $SearchAfter -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-EntitlementsByAccountV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-entitlements-v1
This API returns a list of entitlements. Any authenticated token can call this API.

[API Spec](https://developer.sailpoint.com/docs/api/list-entitlements-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | SegmentedForIdentity | **String** |   (optional) | If present and not empty, additionally filters Entitlements to those which are assigned to the Segment(s) which are visible to the Identity with the specified ID.
  Query | ForSegmentIds | **String** |   (optional) | If present and not empty, additionally filters Access Profiles to those which are assigned to the Segment(s) with the specified IDs.
  Query | IncludeUnsegmented | **Boolean** |   (optional) (default to $true) | Whether or not the response list should contain unsegmented Entitlements. If **for-segment-ids** and **segmented-for-identity** are both absent or empty, specifying **include-unsegmented=false** results in an error.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | SearchAfter | **String** |   (optional) | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don't get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter=Account Payable,2c91808375d8e80a0175e1f88a575221&sorters=name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is ""Account Payable"", then using that name and ID will start a new search after this entitlement.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable**
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **tags**: *eq*  **privilegeLevel.direct**: *eq*

### Return type
[**EntitlementV2[]**](../models/entitlement-v2)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of entitlements | EntitlementV2[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListEntitlementsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListEntitlementsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SegmentedForIdentity = "e554098913544630b5985e9042f5e44b" # String | If present and not empty, additionally filters Entitlements to those which are assigned to the Segment(s) which are visible to the Identity with the specified ID. (optional)
$ForSegmentIds = "041727d4-7d95-4779-b891-93cf41e98249,a378c9fa-bae5-494c-804e-a1e30f69f649" # String | If present and not empty, additionally filters Access Profiles to those which are assigned to the Segment(s) with the specified IDs. (optional)
$IncludeUnsegmented = $true # Boolean | Whether or not the response list should contain unsegmented Entitlements. If **for-segment-ids** and **segmented-for-identity** are both absent or empty, specifying **include-unsegmented=false** results in an error. (optional) (default to $true)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$SearchAfter = "Account Payable,2c91808375d8e80a0175e1f88a575221" # String | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don't get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter=Account Payable,2c91808375d8e80a0175e1f88a575221&sorters=name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is ""Account Payable"", then using that name and ID will start a new search after this entitlement. (optional)
$Sorters = "name,id" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable** (optional)
$Filters = 'attribute eq "memberOf"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **tags**: *eq*  **privilegeLevel.direct**: *eq* (optional)

# Gets a list of entitlements.

try {
    Get-EntitlementsV1 
    
    # Below is a request that includes all optional parameters
    # Get-EntitlementsV1 -SegmentedForIdentity $SegmentedForIdentity -ForSegmentIds $ForSegmentIds -IncludeUnsegmented $IncludeUnsegmented -Offset $Offset -Limit $Limit -Count $Count -SearchAfter $SearchAfter -Sorters $Sorters -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-EntitlementsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-entitlement-v1
This API updates an existing entitlement using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.

The following fields are patchable: **requestable**, **segments**, **privilegeOverride/level**, **owner**, **name**, **description**, **manuallyUpdatedFields**, and **accessModelMetadata**

When you're patching owner, only owner type and owner id must be provided. Owner name is optional, and it won't be modified. If the owner name is provided, it should correspond to the real name. The only owner type currently supported is IDENTITY.

When you're patching **accessModelMetadata**, each attribute's **key** must match the key of an existing access model metadata attribute, and each **value** must be one of the values configured for that key. Use [List access model metadata attributes](https://developer.sailpoint.com/docs/api/list-access-model-metadata-attribute-v-1) to look up the available keys and values.

[API Spec](https://developer.sailpoint.com/docs/api/patch-entitlement-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the entitlement to patch
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) |   (optional) | 

### Return type
[**EntitlementV2**](../models/entitlement-v2)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Responds with the entitlement as updated. | EntitlementV2
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListEntitlementsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListEntitlementsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808a7813090a017814121e121518" # String | ID of the entitlement to patch
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ # JsonPatchOperation[] |  (optional)
 

# Patch an entitlement

try {
    Update-EntitlementV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Update-EntitlementV1 -Id $Id -JsonPatchOperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-EntitlementV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-entitlement-request-config-v1
This API replaces the entitlement request config for a specified entitlement.
Set `accessRequestConfig.formDefinitionId` to associate an optional custom form with entitlement access requests.

[API Spec](https://developer.sailpoint.com/docs/api/put-entitlement-request-config-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Entitlement ID
 Body  | EntitlementRequestConfig | [**EntitlementRequestConfig**](../models/entitlement-request-config) | True  | 

### Return type
[**EntitlementRequestConfig**](../models/entitlement-request-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Responds with the entitlement request config as updated. | EntitlementRequestConfig
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListEntitlementsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListEntitlementsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808a7813090a017814121e121518" # String | Entitlement ID
$EntitlementRequestConfig = @"{
  "accessRequestConfig" : {
    "denialCommentRequired" : false,
    "approvalSchemes" : [ {
      "approverId" : "e3eab852-8315-467f-9de7-70eda97f63c8",
      "approverType" : "GOVERNANCE_GROUP"
    }, {
      "approverId" : "e3eab852-8315-467f-9de7-70eda97f63c8",
      "approverType" : "GOVERNANCE_GROUP"
    } ],
    "reauthorizationRequired" : false,
    "formDefinitionId" : "78258e80-e9e2-4e1a-a11f-ce0b7c62f25d",
    "requestCommentRequired" : true,
    "requireEndDate" : true,
    "maxPermittedAccessDuration" : {
      "value" : 5,
      "timeUnit" : "DAYS"
    }
  },
  "revocationRequestConfig" : {
    "approvalSchemes" : [ {
      "approverId" : "e3eab852-8315-467f-9de7-70eda97f63c8",
      "approverType" : "GOVERNANCE_GROUP"
    }, {
      "approverId" : "e3eab852-8315-467f-9de7-70eda97f63c8",
      "approverType" : "GOVERNANCE_GROUP"
    } ]
  }
}"@

# Replace entitlement request config

try {
    $Result = ConvertFrom-JsonToEntitlementRequestConfig -Json $EntitlementRequestConfig
    Send-EntitlementRequestConfigV1 -Id $Id -EntitlementRequestConfig $Result 
    
    # Below is a request that includes all optional parameters
    # Send-EntitlementRequestConfigV1 -Id $Id -EntitlementRequestConfig $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-EntitlementRequestConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## reset-source-entitlements-v1
Remove all entitlements from a specific source.
To reload the accounts along with the entitlements you removed, you must run an unoptimized aggregation.  To do so, use [Account Aggregation](https://developer.sailpoint.com/docs/api/import-accounts-v-1) with `disableOptimization` = `true`. 

[API Spec](https://developer.sailpoint.com/docs/api/reset-source-entitlements-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of source for the entitlement reset

### Return type
[**EntitlementSourceResetBaseReferenceDto**](../models/entitlement-source-reset-base-reference-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Entitlement source reset task result | EntitlementSourceResetBaseReferenceDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListEntitlementsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListEntitlementsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808a7813090a017814121919ecca" # String | ID of source for the entitlement reset

# Reset source entitlements

try {
    Reset-SourceEntitlementsV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Reset-SourceEntitlementsV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Reset-SourceEntitlementsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-entitlements-in-bulk-v1
This API applies an update to every entitlement of the list.


The number of entitlements to update is limited to 50 items maximum.


The JsonPatch update follows the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
examples of allowed operations :
`**{ "op": "replace", "path": "/requestable","value": boolean }**`
`**{ "op": "replace", "path": "/privilegeOverride/level","value": string }**`

A token with ORG_ADMIN or API authority is required to call this API.


[API Spec](https://developer.sailpoint.com/docs/api/update-entitlements-in-bulk-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | EntitlementBulkUpdateRequest | [**EntitlementBulkUpdateRequest**](../models/entitlement-bulk-update-request) | True  | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListEntitlementsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListEntitlementsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$EntitlementBulkUpdateRequest = @"{
  "entitlementIds" : [ "2c91808a7624751a01762f19d665220d", "2c91808a7624751a01762f19d67c220e", "2c91808a7624751a01762f19d692220f" ],
  "jsonPatch" : [ {
    "op" : "replace",
    "path" : "/requestable",
    "value" : false
  }, {
    "op" : "replace",
    "path" : "/privilegeOverride/level",
    "value" : "HIGH"
  } ]
}"@

# Bulk update an entitlement list

try {
    $Result = ConvertFrom-JsonToEntitlementBulkUpdateRequest -Json $EntitlementBulkUpdateRequest
    Update-EntitlementsInBulkV1 -EntitlementBulkUpdateRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Update-EntitlementsInBulkV1 -EntitlementBulkUpdateRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-EntitlementsInBulkV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-entitlements-metadata-by-filter-v1
This API initiates a bulk update of Access Model Metadata for every entitlement matching the supplied filter expression.

The update is processed asynchronously. The response returns the ID of the task performing the update.

Adding or replacing custom metadata requires a suite license.

This API replaces the deprecated `updateAccessModelMetadataByFilterV1` operation.

[API Spec](https://developer.sailpoint.com/docs/api/update-entitlements-metadata-by-filter-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Entitlementmetadatabulkupdatebyfilterrequest | [**Entitlementmetadatabulkupdatebyfilterrequest**](../models/entitlementmetadatabulkupdatebyfilterrequest) | True  | Attribute metadata bulk update request body.

### Return type
[**Entitlementmetadatabulkupdateresponse**](../models/entitlementmetadatabulkupdateresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Returned if the bulk update request was created. | Entitlementmetadatabulkupdateresponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListEntitlementsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListEntitlementsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Entitlementmetadatabulkupdatebyfilterrequest = @"{
  "values" : [ {
    "attribute" : "iscFederalClassifications",
    "values" : [ "topSecret" ]
  } ],
  "filters" : "id eq 2c9180867817ac4d017817c491119a20",
  "replaceScope" : "ATTRIBUTE",
  "operation" : "REPLACE"
}"@

# Bulk-update metadata by filter

try {
    $Result = ConvertFrom-JsonToEntitlementmetadatabulkupdatebyfilterrequest -Json $Entitlementmetadatabulkupdatebyfilterrequest
    Update-EntitlementsMetadataByFilterV1 -Entitlementmetadatabulkupdatebyfilterrequest $Result 
    
    # Below is a request that includes all optional parameters
    # Update-EntitlementsMetadataByFilterV1 -Entitlementmetadatabulkupdatebyfilterrequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-EntitlementsMetadataByFilterV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-entitlements-metadata-by-ids-v1
This API initiates a bulk update of Access Model Metadata for one or more entitlements by a list of entitlement IDs.

The update is processed asynchronously. The response returns the ID of the task performing the update.

The maximum entitlement count in a single request is 3000. Adding or replacing custom metadata requires a suite license.

This API replaces the deprecated `updateAccessModelMetadataByIdsV1` operation.

[API Spec](https://developer.sailpoint.com/docs/api/update-entitlements-metadata-by-ids-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Entitlementmetadatabulkupdatebyidrequest | [**Entitlementmetadatabulkupdatebyidrequest**](../models/entitlementmetadatabulkupdatebyidrequest) | True  | Attribute metadata bulk update request body.

### Return type
[**Entitlementmetadatabulkupdateresponse**](../models/entitlementmetadatabulkupdateresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Returned if the bulk update request was created. | Entitlementmetadatabulkupdateresponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListEntitlementsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListEntitlementsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Entitlementmetadatabulkupdatebyidrequest = @"{
  "entitlements" : [ "2c9180867817ac4d017817c491119a20", "2c9180867817ac4d017817c491119a21" ],
  "values" : [ {
    "attribute" : "iscFederalClassifications",
    "values" : [ "topSecret" ]
  } ],
  "replaceScope" : "ATTRIBUTE",
  "operation" : "REPLACE"
}"@

# Bulk-update metadata by ids

try {
    $Result = ConvertFrom-JsonToEntitlementmetadatabulkupdatebyidrequest -Json $Entitlementmetadatabulkupdatebyidrequest
    Update-EntitlementsMetadataByIdsV1 -Entitlementmetadatabulkupdatebyidrequest $Result 
    
    # Below is a request that includes all optional parameters
    # Update-EntitlementsMetadataByIdsV1 -Entitlementmetadatabulkupdatebyidrequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-EntitlementsMetadataByIdsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-entitlements-metadata-by-query-v1
This API initiates a bulk update of Access Model Metadata for every entitlement matching the supplied search query.

The update is processed asynchronously. The response returns the ID of the task performing the update.

Adding or replacing custom metadata requires a suite license.

This API replaces the deprecated `updateAccessModelMetadataByQueryV1` operation.

[API Spec](https://developer.sailpoint.com/docs/api/update-entitlements-metadata-by-query-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Entitlementmetadatabulkupdatebyqueryrequest | [**Entitlementmetadatabulkupdatebyqueryrequest**](../models/entitlementmetadatabulkupdatebyqueryrequest) | True  | Attribute metadata bulk update request body.

### Return type
[**Entitlementmetadatabulkupdateresponse**](../models/entitlementmetadatabulkupdateresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Returned if the bulk update request was created. | Entitlementmetadatabulkupdateresponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListEntitlementsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListEntitlementsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Entitlementmetadatabulkupdatebyqueryrequest = @"{
  "query" : {
    "indices" : [ "entitlements" ],
    "queryType" : "TEXT",
    "textQuery" : {
      "terms" : [ "test123" ],
      "fields" : [ "id" ],
      "matchAny" : false,
      "contains" : true
    },
    "includeNested" : false
  },
  "values" : [ {
    "attribute" : "iscFederalClassifications",
    "values" : [ "topSecret" ]
  } ],
  "replaceScope" : "ATTRIBUTE",
  "operation" : "REPLACE"
}"@

# Bulk-update metadata by query

try {
    $Result = ConvertFrom-JsonToEntitlementmetadatabulkupdatebyqueryrequest -Json $Entitlementmetadatabulkupdatebyqueryrequest
    Update-EntitlementsMetadataByQueryV1 -Entitlementmetadatabulkupdatebyqueryrequest $Result 
    
    # Below is a request that includes all optional parameters
    # Update-EntitlementsMetadataByQueryV1 -Entitlementmetadatabulkupdatebyqueryrequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-EntitlementsMetadataByQueryV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

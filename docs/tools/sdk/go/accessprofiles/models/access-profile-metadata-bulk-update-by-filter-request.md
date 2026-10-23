# AccessProfileMetadataBulkUpdateByFilterRequest

# AccessProfileMetadataBulkUpdateByFilterRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **requestable**: *eq*  **source.id**: *eq, in*  Supported composite operators are *and, or* | 
**Operation** | **string** | The operation to be performed | 
**ReplaceScope** | **string** | The choice of update scope. **ATTRIBUTE** replaces only the values of the attributes named in `values`, and **ALL** replaces every metadata attribute on the access profile. | 
**Values** | [**[]AccessProfileMetadataBulkUpdateByIdRequestValuesInner**](access-profile-metadata-bulk-update-by-id-request-values-inner) | The metadata to be updated, including attribute key and value. | 

## Methods

### NewAccessProfileMetadataBulkUpdateByFilterRequest

`func NewAccessProfileMetadataBulkUpdateByFilterRequest(filters string, operation string, replaceScope string, values []AccessProfileMetadataBulkUpdateByIdRequestValuesInner, ) *AccessProfileMetadataBulkUpdateByFilterRequest`

NewAccessProfileMetadataBulkUpdateByFilterRequest instantiates a new AccessProfileMetadataBulkUpdateByFilterRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessProfileMetadataBulkUpdateByFilterRequestWithDefaults

`func NewAccessProfileMetadataBulkUpdateByFilterRequestWithDefaults() *AccessProfileMetadataBulkUpdateByFilterRequest`

NewAccessProfileMetadataBulkUpdateByFilterRequestWithDefaults instantiates a new AccessProfileMetadataBulkUpdateByFilterRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFilters

`func (o *AccessProfileMetadataBulkUpdateByFilterRequest) GetFilters() string`

GetFilters returns the Filters field if non-nil, zero value otherwise.

### GetFiltersOk

`func (o *AccessProfileMetadataBulkUpdateByFilterRequest) GetFiltersOk() (*string, bool)`

GetFiltersOk returns a tuple with the Filters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilters

`func (o *AccessProfileMetadataBulkUpdateByFilterRequest) SetFilters(v string)`

SetFilters sets Filters field to given value.


### GetOperation

`func (o *AccessProfileMetadataBulkUpdateByFilterRequest) GetOperation() string`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *AccessProfileMetadataBulkUpdateByFilterRequest) GetOperationOk() (*string, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *AccessProfileMetadataBulkUpdateByFilterRequest) SetOperation(v string)`

SetOperation sets Operation field to given value.


### GetReplaceScope

`func (o *AccessProfileMetadataBulkUpdateByFilterRequest) GetReplaceScope() string`

GetReplaceScope returns the ReplaceScope field if non-nil, zero value otherwise.

### GetReplaceScopeOk

`func (o *AccessProfileMetadataBulkUpdateByFilterRequest) GetReplaceScopeOk() (*string, bool)`

GetReplaceScopeOk returns a tuple with the ReplaceScope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReplaceScope

`func (o *AccessProfileMetadataBulkUpdateByFilterRequest) SetReplaceScope(v string)`

SetReplaceScope sets ReplaceScope field to given value.


### GetValues

`func (o *AccessProfileMetadataBulkUpdateByFilterRequest) GetValues() []AccessProfileMetadataBulkUpdateByIdRequestValuesInner`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *AccessProfileMetadataBulkUpdateByFilterRequest) GetValuesOk() (*[]AccessProfileMetadataBulkUpdateByIdRequestValuesInner, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *AccessProfileMetadataBulkUpdateByFilterRequest) SetValues(v []AccessProfileMetadataBulkUpdateByIdRequestValuesInner)`

SetValues sets Values field to given value.




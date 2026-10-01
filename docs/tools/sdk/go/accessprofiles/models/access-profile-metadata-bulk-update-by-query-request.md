# AccessProfileMetadataBulkUpdateByQueryRequest

# AccessProfileMetadataBulkUpdateByQueryRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Query** | **map[string]interface\{\}** | The search query selecting the access profiles to update. | 
**Operation** | **string** | The operation to be performed | 
**ReplaceScope** | **string** | The choice of update scope. **ATTRIBUTE** replaces only the values of the attributes named in `values`, and **ALL** replaces every metadata attribute on the access profile. | 
**Values** | [**[]AccessProfileMetadataBulkUpdateByIdRequestValuesInner**](access-profile-metadata-bulk-update-by-id-request-values-inner) | The metadata to be updated, including attribute key and value. | 

## Methods

### NewAccessProfileMetadataBulkUpdateByQueryRequest

`func NewAccessProfileMetadataBulkUpdateByQueryRequest(query map[string]interface{}, operation string, replaceScope string, values []AccessProfileMetadataBulkUpdateByIdRequestValuesInner, ) *AccessProfileMetadataBulkUpdateByQueryRequest`

NewAccessProfileMetadataBulkUpdateByQueryRequest instantiates a new AccessProfileMetadataBulkUpdateByQueryRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessProfileMetadataBulkUpdateByQueryRequestWithDefaults

`func NewAccessProfileMetadataBulkUpdateByQueryRequestWithDefaults() *AccessProfileMetadataBulkUpdateByQueryRequest`

NewAccessProfileMetadataBulkUpdateByQueryRequestWithDefaults instantiates a new AccessProfileMetadataBulkUpdateByQueryRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQuery

`func (o *AccessProfileMetadataBulkUpdateByQueryRequest) GetQuery() map[string]interface{}`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *AccessProfileMetadataBulkUpdateByQueryRequest) GetQueryOk() (*map[string]interface{}, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *AccessProfileMetadataBulkUpdateByQueryRequest) SetQuery(v map[string]interface{})`

SetQuery sets Query field to given value.


### GetOperation

`func (o *AccessProfileMetadataBulkUpdateByQueryRequest) GetOperation() string`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *AccessProfileMetadataBulkUpdateByQueryRequest) GetOperationOk() (*string, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *AccessProfileMetadataBulkUpdateByQueryRequest) SetOperation(v string)`

SetOperation sets Operation field to given value.


### GetReplaceScope

`func (o *AccessProfileMetadataBulkUpdateByQueryRequest) GetReplaceScope() string`

GetReplaceScope returns the ReplaceScope field if non-nil, zero value otherwise.

### GetReplaceScopeOk

`func (o *AccessProfileMetadataBulkUpdateByQueryRequest) GetReplaceScopeOk() (*string, bool)`

GetReplaceScopeOk returns a tuple with the ReplaceScope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReplaceScope

`func (o *AccessProfileMetadataBulkUpdateByQueryRequest) SetReplaceScope(v string)`

SetReplaceScope sets ReplaceScope field to given value.


### GetValues

`func (o *AccessProfileMetadataBulkUpdateByQueryRequest) GetValues() []AccessProfileMetadataBulkUpdateByIdRequestValuesInner`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *AccessProfileMetadataBulkUpdateByQueryRequest) GetValuesOk() (*[]AccessProfileMetadataBulkUpdateByIdRequestValuesInner, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *AccessProfileMetadataBulkUpdateByQueryRequest) SetValues(v []AccessProfileMetadataBulkUpdateByIdRequestValuesInner)`

SetValues sets Values field to given value.




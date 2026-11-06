# AccessProfileMetadataBulkUpdateByIdRequest

# AccessProfileMetadataBulkUpdateByIdRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessProfiles** | **[]string** | The IDs of the access profiles to update. | 
**Operation** | **string** | The operation to be performed | 
**ReplaceScope** | **string** | The choice of update scope. **ATTRIBUTE** replaces only the values of the attributes named in `values`, and **ALL** replaces every metadata attribute on the access profile. | 
**Values** | [**[]AccessProfileMetadataBulkUpdateByIdRequestValuesInner**](access-profile-metadata-bulk-update-by-id-request-values-inner) | The metadata to be updated, including attribute key and value. | 

## Methods

### NewAccessProfileMetadataBulkUpdateByIdRequest

`func NewAccessProfileMetadataBulkUpdateByIdRequest(accessProfiles []string, operation string, replaceScope string, values []AccessProfileMetadataBulkUpdateByIdRequestValuesInner, ) *AccessProfileMetadataBulkUpdateByIdRequest`

NewAccessProfileMetadataBulkUpdateByIdRequest instantiates a new AccessProfileMetadataBulkUpdateByIdRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessProfileMetadataBulkUpdateByIdRequestWithDefaults

`func NewAccessProfileMetadataBulkUpdateByIdRequestWithDefaults() *AccessProfileMetadataBulkUpdateByIdRequest`

NewAccessProfileMetadataBulkUpdateByIdRequestWithDefaults instantiates a new AccessProfileMetadataBulkUpdateByIdRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessProfiles

`func (o *AccessProfileMetadataBulkUpdateByIdRequest) GetAccessProfiles() []string`

GetAccessProfiles returns the AccessProfiles field if non-nil, zero value otherwise.

### GetAccessProfilesOk

`func (o *AccessProfileMetadataBulkUpdateByIdRequest) GetAccessProfilesOk() (*[]string, bool)`

GetAccessProfilesOk returns a tuple with the AccessProfiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessProfiles

`func (o *AccessProfileMetadataBulkUpdateByIdRequest) SetAccessProfiles(v []string)`

SetAccessProfiles sets AccessProfiles field to given value.


### GetOperation

`func (o *AccessProfileMetadataBulkUpdateByIdRequest) GetOperation() string`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *AccessProfileMetadataBulkUpdateByIdRequest) GetOperationOk() (*string, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *AccessProfileMetadataBulkUpdateByIdRequest) SetOperation(v string)`

SetOperation sets Operation field to given value.


### GetReplaceScope

`func (o *AccessProfileMetadataBulkUpdateByIdRequest) GetReplaceScope() string`

GetReplaceScope returns the ReplaceScope field if non-nil, zero value otherwise.

### GetReplaceScopeOk

`func (o *AccessProfileMetadataBulkUpdateByIdRequest) GetReplaceScopeOk() (*string, bool)`

GetReplaceScopeOk returns a tuple with the ReplaceScope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReplaceScope

`func (o *AccessProfileMetadataBulkUpdateByIdRequest) SetReplaceScope(v string)`

SetReplaceScope sets ReplaceScope field to given value.


### GetValues

`func (o *AccessProfileMetadataBulkUpdateByIdRequest) GetValues() []AccessProfileMetadataBulkUpdateByIdRequestValuesInner`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *AccessProfileMetadataBulkUpdateByIdRequest) GetValuesOk() (*[]AccessProfileMetadataBulkUpdateByIdRequestValuesInner, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *AccessProfileMetadataBulkUpdateByIdRequest) SetValues(v []AccessProfileMetadataBulkUpdateByIdRequestValuesInner)`

SetValues sets Values field to given value.




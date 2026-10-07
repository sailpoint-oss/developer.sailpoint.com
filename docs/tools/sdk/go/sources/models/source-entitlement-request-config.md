# SourceEntitlementRequestConfig

# SourceEntitlementRequestConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRequestConfig** | Pointer to [**SourceEntitlementAccessRequestConfig**](source-entitlement-access-request-config) |  | [optional] 
**RevocationRequestConfig** | Pointer to [**SourceEntitlementRevocationRequestConfig**](source-entitlement-revocation-request-config) |  | [optional] 

## Methods

### NewSourceEntitlementRequestConfig

`func NewSourceEntitlementRequestConfig() *SourceEntitlementRequestConfig`

NewSourceEntitlementRequestConfig instantiates a new SourceEntitlementRequestConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceEntitlementRequestConfigWithDefaults

`func NewSourceEntitlementRequestConfigWithDefaults() *SourceEntitlementRequestConfig`

NewSourceEntitlementRequestConfigWithDefaults instantiates a new SourceEntitlementRequestConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessRequestConfig

`func (o *SourceEntitlementRequestConfig) GetAccessRequestConfig() SourceEntitlementAccessRequestConfig`

GetAccessRequestConfig returns the AccessRequestConfig field if non-nil, zero value otherwise.

### GetAccessRequestConfigOk

`func (o *SourceEntitlementRequestConfig) GetAccessRequestConfigOk() (*SourceEntitlementAccessRequestConfig, bool)`

GetAccessRequestConfigOk returns a tuple with the AccessRequestConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessRequestConfig

`func (o *SourceEntitlementRequestConfig) SetAccessRequestConfig(v SourceEntitlementAccessRequestConfig)`

SetAccessRequestConfig sets AccessRequestConfig field to given value.

### HasAccessRequestConfig

`func (o *SourceEntitlementRequestConfig) HasAccessRequestConfig() bool`

HasAccessRequestConfig returns a boolean if a field has been set.

### GetRevocationRequestConfig

`func (o *SourceEntitlementRequestConfig) GetRevocationRequestConfig() SourceEntitlementRevocationRequestConfig`

GetRevocationRequestConfig returns the RevocationRequestConfig field if non-nil, zero value otherwise.

### GetRevocationRequestConfigOk

`func (o *SourceEntitlementRequestConfig) GetRevocationRequestConfigOk() (*SourceEntitlementRevocationRequestConfig, bool)`

GetRevocationRequestConfigOk returns a tuple with the RevocationRequestConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevocationRequestConfig

`func (o *SourceEntitlementRequestConfig) SetRevocationRequestConfig(v SourceEntitlementRevocationRequestConfig)`

SetRevocationRequestConfig sets RevocationRequestConfig field to given value.

### HasRevocationRequestConfig

`func (o *SourceEntitlementRequestConfig) HasRevocationRequestConfig() bool`

HasRevocationRequestConfig returns a boolean if a field has been set.



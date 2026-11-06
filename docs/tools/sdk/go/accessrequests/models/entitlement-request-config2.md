# EntitlementRequestConfig2

# EntitlementRequestConfig2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRequestConfig** | Pointer to [**EntitlementAccessRequestConfig**](entitlement-access-request-config) |  | [optional] 
**RevocationRequestConfig** | Pointer to [**EntitlementRevocationRequestConfig**](entitlement-revocation-request-config) |  | [optional] 

## Methods

### NewEntitlementRequestConfig2

`func NewEntitlementRequestConfig2() *EntitlementRequestConfig2`

NewEntitlementRequestConfig2 instantiates a new EntitlementRequestConfig2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementRequestConfig2WithDefaults

`func NewEntitlementRequestConfig2WithDefaults() *EntitlementRequestConfig2`

NewEntitlementRequestConfig2WithDefaults instantiates a new EntitlementRequestConfig2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessRequestConfig

`func (o *EntitlementRequestConfig2) GetAccessRequestConfig() EntitlementAccessRequestConfig`

GetAccessRequestConfig returns the AccessRequestConfig field if non-nil, zero value otherwise.

### GetAccessRequestConfigOk

`func (o *EntitlementRequestConfig2) GetAccessRequestConfigOk() (*EntitlementAccessRequestConfig, bool)`

GetAccessRequestConfigOk returns a tuple with the AccessRequestConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessRequestConfig

`func (o *EntitlementRequestConfig2) SetAccessRequestConfig(v EntitlementAccessRequestConfig)`

SetAccessRequestConfig sets AccessRequestConfig field to given value.

### HasAccessRequestConfig

`func (o *EntitlementRequestConfig2) HasAccessRequestConfig() bool`

HasAccessRequestConfig returns a boolean if a field has been set.

### GetRevocationRequestConfig

`func (o *EntitlementRequestConfig2) GetRevocationRequestConfig() EntitlementRevocationRequestConfig`

GetRevocationRequestConfig returns the RevocationRequestConfig field if non-nil, zero value otherwise.

### GetRevocationRequestConfigOk

`func (o *EntitlementRequestConfig2) GetRevocationRequestConfigOk() (*EntitlementRevocationRequestConfig, bool)`

GetRevocationRequestConfigOk returns a tuple with the RevocationRequestConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevocationRequestConfig

`func (o *EntitlementRequestConfig2) SetRevocationRequestConfig(v EntitlementRevocationRequestConfig)`

SetRevocationRequestConfig sets RevocationRequestConfig field to given value.

### HasRevocationRequestConfig

`func (o *EntitlementRequestConfig2) HasRevocationRequestConfig() bool`

HasRevocationRequestConfig returns a boolean if a field has been set.



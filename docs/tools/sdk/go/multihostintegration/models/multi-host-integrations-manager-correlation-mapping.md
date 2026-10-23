# MultiHostIntegrationsManagerCorrelationMapping

# MultiHostIntegrationsManagerCorrelationMapping

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountAttributeName** | Pointer to **string** | Name of the attribute to use for manager correlation. The value found on the account attribute will be used to lookup the manager's identity. | [optional] 
**IdentityAttributeName** | Pointer to **string** | Name of the identity attribute to search when trying to find a manager using the value from the accountAttribute. | [optional] 

## Methods

### NewMultiHostIntegrationsManagerCorrelationMapping

`func NewMultiHostIntegrationsManagerCorrelationMapping() *MultiHostIntegrationsManagerCorrelationMapping`

NewMultiHostIntegrationsManagerCorrelationMapping instantiates a new MultiHostIntegrationsManagerCorrelationMapping object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMultiHostIntegrationsManagerCorrelationMappingWithDefaults

`func NewMultiHostIntegrationsManagerCorrelationMappingWithDefaults() *MultiHostIntegrationsManagerCorrelationMapping`

NewMultiHostIntegrationsManagerCorrelationMappingWithDefaults instantiates a new MultiHostIntegrationsManagerCorrelationMapping object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountAttributeName

`func (o *MultiHostIntegrationsManagerCorrelationMapping) GetAccountAttributeName() string`

GetAccountAttributeName returns the AccountAttributeName field if non-nil, zero value otherwise.

### GetAccountAttributeNameOk

`func (o *MultiHostIntegrationsManagerCorrelationMapping) GetAccountAttributeNameOk() (*string, bool)`

GetAccountAttributeNameOk returns a tuple with the AccountAttributeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountAttributeName

`func (o *MultiHostIntegrationsManagerCorrelationMapping) SetAccountAttributeName(v string)`

SetAccountAttributeName sets AccountAttributeName field to given value.

### HasAccountAttributeName

`func (o *MultiHostIntegrationsManagerCorrelationMapping) HasAccountAttributeName() bool`

HasAccountAttributeName returns a boolean if a field has been set.

### GetIdentityAttributeName

`func (o *MultiHostIntegrationsManagerCorrelationMapping) GetIdentityAttributeName() string`

GetIdentityAttributeName returns the IdentityAttributeName field if non-nil, zero value otherwise.

### GetIdentityAttributeNameOk

`func (o *MultiHostIntegrationsManagerCorrelationMapping) GetIdentityAttributeNameOk() (*string, bool)`

GetIdentityAttributeNameOk returns a tuple with the IdentityAttributeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityAttributeName

`func (o *MultiHostIntegrationsManagerCorrelationMapping) SetIdentityAttributeName(v string)`

SetIdentityAttributeName sets IdentityAttributeName field to given value.

### HasIdentityAttributeName

`func (o *MultiHostIntegrationsManagerCorrelationMapping) HasIdentityAttributeName() bool`

HasIdentityAttributeName returns a boolean if a field has been set.



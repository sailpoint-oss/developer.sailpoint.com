# PublicIdentityAttributeConfig

# PublicIdentityAttributeConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | **string** | Attribute / search field key (e.g. email, manager.displayName). | 
**Name** | **string** | Human-readable display name for the attribute. | 

## Methods

### NewPublicIdentityAttributeConfig

`func NewPublicIdentityAttributeConfig(key string, name string, ) *PublicIdentityAttributeConfig`

NewPublicIdentityAttributeConfig instantiates a new PublicIdentityAttributeConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPublicIdentityAttributeConfigWithDefaults

`func NewPublicIdentityAttributeConfigWithDefaults() *PublicIdentityAttributeConfig`

NewPublicIdentityAttributeConfigWithDefaults instantiates a new PublicIdentityAttributeConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKey

`func (o *PublicIdentityAttributeConfig) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *PublicIdentityAttributeConfig) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *PublicIdentityAttributeConfig) SetKey(v string)`

SetKey sets Key field to given value.


### GetName

`func (o *PublicIdentityAttributeConfig) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PublicIdentityAttributeConfig) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PublicIdentityAttributeConfig) SetName(v string)`

SetName sets Name field to given value.




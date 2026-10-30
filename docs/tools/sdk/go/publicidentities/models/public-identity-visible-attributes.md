# PublicIdentityVisibleAttributes

# PublicIdentityVisibleAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DefaultAttributes** | [**[]PublicIdentityAttributeConfig**](public-identity-attribute-config) | Always-available public-identity field keys for search and sort. Fixed platform list. `key` is the search field name; `name` is the display label. | 
**ConfiguredAttributes** | [**[]PublicIdentityAttributeConfig**](public-identity-attribute-config) | Tenant-configured public attributes from public-identities config (same source as public-identities-config). These keys are also allowed in search/sort and appear under `attributes` on search results. | 

## Methods

### NewPublicIdentityVisibleAttributes

`func NewPublicIdentityVisibleAttributes(defaultAttributes []PublicIdentityAttributeConfig, configuredAttributes []PublicIdentityAttributeConfig, ) *PublicIdentityVisibleAttributes`

NewPublicIdentityVisibleAttributes instantiates a new PublicIdentityVisibleAttributes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPublicIdentityVisibleAttributesWithDefaults

`func NewPublicIdentityVisibleAttributesWithDefaults() *PublicIdentityVisibleAttributes`

NewPublicIdentityVisibleAttributesWithDefaults instantiates a new PublicIdentityVisibleAttributes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDefaultAttributes

`func (o *PublicIdentityVisibleAttributes) GetDefaultAttributes() []PublicIdentityAttributeConfig`

GetDefaultAttributes returns the DefaultAttributes field if non-nil, zero value otherwise.

### GetDefaultAttributesOk

`func (o *PublicIdentityVisibleAttributes) GetDefaultAttributesOk() (*[]PublicIdentityAttributeConfig, bool)`

GetDefaultAttributesOk returns a tuple with the DefaultAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultAttributes

`func (o *PublicIdentityVisibleAttributes) SetDefaultAttributes(v []PublicIdentityAttributeConfig)`

SetDefaultAttributes sets DefaultAttributes field to given value.


### GetConfiguredAttributes

`func (o *PublicIdentityVisibleAttributes) GetConfiguredAttributes() []PublicIdentityAttributeConfig`

GetConfiguredAttributes returns the ConfiguredAttributes field if non-nil, zero value otherwise.

### GetConfiguredAttributesOk

`func (o *PublicIdentityVisibleAttributes) GetConfiguredAttributesOk() (*[]PublicIdentityAttributeConfig, bool)`

GetConfiguredAttributesOk returns a tuple with the ConfiguredAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfiguredAttributes

`func (o *PublicIdentityVisibleAttributes) SetConfiguredAttributes(v []PublicIdentityAttributeConfig)`

SetConfiguredAttributes sets ConfiguredAttributes field to given value.




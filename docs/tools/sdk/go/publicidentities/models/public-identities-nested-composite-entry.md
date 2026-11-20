# PublicIdentitiesNestedCompositeEntry

# PublicIdentitiesNestedCompositeEntry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**QueryType** | **string** | Entry type discriminator. Must be COMPOSITE for nested query sets. | 
**QuerySet** | [**PublicIdentitiesNestedQuerySet**](public-identities-nested-query-set) | Nested query set for this COMPOSITE entry. | 

## Methods

### NewPublicIdentitiesNestedCompositeEntry

`func NewPublicIdentitiesNestedCompositeEntry(queryType string, querySet PublicIdentitiesNestedQuerySet, ) *PublicIdentitiesNestedCompositeEntry`

NewPublicIdentitiesNestedCompositeEntry instantiates a new PublicIdentitiesNestedCompositeEntry object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPublicIdentitiesNestedCompositeEntryWithDefaults

`func NewPublicIdentitiesNestedCompositeEntryWithDefaults() *PublicIdentitiesNestedCompositeEntry`

NewPublicIdentitiesNestedCompositeEntryWithDefaults instantiates a new PublicIdentitiesNestedCompositeEntry object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQueryType

`func (o *PublicIdentitiesNestedCompositeEntry) GetQueryType() string`

GetQueryType returns the QueryType field if non-nil, zero value otherwise.

### GetQueryTypeOk

`func (o *PublicIdentitiesNestedCompositeEntry) GetQueryTypeOk() (*string, bool)`

GetQueryTypeOk returns a tuple with the QueryType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueryType

`func (o *PublicIdentitiesNestedCompositeEntry) SetQueryType(v string)`

SetQueryType sets QueryType field to given value.


### GetQuerySet

`func (o *PublicIdentitiesNestedCompositeEntry) GetQuerySet() PublicIdentitiesNestedQuerySet`

GetQuerySet returns the QuerySet field if non-nil, zero value otherwise.

### GetQuerySetOk

`func (o *PublicIdentitiesNestedCompositeEntry) GetQuerySetOk() (*PublicIdentitiesNestedQuerySet, bool)`

GetQuerySetOk returns a tuple with the QuerySet field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuerySet

`func (o *PublicIdentitiesNestedCompositeEntry) SetQuerySet(v PublicIdentitiesNestedQuerySet)`

SetQuerySet sets QuerySet field to given value.




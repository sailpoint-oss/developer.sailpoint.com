# PublicIdentitiesCompositeEntry

# PublicIdentitiesCompositeEntry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**QueryType** | **string** | Entry type discriminator. Must be COMPOSITE for nested query sets. | 
**TextQuery** | [**PublicIdentitiesTextQuery**](public-identities-text-query) | Text query clause for this TEXT entry. | 
**QuerySet** | [**PublicIdentitiesNestedQuerySet**](public-identities-nested-query-set) | Nested query set for this COMPOSITE entry. | 

## Methods

### NewPublicIdentitiesCompositeEntry

`func NewPublicIdentitiesCompositeEntry(queryType string, textQuery PublicIdentitiesTextQuery, querySet PublicIdentitiesNestedQuerySet, ) *PublicIdentitiesCompositeEntry`

NewPublicIdentitiesCompositeEntry instantiates a new PublicIdentitiesCompositeEntry object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPublicIdentitiesCompositeEntryWithDefaults

`func NewPublicIdentitiesCompositeEntryWithDefaults() *PublicIdentitiesCompositeEntry`

NewPublicIdentitiesCompositeEntryWithDefaults instantiates a new PublicIdentitiesCompositeEntry object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQueryType

`func (o *PublicIdentitiesCompositeEntry) GetQueryType() string`

GetQueryType returns the QueryType field if non-nil, zero value otherwise.

### GetQueryTypeOk

`func (o *PublicIdentitiesCompositeEntry) GetQueryTypeOk() (*string, bool)`

GetQueryTypeOk returns a tuple with the QueryType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueryType

`func (o *PublicIdentitiesCompositeEntry) SetQueryType(v string)`

SetQueryType sets QueryType field to given value.


### GetTextQuery

`func (o *PublicIdentitiesCompositeEntry) GetTextQuery() PublicIdentitiesTextQuery`

GetTextQuery returns the TextQuery field if non-nil, zero value otherwise.

### GetTextQueryOk

`func (o *PublicIdentitiesCompositeEntry) GetTextQueryOk() (*PublicIdentitiesTextQuery, bool)`

GetTextQueryOk returns a tuple with the TextQuery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTextQuery

`func (o *PublicIdentitiesCompositeEntry) SetTextQuery(v PublicIdentitiesTextQuery)`

SetTextQuery sets TextQuery field to given value.


### GetQuerySet

`func (o *PublicIdentitiesCompositeEntry) GetQuerySet() PublicIdentitiesNestedQuerySet`

GetQuerySet returns the QuerySet field if non-nil, zero value otherwise.

### GetQuerySetOk

`func (o *PublicIdentitiesCompositeEntry) GetQuerySetOk() (*PublicIdentitiesNestedQuerySet, bool)`

GetQuerySetOk returns a tuple with the QuerySet field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuerySet

`func (o *PublicIdentitiesCompositeEntry) SetQuerySet(v PublicIdentitiesNestedQuerySet)`

SetQuerySet sets QuerySet field to given value.




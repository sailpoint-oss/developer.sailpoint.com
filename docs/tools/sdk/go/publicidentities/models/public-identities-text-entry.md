# PublicIdentitiesTextEntry

# PublicIdentitiesTextEntry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**QueryType** | **string** | Entry type discriminator. Must be TEXT for text query entries. | 
**TextQuery** | [**PublicIdentitiesTextQuery**](public-identities-text-query) | Text query clause for this TEXT entry. | 

## Methods

### NewPublicIdentitiesTextEntry

`func NewPublicIdentitiesTextEntry(queryType string, textQuery PublicIdentitiesTextQuery, ) *PublicIdentitiesTextEntry`

NewPublicIdentitiesTextEntry instantiates a new PublicIdentitiesTextEntry object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPublicIdentitiesTextEntryWithDefaults

`func NewPublicIdentitiesTextEntryWithDefaults() *PublicIdentitiesTextEntry`

NewPublicIdentitiesTextEntryWithDefaults instantiates a new PublicIdentitiesTextEntry object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQueryType

`func (o *PublicIdentitiesTextEntry) GetQueryType() string`

GetQueryType returns the QueryType field if non-nil, zero value otherwise.

### GetQueryTypeOk

`func (o *PublicIdentitiesTextEntry) GetQueryTypeOk() (*string, bool)`

GetQueryTypeOk returns a tuple with the QueryType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueryType

`func (o *PublicIdentitiesTextEntry) SetQueryType(v string)`

SetQueryType sets QueryType field to given value.


### GetTextQuery

`func (o *PublicIdentitiesTextEntry) GetTextQuery() PublicIdentitiesTextQuery`

GetTextQuery returns the TextQuery field if non-nil, zero value otherwise.

### GetTextQueryOk

`func (o *PublicIdentitiesTextEntry) GetTextQueryOk() (*PublicIdentitiesTextQuery, bool)`

GetTextQueryOk returns a tuple with the TextQuery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTextQuery

`func (o *PublicIdentitiesTextEntry) SetTextQuery(v PublicIdentitiesTextQuery)`

SetTextQuery sets TextQuery field to given value.




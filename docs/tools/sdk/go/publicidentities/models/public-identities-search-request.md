# PublicIdentitiesSearchRequest

# PublicIdentitiesSearchRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**QueryType** | **string** | Search query type. Must be COMPOSITE. | 
**Indices** | **[]string** | Search indices. Must be exactly [\"identities\"]. | 
**IncludeNested** | **bool** | Must be false for public identities search. | 
**Sort** | Pointer to **[]string** | Optional attribute keys to sort by. Base keys must match those returned by GET /public-identities/v2/visible-attributes (defaultAttributes + configuredAttributes). Optional \"attributes.\" prefix and/or \".exact\" suffix. | [optional] 
**QuerySet** | [**PublicIdentitiesSearchRequestQuerySet**](public-identities-search-request-query-set) |  | 

## Methods

### NewPublicIdentitiesSearchRequest

`func NewPublicIdentitiesSearchRequest(queryType string, indices []string, includeNested bool, querySet PublicIdentitiesSearchRequestQuerySet, ) *PublicIdentitiesSearchRequest`

NewPublicIdentitiesSearchRequest instantiates a new PublicIdentitiesSearchRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPublicIdentitiesSearchRequestWithDefaults

`func NewPublicIdentitiesSearchRequestWithDefaults() *PublicIdentitiesSearchRequest`

NewPublicIdentitiesSearchRequestWithDefaults instantiates a new PublicIdentitiesSearchRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQueryType

`func (o *PublicIdentitiesSearchRequest) GetQueryType() string`

GetQueryType returns the QueryType field if non-nil, zero value otherwise.

### GetQueryTypeOk

`func (o *PublicIdentitiesSearchRequest) GetQueryTypeOk() (*string, bool)`

GetQueryTypeOk returns a tuple with the QueryType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueryType

`func (o *PublicIdentitiesSearchRequest) SetQueryType(v string)`

SetQueryType sets QueryType field to given value.


### GetIndices

`func (o *PublicIdentitiesSearchRequest) GetIndices() []string`

GetIndices returns the Indices field if non-nil, zero value otherwise.

### GetIndicesOk

`func (o *PublicIdentitiesSearchRequest) GetIndicesOk() (*[]string, bool)`

GetIndicesOk returns a tuple with the Indices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIndices

`func (o *PublicIdentitiesSearchRequest) SetIndices(v []string)`

SetIndices sets Indices field to given value.


### GetIncludeNested

`func (o *PublicIdentitiesSearchRequest) GetIncludeNested() bool`

GetIncludeNested returns the IncludeNested field if non-nil, zero value otherwise.

### GetIncludeNestedOk

`func (o *PublicIdentitiesSearchRequest) GetIncludeNestedOk() (*bool, bool)`

GetIncludeNestedOk returns a tuple with the IncludeNested field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeNested

`func (o *PublicIdentitiesSearchRequest) SetIncludeNested(v bool)`

SetIncludeNested sets IncludeNested field to given value.


### GetSort

`func (o *PublicIdentitiesSearchRequest) GetSort() []string`

GetSort returns the Sort field if non-nil, zero value otherwise.

### GetSortOk

`func (o *PublicIdentitiesSearchRequest) GetSortOk() (*[]string, bool)`

GetSortOk returns a tuple with the Sort field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSort

`func (o *PublicIdentitiesSearchRequest) SetSort(v []string)`

SetSort sets Sort field to given value.

### HasSort

`func (o *PublicIdentitiesSearchRequest) HasSort() bool`

HasSort returns a boolean if a field has been set.

### GetQuerySet

`func (o *PublicIdentitiesSearchRequest) GetQuerySet() PublicIdentitiesSearchRequestQuerySet`

GetQuerySet returns the QuerySet field if non-nil, zero value otherwise.

### GetQuerySetOk

`func (o *PublicIdentitiesSearchRequest) GetQuerySetOk() (*PublicIdentitiesSearchRequestQuerySet, bool)`

GetQuerySetOk returns a tuple with the QuerySet field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuerySet

`func (o *PublicIdentitiesSearchRequest) SetQuerySet(v PublicIdentitiesSearchRequestQuerySet)`

SetQuerySet sets QuerySet field to given value.




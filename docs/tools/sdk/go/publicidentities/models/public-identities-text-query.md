# PublicIdentitiesTextQuery

# PublicIdentitiesTextQuery

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Fields** | **[]string** | Attribute keys to search. Base keys must match GET /public-identities/v2/visible-attributes (defaultAttributes + configuredAttributes). Optional \"attributes.\" prefix and/or \".exact\" suffix (e.g. email, attributes.email, email.exact, attributes.email.exact). | 
**Terms** | [**[]PublicIdentitiesTextQueryTermsInner**](public-identities-text-query-terms-inner) | Search terms. Each value must be a non-blank string or a JSON boolean. | 
**MatchAny** | Pointer to **bool** | When true, terms/fields are OR'd within this text query. Optional for normal search clauses. The mandatory ACTIVE identityState gate entry must set this to false. | [optional] [default to false]
**Contains** | Pointer to **bool** | When true, matches substrings. Optional for normal search clauses. The mandatory ACTIVE identityState gate entry must set this to false. | [optional] [default to false]
**Strict** | Pointer to **bool** | When true, applies strict matching. Optional for normal search clauses. The mandatory ACTIVE identityState gate entry must set this to true. | [optional] [default to false]

## Methods

### NewPublicIdentitiesTextQuery

`func NewPublicIdentitiesTextQuery(fields []string, terms []PublicIdentitiesTextQueryTermsInner, ) *PublicIdentitiesTextQuery`

NewPublicIdentitiesTextQuery instantiates a new PublicIdentitiesTextQuery object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPublicIdentitiesTextQueryWithDefaults

`func NewPublicIdentitiesTextQueryWithDefaults() *PublicIdentitiesTextQuery`

NewPublicIdentitiesTextQueryWithDefaults instantiates a new PublicIdentitiesTextQuery object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFields

`func (o *PublicIdentitiesTextQuery) GetFields() []string`

GetFields returns the Fields field if non-nil, zero value otherwise.

### GetFieldsOk

`func (o *PublicIdentitiesTextQuery) GetFieldsOk() (*[]string, bool)`

GetFieldsOk returns a tuple with the Fields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFields

`func (o *PublicIdentitiesTextQuery) SetFields(v []string)`

SetFields sets Fields field to given value.


### GetTerms

`func (o *PublicIdentitiesTextQuery) GetTerms() []PublicIdentitiesTextQueryTermsInner`

GetTerms returns the Terms field if non-nil, zero value otherwise.

### GetTermsOk

`func (o *PublicIdentitiesTextQuery) GetTermsOk() (*[]PublicIdentitiesTextQueryTermsInner, bool)`

GetTermsOk returns a tuple with the Terms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerms

`func (o *PublicIdentitiesTextQuery) SetTerms(v []PublicIdentitiesTextQueryTermsInner)`

SetTerms sets Terms field to given value.


### GetMatchAny

`func (o *PublicIdentitiesTextQuery) GetMatchAny() bool`

GetMatchAny returns the MatchAny field if non-nil, zero value otherwise.

### GetMatchAnyOk

`func (o *PublicIdentitiesTextQuery) GetMatchAnyOk() (*bool, bool)`

GetMatchAnyOk returns a tuple with the MatchAny field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatchAny

`func (o *PublicIdentitiesTextQuery) SetMatchAny(v bool)`

SetMatchAny sets MatchAny field to given value.

### HasMatchAny

`func (o *PublicIdentitiesTextQuery) HasMatchAny() bool`

HasMatchAny returns a boolean if a field has been set.

### GetContains

`func (o *PublicIdentitiesTextQuery) GetContains() bool`

GetContains returns the Contains field if non-nil, zero value otherwise.

### GetContainsOk

`func (o *PublicIdentitiesTextQuery) GetContainsOk() (*bool, bool)`

GetContainsOk returns a tuple with the Contains field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContains

`func (o *PublicIdentitiesTextQuery) SetContains(v bool)`

SetContains sets Contains field to given value.

### HasContains

`func (o *PublicIdentitiesTextQuery) HasContains() bool`

HasContains returns a boolean if a field has been set.

### GetStrict

`func (o *PublicIdentitiesTextQuery) GetStrict() bool`

GetStrict returns the Strict field if non-nil, zero value otherwise.

### GetStrictOk

`func (o *PublicIdentitiesTextQuery) GetStrictOk() (*bool, bool)`

GetStrictOk returns a tuple with the Strict field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStrict

`func (o *PublicIdentitiesTextQuery) SetStrict(v bool)`

SetStrict sets Strict field to given value.

### HasStrict

`func (o *PublicIdentitiesTextQuery) HasStrict() bool`

HasStrict returns a boolean if a field has been set.



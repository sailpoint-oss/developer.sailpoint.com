# PublicIdentitiesSearchRequestQuerySet

# PublicIdentitiesSearchRequestQuerySet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MatchAny** | **bool** | When true, entries are OR'd; when false, entries are AND'd. | 
**Entries** | [**[]PublicIdentitiesCompositeEntry**](public-identities-composite-entry) | One or more TEXT or nested COMPOSITE entries. | 

## Methods

### NewPublicIdentitiesSearchRequestQuerySet

`func NewPublicIdentitiesSearchRequestQuerySet(matchAny bool, entries []PublicIdentitiesCompositeEntry, ) *PublicIdentitiesSearchRequestQuerySet`

NewPublicIdentitiesSearchRequestQuerySet instantiates a new PublicIdentitiesSearchRequestQuerySet object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPublicIdentitiesSearchRequestQuerySetWithDefaults

`func NewPublicIdentitiesSearchRequestQuerySetWithDefaults() *PublicIdentitiesSearchRequestQuerySet`

NewPublicIdentitiesSearchRequestQuerySetWithDefaults instantiates a new PublicIdentitiesSearchRequestQuerySet object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMatchAny

`func (o *PublicIdentitiesSearchRequestQuerySet) GetMatchAny() bool`

GetMatchAny returns the MatchAny field if non-nil, zero value otherwise.

### GetMatchAnyOk

`func (o *PublicIdentitiesSearchRequestQuerySet) GetMatchAnyOk() (*bool, bool)`

GetMatchAnyOk returns a tuple with the MatchAny field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatchAny

`func (o *PublicIdentitiesSearchRequestQuerySet) SetMatchAny(v bool)`

SetMatchAny sets MatchAny field to given value.


### GetEntries

`func (o *PublicIdentitiesSearchRequestQuerySet) GetEntries() []PublicIdentitiesCompositeEntry`

GetEntries returns the Entries field if non-nil, zero value otherwise.

### GetEntriesOk

`func (o *PublicIdentitiesSearchRequestQuerySet) GetEntriesOk() (*[]PublicIdentitiesCompositeEntry, bool)`

GetEntriesOk returns a tuple with the Entries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntries

`func (o *PublicIdentitiesSearchRequestQuerySet) SetEntries(v []PublicIdentitiesCompositeEntry)`

SetEntries sets Entries field to given value.




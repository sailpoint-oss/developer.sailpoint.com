# PublicIdentitiesNestedQuerySet

# PublicIdentitiesNestedQuerySet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MatchAny** | **bool** | When true, entries are OR'd; when false, entries are AND'd. | 
**Entries** | [**[]PublicIdentitiesTextEntry**](public-identities-text-entry) | One or more TEXT entries. | 

## Methods

### NewPublicIdentitiesNestedQuerySet

`func NewPublicIdentitiesNestedQuerySet(matchAny bool, entries []PublicIdentitiesTextEntry, ) *PublicIdentitiesNestedQuerySet`

NewPublicIdentitiesNestedQuerySet instantiates a new PublicIdentitiesNestedQuerySet object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPublicIdentitiesNestedQuerySetWithDefaults

`func NewPublicIdentitiesNestedQuerySetWithDefaults() *PublicIdentitiesNestedQuerySet`

NewPublicIdentitiesNestedQuerySetWithDefaults instantiates a new PublicIdentitiesNestedQuerySet object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMatchAny

`func (o *PublicIdentitiesNestedQuerySet) GetMatchAny() bool`

GetMatchAny returns the MatchAny field if non-nil, zero value otherwise.

### GetMatchAnyOk

`func (o *PublicIdentitiesNestedQuerySet) GetMatchAnyOk() (*bool, bool)`

GetMatchAnyOk returns a tuple with the MatchAny field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatchAny

`func (o *PublicIdentitiesNestedQuerySet) SetMatchAny(v bool)`

SetMatchAny sets MatchAny field to given value.


### GetEntries

`func (o *PublicIdentitiesNestedQuerySet) GetEntries() []PublicIdentitiesTextEntry`

GetEntries returns the Entries field if non-nil, zero value otherwise.

### GetEntriesOk

`func (o *PublicIdentitiesNestedQuerySet) GetEntriesOk() (*[]PublicIdentitiesTextEntry, bool)`

GetEntriesOk returns a tuple with the Entries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntries

`func (o *PublicIdentitiesNestedQuerySet) SetEntries(v []PublicIdentitiesTextEntry)`

SetEntries sets Entries field to given value.




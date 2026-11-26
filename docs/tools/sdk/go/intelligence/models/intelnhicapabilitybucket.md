# Intelnhicapabilitybucket

# Intelnhicapabilitybucket

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | [**[]Intelnhicapabilitywire**](intelnhicapabilitywire) | Capabilities of this kind linked to the identity. | 
**TotalCount** | Pointer to **int32** | Total count for this kind. Omitted when items is empty. | [optional] 
**Next** | Pointer to **string** | URL for the next page of this kind. Omitted when all rows fit on this page. | [optional] 

## Methods

### NewIntelnhicapabilitybucket

`func NewIntelnhicapabilitybucket(items []Intelnhicapabilitywire, ) *Intelnhicapabilitybucket`

NewIntelnhicapabilitybucket instantiates a new Intelnhicapabilitybucket object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntelnhicapabilitybucketWithDefaults

`func NewIntelnhicapabilitybucketWithDefaults() *Intelnhicapabilitybucket`

NewIntelnhicapabilitybucketWithDefaults instantiates a new Intelnhicapabilitybucket object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetItems

`func (o *Intelnhicapabilitybucket) GetItems() []Intelnhicapabilitywire`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *Intelnhicapabilitybucket) GetItemsOk() (*[]Intelnhicapabilitywire, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *Intelnhicapabilitybucket) SetItems(v []Intelnhicapabilitywire)`

SetItems sets Items field to given value.


### GetTotalCount

`func (o *Intelnhicapabilitybucket) GetTotalCount() int32`

GetTotalCount returns the TotalCount field if non-nil, zero value otherwise.

### GetTotalCountOk

`func (o *Intelnhicapabilitybucket) GetTotalCountOk() (*int32, bool)`

GetTotalCountOk returns a tuple with the TotalCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalCount

`func (o *Intelnhicapabilitybucket) SetTotalCount(v int32)`

SetTotalCount sets TotalCount field to given value.

### HasTotalCount

`func (o *Intelnhicapabilitybucket) HasTotalCount() bool`

HasTotalCount returns a boolean if a field has been set.

### GetNext

`func (o *Intelnhicapabilitybucket) GetNext() string`

GetNext returns the Next field if non-nil, zero value otherwise.

### GetNextOk

`func (o *Intelnhicapabilitybucket) GetNextOk() (*string, bool)`

GetNextOk returns a tuple with the Next field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNext

`func (o *Intelnhicapabilitybucket) SetNext(v string)`

SetNext sets Next field to given value.

### HasNext

`func (o *Intelnhicapabilitybucket) HasNext() bool`

HasNext returns a boolean if a field has been set.



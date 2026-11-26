# Intelnonhumanidentityownedslice

# Intelnonhumanidentityownedslice

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | [**[]Intelnonhumanidentityownershipitem**](intelnonhumanidentityownershipitem) | First page of owned non-human identities for this role. | 
**TotalCount** | Pointer to **int32** | Total number of owned non-human identities in this role; omitted when items is empty. | [optional] 
**Next** | Pointer to **string** | Absolute URL to the next page for this category and ownership role; present when totalCount exceeds the items returned on this page. Includes `ownershipRole`, `limit`, `offset`, and `count=true`.  | [optional] 

## Methods

### NewIntelnonhumanidentityownedslice

`func NewIntelnonhumanidentityownedslice(items []Intelnonhumanidentityownershipitem, ) *Intelnonhumanidentityownedslice`

NewIntelnonhumanidentityownedslice instantiates a new Intelnonhumanidentityownedslice object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntelnonhumanidentityownedsliceWithDefaults

`func NewIntelnonhumanidentityownedsliceWithDefaults() *Intelnonhumanidentityownedslice`

NewIntelnonhumanidentityownedsliceWithDefaults instantiates a new Intelnonhumanidentityownedslice object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetItems

`func (o *Intelnonhumanidentityownedslice) GetItems() []Intelnonhumanidentityownershipitem`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *Intelnonhumanidentityownedslice) GetItemsOk() (*[]Intelnonhumanidentityownershipitem, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *Intelnonhumanidentityownedslice) SetItems(v []Intelnonhumanidentityownershipitem)`

SetItems sets Items field to given value.


### GetTotalCount

`func (o *Intelnonhumanidentityownedslice) GetTotalCount() int32`

GetTotalCount returns the TotalCount field if non-nil, zero value otherwise.

### GetTotalCountOk

`func (o *Intelnonhumanidentityownedslice) GetTotalCountOk() (*int32, bool)`

GetTotalCountOk returns a tuple with the TotalCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalCount

`func (o *Intelnonhumanidentityownedslice) SetTotalCount(v int32)`

SetTotalCount sets TotalCount field to given value.

### HasTotalCount

`func (o *Intelnonhumanidentityownedslice) HasTotalCount() bool`

HasTotalCount returns a boolean if a field has been set.

### GetNext

`func (o *Intelnonhumanidentityownedslice) GetNext() string`

GetNext returns the Next field if non-nil, zero value otherwise.

### GetNextOk

`func (o *Intelnonhumanidentityownedslice) GetNextOk() (*string, bool)`

GetNextOk returns a tuple with the Next field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNext

`func (o *Intelnonhumanidentityownedslice) SetNext(v string)`

SetNext sets Next field to given value.

### HasNext

`func (o *Intelnonhumanidentityownedslice) HasNext() bool`

HasNext returns a boolean if a field has been set.



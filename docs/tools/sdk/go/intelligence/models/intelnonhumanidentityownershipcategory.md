# Intelnonhumanidentityownershipcategory

# Intelnonhumanidentityownershipcategory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PrimaryOwned** | Pointer to [**Intelnonhumanidentityownedslice**](intelnonhumanidentityownedslice) | First page of non-human identities for which this human is the primary owner. | [optional] 
**SecondaryOwned** | Pointer to [**Intelnonhumanidentityownedslice**](intelnonhumanidentityownedslice) | First page of non-human identities for which this human is a secondary owner. | [optional] 
**Message** | Pointer to **string** | Human-readable explanation of the temporary ownership data failure. | [optional] 
**Reason** | Pointer to **string** | Machine-readable reason code for the category-level ownership failure. | [optional] 

## Methods

### NewIntelnonhumanidentityownershipcategory

`func NewIntelnonhumanidentityownershipcategory() *Intelnonhumanidentityownershipcategory`

NewIntelnonhumanidentityownershipcategory instantiates a new Intelnonhumanidentityownershipcategory object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntelnonhumanidentityownershipcategoryWithDefaults

`func NewIntelnonhumanidentityownershipcategoryWithDefaults() *Intelnonhumanidentityownershipcategory`

NewIntelnonhumanidentityownershipcategoryWithDefaults instantiates a new Intelnonhumanidentityownershipcategory object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPrimaryOwned

`func (o *Intelnonhumanidentityownershipcategory) GetPrimaryOwned() Intelnonhumanidentityownedslice`

GetPrimaryOwned returns the PrimaryOwned field if non-nil, zero value otherwise.

### GetPrimaryOwnedOk

`func (o *Intelnonhumanidentityownershipcategory) GetPrimaryOwnedOk() (*Intelnonhumanidentityownedslice, bool)`

GetPrimaryOwnedOk returns a tuple with the PrimaryOwned field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryOwned

`func (o *Intelnonhumanidentityownershipcategory) SetPrimaryOwned(v Intelnonhumanidentityownedslice)`

SetPrimaryOwned sets PrimaryOwned field to given value.

### HasPrimaryOwned

`func (o *Intelnonhumanidentityownershipcategory) HasPrimaryOwned() bool`

HasPrimaryOwned returns a boolean if a field has been set.

### GetSecondaryOwned

`func (o *Intelnonhumanidentityownershipcategory) GetSecondaryOwned() Intelnonhumanidentityownedslice`

GetSecondaryOwned returns the SecondaryOwned field if non-nil, zero value otherwise.

### GetSecondaryOwnedOk

`func (o *Intelnonhumanidentityownershipcategory) GetSecondaryOwnedOk() (*Intelnonhumanidentityownedslice, bool)`

GetSecondaryOwnedOk returns a tuple with the SecondaryOwned field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecondaryOwned

`func (o *Intelnonhumanidentityownershipcategory) SetSecondaryOwned(v Intelnonhumanidentityownedslice)`

SetSecondaryOwned sets SecondaryOwned field to given value.

### HasSecondaryOwned

`func (o *Intelnonhumanidentityownershipcategory) HasSecondaryOwned() bool`

HasSecondaryOwned returns a boolean if a field has been set.

### GetMessage

`func (o *Intelnonhumanidentityownershipcategory) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *Intelnonhumanidentityownershipcategory) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *Intelnonhumanidentityownershipcategory) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *Intelnonhumanidentityownershipcategory) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetReason

`func (o *Intelnonhumanidentityownershipcategory) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *Intelnonhumanidentityownershipcategory) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *Intelnonhumanidentityownershipcategory) SetReason(v string)`

SetReason sets Reason field to given value.

### HasReason

`func (o *Intelnonhumanidentityownershipcategory) HasReason() bool`

HasReason returns a boolean if a field has been set.



# Intelnonhumanidentityownershipitem

# Intelnonhumanidentityownershipitem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Identity Security Cloud identifier for the owned non-human identity. | 
**DisplayName** | **string** | Preferred display name for the owned non-human identity. | 
**Source** | Pointer to [**Intelmachinesourcewire**](intelmachinesourcewire) | Source of the owned non-human identity. | [optional] 

## Methods

### NewIntelnonhumanidentityownershipitem

`func NewIntelnonhumanidentityownershipitem(id string, displayName string, ) *Intelnonhumanidentityownershipitem`

NewIntelnonhumanidentityownershipitem instantiates a new Intelnonhumanidentityownershipitem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntelnonhumanidentityownershipitemWithDefaults

`func NewIntelnonhumanidentityownershipitemWithDefaults() *Intelnonhumanidentityownershipitem`

NewIntelnonhumanidentityownershipitemWithDefaults instantiates a new Intelnonhumanidentityownershipitem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Intelnonhumanidentityownershipitem) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Intelnonhumanidentityownershipitem) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Intelnonhumanidentityownershipitem) SetId(v string)`

SetId sets Id field to given value.


### GetDisplayName

`func (o *Intelnonhumanidentityownershipitem) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *Intelnonhumanidentityownershipitem) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *Intelnonhumanidentityownershipitem) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.


### GetSource

`func (o *Intelnonhumanidentityownershipitem) GetSource() Intelmachinesourcewire`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *Intelnonhumanidentityownershipitem) GetSourceOk() (*Intelmachinesourcewire, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *Intelnonhumanidentityownershipitem) SetSource(v Intelmachinesourcewire)`

SetSource sets Source field to given value.

### HasSource

`func (o *Intelnonhumanidentityownershipitem) HasSource() bool`

HasSource returns a boolean if a field has been set.



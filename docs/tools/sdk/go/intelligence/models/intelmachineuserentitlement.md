# Intelmachineuserentitlement

# Intelmachineuserentitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceId** | **string** | Source identifier for the entitlement. | 
**EntitlementId** | **string** | Entitlement identifier on the source. | 
**DisplayName** | **string** | Display name for the entitlement. | 
**Source** | Pointer to [**NullableIntelmachinesourcewire**](intelmachinesourcewire) | Resolved source metadata when available upstream. | [optional] 

## Methods

### NewIntelmachineuserentitlement

`func NewIntelmachineuserentitlement(sourceId string, entitlementId string, displayName string, ) *Intelmachineuserentitlement`

NewIntelmachineuserentitlement instantiates a new Intelmachineuserentitlement object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntelmachineuserentitlementWithDefaults

`func NewIntelmachineuserentitlementWithDefaults() *Intelmachineuserentitlement`

NewIntelmachineuserentitlementWithDefaults instantiates a new Intelmachineuserentitlement object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSourceId

`func (o *Intelmachineuserentitlement) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *Intelmachineuserentitlement) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *Intelmachineuserentitlement) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.


### GetEntitlementId

`func (o *Intelmachineuserentitlement) GetEntitlementId() string`

GetEntitlementId returns the EntitlementId field if non-nil, zero value otherwise.

### GetEntitlementIdOk

`func (o *Intelmachineuserentitlement) GetEntitlementIdOk() (*string, bool)`

GetEntitlementIdOk returns a tuple with the EntitlementId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementId

`func (o *Intelmachineuserentitlement) SetEntitlementId(v string)`

SetEntitlementId sets EntitlementId field to given value.


### GetDisplayName

`func (o *Intelmachineuserentitlement) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *Intelmachineuserentitlement) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *Intelmachineuserentitlement) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.


### GetSource

`func (o *Intelmachineuserentitlement) GetSource() Intelmachinesourcewire`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *Intelmachineuserentitlement) GetSourceOk() (*Intelmachinesourcewire, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *Intelmachineuserentitlement) SetSource(v Intelmachinesourcewire)`

SetSource sets Source field to given value.

### HasSource

`func (o *Intelmachineuserentitlement) HasSource() bool`

HasSource returns a boolean if a field has been set.

### SetSourceNil

`func (o *Intelmachineuserentitlement) SetSourceNil(b bool)`

 SetSourceNil sets the value for Source to be an explicit nil

### UnsetSource
`func (o *Intelmachineuserentitlement) UnsetSource()`

UnsetSource ensures that no value is present for Source, not even an explicit nil


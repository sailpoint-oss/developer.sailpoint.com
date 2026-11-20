# Rolepropagationconfigresponse

# Rolepropagationconfigresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | Pointer to **bool** | Indicates if the Role Change Propagation process is enabled for the tenant | [optional] [default to false]
**EnabledDate** | Pointer to **SailPointTime** | The time when Role Change Propagation Process was last enabled on the tenant | [optional] 
**CreatedDate** | Pointer to **SailPointTime** | The time when Role Change Propagation Configuration was first created for the tenant | [optional] 
**ModifiedDate** | Pointer to **SailPointTime** | The time when Role Change Propagation Config was updated on the tenant | [optional] 

## Methods

### NewRolepropagationconfigresponse

`func NewRolepropagationconfigresponse() *Rolepropagationconfigresponse`

NewRolepropagationconfigresponse instantiates a new Rolepropagationconfigresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRolepropagationconfigresponseWithDefaults

`func NewRolepropagationconfigresponseWithDefaults() *Rolepropagationconfigresponse`

NewRolepropagationconfigresponseWithDefaults instantiates a new Rolepropagationconfigresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnabled

`func (o *Rolepropagationconfigresponse) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *Rolepropagationconfigresponse) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *Rolepropagationconfigresponse) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *Rolepropagationconfigresponse) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetEnabledDate

`func (o *Rolepropagationconfigresponse) GetEnabledDate() SailPointTime`

GetEnabledDate returns the EnabledDate field if non-nil, zero value otherwise.

### GetEnabledDateOk

`func (o *Rolepropagationconfigresponse) GetEnabledDateOk() (*SailPointTime, bool)`

GetEnabledDateOk returns a tuple with the EnabledDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabledDate

`func (o *Rolepropagationconfigresponse) SetEnabledDate(v SailPointTime)`

SetEnabledDate sets EnabledDate field to given value.

### HasEnabledDate

`func (o *Rolepropagationconfigresponse) HasEnabledDate() bool`

HasEnabledDate returns a boolean if a field has been set.

### GetCreatedDate

`func (o *Rolepropagationconfigresponse) GetCreatedDate() SailPointTime`

GetCreatedDate returns the CreatedDate field if non-nil, zero value otherwise.

### GetCreatedDateOk

`func (o *Rolepropagationconfigresponse) GetCreatedDateOk() (*SailPointTime, bool)`

GetCreatedDateOk returns a tuple with the CreatedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedDate

`func (o *Rolepropagationconfigresponse) SetCreatedDate(v SailPointTime)`

SetCreatedDate sets CreatedDate field to given value.

### HasCreatedDate

`func (o *Rolepropagationconfigresponse) HasCreatedDate() bool`

HasCreatedDate returns a boolean if a field has been set.

### GetModifiedDate

`func (o *Rolepropagationconfigresponse) GetModifiedDate() SailPointTime`

GetModifiedDate returns the ModifiedDate field if non-nil, zero value otherwise.

### GetModifiedDateOk

`func (o *Rolepropagationconfigresponse) GetModifiedDateOk() (*SailPointTime, bool)`

GetModifiedDateOk returns a tuple with the ModifiedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModifiedDate

`func (o *Rolepropagationconfigresponse) SetModifiedDate(v SailPointTime)`

SetModifiedDate sets ModifiedDate field to given value.

### HasModifiedDate

`func (o *Rolepropagationconfigresponse) HasModifiedDate() bool`

HasModifiedDate returns a boolean if a field has been set.



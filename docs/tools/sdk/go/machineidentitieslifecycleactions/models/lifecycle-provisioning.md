# LifecycleProvisioning

# LifecycleProvisioning

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | Pointer to **Lifecycleprovisioningstatus** |  | [optional] 
**Started** | Pointer to **SailPointTime** | Time when provisioning started (ISO-8601). | [optional] 
**Ended** | Pointer to **SailPointTime** | Time when provisioning ended (ISO-8601). | [optional] 

## Methods

### NewLifecycleProvisioning

`func NewLifecycleProvisioning() *LifecycleProvisioning`

NewLifecycleProvisioning instantiates a new LifecycleProvisioning object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLifecycleProvisioningWithDefaults

`func NewLifecycleProvisioningWithDefaults() *LifecycleProvisioning`

NewLifecycleProvisioningWithDefaults instantiates a new LifecycleProvisioning object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *LifecycleProvisioning) GetStatus() Lifecycleprovisioningstatus`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *LifecycleProvisioning) GetStatusOk() (*Lifecycleprovisioningstatus, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *LifecycleProvisioning) SetStatus(v Lifecycleprovisioningstatus)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *LifecycleProvisioning) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetStarted

`func (o *LifecycleProvisioning) GetStarted() SailPointTime`

GetStarted returns the Started field if non-nil, zero value otherwise.

### GetStartedOk

`func (o *LifecycleProvisioning) GetStartedOk() (*SailPointTime, bool)`

GetStartedOk returns a tuple with the Started field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStarted

`func (o *LifecycleProvisioning) SetStarted(v SailPointTime)`

SetStarted sets Started field to given value.

### HasStarted

`func (o *LifecycleProvisioning) HasStarted() bool`

HasStarted returns a boolean if a field has been set.

### GetEnded

`func (o *LifecycleProvisioning) GetEnded() SailPointTime`

GetEnded returns the Ended field if non-nil, zero value otherwise.

### GetEndedOk

`func (o *LifecycleProvisioning) GetEndedOk() (*SailPointTime, bool)`

GetEndedOk returns a tuple with the Ended field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnded

`func (o *LifecycleProvisioning) SetEnded(v SailPointTime)`

SetEnded sets Ended field to given value.

### HasEnded

`func (o *LifecycleProvisioning) HasEnded() bool`

HasEnded returns a boolean if a field has been set.



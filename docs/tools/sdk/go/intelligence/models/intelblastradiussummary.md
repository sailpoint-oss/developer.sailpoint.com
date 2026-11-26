# Intelblastradiussummary

# Intelblastradiussummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ImpactedSources** | **[]string** | Source systems that may be impacted if compromised. | 
**ImpactedAccounts** | **int32** | Linked machine accounts that may be impacted if compromised. | 
**ImpactedHumans** | **int32** | Unique owners and authorized humans potentially impacted if compromised. | 
**HasEntitlements** | Pointer to **bool** | Whether this NHI holds entitlements included in summary. | [optional] [default to false]
**Environments** | Pointer to **[]string** | Environment labels for impacted access in this summary. | [optional] 
**AccessTypes** | Pointer to **[]string** | Access type labels for impacted access in this summary. | [optional] 

## Methods

### NewIntelblastradiussummary

`func NewIntelblastradiussummary(impactedSources []string, impactedAccounts int32, impactedHumans int32, ) *Intelblastradiussummary`

NewIntelblastradiussummary instantiates a new Intelblastradiussummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntelblastradiussummaryWithDefaults

`func NewIntelblastradiussummaryWithDefaults() *Intelblastradiussummary`

NewIntelblastradiussummaryWithDefaults instantiates a new Intelblastradiussummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetImpactedSources

`func (o *Intelblastradiussummary) GetImpactedSources() []string`

GetImpactedSources returns the ImpactedSources field if non-nil, zero value otherwise.

### GetImpactedSourcesOk

`func (o *Intelblastradiussummary) GetImpactedSourcesOk() (*[]string, bool)`

GetImpactedSourcesOk returns a tuple with the ImpactedSources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImpactedSources

`func (o *Intelblastradiussummary) SetImpactedSources(v []string)`

SetImpactedSources sets ImpactedSources field to given value.


### GetImpactedAccounts

`func (o *Intelblastradiussummary) GetImpactedAccounts() int32`

GetImpactedAccounts returns the ImpactedAccounts field if non-nil, zero value otherwise.

### GetImpactedAccountsOk

`func (o *Intelblastradiussummary) GetImpactedAccountsOk() (*int32, bool)`

GetImpactedAccountsOk returns a tuple with the ImpactedAccounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImpactedAccounts

`func (o *Intelblastradiussummary) SetImpactedAccounts(v int32)`

SetImpactedAccounts sets ImpactedAccounts field to given value.


### GetImpactedHumans

`func (o *Intelblastradiussummary) GetImpactedHumans() int32`

GetImpactedHumans returns the ImpactedHumans field if non-nil, zero value otherwise.

### GetImpactedHumansOk

`func (o *Intelblastradiussummary) GetImpactedHumansOk() (*int32, bool)`

GetImpactedHumansOk returns a tuple with the ImpactedHumans field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImpactedHumans

`func (o *Intelblastradiussummary) SetImpactedHumans(v int32)`

SetImpactedHumans sets ImpactedHumans field to given value.


### GetHasEntitlements

`func (o *Intelblastradiussummary) GetHasEntitlements() bool`

GetHasEntitlements returns the HasEntitlements field if non-nil, zero value otherwise.

### GetHasEntitlementsOk

`func (o *Intelblastradiussummary) GetHasEntitlementsOk() (*bool, bool)`

GetHasEntitlementsOk returns a tuple with the HasEntitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasEntitlements

`func (o *Intelblastradiussummary) SetHasEntitlements(v bool)`

SetHasEntitlements sets HasEntitlements field to given value.

### HasHasEntitlements

`func (o *Intelblastradiussummary) HasHasEntitlements() bool`

HasHasEntitlements returns a boolean if a field has been set.

### GetEnvironments

`func (o *Intelblastradiussummary) GetEnvironments() []string`

GetEnvironments returns the Environments field if non-nil, zero value otherwise.

### GetEnvironmentsOk

`func (o *Intelblastradiussummary) GetEnvironmentsOk() (*[]string, bool)`

GetEnvironmentsOk returns a tuple with the Environments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvironments

`func (o *Intelblastradiussummary) SetEnvironments(v []string)`

SetEnvironments sets Environments field to given value.

### HasEnvironments

`func (o *Intelblastradiussummary) HasEnvironments() bool`

HasEnvironments returns a boolean if a field has been set.

### GetAccessTypes

`func (o *Intelblastradiussummary) GetAccessTypes() []string`

GetAccessTypes returns the AccessTypes field if non-nil, zero value otherwise.

### GetAccessTypesOk

`func (o *Intelblastradiussummary) GetAccessTypesOk() (*[]string, bool)`

GetAccessTypesOk returns a tuple with the AccessTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessTypes

`func (o *Intelblastradiussummary) SetAccessTypes(v []string)`

SetAccessTypes sets AccessTypes field to given value.

### HasAccessTypes

`func (o *Intelblastradiussummary) HasAccessTypes() bool`

HasAccessTypes returns a boolean if a field has been set.



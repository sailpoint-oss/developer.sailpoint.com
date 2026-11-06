# Machineidentityentitlement

# Machineidentityentitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** | **NullableString** | Name of the Object | 
**Created** | Pointer to **SailPointTime** | Creation date of the Object | [optional] [readonly] 
**Modified** | Pointer to **SailPointTime** | Last modification date of the Object | [optional] [readonly] 
**AccountId** | Pointer to **string** | ID of the machine account that holds the entitlement. | [optional] 
**AccountName** | Pointer to **string** | Name of the machine account that holds the entitlement. | [optional] 
**Attribute** | Pointer to **string** | Name of the account attribute that contains the entitlement. | [optional] 
**Value** | Pointer to **string** | Value of the entitlement. | [optional] 
**Description** | Pointer to **string** | Description of the entitlement. | [optional] 
**CloudGoverned** | Pointer to **bool** | Indicates whether the entitlement is governed in the cloud. | [optional] [default to false]
**Source** | Pointer to [**MachineIdentityEntitlementSource**](machine-identity-entitlement-source) |  | [optional] 

## Methods

### NewMachineidentityentitlement

`func NewMachineidentityentitlement(name NullableString, ) *Machineidentityentitlement`

NewMachineidentityentitlement instantiates a new Machineidentityentitlement object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineidentityentitlementWithDefaults

`func NewMachineidentityentitlementWithDefaults() *Machineidentityentitlement`

NewMachineidentityentitlementWithDefaults instantiates a new Machineidentityentitlement object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Machineidentityentitlement) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Machineidentityentitlement) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Machineidentityentitlement) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Machineidentityentitlement) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Machineidentityentitlement) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Machineidentityentitlement) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Machineidentityentitlement) SetName(v string)`

SetName sets Name field to given value.


### SetNameNil

`func (o *Machineidentityentitlement) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *Machineidentityentitlement) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetCreated

`func (o *Machineidentityentitlement) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Machineidentityentitlement) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Machineidentityentitlement) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Machineidentityentitlement) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Machineidentityentitlement) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Machineidentityentitlement) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Machineidentityentitlement) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Machineidentityentitlement) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetAccountId

`func (o *Machineidentityentitlement) GetAccountId() string`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *Machineidentityentitlement) GetAccountIdOk() (*string, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *Machineidentityentitlement) SetAccountId(v string)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *Machineidentityentitlement) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetAccountName

`func (o *Machineidentityentitlement) GetAccountName() string`

GetAccountName returns the AccountName field if non-nil, zero value otherwise.

### GetAccountNameOk

`func (o *Machineidentityentitlement) GetAccountNameOk() (*string, bool)`

GetAccountNameOk returns a tuple with the AccountName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountName

`func (o *Machineidentityentitlement) SetAccountName(v string)`

SetAccountName sets AccountName field to given value.

### HasAccountName

`func (o *Machineidentityentitlement) HasAccountName() bool`

HasAccountName returns a boolean if a field has been set.

### GetAttribute

`func (o *Machineidentityentitlement) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *Machineidentityentitlement) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *Machineidentityentitlement) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.

### HasAttribute

`func (o *Machineidentityentitlement) HasAttribute() bool`

HasAttribute returns a boolean if a field has been set.

### GetValue

`func (o *Machineidentityentitlement) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Machineidentityentitlement) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Machineidentityentitlement) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *Machineidentityentitlement) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetDescription

`func (o *Machineidentityentitlement) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Machineidentityentitlement) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Machineidentityentitlement) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Machineidentityentitlement) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetCloudGoverned

`func (o *Machineidentityentitlement) GetCloudGoverned() bool`

GetCloudGoverned returns the CloudGoverned field if non-nil, zero value otherwise.

### GetCloudGovernedOk

`func (o *Machineidentityentitlement) GetCloudGovernedOk() (*bool, bool)`

GetCloudGovernedOk returns a tuple with the CloudGoverned field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudGoverned

`func (o *Machineidentityentitlement) SetCloudGoverned(v bool)`

SetCloudGoverned sets CloudGoverned field to given value.

### HasCloudGoverned

`func (o *Machineidentityentitlement) HasCloudGoverned() bool`

HasCloudGoverned returns a boolean if a field has been set.

### GetSource

`func (o *Machineidentityentitlement) GetSource() MachineIdentityEntitlementSource`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *Machineidentityentitlement) GetSourceOk() (*MachineIdentityEntitlementSource, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *Machineidentityentitlement) SetSource(v MachineIdentityEntitlementSource)`

SetSource sets Source field to given value.

### HasSource

`func (o *Machineidentityentitlement) HasSource() bool`

HasSource returns a boolean if a field has been set.



# ProvisioningPolicyDto

# ProvisioningPolicyDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Unique identifier of the stored provisioning policy. | [optional] 
**SubtypeId** | Pointer to **string** | Identifier of the subtype that owns this policy. | [optional] 
**Name** | Pointer to **NullableString** | Name of the provisioning policy. | [optional] 
**Description** | Pointer to **NullableString** | Description of the provisioning policy. | [optional] 
**UsageType** | Pointer to **string** | Usage type of the policy. This API stores only `CREATE_MACHINE_ACCOUNT`. | [optional] [default to ""]
**Fields** | Pointer to [**[]FieldDetailsDto**](field-details-dto) | Fields in the provisioning policy. Field order is not semantically meaningful. | [optional] [default to []]

## Methods

### NewProvisioningPolicyDto

`func NewProvisioningPolicyDto() *ProvisioningPolicyDto`

NewProvisioningPolicyDto instantiates a new ProvisioningPolicyDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProvisioningPolicyDtoWithDefaults

`func NewProvisioningPolicyDtoWithDefaults() *ProvisioningPolicyDto`

NewProvisioningPolicyDtoWithDefaults instantiates a new ProvisioningPolicyDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ProvisioningPolicyDto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ProvisioningPolicyDto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ProvisioningPolicyDto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ProvisioningPolicyDto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetSubtypeId

`func (o *ProvisioningPolicyDto) GetSubtypeId() string`

GetSubtypeId returns the SubtypeId field if non-nil, zero value otherwise.

### GetSubtypeIdOk

`func (o *ProvisioningPolicyDto) GetSubtypeIdOk() (*string, bool)`

GetSubtypeIdOk returns a tuple with the SubtypeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubtypeId

`func (o *ProvisioningPolicyDto) SetSubtypeId(v string)`

SetSubtypeId sets SubtypeId field to given value.

### HasSubtypeId

`func (o *ProvisioningPolicyDto) HasSubtypeId() bool`

HasSubtypeId returns a boolean if a field has been set.

### GetName

`func (o *ProvisioningPolicyDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ProvisioningPolicyDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ProvisioningPolicyDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ProvisioningPolicyDto) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *ProvisioningPolicyDto) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *ProvisioningPolicyDto) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetDescription

`func (o *ProvisioningPolicyDto) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ProvisioningPolicyDto) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ProvisioningPolicyDto) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ProvisioningPolicyDto) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *ProvisioningPolicyDto) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *ProvisioningPolicyDto) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetUsageType

`func (o *ProvisioningPolicyDto) GetUsageType() string`

GetUsageType returns the UsageType field if non-nil, zero value otherwise.

### GetUsageTypeOk

`func (o *ProvisioningPolicyDto) GetUsageTypeOk() (*string, bool)`

GetUsageTypeOk returns a tuple with the UsageType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsageType

`func (o *ProvisioningPolicyDto) SetUsageType(v string)`

SetUsageType sets UsageType field to given value.

### HasUsageType

`func (o *ProvisioningPolicyDto) HasUsageType() bool`

HasUsageType returns a boolean if a field has been set.

### GetFields

`func (o *ProvisioningPolicyDto) GetFields() []FieldDetailsDto`

GetFields returns the Fields field if non-nil, zero value otherwise.

### GetFieldsOk

`func (o *ProvisioningPolicyDto) GetFieldsOk() (*[]FieldDetailsDto, bool)`

GetFieldsOk returns a tuple with the Fields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFields

`func (o *ProvisioningPolicyDto) SetFields(v []FieldDetailsDto)`

SetFields sets Fields field to given value.

### HasFields

`func (o *ProvisioningPolicyDto) HasFields() bool`

HasFields returns a boolean if a field has been set.



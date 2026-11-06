# ProvisioningPolicyDtoV2

# ProvisioningPolicyDtoV2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | System-generated unique ID of the provisioning policy. | [optional] 
**Name** | **NullableString** | the provisioning policy name | 
**SubtypeId** | Pointer to **NullableString** | Subtype ID for which provisioning policy will be created when usageType is CREATE_MACHINE_ACCOUNT. | [optional] 
**Description** | Pointer to **string** | the description of the provisioning policy | [optional] 
**UsageType** | Pointer to **Usagetypev2** |  | [optional] 
**Fields** | Pointer to [**[]FieldDetailsDtoV2**](field-details-dto-v2) |  | [optional] 

## Methods

### NewProvisioningPolicyDtoV2

`func NewProvisioningPolicyDtoV2(name NullableString, ) *ProvisioningPolicyDtoV2`

NewProvisioningPolicyDtoV2 instantiates a new ProvisioningPolicyDtoV2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProvisioningPolicyDtoV2WithDefaults

`func NewProvisioningPolicyDtoV2WithDefaults() *ProvisioningPolicyDtoV2`

NewProvisioningPolicyDtoV2WithDefaults instantiates a new ProvisioningPolicyDtoV2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ProvisioningPolicyDtoV2) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ProvisioningPolicyDtoV2) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ProvisioningPolicyDtoV2) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ProvisioningPolicyDtoV2) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *ProvisioningPolicyDtoV2) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ProvisioningPolicyDtoV2) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ProvisioningPolicyDtoV2) SetName(v string)`

SetName sets Name field to given value.


### SetNameNil

`func (o *ProvisioningPolicyDtoV2) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *ProvisioningPolicyDtoV2) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetSubtypeId

`func (o *ProvisioningPolicyDtoV2) GetSubtypeId() string`

GetSubtypeId returns the SubtypeId field if non-nil, zero value otherwise.

### GetSubtypeIdOk

`func (o *ProvisioningPolicyDtoV2) GetSubtypeIdOk() (*string, bool)`

GetSubtypeIdOk returns a tuple with the SubtypeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubtypeId

`func (o *ProvisioningPolicyDtoV2) SetSubtypeId(v string)`

SetSubtypeId sets SubtypeId field to given value.

### HasSubtypeId

`func (o *ProvisioningPolicyDtoV2) HasSubtypeId() bool`

HasSubtypeId returns a boolean if a field has been set.

### SetSubtypeIdNil

`func (o *ProvisioningPolicyDtoV2) SetSubtypeIdNil(b bool)`

 SetSubtypeIdNil sets the value for SubtypeId to be an explicit nil

### UnsetSubtypeId
`func (o *ProvisioningPolicyDtoV2) UnsetSubtypeId()`

UnsetSubtypeId ensures that no value is present for SubtypeId, not even an explicit nil
### GetDescription

`func (o *ProvisioningPolicyDtoV2) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ProvisioningPolicyDtoV2) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ProvisioningPolicyDtoV2) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ProvisioningPolicyDtoV2) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetUsageType

`func (o *ProvisioningPolicyDtoV2) GetUsageType() Usagetypev2`

GetUsageType returns the UsageType field if non-nil, zero value otherwise.

### GetUsageTypeOk

`func (o *ProvisioningPolicyDtoV2) GetUsageTypeOk() (*Usagetypev2, bool)`

GetUsageTypeOk returns a tuple with the UsageType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsageType

`func (o *ProvisioningPolicyDtoV2) SetUsageType(v Usagetypev2)`

SetUsageType sets UsageType field to given value.

### HasUsageType

`func (o *ProvisioningPolicyDtoV2) HasUsageType() bool`

HasUsageType returns a boolean if a field has been set.

### GetFields

`func (o *ProvisioningPolicyDtoV2) GetFields() []FieldDetailsDtoV2`

GetFields returns the Fields field if non-nil, zero value otherwise.

### GetFieldsOk

`func (o *ProvisioningPolicyDtoV2) GetFieldsOk() (*[]FieldDetailsDtoV2, bool)`

GetFieldsOk returns a tuple with the Fields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFields

`func (o *ProvisioningPolicyDtoV2) SetFields(v []FieldDetailsDtoV2)`

SetFields sets Fields field to given value.

### HasFields

`func (o *ProvisioningPolicyDtoV2) HasFields() bool`

HasFields returns a boolean if a field has been set.



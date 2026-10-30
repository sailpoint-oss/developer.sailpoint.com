# SubtypeProvisioningPolicy

# SubtypeProvisioningPolicy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | System-generated unique ID of the provisioning policy. Must not be supplied on create. | [optional] [readonly] 
**SubtypeId** | Pointer to **string** | ID of the subtype the policy belongs to. Must not be supplied on create. | [optional] [readonly] 
**Name** | Pointer to **NullableString** | Name of the provisioning policy. Defaults to the subtype's display name when omitted or blank. | [optional] 
**Description** | Pointer to **NullableString** | Description of the provisioning policy. | [optional] 
**UsageType** | Pointer to **string** | Usage type of the provisioning policy. Only `CREATE_MACHINE_ACCOUNT` is supported. | [optional] [default to "CREATE_MACHINE_ACCOUNT"]
**Fields** | Pointer to [**[]SubtypeProvisioningPolicyField**](subtype-provisioning-policy-field) | Fields of the provisioning policy. Every field must have a non-blank `name`. When two fields share a name, only the first is kept. | [optional] 

## Methods

### NewSubtypeProvisioningPolicy

`func NewSubtypeProvisioningPolicy() *SubtypeProvisioningPolicy`

NewSubtypeProvisioningPolicy instantiates a new SubtypeProvisioningPolicy object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubtypeProvisioningPolicyWithDefaults

`func NewSubtypeProvisioningPolicyWithDefaults() *SubtypeProvisioningPolicy`

NewSubtypeProvisioningPolicyWithDefaults instantiates a new SubtypeProvisioningPolicy object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *SubtypeProvisioningPolicy) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SubtypeProvisioningPolicy) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SubtypeProvisioningPolicy) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SubtypeProvisioningPolicy) HasId() bool`

HasId returns a boolean if a field has been set.

### GetSubtypeId

`func (o *SubtypeProvisioningPolicy) GetSubtypeId() string`

GetSubtypeId returns the SubtypeId field if non-nil, zero value otherwise.

### GetSubtypeIdOk

`func (o *SubtypeProvisioningPolicy) GetSubtypeIdOk() (*string, bool)`

GetSubtypeIdOk returns a tuple with the SubtypeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubtypeId

`func (o *SubtypeProvisioningPolicy) SetSubtypeId(v string)`

SetSubtypeId sets SubtypeId field to given value.

### HasSubtypeId

`func (o *SubtypeProvisioningPolicy) HasSubtypeId() bool`

HasSubtypeId returns a boolean if a field has been set.

### GetName

`func (o *SubtypeProvisioningPolicy) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SubtypeProvisioningPolicy) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SubtypeProvisioningPolicy) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SubtypeProvisioningPolicy) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *SubtypeProvisioningPolicy) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *SubtypeProvisioningPolicy) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetDescription

`func (o *SubtypeProvisioningPolicy) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *SubtypeProvisioningPolicy) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *SubtypeProvisioningPolicy) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *SubtypeProvisioningPolicy) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *SubtypeProvisioningPolicy) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *SubtypeProvisioningPolicy) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetUsageType

`func (o *SubtypeProvisioningPolicy) GetUsageType() string`

GetUsageType returns the UsageType field if non-nil, zero value otherwise.

### GetUsageTypeOk

`func (o *SubtypeProvisioningPolicy) GetUsageTypeOk() (*string, bool)`

GetUsageTypeOk returns a tuple with the UsageType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsageType

`func (o *SubtypeProvisioningPolicy) SetUsageType(v string)`

SetUsageType sets UsageType field to given value.

### HasUsageType

`func (o *SubtypeProvisioningPolicy) HasUsageType() bool`

HasUsageType returns a boolean if a field has been set.

### GetFields

`func (o *SubtypeProvisioningPolicy) GetFields() []SubtypeProvisioningPolicyField`

GetFields returns the Fields field if non-nil, zero value otherwise.

### GetFieldsOk

`func (o *SubtypeProvisioningPolicy) GetFieldsOk() (*[]SubtypeProvisioningPolicyField, bool)`

GetFieldsOk returns a tuple with the Fields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFields

`func (o *SubtypeProvisioningPolicy) SetFields(v []SubtypeProvisioningPolicyField)`

SetFields sets Fields field to given value.

### HasFields

`func (o *SubtypeProvisioningPolicy) HasFields() bool`

HasFields returns a boolean if a field has been set.



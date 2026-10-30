# MachineAccountEntitlement

# MachineAccountEntitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** | **NullableString** | Name of the Object | 
**Created** | Pointer to **SailPointTime** | Creation date of the Object | [optional] [readonly] 
**Modified** | Pointer to **SailPointTime** | Last modification date of the Object | [optional] [readonly] 
**Attribute** | Pointer to **string** | The name of the account attribute that holds the entitlement. | [optional] 
**Value** | Pointer to **string** | The value of the entitlement. | [optional] 
**Description** | Pointer to **NullableString** | The description of the entitlement. | [optional] 
**SourceSchemaObjectType** | Pointer to **string** | The source schema object type of the entitlement. | [optional] 
**Privileged** | Pointer to **bool** | Indicates whether the entitlement is privileged. | [optional] [default to false]
**CloudGoverned** | Pointer to **bool** | Indicates whether the entitlement is governed in the cloud. | [optional] [default to false]
**Requestable** | Pointer to **bool** | Indicates whether the entitlement can be requested. | [optional] [default to false]
**Attributes** | Pointer to **map[string]interface\{\}** | Additional attributes of the entitlement. | [optional] 
**Source** | Pointer to [**BaseReferenceDto**](base-reference-dto) | The source the entitlement belongs to. | [optional] 
**Owner** | Pointer to [**NullableBaseReferenceDto**](base-reference-dto) | The owner of the entitlement. | [optional] 

## Methods

### NewMachineAccountEntitlement

`func NewMachineAccountEntitlement(name NullableString, ) *MachineAccountEntitlement`

NewMachineAccountEntitlement instantiates a new MachineAccountEntitlement object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineAccountEntitlementWithDefaults

`func NewMachineAccountEntitlementWithDefaults() *MachineAccountEntitlement`

NewMachineAccountEntitlementWithDefaults instantiates a new MachineAccountEntitlement object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *MachineAccountEntitlement) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *MachineAccountEntitlement) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *MachineAccountEntitlement) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *MachineAccountEntitlement) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *MachineAccountEntitlement) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MachineAccountEntitlement) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MachineAccountEntitlement) SetName(v string)`

SetName sets Name field to given value.


### SetNameNil

`func (o *MachineAccountEntitlement) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *MachineAccountEntitlement) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetCreated

`func (o *MachineAccountEntitlement) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *MachineAccountEntitlement) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *MachineAccountEntitlement) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *MachineAccountEntitlement) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *MachineAccountEntitlement) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *MachineAccountEntitlement) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *MachineAccountEntitlement) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *MachineAccountEntitlement) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetAttribute

`func (o *MachineAccountEntitlement) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *MachineAccountEntitlement) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *MachineAccountEntitlement) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.

### HasAttribute

`func (o *MachineAccountEntitlement) HasAttribute() bool`

HasAttribute returns a boolean if a field has been set.

### GetValue

`func (o *MachineAccountEntitlement) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *MachineAccountEntitlement) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *MachineAccountEntitlement) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *MachineAccountEntitlement) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetDescription

`func (o *MachineAccountEntitlement) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *MachineAccountEntitlement) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *MachineAccountEntitlement) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *MachineAccountEntitlement) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *MachineAccountEntitlement) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *MachineAccountEntitlement) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetSourceSchemaObjectType

`func (o *MachineAccountEntitlement) GetSourceSchemaObjectType() string`

GetSourceSchemaObjectType returns the SourceSchemaObjectType field if non-nil, zero value otherwise.

### GetSourceSchemaObjectTypeOk

`func (o *MachineAccountEntitlement) GetSourceSchemaObjectTypeOk() (*string, bool)`

GetSourceSchemaObjectTypeOk returns a tuple with the SourceSchemaObjectType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceSchemaObjectType

`func (o *MachineAccountEntitlement) SetSourceSchemaObjectType(v string)`

SetSourceSchemaObjectType sets SourceSchemaObjectType field to given value.

### HasSourceSchemaObjectType

`func (o *MachineAccountEntitlement) HasSourceSchemaObjectType() bool`

HasSourceSchemaObjectType returns a boolean if a field has been set.

### GetPrivileged

`func (o *MachineAccountEntitlement) GetPrivileged() bool`

GetPrivileged returns the Privileged field if non-nil, zero value otherwise.

### GetPrivilegedOk

`func (o *MachineAccountEntitlement) GetPrivilegedOk() (*bool, bool)`

GetPrivilegedOk returns a tuple with the Privileged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivileged

`func (o *MachineAccountEntitlement) SetPrivileged(v bool)`

SetPrivileged sets Privileged field to given value.

### HasPrivileged

`func (o *MachineAccountEntitlement) HasPrivileged() bool`

HasPrivileged returns a boolean if a field has been set.

### GetCloudGoverned

`func (o *MachineAccountEntitlement) GetCloudGoverned() bool`

GetCloudGoverned returns the CloudGoverned field if non-nil, zero value otherwise.

### GetCloudGovernedOk

`func (o *MachineAccountEntitlement) GetCloudGovernedOk() (*bool, bool)`

GetCloudGovernedOk returns a tuple with the CloudGoverned field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudGoverned

`func (o *MachineAccountEntitlement) SetCloudGoverned(v bool)`

SetCloudGoverned sets CloudGoverned field to given value.

### HasCloudGoverned

`func (o *MachineAccountEntitlement) HasCloudGoverned() bool`

HasCloudGoverned returns a boolean if a field has been set.

### GetRequestable

`func (o *MachineAccountEntitlement) GetRequestable() bool`

GetRequestable returns the Requestable field if non-nil, zero value otherwise.

### GetRequestableOk

`func (o *MachineAccountEntitlement) GetRequestableOk() (*bool, bool)`

GetRequestableOk returns a tuple with the Requestable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestable

`func (o *MachineAccountEntitlement) SetRequestable(v bool)`

SetRequestable sets Requestable field to given value.

### HasRequestable

`func (o *MachineAccountEntitlement) HasRequestable() bool`

HasRequestable returns a boolean if a field has been set.

### GetAttributes

`func (o *MachineAccountEntitlement) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *MachineAccountEntitlement) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *MachineAccountEntitlement) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *MachineAccountEntitlement) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### SetAttributesNil

`func (o *MachineAccountEntitlement) SetAttributesNil(b bool)`

 SetAttributesNil sets the value for Attributes to be an explicit nil

### UnsetAttributes
`func (o *MachineAccountEntitlement) UnsetAttributes()`

UnsetAttributes ensures that no value is present for Attributes, not even an explicit nil
### GetSource

`func (o *MachineAccountEntitlement) GetSource() BaseReferenceDto`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *MachineAccountEntitlement) GetSourceOk() (*BaseReferenceDto, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *MachineAccountEntitlement) SetSource(v BaseReferenceDto)`

SetSource sets Source field to given value.

### HasSource

`func (o *MachineAccountEntitlement) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetOwner

`func (o *MachineAccountEntitlement) GetOwner() BaseReferenceDto`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *MachineAccountEntitlement) GetOwnerOk() (*BaseReferenceDto, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *MachineAccountEntitlement) SetOwner(v BaseReferenceDto)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *MachineAccountEntitlement) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### SetOwnerNil

`func (o *MachineAccountEntitlement) SetOwnerNil(b bool)`

 SetOwnerNil sets the value for Owner to be an explicit nil

### UnsetOwner
`func (o *MachineAccountEntitlement) UnsetOwner()`

UnsetOwner ensures that no value is present for Owner, not even an explicit nil


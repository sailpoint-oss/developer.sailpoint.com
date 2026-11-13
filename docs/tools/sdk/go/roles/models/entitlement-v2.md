# EntitlementV2

# EntitlementV2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The entitlement id | [optional] 
**Name** | Pointer to **string** | The entitlement name | [optional] 
**Attribute** | Pointer to **string** | The entitlement attribute name | [optional] 
**Value** | Pointer to **string** | The value of the entitlement | [optional] 
**SourceSchemaObjectType** | Pointer to **string** | The object type of the entitlement from the source schema | [optional] 
**Description** | Pointer to **NullableString** | The description of the entitlement | [optional] 
**PrivilegeLevel** | Pointer to [**EntitlementV2PrivilegeLevel**](entitlement-v2-privilege-level) |  | [optional] 
**Tags** | Pointer to **[]string** | List of tags assigned to the entitlement | [optional] 
**CloudGoverned** | Pointer to **bool** | True if the entitlement is cloud governed | [optional] [default to false]
**Requestable** | Pointer to **bool** | True if the entitlement is able to be directly requested | [optional] [default to false]
**Owner** | Pointer to [**NullableEntitlementV2Owner**](entitlement-v2-owner) |  | [optional] 
**ManuallyUpdatedFields** | Pointer to **map[string]interface\{\}** | A map of entitlement fields that have been manually updated. The key is the field name in UPPER_SNAKE_CASE format, and the value is true or false to indicate if the field has been updated. | [optional] 
**AccessModelMetadata** | Pointer to [**EntitlementV2AccessModelMetadata**](entitlement-v2-access-model-metadata) |  | [optional] 
**Created** | Pointer to **SailPointTime** | Time when the entitlement was created | [optional] 
**Modified** | Pointer to **SailPointTime** | Time when the entitlement was last modified | [optional] 
**Source** | Pointer to [**EntitlementV2Source**](entitlement-v2-source) |  | [optional] 
**Attributes** | Pointer to **map[string]interface\{\}** | A map of free-form key-value pairs from the source system | [optional] 
**Segments** | Pointer to **[]string** | List of IDs of segments, if any, to which this Entitlement is assigned. | [optional] 
**DirectPermissions** | Pointer to [**[]PermissionDTO**](permission-dto) |  | [optional] 

## Methods

### NewEntitlementV2

`func NewEntitlementV2() *EntitlementV2`

NewEntitlementV2 instantiates a new EntitlementV2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementV2WithDefaults

`func NewEntitlementV2WithDefaults() *EntitlementV2`

NewEntitlementV2WithDefaults instantiates a new EntitlementV2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *EntitlementV2) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *EntitlementV2) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *EntitlementV2) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *EntitlementV2) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *EntitlementV2) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *EntitlementV2) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *EntitlementV2) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *EntitlementV2) HasName() bool`

HasName returns a boolean if a field has been set.

### GetAttribute

`func (o *EntitlementV2) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *EntitlementV2) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *EntitlementV2) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.

### HasAttribute

`func (o *EntitlementV2) HasAttribute() bool`

HasAttribute returns a boolean if a field has been set.

### GetValue

`func (o *EntitlementV2) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *EntitlementV2) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *EntitlementV2) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *EntitlementV2) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetSourceSchemaObjectType

`func (o *EntitlementV2) GetSourceSchemaObjectType() string`

GetSourceSchemaObjectType returns the SourceSchemaObjectType field if non-nil, zero value otherwise.

### GetSourceSchemaObjectTypeOk

`func (o *EntitlementV2) GetSourceSchemaObjectTypeOk() (*string, bool)`

GetSourceSchemaObjectTypeOk returns a tuple with the SourceSchemaObjectType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceSchemaObjectType

`func (o *EntitlementV2) SetSourceSchemaObjectType(v string)`

SetSourceSchemaObjectType sets SourceSchemaObjectType field to given value.

### HasSourceSchemaObjectType

`func (o *EntitlementV2) HasSourceSchemaObjectType() bool`

HasSourceSchemaObjectType returns a boolean if a field has been set.

### GetDescription

`func (o *EntitlementV2) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *EntitlementV2) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *EntitlementV2) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *EntitlementV2) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *EntitlementV2) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *EntitlementV2) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetPrivilegeLevel

`func (o *EntitlementV2) GetPrivilegeLevel() EntitlementV2PrivilegeLevel`

GetPrivilegeLevel returns the PrivilegeLevel field if non-nil, zero value otherwise.

### GetPrivilegeLevelOk

`func (o *EntitlementV2) GetPrivilegeLevelOk() (*EntitlementV2PrivilegeLevel, bool)`

GetPrivilegeLevelOk returns a tuple with the PrivilegeLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivilegeLevel

`func (o *EntitlementV2) SetPrivilegeLevel(v EntitlementV2PrivilegeLevel)`

SetPrivilegeLevel sets PrivilegeLevel field to given value.

### HasPrivilegeLevel

`func (o *EntitlementV2) HasPrivilegeLevel() bool`

HasPrivilegeLevel returns a boolean if a field has been set.

### GetTags

`func (o *EntitlementV2) GetTags() []string`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *EntitlementV2) GetTagsOk() (*[]string, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *EntitlementV2) SetTags(v []string)`

SetTags sets Tags field to given value.

### HasTags

`func (o *EntitlementV2) HasTags() bool`

HasTags returns a boolean if a field has been set.

### SetTagsNil

`func (o *EntitlementV2) SetTagsNil(b bool)`

 SetTagsNil sets the value for Tags to be an explicit nil

### UnsetTags
`func (o *EntitlementV2) UnsetTags()`

UnsetTags ensures that no value is present for Tags, not even an explicit nil
### GetCloudGoverned

`func (o *EntitlementV2) GetCloudGoverned() bool`

GetCloudGoverned returns the CloudGoverned field if non-nil, zero value otherwise.

### GetCloudGovernedOk

`func (o *EntitlementV2) GetCloudGovernedOk() (*bool, bool)`

GetCloudGovernedOk returns a tuple with the CloudGoverned field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudGoverned

`func (o *EntitlementV2) SetCloudGoverned(v bool)`

SetCloudGoverned sets CloudGoverned field to given value.

### HasCloudGoverned

`func (o *EntitlementV2) HasCloudGoverned() bool`

HasCloudGoverned returns a boolean if a field has been set.

### GetRequestable

`func (o *EntitlementV2) GetRequestable() bool`

GetRequestable returns the Requestable field if non-nil, zero value otherwise.

### GetRequestableOk

`func (o *EntitlementV2) GetRequestableOk() (*bool, bool)`

GetRequestableOk returns a tuple with the Requestable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestable

`func (o *EntitlementV2) SetRequestable(v bool)`

SetRequestable sets Requestable field to given value.

### HasRequestable

`func (o *EntitlementV2) HasRequestable() bool`

HasRequestable returns a boolean if a field has been set.

### GetOwner

`func (o *EntitlementV2) GetOwner() EntitlementV2Owner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *EntitlementV2) GetOwnerOk() (*EntitlementV2Owner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *EntitlementV2) SetOwner(v EntitlementV2Owner)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *EntitlementV2) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### SetOwnerNil

`func (o *EntitlementV2) SetOwnerNil(b bool)`

 SetOwnerNil sets the value for Owner to be an explicit nil

### UnsetOwner
`func (o *EntitlementV2) UnsetOwner()`

UnsetOwner ensures that no value is present for Owner, not even an explicit nil
### GetManuallyUpdatedFields

`func (o *EntitlementV2) GetManuallyUpdatedFields() map[string]interface{}`

GetManuallyUpdatedFields returns the ManuallyUpdatedFields field if non-nil, zero value otherwise.

### GetManuallyUpdatedFieldsOk

`func (o *EntitlementV2) GetManuallyUpdatedFieldsOk() (*map[string]interface{}, bool)`

GetManuallyUpdatedFieldsOk returns a tuple with the ManuallyUpdatedFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManuallyUpdatedFields

`func (o *EntitlementV2) SetManuallyUpdatedFields(v map[string]interface{})`

SetManuallyUpdatedFields sets ManuallyUpdatedFields field to given value.

### HasManuallyUpdatedFields

`func (o *EntitlementV2) HasManuallyUpdatedFields() bool`

HasManuallyUpdatedFields returns a boolean if a field has been set.

### SetManuallyUpdatedFieldsNil

`func (o *EntitlementV2) SetManuallyUpdatedFieldsNil(b bool)`

 SetManuallyUpdatedFieldsNil sets the value for ManuallyUpdatedFields to be an explicit nil

### UnsetManuallyUpdatedFields
`func (o *EntitlementV2) UnsetManuallyUpdatedFields()`

UnsetManuallyUpdatedFields ensures that no value is present for ManuallyUpdatedFields, not even an explicit nil
### GetAccessModelMetadata

`func (o *EntitlementV2) GetAccessModelMetadata() EntitlementV2AccessModelMetadata`

GetAccessModelMetadata returns the AccessModelMetadata field if non-nil, zero value otherwise.

### GetAccessModelMetadataOk

`func (o *EntitlementV2) GetAccessModelMetadataOk() (*EntitlementV2AccessModelMetadata, bool)`

GetAccessModelMetadataOk returns a tuple with the AccessModelMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessModelMetadata

`func (o *EntitlementV2) SetAccessModelMetadata(v EntitlementV2AccessModelMetadata)`

SetAccessModelMetadata sets AccessModelMetadata field to given value.

### HasAccessModelMetadata

`func (o *EntitlementV2) HasAccessModelMetadata() bool`

HasAccessModelMetadata returns a boolean if a field has been set.

### GetCreated

`func (o *EntitlementV2) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *EntitlementV2) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *EntitlementV2) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *EntitlementV2) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *EntitlementV2) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *EntitlementV2) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *EntitlementV2) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *EntitlementV2) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetSource

`func (o *EntitlementV2) GetSource() EntitlementV2Source`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *EntitlementV2) GetSourceOk() (*EntitlementV2Source, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *EntitlementV2) SetSource(v EntitlementV2Source)`

SetSource sets Source field to given value.

### HasSource

`func (o *EntitlementV2) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetAttributes

`func (o *EntitlementV2) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *EntitlementV2) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *EntitlementV2) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *EntitlementV2) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetSegments

`func (o *EntitlementV2) GetSegments() []string`

GetSegments returns the Segments field if non-nil, zero value otherwise.

### GetSegmentsOk

`func (o *EntitlementV2) GetSegmentsOk() (*[]string, bool)`

GetSegmentsOk returns a tuple with the Segments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSegments

`func (o *EntitlementV2) SetSegments(v []string)`

SetSegments sets Segments field to given value.

### HasSegments

`func (o *EntitlementV2) HasSegments() bool`

HasSegments returns a boolean if a field has been set.

### SetSegmentsNil

`func (o *EntitlementV2) SetSegmentsNil(b bool)`

 SetSegmentsNil sets the value for Segments to be an explicit nil

### UnsetSegments
`func (o *EntitlementV2) UnsetSegments()`

UnsetSegments ensures that no value is present for Segments, not even an explicit nil
### GetDirectPermissions

`func (o *EntitlementV2) GetDirectPermissions() []PermissionDTO`

GetDirectPermissions returns the DirectPermissions field if non-nil, zero value otherwise.

### GetDirectPermissionsOk

`func (o *EntitlementV2) GetDirectPermissionsOk() (*[]PermissionDTO, bool)`

GetDirectPermissionsOk returns a tuple with the DirectPermissions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDirectPermissions

`func (o *EntitlementV2) SetDirectPermissions(v []PermissionDTO)`

SetDirectPermissions sets DirectPermissions field to given value.

### HasDirectPermissions

`func (o *EntitlementV2) HasDirectPermissions() bool`

HasDirectPermissions returns a boolean if a field has been set.



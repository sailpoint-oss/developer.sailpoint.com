# Accessprofileentitlementv2

# Accessprofileentitlementv2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The entitlement id | [optional] 
**Name** | Pointer to **string** | The entitlement name | [optional] 
**Attribute** | Pointer to **string** | The entitlement attribute name | [optional] 
**Value** | Pointer to **string** | The value of the entitlement | [optional] 
**SourceSchemaObjectType** | Pointer to **string** | The object type of the entitlement from the source schema | [optional] 
**Description** | Pointer to **NullableString** | The description of the entitlement | [optional] 
**Privileged** | Pointer to **bool** | True if the entitlement is privileged | [optional] [default to false]
**CloudGoverned** | Pointer to **bool** | True if the entitlement is cloud governed | [optional] [default to false]
**Requestable** | Pointer to **bool** | True if the entitlement is able to be directly requested | [optional] [default to false]
**Owner** | Pointer to [**NullableEntitlementOwner**](entitlement-owner) |  | [optional] 
**AdditionalOwners** | Pointer to [**[]AdditionalOwnerRef**](additional-owner-ref) | List of additional owner references beyond the primary owner. Each entry may be an identity (IDENTITY) or a governance group (GOVERNANCE_GROUP). | [optional] 
**ManuallyUpdatedFields** | Pointer to **map[string]interface\{\}** | A map of entitlement fields that have been manually updated. The key is the field name in UPPER_SNAKE_CASE format, and the value is true or false to indicate if the field has been updated. | [optional] 
**AccessModelMetadata** | Pointer to [**EntitlementAccessModelMetadata**](entitlement-access-model-metadata) |  | [optional] 
**Created** | Pointer to **SailPointTime** | Time when the entitlement was created | [optional] 
**Modified** | Pointer to **SailPointTime** | Time when the entitlement was last modified | [optional] 
**Source** | Pointer to [**EntitlementSource**](entitlement-source) |  | [optional] 
**Attributes** | Pointer to **map[string]interface\{\}** | A map of free-form key-value pairs from the source system | [optional] 
**Segments** | Pointer to **[]string** | List of IDs of segments, if any, to which this Entitlement is assigned. | [optional] 
**DirectPermissions** | Pointer to [**[]PermissionDTO**](permission-dto) |  | [optional] 
**Tags** | Pointer to **[]string** | List of tags assigned to the entitlement | [optional] 
**PrivilegeLevel** | Pointer to [**AccessProfileEntitlementPrivilegeLevel**](access-profile-entitlement-privilege-level) |  | [optional] 

## Methods

### NewAccessprofileentitlementv2

`func NewAccessprofileentitlementv2() *Accessprofileentitlementv2`

NewAccessprofileentitlementv2 instantiates a new Accessprofileentitlementv2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessprofileentitlementv2WithDefaults

`func NewAccessprofileentitlementv2WithDefaults() *Accessprofileentitlementv2`

NewAccessprofileentitlementv2WithDefaults instantiates a new Accessprofileentitlementv2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Accessprofileentitlementv2) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Accessprofileentitlementv2) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Accessprofileentitlementv2) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Accessprofileentitlementv2) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Accessprofileentitlementv2) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Accessprofileentitlementv2) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Accessprofileentitlementv2) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Accessprofileentitlementv2) HasName() bool`

HasName returns a boolean if a field has been set.

### GetAttribute

`func (o *Accessprofileentitlementv2) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *Accessprofileentitlementv2) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *Accessprofileentitlementv2) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.

### HasAttribute

`func (o *Accessprofileentitlementv2) HasAttribute() bool`

HasAttribute returns a boolean if a field has been set.

### GetValue

`func (o *Accessprofileentitlementv2) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Accessprofileentitlementv2) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Accessprofileentitlementv2) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *Accessprofileentitlementv2) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetSourceSchemaObjectType

`func (o *Accessprofileentitlementv2) GetSourceSchemaObjectType() string`

GetSourceSchemaObjectType returns the SourceSchemaObjectType field if non-nil, zero value otherwise.

### GetSourceSchemaObjectTypeOk

`func (o *Accessprofileentitlementv2) GetSourceSchemaObjectTypeOk() (*string, bool)`

GetSourceSchemaObjectTypeOk returns a tuple with the SourceSchemaObjectType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceSchemaObjectType

`func (o *Accessprofileentitlementv2) SetSourceSchemaObjectType(v string)`

SetSourceSchemaObjectType sets SourceSchemaObjectType field to given value.

### HasSourceSchemaObjectType

`func (o *Accessprofileentitlementv2) HasSourceSchemaObjectType() bool`

HasSourceSchemaObjectType returns a boolean if a field has been set.

### GetDescription

`func (o *Accessprofileentitlementv2) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Accessprofileentitlementv2) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Accessprofileentitlementv2) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Accessprofileentitlementv2) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Accessprofileentitlementv2) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Accessprofileentitlementv2) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetPrivileged

`func (o *Accessprofileentitlementv2) GetPrivileged() bool`

GetPrivileged returns the Privileged field if non-nil, zero value otherwise.

### GetPrivilegedOk

`func (o *Accessprofileentitlementv2) GetPrivilegedOk() (*bool, bool)`

GetPrivilegedOk returns a tuple with the Privileged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivileged

`func (o *Accessprofileentitlementv2) SetPrivileged(v bool)`

SetPrivileged sets Privileged field to given value.

### HasPrivileged

`func (o *Accessprofileentitlementv2) HasPrivileged() bool`

HasPrivileged returns a boolean if a field has been set.

### GetCloudGoverned

`func (o *Accessprofileentitlementv2) GetCloudGoverned() bool`

GetCloudGoverned returns the CloudGoverned field if non-nil, zero value otherwise.

### GetCloudGovernedOk

`func (o *Accessprofileentitlementv2) GetCloudGovernedOk() (*bool, bool)`

GetCloudGovernedOk returns a tuple with the CloudGoverned field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudGoverned

`func (o *Accessprofileentitlementv2) SetCloudGoverned(v bool)`

SetCloudGoverned sets CloudGoverned field to given value.

### HasCloudGoverned

`func (o *Accessprofileentitlementv2) HasCloudGoverned() bool`

HasCloudGoverned returns a boolean if a field has been set.

### GetRequestable

`func (o *Accessprofileentitlementv2) GetRequestable() bool`

GetRequestable returns the Requestable field if non-nil, zero value otherwise.

### GetRequestableOk

`func (o *Accessprofileentitlementv2) GetRequestableOk() (*bool, bool)`

GetRequestableOk returns a tuple with the Requestable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestable

`func (o *Accessprofileentitlementv2) SetRequestable(v bool)`

SetRequestable sets Requestable field to given value.

### HasRequestable

`func (o *Accessprofileentitlementv2) HasRequestable() bool`

HasRequestable returns a boolean if a field has been set.

### GetOwner

`func (o *Accessprofileentitlementv2) GetOwner() EntitlementOwner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *Accessprofileentitlementv2) GetOwnerOk() (*EntitlementOwner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *Accessprofileentitlementv2) SetOwner(v EntitlementOwner)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *Accessprofileentitlementv2) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### SetOwnerNil

`func (o *Accessprofileentitlementv2) SetOwnerNil(b bool)`

 SetOwnerNil sets the value for Owner to be an explicit nil

### UnsetOwner
`func (o *Accessprofileentitlementv2) UnsetOwner()`

UnsetOwner ensures that no value is present for Owner, not even an explicit nil
### GetAdditionalOwners

`func (o *Accessprofileentitlementv2) GetAdditionalOwners() []AdditionalOwnerRef`

GetAdditionalOwners returns the AdditionalOwners field if non-nil, zero value otherwise.

### GetAdditionalOwnersOk

`func (o *Accessprofileentitlementv2) GetAdditionalOwnersOk() (*[]AdditionalOwnerRef, bool)`

GetAdditionalOwnersOk returns a tuple with the AdditionalOwners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdditionalOwners

`func (o *Accessprofileentitlementv2) SetAdditionalOwners(v []AdditionalOwnerRef)`

SetAdditionalOwners sets AdditionalOwners field to given value.

### HasAdditionalOwners

`func (o *Accessprofileentitlementv2) HasAdditionalOwners() bool`

HasAdditionalOwners returns a boolean if a field has been set.

### SetAdditionalOwnersNil

`func (o *Accessprofileentitlementv2) SetAdditionalOwnersNil(b bool)`

 SetAdditionalOwnersNil sets the value for AdditionalOwners to be an explicit nil

### UnsetAdditionalOwners
`func (o *Accessprofileentitlementv2) UnsetAdditionalOwners()`

UnsetAdditionalOwners ensures that no value is present for AdditionalOwners, not even an explicit nil
### GetManuallyUpdatedFields

`func (o *Accessprofileentitlementv2) GetManuallyUpdatedFields() map[string]interface{}`

GetManuallyUpdatedFields returns the ManuallyUpdatedFields field if non-nil, zero value otherwise.

### GetManuallyUpdatedFieldsOk

`func (o *Accessprofileentitlementv2) GetManuallyUpdatedFieldsOk() (*map[string]interface{}, bool)`

GetManuallyUpdatedFieldsOk returns a tuple with the ManuallyUpdatedFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManuallyUpdatedFields

`func (o *Accessprofileentitlementv2) SetManuallyUpdatedFields(v map[string]interface{})`

SetManuallyUpdatedFields sets ManuallyUpdatedFields field to given value.

### HasManuallyUpdatedFields

`func (o *Accessprofileentitlementv2) HasManuallyUpdatedFields() bool`

HasManuallyUpdatedFields returns a boolean if a field has been set.

### SetManuallyUpdatedFieldsNil

`func (o *Accessprofileentitlementv2) SetManuallyUpdatedFieldsNil(b bool)`

 SetManuallyUpdatedFieldsNil sets the value for ManuallyUpdatedFields to be an explicit nil

### UnsetManuallyUpdatedFields
`func (o *Accessprofileentitlementv2) UnsetManuallyUpdatedFields()`

UnsetManuallyUpdatedFields ensures that no value is present for ManuallyUpdatedFields, not even an explicit nil
### GetAccessModelMetadata

`func (o *Accessprofileentitlementv2) GetAccessModelMetadata() EntitlementAccessModelMetadata`

GetAccessModelMetadata returns the AccessModelMetadata field if non-nil, zero value otherwise.

### GetAccessModelMetadataOk

`func (o *Accessprofileentitlementv2) GetAccessModelMetadataOk() (*EntitlementAccessModelMetadata, bool)`

GetAccessModelMetadataOk returns a tuple with the AccessModelMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessModelMetadata

`func (o *Accessprofileentitlementv2) SetAccessModelMetadata(v EntitlementAccessModelMetadata)`

SetAccessModelMetadata sets AccessModelMetadata field to given value.

### HasAccessModelMetadata

`func (o *Accessprofileentitlementv2) HasAccessModelMetadata() bool`

HasAccessModelMetadata returns a boolean if a field has been set.

### GetCreated

`func (o *Accessprofileentitlementv2) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Accessprofileentitlementv2) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Accessprofileentitlementv2) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Accessprofileentitlementv2) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Accessprofileentitlementv2) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Accessprofileentitlementv2) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Accessprofileentitlementv2) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Accessprofileentitlementv2) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetSource

`func (o *Accessprofileentitlementv2) GetSource() EntitlementSource`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *Accessprofileentitlementv2) GetSourceOk() (*EntitlementSource, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *Accessprofileentitlementv2) SetSource(v EntitlementSource)`

SetSource sets Source field to given value.

### HasSource

`func (o *Accessprofileentitlementv2) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetAttributes

`func (o *Accessprofileentitlementv2) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Accessprofileentitlementv2) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Accessprofileentitlementv2) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *Accessprofileentitlementv2) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetSegments

`func (o *Accessprofileentitlementv2) GetSegments() []string`

GetSegments returns the Segments field if non-nil, zero value otherwise.

### GetSegmentsOk

`func (o *Accessprofileentitlementv2) GetSegmentsOk() (*[]string, bool)`

GetSegmentsOk returns a tuple with the Segments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSegments

`func (o *Accessprofileentitlementv2) SetSegments(v []string)`

SetSegments sets Segments field to given value.

### HasSegments

`func (o *Accessprofileentitlementv2) HasSegments() bool`

HasSegments returns a boolean if a field has been set.

### SetSegmentsNil

`func (o *Accessprofileentitlementv2) SetSegmentsNil(b bool)`

 SetSegmentsNil sets the value for Segments to be an explicit nil

### UnsetSegments
`func (o *Accessprofileentitlementv2) UnsetSegments()`

UnsetSegments ensures that no value is present for Segments, not even an explicit nil
### GetDirectPermissions

`func (o *Accessprofileentitlementv2) GetDirectPermissions() []PermissionDTO`

GetDirectPermissions returns the DirectPermissions field if non-nil, zero value otherwise.

### GetDirectPermissionsOk

`func (o *Accessprofileentitlementv2) GetDirectPermissionsOk() (*[]PermissionDTO, bool)`

GetDirectPermissionsOk returns a tuple with the DirectPermissions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDirectPermissions

`func (o *Accessprofileentitlementv2) SetDirectPermissions(v []PermissionDTO)`

SetDirectPermissions sets DirectPermissions field to given value.

### HasDirectPermissions

`func (o *Accessprofileentitlementv2) HasDirectPermissions() bool`

HasDirectPermissions returns a boolean if a field has been set.

### GetTags

`func (o *Accessprofileentitlementv2) GetTags() []string`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *Accessprofileentitlementv2) GetTagsOk() (*[]string, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *Accessprofileentitlementv2) SetTags(v []string)`

SetTags sets Tags field to given value.

### HasTags

`func (o *Accessprofileentitlementv2) HasTags() bool`

HasTags returns a boolean if a field has been set.

### SetTagsNil

`func (o *Accessprofileentitlementv2) SetTagsNil(b bool)`

 SetTagsNil sets the value for Tags to be an explicit nil

### UnsetTags
`func (o *Accessprofileentitlementv2) UnsetTags()`

UnsetTags ensures that no value is present for Tags, not even an explicit nil
### GetPrivilegeLevel

`func (o *Accessprofileentitlementv2) GetPrivilegeLevel() AccessProfileEntitlementPrivilegeLevel`

GetPrivilegeLevel returns the PrivilegeLevel field if non-nil, zero value otherwise.

### GetPrivilegeLevelOk

`func (o *Accessprofileentitlementv2) GetPrivilegeLevelOk() (*AccessProfileEntitlementPrivilegeLevel, bool)`

GetPrivilegeLevelOk returns a tuple with the PrivilegeLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivilegeLevel

`func (o *Accessprofileentitlementv2) SetPrivilegeLevel(v AccessProfileEntitlementPrivilegeLevel)`

SetPrivilegeLevel sets PrivilegeLevel field to given value.

### HasPrivilegeLevel

`func (o *Accessprofileentitlementv2) HasPrivilegeLevel() bool`

HasPrivilegeLevel returns a boolean if a field has been set.



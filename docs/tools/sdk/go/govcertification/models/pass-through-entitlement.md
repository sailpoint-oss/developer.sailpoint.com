# PassThroughEntitlement

# PassThroughEntitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The id for the entitlement | [optional] 
**Name** | Pointer to **string** | The name of the entitlement | [optional] 
**Created** | Pointer to **SailPointTime** | Time when the entitlement was created | [optional] 
**Modified** | Pointer to **SailPointTime** | Time when the entitlement was last modified | [optional] 
**Attribute** | Pointer to **string** | The entitlement attribute name | [optional] 
**Value** | Pointer to **string** | The value of the entitlement | [optional] 
**SourceSchemaObjectType** | Pointer to **string** | The schema object type on the source used to represent the entitlement and its attributes | [optional] 
**Privileged** | Pointer to **bool** | Deprecated. Replaced by effectivePrivilege (HIGH, MEDIUM, LOW, NONE). Indicates if the entitlement is a privileged entitlement. Retained for backward compatibility. | [optional] [default to false]
**CloudGoverned** | Pointer to **bool** | Indicates if the entitlement is cloud governed | [optional] [default to false]
**Description** | Pointer to **string** | Information about the entitlement | [optional] 
**Requestable** | Pointer to **bool** | Indicates if the entitlement is requestable | [optional] [default to false]
**Attributes** | Pointer to **map[string]interface\{\}** | A map of free-form key-value pairs from the source system | [optional] 
**Source** | Pointer to [**SourceReferenceDTO**](source-reference-dto) |  | [optional] 
**Owner** | Pointer to [**OwnerReferenceDTO**](owner-reference-dto) |  | [optional] 
**DirectPermissions** | Pointer to [**[]PermissionDTO**](permission-dto) |  | [optional] 
**Segments** | Pointer to **[]string** | List of IDs of segments, if any, to which this Entitlement is assigned. | [optional] 
**ManuallyUpdatedFields** | Pointer to [**ManuallyUpdatedFieldsDTO**](manually-updated-fields-dto) |  | [optional] 
**ContainsDataAccess** | Pointer to **bool** | True if the entitlement has DAS data | [optional] [default to false]
**DataAccess** | Pointer to [**DataAccess2**](data-access2) |  | [optional] 

## Methods

### NewPassThroughEntitlement

`func NewPassThroughEntitlement() *PassThroughEntitlement`

NewPassThroughEntitlement instantiates a new PassThroughEntitlement object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPassThroughEntitlementWithDefaults

`func NewPassThroughEntitlementWithDefaults() *PassThroughEntitlement`

NewPassThroughEntitlementWithDefaults instantiates a new PassThroughEntitlement object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *PassThroughEntitlement) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *PassThroughEntitlement) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *PassThroughEntitlement) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *PassThroughEntitlement) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *PassThroughEntitlement) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PassThroughEntitlement) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PassThroughEntitlement) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PassThroughEntitlement) HasName() bool`

HasName returns a boolean if a field has been set.

### GetCreated

`func (o *PassThroughEntitlement) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *PassThroughEntitlement) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *PassThroughEntitlement) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *PassThroughEntitlement) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *PassThroughEntitlement) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *PassThroughEntitlement) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *PassThroughEntitlement) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *PassThroughEntitlement) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetAttribute

`func (o *PassThroughEntitlement) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *PassThroughEntitlement) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *PassThroughEntitlement) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.

### HasAttribute

`func (o *PassThroughEntitlement) HasAttribute() bool`

HasAttribute returns a boolean if a field has been set.

### GetValue

`func (o *PassThroughEntitlement) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *PassThroughEntitlement) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *PassThroughEntitlement) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *PassThroughEntitlement) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetSourceSchemaObjectType

`func (o *PassThroughEntitlement) GetSourceSchemaObjectType() string`

GetSourceSchemaObjectType returns the SourceSchemaObjectType field if non-nil, zero value otherwise.

### GetSourceSchemaObjectTypeOk

`func (o *PassThroughEntitlement) GetSourceSchemaObjectTypeOk() (*string, bool)`

GetSourceSchemaObjectTypeOk returns a tuple with the SourceSchemaObjectType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceSchemaObjectType

`func (o *PassThroughEntitlement) SetSourceSchemaObjectType(v string)`

SetSourceSchemaObjectType sets SourceSchemaObjectType field to given value.

### HasSourceSchemaObjectType

`func (o *PassThroughEntitlement) HasSourceSchemaObjectType() bool`

HasSourceSchemaObjectType returns a boolean if a field has been set.

### GetPrivileged

`func (o *PassThroughEntitlement) GetPrivileged() bool`

GetPrivileged returns the Privileged field if non-nil, zero value otherwise.

### GetPrivilegedOk

`func (o *PassThroughEntitlement) GetPrivilegedOk() (*bool, bool)`

GetPrivilegedOk returns a tuple with the Privileged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivileged

`func (o *PassThroughEntitlement) SetPrivileged(v bool)`

SetPrivileged sets Privileged field to given value.

### HasPrivileged

`func (o *PassThroughEntitlement) HasPrivileged() bool`

HasPrivileged returns a boolean if a field has been set.

### GetCloudGoverned

`func (o *PassThroughEntitlement) GetCloudGoverned() bool`

GetCloudGoverned returns the CloudGoverned field if non-nil, zero value otherwise.

### GetCloudGovernedOk

`func (o *PassThroughEntitlement) GetCloudGovernedOk() (*bool, bool)`

GetCloudGovernedOk returns a tuple with the CloudGoverned field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudGoverned

`func (o *PassThroughEntitlement) SetCloudGoverned(v bool)`

SetCloudGoverned sets CloudGoverned field to given value.

### HasCloudGoverned

`func (o *PassThroughEntitlement) HasCloudGoverned() bool`

HasCloudGoverned returns a boolean if a field has been set.

### GetDescription

`func (o *PassThroughEntitlement) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *PassThroughEntitlement) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *PassThroughEntitlement) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *PassThroughEntitlement) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetRequestable

`func (o *PassThroughEntitlement) GetRequestable() bool`

GetRequestable returns the Requestable field if non-nil, zero value otherwise.

### GetRequestableOk

`func (o *PassThroughEntitlement) GetRequestableOk() (*bool, bool)`

GetRequestableOk returns a tuple with the Requestable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestable

`func (o *PassThroughEntitlement) SetRequestable(v bool)`

SetRequestable sets Requestable field to given value.

### HasRequestable

`func (o *PassThroughEntitlement) HasRequestable() bool`

HasRequestable returns a boolean if a field has been set.

### GetAttributes

`func (o *PassThroughEntitlement) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *PassThroughEntitlement) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *PassThroughEntitlement) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *PassThroughEntitlement) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetSource

`func (o *PassThroughEntitlement) GetSource() SourceReferenceDTO`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *PassThroughEntitlement) GetSourceOk() (*SourceReferenceDTO, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *PassThroughEntitlement) SetSource(v SourceReferenceDTO)`

SetSource sets Source field to given value.

### HasSource

`func (o *PassThroughEntitlement) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetOwner

`func (o *PassThroughEntitlement) GetOwner() OwnerReferenceDTO`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *PassThroughEntitlement) GetOwnerOk() (*OwnerReferenceDTO, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *PassThroughEntitlement) SetOwner(v OwnerReferenceDTO)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *PassThroughEntitlement) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetDirectPermissions

`func (o *PassThroughEntitlement) GetDirectPermissions() []PermissionDTO`

GetDirectPermissions returns the DirectPermissions field if non-nil, zero value otherwise.

### GetDirectPermissionsOk

`func (o *PassThroughEntitlement) GetDirectPermissionsOk() (*[]PermissionDTO, bool)`

GetDirectPermissionsOk returns a tuple with the DirectPermissions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDirectPermissions

`func (o *PassThroughEntitlement) SetDirectPermissions(v []PermissionDTO)`

SetDirectPermissions sets DirectPermissions field to given value.

### HasDirectPermissions

`func (o *PassThroughEntitlement) HasDirectPermissions() bool`

HasDirectPermissions returns a boolean if a field has been set.

### GetSegments

`func (o *PassThroughEntitlement) GetSegments() []string`

GetSegments returns the Segments field if non-nil, zero value otherwise.

### GetSegmentsOk

`func (o *PassThroughEntitlement) GetSegmentsOk() (*[]string, bool)`

GetSegmentsOk returns a tuple with the Segments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSegments

`func (o *PassThroughEntitlement) SetSegments(v []string)`

SetSegments sets Segments field to given value.

### HasSegments

`func (o *PassThroughEntitlement) HasSegments() bool`

HasSegments returns a boolean if a field has been set.

### GetManuallyUpdatedFields

`func (o *PassThroughEntitlement) GetManuallyUpdatedFields() ManuallyUpdatedFieldsDTO`

GetManuallyUpdatedFields returns the ManuallyUpdatedFields field if non-nil, zero value otherwise.

### GetManuallyUpdatedFieldsOk

`func (o *PassThroughEntitlement) GetManuallyUpdatedFieldsOk() (*ManuallyUpdatedFieldsDTO, bool)`

GetManuallyUpdatedFieldsOk returns a tuple with the ManuallyUpdatedFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManuallyUpdatedFields

`func (o *PassThroughEntitlement) SetManuallyUpdatedFields(v ManuallyUpdatedFieldsDTO)`

SetManuallyUpdatedFields sets ManuallyUpdatedFields field to given value.

### HasManuallyUpdatedFields

`func (o *PassThroughEntitlement) HasManuallyUpdatedFields() bool`

HasManuallyUpdatedFields returns a boolean if a field has been set.

### GetContainsDataAccess

`func (o *PassThroughEntitlement) GetContainsDataAccess() bool`

GetContainsDataAccess returns the ContainsDataAccess field if non-nil, zero value otherwise.

### GetContainsDataAccessOk

`func (o *PassThroughEntitlement) GetContainsDataAccessOk() (*bool, bool)`

GetContainsDataAccessOk returns a tuple with the ContainsDataAccess field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContainsDataAccess

`func (o *PassThroughEntitlement) SetContainsDataAccess(v bool)`

SetContainsDataAccess sets ContainsDataAccess field to given value.

### HasContainsDataAccess

`func (o *PassThroughEntitlement) HasContainsDataAccess() bool`

HasContainsDataAccess returns a boolean if a field has been set.

### GetDataAccess

`func (o *PassThroughEntitlement) GetDataAccess() DataAccess2`

GetDataAccess returns the DataAccess field if non-nil, zero value otherwise.

### GetDataAccessOk

`func (o *PassThroughEntitlement) GetDataAccessOk() (*DataAccess2, bool)`

GetDataAccessOk returns a tuple with the DataAccess field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataAccess

`func (o *PassThroughEntitlement) SetDataAccess(v DataAccess2)`

SetDataAccess sets DataAccess field to given value.

### HasDataAccess

`func (o *PassThroughEntitlement) HasDataAccess() bool`

HasDataAccess returns a boolean if a field has been set.


